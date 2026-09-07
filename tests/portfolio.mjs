import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const browser = await chromium.launch({
  ...(process.env.BROWSER_EXECUTABLE ? { executablePath: process.env.BROWSER_EXECUTABLE } : {}),
  args: ["--no-sandbox"],
});
const baseURL = process.env.TEST_BASE_URL || "http://127.0.0.1:3000";
const failures = [];
let desktopContent;
await mkdir("test-results", { recursive: true });

try {
  for (const width of [1920, 1440, 1024, 820, 768, 640, 639, 480, 414, 390, 375, 320]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: "reduce" });
    const page = await context.newPage();
    page.on("pageerror", error => failures.push(error.message));
    const response = await page.goto(baseURL, { waitUntil: "networkidle" });
    assert.equal(response.status(), 200);
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator("main > section").count(), 8);
    assert.equal(await page.locator("h1").count(), 1);
    assert.equal(await page.locator(".portrait-frame img").count(), 2);
    for (const portrait of await page.locator(".portrait-frame img").all()) {
      assert.ok(await portrait.isVisible(), `Portrait must remain visible at ${width}px`);
      await portrait.scrollIntoViewIfNeeded();
      await portrait.evaluate(image => image.decode());
    }
    const visibleContent = (await page.locator("main").innerText()).replace(/\s+/g, "");
    desktopContent ??= visibleContent;
    assert.equal(visibleContent, desktopContent, `All desktop content must remain visible at ${width}px`);
    const clippedContent = await page.locator("h1, h2, h3, .project-card, .skill-group, .timeline-content, .contact-card").evaluateAll(elements => elements.filter(element => element.scrollWidth > element.clientWidth + 1).map(element => element.className || element.tagName));
    assert.deepEqual(clippedContent, [], `Content must not clip at ${width}px`);
    assert.equal(await page.locator(".project-card").count(), 6);
    assert.equal(await page.locator(".cert-row.pursuing").count(), 2);
    assert.equal(await page.locator("nav").count(), 0, "PRD excludes a navbar");
    assert.equal(await page.locator("a[href='https://github.com/alysajad']").count(), 2);
    assert.equal(await page.locator("a[href='mailto:huxi1314k@gmail.com']").count(), 2);
    assert.equal(await page.locator("a[href='tel:+919103321565']").count(), 2);
    assert.equal(await page.locator(".project-link").count(), 2);
    const layout = await page.evaluate(() => ({ viewport: innerWidth, content: document.documentElement.scrollWidth }));
    assert.ok(layout.content <= layout.viewport, `Horizontal overflow at ${width}px: ${JSON.stringify(layout)}`);
    const brokenAnchors = await page.locator("a[href^='#']").evaluateAll(links => links.map(link => link.getAttribute("href")).filter(href => !document.getElementById(href.slice(1))));
    assert.deepEqual(brokenAnchors, []);
    for (const target of ["utrust", "siem", "bug-bounty", "makeaton"]) {
      await page.locator(`.capability-card[href='#${target}']`).click();
      await page.waitForURL(`**/#${target}`);
      const top = await page.locator(`#${target}`).evaluate(element => element.getBoundingClientRect().top);
      assert.ok(top >= 0 && top < 120, `Capability link should scroll to ${target}, got ${top}`);
    }
    await page.locator("footer a").click();
    await page.waitForURL("**/#hero");
    await page.screenshot({ path: `test-results/hero-${width}.png` });
    await page.screenshot({ path: `test-results/portfolio-${width}.png`, fullPage: true });
    const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    if (accessibility.violations.length) failures.push({ width, accessibility: accessibility.violations.map(({ id, nodes }) => ({ id, nodes: nodes.map(({ target, failureSummary }) => ({ target, failureSummary })) })) });
    assert.equal(await page.locator(".first-line").evaluate(element => getComputedStyle(element).animationName), "none");
    console.log(`${width}px: sections, projects, navigation, contact links, overflow, and reduced motion checked`);
    await context.close();
  }
  const noJsPage = await browser.newPage({ javaScriptEnabled: false });
  await noJsPage.goto(baseURL);
  assert.equal(await noJsPage.locator(".project-card").count(), 6);
  assert.ok(await noJsPage.locator("#projects-title").isVisible(), "Content remains visible without JavaScript");
  await noJsPage.close();
  const keyboardPage = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  keyboardPage.on("pageerror", error => failures.push(error.message));
  await keyboardPage.goto(baseURL, { waitUntil: "networkidle" });
  await keyboardPage.keyboard.press("Tab");
  assert.equal(await keyboardPage.locator(":focus").textContent(), "Skip to portfolio content");
  await keyboardPage.keyboard.press("Enter");
  await keyboardPage.waitForURL("**/#about");
  assert.equal(await keyboardPage.locator(".first-line").evaluate(element => getComputedStyle(element).animationName), "word-enter");
  await keyboardPage.close();
  if (failures.length) throw new Error(JSON.stringify(failures, null, 2));
  console.log("Passed. No accessibility violations or browser errors; content also works without JavaScript.");
} finally {
  await browser.close();
}
