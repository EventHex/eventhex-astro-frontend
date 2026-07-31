# Event Check-In — Content Spec (rewrite)

Status: draft for review. Replaces copy in `src/components/event-check-in/*.astro`. Code-verified against `eventhex-saas-cms` and `eventhex-saas-api` on 2026-07-15.

---

## 0. Why this rewrite

The live page (`src/pages/event-check-in.astro`) claims **face recognition** and **self-service kiosk check-in** as headline features, and claims **offline check-in scanning** throughout hero, stats, bento, feature cards, how-it-works, FAQ, and CTA copy. None of these are accurate to what the product does at the door. See Section 1 for the full list of what to remove and why, Section 2 for what's actually real, then Sections 3+ for the new page.

---

## 1. FALSE / UNVERIFIED CLAIMS ON THE CURRENT PAGE — REMOVE ALL

| Claim on current page | Where it appears | Reality (code-verified) |
|---|---|---|
| "Face Recognition" in `<title>` and meta description | `event-check-in.astro` lines 13-14 | No face-match code path touches check-in/attendance. `faceMatch.js`, `faceGroup.js`, `awsFaceClusteringService.js` and the `snapDashboard`/`album`/`photoPermission` UI in saas-cms are 100% InstaSnap photo-delivery (matching event photos to a face for download), never event entry. Remove entirely. |
| BentoGrid tab "Face & Zone Access" — "Face-match contactless check-in powered by AWS Rekognition," "Attendees check in by simply looking at a kiosk camera — no QR needed" | `BentoGrid.astro` lines 451-463 | Same as above — not a check-in mechanism. Delete the entire tab. |
| "Kiosk Self-Check-In" — "Attendees walk up to a self-service kiosk and check in without staff assistance" | `BentoGrid.astro` line 459 | The only "kiosk" hits in the codebase are `posterbuilder/BadgeExport.jsx` (a kiosk-format badge *export/print layout option*) and a label in `registrations/index.jsx`. There is no self-service, unattended check-in kiosk flow. Remove. |
| Offline check-in / offline scanning — "Continue scanning without internet," "Scan even without internet," "Offline mode caches attendee data locally," "Every scan stored locally first," FAQ "Does check-in work offline? Yes." | `StatsSection` proof pill, `BentoGrid` card, `FeatureCards` full section, `HowItWorksSection`, `CoordinationTools`, `CTASection` proof pill, `FaqSection` | Grepped both repos for "offline": the only real offline capability is `printLogController.js` → `POST /print-log/batch`, explicitly documented as "Log multiple print events at once (for offline sync)" — i.e., **badge print logs** can be queued and batch-synced later. That is not the same as offline QR/token check-in scanning, and no such capability exists in `attendance.js` / `attendanceController.js`. Remove all offline-scanning claims. Do not substitute the print-log batching as a replacement claim — it's a logging/sync mechanic, not a customer-facing "works without wifi" promise, and is too easy to overstate. |
| Structured data `applicationCategory` featureList: "Offline Scanning Mode" | `event-check-in.astro` line 38 | Same as above. Remove from schema. |
| Software schema `operatingSystem: "Web, iOS, Android"` implying a unified app | line 21 | Accurate in spirit (web dashboard + dedicated Scanner app on iOS/Android) but should point explicitly at the named Scanner app product, not a vague "iOS, Android" claim. |

**Everything else on the current page is accurate and reusable**: QR scanning, sub-second scan time, multi-device/multi-entrance scanning, duplicate-scan prevention, session-level attendance tracking, staff login portal, on-site badge printing, real-time operations dashboard, exportable attendance reports.

---

## 2. VERIFIED FEATURE LIST (what actually exists — source refs)

**Check-in mechanism**
- QR/token-based check-in. `POST /api/v1/attendance/check-in` (`eventhex-saas-api/controllers/attendance.js:2368` `exports.checkIn`) resolves a `TicketRegistration` by ID, flips `attendance: true`, stamps `attendanceDate`, and fires an `attendee_checked_in` trigger (webhooks/automations). A second endpoint `POST /attendance/mark-attendance` (`controllers/attendanceController.js`) increments a `token` counter per registration — used for multi-scan/re-entry tracking, not duplicate double-counting.
- Ticket QR codes are generated at the ticketing stage (confirmed via `event-ticketing.astro` meta description: "QR tickets") — the same registration record that gets a ticket at checkout is the one resolved at the door.
- Duplicate-scan handling: `checkIn` explicitly checks `if (registration.attendance === true)` and returns a 400 with the existing check-in data rather than creating a second record.

