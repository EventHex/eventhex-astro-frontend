// Verified against WordPress old-slug history and SEO redirect plugin (2026-09-08).
// Keys are legacy article slugs; values are their current published article slugs.
const LEGACY_BLOG_SLUGS: Readonly<Record<string, string>> = {
  "12-mistakes-first-time-event-organizers-make-and-how-to-avoid-them": "first-time-exhibitor-management-mistakes",
  "20-best-event-management-software-tools-to-simplify-your-event-planning-2025-edition": "25-best-event-management-software-tools-2026-edition",
  "5902-2": "attendee-engagement-event-technology",
  "declining-attendee-retention-and-event-tech": "event-software-and-declining-attendee-retention",
  "declining-attendee-retention-how-event-tech-can-fix-it": "event-software-and-declining-attendee-retention",
  "easiest-and-relaxing-guide-to-speaker-management-event": "easiest-and-relaxing-guide-to-event-speaker-management",
  "event-booking-platforms-transforming-event-experiences": "smart-event-ticketing-access-control",
  "event-marketing-recurring-events-and-attendee-retentio": "event-marketing-recurring-events-attendee-retention",
  "event-registration-made-effortless-how-eventhex-delivers-simplicity-without-compromising-control": "event-registration-software-made-easy-with-eventhex",
  "event-registration-made-effortless-with-eventhex-today": "event-registration-software-made-easy-with-eventhex",
  "exhibitor-management-mistakes-first-time-event-organizers-make": "first-time-exhibitor-management-mistakes",
  "how-ai-matchmaking-technology-is-revolutionizing-b2b-event-networking": "ai-event-matchmaking-networking-guide",
  "how-ai-powered-event-matchmaking-platforms-drive-real-b2b-value": "ai-event-matchmaking-networking-guide",
  "how-eventhex-helps-recurring-event-boost-retention": "event-marketing-recurring-events-attendee-retention",
  "how-to-choose-the-right-event-ticketing-software-for-organizers-in-2026": "smart-event-ticketing-access-control",
  "maximize-your-event-revenue-free-event-ticketing-and-seamless-management-with-eventhex": "maximize-revenue-with-event-ticketing",
  "revolutionize-eventhexs-event-management-software": "revolutionize-events-with-event-management-software",
  "revolutionize-your-events-with-eventhexs-ai-powered-3": "event-software-and-declining-attendee-retention",
  "revolutionize-your-events-with-eventhexs-ai-powered-4": "revolutionize-events-with-event-management-software",
  "revolutionize-your-events-with-eventhexs-ai-powered-event-management-software": "revolutionize-events-with-event-management-software",
  "simplifying-event-registration-how-eventhex-sets-a-new-standard-for-ease-and-control": "event-registration-software-made-easy-with-eventhex",
  "the-complete-guide-to-real-time-live-transcription-for-corporate-events": "breaking-barriers-why-real-time-live-transcription-is-essential-for-modern-events",
  "the-easiest-and-most-relaxing-guide-to-speaker-management-at-events": "easiest-and-relaxing-guide-to-event-speaker-management",
  "the-easiest-and-most-relaxing-guide-to-speaker-management-events": "easiest-and-relaxing-guide-to-event-speaker-management",
  "the-ultimate-guide-to-future-ready-event-experiences-with-eventhex": "modern-event-platforms-future-ready-events-eventhex",
  "the-ultimate-guide-to-selecting-an-secure-event-ticketing-platform-in-2026": "smart-event-ticketing-access-control",
  "transforming-events-how-modern-technology-is-revolutionizing-event-management": "event-management-technology-guide-for-modern-events",
  "why-attendee-retention-is-declining-and-how-event-tech-can-fix-it": "event-software-and-declining-attendee-retention",
  "why-event-teams-struggle-behind-the-scenes-and-how-modern-platforms-fix-it": "modern-event-platforms-fixing-event-team-struggles",
  "why-modern-events-fail-without-centralized-intelligence-and-how-eventhex-solves-it": "attendee-engagement-centralized-event-intelligence",
};

export function getLegacyBlogRedirect(path: string): string | null {
  const match = path.match(/^\/(?:blog\/)?([^/]+)\/?$/);
  if (!match || !Object.hasOwn(LEGACY_BLOG_SLUGS, match[1])) return null;
  return `/blog/${LEGACY_BLOG_SLUGS[match[1]]}/`;
}
