# EventHex Landing — Phase-wise Execution Plan

Build tracker derived from `LANDING_GAP_PLAN.md`. Implement top-down. Each task: file(s) + done-when. `[ ]` = todo, `[x]` = done, `[~]` = in progress, `[!]` = blocked on a decision.

Dependency note: Phases 1–2 need no business decisions and touch no new content pages — start here. Phase 3 onward needs the decisions in `LANDING_GAP_PLAN.md` §6.5 (pricing transparency, competitor naming, case-study permission, free-trial path, localization scope).

---

## PHASE 1 — Consistency & discoverability quick wins  ← CURRENT

No new pages, no decisions, low risk. Makes the site internally consistent and fixes the flagship-feature messaging.

- [x] **1.1 Naming: homepage feature grid** — `components/home-new/FeaturesSection.astro`. Rename cards to canonical names (links/images unchanged):
  - Event Builder → **Event Website Builder**
  - Attendee App → **Event Mobile App**
  - AI-Photo Distributor → **AI Photo Gallery**
  - Smart Analytics → **Event Analytics**
  - AI Note Maker → **AI Session Recap**
  - Attendee Retargeting → **Event Marketing**
  - Instant Feedback → **Live Polling & Q&A**
  - *Done when:* every card label matches the title of the page it links to.
- [x] **1.2 Naming + links: AI section** — `components/home-new/AISection.astro`. Rename cards AND point "Explore More" at the real feature pages (currently all → `/book-a-demo/`):
  - AI Website Builder → link `/event-website-builder/`
  - AI Voice Form → **AI Form Builder**, link `/ai-form-builder/`
  - InstaSnap AI → **AI Photo Gallery**, link `/ai-photo-gallery/`
  - AI Bot → **AI Event Copilot**, link `/ai-event-copilot/`
  - AI Smart-Connect Networking → **AI Smart-Connect**, link `/enhance-networking-ai-smart-connect/`
- [x] **1.3 Copilot label** — `components/home-new/HeaderNew.astro`. Replace mega-menu desc "4 AI agents run your event ops" with current unified-copilot wording (verify exact claim with product before publishing).
- [x] **1.4 Hero secondary CTA** — `components/home-new/HeroNew.astro`. Add a secondary button next to "Request a demo" (e.g. "Explore features" → `/features/`). Keep demo primary.
- [x] **1.5 Use-Cases in nav** — `components/home-new/HeaderNew.astro`. Add top-level "Use Cases" → `/use-cases/` (index exists). Dropdown can come later.

## PHASE 2 — SEO infrastructure hardening

No decisions needed (except confirming the external CMS setting).

- [x] **2.1 Auto-generate sitemap** from `src/pages` glob — `pages/sitemap-pages.xml.ts`. Removes the manual-list risk before new pages land. (Verified live: 140 URLs; matches GSC submitted=140.)
- [x] **2.2 Confirm CMS noindex** — DONE. Verified over HTTP 2026-06-27: `cms.eventhex.ai` home, blog posts, and feature pages all serve `<meta name="robots" content="nofollow, noindex">`. robots.txt allows crawl (only `/wp-admin/` disallowed) — correct, so Google crawls and honours the noindex. The old "CMS indexable" P0 is no longer a risk.
- [ ] **2.3 Asset migration (start)** — move hot-linked `cms.eventhex.ai/wp-content/...` images (hero bg, feature SVGs, logos, avatars) into `/public/`. Biggest perf + reliability win.
- [ ] **2.4 Fonts** — self-host Inter/Manrope or async-load. CWV/LCP.
- [ ] **2.5 Per-page OG image scaffold** — default branded OG + per-page override in `MarketingLayout`.

### Phase 2 — GSC-driven tasks (added after live data pull, 28d to 2026-06-24)

Site totals: 379 clicks · 119,850 impressions · **CTR 0.32%** · avg pos 8.6. Sitewide CTR is the dominant problem.

