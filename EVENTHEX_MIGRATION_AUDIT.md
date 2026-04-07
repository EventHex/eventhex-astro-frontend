# EventHex Migration Audit

Updated: 2026-04-06

This audit compares routable pages in `eventhex-frontend(old)` against the current Astro frontend.

## Completed In This Pass

- `/partnership/`
- `/session-management/`
- `/ai-photo-gallery/`
- `/ai-session-recap/`
- `/event-mobile-app/`
- `/event-website-builder/`
- `/event-gamification/`
- `/badge-certificate-designer/`
- `/event-check-in/`
- `/live-polling-qa/`
- `/event-analytics/`

## Already Covered In Astro

- `/`
- `/about-us/`
- `/contact-en/`
- `/book-a-demo/`
- `/speaker-management/`
- `/event-ticketing/`
- `/event-marketing/`
- `/exhibitor-management/`
- `/event-registration/`
- `/sponsor-management/`
- `/centralized-dashboard/`
- `/ai-form-builder/`
- `/blog/`
- `/blog/[slug]/`
- `/news/`
- `/news/[slug]/`

## Covered By Alias

- `/ai-networking/` is already represented by `/enhance-networking-ai-smart-connect/`

## Remaining Top-Level Custom Pages

- `/customers/`
- `/security/`

Count: 2

## Remaining Route Groups

### Integrations

(All migrated)

Count: 0

### Use Cases

- `/use-cases/conferences/`
- `/use-cases/trade-shows/`
- `/use-cases/corporate-events/`
- `/use-cases/academic-conferences/`
- `/use-cases/hybrid-events/`
- `/use-cases/workshops/`
- `/use-cases/networking-events/`
- `/use-cases/fundraising-events/`
- `/use-cases/award-ceremonies/`
- `/use-cases/product-launches/`
- `/use-cases/festivals/`
- `/use-cases/government-events/`

Count: 12

### Comparisons

- `/compare/eventhex-vs-eventbrite/`
- `/compare/eventhex-vs-cvent/`
- `/compare/best-event-management-software/`
- `/compare/eventhex-vs-hopin/`
- `/compare/eventhex-vs-whova/`
- `/compare/eventhex-vs-bizzabo/`
- `/compare/eventhex-vs-splash/`
- `/compare/eventhex-vs-airmeet/`
- `/compare/best-conference-apps/`

Count: 9

### Industries

(All migrated)

Count: 0

### Glossary

- `/glossary/event-management-software/`
- `/glossary/event-registration-software/`
- `/glossary/event-ticketing-platform/`
- `/glossary/qr-code-check-in/`
- `/glossary/attendee-management/`
- `/glossary/event-marketing-automation/`
- `/glossary/hybrid-event/`
- `/glossary/virtual-event-platform/`
- `/glossary/event-app/`
- `/glossary/event-analytics/`
- `/glossary/net-promoter-score/`
- `/glossary/event-gamification/`
- `/glossary/live-polling/`
- `/glossary/event-sponsorship/`
- `/glossary/event-roi/`
- `/glossary/badge-printing/`
- `/glossary/session-management/`
- `/glossary/speaker-management/`
- `/glossary/event-website-builder/`
- `/glossary/drip-campaign/`
- `/glossary/exhibitor-management/`
- `/glossary/event-check-in-software/`
- `/glossary/post-event-survey/`
- `/glossary/event-crm/`
- `/glossary/ai-event-networking/`
- `/glossary/event-budget-template/`
- `/glossary/on-demand-recording/`
- `/glossary/event-capacity-management/`
- `/glossary/discount-codes-events/`
- `/glossary/white-label-event-platform/`
- `/glossary/waitlist-management/`
- `/glossary/gdpr-events/`
- `/glossary/multi-day-event-management/`
- `/glossary/event-floor-plan/`
- `/glossary/conference-management-software/`
- `/glossary/trade-show-management/`
- `/glossary/webinar-platform/`
- `/glossary/early-bird-pricing/`
- `/glossary/whatsapp-event-marketing/`
- `/glossary/event-feedback/`
- `/glossary/sponsor-roi-report/`
- `/glossary/breakout-session/`
- `/glossary/event-agenda/`
- `/glossary/push-notifications-events/`
- `/glossary/event-lead-generation/`
- `/glossary/ai-session-recap/`
- `/glossary/event-certificate/`
- `/glossary/event-volunteer-management/`
- `/glossary/peer-to-peer-fundraising-event/`
- `/glossary/event-sponsorship-proposal/`
- `/glossary/event-ticketing-fees/`
- `/glossary/corporate-events/`
- `/glossary/event-sponsorship-tiers/`
- `/glossary/registration-confirmation-email/`

Count: 54

### Feature x Event-Type Programmatic Pages

- `event-ticketing`: `conferences`, `trade-shows`, `corporate-events`, `workshops`, `networking-events`, `fundraising-events`, `hybrid-events`, `academic-conferences`, `product-launches`, `award-ceremonies`
- `event-check-in`: `conferences`, `trade-shows`, `corporate-events`, `workshops`, `networking-events`, `fundraising-events`, `hybrid-events`, `academic-conferences`, `product-launches`, `award-ceremonies`
- `ai-photo-gallery`: `conferences`, `trade-shows`, `corporate-events`, `award-ceremonies`, `networking-events`, `hybrid-events`, `workshops`, `fundraising-events`, `academic-conferences`, `product-launches`
- `event-analytics`: `conferences`, `trade-shows`, `corporate-events`, `hybrid-events`, `workshops`, `fundraising-events`, `networking-events`, `academic-conferences`, `product-launches`, `award-ceremonies`
- `live-polling-qa`: `conferences`, `corporate-events`, `workshops`, `academic-conferences`, `hybrid-events`, `trade-shows`, `networking-events`, `fundraising-events`, `product-launches`, `award-ceremonies`
- `event-registration`: `conferences`, `trade-shows`, `corporate-events`, `workshops`, `hybrid-events`, `fundraising-events`, `networking-events`, `academic-conferences`, `product-launches`, `award-ceremonies`

Count: 60

### Location Pages

- `/event-management/dubai/`
- `/event-management/abu-dhabi/`
- `/event-management/riyadh/`
- `/event-management/london/`
- `/event-management/singapore/`
- `/event-management/mumbai/`
- `/event-management/doha/`

Count: 7

## Recommended Migration Order

1. `/features/` hub page
2. Core missing feature pages: `/event-check-in/`, `/event-analytics/`, `/ai-session-recap/`
3. Remaining feature-detail pages: `/event-mobile-app/`, `/event-website-builder/`, `/ai-event-copilot/`, `/event-gamification/`, `/badge-certificate-designer/`, `/live-polling-qa/`, `/call-for-papers/`, `/event-notifications/`, `/event-payment-processing/`
4. Trust and commercial pages: `/customers/`, `/security/`
5. Programmatic groups: integrations, use-cases, comparisons, industries, glossary, location pages, feature x event-type pages

## Migration Rules

- Do not replace pages that already exist in Astro.
- Treat WordPress as the source of truth wherever practical for content, media, and submission flows.
- Reuse WordPress-backed endpoints and assets instead of introducing isolated frontend-only data where a backend flow already exists.