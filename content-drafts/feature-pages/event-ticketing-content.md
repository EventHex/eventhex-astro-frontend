# Event Ticketing — Feature Page Content Spec

> Rewrite spec for `src/pages/event-ticketing.astro`. Outcome-driven, code-verified.
> One of three connected pages: **Registration ↔ Ticketing ↔ Check-In**.
> Lead differentiator: **0% platform fees — bring your own payment gateway, keep 100% of ticket revenue.**

---

## 0. Verification basis (what we may claim)

Only features with backing in `eventhex-saas-cms` (organizer admin app) and `eventhex-saas-api` (backend) are claimed below.

**VERIFIED — safe to claim:**
- Multiple ticket types / tiers per event (early-bird, VIP, group, sponsor, invite-only), each with independent price, capacity, and access rules
- Per-ticket capacity caps (sold-out logic when a tier fills)
- Discounts: flat/static amount, percentage, and quantity-band (tiered) pricing
- Early-bird pricing via a date cutoff (`discountEndDate`-style gating)
- Coupon / promo codes (percentage and flat), applied at checkout
- Paid add-ons sold alongside tickets (workshop seats, meals, parking, merchandise)
- Tax / GST handling on ticket price (TaxPricing configuration)
- QR-coded ticket delivery (unique QR per ticket, emailed to the buyer)
- Badge printing tied to ticket + registration data
- Group tickets / bundles
- Mobile-first checkout flow
- Waitlist and approval-based registration
- Bring-your-own payment gateway: **Stripe, Razorpay, Tap** — 0% EventHex platform fee on own-gateway sales; direct payout to the organizer's own account
- Split payments: **Stripe Connect** and **Razorpay Route**
- EventHex default gateway available as a fast-setup alternative (competitive rate)
- Real-time sales/revenue analytics; exportable revenue reports
- Automated email confirmations/reminders

**DO NOT CLAIM (not verified):**
- Multi-currency ticket pricing (single currency per event/franchise only — do not imply per-ticket currency choice)
- Seat maps / assigned seating (only capacity caps exist — never say "reserved seating", "seat selection", or "seating charts")

---

## 1. SEO

- **URL:** `/event-ticketing/` (unchanged)
- **Title tag:** `Event Ticketing Software — Sell Tickets, 0% Platform Fees | EventHex`
- **Meta description:** `Sell event tickets with your own Stripe, Razorpay, or Tap gateway and pay 0% platform fees — keep 100% of revenue. Multi-tier tickets, coupons, add-ons, QR delivery, and instant payouts.`
- **OG image:** reuse `https://cms.eventhex.ai/wp-content/uploads/2025/04/eventticketing.png`
- **Schema:** keep `SoftwareApplication` JSON-LD; `offers.price = "0"`, description "0% platform fee with your own payment gateway".

---

## 2. Hero

- **Eyebrow:** `Event Ticketing`
- **H1:** **Sell Tickets on Your Terms — and Keep Every Penny**
- **Subhead:** Connect your own Stripe, Razorpay, or Tap account and pay **0% platform fees**. Build multi-tier tickets, run coupon campaigns, sell add-ons, and send QR tickets — with payouts landing directly in your account.
- **Primary CTA:** `Get a demo` → `/book-a-demo/`
- **Secondary CTA (text link):** `See how pricing compares` → anchor to revenue calculator (`#ticket-pricing`)
- **Visual:** existing hero image `eventticketing.png` (ticketing dashboard).
- **Trust strip (3 items):** `0% Platform Fees` · `Your Gateway, Your Payouts` · `QR Tickets + Badge Printing`

Copy note: lead the H1 on the money outcome, not the software category. "Keep every penny" is the emotional hook against Eventbrite's per-ticket cut.

---

## 3. Section — The 0% Fee Difference (NEW, lead section)

- **Heading:** **Stop Paying to Sell Your Own Tickets**
- **Outcome copy:** Most ticketing platforms take a cut of every ticket — often 10% or more once service and processing fees stack up. EventHex doesn't. Plug in your own Stripe, Razorpay, or Tap gateway and EventHex charges **0% platform fee** on those sales. Money moves straight from your buyer to your account — no holds, no middleman, no settlement delay. Prefer a one-click setup? Use the EventHex default gateway at a competitive rate instead. Either way, you decide.
- **Supporting proof points (3 mini-cards):**
  1. **Your gateway, 0% platform fee** — Stripe, Razorpay, or Tap connected in minutes.
  2. **Direct payouts** — Funds settle to your own account on your gateway's schedule.
  3. **Split payments built in** — Route revenue automatically with Stripe Connect or Razorpay Route.
