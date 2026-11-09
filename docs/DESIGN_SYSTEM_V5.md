# EventHex design system v5 and the site migration

The approved Event Registration v5 design (canvas "Core Management Page Redesigns", boards "brand rework v5") is the pattern for the whole marketing site. This doc is the contract every migration package follows.

## Rules

1. **Copy never changes.** Headings, body text, links, image alts, FAQ and schema stay exactly as they are on the live page. Only the design changes.
2. **No hard-coded values.** Page and component CSS uses the tokens and classes in `src/styles/ds.css`. A converted file has 0 raw hex values (`node scripts/ds/hex-report.mjs <file>`).
3. **Screenshots keep their treatment.** Flat frame (`.ds-shot` / `.ds-browser`), thin border, soft shadow. No 3D tilt, nothing overlapping a hero screen, no "sticker" chips over screenshots.
4. **Gradients are a system, not decoration.**
   - Text gradient only on the key phrase of an H1/H2: `.ds-hl` on light, `.ds-hl-dark` on dark. H3s, numbers, buttons and body text stay solid.
   - Brand band (`.ds-band`): deep indigo surface, white text only.
   - Colour stage (`.ds-stage`): soft blue/violet/pink light. Only behind glass panels, never directly behind body text.
5. **Glass sits on colour.** `.ds-glass` panels go on a `.ds-stage`; `.ds-glass-dark` on a `.ds-night` section. Use a few dark sections per page for rhythm.
6. **Buttons:** `.ds-btn` (primary), `.ds-btn--ghost`, `.ds-btn--light` (on dark). Weight 500.

## Building blocks

| Need | Use |
|---|---|
| Headings | `.ds-h1` `.ds-h2` `.ds-h3` (`.ds-h3--sm`), or `<Heading level text highlight dark>` from `src/components/ds/Heading.astro` |
| Text | `.ds-lead` `.ds-body` `.ds-small` `.ds-eyebrow` `.ds-num` |
| Sections | `.ds-container` `.ds-section`, surfaces `.ds-stage` `.ds-night` `.ds-band` |
| Cards | `.ds-glass` `.ds-glass-dark` `.ds-card` |
| Screenshots | `.ds-shot` `.ds-browser` (+ `.ds-browser__bar`), or `<Shot browser height position>` from `src/components/ds/Shot.astro` |
| Tokens | `--ds-*` custom properties (colour, gradient, glass, shadow, radius, type scale, layout) |

## Checks for every package

```
node scripts/ds/content-guard.mjs /page-path/ --local http://localhost:<port>   # must print ok for headings, links, image alts, body text
node scripts/ds/hex-report.mjs <file>                                            # must be 0 for converted files
node scripts/ds/tokenize.mjs <file...> [--write]                                 # maps brand/neutral hex to tokens, lists the rest
node scripts/ds/grey-fade.mjs <file...>                                          # replaces legacy ink-to-grey heading fades with solid ink
node --test test/*.test.ts
```
Then a desktop and a 390px mobile screenshot check.

## Packages

| # | Package | Status |
|---|---|---|
| 0 | Foundation: `ds.css`, Heading/Shot components, content guard, hex report | done (feat/design-system-v5) |
| 1 | Pilot: `/event-registration/` on the system | done (feat/design-system-v5) |
| 2 | Site chrome: header, footer CTA, footer, sticky demo bar, cookie consent, WhatsApp widget on tokens | done (feat/design-system-v5) |
| 3 | Templates: `FeatureEventTypePage` (60 sub-pages), `UseCaseLayout` (12), use-cases hub, blog/news editorial, glossary, customers, case studies, `FeatureV2Layout` (12: cities, CRM, localization, security, portals, developers), city template | done (feat/design-system-v5) |
| 4a | Core Management feature pages (ticketing, check-in, badge printing, payments, virtual & hybrid, invoicing, white-label, dashboard) | done (feat/design-system-v5) |
| 4b | Speakers & Content (speaker management, session management, call for papers) | done (feat/design-system-v5) |
| 4c | AI Features (AI platform, copilot, smart-connect, photo gallery, session recap, form builder) | done (feat/design-system-v5) |
| 4d | Marketing & Growth (event marketing, WhatsApp concierge, social advocacy, notifications, sponsors, exhibitors) | done (feat/design-system-v5) |
| 4e | Engagement (live polling & Q&A, gamification, mobile app, appointments & meetings) | done (feat/design-system-v5) |
| 4f | Design & Analytics (event analytics, badge builder, certificate builder, website builder) and home | done (feat/design-system-v5) |
| 5 | Remaining feature pages: import graph showed all feature pages already converted in 4a–4f and package 3; left were `/features/` hub, footer CTA gradient, 2 certificate-builder values | done (feat/design-system-v5) |
| 6 | Industries (16) | |
| 7 | Integrations (20) + compare (11): one template each, then convert | |
| 8 | About, contact, legal, book-a-demo | |
| 9 | QA: visual pass, mobile speed (glass blur), SEO check | |

Start point on 2026-11-07: 20,283 raw hex values in 333 files.
