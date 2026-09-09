import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { BLOCK_HIT, COINS, LAP_SECONDS, coinTime, gameFrame } from '../app/footer-game.mjs';

assert.equal(gameFrame(0).score, 0);
assert.equal(gameFrame(BLOCK_HIT - .01).powered, false);
assert.equal(gameFrame(BLOCK_HIT).score, 1000);
assert.equal(220 - gameFrame(BLOCK_HIT).jump - 72, 104, 'Hat hits the underside of the block');
assert.equal(gameFrame(3).scale, 1.45);
for (const [index, coin] of COINS.entries()) {
  const contact = coinTime(coin.x);
  assert.equal(gameFrame(contact - .001).coins, index);
  const state = gameFrame(contact);
  assert.equal(state.coins, index + 1);
  assert.equal(state.score, 1000 + (index + 1) * 100);
  const feet = 220 - state.jump;
  assert.ok(coin.y <= feet && coin.y >= feet - 72 * state.scale, 'Coin overlaps Mario when collected');
}
for (let seconds = 3.45; seconds <= 4.3; seconds += .02) {
  const state = gameFrame(seconds);
  const pipeLeft = 541 - state.offset;
  if (pipeLeft < 130 && pipeLeft + 48 > 70) assert.ok(220 - state.jump < 170, 'Mario clears the pipe');
}
assert.equal(gameFrame(LAP_SECONDS).coins, 4);
assert.equal(gameFrame(LAP_SECONDS).scale, 1.45);
assert.equal(gameFrame(LAP_SECONDS * 10).score, 5000);
console.log('Contact, growth, coin scoring, pipe clearance, and endless laps passed.');

const browser = await chromium.launch({ executablePath: process.env.BROWSER_EXECUTABLE || '/usr/bin/chromium-browser', args: ['--no-sandbox'] });
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'no-preference' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(process.env.TEST_BASE_URL || 'http://localhost:3000', { waitUntil: 'networkidle' });
    assert.equal(await page.locator('[data-score]').getAttribute('data-score'), '0', 'Starts at zero before footer is visible');
    await page.locator('footer').evaluate(element => { document.documentElement.style.scrollBehavior = 'auto'; element.scrollIntoView(); });
    await page.waitForFunction(() => document.querySelector('.doodle-footer').dataset.powered === 'true');
    assert.equal(await page.locator('.doodle-question-block').first().getAttribute('data-used'), 'true');
    await page.waitForFunction(() => Number(document.querySelector('[data-score]').dataset.score) >= 1300);
    await page.getByRole('button', { name: 'Pause footer animation', exact: true }).click();
    await page.waitForFunction(() => document.querySelector('.doodle-footer').dataset.paused === 'true');
    const score = await page.locator('[data-score]').getAttribute('data-score');
    const transform = await page.locator('.doodle-world').getAttribute('style');
    await page.waitForTimeout(200);
    assert.equal(await page.locator('[data-score]').getAttribute('data-score'), score);
    assert.equal(await page.locator('.doodle-world').getAttribute('style'), transform);
    assert.equal(await page.locator('.doodle-runner').getAttribute('data-scale'), '1.45');
    await page.mouse.move(0, 0);
    await page.locator('footer').screenshot({ path: `test-results/mario-powered-${width}.png` });
    await page.getByRole('button', { name: 'Resume footer animation', exact: true }).click();
    await page.waitForFunction(previous => document.querySelector('.doodle-world').getAttribute('style') !== previous, transform);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.waitForTimeout(100);
    const reduced = await page.locator('.doodle-world').getAttribute('style');
    await page.waitForTimeout(150);
    assert.equal(await page.locator('.doodle-world').getAttribute('style'), reduced);
    await page.reload({ waitUntil: 'networkidle' });
    assert.equal(await page.locator('[data-score]').getAttribute('data-score'), '0', 'Refresh resets score');
    assert.equal(await page.locator('.doodle-runner').getAttribute('data-scale'), '1');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    assert.deepEqual(errors, []);
    await page.close();
    console.log(`${width}px: collection, growth, pause, reduced motion, refresh, and layout passed.`);
  }
} finally { await browser.close(); }
