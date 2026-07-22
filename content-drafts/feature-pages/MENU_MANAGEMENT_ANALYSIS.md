# EventHex Feature Pages — Menu Management Analysis

**Date:** 2026-07-15
**Scope:** Marketing site (eventhex-astro-frontend) navigation + feature-page inventory, gaps, proposed menu, and how to manage it.
**Purpose:** Groundwork BEFORE reworking individual feature pages. Decide what pages exist, what to create, which menu each belongs in, and how the menu is maintained.

---

## 1. How the menu works today

The entire marketing navigation is **hardcoded in one file**: `src/components/home-new/HeaderNew.astro`, as four plain arrays:

| Array | Drives | Items |
|-------|--------|-------|
| `navItems` | Top nav bar | Home, Features (mega), Integrations (mega), Industries (mega), Use Cases, Customers, Blog, Contact |
| `featureCategories` | Features mega-menu | 6 categories, 30 feature links |
| `integrationItems` | Integrations mega-menu | 9 shown (of 17 pages) |
| `industryItems` | Industries mega-menu | 15 industries |

**Implications:**
- Any menu change = a code edit + full site redeploy. No CMS/non-dev control.
- Each item carries an inline SVG `icon` path, `title`, `desc`, `url` — verbose, easy to break, duplicated icons across arrays.
- No notion of "new/badge", ordering weight, or enabled/disabled flags.
- The mega-menu and `features.astro` (the /features/ index page) maintain **two separate copies** of the same list → drift risk (already diverges slightly from home `FeaturesSection`).

**Recommendation (low effort, high leverage):** extract the three lists into a single `src/data/menu.ts` (typed) imported by both `HeaderNew.astro` and `features.astro`. One source of truth, adds `badge`/`order`/`isNew` fields, makes the eventual "drive from CMS" step trivial. Not urgent, but do it before adding the new pages below so we don't deepen the drift.

---

## 2. Current menu map (6 categories, 30 items — all have live pages)

| Category (color) | Items |
|---|---|
| **Core Management** `#2563EB` | Event Registration · Event Ticketing · Event Check-In · Payment Processing · Virtual & Hybrid Events · Invoicing & GST · White-Label & Franchise · Centralized Dashboard |
| **Speakers & Content** `#7C3AED` | Speaker Management · Session Management · Call for Papers |
| **AI Features** `#059669` | AI Platform · AI Event Copilot · AI Smart-Connect · AI Photo Gallery · AI Session Recap · AI Form Builder |
| **Marketing & Growth** `#DC2626` | Event Marketing · WhatsApp Concierge · Social Advocacy · Event Notifications · Sponsor Management · Exhibitor Management |
| **Engagement** `#D97706` | Live Polling & Q&A · Event Gamification · Event Mobile App · Appointments & Meetings |
| **Design & Analytics** `#0891B2` | Event Analytics · Badge & Certificate Designer · Event Website Builder |

Every menu link resolves to a real `.astro` page. No dead links in the feature mega-menu. ✅

**Orphan pages (exist, NOT in the feature mega-menu):**
- `partnership.astro` (567 lines, fairly built) — reachable only by direct URL. Decide: add to menu (Marketing & Growth, next to Sponsor/Exhibitor) or retire.
- `crm-integrations.astro` — belongs under Integrations, not the feature mega; confirm it's linked from the Integrations menu/index.

---

## 3. The real problem — page DEPTH is wildly inconsistent

Line count is a rough proxy for how built-out a page is. Two templates coexist:

| Tier | Lines | Pages |
|------|-------|-------|
| **Thin stub** | 65–82 | enhance-networking-ai-smart-connect, ai-event-copilot, event-payment-processing, badge-certificate-designer, call-for-papers, event-analytics, **event-check-in**, event-gamification, event-notifications, live-polling-qa, ai-photo-gallery, ai-session-recap, event-mobile-app, event-website-builder, speaker-management, event-marketing |
| **Fuller template** | 124–135 | **event-ticketing** (124), ai-platform, exhibitor-management, sponsor-management, virtual-hybrid-events, centralized-dashboard, crm-integrations, appointments-meetings, social-advocacy, white-label, invoicing-gst, whatsapp-event-concierge, ai-form-builder, **event-registration** (135) |
| **Rich / custom** | 567 / 2255 | partnership (567), **session-management (2255)** |

