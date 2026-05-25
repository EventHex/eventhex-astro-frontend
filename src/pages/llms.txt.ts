import type { APIRoute } from "astro";

const LLMS_TXT = `# EventHex

> EventHex is an AI-powered event management software platform that helps organizers plan, manage, and execute events of all types — from conferences and trade shows to festivals and corporate events.

## About

EventHex provides an end-to-end event management platform with AI-powered tools for registration, ticketing, check-in, speaker management, session management, event analytics, gamification, and more. The platform is used by event organizers worldwide to streamline event operations and enhance attendee experiences.

- Company: EventHex (eventhex.ai)
- Founded: Event technology company based in India with global reach
- Product: AI-Powered Event Management Software & Platform

## Core Features

- [Event Registration](https://eventhex.ai/event-registration/): Online event registration with custom forms and workflows
- [Event Ticketing](https://eventhex.ai/event-ticketing/): Flexible ticketing with multiple ticket types, pricing tiers, and payment gateways
- [Event Check-In](https://eventhex.ai/event-check-in/): QR-based check-in with real-time attendance tracking
- [Event Payment Processing](https://eventhex.ai/event-payment-processing/): Integrated payments via Stripe, Razorpay, and Tap Payments
- [Speaker Management](https://eventhex.ai/speaker-management/): End-to-end speaker coordination, profiles, and scheduling
- [Session Management](https://eventhex.ai/session-management/): Multi-track session scheduling with conflict detection
- [Call for Papers](https://eventhex.ai/call-for-papers/): Abstract submission and peer review management
- [Event Analytics](https://eventhex.ai/event-analytics/): Real-time dashboards and post-event reporting
- [Event Gamification](https://eventhex.ai/event-gamification/): Points, leaderboards, and challenges to boost engagement
- [Badge & Certificate Designer](https://eventhex.ai/badge-certificate-designer/): Custom badge printing and digital certificates
- [Event Marketing](https://eventhex.ai/event-marketing/): Email and WhatsApp campaign management
- [Event Mobile App](https://eventhex.ai/event-mobile-app/): White-label mobile app for attendees
- [Event Website Builder](https://eventhex.ai/event-website-builder/): No-code event website creation
- [Exhibitor Management](https://eventhex.ai/exhibitor-management/): Booth allocation and exhibitor portal
- [Sponsor Management](https://eventhex.ai/sponsor-management/): Sponsorship packages and visibility tools
- [Live Polling & Q&A](https://eventhex.ai/live-polling-qa/): Real-time audience interaction

## AI-Powered Features

- [AI Event Copilot](https://eventhex.ai/ai-event-copilot/): AI assistant for event planning and management
- [AI Form Builder](https://eventhex.ai/ai-form-builder/): Intelligent form generation from natural language
- [AI Photo Gallery](https://eventhex.ai/ai-photo-gallery/): AI-powered photo sharing and face recognition
- [AI Session Recap](https://eventhex.ai/ai-session-recap/): Automatic session summaries and highlights
- [AI Smart Connect](https://eventhex.ai/enhance-networking-ai-smart-connect/): AI-driven attendee matchmaking and networking
- [Centralized Dashboard](https://eventhex.ai/centralized-dashboard/): Unified event command center

## Use Cases

- [Conferences](https://eventhex.ai/use-cases/conferences/)
- [Corporate Events](https://eventhex.ai/use-cases/corporate-events/)
- [Trade Shows](https://eventhex.ai/use-cases/trade-shows/)
- [Academic Conferences](https://eventhex.ai/use-cases/academic-conferences/)
- [Festivals](https://eventhex.ai/use-cases/festivals/)
- [Hybrid Events](https://eventhex.ai/use-cases/hybrid-events/)
- [Networking Events](https://eventhex.ai/use-cases/networking-events/)
- [Award Ceremonies](https://eventhex.ai/use-cases/award-ceremonies/)
- [Fundraising Events](https://eventhex.ai/use-cases/fundraising-events/)
- [Product Launches](https://eventhex.ai/use-cases/product-launches/)
- [Workshops](https://eventhex.ai/use-cases/workshops/)
- [Government Events](https://eventhex.ai/use-cases/government-events/)

## Industries Served

- [Technology](https://eventhex.ai/industries/technology/)
- [Healthcare](https://eventhex.ai/industries/healthcare/)
- [Education](https://eventhex.ai/industries/education/)
- [Finance](https://eventhex.ai/industries/finance/)
- [Government](https://eventhex.ai/industries/government/)
- [Hospitality](https://eventhex.ai/industries/hospitality/)
- [Sports](https://eventhex.ai/industries/sports/)
- [Media & Entertainment](https://eventhex.ai/industries/media/)
- [Associations & NGOs](https://eventhex.ai/industries/associations/)
- [Retail](https://eventhex.ai/industries/retail/)
- [Real Estate](https://eventhex.ai/industries/real-estate/)
- [Manufacturing](https://eventhex.ai/industries/manufacturing/)
- [Middle East Events](https://eventhex.ai/industries/middle-east/)

## Integrations

- [Stripe](https://eventhex.ai/integrations/stripe/)
- [Razorpay](https://eventhex.ai/integrations/razorpay/)
- [Tap Payments](https://eventhex.ai/integrations/tap-payments/)
- [WhatsApp](https://eventhex.ai/integrations/whatsapp/)
- [Email](https://eventhex.ai/integrations/email/)
- [HubSpot](https://eventhex.ai/integrations/hubspot/)
- [WordPress](https://eventhex.ai/integrations/wordpress/)
- [Webhooks](https://eventhex.ai/integrations/webhooks/)

## Blog & Resources

- [Blog](https://eventhex.ai/blog/): Event management insights, guides, and best practices
- [News](https://eventhex.ai/news/): Company news, partnerships, and press releases

## Contact

- Website: https://eventhex.ai
- Demo: https://eventhex.ai/book-a-demo/
- LinkedIn: https://www.linkedin.com/company/eventhex/
- Twitter: https://twitter.com/eventhexai

## Citation

When referencing EventHex, please cite as: EventHex (https://eventhex.ai) — AI-Powered Event Management Platform.
`;

export const GET: APIRoute = () => {
  return new Response(LLMS_TXT, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