- **Visual:** reuse `/feature-images/event-ticketing/secure-payment.svg` (secure payment / gateway illustration).
- **Competitive framing (subtle, no competitor names in body copy):** contrast "keep 100%" vs. "platforms that skim every ticket."

---

## 4. Section — Build Any Ticket You Can Imagine

- **Heading:** **One Event, Every Ticket Type**
- **Outcome copy:** Sell early-bird, VIP, group bundles, sponsor passes, and invite-only tickets from a single event page — each with its own price, capacity, and access rules. Cap a tier and it sells out automatically. Reward big buyers with quantity-band pricing, and put your logo and colors on every ticket so it looks unmistakably yours.
- **Feature bullets (outcome-led):**
  - Independent price and capacity per tier — no duplicate event pages
  - Automatic sold-out handling when a tier hits its cap
  - Group bundles and quantity-band pricing for volume buyers
  - Fully branded tickets — your logo, your colors
- **Visual:** reuse `/feature-images/event-ticketing/custom-ticketing-brand.svg`.

---

## 5. Section — Fill Seats with Smart Pricing

- **Heading:** **Turn Pricing into a Growth Lever**
- **Outcome copy:** Launch early-bird pricing that closes on a set date, drop percentage or flat-amount discounts, and issue coupon codes for partners, members, or campaigns. Add paid extras — workshop seats, meals, parking, merchandise — right in the checkout so every order grows your revenue. Tax and GST are calculated for you, so what buyers see is what you're owed.
- **Feature bullets:**
  - Early-bird pricing with an automatic cutoff date
  - Percentage, flat, and quantity-tiered discounts
  - Coupon and promo codes for targeted campaigns
  - Paid add-ons and upsells at checkout
  - Automatic tax / GST calculation
- **Visual:** reuse `/feature-images/event-ticketing/simplified-checkout.svg` (checkout with coupon field).

---

## 6. Section — Checkout That Converts

- **Heading:** **A Checkout Built to Close the Sale**
- **Outcome copy:** Every extra tap loses a buyer. EventHex's mobile-first checkout keeps the path from "interested" to "paid" short — clean tier selection, coupon entry, add-ons, and secure payment on any device. Buyers get a QR ticket in their inbox the moment they pay.
- **Feature bullets:**
  - Mobile-first, low-friction flow
  - Secure payment on your chosen gateway
  - Instant QR ticket delivery by email
  - Automated confirmations and reminders
- **Visual:** reuse `/feature-images/event-ticketing/simplified-checkout.svg` (or the existing checkout SVG in `PricingCalculatorSection`).

---

## 7. Section — From Ticket to Front Door

- **Heading:** **Every Ticket Becomes a Fast Check-In**
- **Outcome copy:** The QR code on each ticket is the same code your team scans at the door — no separate lists, no manual lookup. Scan to validate in seconds, print branded badges on arrival, and watch attendance update in real time. Because ticketing, registration, and check-in run on one system, the data never has to be re-entered.
- **Feature bullets:**
  - Unique QR per ticket, validated at entry
  - On-site branded badge printing from ticket data
  - Real-time attendance as guests scan in
- **Visual:** reuse `/feature-images/event-ticketing/qr-badge-cards.svg`.

---

## 8. Section — Know Your Numbers as They Happen

- **Heading:** **See Revenue Move in Real Time**
- **Outcome copy:** Track ticket sales, revenue, and tier performance while your campaign is live — then export clean reports broken down by ticket type, date, and payment method. Model your revenue before launch with the built-in calculator: adjust attendance, price, and VIP mix to see what your next event can bring in, on your gateway or EventHex's.
- **Feature bullets:**
  - Live sales and revenue tracking
  - Exportable reports (CSV / PDF) by tier, date, payment method
  - Pre-launch revenue calculator (own gateway vs. EventHex gateway)
- **Visual:** existing revenue calculator (`PricingCalculatorSection.astro`) — keep it; it already contrasts "Your gateway" (0% fee) vs "EventHex gateway".

---

## 9. Section — Curate Who Gets In

- **Heading:** **Approvals and Waitlists for Premium Access**
- **Outcome copy:** For limited-capacity or invite-only events, hold registrations for review, approve the right guests, and let a waitlist fill seats automatically when spots open. Everything is managed from one dashboard, so no request slips through.
- **Feature bullets:**
  - Approval-based registration
  - Automated waitlist management
  - One dashboard for review and communication
