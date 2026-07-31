# Event Registration — Content Spec (Rewrite)

Status: draft content spec, not yet implemented in `src/pages/event-registration.astro`.
Source page audited: `src/pages/event-registration.astro` (uses `FeatureV2Layout`, tabbed bento, stacking cards, how-it-works, why-cards, FAQ — 8 fixed sections, no native "how it connects" band; see Implementation Notes at the end).

---

## 0. Code-Verification Summary (what we're allowed to claim)

Verified against `eventhex-saas-cms` and `eventhex-saas-api` (both live product code, not docs/plans).

### Confirmed — safe to claim
| Capability | Evidence |
|---|---|
| Custom form builder, drag-and-drop | `formBuilderNew/index.jsx` (CMS), `@dnd-kit` |
| 20+ field types (text, email, phone, dropdown, multi-select, checkbox, file upload, date/time, rating, NPS, rich text, etc.) | `EventFormFields`/`StandaloneFormField` schemas (API), `PRESET_FIELDS` (CMS) |
| Conditional field logic (show/hide by ticket type or prior answer) | `conditionEnabled/conditionWhenField/conditionCheckMatch` (both repos), `FormInputVisibilityConditions` model |
| Participant/attendee types & categories, one registration link per type | `models/participantType.js`, `ParticipantCategory` |
| Approval workflow that actually holds payment | `needsApproval` + `holdPaymentUntilApproval` → Stripe `capture_method: manual` (card authorized, not captured, until admin approves); `controllers/approval.js` |
| Bulk CSV/Excel import — analyze → preview → map → execute, with mapping history | `routes/import.js`, `services/fileParserService.js` |
| Two-tier duplicate detection (within file + against existing database) with skip/update/create-duplicate strategy | `services/duplicateDetectionService.js`, `controllers/importController.js` |
| **AI-assisted column mapping** — real LLM call (OpenRouter) that reads headers and maps them, including non-English headers | `services/importMappingService.js` |
| **Direct import from Eventbrite / Luma** — a genuine migration path, not just generic CSV | `routes/import.js` (`/external/*`) |
| One order, multiple attendees (group/multi-ticket registration in a single checkout) | `models/order.js`, `ticketRegistration` compound index on `order`+`orderLineId` |
| WhatsApp + email confirmation, plus separate approval/rejection templates | `ticketConfigSchema.js`, `controllers/ticketRegistration.js` |
| QR code generated per registration, attached to badge and WhatsApp message | `controllers/registration.js` (`qrcode` package) |
| Field-level multi-language forms (label/placeholder translated per field) | `multilanguage`/`languageData` on form-field schemas; CMS editor supports 10 languages |
| AI-generated form fields from a text description ("describe your form, AI builds the fields") | `POST /generate-form` → Gemini (API `routes/ai.js`) |

### Partial — claim with softened language
| Capability | Reality | Copy guidance |
|---|---|---|
| Waitlist | Real, but scoped to **RSVP/invitation-based** events (`enableRSVPWaitlist`), not general sold-out paid tickets | Say "waitlisting for invite-only and RSVP events," not a blanket "waitlist" claim |
| Real-time dashboard | Registrations, payment status, and check-in status are always current and refresh without a manual CSV pull — but it's not literally push/websocket-live | Say "always up to date" / "see it the moment you refresh" rather than "instant, no refresh needed" |
| GDPR | Only a consent checkbox + custom consent text exists. No retention/erasure/export tooling. | Say "built-in consent checkbox for every form" — **do not** say "GDPR-ready," "GDPR compliant," or "GDPR consent fields" (current live page makes this claim; it should be removed/softened) |

### Not found — do not claim
- Voice-powered form creation (the backend `transcribeAudio` endpoint is a hardcoded placeholder, not functional — confirmed in `controllers/aiController.js`)
- General "waitlist when sold out" for standard paid tickets
- GDPR compliance / data export / right-to-erasure tooling
- Facial recognition, kiosk mode, multi-currency ticket pricing, seat maps — excluded per brief (facial recognition already lives on the Check-In page, not Registration)

---

## 1. SEO

**Title tag (≤60 chars):**
`Event Registration Software — Custom Forms, Fast Import | EventHex`

**Meta description (≤160 chars):**
`Build registration forms attendees actually finish, approve who gets in, and import existing lists in minutes — all in one place. See it live, free.`

**URL:** `/event-registration/` (unchanged)

**JSON-LD `featureList` — replace current array with:**
```
"Custom Registration Forms", "Conditional Form Logic", "Participant Type & Approval Workflows",
"AI-Assisted Bulk Import", "Duplicate Detection", "Group Registration", "WhatsApp & Email Confirmations",
"QR Code Issuance", "Multi-Language Forms"
```
Drop: "GDPR Consent Fields" (overclaim — see table above).