- [x] **2.6 Fix the `instasnap` / `/ai-photo-gallery/` CTR sink** — DONE. Diagnosis confirmed: "instasnap" (old product nickname) collided with a consumer app brand → 58,871 impressions almost all on "instasnap" + ~50 misspellings, geo India/Indonesia/Tanzania (not ICP), Clarity 40% bounce / 14.6s active time. **Decision: de-target.** Removed "InstaSnap" from title, meta description, schema name, FAQ, section headings, img alt, and body across `pages/ai-photo-gallery.astro` + 7 components (kept H1/badge; left only the `Instasnap.png` asset filename). New title: "AI Event Photo Gallery — Face-Match Photo Delivery | EventHex". Build passes. **After deploy:** submit `/ai-photo-gallery/` for recrawl (`gscserver submit_url`) and re-pull in ~2-3 weeks — expect junk impressions to fade and sitewide CTR to recover.
- [ ] **2.7 Title/meta CTR pass on zero-click page-1 queries** — pages ranking pos 4-15 with ~0 clicks: speaker-management ("ai event speaker platform" 140im p5.3), enhance-networking ("ai event matchmaking" 195im p13), badge-certificate ("automatic certificate generator" 60im; "best badge printing software for trade shows" 110im p7.3). Rewrite titles/descriptions for clickability.
- [ ] **2.8 Build "best … 2026" listicle/comparison pages (data-backed)** — "best event management platforms/software 2026", "best event networking platforms 2025 2026", "best event sales software 2025 2026" already earn impressions at pos 4-13 with zero clicks and no page. = Phase 3.3 / migration audit's `best-event-management-software` + `best-conference-apps`. GSC justifies pulling these forward.
- [ ] **2.9 Re-pull GSC after each batch** — direct API puller at `scratchpad/gsc.sh` (service-account, no MCP restart needed); or `gscserver` MCP tools after a Claude restart.

## PHASE 3 — Conversion pages  (needs decisions §6.5)

- [!] **3.1 Pricing** `/pricing/` — bespoke layout; sync tiers with product subscription plans. Needs pricing-transparency decision.
- [!] **3.2 Customers / case studies** `/customers/` + `/case-studies/[slug]/` — seed from the 3 existing testimonials. Needs client permission.
- [!] **3.3 Comparisons** — build 9 (`/compare/eventhex-vs-*`), prioritise Cvent, Bizzabo, Whova. Needs competitor-naming decision.

## PHASE 4 — Flagship feature pages (reuse `FeatureV2Layout`)

- [ ] **4.1 Virtual & Hybrid Events** `/virtual-hybrid-events/` — Zoom/Meet/Teams bot, RTMP, live captions/translation.
- [ ] **4.2 WhatsApp Event Concierge** `/whatsapp-event-concierge/` — bot + WhatsApp Flows.
- [ ] **4.3 White-Label / Franchise** `/white-label/` (or expand `/partnership/`).
- [ ] **4.4 AI Copilot rewrite** `/ai-event-copilot/` + **AI hub** `/ai-platform/`.
- [ ] **4.5 Appointments & Meetings** `/appointments-meetings/`.
- [ ] **4.6 Social Advocacy** `/social-advocacy/`.
- [ ] **4.7 Invoicing & GST** `/invoicing-gst/` (or section on payments page).

## PHASE 5 — Platform / trust pages + enhancements

- [ ] **5.1 CRM Integrations** `/crm-integrations/` (HubSpot-led).
- [ ] **5.2 Developer / API** `/developers/`.
- [!] **5.3 Security & Compliance** `/security/` — claim only what's true.
- [!] **5.4 Localization** `/localization/` — needs localization-scope decision.
- [ ] **5.5 Portals hub** `/portals/` (exhibitor/reviewer/AV/speaker/sponsor).
- [ ] **5.6 Footer restructure** — `components/home-new/FooterNew.astro` (Product / AI Suite / Solutions / Resources / Company / Legal).
- [ ] **5.7 Enhance existing pages** — face-match check-in, AI CSV import, LinkedIn speaker import, AI website generation, audience insights (per §3.1).

## PHASE 6 — Programmatic SEO at scale

- [ ] **6.1 Glossary (54)** — one template, 54 entries.
- [ ] **6.2 Location pages (7)** — Dubai, Abu Dhabi, Riyadh, Doha, London, Singapore, Mumbai.
- [ ] **6.3 Integrations expansion** — WhatsApp bot, Zoom, Meet, Teams, Firebase, MailerCloud, LinkedIn, Google Calendar, YouTube, Maps.
- [ ] **6.4 Submit refreshed sitemap** to Search Console after each batch.

---

**Status:** Phase 1 complete (build passes). Phase 2 next.
