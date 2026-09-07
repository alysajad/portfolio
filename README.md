# Sajad Hussain Malla — Portfolio

An eight-section portfolio based on `PRD_Sajad_Hussain_Portfolio.md`, `resume.pdf`, and the supplied Randy Fahmi reference. Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Node.js 20.9 or later is required.

## Verify and build

```sh
npm run typecheck
npm run build
npm start
```

With the site running, run `npm test` for browser checks at mobile, tablet, and desktop widths. The tests check section navigation, contact and project URLs, overflow, browser errors, accessibility, and reduced motion. Install a browser with `npx playwright install chromium` if needed; set `BROWSER_EXECUTABLE` to use an existing Chromium binary. `TEST_BASE_URL` defaults to http://localhost:3000.

The layout keeps both portraits and all desktop content visible on phones. The hero uses a compact two-column composition, while longer sections reflow into readable grids or a single column. Responsive checks cover 320px through 1920px, including the 414px iPhone XR viewport and both sides of the 640px breakpoint. They compare visible content with desktop and check for clipped content as well as horizontal page overflow.

## Content and design

- `app/content.ts`: contact links, project descriptions, skills, experience, and certificates.
- `app/page.tsx`: the eight sections, biography, education, and portrait.
- `app/globals.css`: palette, editorial layout, responsive rules, and reduced-motion support.
- `app/scroll-experience.tsx`: current section, next-section shortcut, and motion toggle.
- `app/layout.tsx`: self-hosted Google fonts, page metadata, and canonical domain.

Next.js 16 replaces the PRD's unsupported Next.js 14 recommendation. Fonts are downloaded at build time by `next/font` and served locally to visitors. The first build needs access to Google Fonts.

For readable contrast within the exact six-color palette, ribbon text, project numbers, and the award count use charcoal. Project numbers and the award count retain amber underlines. Decorative project numbers are hidden from assistive technology; portraits have descriptive alternative text.

The portrait in `public/images/sajad-portrait.png` is an imagegen edit of the supplied `mmmm.jpeg`, with a black-and-white subject over a grey-and-amber background matching the visual reference. It replaces the initial SH monograms in the hero and About sections. Next.js serves appropriately sized optimized versions. The original photo is unchanged. See `docs/portrait-edit.md` for the editing prompt and provenance. Project and profile URLs were extracted from the PDF; projects without supplied public URLs are presented without fabricated links. DataBot and additional community experience come from the PRD.

The site has no contact-form service: email and phone links open the visitor's mail and phone apps. There are no secrets or backend services to configure.

Scroll animations use native CSS view timelines: the hero layers move at different speeds, cards enter in a staggered sequence, and the experience timeline fills as it passes through the viewport. Scrolling backwards reverses the effects. Browsers without view timelines show the static layout. The reading controls use IntersectionObserver for the current section. The pause button disables animation and smooth scrolling for the current page session; the device’s reduced-motion preference takes priority. Content remains visible without JavaScript. Browser checks also exercise scrolling in both directions, chapter links, the motion toggle, and changes to the device preference.

## Deploy

Import this folder's repository into Vercel and select the Next.js preset. Use `npm run build` as the build command. Before publishing to a different domain, update the URLs in `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, and `app/content.ts`.
# portfolio