**Dedicated Scanner app** (named product, confirmed)
- **EventHex Scanner** — iOS App Store id `6749537089` (`apps.apple.com/in/app/eventhex-scanner/id6749537089`), Google Play `eventhex.scanner.app`.
- Promoted in-product via `src/components/ui/scannerAppBanner/index.jsx`: *"Use the EventHex Scanner app for fast QR-based check-ins at your event."*
- This is the product's actual "app for the door" — feature it by name, not as a generic "mobile check-in."

**Badge printing**
- Full badge designer: `badgeSettings/builder`, `configureBadge`, `createBadge`, `printBadge` (saas-cms). Builder supports QR code field, images, text, drag-and-drop layout (`printBadge/index.jsx` imports `QRCode`, `QRCodeSVG`, `html2canvas`, `jsPDF`).
- On-site batch printing with full print analytics: `printLogController.js` — `POST /print-log` (single print), `POST /print-log/batch` (batch/offline-queued sync), `GET /print-log/analytics` (prints by operator, by method, by printer type, by ticket type, hourly breakdown, success/fail counts). This is a genuinely strong, code-backed differentiator — most competitors don't expose print-level analytics.
- `printMethod` field distinguishes "scan"-triggered vs "search"-triggered prints, `printerType` defaults to `zebra_qz` (Zebra printer integration).

**Attendance analytics**
- `CheckInRateByTicket.jsx` — donut chart, checked-in vs pending, broken out per ticket type.
- `CheckinTimeline.jsx` — 10-minute-interval arrival curve with peak-hour detection, sourced live from `attendance/check-in` data.
- `models/attendance.js` records `scanType`, per-event and per-instance (session) attendance.
- Session-level attendance: `Attendance.create()` accepts an `instance` (session) reference — confirms per-session scanning is real, not just event-level.
- Staff login / role scoping: `printedByRole`, `req.user?.userType?.role` captured on every print/check-in action — confirms staff-attributed activity logs.