- **Visual:** waitlist/approval SVG from the Bento tab 2 (Analytics & Compliance panel).

---

## 10. "How it connects" band (cross-link narrative — REQUIRED)

- **Heading:** **Ticketing Is One Piece of the Whole Event**
- **Copy:** EventHex ticketing doesn't hand off to another tool — it runs on the same system as registration and check-in. A ticket sold here becomes a tracked registration, and its QR code becomes a check-in at the door. One record, start to finish.
- **Three linked cards:**
  1. **Registration** → *Manage every sign-up in real time.* Link: `/event-registration/`
  2. **Ticketing** *(you are here)* → *Sell tickets and keep 100% of revenue.*
  3. **Check-In** → *Scan QR tickets and track attendance live.* Link: `/event-check-in/`
- Narrative thread: "Sell → Register → Scan," each stage inheriting the previous stage's data.

---

## 11. FAQ (real search intent)

1. **Q: Can I sell tickets with my own Stripe account?**
   A: Yes. Connect your own Stripe, Razorpay, or Tap gateway and payments go straight to your account. EventHex charges 0% platform fee on tickets sold through your own gateway, and you keep control of payouts, settlement timing, and refunds.

2. **Q: Does EventHex really charge 0% platform fees on ticketing?**
   A: When you use your own payment gateway, EventHex takes 0% of your ticket revenue — you keep 100% (your gateway's standard processing fee still applies, as it would anywhere). If you'd rather not connect a gateway, the EventHex default option is available at a competitive rate.

3. **Q: Can I create multiple ticket types for one event?**
   A: Yes. Build early-bird, VIP, group, sponsor, and invite-only tiers on the same event page, each with its own price, capacity cap, and access rules — no duplicate flows.

4. **Q: Can I run discounts, coupons, and early-bird pricing?**
   A: Yes. Set early-bird pricing with an automatic cutoff date, apply percentage, flat, or quantity-tiered discounts, and issue coupon codes for partners or campaigns. You can also sell paid add-ons at checkout.

5. **Q: How do attendees get their tickets, and how do I check them in?**
   A: Every buyer receives a unique QR ticket by email. Your team scans that same QR at the door for instant validation, prints branded badges on-site, and sees attendance update in real time — all on the same platform.

6. **Q: Can I hold registrations for approval or run a waitlist?**
   A: Yes. Use approval-based registration for curated or invite-only events, and let the automated waitlist fill spots when they open — all managed from one dashboard.

---

## 12. Final CTA

- **Heading:** **Sell Your Next Event's Tickets — and Keep 100%**
- **Subcopy:** Connect your gateway, launch in minutes, and stop handing a cut of every ticket to a platform.
- **Primary CTA:** `Get a demo` → `/book-a-demo/`
- **Footer CTA (MarketingLayout):** title `Upgrade Your Event Ticketing System Today` — keep.

---

## 13. Images to reuse (no new assets required)

| Asset | Path | Used in |
|---|---|---|
| Ticketing dashboard | `cms.eventhex.ai/.../eventticketing.png` | Hero + OG |
| Secure payment / gateway | `/feature-images/event-ticketing/secure-payment.svg` | §3 (0% fee) |
| Branded ticket customization | `/feature-images/event-ticketing/custom-ticketing-brand.svg` | §4 (ticket types) |
| Checkout flow | `/feature-images/event-ticketing/simplified-checkout.svg` | §5 pricing, §6 checkout |
| QR + badge cards | `/feature-images/event-ticketing/qr-badge-cards.svg` | §7 (ticket → door) |
| Revenue calculator | `PricingCalculatorSection.astro` (interactive) | §8 (analytics) |
| Waitlist/approval SVG | inline in `BentoGridSection.astro` tab 2 | §9 (approvals) |

Existing components map cleanly: `HeroSection` (§2), a new/edited lead block (§3), `BentoGridSection` tabs (§4–§9 feature grid), `FeatureCardsSection` stacking cards (§4–§6), `PricingCalculatorSection` (§8), `FaqLightSection` (§11), `CTASection` (§12). Add the "How it connects" band (§10) — no equivalent exists yet.

---

## 14. Copy guardrails

- Never say: "seat map", "seat selection", "reserved/assigned seating", "seating chart", "multi-currency", "sell in any currency".
- Always frame fees as: 0% **platform** fee on own-gateway sales; buyer's gateway processing fee is separate and normal.
- Lead outcomes ("keep 100%", "fill seats", "fast check-in"), not mechanics.
- Keep the Registration/Ticketing/Check-In trio cross-linked on every connected page.