**Key takeaways:**
- `session-management.astro` is the **gold-standard design reference** — fully custom, rich sections. Use it as the visual template for reworked pages.
- The 3 pages the user wants next — **Registration (135), Ticketing (124), Check-In (71)** — are at *inconsistent* depth: Registration & Ticketing use the fuller template; **Check-In is a thin stub**. This is exactly why they feel uneven and is the right first batch to unify.
- `ai-photo-gallery` is a thin stub (72 lines) despite being the **#1 SEO traffic asset** (71k impressions/90d). High-priority rework candidate right after the first batch.

---

## 4. Coverage gaps — shipped features with NO (or wrong) page

Cross-referenced against the 2026-07 code sweep (`HOME_PAGE_CONTENT_REWORK.md` §6).

### 4.1 Create new pages

| New page | Why | Menu home |
|----------|-----|-----------|
| **Manage Events from ChatGPT & Claude** (Connector) | Flagship, category-first. Only `/developers/` touches it, and only technically. Strong first-mover SEO ("AI agent event management", "manage events from ChatGPT"). | New — see §5 (feature it, don't bury it) |
| **Attendee Web App** (no-install) | User-confirmed new product; distinct from the native `event-mobile-app`. | Engagement (beside Event Mobile App) |

### 4.2 Reframe existing pages (page exists, messaging is stale)

| Page | Change |
|------|--------|
| `ai-event-copilot` | Product moved to **one unified Copilot**. Re-message as a single assistant ("ask it anything"), drop the 4-agent framing in customer-facing copy. |
| `ai-session-recap` | Deepen: live meeting bots (Zoom/Meet/Teams), 4-language live translation, InstaRecap branding — currently a thin stub. |
| `event-check-in` | Remove false claims (facial-recognition check-in, kiosk, offline — NOT in product); feature the EventHex Scanner app. (In the first rework batch.) |

### 4.3 Do-NOT-create / do-not-claim (verified absent)
Facial-recognition check-in · self-service kiosk · offline check-in · selling photos to attendees · multi-currency ticket pricing · seat maps · native social auto-posting. (Full list: `HOME_PAGE_CONTENT_REWORK.md` §6.2.)

---

## 5. Proposed menu v2

Keep the 6 categories — they're sound — with three moves:

**Move 1 — Surface the flagships.** Add a highlighted lead row/column at the top of the Features mega-menu titled **"New on EventHex"** (green NEW chips), containing:
- Manage Events from ChatGPT & Claude *(new page)*
- WhatsApp Concierge *(exists)*
- Attendee Web App *(new page)*
- EventHex Copilot *(reframed)*

This mirrors the home-page "New on EventHex" stacked showcase → consistent story from nav to page.

**Move 2 — Tighten category names/order** (optional, low priority):
- `AI Features` → **`AI-Native`** (positions AI as the substrate, not a feature bucket).
- Keep Core Management first — it holds the highest-intent pages (Registration/Ticketing/Check-In).

**Move 3 — Resolve orphans:** add `partnership` to Marketing & Growth, or retire it. Confirm `crm-integrations` is linked from Integrations.

**Proposed Core Management order** (the connected journey, in sequence): Event Registration → Event Ticketing → Event Check-In → Payment Processing → Invoicing & GST → Virtual & Hybrid → Centralized Dashboard → White-Label & Franchise. Putting Registration → Ticketing → Check-In adjacent reinforces the "one connected flow" narrative the reworked pages will cross-link.

---

## 6. Sequenced plan

1. **(this pass)** Menu analysis — this doc. ✅
2. **(in progress, parallel agents)** Content rework for the first connected batch: **Event Registration, Event Ticketing, Event Check-In** — code-verified, outcome-language content specs → then design → HTML artifacts (reference `session-management.astro` design + existing `public/feature-images/` assets).
3. Extract menu to `src/data/menu.ts`; add the two new pages (Connector, Web App) and the "New on EventHex" mega-menu row.
4. Next content batches by priority: `ai-photo-gallery` (traffic), `ai-session-recap` + `ai-event-copilot` (AI story), then remaining thin stubs.
5. Payment Processing rework deferred (per user) — do it with a later Core-Management batch.

---

## 7. Open questions for the team
1. `partnership` page — keep + add to menu, or retire?
2. Attendee Web App — exact scope/boundaries vs the native mobile app (for accurate copy).
3. Do we want a dedicated top-level nav item for the Connector ("For AI / Developers"), or is the mega-menu "New on EventHex" row enough?
4. Confirm `ai-event-copilot` unified-Copilot messaging with product.
