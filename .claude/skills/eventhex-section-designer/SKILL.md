---
name: eventhex-section-designer
description: Pick and build the right section design for EventHex marketing pages from supplied content (content deck, copy, page preview). Use when revamping or building a feature, industry, or hub page in this Astro site and the content must be mapped to existing reference designs (event-registration / erg-* styles, speaker-management).
---

# EventHex section designer

Turn content into page sections by reusing designs that already ship. Never invent a new visual language.

## Inputs
- Content source: deck/copy file(s) and/or page preview HTML. Read the copy, not the preview CSS; the preview only shows intended section pattern and order.
- Target route under `src/pages/`.
- Design references: `src/pages/event-registration.astro` + `src/styles/erg-registration.css` (primary), `src/pages/speaker-management.astro` + `src/components/speaker-management/*`. A finished example using this skill: `src/pages/industries/index.astro`, and `src/pages/event-ticketing.astro`.

## Steps
1. List sections from the content. For each, write its job in one line (route, explain, compare, prove, answer, convert).
2. Pick a design with the table below. Prefer one pattern per job; vary adjacent sections.
3. Check claims: drop any claim the content marks unsupported (scale numbers, "free", "every industry", guaranteed outcomes). Trust-strip stats must be true.
4. Build. `import "../styles/erg-registration.css"` (or `../../` in subfolders) and wrap everything in `<div class="erg-registration-page-bg">`. Put page-only CSS in a scoped `<style>` with a page prefix (e.g. `ind-`).
5. Verify in preview: desktop + 375px, no server errors, no horizontal overflow, FAQ opens, dark band fades in.
6. Run the `eventhex-image-seo` skill on every image added.

## Job → design
| Job | Design (classes) | Notes |
|---|---|---|
| Opening | `erg-hero` (+ `__badge`, `__title`, `__desc`, `__cta-row`, `__trust`, `__visual`) | Visual card holds a product screenshot or small HTML illustration with `role="img"` + `aria-label`. One H1 only. |
| Proof strip | `erg-trust-strip` | Only verifiable stats. |
| Two paths / modes | `erg-flow-section` + `erg-flow-quad` with `erg-flow-composite` screenshots | 3 images per composite: primary, secondary, detail. |
| Feature grid (3-6 items) | `erg-dark-band` > `erg-heading` + `erg-grid-section` > `erg-cap` > `erg-cap__cell` | 6-col grid, cells `span 2`; use `style="grid-column: span 3"` for 2 cells. Visual slots: `__chips`, `__stack`, `__card`, `__langs`. Needs the band-bleed script (below). |
| Numbered rules with screenshots | `erg-access-redesign` + `erg-access-rcard` + `erg-access-product-shot` | Shot box is 280px, `object-fit: cover`; crop screenshots top-aligned. |
| Cards that link out (directory) | page-scoped `.xx-card` grid (flex-wrap, centered) | `erg-use-grid` is fixed 4 columns; do not use for 5 or 1 items. |
| Steps / use cases (4) | `erg-use-cases` > `erg-use-grid` > `erg-use-card` | Exactly 4 cards + 3 notch divs. |
| Questions | `erg-faq` + accordion script | One open at a time; schema must mirror visible text. |
| Close | `erg-dark-band` > `erg-dark-cta` | Set `showFooterCta={false}` on the layout when the page has its own. |

## Gotchas learned
- `.erg-flow-title` is `nowrap` at desktop; long headings overflow. Override with `white-space: normal; max-width: 900px` in scoped CSS.
- `animate-on-scroll` content stays invisible until scrolled; screenshot after a short wait.
- Band bleed: copy `initErgBandBleed` from `industries/index.astro` (handles multiple bands). Without it the dark band stays black.
- FAQ accordion script is copied per page (`.erg-faq__item`); copy from `event-ticketing.astro`.
- Heading accents: `erg-global-heading-gradient`, `erg-use-gradient-text`.
- Layout props: `title`, `description`, `canonical` (trailing slash), `ogImage`, `footerCta*`, `showFooterCta`.

## SEO checklist per page
Title ≤ 60 chars with `| EventHex`, meta description ≤ 160, canonical `https://eventhex.ai/<route>/`, single H1, JSON-LD (`SoftwareApplication` for features, `ItemList` for hubs, `FAQPage` when an FAQ exists), internal links with descriptive text (never bare "click here").
