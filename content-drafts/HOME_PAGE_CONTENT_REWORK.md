# EventHex Home Page — Content Rework (Content-Writer Pass)

**Date:** 2026-07-10
**Scope:** Copy + section plan for `src/pages/index.astro` (home). Keeps the existing visual pattern (hero → dark dashboard band → tabbed features → dark AI band → blog). Adds new sections where the product story has holes.
**Inputs:** current home components, full site inventory (31 feature pages, 6-category nav), GSC 90-day data, SaaS product module list.

---

## 1. Diagnosis — what the current home page does wrong

| # | Problem | Evidence |
|---|---------|----------|
| 1 | **H1 is generic.** "The AI-Powered Event Management Platform for Every Event" — no differentiator, no outcome. Every competitor says the same words. | Hero H1 |
| 2 | **Homepage ranks for brand only.** Non-brand queries it *almost* ranks for get zero clicks: "hex ai" (929 imp, 0 clicks), "event ai" (533 imp), "ai-powered event platform" (pos 28). | GSC, 90d |
| 3 | **Only ~14 of 31 features surface on home.** Missing entirely: check-in, registration flow, 0%-fee payments, WhatsApp Concierge, virtual/hybrid, white-label, invoicing/GST, badge & certificate designer, gamification, appointments, notifications, call for papers. | Inventory vs FeaturesSection |
| 4 | **InstaSnap — the single biggest traffic asset — is buried.** `/ai-photo-gallery/` gets 71,305 impressions/90d (16× the homepage) and "instasnap" alone gets 42k impressions at pos 6.6. Home mentions it once, in card #3 of a stacking carousel. | GSC |
| 5 | **No numbers anywhere.** No events count, attendees count, photos delivered, countries. Trust = logo carousel + 3 testimonials only. | DashboardSection |
| 6 | **No answer-shaped content.** GSC shows AI-assistant-style queries ("which platforms support badge printing and onsite event registration?", "who offers the best ai for event insights?"). Nothing on home answers a question directly → invisible to ChatGPT/Perplexity citations. | GSC quick wins |
| 7 | **No pricing signal, no differentiators.** "0% platform fees with your own gateway", "unlimited events & attendees", "white-label" — these are the actual competitive weapons and none appear on home. | pricing.astro, nav |
| 8 | **No final CTA section.** Page ends on blog cards → footer. Scroll momentum dies with no ask. | index.astro |
| 9 | **Weak/incorrect card copy.** "Event Mobile App — Build A Website with AI Completely No Code!" (copy-paste error, wrong description). Several card descs are feature-speak, not outcome-speak. | FeaturesSection.astro:33 |
| 10 | **Engagement headline is filler.** "EventHex boosts retention through enhanced attendee engagement and personalized user experiences" — abstract, unverifiable, keyword-free. | DashboardSection |
| 11 | **Two shipped flagship products are invisible everywhere on the site.** (a) **EventHex Connector** — a live MCP server (~65 tools, franchise-scoped API keys + OAuth, per-call audit log) that lets Claude/ChatGPT/Cursor create events, configure tickets, build & publish websites, and run analytics. (b) **WhatsApp AI Concierge** — a full conversational bot (agenda Q&A, AI session recommendations, digital ticket/QR, reminders, certificate delivery, photo delivery, registration via WhatsApp Flows, networking business cards). Neither has a single line on the home page. | eventhex-saas-api: routes/connectorMcp.js, services/whatsappBot/* |

---

## 2. Page architecture (existing pattern kept, 4 new sections)

```
 1. Hero                        (rework copy)            — existing
 2. Dashboard band + logos      (rework headline, add stats row)   — existing
 3. NEW → Differentiator strip  ("Why EventHex" 4 proof points)
 4. Features tabs Pre/Day/Post  (rework cards: right features, outcome copy) — existing
 5. AI band (stacking cards)    (rework: lead with InstaSnap, name the products) — existing
5b. NEW → WhatsApp Concierge    (chat-mock split section — "your event, inside WhatsApp")
5c. NEW → EventHex Connector    ("manage your event from Claude/ChatGPT" — MCP, ~65 tools)
 6. NEW → How it works          (3 steps, launch-in-minutes story)
 7. Testimonials                (keep, move out of AI band → own light section w/ results numbers)
 8. NEW → Integrations + industries strip (logos + links, pure SEO/internal-linking)
 9. Blog                        (keep as-is)
10. NEW → FAQ (5-6 Q&A, FAQPage schema) + Final CTA band
```

Rationale: sections 3, 6, 8, 10 are the standard SaaS conversion ladder (proof → process → ecosystem → objection-handling → ask) and each one doubles as an SEO surface the page currently lacks.

---

## 3. Section-by-section copy

### 3.1 Hero (rework)

**Eyebrow** (replaces "Simplify Events | Amplify Results"):
> Registration · Ticketing · Check-In · AI Photo Sharing · Analytics

*(Concrete scope statement. The old tagline can live in the meta description.)*

**H1** *(revised per feedback 2026-07-10 — outcome first: complete event live in minutes, not hours)*:
> Launch Your Entire Event in Minutes, Not Hours

**Supporting line (carries the SEO keyword the H1 gave up):**
> EventHex is the AI-powered event management platform: describe your event, and the website, registration, and tickets are live before your coffee cools. Unlimited events. Unlimited attendees. 0% platform fees.

**CTAs:** keep "Request a Demo" primary. Change secondary "Explore features" → **"See EventHex in Action"** (links to /book-a-demo/ video or /features/ — decide later; "explore features" is the weakest verb on the page).

**Title tag:**
> EventHex — AI Event Management Platform | Registration, Ticketing & Check-In

**Meta description:**
> Simplify events, amplify results. EventHex is the AI-powered event management platform for registration, ticketing, check-in, AI photo sharing (InstaSnap), and analytics — with 0% platform fees.

### 3.2 Dashboard band (rework headline + add stats)

**Engagement headline** (replaces retention sentence):
> Everything your event needs — **before, during, and after** — in one dashboard

*(Sets up the Pre/Day/Post tabs below it; simple, scannable, keyword-bearing.)*

**NEW stats row** (above "Trusted by"; pull real numbers from the team — placeholders here):
> **500+** events powered · **1M+** attendees checked in · **4M+** photos delivered by AI · **15+** countries

*(If exact numbers unavailable, use conservative "X+" claims the team can sign off. Numbers are the single cheapest trust upgrade this page can get.)*

**Trusted by:** keep carousel. Fix alt texts ("Layer 1", "Frame", "Image 20" → real event names — SEO + a11y).

### 3.3 NEW — "New on EventHex" stacked showcase *(revised again per feedback 2026-07-10: one stacking section, common header — replaces the 3-card strip AND the two standalone sections 3.5b/3.5c)*

One section, sticky stacking cards (same pattern as the AI band, light variant), common header:

> **Eyebrow:** New on EventHex
> **H2: Three New Ways to Run Your Event**

Three stacked cards, each with a green **NEW** chip, outcome copy left + visual right:

1. **Manage Your Events from ChatGPT & Claude** — example-ask bullets ("Create a two-day summit with three ticket tiers" — the event exists, tickets and all / "Move the keynote to 11..." — the agenda updates itself / "How are VIP sales this week?" — instant answers). One trust line, no protocol words. Visual: AI-chat mock executing the request.
2. **WhatsApp Concierge** — agenda answers + AI session recommendations, digital ticket & QR, certificates & photos in the chat, registration via WhatsApp. Visual: WhatsApp phone mock.
3. **Attendee Web App — Nothing to Install** — full experience in the browser, on-the-spot live edits, one link is all it takes. *(user-confirmed feature — verify exact scope with team before publish)* Visual: browser mock with agenda + "Edited just now" chip.

Position: directly after the dark dashboard band — the first thing after the trust logos.

### 3.3b Differentiator strip — outcome-based rewrite *(moved after the AI/Connector sections, before testimonials)*

1. **Live in Under 3 Minutes**
   Event, website, tickets, registration — launched in one sitting. No agency, no implementation project.
2. **Keep 100% of Ticket Revenue**
   Your own Stripe, Razorpay, or Tap account. 0% platform fees — every rupee, dirham, and dollar stays yours.
3. **Attendees Download Nothing**
   Web app in the browser, concierge in WhatsApp — the event comes to them, not the other way around.
4. **One Copilot Runs It All**
   Ask in plain language: "How are VIP sales?" "Add a lunch break at 1." "Write the invite email." Done.

### 3.4 Features tabs (keep Pre/Day/Post pattern, recast cards)

Tab structure is good — it matches "end-to-end event management" (pos 4.7, GSC) better than any competitor page. Recast which features appear and rewrite every desc as outcome-first. Suggested grid (5 cards per tab, tall card = anchor):

**Pre-Event** — anchor: Event Registration (currently missing from home!)
| Card | New copy |
|------|----------|
| **Event Registration** (tall) | Custom forms, attendee types, approvals, and waitlists — capture every registration without a single spreadsheet. |
| Event Website Builder | Publish a branded event website with AI in minutes — custom domain included. |
| Event Ticketing | Sell out with multi-tier tickets, coupons, and QR delivery — 0% platform fees. |
| Event Marketing | Fill seats with built-in email & WhatsApp campaigns and audience segments. |
| Call for Papers | Collect, review, and score submissions with a full peer-review workflow. |

**Event Day** — anchor: Event Check-In (currently missing from home!)
| Card | New copy |
|------|----------|
| **Event Check-In** (tall) | QR scan with the free EventHex Scanner app (iOS & Android) — clear the queue in seconds and print badges on the spot. *(NOTE: do NOT claim facial-recognition check-in or kiosk mode — not in product; face-match exists only in InstaSnap photo delivery)* |
| Centralized Dashboard | Watch attendance, revenue, and session load live from one command center. |
| Event Mobile App | Your branded app with agenda, maps, and networking — attendees never ask "what's next?". *(fixes the wrong desc)* |
| AI Smart-Connect | AI matches attendees by shared interests and books the meetings for them. |
| Live Polling & Q&A | Turn passive audiences into participants with live polls and moderated Q&A. |

**Post-Event** — anchor: AI Photo Gallery
| Card | New copy |
|------|----------|
| **AI Photo Gallery — InstaSnap** (tall) | Attendees upload a selfie and get every photo they appear in — branded, shareable, minutes after the shutter clicks. |
| AI Session Recap — InstaRecap | Every session transcribed, translated, and summarized — takeaways in attendees' inboxes before they reach the parking lot. |
| Event Analytics | See what worked, prove ROI to sponsors, and make the next event bigger. |
| Badge & Certificate Designer | Auto-send certificates of participation the moment the event ends. |
| Event Marketing (re-engage) | Re-target this year's audience to sell out next year's event. |

*(Net adds to home: Registration, Check-In, Call for Papers, Badge & Certificate. Gamification, notifications, sponsors/exhibitors, virtual-hybrid get covered by nav + section 3.8 strip instead — home can't carry all 31.)*

### 3.5 AI band — stacking cards (reorder + productize names)

Keep the 5-card stack, but:
- **Reorder: InstaSnap first** (traffic reality: 42k impressions on the name alone). Card title: "AI Photo Gallery — InstaSnap" so the brand name is crawlable on home.
- Section header rework:
  - Eyebrow: "The AI layer competitors demo. EventHex ships."
  - H2: "AI That Works the Event **With** You" *(current "Simply The Best AI-Powered Event Management Software" is an empty superlative)*
- Card order: InstaSnap → AI Event Copilot → AI Smart-Connect → AI Session Recap (InstaRecap) → AI Form Builder / Website Builder.
- Product-verified extras worth one line somewhere in this band: InstaSnap supports watermarking + photo monetization; InstaRecap supports live translation. Both are differentiators no card currently mentions.
- Copy per card: current descs are OK; tighten to one outcome sentence each (see 3.4 style).

### 3.5b — WhatsApp Concierge *(SUPERSEDED: now card 2 of the 3.3 stacked showcase; copy below kept as the source material for that card and the /whatsapp-event-concierge/ feature page)*

Split section, light with a green tint. Left: copy. Right: WhatsApp-style chat mock showing real bot capabilities.

> **Eyebrow:** WhatsApp Concierge
> **H2: The Event Assistant That Lives Where Your Attendees Already Are**
> No app download required. Attendees message your event's WhatsApp number and get:
> - Agenda answers and **AI session recommendations** matched to their interests
> - Their **digital ticket & QR** on demand, plus session reminders they set themselves
> - **Certificates and event photos delivered** right in the chat
> - A **digital networking business card** to share with new connections
> - Even **registration itself, via WhatsApp Flows** — form to ticket without leaving the chat
> Capabilities switch on per event — the bot only offers what you've enabled.
> CTA: "See the WhatsApp Concierge →" → /whatsapp-event-concierge/

*(All capabilities code-verified in `services/whatsappBot/capabilities.js`. Page exists at /whatsapp-event-concierge/ — home just never mentions it.)*

### 3.5c — "Manage Your Events from ChatGPT & Claude" *(SUPERSEDED: now card 1 of the 3.3 stacked showcase; copy below kept as source material for that card and a future dedicated page)*

This is the category-differentiator. Section: light, split — left a chat mock showing an AI assistant creating an event, right the copy. NO technical words in the visible copy ("MCP", "tools", "OAuth", "audit log" stay on the developer page).

> **Eyebrow:** New on EventHex
> **H2: Manage Your Events from ChatGPT & Claude**
> Connect your AI assistant to EventHex and just say what you need:
> - *"Create a two-day AI summit in Dubai with three ticket tiers"* — the event exists, tickets and all
> - *"Move the keynote to 11 and update the speakers"* — the agenda updates itself
> - *"How are VIP sales this week?"* — instant answers from your live event data
> - *"Build and publish the event website"* — live, with SEO, in one message
> Small trust line (one sentence, no specs): "Secure, permission-based access — you decide exactly what your AI assistant can touch."
> CTA: "Connect your AI →" (page needed — /developers/ covers the API but not this; a dedicated page is a strong first-mover SEO/AEO asset)

*(Code-verified: `routes/connectorMcp.js`, `services/connector/mcpServer.js`. Keep the ~65-tool/auth/audit detail for the developer page, NOT the home page.)*

### 3.6 NEW — How It Works (3 steps)

Light section, 3 numbered steps. Answers "how do I get started" and feeds the "launch fast" narrative:

> **H2: From Idea to Open Registrations in Under an Hour**
> 1. **Create your event** — Tell the AI Copilot your event basics; get a website, registration form, and tickets scaffolded instantly.
> 2. **Brand and publish** — Your domain, your colors, your badge design. Connect Stripe/Razorpay/Tap and go live.
> 3. **Run and grow** — Check in attendees, deliver photos with a selfie, and re-engage everyone for the next edition.
>
> CTA: "Start with a free demo →"

### 3.7 Testimonials (relocate + strengthen)

Move out of the dark AI band into its own light section (after How It Works). Keep the 3 quotes (Amy Carey, Rifath Rahman, Noushad EP) — they're genuinely good. Add:
- **H2:** "Organizers who switched, and stayed" *(Amy's quote literally says "two-year partnership" — the header sets that up)*
- Where possible, prefix each quote with a bold one-line result ("Two-event trial → two-year partnership — Wellbeing at Work, UK"). Link "Read customer stories →" to /customers/.

### 3.8 NEW — Ecosystem strip (integrations + industries + use cases)

One compact section, three columns of text links + logo row. Pure internal-linking + long-tail SEO; the site has 17 integration pages, 15 industry pages, and 14 use-case pages that get zero equity from home today.

> **H2: Fits Your Stack. Fits Your Industry.**
> - Logo row: Stripe · Razorpay · Tap · WhatsApp · HubSpot · Zoom · Teams · Zapier · WordPress → /integrations/
> - "Built for: Conferences · Trade Shows · Associations · Healthcare · Education · Government · Middle East events →" (each a link)
> - Comparison teaser: "Switching from Eventbrite, Cvent, or Whova? **See how EventHex compares →**" → /compare/ *(comparison pages exist and are high-intent; home never mentions them)*

### 3.9 Blog — keep as-is

No changes. Already dynamic from WP.

### 3.10 NEW — FAQ + Final CTA

**FAQ (5 questions, FAQPage JSON-LD on home):** written to literally match the AI-assistant query patterns GSC is already recording:

1. **What is EventHex?** — EventHex is an AI-powered event management platform that handles registration, ticketing, check-in, badge printing, attendee networking, photo distribution, and analytics for in-person, virtual, and hybrid events.
2. **Does EventHex support badge printing and onsite registration?** — Yes. EventHex includes a drag-and-drop badge designer, batch on-site printing with per-attendee print tracking, walk-in registration, and QR check-in through the free EventHex Scanner app. *(direct hit on a recorded query; facial-recognition claim removed — not in product for check-in)*
3. **How much does EventHex cost?** — Plans include unlimited events and attendees with 0% platform fees on ticket sales — you keep your full ticket revenue. See pricing →
4. **What is InstaSnap?** — InstaSnap is EventHex's AI photo gallery: attendees upload a selfie and instantly receive every photo they appear in. *(42k-impression brand query, currently answered nowhere on home)*
5. **Can I run virtual or hybrid events on EventHex?** — Yes. Zoom, Google Meet, and Microsoft Teams sessions with streaming, captions, and unified attendee analytics.
6. **Can I manage my event with ChatGPT or Claude?** — Yes. The EventHex Connector (MCP) lets AI assistants create events, configure tickets, build the event website, and pull analytics through secure, franchise-scoped API keys. *(nascent query space — first-mover AEO)*

**Final CTA band (dark, mirrors hero):**
> **H2: Your Next Event Deserves Better Tech**
> Sub: Join organizers in 15+ countries running conferences, expos, and summits on EventHex.
> Primary: **Book a Demo** · Secondary: **Talk on WhatsApp** *(dogfoods the WhatsApp story; the team lives on WhatsApp with clients anyway)*

---

## 4. SEO notes (page-level)

- **Primary target:** "AI event management platform" family. H1 + title tag + FAQ #1 all carry it.
- **Add canonical** to home (still missing per SEO audit, P1).
- **FAQPage schema** for section 3.10; keep existing SoftwareApplication schema, add the stats (aggregateRating already present).
- **InstaSnap on home in crawlable text** (3.5 + FAQ #4) — the word currently appears in zero home-page text.
- Alt-text pass on the trusted-by carousel (real event names).
- Answer-shaped copy throughout (short declarative sentences after each H2) — this is what gets quoted by AI search engines, which GSC shows are already sending queries.

## 5. What NOT to change

- Visual pattern, animations, dark/light rhythm — all kept.
- Blog section, testimonial persons, logo carousel mechanics.
- Nav/footer (separate task).
- Feature-page copy (separate task; home links must match existing URLs — all URLs above verified against `src/pages/`).

## 6. Code-verified feature inventory (2026-07-10 code sweep)

Full sweep of eventhex-saas-api, eventhex-saas-cms, the Flutter attendee app, eventhex-zapier, and instarecap-api. What the product actually ships vs what the site says.

### 6.1 Shipped but absent (or under-sold) on the website

| Feature | Code-verified facts | Marketing hook |
|---------|--------------------|----------------|
| **EventHex Connector (MCP)** | ~65 tools live; API key + OAuth, franchise-scoped, event-lock, scoped permissions, rate limits, append-only audit log; self-documenting guide tools; skills exported for Claude | "The first event platform your AI can operate" |
| **WhatsApp AI Concierge** | Conversational bot: agenda, speakers, venue, AI session recommendations, networking matches, live polls, digital ticket/QR, self-serve reminders, profile update, certificate delivery, event photos, AI recap, feedback, registration via WhatsApp Flows, digital business card generator; capabilities gated per event settings | "Your event, inside WhatsApp — no app download" |
| **InstaRecap (deep)** | Meeting bots join Zoom/Meet/Teams (Recall.ai/Vexa); Soniox real-time STT; speaker attribution; Gemini summaries + takeaways broadcast live via WebSocket during the session; translation into up to 4 languages (100+ catalog); styled PDF recaps; ready-to-post LinkedIn/X content; YouTube ingestion; poster generation; social content personalization | "Recaps written before the applause ends — in 4 languages" |
| **Attendee mobile app (deep)** | Flutter, offline-first (SQLite + auto-sync), EN+Arabic, real-time chat (Socket.io), in-app AI assistant with voice messages (Event Connect RAG agent), AI matchmaking, meeting scheduler, InstaSnap capture with watermark frames, exhibitor lead capture, live polls, leaderboard, TV sessions display mode, auto-updates | "Offline-first, bilingual, AI inside" |
| **EventHex Scanner app** | Dedicated companion check-in app, live on App Store (id6749537089) + Google Play (eventhex.scanner.app) | Named product for check-in story |
| **Gamification (deep)** | Challenges with tracks (Networking/Sessions/Sponsors/Social), app-action triggers, sponsored QR / exhibitor-scan challenges, anti-farm caps + cooldowns, leaderboard with audited manual adjustments, position rewards, milestone rewards with coupon codes + push, **Lucky Draw** raffle | "Sponsored challenges drive booth traffic" — exhibitor ROI angle |
| **Advocacy posters** | Drag-drop 1080×1080 builder, 6 starter templates, merge fields, auto-generate on registration via ticket-field mapping, shareable campaign URL, clone, usage tracking | "Every attendee becomes a promoter — automatically" |
| **Approval workflows** | needsApproval + holdPaymentUntilApproval per ticket, email/WhatsApp approval notices; exhibitor approval pipeline | Gated/curated events angle |
| **Tiered & early-bird discounts** | static/percentage/tiered (quantity bands), discountEndDate, limits, combination rules | Pricing-power story |
| **Event team RBAC** | Roles: ticket-admin, scanner-user, scanner-user-admin, event-day-manager with explicit permission lists | "Staff access without handing over the keys" |
| **Split payments** | Stripe Connect + Razorpay Route (automatic payout splits) alongside BYO Stripe/Razorpay/Tap | Agency/franchise revenue-share angle |
| **CRM integrations** | HubSpot, Pipedrive (API key), Salesforce (OAuth) with field mapping; Zapier app shipped (5 triggers: registration, order, check-in, exhibitor lead, form submission + create/find attendee) | Ecosystem proof |
| **Custom domains self-serve** | DomainManager: add/verify custom domain or EventHex subdomain per event, QR for live URL | Already claimed — now provably true |
| **V3 AI website builder (deep)** | Multi-candidate generation from vibe prompt + logo + brand color; agentic refinement; AI section imagery (Imagen 4 Fast); AI SEO; in-editor language switcher (en/ar/de) with i18n overlay; brand color extraction from logo | "Describe it, get 3 designs, publish in any of 3 languages" |
| **InstaSnap monetization** | Partner Spotlights with click/impression tracking; in-gallery ads (frequency configurable); watermark editor (image or styled text, drag position, opacity/scale); WhatsApp-OTP gated galleries; attendees-only vs public access; AWS Rekognition face clustering with accuracy presets | Sponsor-value + privacy story |
| **Platform add-ons** | Pay-as-you-grow: limit extensions (events, attendees, campaigns, storage…) + feature unlocks (custom domain, white-label, API, AI builders); geo-priced; Stripe/Razorpay checkout | Pricing-page story, not home |
| **MsgHex** | In-house WhatsApp sending infra: single/bulk, OTP send+verify, device management, webhooks | Supports "WhatsApp-native" positioning |

### 6.2 Do NOT claim (checked, not in product)

- **Facial-recognition check-in** — face-match exists only in InstaSnap photo delivery (AWS Rekognition). Check-in is QR via Scanner app.
- **Self-service check-in kiosk** — no kiosk mode ("kiosk" in code = badge print/export format only).
- **Offline check-in** — offline support is in the attendee app, not verified for the scanner flow.
- **Selling photos to attendees** — no paid-download/e-commerce in InstaSnap; monetization is ads + sponsor spotlights.
- **Multi-currency ticket pricing** — currency handling found only in platform billing, not per-ticket.
- **Seat maps / assigned seating** — capacity caps per ticket type only.
- **Native social auto-posting for advocacy posters** — share is link/download; user posts manually.
- Feature-page copy already on the site claiming any of the above should be re-checked in a separate pass.

## 7. Open items for the team

1. Real numbers for the stats row (events, attendees, photos delivered, countries).
2. Confirm secondary hero CTA destination (video vs /features/).
3. Sign-off on "0% platform fees" phrasing as a homepage-level claim.
4. WhatsApp CTA link (wa.me number) for the final band.
