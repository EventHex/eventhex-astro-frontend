# EventHex Landing Page — Improvement & Gap-Elimination Plan

**Created:** 2026-06-26
**Scope:** `eventhex-astro-frontend` (eventhex.ai marketing site) vs the EventHex product (CRM `eventhex-saas-cms`, API `eventhex-saas-api`, Mobile App `event_x_main`, Event Pages `eventhex-saas-landing`)
**Goal:** Close the gap between what EventHex *can do* (the product) and what the landing page *tells prospects it can do*, plus fix SEO/UX/structural gaps.

> This document is built section by section. Each section is reviewed before the next is appended.

---

## Table of Contents

1. [Section 1 — Current Landing Page Analysis](#section-1--current-landing-page-analysis)
2. [Section 2 — CRM / Product Feature Deep-Dive](#section-2--crm--product-feature-deep-dive)
3. [Section 3 — Gap Analysis: Product vs Landing Page](#section-3--gap-analysis-product-vs-landing-page)
4. [Section 4 — Feature Pages to Create](#section-4--feature-pages-to-create)
5. [Section 5 — SEO Improvements](#section-5--seo-improvements)
6. [Section 6 — Home Page & Basic Elements Plan](#section-6--home-page--basic-elements-plan)
7. [Section 7 — Executive Summary & Roadmap](#section-7--executive-summary--roadmap)

---

## Section 1 — Current Landing Page Analysis

This section inventories everything that currently exists on `eventhex.ai` (the Astro frontend) so we have an accurate baseline before comparing against the product.

### 1.1 Site architecture

The Astro site uses a `MarketingLayout` (provides `<head>`, OG/Twitter cards, Organization + WebSite JSON-LD schema, header `HeaderNew`, footer `FooterNew`, and a sticky WhatsApp widget). Pages live under `src/pages/`.

**Top-level page types:**

| Type | Count | Examples |
|------|-------|---------|
| Home | 1 | `/` (index.astro) |
| Company | 3 | `/about-us/`, `/contact-en/`, `/partnership/` |
| Conversion | 1 | `/book-a-demo/` (+ `/book-a-demo/` subfolder) |
| Feature pages | 23 | `/event-ticketing/`, `/ai-event-copilot/`, etc. |
| Features index | 1 | `/features/` (lists all 23) |
| Collection: Industries | 15 + index | `/industries/healthcare/` … |
| Collection: Use Cases | 12 + index | `/use-cases/conferences/` … |
| Collection: Integrations | 9 + index | `/integrations/stripe/` … |
| Sub-feature collections | 5 folders | `event-ticketing/`, `event-registration/`, `event-analytics/`, `event-check-in/`, `live-polling-qa/`, `ai-photo-gallery/` (use-case/industry landing pages per feature) |
| Content | blog/, news/ | `/blog/[slug]/`, `/news/` |
| Legal | 4 | privacy, terms, cookie, cancellation-refund |
| SEO infra | 5 files | `robots.txt.ts`, `llms.txt.ts`, `sitemap-{index,pages,posts,news}.xml.ts` |
| Legacy/proxy | 2 | `/wp-content/`, `/api/` |

### 1.2 The 23 marketed feature pages (from `features.astro`)

Organized into 4 categories on the features index:

**Event Planning & Operations (8)**
1. Speaker Management — AI LinkedIn import, profiles, session scheduling, InstaRecap transcription
2. Session Management — visual timeline, multi-track agendas, sub-sessions, capacity controls
3. Event Ticketing — multi-ticket checkout, 0% platform fees (BYO gateway), QR tickets, badges
4. Event Registration — tracking, attendee types, waitlists, payment monitoring, check-in data
5. Centralized Dashboard — unified view, real-time analytics, unlimited events/attendees
6. Event Check-In — QR scan, facial recognition, self-service kiosks, live attendance
7. Call for Papers — submission portal, peer review, rubric scoring, acceptance workflows
8. Event Payment Processing — Stripe/Razorpay/Tap with zero EventHex platform fees

**AI-Powered Features (5)**
9. AI Smart-Connect — matchmaking, interest-based networking, meeting scheduling
10. AI Form Builder — voice-powered form creation, approval workflows, CAPTCHA
11. AI Session Recap (InstaRecap) — transcription, AI summaries, searchable recap pages
12. AI Photo Gallery (InstaSnap) — face-matching gallery, real-time tagging, branded sharing
13. AI Event Copilot — "four AI agents: Analyst, Session Builder, Copywriter, Ticket Agent"

**Marketing & Engagement (7)**
14. Event Marketing — email/WhatsApp campaigns, segmentation, advocacy posters, delivery tracking
15. Event Notifications — multi-channel (email/WhatsApp/push/SMS), automated triggers
16. Live Polling & Q&A — polls, Q&A moderation, session feedback, engagement analytics
17. Event Gamification — points, badges, leaderboards, challenges, prize distribution
18. Badge & Certificate Designer — visual editor, on-site printing, auto certificate generation
19. Event Website Builder — drag-and-drop builder, custom domains, responsive templates
20. Event Mobile App — white-label app, agenda, networking, notifications, offline

**Sponsors & Exhibitors (3)**
21. Sponsor Management — tiered profiles, visibility, self-service portals, ROI analytics
22. Exhibitor Management — profiles, booth allocation, booth member management, portals
23. Partnership — partner programme, co-branded events, revenue sharing

### 1.3 Homepage composition (`index.astro`)

The homepage is built from `home-new/` components, mostly reverse-engineered from the old Elementor/WordPress build (note the `// Source: Elementor Container ...` comments):

1. **`HeroNew`** — Full-bleed background image hero. Headline "The AI-Powered Event Management Platform for Every Event", subtitle "Simplify Events | Amplify Results", single CTA "Request a demo". **No secondary CTA, no trust badges, no social proof in hero.**
2. **`DashboardSection`** — Dark section with a Lottie dashboard animation + "trusted-by" logo carousel (~22 client logos: Wellbeing at Work, Global AI Show, Biohack, MediaOne, KDF, Elite Kerala, etc.). Headline about "retention through enhanced attendee engagement".
3. **`FeaturesSection`** — Bento grid, 3 tabs (Pre-Event / Event Day / Post-Event), 5 cards per tab. Uses CMS-hosted SVG illustrations.
4. **`AISection`** — Sticky stacking-cards scroll, 5 "AI" cards (Website Builder, AI Voice Form, InstaSnap, AI Bot, Smart-Connect) + testimonial carousel (Amy Carey / Rifath Rahman / Gulf Indian Trade Expo).
5. **`BlogSection`** — Latest blog posts.
6. **`StickyDemoBar`** — Persistent bottom demo CTA.

### 1.4 Homepage naming inconsistencies (immediate UX/SEO issue)

The homepage feature cards use **different names** than the dedicated feature pages. A prospect who reads "AI-Photo Distributor" on the hero and then searches the site for that term will not find the `/ai-photo-gallery/` page. This hurts both UX and on-site search/SEO:

| Homepage card name | Actual feature page | URL |
|--------------------|---------------------|-----|
| Event Builder | Event Website Builder | `/event-website-builder/` |
| AI-Photo Distributor | AI Photo Gallery | `/ai-photo-gallery/` |
| AI Note Maker | AI Session Recap | `/ai-session-recap/` |
| Smart Analytics | Event Analytics | `/event-analytics/` |
| Attendee Retargeting | Event Marketing | `/event-marketing/` |
| Instant Feedback | Live Polling & Q&A | `/live-polling-qa/` |
| Attendee App | Event Mobile App | `/event-mobile-app/` |
| AI Bot | (no dedicated page) | — |

The AI section also calls InstaSnap/InstaRecap by codenames ("InstaSnap AI", "InstaRecap") that don't appear on the feature pages, adding more confusion.

### 1.5 Collection/programmatic pages

- **Industries (15):** associations, cultural, education, finance, government, healthcare, hospitality, manufacturing, media, middle-east, ngo, real-estate, retail, sports, technology
- **Use Cases (12):** academic-conferences, award-ceremonies, conferences, corporate-events, festivals, fundraising-events, government-events, hybrid-events, networking-events, product-launches, trade-shows, workshops
- **Integrations (9):** email, hubspot, push-notifications, razorpay, stripe, tap-payments, webhooks, whatsapp, wordpress
- **Per-feature sub-collections** (e.g. `/event-ticketing/conferences/`): cross-product of feature × use-case/industry.

### 1.6 Existing SEO state (summary — full detail in `SEO_AUDIT_AND_PLAN.md`, 2026-04-07)

**Working well:** title/description on all pages, OG/Twitter cards, Organization+WebSite+SoftwareApplication+FAQPage+BlogPosting JSON-LD, CDN caching, Cloudflare speculation rules, blog article metadata.

**Known issues (carry into Section 5):**
- 🔴 `cms.eventhex.ai` (WordPress) is indexable → duplicate content risk
- 🔴 Old `/feature/*` and root-level blog slugs return 404 (lost SEO equity)
- 🔴 Blog canonical URLs (`/{slug}/`) are 404 — actual pages live at `/blog/{slug}/`
- 🔴 Legal pages (privacy/terms/cookie/refund) are 404
- ⚠️ 98 programmatic pages missing from sitemap (industries, integrations, use-cases, sub-use-cases)
- ⚠️ Homepage, about-us, contact-en missing explicit canonical
- ⚠️ No BreadcrumbList schema
- ⚠️ Google Fonts render-blocking

### 1.7 Assets & dependencies

- Heavy reliance on **CMS-hosted assets** (`https://cms.eventhex.ai/wp-content/uploads/...`): hero backgrounds, feature SVGs, logos, testimonial avatars. This couples the marketing site's performance/availability to WordPress uptime and adds cross-origin image latency.
- No pricing page exists.
- No customer case-study pages (testimonials are only a carousel on the homepage).
- `llms.txt` exists (good for AI/LLM discovery).

### 1.8 Section 1 — quick assessment

The landing page is a **solid, content-rich migration from WordPress** with good programmatic-SEO coverage (industries/use-cases/integrations) and decent structured data. But it has three structural weaknesses that the rest of this plan addresses:

1. **Feature coverage is incomplete** — 23 pages exist, but the CRM/API expose ~40+ distinct capabilities (multi-org/franchise, subscriptions/billing center, CRM integrations, WhatsApp Concierge, virtual meetings, reviewer portals, tax/revenue analytics, team/role management, white-label, etc.). See Section 2–4.
2. **Naming is fragmented** — homepage uses different labels than feature pages (1.4).
3. **Conversion architecture is thin** — single demo CTA, no pricing, no case studies, no comparison pages, weak mid-funnel.

---

## Section 2 — CRM / Product Feature Deep-Dive

This section maps what the EventHex **product actually does**, drawing from the CRM screens (`eventhex-saas-cms` ~180 page directories), the API routes (`eventhex-saas-api` ~250 route files + planning docs), the Mobile App, and the AI Copilot analysis. Each capability is tagged with whether the landing page currently markets it.

Legend: ✅ = has a dedicated landing page · 🔶 = mentioned indirectly/under a different name · ❌ = not on landing page at all.

### 2.1 Event core (planning & operations)

| Capability | Product reality | Landing page |
|------------|-----------------|--------------|
| Event creation & multi-event management | Full event CRUD, unlimited events, org-level dashboard | ✅ Centralized Dashboard |
| Session scheduling | Visual timeline, multi-track, sub-sessions, capacity, session types/stages | ✅ Session Management |
| Speaker management | Profiles, **AI LinkedIn import**, speaker hub/portal, categories, settings, speaker registration | ✅ Speaker Management |
| Registration & attendee types | Unified `ticketregistration` model, approval/hold/waitlist, participant types/categories | ✅ Event Registration |
| Ticketing | 3-tier inheritance config (~100 fields), multi-ticket checkout, QR tickets, badges, coupons | ✅ Event Ticketing |
| Check-in | QR scan, **facial recognition (AWS Rekognition)**, self-service kiosks, live attendance, scanners | ✅ Event Check-In |
| Call for Papers / Abstracts | Submission portal, **peer review**, rubric scoring, reviewer portal, proceedings | ✅ Call for Papers |
| Badges & certificates | Visual designer, programmatic generation, on-site printing, watermarking | ✅ Badge & Certificate Designer |
| Forms | Form builder (drag), **AI voice form builder**, conditional logic, approval workflows, CAPTCHA, standalone forms | ✅ AI Form Builder |
| Event website builder | Drag-and-drop, **Website Builder V2** (themes, section variants, AI generation, custom domains), templates | ✅ Event Website Builder |

### 2.2 AI capabilities (the biggest differentiator)

| Capability | Product reality | Landing page |
|------------|-----------------|--------------|
| **AI Event Copilot** | Unified agentic assistant, 45+ tools, plan/step streaming, voice input, RAG semantic search, 4 personas (Analyst/Session/Copywriter/Ticket), ticket inspector + auto-configure, audience insights, copy generation, image generation, polls/coupons creation, context-aware starters, multilingual | ✅ (but described as "four agents" — **outdated; it's now a single unified copilot**) |
| AI Session Recap (InstaRecap) | Real-time transcription, AI summaries, takeaways, slides, social recap, searchable pages, attendee analytics | ✅ AI Session Recap |
| AI Photo Gallery (InstaSnap) | **Face-matching** photo distribution, selfie upload, branded sharing, albums, contribute album, watermark | ✅ AI Photo Gallery |
| AI Smart-Connect networking | AI matchmaking, interest-based, meeting scheduling, conversation starters (via mobile app) | ✅ AI Smart-Connect |
| AI Form Builder | Voice-powered creation, auto-translation | ✅ AI Form Builder |
| AI website generation | Gemini structured-JSON site generation (V2) | 🔶 (under Website Builder) |
| AI image generation | Replicate-based, per-event, in copilot | ❌ |
| AI audience insights / clustering | Designation/company breakdowns, semantic attendee search | ❌ |
| AI copywriting (marketing) | Copy variants, social posts, advocacy posters | 🔶 (under Event Marketing) |
| AI LinkedIn speaker import | Auto-profile from LinkedIn | 🔶 (under Speaker Management) |

### 2.3 Marketing, engagement & communication

| Capability | Product reality | Landing page |
|------------|-----------------|--------------|
| Email campaigns | Templates, audience segmentation, delivery tracking, scheduling | ✅ Event Marketing |
| WhatsApp campaigns | Templates, bulk messaging, delivery tracking, concierge | ✅ (Email+WA) |
| **WhatsApp Concierge** | Conversational WhatsApp automation / concierge bot | ❌ |
| Notifications | Multi-channel (email/WhatsApp/push/SMS), triggers, notification queue & dispatch | ✅ Event Notifications |
| Live polling & Q&A | Polls, anonymous polls, Q&A moderation, session feedback | ✅ Live Polling & Q&A |
| Gamification | Points, badges, leaderboards, challenges, lucky draw, milestone/position rewards, contests | ✅ Event Gamification |
| Advocacy poster builder | Branded shareable posters for attendees | 🔶 (under Event Marketing) |
| Event chat / messaging | In-event chat, socket chat, AI bot for attendees | 🔶 ("AI Bot" on homepage, no page) |
| Wall of Fame | Recognition wall | ❌ |

### 2.4 Virtual & hybrid events (major gap)

| Capability | Product reality | Landing page |
|------------|-----------------|--------------|
| **Virtual meetings / meeting bots** | **Recall.ai + Vexa** bots auto-join Zoom/Meet/Teams, record, transcribe, screen-share, speaker timeline, key insights | ❌ |
| **Live streaming** | **YouTube live** streaming (OAuth), streaming config/status | ❌ |
| **Google Meet / Calendar integration** | Create Meet links, schedule bots from calendar events, OAuth | ❌ |
| Hybrid event support | Hybrid is a use-case page only, no feature page for the tooling | 🔶 (use-case only) |

### 2.5 Sponsors, exhibitors & partners

| Capability | Product reality | Landing page |
|------------|-----------------|--------------|
| Sponsor management | Tiered profiles, visibility, sponsor tab, ROI, partners spotlight | ✅ Sponsor Management |
| Exhibitor management | Profiles, booth allocation, floor plans, categories, packages, FAQs, announcements, exhibitor portals, booth members | ✅ Exhibitor Management |
| Partnership programme | Co-branded events, revenue sharing | ✅ Partnership |

### 2.6 Commerce, billing & subscriptions (major gap)

| Capability | Product reality | Landing page |
|------------|-----------------|--------------|
| Payment processing | Stripe, Razorpay, Tap, manual payments, payment verification/reconciliation | ✅ Event Payment Processing |
| **Subscriptions / plans** | Free/Starter/Pro/Premium/Custom tiers, plan limits, plan visibility, subscription coupons | ❌ |
| **Billing center** | Invoices (sequential), tax breakdown, PDFs, credit notes, billing addresses (GST/PAN), dunning, churn dashboard, revenue analytics, MRR/ARR | ❌ |
| **Add-ons marketplace** | Add-on products, categories, pricing, subscriptions, purchases | ❌ |
| **Quote management** | Full quote/proposal lifecycle | ❌ |
| Multi-currency & tax | Currency management, country, tax rules, tax reports (GST/VAT) | ❌ |
| **Pricing page** | Exists in CMS (public pricing/checkout) | ❌ (no marketing pricing page) |

### 2.7 Multi-org / franchise / white-label (major gap)

| Capability | Product reality | Landing page |
|------------|-----------------|--------------|
| **Multi-org (franchise) architecture** | Franchise model, per-org data isolation, franchise packages, usage tracking (`franchiseUsage`), subscription guards | ❌ |
| **White-label / reseller** | Terminology settings, whitelisted domains, custom domains, logo/branding, terminology customization | ❌ |
| Team & role management | Team members, roles, module/role permissions, menu roles | ❌ |
| Platform analytics | Org dashboard, platform analytics, churn/dunning dashboards (super-admin) | ❌ |

### 2.8 Integrations & developer platform (gap)

| Capability | Product reality | Landing page |
|------------|-----------------|--------------|
| CRM integrations | **HubSpot** (full, field mapping, contact sync), Salesforce, Zoho, Pipedrive (UI present) | 🔶 (Integrations index lists hubspot, but no CRM-integrations feature page) |
| Marketing integrations | Email, WhatsApp, WordPress, push notifications | ✅ (Integrations collection) |
| Payment integrations | Stripe, Razorpay, Tap | ✅ (Integrations collection) |
| Webhooks | Outbound webhooks, webhook testing | ✅ (Integrations collection) |
| Public API / developer docs | Extensive REST API, API keys, llms.txt | ❌ (no developer/api-docs page) |
| WordPress integration | WP plugin (wordpress-plugins/ in repo) | 🔶 |

### 2.9 Analytics & reporting

| Capability | Product reality | Landing page |
|------------|-----------------|--------------|
| Event analytics | Real-time, registration trends, check-in stats, engagement | ✅ Event Analytics |
| Revenue analytics | Revenue/churn/growth/plan distribution charts | ❌ |
| Attendee app analytics | Mobile app usage analytics | ❌ |
| Platform/org analytics | Cross-org dashboards | ❌ |
| Export | Attendee export (CSV), reports | 🔶 |

### 2.10 Mobile app

| Capability | Product reality | Landing page |
|------------|-----------------|--------------|
| White-label attendee app | Flutter, agenda, networking, notifications, **offline access**, gamification, gallery, polls | ✅ Event Mobile App |
| App configuration | Configure app modules, app requests, mobile notifications, mobile error logging | 🔶 |

### 2.11 Portals (B2B surfaces)

| Capability | Product reality | Landing page |
|------------|-----------------|--------------|
| Exhibitor portal | Self-service booth management | 🔶 (under Exhibitor Management) |
| Reviewer portal | Abstract/call-for-papers peer review | ❌ |
| AV team portal | On-site AV coordination | ❌ |
| Speaker hub/portal | Speaker self-service | 🔶 (under Speaker Management) |
| Sponsor portal | Self-service sponsor management | 🔶 (under Sponsor Management) |

### 2.12 Other productised capabilities

| Capability | Product reality | Landing page |
|------------|-----------------|--------------|
| Multi-language | i18n: **English, Arabic, German** (RTL Arabic support) | ❌ (no i18n/localization page; landing is EN-only) |
| Lead retrieval / enquiry | Enquiry, quote, lead management | ❌ |
| Task/automation | Automation tab, triggers, milestones | ❌ |
| Access control | Authentication, roles, manage login, static OTP | ❌ |
| Print & material management | Print logs, materials | ❌ |
| News/announcements | In-app news, announcements | 🔶 |

### 2.12 Section 2 — product scale summary

The product exposes **roughly 50–55 distinct marketable capabilities** across 12 domains. The landing page currently has dedicated pages for **23** of them and indirectly references ~12 more. That leaves approximately **15–20 productised capabilities with zero landing presence**, concentrated in:

1. **Virtual/hybrid tooling** (meeting bots, live streaming, Meet/Calendar) — §2.4
2. **Commerce/billing** (subscriptions, billing center, add-ons, quotes, pricing) — §2.6
3. **Multi-org/franchise/white-label** — §2.7
4. **Developer/integrations** (CRM sync, public API docs) — §2.8
5. **Platform analytics & portals** — §2.9, §2.11
6. **WhatsApp Concierge, AI image/audience, localization** — §2.2/2.3/2.12

These gaps — quantified and prioritised — are the subject of Section 3.

---

## Section 3 — Gap Analysis: Product vs Landing Page

This section converts the Section 2 inventory into a prioritised gap list. Gaps are scored on three axes:

- **Revenue potential (R):** How much does this capability influence a buyer's purchase decision? (1–5)
- **Differentiation (D):** How much does it set EventHex apart from competitors (Cvent, Bizzabo, Whova, TicketTailor)? (1–5)
- **Effort (E):** Work to build a credible landing page (1 = reuse existing components, 5 = new design + content). (1–5)

**Priority score = R + D** (higher = more important). Effort is tracked separately so we can find quick wins.

### 3.1 Tier 1 — Critical gaps (high revenue + high differentiation)

These are capabilities prospects actively shop for, that EventHex genuinely has, and that competitors heavily market. Not having a page = losing deals to competitors who do.

| # | Gap | Why it matters | R | D | E | Priority |
|---|-----|----------------|---|---|---|----------|
| G1 | **Pricing page** | The #1 missing page. Every B2B SaaS buyer expects transparent pricing. "Request a demo" with no pricing signals = high bounce. Product has full subscription tiers (Free/Starter/Pro/Premium/Custom) + add-ons. | 5 | 3 | 3 | **8** |
| G2 | **Virtual Meetings & Hybrid** page | Hybrid/virtual events are a top-3 buyer requirement. EventHex has Recall.ai + Vexa bots, recording, transcription, YouTube live streaming, Google Meet/Calendar — a genuinely strong offering. Zero landing presence. | 5 | 4 | 4 | **9** | 
| G3 | **Multi-Org / Franchise / White-Label** page | Differentiates EventHex for agencies, associations, and enterprise running many events. Competitors charge a premium for this. Strong product (franchise model, usage tracking, white-label). | 4 | 5 | 3 | **9** |
| G4 | **AI Event Copilot** page rewrite | The existing page undersells it ("four agents"). Product is now a **unified agentic copilot with 45+ tools, voice, RAG, ticket inspector, audience insights**. This is EventHex's flagship differentiator and the page is outdated. | 5 | 5 | 3 | **10** |
| G5 | **CRM Integrations / HubSpot** feature page | Integration with the buyer's existing CRM/stack is a top buying criterion. HubSpot is fully built; Salesforce/Zoho/Pipedrive are in UI. Buried in the generic Integrations collection. | 4 | 3 | 2 | **7** |

### 3.2 Tier 2 — Important gaps (strong supporting value)

| # | Gap | Why it matters | R | D | E | Priority |
|---|-----|----------------|---|---|---|----------|
| G6 | **Subscriptions & Billing Center** page | Shows maturity/enterprise-readiness (invoicing, tax, dunning, revenue analytics). Important for trust, less for direct conversion. | 3 | 3 | 3 | 6 |
| G7 | **Developer Platform / API** page | Developers/technical buyers evaluate API depth. EventHex has a huge REST API + webhooks + llms.txt. Attracts integration-led deals. | 3 | 4 | 3 | 7 |
| G8 | **WhatsApp Concierge** page | Conversational commerce on WhatsApp is a regional differentiator (strong in MEA/India markets EventHex serves). | 3 | 4 | 2 | 7 |
| G9 | **Live Streaming / Broadcast** page | Could be folded into Virtual (G2) or standalone. YouTube live + streaming config. | 3 | 3 | 2 | 6 |
| G10 | **Portals hub** page (Reviewer / AV Team / Speaker / Sponsor / Exhibitor) | "Self-service portals" is a recognised feature category. Reviewer + AV portals are entirely absent. | 3 | 3 | 3 | 6 |
| G11 | **Multi-language / Localization** page | Arabic (RTL), German, English. Big differentiator for MEA/EU enterprise buyers. Landing is EN-only and doesn't even mention it. | 3 | 4 | 2 | 7 |
| G12 | **Security & Compliance** page | Trust page (data residency, encryption, SOC2 posture, GDPR). Enterprise RFP requirement. Product has security audit (see repo memory). | 4 | 2 | 3 | 6 |

### 3.3 Tier 3 — Nice-to-have gaps (fill out the matrix)

| # | Gap | Why it matters | R | D | E | Priority |
|---|-----|----------------|---|---|---|----------|
| G13 | **AI capabilities hub** page | Consolidate all AI features (copilot, recap, photos, networking, forms, website gen, audience insights, image gen) under one "/ai/" or "/ai-platform/" pillar. SEO + narrative. | 3 | 4 | 3 | 7 |
| G14 | **Audience Insights / Analytics** expansion | AI audience clustering is unique; could enhance the existing Event Analytics page rather than a new page. | 2 | 3 | 1 | 5 |
| G15 | **Gamification/Lucky Draw, Wall of Fame** | Minor feature pages or sub-sections. | 1 | 2 | 1 | 3 |
| G16 | **Lead Retrieval / On-site tools** | For trade-show buyers. | 2 | 2 | 2 | 4 |
| G17 | **Quote & Enquiry management** | Niche. | 1 | 1 | 2 | 2 |

### 3.4 Conversion-architecture gaps (not feature pages, but critical)

These are structural weaknesses in how the site converts visitors, independent of feature coverage:

| # | Gap | Impact | Effort |
|---|-----|--------|--------|
| C1 | **Single demo CTA** — no "Start free trial" / "View pricing" / "Watch demo video" alternatives | Visitors with different intent all hit the same wall | 2 |
| C2 | **No case studies / customer stories** — testimonials are a 3-slide carousel only | Social proof is the #1 mid-funnel converter | 3 |
| C3 | **No comparison pages** ("EventHex vs Cvent/Bizzabo/Whova") | High-intent commercial search traffic goes uncaptured | 3 |
| C4 | **No ROI / savings calculator** | Quantifies value for budget-holders | 4 |
| C5 | **Homepage naming fragmentation** (Section 1.4) | On-site search/confusion; weakens brand consistency | 1 |
| C6 | **No "How it works" / product walkthrough** | Visitors can't self-serve understanding the flow | 2 |
| C7 | **Heavy CMS-hosted assets** | Performance/availability coupling to WordPress; slower LCP | 2 |

### 3.5 Gap summary by count

- **Feature pages missing entirely:** ~10 (G2, G3, G6, G7, G8, G9, G10, G11, G12, G13) + portals expansion
- **Feature pages needing rewrite/expansion:** ~4 (G4 copilot, G5 integrations→feature, + existing pages that undersell: virtual capabilities within Hybrid use-case, AI sub-features)
- **New commercial pages:** Pricing (G1), Case studies (C2), Comparisons (C3)
- **Conversion elements:** trial/pricing/video CTAs (C1), ROI calc (C4), walkthrough (C6)
- **Cross-cutting fixes:** naming (C5), asset hosting (C7), plus all of Section 5 (SEO)

### 3.6 Recommended priority order (rationalised)

Combining revenue + differentiation + low effort first, the **build order** should be:

1. **G1 Pricing** + **C1 multi-CTA** (highest revenue, fast) — unblock conversion
2. **G4 Copilot rewrite** (flagship, outdated, high diff) + **G13 AI hub**
3. **G2 Virtual/Hybrid** (top buyer need) + **G9 Live Streaming**
4. **G3 Multi-Org/White-Label** (enterprise differentiator)
5. **G5 CRM Integrations** + **G7 Developer/API** (integration-led buyers)
6. **G11 Localization** + **G8 WhatsApp Concierge** (regional wins)
7. **C2 Case studies** + **C3 Comparisons** (mid-funnel)
8. **G6 Billing, G10 Portals, G12 Security** (trust/completeness)
9. **C5 naming fix + C7 asset migration** (cleanup) — ongoing

This priority order feeds directly into Section 4 (which pages to build) and Section 6 (homepage/basic-elements changes).

---

## Section 4 — Feature Pages to Create

This section specifies **each new/expanded page** required to close the gaps from Section 3. New feature pages should use the existing **`FeatureV2Layout.astro`** (`src/components/feature-v2/`) — a data-driven template that already renders: hero (badge + 2-line title + trust items), stats band, tabbed bento grid, stacking cards, "how it works" steps, "why" cards, CTA, and FAQ + FAQPage JSON-LD. This gives consistency and is the lowest-effort path (E≈2–3 per page).

Each spec below lists: **slug/URL**, **primary keyword**, **target intent**, **sections/content**, and **schema**.

> All pages reuse `FeatureV2Layout` unless noted. Content/props are illustrative starting points to be refined with marketing copy.

---

### 4.1 Commercial / conversion pages (build first)

#### Page 1 — Pricing  (Gap G1)  · NEW, custom layout
- **URL:** `/pricing/`
- **Keyword:** "event management software pricing", "EventHex pricing"
- **Intent:** Bottom-funnel, high-intent comparison
- **Layout:** NOT FeatureV2 — needs a bespoke pricing layout:
  - Tier cards: **Free / Starter / Pro / Premium / Enterprise (Custom)** — pull structure from CMS `subscriptionPlan` model (Free/Starter/Pro/Premium/Custom)
  - Feature-matrix table (comparison) with checkmarks
  - **Add-ons** strip (from `addOn` marketplace: categories, pricing)
  - "0% platform fee with your own gateway" callout (key differentiator)
  - FAQ (billing cycles, payment methods, refunds, upgrade/downgrade, taxes/GST)
  - CTA: "Start free" + "Talk to sales"
- **Schema:** `Product` + `Offer` per tier (priceCurrency, price), `FAQPage`
- **Note:** Sync tier names/limits with the live CMS `subscriptionPlan` so the page never lies. Consider a data source (API or build-time fetch) rather than hardcoded.

#### Page 2 — Case Studies index + templates  (Gap C2)  · NEW content collection
- **URL:** `/case-studies/` + `/case-studies/[slug]/`
- **Keyword:** "event management case study", "[client] event"
- **Intent:** Mid-funnel social proof
- **Content:** Reuse the 3 homepage testimonials (Wellbeing at Work, SOLID Business Club, Gulf Indian Trade Expo) + client logos from DashboardSection as seed case studies. Template: Challenge → Solution → Results (metrics) → Quote → Logo.
- **Schema:** `Article` / `BlogPosting`-like, `Organization` references
- **Effort:** Medium — needs a content collection (`src/content/case-studies/`) and 2 list/detail layouts.

#### Page 3 — Comparison pages  (Gap C3)  · NEW, 3 pages
- **URLs:** `/compare/eventhex-vs-cvent/`, `/compare/eventhex-vs-bizzabo/`, `/compare/eventhex-vs-whova/`
- **Keyword:** "eventhex vs cvent", "cvent alternatives", etc.
- **Intent:** High-intent commercial search ("vs" queries)
- **Content:** Objective feature/price comparison table, "why switch" section, migration note. Keep factual and defensible.
- **Schema:** `FAQPage` ("How is EventHex different from Cvent?")

---

### 4.2 Flagship feature pages (build second)

#### Page 4 — AI Event Copilot (REWRITE)  (Gap G4)
- **URL:** `/ai-event-copilot/` (exists — rewrite content)
- **Keyword:** "AI event management assistant", "event copilot", "AI agent for events"
- **Fix:** Current copy says "four AI agents" — **outdated**. Product is now a **single unified agentic copilot** with:
  - 45+ tools (create sessions/speakers/tickets/coupons/polls/forms, audience insights, ticket inspector, copy generation, image generation, export)
  - Voice input (transcription), RAG semantic search, plan/step streaming UI
  - Context-aware starters (detects event phase: setup/promotion/live/post)
  - Multilingual (Malayalam/Arabic/Hindi read+act verified)
- **FeatureV2Layout sections:** Hero → bento tabs (Plan & Analyze / Create & Configure / Engage / Optimize) → stacking cards (each persona/use case) → how-it-works (ask → plan → act → verify) → why (saves time, no training, works in your language) → FAQ
- **Schema:** `SoftwareApplication`, `FAQPage`

#### Page 5 — AI Platform hub  (Gap G13)  · NEW
- **URL:** `/ai-platform/` (or `/ai/`)
- **Keyword:** "AI event platform", "AI powered event management"
- **Intent:** Top/mid-funnel pillar page
- **Content:** Aggregates ALL AI features (Copilot, InstaRecap, InstaSnap, Smart-Connect, Voice Forms, AI Website Generation, Audience Insights, Image Generation) into one narrative with cards linking to each sub-page. Strong internal-linking hub.
- **Schema:** `SoftwareApplication`, `ItemList`

#### Page 6 — Virtual & Hybrid Events  (Gap G2 + G9)  · NEW
- **URL:** `/virtual-hybrid-events/` (or `/virtual-meetings/`)
- **Keyword:** "virtual event platform", "hybrid event management software", "event live streaming"
- **Intent:** Top-3 buyer need
- **FeatureV2Layout sections:** Hero → bento (Meeting bots auto-join Zoom/Meet/Teams via Recall.ai/Vexa; Live recording & transcription; YouTube live streaming; Google Meet/Calendar; Speaker timeline & key insights; Hybrid check-in) → how-it-works (connect meeting → bot joins → record/transcribe → recap) → why (no attendee app friction, works with existing tools) → FAQ
- **Schema:** `SoftwareApplication`, `FAQPage`
- **Link:** cross-link from `/use-cases/hybrid-events/`

#### Page 7 — Multi-Org, Franchise & White-Label  (Gap G3)  · NEW
- **URL:** `/multi-org-white-label/` (or `/franchise-management/`)
- **Keyword:** "white label event management software", "multi-organization event platform", "event management for agencies"
- **Intent:** Enterprise/agency buyers
- **FeatureV2Layout sections:** Hero → bento (Unlimited orgs/franchises; Per-org data isolation; White-label branding & custom domains; Terminology customization; Usage tracking & limits; Reseller packages) → how-it-works (create org → brand → assign plan → manage) → why (scale without chaos) → FAQ
- **Schema:** `SoftwareApplication`, `FAQPage`

---

### 4.3 Integration & platform pages (build third)

#### Page 8 — CRM Integrations  (Gap G5)  · NEW
- **URL:** `/crm-integrations/` (or expand `/integrations/hubspot/` into a feature page)
- **Keyword:** "event CRM integration", "HubSpot event integration", "sync attendees to CRM"
- **Intent:** Integration-led buyers
- **Content:** HubSpot (full, field mapping, contact/attendee/speaker/exhibitor sync), Salesforce/Zoho/Pipedrive (roadmap/present). How field mapping works. Bidirectional sync benefits.
- **Schema:** `SoftwareApplication`, `FAQPage`
- **Note:** Update `/integrations/` index to feature HubSpot prominently.

#### Page 9 — Developer Platform & API  (Gap G7)  · NEW
- **URL:** `/developers/` (or `/api/`)
- **Keyword:** "event management API", "EventHex API", "event management developer platform"
- **Intent:** Technical buyers / integration partners
- **Content:** REST API overview, webhooks, API keys, llms.txt (already exists — link it), code samples, authentication. Link to docs.
- **Schema:** `SoftwareApplication`, `FAQPage`

#### Page 10 — WhatsApp Concierge  (Gap G8)  · NEW
- **URL:** `/whatsapp-concierge/`
- **Keyword:** "whatsapp event marketing", "whatsapp concierge bot", "event whatsapp automation"
- **Intent:** Regional buyers (MEA/India)
- **Content:** Conversational WhatsApp automation, broadcast + concierge, templates, delivery tracking. Differentiate from basic "WhatsApp campaigns".
- **Schema:** `SoftwareApplication`, `FAQPage`
- **Note:** Ensure this doesn't cannibalize `/event-marketing/` — position as the advanced/conversational tier.

---

### 4.4 Trust & completeness pages (build fourth)

#### Page 11 — Security & Compliance  (Gap G12)  · NEW
- **URL:** `/security/`
- **Keyword:** "event management security", "GDPR event software"
- **Intent:** Enterprise RFP / procurement
- **Content:** Data encryption, data residency, access control & roles, GDPR/privacy, sub-processor list. Reference the security audit (repo memory `security-audit-2026-06-11.md`).
- **Schema:** `WebPage`, `FAQPage`
- **Note:** Be truthful — only claim certifications you hold; otherwise frame as practices/posture.

#### Page 12 — Localization & Multi-language  (Gap G11)  · NEW (or homepage section)
- **URL:** `/localization/` (or fold into a homepage trust strip)
- **Keyword:** "multilingual event software", "Arabic event management", "RTL event platform"
- **Content:** English / Arabic (RTL) / German support, on-site signage, attendee app & emails localized.
- **Effort:** Low — could be a homepage section if a full page isn't warranted.

#### Page 13 — Portals hub  (Gap G10)  · NEW
- **URL:** `/portals/`
- **Keyword:** "event self-service portals", "reviewer portal", "exhibitor portal"
- **Content:** Cards for Exhibitor portal, Reviewer portal (call-for-papers peer review), AV Team portal, Speaker hub, Sponsor portal. Links into existing feature pages.
- **Effort:** Low-medium.

#### Page 14 — Billing & Subscriptions overview  (Gap G6)  · NEW (or part of Pricing)
- **URL:** `/billing/` (optional — may merge into Pricing page as a tab)
- **Content:** Invoicing (GST/tax/PDF), dunning, revenue analytics, add-ons. Position as "for finance teams".

---

### 4.5 Existing pages to expand (not new pages)

| Page | Change | Why |
|------|--------|-----|
| `/event-analytics/` | Add **AI Audience Insights** (clustering by designation/company, semantic attendee search) | Unique AI capability currently unmentioned |
| `/event-marketing/` | Add **AI copywriting** + **advocacy poster builder** | Undersold |
| `/speaker-management/` | Emphasize **AI LinkedIn import** | Differentiator, buried |
| `/event-website-builder/` | Add **AI website generation** (V2) | Major new capability |
| `/integrations/` index | Feature HubSpot/CRM section prominently | G5 |

### 4.6 Page build summary

| Wave | Pages | Est. effort |
|------|-------|-------------|
| Wave 1 (conversion) | Pricing, Case studies, Comparisons (3) | High (bespoke) |
| Wave 2 (flagship) | Copilot rewrite, AI hub, Virtual/Hybrid, Multi-Org (4) | Medium (FeatureV2) |
| Wave 3 (integration) | CRM Integrations, Developers/API, WhatsApp Concierge (3) | Medium-Low |
| Wave 4 (trust) | Security, Localization, Portals, Billing (4) | Low-Medium |
| Expansions | 5 existing pages | Low |

**Total: ~14 new pages + 5 expansions + Pricing/Case-study/comparison bespoke work.**

---

## Section 5 — SEO Improvements

**Note on the existing `SEO_AUDIT_AND_PLAN.md` (2026-04-07):** Since that audit was written, several P0 items have **already been fixed** in code:
- ✅ `/feature/{slug}/` → `/{slug}/` 301 redirects (live in `src/middleware.ts`)
- ✅ Root-level blog slug → `/blog/{slug}/` fallback redirect (middleware checks WP for matching post on 404)
- ✅ Old WP sitemap URLs → new Astro sitemap-index
- ✅ Legal pages (privacy/terms/cookie/cancellation) now exist and are in the sitemap
- ✅ `robots.txt` updated with AI-crawler allow/disallow rules (GPTBot, ClaudeBot, etc.)

So this section focuses on **(A) remaining legacy gaps, (B) SEO for the new pages in Section 4, and (C) ongoing/on-page improvements.**

### 5.1 Remaining legacy gaps (verify + close)

| # | Issue | Status / Action | Priority |
|---|-------|-----------------|----------|
| L1 | `cms.eventhex.ai` (WordPress) indexable → duplicate content | **Verify** Rank Math is set to noindex. Override robots.txt on CMS to `Disallow: /`. Fix WP canonicals to point to `eventhex.ai`. | P0 |
| L2 | Programmatic pages missing from sitemap | `sitemap-pages.xml.ts` is a **manual static list** — industries/use-cases/integrations/sub-use-cases still missing. **Switch to file-system auto-generation** or generate the list from the collections programmatically. | P1 |
| L3 | Homepage / about-us / contact-en canonicals | Verify each page passes `canonical` to `MarketingLayout`. Or make `MarketingLayout` auto-derive canonical from `Astro.url` when omitted. | P1 |
| L4 | Blog canonical vs URL mismatch | Middleware now redirects root `/{slug}/` → `/blog/{slug}/`. **Decide** canonical = `/blog/{slug}/` and update `sitemap-posts.xml` accordingly so canonical URL = indexed URL. | P1 |
| L5 | No `BreadcrumbList` schema | Add BreadcrumbList JSON-LD (Home > Features > {Feature}) via `MarketingLayout` or per-page. Eligible for rich results. | P2 |
| L6 | Google Fonts render-blocking | Self-host Inter + Manrope, or use `media="print" onload` swap. Improves LCP/CWV. | P2 |
| L7 | CMS-hosted images (`cms.eventhex.ai/wp-content/...`) | Migrate hero/feature SVGs + logos into `/public/` (self-host). Removes cross-origin latency + WordPress dependency + decouples from CMS noindex (L1). | P2 |

### 5.2 SEO for the NEW pages (Section 4) — checklist per page

Each new page must ship with:

- [ ] **Unique `<title>`** (≤60 chars) with primary keyword front-loaded
- [ ] **Unique meta description** (≤155 chars), compelling + keyword
- [ ] **Explicit `canonical`** (no missing-canonical regression)
- [ ] **OG image** + Twitter card (page-specific, not generic) — generate per-feature OG images
- [ ] **JSON-LD:** `SoftwareApplication` (or `Product`/`Service`) + `FAQPage` (min 4 Q&As) + `BreadcrumbList`
- [ ] **H1** contains primary keyword; one H1 only
- [ ] **Internal links** in + out (see 5.3)
- [ ] **Added to sitemap** (L2 fix makes this automatic)
- [ ] **Image alt text** descriptive + keyword where natural
- [ ] Min **800–1200 words** of genuine content (not fluff) for feature pages

### 5.3 Internal-linking architecture (new pillar structure)

The new pages create a **pillar-and-cluster** structure. Wire internal links so link equity flows and Google understands topical authority:

```
Home
 ├─ /features/  (hub → all feature clusters)
 ├─ /ai-platform/  (NEW pillar → Copilot, Recap, Photos, Smart-Connect, Voice Forms, Website Gen)
 ├─ /pricing/  (NEW → links to every feature with "included in...")
 ├─ /virtual-hybrid-events/  (NEW pillar → Meetings, Live Streaming, Meet/Calendar)
 └─ /industries/ / /use-cases/  (cross-link ↔ relevant features)
```

- Every feature page: "Related features" cross-links (3–4) at the bottom.
- Pricing page: links to each feature's section.
- AI hub: links to each AI sub-feature.
- Comparison pages: link to the relevant feature + pricing.
- Use `FeaturesSection` tab naming **aligned** to feature page slugs (fixes Section 1.4 / C5).

### 5.4 Keyword targeting map (high-value terms to capture)

| Keyword cluster | Best page | Notes |
|-----------------|-----------|-------|
| "event management software pricing" | `/pricing/` | Currently uncaptured |
| "AI event management" / "AI event platform" | `/ai-platform/` + `/ai-event-copilot/` | Flagship |
| "virtual event platform" / "hybrid event software" | `/virtual-hybrid-events/` | Top-3 buyer term |
| "white label event management" | `/multi-org-white-label/` | Enterprise |
| "eventhex vs cvent/bizzabo" | `/compare/*` | High-intent |
| "whatsapp event marketing" | `/whatsapp-concierge/` | Regional |
| "event CRM integration hubspot" | `/crm-integrations/` | Integration buyers |
| "event management API" | `/developers/` | Technical |
| "event ticketing software" (existing) | `/event-ticketing/` | Maintain/rank |
| Industry/use-case long-tail (existing) | `/industries/*`, `/use-cases/*` | Already strong — keep |

### 5.5 Technical / on-page SEO checklist (site-wide)

- [ ] Run a **fresh crawl** (Screaming Frog / site:operator) after new pages launch to confirm 0 new 404s and canonicals resolve.
- [ ] Add **`hreflang`** only if localization pages launch (Arabic/DE) — else skip (avoids misconfigured hreflang).
- [ ] Ensure **`llms.txt`** is updated to list the new pillar pages (Copilot, AI hub, Pricing) for LLM/AI-search visibility.
- [ ] Submit updated sitemap to **Google Search Console** + Bing after launch; monitor indexing of new URLs.
- [ ] Add **page-speed budget**: lazy-load below-the-fold images, set explicit `width`/`height` to prevent CLS, use `loading="lazy"` (most feature SVGs already do).
- [ ] **Consolidate naming** (C5): pick ONE name per feature everywhere (hero, nav, features index, sitemap). E.g. standardize on "AI Photo Gallery" not "AI-Photo Distributor".
- [ ] Add **`lastmod`** updates to sitemap entries when content changes (the static list supports this — keep it current).

### 5.6 SEO quick wins (do first, ~1 day each)

1. **Verify L1** (CMS noindex) — highest duplicate-content risk.
2. **Auto-generate sitemap** (L2) — unblocks indexing of all new + existing programmatic pages.
3. **Add canonical** to the 3 root pages (L3) — one-line each.
4. **Add BreadcrumbList** (L5) to `MarketingLayout` — once, benefits all pages.
5. **Consolidate naming** (C5) — homepage card labels → match feature page titles.

---

## Section 6 — Home Page & Basic Elements Plan

This section specifies changes to the **homepage** and the **site-wide "basic elements"** (header, footer, CTAs, global components, layout). The goal is a coherent conversion architecture that surfaces the new pages from Section 4 and fixes the weaknesses from Section 1.

### 6.1 Homepage restructure (`index.astro` → `home-new/`)

Current homepage: Hero → Dashboard (Lottie + logos) → Features (3-tab bento) → AI (stacking cards + testimonials) → Blog → Sticky demo bar.

**Proposed new section order** (insert 3 new sections, upgrade 3 existing):

| # | Section | Change | Rationale |
|---|---------|--------|-----------|
| 1 | **HeroNew** (upgrade) | Add secondary CTA ("See pricing" / "Start free"), trust badges ("0% platform fee", "4.8★", "20+ industries"), and a one-line value prop with key differentiators. Keep "Request a demo" primary. | C1: more than one conversion path |
| 2 | **LogoBar / trust strip** (split from DashboardSection) | Pull the ~22 client logos into a dedicated "Trusted by" strip right under the hero with a count ("500+ events powered"). | Social proof higher = better |
| 3 | **DashboardSection** (keep) | Lottie dashboard animation + engagement headline. | Works well |
| 4 | **FeaturesSection** (upgrade — naming fix C5) | **Align every card label to its feature-page title + URL.** Add the missing flagship capabilities as cards/tabs: add a **Virtual/Hybrid** card, **AI Copilot** (updated copy), **Multi-Org/White-label**. Consider a 4th tab "Always-On Platform" (billing, integrations, multi-org). | C5 + Section 4 visibility |
| 5 | **NEW: Pillars band** | 3-up card band linking the new pillar pages: **AI Platform** · **Virtual & Hybrid** · **Multi-Org / White-Label**. Short copy + link. | Surfaces biggest differentiators |
| 6 | **AISection** (keep + fix naming) | Keep stacking cards + testimonials, but **rename cards to match feature pages** (InstaRecap, InstaSnap). Update "AI Bot" → "AI Event Copilot" linking `/ai-event-copilot/`. | C5 |
| 7 | **NEW: ROI / metrics band** | Hard numbers: "0% platform fees", "45+ AI tools", "3 languages (EN/AR/DE)", "Recall.ai + Vexa meeting bots", "Unlimited events". | Quantifies value (C4 lite) |
| 8 | **NEW: Case-studies teaser** | 3-up cards linking `/case-studies/` (reuse the 3 testimonials as cards with logos + result metrics). | C2 social proof |
| 9 | **Pricing teaser** (new, compact) | A 1-row "Plans from Free → Enterprise" strip linking `/pricing/`. | Routes bottom-funnel |
| 10 | **BlogSection** (keep) | Latest posts. | SEO + freshness |
| 11 | **StickyDemoBar** (upgrade) | Keep personalized demo bar, but add a **secondary "View pricing"** affordance on relevant pages; ensure it doesn't overlap cookie consent. | C1 |

**Homepage Hero upgrade spec (Section 1):**
```
[Badge] AI-Powered Event Management Platform
H1: Run unforgettable events — from sign-up to check-out to recap
Subcopy: Ticketing, registration, AI copilot, virtual/hybrid, networking & analytics — one platform. 0% platform fees with your gateway.
[Request a demo]  [See pricing]
Trust row: ★4.8/5 · 500+ events · 0% platform fee · EN/AR/DE
```

### 6.2 Header / navigation (`HeaderNew.astro`)

The mega-menu is well-built (6 feature categories, integrations, industries dropdowns). Required changes:

1. **Add a "Pricing" top-level nav item** (right-aligned, before Contact). High-intent visitors expect it.
2. **Add new pages into the mega-menu:**
   - AI Features category: add **"AI Platform"** hub link at top; update **Copilot copy** ("4 AI agents" → "Unified AI copilot — 45+ tools").
   - Add a **"Virtual & Hybrid"** card (currently absent) — new category or under Core Management.
   - Add a **"Multi-Org & White-Label"** card.
   - Add **"WhatsApp Concierge"** under Marketing & Growth.
   - Add **"Developer / API"** + **"Security"** (consider a "Platform" category: Multi-Org, Billing, Integrations, Developers, Security, Localization).
3. **Add a top utility row** (optional): Login (CMS), "EN / العربية / DE" locale switcher (links to localization page or future translated site).
4. **Primary CTA in header:** "Book a demo" — keep. Consider adding a subtle "Start free" if a free tier is marketable.
5. **Mobile menu:** ensure all new items appear; the current hamburger must scale to ~30 links (group by category).

### 6.3 Footer (`FooterNew.astro`)

The footer is the primary discovery + legal surface. Restructure into clear columns:

| Column | Links |
|--------|-------|
| **Product** | Features index, AI Platform, Virtual & Hybrid, Multi-Org, Pricing, Integrations, Mobile App |
| **AI Suite** | AI Event Copilot, Session Recap, Photo Gallery, Smart-Connect, Voice Forms |
| **Solutions** | Industries (top 6 + "view all"), Use Cases (top 6 + "view all") |
| **Resources** | Blog, Case Studies, Developer/API, Comparisons |
| **Company** | About, Contact, Partnership, Security, Careers (if any) |
| **Legal** | Privacy, Terms, Cookie, Cancellation/Refund, GDPR |

- Add a **newsletter signup** + **social links** + **app store badges** (mobile app).
- Add **trust badges** (payment partners: Stripe/Razorpay/Tap; SOC2/GDPR if applicable).
- Ensure **all 4 legal links resolve** (Section 5/Legal pages exist now — verify in footer).

### 6.4 Global conversion elements

- **CTA component variety:** Standardize a reusable CTA section with variants: "Book a demo" (primary), "Start free" (secondary), "View pricing" (tertiary), "Watch demo" (video). Feature pages currently only have one footer CTA — add a mid-page secondary CTA.
- **StickyDemoBar:** generalize the personalization (currently hardcoded "Hamim Akif") — make it data-driven / locale-aware.
- **WhatsAppWidget** (global): ensure it complements (not duplicates) the sticky demo bar; consider routing to WhatsApp Concierge for relevant audiences.
- **Trust badges component:** reusable strip (rating, event count, fee model, languages) for hero + footer + pricing.

### 6.5 Layout & global components (`MarketingLayout.astro`)

- **Breadcrumb component:** add site-wide (Section 5/L5) — renders Home > {Section} > {Page} + BreadcrumbList JSON-LD.
- **Canonical auto-generation:** derive from `Astro.url` when not passed (Section 5/L3) — prevents future missing-canonical regressions.
- **OG image per page:** add a default branded OG image + per-page overrides; the new pillar pages need custom OG images.
- **Asset migration:** move CMS-hosted images (`cms.eventhex.ai/wp-content/...`) to `/public/` self-hosted (Section 5/L7) — affects hero backgrounds, feature SVGs, logos, avatars. Biggest single performance + reliability win.
- **Cookie consent (`CookieConsent.astro`):** ensure it doesn't conflict with StickyDemoBar positioning, and that it complies once localization/GDPR pages land.

### 6.6 Design system / naming consolidation (cross-cutting, C5)

Adopt a **single canonical naming table** used everywhere (header, hero cards, features index, footer, sitemap, schema). Proposed canonical names:

| Canonical name | Do NOT use |
|----------------|-----------|
| Event Website Builder | "Event Builder" |
| AI Photo Gallery | "AI-Photo Distributor", "InstaSnap AI" (InstaSnap ok as product sub-name) |
| AI Session Recap | "AI Note Maker" (InstaRecap ok as product sub-name) |
| Event Analytics | "Smart Analytics" |
| Event Marketing | "Attendee Retargeting" (retargeting = a feature within) |
| Live Polling & Q&A | "Instant Feedback" |
| Event Mobile App | "Attendee App" |
| AI Event Copilot | "AI Bot" |

### 6.7 Homepage / basic-elements build order

1. Canonical naming pass (C5) — low effort, high consistency. *(Wave 0)*
2. Header: add Pricing nav + update mega-menu (Copilot copy, new cards). *(Wave 1)*
3. Footer restructure (new columns + legal verify). *(Wave 1)*
4. Hero upgrade (secondary CTA + trust badges). *(Wave 1)*
5. New homepage sections (pillars band, metrics, case-study teaser, pricing teaser) — gated on Section 4 pages existing. *(Wave 2)*
6. Global: breadcrumbs, canonical auto-gen, asset migration. *(Wave 2–3)*

---

## Section 7 — Executive Summary & Roadmap

### 7.1 The situation in one paragraph

EventHex has a **deep, mature product** (~50–55 marketable capabilities across 12 domains, with genuinely differentiated AI, virtual/hybrid tooling, and multi-org/white-label). But the marketing site (`eventhex.ai`) markets only **~23 of those capabilities** and undersells the flagship AI Copilot (whose page is outdated). It also lacks the commercial pages buyers expect — **no pricing, no case studies, no comparison pages** — and offers a single "Book a demo" conversion path. SEO infrastructure is strong (structured data, programmatic industries/use-cases, AI-crawler rules) and most legacy P0 issues are already fixed, but the sitemap is manual/incomplete and naming is fragmented. Closing these gaps is primarily a **content + IA + conversion-architecture** effort, not a deep engineering one.

### 7.2 Headline numbers

| Metric | Now | Target |
|--------|-----|--------|
| Dedicated feature pages | 23 | ~37 (+14) |
| Commercial pages (pricing/case-study/compare) | 0 | 5 |
| Pillar hub pages | 0 | 3 (AI, Virtual/Hybrid, Multi-Org) |
| Top-level conversion paths | 1 (demo) | 3–4 (demo, pricing, free trial, video) |
| Product capabilities with landing presence | ~35/55 | ~52/55 |
| Fragmented feature names | 8 | 0 |

### 7.3 Consolidated roadmap (phased)

**Phase 0 — Foundations & cleanup (Week 1)** · low effort, unblocks everything
- Canonical naming pass across header/hero/features/footer (C5)
- Header: add Pricing nav, update Copilot mega-menu copy
- Footer restructure + verify legal links
- SEO quick wins: verify CMS noindex (L1), auto-generate sitemap (L2), add canonicals to 3 root pages (L3), add BreadcrumbList (L5)
- Hero upgrade: secondary CTA + trust badges

**Phase 1 — Conversion unblock (Weeks 2–3)** · highest revenue impact
- **Pricing page** (G1) — bespoke, sync tiers with CMS `subscriptionPlan`
- **Case studies** index + 3 seed stories (C2)
- **Comparison pages** ×3 (C3) — EventHex vs Cvent/Bizzabo/Whova
- Begin **asset migration** CMS→`/public/` (L7)

**Phase 2 — Flagship features (Weeks 4–6)**
- **AI Event Copilot rewrite** (G4) + **AI Platform hub** (G13)
- **Virtual & Hybrid Events** page (G2) + Live Streaming (G9)
- **Multi-Org / White-Label** page (G3)
- Homepage new sections (pillars band, metrics, case-study teaser, pricing teaser)

**Phase 3 — Integration & platform (Weeks 7–9)**
- **CRM Integrations** (G5), **Developer/API** (G7), **WhatsApp Concierge** (G8)
- Expand existing pages: Event Analytics (AI insights), Event Marketing (AI copy), Speaker Mgmt (LinkedIn import), Website Builder (AI gen)

**Phase 4 — Trust & completeness (Weeks 10–12)**
- **Security & Compliance** (G12), **Localization** (G11), **Portals hub** (G10), **Billing overview** (G6)
- Global: OG images per page, cookie-consent positioning, final asset migration

### 7.4 Priority matrix (impact vs effort)

```
HIGH IMPACT
    │   Pricing(G1)        Copilot(G4)
    │   CaseStudies(C2)    Virtual(G2)     AI Hub(G13)
    │   Comparisons(C3)    MultiOrg(G3)
    │                      CRM-Int(G5)  Dev/API(G7)  WA-Concierge(G8)  Localization(G11)
    │   [naming C5]        Security(G12) Portals(G10) Billing(G6)
    │   [breadcrumbs L5]   [sitemap L2]  [canonicals L3]
LOW │________________________________________________________
   LOW                    EFFORT                      HIGH
```

### 7.5 Decisions needed from stakeholders before build

1. **Pricing transparency:** publish full tier pricing, or "Starting from $X" + talk-to-sales? (Affects G1 design + legal review.)
2. **Competitor naming:** willing to name Cvent/Bizzabo/Whova explicitly on comparison pages? (Legal/branding.)
3. **Self-host assets:** confirm we can move CMS WordPress images to the Astro `/public/` (L7) — or must they stay on WP?
4. **Free trial:** is a self-serve free signup a real path? (Drives CTA strategy — "Start free" vs demo-only.)
5. **Localization rollout:** ship EN-only with a localization *page*, or actually translate the marketing site to AR/DE? (Scope difference.)
6. **Case-study permission:** can we publish client names/metrics (Wellbeing at Work, SOLID, Gulf Indian Trade Expo)?
7. **Copilot claims:** the rewrite will cite "45+ tools / agentic / RAG" — confirm these are GA (not internal-only) before publishing.

### 7.6 Success metrics (how we know it worked)

- **Organic:** +new ranking keywords for "pricing", "virtual event platform", "white label event", "vs cvent"; programmatic pages indexed (GSC coverage 32 → 130+ pages).
- **Conversion:** demo-form completion rate ↑ (more qualified due to pricing pre-qualification); bounce rate on homepage ↓; pricing page becomes a top-5 landing page.
- **Engagement:** pages/session ↑ (pillar→cluster internal links); time-on-page ↑ on rewritten Copilot page.
- **Sales enablement:** reps can send a pricing/comparison/security link instead of only a demo CTA.

### 7.7 What this plan deliberately does NOT do

- Does not propose a CMS replatform or new framework (Astro is correct).
- Does not touch the WordPress CMS app itself beyond the noindex/canonical fix (L1).
- Does not invent features the product lacks — every recommended page maps to a real, shipping capability (verified against CRM + API).
- Does not over-engineer: new feature pages reuse the existing `FeatureV2Layout`; only Pricing/Case-Study/Comparison need bespoke layouts.

---

**Document status:** Complete (7 sections). Built incrementally and reviewed section-by-section per the brief. Ready for stakeholder review of Section 7.5 decisions, then Phase 0 execution.