---

## 2. Hero

**Badge:** `Event Registration Management`

**H1 (two lines):**
- Line 1: `Registration Your Attendees`
- Line 2 (highlight): `Actually Finish`

**Subhead:**
`Build a form that fits your event — not a generic template. Approve who gets in, import the list you already have, and every registration flows straight into ticketing and check-in without re-entering a thing.`

**Hero CTA row:**
- Primary: `Book a Demo` → `/book-a-demo/`
- Secondary: `Explore Features` → `#fv2-bento` (existing anchor pattern)

**Trust strip (3 items, replace current):**
`["Forms Built in Minutes, Not Days", "Approve & Hold Payment Automatically", "0% Platform Fees"]`

*(Drop "GDPR-Ready Forms" per code-verification. Keep "0% Platform Fees" — matches ticketing page's real pricing claim and is a genuine competitive edge vs. RegFox's 99¢+1% and Bizzabo's $15K/yr.)*

**Stats band (4 tiles) — keep structure, revise labels to stay defensible:**
| Value | Label |
|---|---|
| 20+ | Custom Field Types |
| 2 sec | Average Import Time |
| 3 | Confirmation Channels (Email, WhatsApp, QR) |
| 0% | Platform Fees |

*(Drops "99.9% Data Accuracy" and "100K+ Registrations Processed" — no code path verifies either number; if real usage metrics exist elsewhere in the business, swap them back in, but don't publish unverified stats.)*

**Stats headline:**
`white1: "Every attendee.", accent: "Every answer.", white2: "Organized in", accent2: "one place"`

---

## 3. Content Sections (7)

### Section 1 — Build the form your event actually needs
**Heading:** `A Form Builder That Bends to Your Event, Not the Other Way Around`
**Copy:** Drag fields onto the page, not into a template someone else designed. Collect names and emails, then add whatever your event actually needs — dietary needs, T-shirt sizes, session picks, file uploads for ID or headshots. Show a field only when it's relevant: ask VIP ticket holders about lounge access, skip that question for everyone else. Running an international event? Translate every label and placeholder without duplicating the form.
**Visual:** `reg11` (Custom Registration Fields), `reg12` (Conditional Logic), `reg13` (Form Builder) from `src/components/event-registration/illustrations.ts` — bento tab "Forms & Fields". Stacking-card image: `/feature-images/event-registration-form.png`.
**Claims used:** custom fields (20+ types), conditional logic, drag-and-drop, multi-language forms.

### Section 2 — Decide who gets in, and when they pay
**Heading:** `Approval-Gated Registration That Actually Holds the Payment`
**Copy:** Not every registration should confirm itself. Set any participant type to require approval — the attendee's card is authorized but not charged until you say yes. Reject a submission and the hold releases automatically, with a rejection message sent for you. It's a real gate, not just a status label: nothing is captured until you approve it.
**Visual:** New illustration recommended (no exact existing SVG covers approval + payment hold — closest is `reg3` Payment Status Filtering, which can be reused/adapted). Consider commissioning one approval-flow SVG in the same illustration style (see `illustrations.ts` pattern) for the bento grid.
**Claims used:** participant types, `needsApproval`, `holdPaymentUntilApproval` (payment authorization hold), approval/rejection email+WhatsApp templates.

### Section 3 — Bring your existing list in without retyping it
**Heading:** `Already Have a Spreadsheet? Import It in Minutes`
**Copy:** Upload a CSV or Excel file and let the system read your column headers and map them for you — including headers in other languages. Every row is checked against your existing attendee list, so duplicate emails or phone numbers are flagged before they're added, not after. Migrating off another platform? Pull your attendee list directly from Eventbrite or Luma instead of exporting and re-uploading.
**Visual:** `reg6` (CSV/Excel Import), `reg7` (Duplicate Detection), `reg8` (Field Mapping Wizard), `reg10` (Import History) — bento tab "Import & Data". Stacking-card image: `/feature-images/event-registration-import.png`.
**Claims used:** bulk CSV/Excel import, AI-assisted column mapping, two-tier duplicate detection, direct Eventbrite/Luma import.
**Note:** existing bento card "AI CSV Column Mapping" (line 72 of current page) is *correct* — API code confirms a real LLM-backed mapping service. Keep this claim; it survived verification.

### Section 4 — One person, one checkout, a whole group registered
**Heading:** `Let One Person Register Everyone on Their Team`
**Copy:** A single buyer can register multiple attendees — different ticket types, different people — in one checkout. No separate transactions, no asking five colleagues to fill out five forms. Everyone ends up correctly attached to the same order, with their own confirmation and QR code.
**Visual:** `reg15` (Multi-Ticket Registration) — bento tab "Forms & Fields" or new dedicated card.
**Claims used:** group/multi-ticket registration in a single order.

### Section 5 — Confirmation and entry, handled the moment they register
**Heading:** `Every Registration Ends With a Confirmation and a QR Code`
**Copy:** The moment someone registers, they get a confirmation — by email, WhatsApp, or both — with a QR code already attached. There's nothing to look up later: that same code is what gets scanned at the door.
**Visual:** none existing in `illustrations.ts` maps directly; reuse `event-registration-hero-dashboard.png` or cross-reference the QR/badge visual already used on the Ticketing page. Recommend a small new illustration ("QR + WhatsApp bubble + email icon converging").
**Claims used:** WhatsApp/email confirmations, QR code issuance at registration.
**Cross-link:** this section is the natural hook into the "How It Connects" band below (registration → ticket → check-in scan).

### Section 6 — See every registration the moment it happens
**Heading:** `One Dashboard for Every Sign-Up, Payment, and Arrival`
**Copy:** Filter attendees by ticket type, payment status, or who's checked in. Search for one person by name in a list of thousands. Export exactly the view you're looking at — paid-only, pending-only, no-shows — to CSV or Excel whenever you need it.
**Visual:** `reg1` (Per-Ticket Attendee Lists), `reg2` (Live Tracking), `reg3` (Payment Status Filtering), `reg4` (Check-In Monitoring), `reg5` (Search & Export) — bento tab "Registration Management". Stacking-card image: `/feature-images/event-registration-dashboard.png`.
**Claims used:** dashboard filtering by ticket/payment/check-in status, search, export. *(Softened from "real-time"/"no refresh needed" per verification — see Partial table.)*

### Section 7 — Register offline attendees in bulk, without losing track
**Heading:** `Register a Whole Group at the Door or From a Waiting List`
**Copy:** Add attendees in bulk when registration happens outside your normal flow — a partner brings a delegation, or an invite-only event fills up and the rest go on a waitlist until a spot opens. Everything still lands in the same dashboard, checked for duplicates like any other registration.
**Visual:** `reg9` (Bulk Registration).
**Claims used:** bulk registration, RSVP/invitation waitlist (softened — not a blanket "sold out ticket" waitlist claim).

---

## 4. "How It Connects" Band

This page currently has no dedicated slot for a cross-product narrative band (see Implementation Notes). Content for it:

**Eyebrow:** `One Flow, Three Pages`
**Heading:** `Registration Is Where the Attendee Journey Starts — Not Where It Ends`
**Copy:** A registration isn't the finish line. The moment someone signs up, EventHex turns that record into a ticket — priced, branded, and ready to send — and that same ticket is what gets scanned at check-in. Nobody re-enters a name twice, and nothing you set up here (ticket types, approval rules, custom fields) has to be rebuilt downstream.

**Two link cards:**
1. `Event Ticketing` — "See how registrations become branded, QR-ready tickets with 0% platform fees." → `/event-ticketing/`
2. `Event Check-In` — "See how that same QR code checks someone in on the day, with live attendance tracking." → `/event-check-in/`

**Placement recommendation:** insert as a new section between Section 6 (dashboard) and the existing "How It Works" band — logically it's the payoff after showing the dashboard, and it sets up "How It Works" (which currently ends at "track attendees," a good handoff point to check-in).

---

## 5. How It Works (revise existing 4 steps → keep structure, tighten copy)

1. **Design Your Registration Form** — Choose your field types, set conditional logic, and decide which participant types need approval before checkout.
2. **Share Your Registration Link** — Publish the form and share it directly, or point people to your event page.
3. **Approve, Track, and Follow Up** — Watch registrations arrive, approve the ones that need a manual yes, and filter by payment or check-in status any time.
4. **Bring In the Rest** — Import remaining attendees from a spreadsheet or another platform, with duplicates caught automatically.

---

## 6. Why Choose EventHex Registration (revise 5 why-cards)

| Title | Desc |
|---|---|
| Forms That Fit | 20+ field types, conditional logic, and multi-language support — no developer required |
| Real Approval Control | Approval workflows that actually hold payment until you say yes |
| Import Without the Cleanup | AI-assisted mapping and duplicate detection, plus direct import from Eventbrite and Luma |
| Confirmed Instantly | Email and WhatsApp confirmations with QR codes attached automatically |
| Zero Platform Fees | Keep 100% of what you collect — no per-registrant markup |

*(Drop "Data Accuracy" card — was propped up by the unverified "99.9%" stat.)*

---

## 7. FAQ (5 — matched to real search intent)

1. **Q: How do I create a custom event registration form?**
   A: Use the drag-and-drop form builder to add fields beyond name and email — dropdowns, checkboxes, file uploads, dates, and more. You can apply conditional logic so a field only appears when it's relevant (for example, only VIP ticket holders see a lounge-access question), and translate every label if you're running a multi-language event.

2. **Q: Can I import my existing attendee list from a spreadsheet?**
   A: Yes. Upload a CSV or Excel file and the system reads your column headers and maps them to the right fields automatically — including headers written in another language. Every row is checked against your existing list, so duplicate emails or phone numbers are flagged before import completes. If you're moving from Eventbrite or Luma, you can import directly from those platforms instead of exporting a file first.

3. **Q: Can one person register multiple attendees at once?**
   A: Yes. A single buyer can register several people — with different ticket types if needed — in one checkout. Each attendee still gets their own confirmation and QR code, all linked back to the same order.

4. **Q: Can I require approval before a registration is confirmed?**
   A: Yes. Set any participant type to require approval, and you can also hold the attendee's payment until you approve them — the card is authorized but not charged until you say yes. If you reject a registration, the payment hold is released and a rejection message goes out automatically.

5. **Q: Does EventHex send a confirmation after someone registers?**
   A: Yes. Attendees receive a confirmation by email, WhatsApp, or both, with their QR code attached — the same code used to check them in at the event.

*(Dropped from current page: the GDPR-compliance FAQ — not something the product can substantiate; replace with the approval-workflow FAQ above, which is a stronger, code-verified answer to a comparable "is registration secure/controlled" search intent.)*

---

## 8. Final CTA

**Eyebrow:** `Get Started Today` *(existing pattern, unchanged)*
**Title:** `Ready for a Registration Flow That Doesn't Fight You?`
**Copy:** See how a custom form, an approval step, and a spreadsheet import all come together in one dashboard — then watch that same registration turn into a ticket and a check-in scan.
**Proof pills:** `AI-powered platform`, `Free onboarding support`, `No credit card required` *(existing — no change needed)*
**Buttons:** `Book a Free Demo` → `/book-a-demo/`, `Explore Features` → `#fv2-bento`

---

## 9. Visual Asset Inventory

**Local bento illustrations** — `src/components/event-registration/illustrations.ts` (all animated inline SVG, already built for this page, reusable as-is):
- `reg1`–`reg5`: Registration Management tab (attendee lists, live tracking, payment filter, check-in monitor, search/export)
- `reg6`–`reg10`: Import & Data tab (CSV import, duplicate detection, field mapping, bulk registration, import history)
- `reg11`–`reg15`: Forms & Fields tab (custom fields, conditional logic, form builder, consent, multi-ticket)

**Local raster images** — `public/feature-images/`:
- `event-registration-dashboard.png` (stacking card — dashboard)
- `event-registration-form.png` (stacking card — form builder)
- `event-registration-import.png` (stacking card — import wizard)
- `event-registration-hero-dashboard.png` (available, currently unused on this page — candidate for Section 5 confirmation visual or hero split image)

**Note:** `public/feature-images/event-registration/` subfolder only contains generic avatar/chart/cursor SVGs shared across other pages — not registration-specific screenshots. No action needed; just don't confuse with the illustrations above.

**Gap:** no existing visual for Section 2 (approval + payment hold) or Section 5 (confirmation/QR at registration). Either reuse adjacent illustrations (`reg3`, `reg14`'s shield motif minus the GDPR text) or commission two new SVGs in the same animated style before implementation.

---

## 10. Implementation Notes (for whoever builds this)

- `FeatureV2Layout.astro` (`src/components/feature-v2/FeatureV2Layout.astro`) has 8 fixed sections and no prop for a "how it connects" band. Options: (a) add a new optional section to the shared layout component (affects all pages using it — ticketing/check-in should get matching bands pointing back to registration), or (b) fold the connect narrative into the existing "Why Choose" section as a 6th styled card, or (c) inject a standalone section directly in `event-registration.astro` outside the layout component. Recommend (a) for consistency across all three connected pages, but that's a scope decision beyond this content spec.
- `reg14` (currently "GDPR Consent Fields") should be renamed/recopied to a generic "Consent Checkbox" card — the illustration itself (shield + checkboxes) still works, but its on-canvas text reads "I consent to data processing per GDPR Art.6," which should be genericized since we're not claiming GDPR compliance.
- Existing bento card "GDPR Consent Fields" title (line 81 of current file) → rename to "Consent Checkbox" or "Attendee Consent."
- Stats "100K+ Registrations Processed" and "99.9% Data Accuracy" (lines 40–43 of current file) have no code-verifiable backing — replace with the defensible stats in Section 2 above, or substitute real business metrics if available from analytics/CRM data outside this codebase.
