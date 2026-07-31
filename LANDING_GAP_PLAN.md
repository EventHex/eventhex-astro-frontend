# EventHex Landing Page — Analysis, Gap Assessment & Action Plan

**Prepared for:** Founders / Leadership
**Project:** `eventhex-astro-frontend` — the Astro-based marketing website at eventhex.ai (Astro 6, Cloudflare Workers, Tailwind 4)
**Date:** 2026-06-27
**Author:** Engineering analysis pass

### How to read this document

This plan answers one question: **does our marketing website accurately represent everything our product can actually do, and is it set up to be found and to convert?** To answer it, we inventoried three things and compared them:

1. **What the website currently says** — every page, the homepage structure, and the navigation.
2. **What the product actually does** — the real feature surface, read directly from the backend API code and the mobile app, not from marketing copy.
3. **The gap between the two** — capabilities the product has that the website under-sells or never mentions, plus structural and SEO weaknesses.

It then lays out a **phased action plan** to close those gaps, ordered by impact and effort.

The headline finding: **our product is substantially more capable than our website communicates.** We have built several genuinely differentiating features — virtual/hybrid event hosting, a WhatsApp concierge bot, a white-label/franchise system, AI agents — that a prospective customer visiting eventhex.ai would never know exist, because those features have no pages at all. The site's feature pages and navigation (a solid mega-menu) are actually in good shape; the gaps are the missing commercial pages (pricing, customers, comparisons), the un-built pages for our strongest differentiators, and a set of consistency and discoverability fixes.