**Do not claim** (re-confirmed by this pass, matches the brief's list exactly):
- Facial-recognition check-in (face-match code exists only under InstaSnap/photo-delivery paths — `controllers/faceMatch.js`, `models/faceMatch.js`, `services/awsFaceClusteringService.js`, all wired to photo albums, never to `attendance`/`checkIn`).
- Self-service/unattended kiosk check-in ("kiosk" in code = a badge export/print format option only).
- Offline check-in scanning (offline exists only for badge *print-log* batch sync, not for the scan-and-verify step itself).

---

## 3. COMPETITOR SCAN (brief)

- **Cvent OnArrival**: leans hard on on-demand/dynamic badge printing (reprint on the spot, RFID/NFC badge options), self-service kiosks *and* staffed stations, and does claim genuine offline check-in + badge printing with auto-sync on reconnect. Strongest offline claim in the set — but that's Cvent's own verified capability, not ours to borrow. [Cvent OnArrival](https://www.cvent.com/en/event-marketing-management/onarrival-event-check-in-software)
- **Eventbrite Organizer**: keeps it simple — camera-based QR scan, three scan modes (check-in / check-out / validate-only), Zebra scanner support for high-volume, no badge printing story at all. Check-in-only positioning. [Eventbrite check-in app](https://www.eventbrite.com/organizer/features/organizer-check-in-app/)
- **Zkipster**: guest-list-first framing (luxury/hospitality events), automatic badge printing tied to Brother label printers on check-in, and a real offline mode (local storage, syncs on reconnect). [Zkipster badge printing](https://support.zkipster.com/en/articles/4535273-print-name-badges-at-check-in-via-the-zkipster-app)
- **Whova**: sells a dedicated **Kiosk app** (separate app, installed per iPad) for unattended self-service check-in + instant badge printing, plus wallet-pass check-in (Apple/Google Wallet). Whova genuinely has the self-service kiosk EventHex does not — do not imply parity. [Whova check-in](https://whova.com/event-management-software/paperless-check-in/)

**Gaps / positioning takeaway**: Competitors split into "simple scan-only" (Eventbrite) vs "full check-in + badge + kiosk" (Cvent, Whova, Zkipster). EventHex's honest position is the latter category minus self-service kiosk and minus offline scanning — but with a real edge competitors don't foreground: **per-print analytics** (operator-level, printer-level, hourly breakdown) and a **named, downloadable Scanner app** as a distinct product. Lead with speed + multi-device + badge-print analytics + the Scanner app, not with claims that don't hold up.

---

## 4. NEW PAGE CONTENT SPEC

### SEO

- **Title tag**: `Event Check-In App — QR Scan & On-Site Badge Printing | EventHex`
- **Meta description**: `Check attendees in with sub-second QR scanning, the EventHex Scanner app, and instant on-site badge printing. Track live attendance by session and ticket type from one dashboard.`
- **Canonical**: `https://eventhex.ai/event-check-in/`
- **JSON-LD `featureList`** (replace existing array):
  - QR Code Check-In
  - EventHex Scanner App (iOS & Android)
  - Multi-Device, Multi-Entrance Scanning
  - Duplicate Scan Prevention
  - Session-Level Attendance Tracking
  - On-Site Badge Printing
  - Print Analytics Dashboard
  - Real-Time Check-In Dashboard
  - Staff Login & Activity Logs
  - `operatingSystem`: `"Web, iOS, Android"` — keep, but tie it explicitly to "web dashboard + EventHex Scanner app" in the `description` field of the schema.

### Hero (H1 + subhead + CTA)

- **H1**: `Check attendees in before the line forms`
- **Subhead**: `Scan the QR code from the ticket they already bought — with any phone or the EventHex Scanner app — and print their badge on the spot. Every scan updates a live dashboard your team can watch from the door to the back office.`
- **Trust row**: keep "100K+ check-ins processed" and "Trusted by 400+ events" (existing, plausible product-marketing proof points — flag to marketing team to confirm current numbers before publish, don't fabricate new ones).
- **CTA**: `Book a Demo` (primary) / `See How It Works` (secondary, anchors to How-It-Works section).
- **Visual**: keep existing hero Lottie (`/animations/event-check-in-hero.json`) — no claim embedded in the animation itself per current usage.

### Section 1 — Scan engine

- **Heading**: `Any phone becomes a scanner`
- **Outcome copy**: `Staff scan with the camera already in their pocket, or run the dedicated EventHex Scanner app for a faster, purpose-built experience. Each scan resolves in under a second, with a visual and audio confirmation so there's no doubt the attendee is in.`
- **Supporting points**: works on any smartphone/tablet camera + barcode support; sub-second scan-and-verify; instant visual/audio confirmation; duplicate scans are caught and flagged, never double-counted.
- **Named product callout**: EventHex Scanner app — App Store & Google Play, built for high-volume door staff who want a dedicated tool instead of a browser tab.
- **Visual**: reuse `/feature-images/event-check-in/scan-engine-visual.svg` (or `scan-engine-visual.png`) and `attendee-list.png`.

### Section 2 — Multi-device, multi-entrance

- **Heading**: `Open every door at once`
- **Outcome copy**: `Run 100+ devices scanning at the same time across entrances, without a central bottleneck. Every device syncs to the same real-time count, so two staff can never accidentally double-check someone in.`
- **Supporting points**: 100+ simultaneous scanning devices; multi-entrance support; duplicate-scan prevention shared across all devices.
- **Visual**: reuse illustration key `multidev` / `entrance` from `illustrations.ts`.

### Section 3 — Session-level attendance

- **Heading**: `Know who actually showed up — per session`
- **Outcome copy**: `Set up a scan point at each session room and get real attendance data, not just registration counts. Speakers get honest feedback on turnout, sponsors get proof of reach, and you get a report that holds up after the event.`
- **Supporting points**: dedicated session-room scanning; per-session attendance stored against each attendee; post-event exportable reports by session.
- **Code note for design**: this is backed by `Attendance.create()` accepting an `instance` reference and `CheckInRateByTicket.jsx` / session breakdowns — genuinely real, keep as a headline section.
- **Visual**: reuse `/feature-images/event-check-in/session-tracking-visual.svg`.

### Section 4 — On-site badge printing

- **Heading**: `Print the badge the moment they scan in`
- **Outcome copy**: `Design badges once — with QR codes, photos, ticket type, and custom fields — then print instantly at check-in or from a search. Every print is logged: who printed it, when, from which printer, and whether it succeeded.`
- **Supporting points**: drag-and-drop badge builder; QR code, photo, and custom field support; auto-print on scan or manual reprint from search; Zebra printer support; full print log with operator, method, printer type, and success/fail tracking.
- **Differentiator callout**: `Most check-in tools tell you badges printed. EventHex tells you who printed them, from where, and how many failed — a full analytics view of your print operation, not just a printer queue.`
- **Visual**: reuse `/feature-images/event-check-in/badge-card.png`.

### Section 5 — Real-time operations dashboard

- **Heading**: `Watch the room fill up in real time`
- **Outcome copy**: `Check-in rate by ticket type, an arrival timeline with peak-hour detection, queue and staff activity — all on one live dashboard. See a bottleneck forming and move staff before the line backs up.`
- **Supporting points**: live check-in rate donut by ticket type; 10-minute-interval arrival timeline with peak detection; staff login portal with per-staff activity; exportable real-time attendee lists.
- **Visual**: reuse `/feature-images/event-check-in/operations-visual.svg`, `profile-card.png`.

*(5 sections total — within the 4-7 range requested; badge printing and operations dashboard are both strong enough code-backed differentiators to warrant their own sections rather than being merged.)*

### "How it connects" band (cross-page narrative)

- **Heading**: `One record, from signup to the door`
- **Copy**: `Registration, Ticketing, and Check-In aren't three separate tools bolted together — they're one attendee record. Someone fills out your [registration form](/event-registration/), buys a [ticket](/event-ticketing/) with a QR code baked in, and that same QR code is what gets scanned here. No re-entering data, no separate guest list to reconcile, no "which system is the real one" at 8am on event day.`
- **Visual treatment**: a 3-step horizontal flow — Registration → Ticketing → Check-In, each node linking to its page, with a short caption per node:
  - Registration: `Capture attendee data once`
  - Ticketing: `Issue the ticket — and the QR code`
  - Check-In: `Scan the same QR code at the door`

### FAQ (5 questions minimum — includes both required)

1. **Does EventHex support on-site badge printing?**
   `Yes. Design badges with a drag-and-drop builder — QR codes, photos, ticket type, and custom fields — then print automatically when someone checks in, or reprint on demand from a search. Every print is logged with the operator, printer, and success status, so you have a full record of your on-site printing, not just a queue.`
2. **Is there a QR check-in app?**
   `Yes — the EventHex Scanner app, available on the [App Store](https://apps.apple.com/in/app/eventhex-scanner/id6749537089) and [Google Play](https://play.google.com/store/apps/details?id=eventhex.scanner.app). It's built specifically for fast, high-volume door check-in, though any smartphone or tablet camera works too if staff prefer the web scanner.`
3. **How does QR code check-in work?**
   `Every attendee gets a unique QR code tied to their ticket the moment they register. At the event, staff scan that code with any smartphone, tablet, or the Scanner app. The system verifies the ticket and marks the attendee checked in — visibly and audibly confirmed in under a second.`
4. **Can multiple staff scan at the same time without double-counting anyone?**
   `Yes. Run 100+ devices scanning simultaneously across entrances. All of them sync to the same live attendance count, and if someone's already checked in, the next scan flags it instead of creating a duplicate record.`
5. **Can I track attendance for individual sessions, not just the whole event?**
   `Yes. Set up a scan point at each session room and every scan records exactly who attended which session — giving speakers real turnout feedback, sponsors attendance proof, and you a report you can export after the event.`

### Final CTA

- **Heading**: `Ready to see check-in day run itself?`
- **Subhead**: `Sub-second QR scanning, the EventHex Scanner app, and badge printing with full print analytics — see it live on your own event data.`
- **Proof pills**: replace `"Offline mode"` with `"Print analytics included"`. Keep `"Sub-second scanning"` and `"Free onboarding support"`.
- **Buttons**: `Book a Free Demo` (primary) / `Contact Sales` (secondary) — unchanged.
- **Trust row**: unchanged (`No credit card required`, `Free onboarding support`, `Cancel anytime`).

---

## 5. IMAGES TO REUSE (from `public/feature-images/event-check-in/`)

| File | Reuse in |
|---|---|
| `scan-engine-visual.svg` / `scan-engine-visual.png` | Section 1 — Scan engine |
| `attendee-list.png` | Section 1 or Section 5 (live attendee list) |
| `session-tracking-visual.svg` | Section 3 — Session-level attendance |
| `badge-card.png` | Section 4 — On-site badge printing |
| `operations-visual.svg` | Section 5 — Real-time operations dashboard |
| `profile-card.png` | Section 5, small supporting visual |
| `scan-engine-figma.png` | Design reference only, not for production |

**Not reused**: `offline-mode-visual.svg` — drop entirely, it illustrates a capability being removed from the page.

**Illustration keys still valid from `illustrations.ts`** (inline SVGs used in BentoGrid-style layouts, if BentoGrid tab structure is kept in the rebuild): `qrscan`, `barcode`, `multidev`, `confirm`, `tracking`, `sessiontrack`, `search`, `dupeblock`, `entrance`, `opsdash`, `staffportal`, `scanlist`, `badgeprint`, `livestats`. **Drop the `offline` key** from any rebuilt tab set, and drop the "Face & Zone Access" tab entirely (no illustration mapped there currently to reuse anyway).