> **Note on accuracy:** this document was reconciled against a second AI-generated plan (`LANDING_PAGE_IMPROVEMENT_PLAN.md`). That comparison corrected three factual errors in an earlier draft (the navigation, the homepage's existing social proof, and a page count) and added several findings. Section 6 records the full reconciliation; the corrections are already reflected throughout Sections 1–5.

Existing related documents in the repo (referenced, not duplicated here): `EVENTHEX_MIGRATION_AUDIT.md`, `SEO_AUDIT_AND_PLAN.md`, `WEEKLY_CONTENT_PLAN_MAY26_WK4.md`, `SEO_METRICS_LOG.json`.

---

## SECTION 1 — What the Website Currently Says

### 1.1 The homepage

The homepage (`src/pages/index.astro`) is built from a recent redesign (the `home-new/` component set; an older `home/` set still exists in the codebase but is dead/unused). The page presents the following sections, in order:

1. **Hero** — the headline "The AI-Powered Event Management Platform for Every Event," a smaller tagline "Simplify Events | Amplify Results," and a single call-to-action button, "Request a demo," pointing to the demo booking page. The background images are hot-linked from our WordPress CMS rather than served locally.
2. **Dashboard section** — a product/dashboard visual to show the software.
3. **Features section** — an interactive, tabbed grid that organises features by the event lifecycle:
   - **Pre-Event:** Event Builder, Event Ticketing, Sponsor Management, AI Form Builder, Event Marketing
   - **Event Day:** Centralized Dashboard, Attendee App, AI Smart-Connect, Speaker Management, Session Management
   - **Post-Event:** AI-Photo Distributor, Smart Analytics, AI Note Maker, Attendee Retargeting, Instant Feedback
4. **AI section** — a block highlighting AI capabilities.
5. **Blog section** — the latest posts pulled from our WordPress CMS.
6. **Sticky demo bar** — a persistent call-to-action that follows the user down the page.

**What the homepage already has (corrected after a deeper read).** The homepage *does* carry social proof: the Dashboard section includes a "Trusted by" logo carousel (~22 client logos), and the AI section includes a testimonial carousel with real client quotes (Wellbeing at Work, a Youth Business Conclave organiser, and Gulf Indian Trade Expo). So the earlier claim that the page has "no social proof" was wrong — these elements exist; the issue is that they are buried mid-page rather than reinforced near the hero, and they are not expanded into full case-study pages.

**What the homepage is genuinely missing, structurally.** No pricing or even a pricing teaser; no hard statistics/credibility band in the body (events run, attendees served, countries — though the nav's mega-menu footer does show "25+ features · 400+ events · 50+ countries"); no integrations strip; no "why EventHex" or competitive-comparison block; and no FAQ. It offers only a single type of call-to-action ("book a demo") with no lighter-touch alternative such as "explore features" or "see pricing." Critically, our two strongest differentiators — virtual/hybrid hosting and the WhatsApp concierge — do not appear in the feature grid at all. There is also a **naming-consistency problem** (detailed in Section 6): the homepage cards use different labels than the feature pages they link to (e.g. "AI-Photo Distributor" → AI Photo Gallery, "AI Note Maker" → AI Session Recap, "Event Builder" → Event Website Builder), which confuses visitors and weakens on-site search and brand consistency.

### 1.2 The navigation (corrected)

An earlier draft of this analysis described the navigation as a simple nine-item dropdown. That was a mistake — it described a `Header.astro` component that is **dead code and not used**. The live site renders `HeaderNew`, which is a well-built **mega-menu**. Setting the record straight, the real navigation is:

- A **Features mega-menu** organised into six categories that expose roughly 21 feature pages: Core Management (Registration, Ticketing, Check-In, Payment Processing, Centralized Dashboard), Speakers & Content (Speaker, Session, Call for Papers), AI Features (Copilot, Smart-Connect, Photo Gallery, Session Recap, Form Builder), Marketing & Growth (Marketing, Notifications, Sponsor, Exhibitor), Engagement (Live Polling & Q&A, Gamification, Mobile App), and Design & Analytics (Analytics, Badge & Certificate, Website Builder).
- An **Integrations dropdown** listing all nine integrations.
- An **Industries dropdown** listing all 15 industries.
- Top-level items plus a "Book a demo" call-to-action.

So discoverability is far better than first stated. The genuine navigation gaps are narrower: there is **no Pricing entry**, **no Use-Cases dropdown** (12 use-case pages exist but are not in the menu), **no Resources hub** (Blog, News, Glossary), and none of the proposed new pillar pages (Virtual/Hybrid, White-Label, AI hub, WhatsApp Concierge). One content error to fix: the mega-menu describes the AI Copilot as "4 AI agents run your event ops," which is outdated (see Section 6).

### 1.3 What is already built

The site is, in fact, content-rich on its detail pages. We have:

- **~25 feature pages:** AI Event Copilot, AI Form Builder, AI Photo Gallery, AI Session Recap, Badge & Certificate Designer, Call for Papers, Centralized Dashboard, AI Smart-Connect (networking), Event Analytics, Event Check-in, Event Gamification, Event Marketing, Event Mobile App, Event Notifications, Event Payment Processing, Event Registration, Event Ticketing, Event Website Builder, Exhibitor Management, a Features hub, Live Polling & Q&A, Session Management, Speaker Management, and Sponsor Management.
- **Programmatic "feature × event-type" pages** — six of our features (ticketing, check-in, AI photo gallery, analytics, registration, live polling) each have ten event-type variants (conferences, trade shows, corporate events, etc.), giving us a large bank of long-tail landing pages.
- **15 Industry pages:** associations, cultural, education, finance, government, healthcare, hospitality, manufacturing, media, middle-east, NGO, real-estate, retail, sports, technology, plus an index.
- **12 Use-Case pages** (plus index): academic conferences, award ceremonies, conferences, corporate events, festivals, fundraising events, government events, hybrid events, networking events, product launches, trade shows, workshops.
- **9 Integration pages** (plus index): email, HubSpot, push notifications, Razorpay, Stripe, Tap Payments, webhooks, WhatsApp, WordPress.
- **Content and supporting pages:** About, Book-a-Demo (with thank-you page), Contact, Partnership, Blog (with article and category pages), News (with article pages), the Features hub, and all four legal pages (privacy, terms, cookie, refund).

### 1.4 What is known to be missing (from the prior migration audit)

A previous internal audit already flagged pages that were planned but never built:

- **Top-level trust pages:** a Customers page and a Security page.
- **Nine competitive comparison pages:** EventHex vs Eventbrite, Cvent, Hopin, Whova, Bizzabo, Splash, and Airmeet, plus "best event management software" and "best conference apps."
- **A 54-term Glossary** — valuable for long-tail SEO.
- **Seven location pages:** event management in Dubai, Abu Dhabi, Riyadh, London, Singapore, Mumbai, and Doha.
- **No pricing page exists anywhere on the site.**

### 1.5 Technical foundation

The site runs on Astro 6, deployed to Cloudflare Workers, styled with Tailwind 4, with Lottie animations. Dynamic content (blog, news, legal pages) is pulled from the WordPress CMS at `cms.eventhex.ai` via its REST API. Per-page SEO metadata — page titles, descriptions, Open Graph and Twitter cards, and structured data (Organization and WebSite schema everywhere; FAQ and SoftwareApplication schema on feature pages) — is handled centrally through a shared marketing layout.

> **Section 1 takeaway:** The site has strong, detailed feature pages but a homepage and navigation that expose only a fraction of them, and it is missing several important commercial and trust pages (pricing, customers, security, comparisons). The next step was to establish what the product *actually* does, so we could find capabilities the site never mentions at all.

---

## SECTION 2 — What the Product Actually Does

To avoid relying on existing marketing copy (which is exactly what we are auditing), we read the feature surface directly from the source: the backend API codebase (`eventhex-saas-api`) and the Flutter mobile app (`event_x_main`). The CMS was excluded from this exercise because it only stores blog, news, and legal content plus media — it carries no product functionality.

What emerged is a platform considerably broader than the website suggests.

### 2.1 Core capability groups (confirmed in the backend)

| Capability area | What the product actually does |
|---|---|
| **Registration** | Multiple ticket/registration types, a custom form builder with conditional fields, group and bulk registration via CSV import — with **AI that auto-maps spreadsheet columns** and **automatic duplicate detection** — waitlists (for both tickets and sessions), RSVP invitations, and shareable registration links. |
| **Ticketing** | Free, paid, and tiered tickets; ticket categories; capacity limits; paid add-ons; coupon and discount codes; and price quotes. |
| **Payments & finance** | Stripe, Razorpay, Tap Payments, and manual/offline payments; **full GST-compliant invoicing, credit notes, and refunds**; payment reconciliation; and a failed-payment log. This is a genuine financial-operations capability, not just a checkout. |
| **Agenda / programme** | Multi-day, multi-stage scheduling; sessions and session types; **per-attendee session booking with waitlists**; downloadable session resources; and session videos. |
| **Call for Papers / abstracts** | A full academic-grade submission portal: abstract submission, reviewer assignment, **rubric-based peer-review scoring**, and a late-submission toggle. |
| **Check-in & access control** | QR-code check-in, **contactless face-match check-in**, zone-based access control, an on-site kiosk flow, and badge/ticket printing with a print log. |
| **Badges & certificates** | PDF badge generation with templates, and certificate issuance. |
| **Speakers** | Speaker profiles, categories, and configurable speaker pages. |
| **Sponsors & exhibitors** | Sponsor tiers, exhibitor profiles, booth team members, **QR-based lead capture/scanning at booths**, and in-app ad placements. |
| **Marketing & campaigns** | Email (via AWS SES and MailerCloud), bulk messaging, a suppression list, a campaign scheduler, and **WhatsApp marketing campaigns**. |
| **Notifications** | Mobile push (broadcast and personalised) via Firebase, a notification queue, and trigger logs. |
| **WhatsApp concierge** | A full conversational bot on the WhatsApp Business API (our MsgHex system) that handles registration, schedules, networking, polls, feedback, payments, and proactive reminders — including **WhatsApp Flows**, which let attendees fill native forms inside the chat without ever opening a browser. |
| **Networking** | **AI-powered attendee matching** (using vector embeddings of attendee profiles), B2B **appointment/meeting booking**, digital connection cards, bookmarks, and shareable contact links. |
| **Photo / face recognition** | **InstaSnap** — using AWS Rekognition, the system clusters faces so an attendee can find every photo of themselves simply by uploading a selfie, with delivery via WhatsApp or email and built-in consent management. |
| **Virtual & hybrid events** | A bot (via Recall.ai) that joins **Zoom, Google Meet, and Microsoft Teams** calls; **RTMP streaming**; and **live transcription across four speech-to-text providers** (Deepgram, Google, Speechmatics, Soniox), plus translation. |
| **Website builder** | **AI-generated** event websites (driven by Google Gemini from a structured spec), with theming, revision history, and headless WordPress integration. |
| **Social advocacy** | Per-attendee **branded share posters** with AI-generated social copy, plus trackable share links and share analytics — a built-in viral/word-of-mouth engine. |
| **Analytics** | Event statistics, in-app analytics, registration-field analytics, billing reports, and **predictive churn scoring** on the subscriber base. |
| **Gamification** | Points-based activity challenges, multiple-choice contests, milestones, position rewards, lucky draws, and a leaderboard / wall of fame. |
| **Automation** | Trigger-based rules with condition sets and outbound webhooks. |
| **CRM** | HubSpot integration syncing contacts, deals, and custom fields, with re-sync. |
| **White-label / multi-org** | A complete **franchise system**: white-labelling, Stripe Connect revenue-splitting, per-franchise feature gating, and whitelisted domains. This is effectively a reseller/agency business model baked into the platform. |
| **SaaS billing** | Subscription plans with **per-plan feature metering enforced at the API level** (not just hidden in the UI), add-on products, and a billing audit trail. |

### 2.2 AI features (a genuine differentiator, confirmed in code)

The product's AI capabilities go well beyond what "AI-powered" usually means on a marketing site:

- **Organizer Copilot** — a conversational AI assistant that works over the organiser's own event data, built from a substantial service layer (intent routing, persona registry, a tool dispatcher, and dedicated tools for audience insights, exhibitors, and ticketing).
- **Four specialist AI agents** beyond the copilot: a Session agent (answers attendee questions), a Ticket agent (registration support), a Copywriter agent (generates event copy and emails), and an Analyst agent (analytics).
- **EventConnect** — embedding-based smart networking that recommends the right people to meet.
- **InstaSnap** face-based photo delivery and **face-match check-in** (both described above).
- **InstaRecap** — a bot captures a session's transcript and generates a personalised recap for each attendee.
- **AI Website Generator** — turns a spec into a full event website via Gemini.
- Plus: AI-generated social-share copy, AI image/banner generation, the AI CSV-import column mapper, AI mind maps, **semantic search** across sessions, speakers, and registrations (using 1024-dimension embeddings in a vector database), and Google Translate-powered internationalisation.

### 2.3 Confirmed integrations

The integrations actually present in the code are far more numerous than the nine we have integration pages for:

- **Payments:** Stripe (including Stripe Connect), Razorpay, Tap Payments.
- **Messaging:** WhatsApp Business (MsgHex), AWS SES, MailerCloud, Firebase Cloud Messaging.
- **CRM:** HubSpot.
- **Virtual meetings:** Recall.ai, Vexa/CaptureMeet (covering Zoom, Google Meet, Microsoft Teams), RTMP.
- **AI & speech:** OpenAI/OpenRouter, Google Gemini, Qwen embeddings, AWS Rekognition, Deepgram, Google Cloud Speech, Speechmatics, Soniox.
- **Other:** YouTube, Google Calendar, LinkedIn (OAuth login), Google Maps, MongoDB Atlas Vector Search, Sentry.

### 2.4 The mobile app (attendee and exhibitor facing)

The Flutter mobile app confirms a rich attendee experience: the agenda with AI session recommendations; speaker directory; session video, live streaming, and recaps; **networking** (attendee directory, connection requests, one-to-one chat, AI matching); **meeting scheduling**; favourites/bookmarks; **QR check-in and a personal QR code**; push notifications and updates; **gamification** (points, leaderboard, streaks, rewards); exhibitor booths and products; **exhibitor lead capture and export**; an **AI chat assistant**; the **InstaSnap photo gallery with social sharing**; polls and Q&A; profile management with a visibility toggle; and downloadable resources.

### 2.5 The biggest mismatches between product and website

Pulling it together, these are the capabilities the **product clearly has** but the **website barely or never markets** — the core of the gap analysis that follows:

1. **Virtual & hybrid events** (Zoom/Meet/Teams hosting, streaming, live multi-language transcription) — *no page exists at all.*
2. **WhatsApp concierge / event bot** — arguably our single most distinctive feature, represented only by a thin integrations page, with no proper feature page.
3. **White-label / franchise / agency model** — a full reseller business capability, with no page surfacing it.
4. **Pricing and plans** — a real subscription and metering engine exists, yet the site has no pricing page whatsoever.
5. **B2B appointment / meeting scheduling** — strong for trade shows and expos, but not given its own page.
6. **Invoicing / GST / finance** — credit notes, refunds, tax handling; under-told, folded into a generic payments page.
7. **Live transcription, captions, and translation** — no page.
8. **Social advocacy** (branded posters, viral sharing) — no page.
9. **Lead capture / lead retrieval** — present in the app and for exhibitors, but thin on the website.
10. **AI specialist agents** (analyst, ticket, copywriter, session) — only the copilot is surfaced; the others are invisible.

> **Section 2 takeaway:** The platform is meaningfully broader and more differentiated than the website presents — especially in virtual/hybrid hosting, WhatsApp automation, white-label/agency capability, pricing, and financial operations. These are not minor features; several are exactly the kind of thing that wins competitive deals, and right now a prospect cannot discover any of them on our site.

---

## SECTION 3 — The Gap Analysis

This section maps each product capability to its current website coverage and the recommended action. Coverage is rated: ✅ covered well · 🟡 partial or weak · 🔴 missing entirely.

### 3.1 Feature coverage

| Product capability | Current page | State | Recommended action |
|---|---|---|---|
| Event website builder | Event Website Builder | ✅ | Add the "AI-generated" angle to the copy — it's a stronger story than the current page tells. |
| Registration | Event Registration | ✅ | Add the AI CSV import, duplicate detection, waitlist, and RSVP capabilities. |
| Ticketing | Event Ticketing | ✅ | Add add-ons, coupons, and quotes. |
| Payments | Event Payment Processing | 🟡 | The B2B finance story (invoicing, GST, credit notes, refunds) is under-told — split it out or strengthen it heavily. |
| Check-in | Event Check-in | ✅ | Add **face-match contactless check-in**, zone access control, and the kiosk flow. |
| Badges & certificates | Badge & Certificate Designer | ✅ | Adequate. |
| Sessions / agenda | Session Management | ✅ | Add session booking and waitlists. |
| Speakers | Speaker Management | ✅ | Adequate. |
| Sponsors | Sponsor Management | ✅ | Adequate. |
| Exhibitors + lead capture | Exhibitor Management | 🟡 | Strengthen the lead capture/retrieval/scanning story and booth-team features. |
| Marketing / email | Event Marketing | ✅ | Adequate. |
| Notifications | Event Notifications | ✅ | Adequate. |
| Analytics | Event Analytics | ✅ | Adequate. |
| Live polling / Q&A | Live Polling & Q&A | ✅ | Adequate. |
| Gamification | Event Gamification | ✅ | Adequate. |
| Call for Papers / abstracts | Call for Papers | ✅ | Add the reviewer/rubric peer-review angle. |
| Mobile app | Event Mobile App | ✅ | Adequate. |
| Centralized dashboard | Centralized Dashboard | ✅ | Adequate. |
| AI Smart-Connect (networking) | AI Smart-Connect | ✅ | Adequate. |
| AI photo / InstaSnap | AI Photo Gallery | ✅ | Adequate. |
| AI session recap / InstaRecap | AI Session Recap | ✅ | Adequate. |
| AI Copilot | AI Event Copilot | ✅ | Adequate. |
| AI Form builder | AI Form Builder | ✅ | Adequate. |
| **Virtual / hybrid events** | — | 🔴 | **Build a new page** covering Zoom/Meet/Teams hosting, streaming, and recording. |
| **Live transcription / captions / translation** | — | 🔴 | **Build a new page** (or a strong section of the virtual page). |
| **WhatsApp concierge / event bot** | only the integrations page | 🔴 | **Build a proper feature page** — this is a flagship differentiator and deserves its own page, distinct from the integration listing. |
| **B2B appointments / meeting scheduler** | — | 🔴 | **Build a new page** with an expo/B2B angle. |
| **White-label / franchise / agency** | loosely, the Partnership page | 🔴 | **Build a White-Label / Agencies page**, or substantially expand Partnership. |
| **Invoicing / GST / finance** | folded into payments | 🔴 | **Build a dedicated page** or a strong, separate section. |
| **Social advocacy / branded share posters** | — | 🔴 | **Build a new page** or section. |
| AI specialist agents (analyst/ticket/copywriter/session) | only the copilot | 🟡 | Add these to the copilot page or a dedicated AI hub. |
| HubSpot CRM sync | HubSpot integration | ✅ | Adequate. |
| Automation / webhooks | Webhooks integration | 🟡 | Consider a dedicated Automation feature page. |
| Semantic / AI search | — | 🔴 | Minor; worth mentioning on relevant pages. |

### 3.2 Commercial and trust pages

| Page | State | Recommended action |
|---|---|---|
| **Pricing** | 🔴 missing | **High priority.** A real subscription/metering engine exists; we should publish a pricing page. Its absence is unusual for a SaaS product and likely costs us qualified leads who self-disqualify or bounce. |
| **Customers / case studies** | 🔴 missing | **High priority** for social proof and credibility. |
| **Security / compliance** | 🔴 missing | Build a page covering GDPR, data handling, and infrastructure — important for enterprise and government buyers. |
| **Competitive comparisons** (vs Eventbrite, Cvent, Hopin, Whova, Bizzabo, Splash, Airmeet, plus two "best of" pages) | 🔴 missing (9) | High commercial-intent SEO; these capture buyers actively comparing options. Best built from a shared template. |
| Integrations hub | ✅ exists | Expand to add the WhatsApp bot, Zoom, Google Meet, Teams, Firebase, MailerCloud, LinkedIn, Google Calendar, YouTube, and Maps. |
| Glossary (54 terms) | 🔴 missing | Long-tail SEO and topical authority; generate from a template. |
| Location pages (7 cities) | 🔴 missing | Local SEO, particularly strong for our GCC markets. |

### 3.3 Integration coverage

We have nine integration pages, but the codebase confirms many more live integrations. Worth adding pages for: the WhatsApp Business bot (as a capability, not just notifications), Zoom, Google Meet, Microsoft Teams, Firebase, MailerCloud, LinkedIn login, Google Calendar, YouTube, and Google Maps. (Razorpay, Stripe, Tap, HubSpot, email, push, webhooks, and WordPress are already covered.)

### 3.4 Homepage gaps

Beyond the missing pages, the homepage itself under-performs against both our product breadth and standard conversion practice. (Note the corrections from Section 1.1: the homepage *does* already have a trusted-by logo carousel and a testimonial carousel — those are not gaps; the work there is to surface and strengthen them, not create them.)

1. **Social proof is buried** — the logo carousel and testimonials sit mid-page; pull a trust strip up near the hero and expand the testimonials into linked case studies.
2. **No hard statistics band in the body** — the mega-menu footer shows "400+ events · 50+ countries," but the homepage body has no equivalent credibility band.
3. **No pricing entry point** — even a simple "see plans" teaser.
4. **Our two strongest differentiators — virtual/hybrid hosting and the WhatsApp concierge — do not appear** in the Pre/Event/Post feature grid at all.
5. **No entry point to use-case pages** — 12 use-case pages exist and none are linked from the homepage (industries are at least reachable via the nav).
6. **No integrations strip** — logos build instant credibility (Stripe, Razorpay, HubSpot, WhatsApp, Zoom, etc.).
7. **No "why EventHex" / competitive block.**
8. **No FAQ** on the homepage.
9. **A single type of call-to-action** — only "book a demo"; there is no lighter-touch option for visitors not yet ready to talk to sales.
10. **Naming fragmentation** — homepage cards use different names than the pages they link to (see Section 6).

> **Section 3 takeaway:** The work divides cleanly into three buckets — (a) roughly six net-new feature pages that surface our strongest hidden differentiators, (b) the missing commercial/trust pages (pricing, customers, security, comparisons), and (c) a homepage and navigation restructure that finally exposes the ~50 pages we have already built but currently hide.

---

## SECTION 4 — SEO Status

We re-verified the SEO foundation directly against the current code rather than relying on the earlier audit (which was written in April and is now substantially out of date). The good news: most of what that audit flagged as critical has since been fixed.

### 4.1 Already resolved

- **Canonical tags** are now generated automatically for every page from its URL, including the homepage, About, and Contact (which previously lacked them).
- **Legal pages** (privacy, terms, cookie, refund) now exist and are in the sitemap.
- **Redirects** from old WordPress URLs are handled in middleware — old `/feature/...` URLs and root-level blog slugs now correctly 301-redirect to their new locations, preserving search ranking.
- **Breadcrumb structured data** is now present, improving how pages appear in search results.
- **The sitemap** now lists 141 static pages (industries, use-cases, integrations, programmatic pages, legal, and categories), alongside separate sitemaps for blog posts and news, all under a sitemap index.
- **The robots file is healthy** and, notably, explicitly welcomes AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot) — good positioning for AI-answer visibility — while intentionally blocking one aggressive scraper.
- **An `llms.txt` file exists** (`pages/llms.txt.ts`) — good for discovery by AI/LLM search tools. It should be kept updated as new pillar pages (Pricing, AI hub, Virtual/Hybrid) ship.

### 4.2 Still open

| Item | Severity | Note |
|---|---|---|
| **WordPress CMS indexing** | ✅ Resolved (verified 2026-06-27) | Checked over HTTP: `cms.eventhex.ai` home, blog posts, and feature pages all serve `<meta name="robots" content="nofollow, noindex">`, and robots.txt allows crawl (only `/wp-admin/` blocked) so Google can read and honour the noindex. The duplicate-content risk is handled — no longer the open critical. |
| **The sitemap is a manually maintained list** | 🟡 | Every new page must be added by hand or Google will not discover it. With ~80 new pages proposed below, this becomes a real liability — we should switch to auto-generating the sitemap from the page files. |
| Google Fonts block rendering | 🟡 | Self-hosting or async-loading the fonts would improve page-load speed scores. |
| Generic social-share images | 🟡 | Feature pages share a generic preview image; page-specific images improve click-through from social and search. |
| Image alt-text consistency | 🟡 | Varies by component. |
| Multi-language tags | 🟢 | Only needed if we launch the site in multiple languages (the backend already has translation capability, so this may come up). |

### 4.3 SEO requirements for the new pages

Every new page proposed in this plan should ship with: a unique title and description, the automatic canonical tag (inherited from the layout), FAQ and SoftwareApplication structured data (reusing our existing feature-page pattern), breadcrumb data, a page-specific social-share image, and a sitemap entry (until auto-generation is in place). The large programmatic sets (comparisons, glossary, locations) should generate their sitemap entries as part of their build.

### 4.4 The biggest SEO opportunities

- **Competitive comparison pages (9)** — these capture buyers at the bottom of the funnel actively comparing tools, the highest commercial intent there is. Build these first among the SEO pages.
- **Glossary (54 terms)** — top-of-funnel long-tail traffic plus a strong internal-linking hub that lifts the whole site's authority.
- **Location pages (7)** — local-intent searches in our strongest markets (Dubai, Riyadh, Abu Dhabi, Doha, and others).
- **A pricing page** — ranks for "[competitor] pricing" and "[competitor] alternative" searches as well as serving conversion.
- **The new feature pages** (virtual/hybrid, WhatsApp concierge, white-label, appointments) target keyword clusters where we currently have **zero coverage** because the pages simply don't exist.

> **Section 4 takeaway:** Our SEO foundation is genuinely solid — the team has closed nearly all of the previously identified issues. The two things that matter now are (1) confirming the CMS is set to noindex, and (2) moving off the manual sitemap before we add the new pages.

---

## SECTION 5 — The Action Plan

The plan is organised into phases by impact and dependency. A key point for resourcing: **most of the new feature pages are content and copywriting work, not new engineering** — they reuse an existing, proven page template (hero, stats, feature grid, how-it-works, FAQ, and call-to-action sections). Effort is marked S (half a day or less), M (one to two days), or L (three days or more).

### Phase 0 — Quick wins and fixes (do first)

| Task | Effort | Why it matters |
|---|---|---|
| Confirm the CMS is set to noindex and its canonicals point to eventhex.ai | S | The only remaining critical SEO risk; protects all our content rankings. |
| Fix the AI Copilot label in the existing mega-menu ("4 AI agents") and across the homepage cards | S | Outdated/inconsistent messaging on our flagship feature. |
| **Naming-consistency pass** — make homepage cards, nav, and feature-page titles use one canonical name each (Section 6 table) | S | Confuses visitors and weakens on-site search/SEO today. |
| Extend the existing mega-menu — add **Pricing**, a **Use-Cases** dropdown, a **Resources** hub (Blog, News, Glossary), and the new pillar pages as they ship | S–M | The mega-menu already exists and is good; this is an extension, not a rebuild. |
| Add a secondary, lighter call-to-action on the homepage alongside "book a demo" | S | Captures visitors not yet ready to talk to sales. |
| Self-host or async-load the fonts; begin migrating hot-linked CMS images to `/public/` | S–M | Faster page loads, better Core Web Vitals, and removes the dependency on WordPress uptime. |

### Phase 1 — Homepage restructure

Rebuild the homepage to this section order. Note: the trust components already exist in the live homepage (`home-new`) — we are repositioning and strengthening them, not creating them from scratch:

1. Hero (with the new secondary call-to-action and ideally a short product video/loop)
2. **Trust strip** — promote the existing customer-logo carousel up near the hero, with a count ("400+ events powered")
3. **Statistics band** — events run, attendees, countries, integrations (the figures already live in the mega-menu footer)
4. Feature grid (Pre/Event/Post) — **with names aligned to the feature pages**, and **now including Virtual/Hybrid and WhatsApp Concierge** cards
5. AI section (keep; rename cards to match the feature pages)
6. **Use-case entry points** — link the 12 existing use-case pages (industries are already in the nav)
7. **Integrations strip** — partner logos
8. **Testimonials** (the existing carousel) + a **case-studies teaser** linking the new case-study pages
9. **Pricing teaser** linking to the new pricing page
10. **FAQ** (with structured data)
11. Blog (keep)
12. Closing call-to-action and sticky demo bar

### Phase 2 — New feature pages (closing the biggest product gaps)

In priority order, differentiators first:

1. **Virtual & Hybrid Events** — Zoom/Meet/Teams hosting, streaming, live captions and translation. (L)
2. **WhatsApp Event Concierge** — the bot and WhatsApp Flows, as a proper feature page distinct from the integration listing. (M)
3. **White-Label / Agencies** — the franchise, revenue-split, and reseller story (or a major expansion of the Partnership page). (M)
4. **Appointments & Meetings** — B2B one-to-one scheduling, with an expo angle. (M)
5. **Social Advocacy** — branded share posters, AI copy, and share analytics. (M)
6. **Invoicing & GST** — invoices, credit notes, refunds, and tax (a dedicated page or strong section on the payments page). (S–M)
7. **Enhance existing pages** with the under-told capabilities identified in Section 3.1 (face-match check-in, AI import, session booking, exhibitor lead capture, CFP peer-review, the AI specialist agents). (S each)

### Phase 3 — Commercial and trust pages (conversion)

1. **Pricing** — high priority; the plan tiers can be drawn from the existing subscription system. (M)
2. **Customers** — case studies, logos, and testimonials. (M)
3. **Security** — GDPR, data handling, infrastructure, and compliance. (S–M)

### Phase 4 — Programmatic SEO at scale (build via templates)

1. **Competitive comparisons (9)** — the seven "vs" pages plus two "best of" pages; bottom-of-funnel intent. (L for the template plus nine data sets)
2. **Glossary (54 terms)** — one template, 54 entries. (L)
3. **Location pages (7)** — Dubai, Abu Dhabi, Riyadh, Doha, London, Singapore, Mumbai. (M)
4. **Integrations expansion** — add the missing integration pages from Section 3.3. (M)

### Phase 5 — SEO infrastructure hardening

1. **Auto-generate the sitemap** from the page files — eliminates the manual-list risk before we add ~80 pages. (M)
2. Add page-specific social-share images for feature and commercial pages. (M)
3. Ensure every new page ships with the full set of structured data. (S per page)
4. Submit the refreshed sitemap to Google Search Console after each batch. (S)

### Suggested sequencing

- **Week 1:** Phase 0 — the fixes and the mega-menu — plus confirming the CMS noindex setting.
- **Weeks 2–3:** Phase 1 (homepage), with the pricing page (Phase 3.1) built in parallel.
- **Weeks 3–4:** Phase 2 — the new feature pages, starting with virtual/hybrid, WhatsApp, and white-label.
- **Weeks 4–5:** Phase 3 (customers, security) plus the auto-generated sitemap (Phase 5.1).
- **Week 5 onward:** Phase 4 — the programmatic SEO sets, in the order comparisons → glossary → locations.

### Expected impact

- **Discoverability:** the mega-menu and new homepage entry points surface roughly 50 pages we have already built but currently hide.
- **Positioning:** six new feature pages close the gap on the platform's strongest, currently-invisible differentiators — virtual/hybrid hosting, WhatsApp automation, white-label, appointments, social advocacy, and financial operations. These are exactly the capabilities that win competitive deals.
- **Conversion:** a pricing page, customer proof, a security page, and homepage trust elements address the reasons qualified visitors leave without converting.
- **SEO:** roughly 80 new, intent-matched, indexable pages (9 comparisons, 54 glossary terms, 7 locations, and the integration expansions), with an auto-generated sitemap to keep them discoverable as we scale.

> **Bottom line:** We do not have a product problem — we have a representation problem. The platform is already far more capable than eventhex.ai communicates. The highest-leverage work is not building new features but making the navigation, homepage, and a handful of new pages tell the truth about what we have already built, then scaling that into the SEO surface that brings buyers to it.

---

## SECTION 6 — Reconciliation with the Second AI Report (`LANDING_PAGE_IMPROVEMENT_PLAN.md`)

A second AI-generated plan (`LANDING_PAGE_IMPROVEMENT_PLAN.md`, also dated 2026-06-26) covered the same brief. We compared the two line by line. The conclusion: the two plans agree on roughly 70% of the substance, but each caught things the other missed. This section records the corrections we made above, the items we absorbed from the second report, and the items unique to this plan that the second report lacks. Read this as the merged, authoritative view.

### 6.1 Corrections the second report forced (already applied above)

The second report was more thorough about the *front-end*, and caught three factual errors in our earlier draft:

1. **Navigation.** Our earlier draft read the wrong file (`Header.astro`, which is dead code) and concluded the menu exposed only nine features. The live site uses `HeaderNew`, a full mega-menu exposing ~21 features across six categories, plus Integrations and Industries dropdowns. **Corrected in Section 1.2.** The real nav gaps are only Pricing, Use-Cases, Resources, and the new pillar pages.
2. **Homepage social proof.** Our earlier draft said the homepage had "no social proof, no testimonials." In fact it has a trusted-by logo carousel and a testimonial carousel with real client quotes. **Corrected in Sections 1.1 and 3.4.** The work is to surface and expand these, not create them.
3. **Counts.** Industries are 15, not 16 (corrected). `llms.txt` exists (added to Section 4.1).

### 6.2 Strong additions absorbed from the second report

The following were under-developed or absent in our plan and are now adopted:

- **Naming fragmentation (high-value, low-effort).** The homepage and feature pages use different names for the same feature. This hurts UX and on-site search. Adopt a single canonical name everywhere:

  | Canonical name (use this) | Do NOT use |
  |---|---|
  | Event Website Builder | "Event Builder" |
  | AI Photo Gallery | "AI-Photo Distributor" (InstaSnap OK as a product sub-name) |
  | AI Session Recap | "AI Note Maker" (InstaRecap OK as a sub-name) |
  | Event Analytics | "Smart Analytics" |
  | Event Marketing | "Attendee Retargeting" |
  | Live Polling & Q&A | "Instant Feedback" |
  | Event Mobile App | "Attendee App" |
  | AI Event Copilot | "AI Bot", "4 AI agents" |

- **AI Copilot page is outdated.** Both the page and the mega-menu describe "four AI agents." The product has since evolved into a unified agentic copilot (with many tools, voice input, and semantic search) *in addition to* the specialist agents. The page should be rewritten — and the messaging verified with the product team before publishing specific claims (tool counts, "agentic," RAG).
- **CMS-hosted asset coupling.** Hero backgrounds, feature illustrations, logos, and avatars are hot-linked from `cms.eventhex.ai/wp-content/...`. This ties our marketing-site performance and availability to WordPress and adds cross-origin latency. Migrate these into the site's own `/public/` folder. (Added to Phase 0 / Phase 5.)
- **A dedicated AI hub / pillar page** (`/ai-platform/`) that consolidates all AI features into one narrative and internal-linking hub — stronger for SEO than scattered pages.
- **Localization as a selling point.** The product supports English, Arabic (with right-to-left layout), and German. The site is English-only and never mentions this. This is a real differentiator for our GCC and European buyers — add at least a localization section, ideally a page.
- **Developer Platform / API page.** We have an extensive REST API, webhooks, and API keys. Technical buyers evaluate API depth; there is no developer page today.
- **Portals hub.** The product has several self-service B2B portals (exhibitor, reviewer/peer-review, AV team, speaker, sponsor). "Self-service portals" is a recognised buying category and is entirely absent from the site.
- **Footer restructure.** The footer is a primary discovery and trust surface and should be organised into clear columns (Product, AI Suite, Solutions, Resources, Company, Legal) with app-store badges, payment-partner logos, and verified legal links.
- **Stakeholder decisions and success metrics** (see 6.4 and 6.5) — useful framing the second report had and this one lacked.
- **Finer commerce detail** to fold into the pricing/finance work: a subscription tier structure (Free / Starter / Pro / Premium / Custom), an **add-ons marketplace**, **quote/proposal management**, and **multi-currency + tax** handling — all present in the product.

### 6.3 What this plan has that the second report lacks (keep)

This plan should remain the master because it carries material the second report omitted entirely:

- **Glossary (54 terms)** and **location pages (7 cities)** — significant programmatic-SEO surfaces the second report never mentions.
- **Nine competitive comparison pages**, not three. The second report scoped only EventHex vs Cvent/Bizzabo/Whova; the fuller set (adding Eventbrite, Hopin, Splash, Airmeet, plus two "best of" pages) was already planned in the migration audit. **Merge:** build all nine, but prioritise the three highest-traffic ("vs Cvent," "vs Bizzabo," "vs Whova") first.
- **Deeper backend evidence** — four-provider live transcription (Deepgram, Google, Speechmatics, Soniox), Recall.ai/Vexa meeting-bot architecture, predictive churn scoring, the franchise system's Stripe Connect revenue-split, and AI smart-match via vector embeddings. This is the proof behind the differentiator claims.
- **The programmatic feature × event-type page bank** (60 pages already built) as an existing SEO asset.
- **A re-verified SEO status** confirming, against current code, exactly which prior issues are already fixed.

### 6.4 Merged build priority

Combining both reports, the consolidated order is:

1. **Phase 0 quick wins** — confirm CMS noindex; naming-consistency pass; fix Copilot label; extend the existing mega-menu (Pricing, Use-Cases, Resources); secondary CTA; begin asset migration.
2. **Conversion unblock** — Pricing page; expand the existing testimonials into Customer/Case-Study pages; the three priority comparison pages.
3. **Flagship pages** — rewrite AI Copilot + new AI hub; Virtual & Hybrid (with live streaming/transcription); White-Label / Franchise.
4. **Integration & platform** — CRM Integrations (HubSpot), Developer/API, WhatsApp Concierge; enhance existing pages with under-told capabilities (face-match check-in, AI import, LinkedIn speaker import, AI website generation, audience insights).
5. **Trust & completeness** — Security, Localization, Portals hub, Invoicing/Billing.
6. **Programmatic SEO at scale** — remaining comparisons, the 54-term glossary, the 7 location pages, integrations expansion; plus the SEO infra hardening (auto-sitemap, per-page OG images).

### 6.5 Decisions needed from leadership before build

These genuinely require a business decision and should be settled before the relevant page is built:

1. **Pricing transparency** — publish full tier pricing, or "from $X / talk to sales"? (Shapes the Pricing page and needs legal review.)
2. **Naming competitors** — are we comfortable naming Cvent, Bizzabo, Whova, etc. on comparison pages? (Branding/legal.)
3. **Self-hosting assets** — confirm we may move CMS WordPress images into the Astro site. (Enables the performance fix.)
4. **Free trial** — is self-serve free signup a real path? (Decides whether "Start free" can be a CTA.)
5. **Localization rollout** — ship English-only with a localization *page*, or actually translate the marketing site into Arabic/German? (Large scope difference.)
6. **Case-study permissions** — may we publish client names and metrics (Wellbeing at Work, Gulf Indian Trade Expo, etc.)?
7. **Copilot claims** — confirm specific capability claims (tool counts, "agentic," voice, RAG) are generally available before publishing.

### 6.6 How we will measure success

- **Organic search:** new rankings for "pricing," "virtual event platform," "white-label event software," and "[competitor] alternative" queries; Search Console page coverage rising from ~32 indexed toward 130+ as the programmatic pages and auto-sitemap land.
- **Conversion:** higher (and better-qualified) demo-form completion once pricing pre-qualifies visitors; lower homepage bounce; the pricing page becoming a top-five landing page.
- **Engagement:** more pages per session from the pillar-and-cluster internal linking; longer time on the rewritten Copilot page.
- **Sales enablement:** reps can send a pricing, comparison, or security link instead of only a demo CTA.

> **Section 6 takeaway:** The two reports are complementary. The second was more accurate on the live front-end (nav, homepage social proof, naming) and contributed the localization, developer/API, portals, footer, and stakeholder-decision angles. This plan contributed the deeper backend evidence, the glossary/location/comparison SEO surfaces, and the re-verified SEO status. Merged, the picture is unchanged in its conclusion — **a representation and discoverability problem, not a product problem** — but the action list is now both more accurate and more complete.
