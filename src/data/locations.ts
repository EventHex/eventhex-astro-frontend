export interface LocationData {
  slug: string;
  city: string;
  country: string;
  region: string;
  intro: string;
  localAngle: string;
  /** Payment integrations relevant to this market */
  payments: { label: string; href: string }[];
  /** Whether Arabic/RTL localisation is highlighted */
  arabicRtl: boolean;
  /** Approximate event-industry descriptor for headings */
  industryNote: string;
}

export const locations: LocationData[] = [
  {
    slug: "dubai",
    city: "Dubai",
    country: "UAE",
    region: "GCC / Middle East",
    intro:
      "Dubai hosts some of the world's most ambitious events — from GITEX Global to World Expo pavilions — drawing thousands of international and regional attendees in a single venue. Organisers here operate under tight SLAs, expect bilingual (English/Arabic) communications, and deal with a mix of corporate cardholders, Careem Pay users, and guests paying via Apple Pay or local bank transfers. EventHex is built for this pace: real-time check-in at scale, WhatsApp-first attendee engagement, and Arabic RTL support across every attendee touchpoint.",
    localAngle:
      "Dubai events frequently span multiple concurrent sessions across vast convention centres like DWTC and ADNEC's Dubai halls, making multi-gate check-in and live session-level attendance tracking non-negotiable. Payment collection in the UAE typically runs through Tap Payments (supporting local cards, Apple Pay, and link-based payments) — EventHex integrates natively with Tap so your Dubai attendees never hit a foreign-currency friction point. WhatsApp is the dominant messaging channel in the UAE, and EventHex uses it for automated ticket delivery, event reminders, and last-minute updates that actually get read.",
    payments: [{ label: "Tap Payments", href: "/integrations/tap-payments/" }],
    arabicRtl: true,
    industryNote: "world-class MICE destination",
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    country: "UAE",
    region: "GCC / Middle East",
    intro:
      "Abu Dhabi's event calendar is anchored by government-driven summits, cultural flagship events like Abu Dhabi Art, and major sporting occasions at Yas Island — events that require enterprise-grade compliance, Arabic-first communications, and seamless coordination between organisers, protocol teams, and security. EventHex handles the complexity: multi-tier attendee types (VIPs, media, general public), bilingual registration forms with full RTL Arabic rendering, and real-time operational dashboards that keep venue managers informed without a radio call.",
    localAngle:
      "Abu Dhabi event budgets are often anchored to government or semi-government entities that require formal invoicing, VAT compliance, and local payment rails. Tap Payments covers UAE card networks and Apple Pay for consumer-facing ticketing, while direct bank transfer options can be configured for B2G sales flows. The emirate's large proportion of Arabic-speaking government attendees makes full RTL registration and notification flows essential — EventHex ships Arabic as a first-class language, not a plugin afterthought.",
    payments: [{ label: "Tap Payments", href: "/integrations/tap-payments/" }],
    arabicRtl: true,
    industryNote: "government and cultural flagship events",
  },
  {
    slug: "riyadh",
    city: "Riyadh",
    country: "Saudi Arabia",
    region: "GCC / Middle East",
    intro:
      "Saudi Arabia's Vision 2030 agenda has triggered an unprecedented wave of event investment: Formula E on the Corniche, Riyadh Season attracting millions of visitors, and a mushrooming corporate conference circuit across King Abdullah Financial District. Events in Riyadh skew large, Arabic-first, and are increasingly measured by data — attendance rates, session engagement, and post-event NPS. EventHex gives Riyadh-based organisers the tooling to match that ambition: scalable check-in, mada card acceptance, and AI-generated insights that feed directly into post-event reports.",
    localAngle:
      "mada is the dominant debit network in Saudi Arabia, covering the vast majority of the population who do not use international credit cards for everyday purchases — any ticketing solution that lacks mada support will see significant drop-off at checkout. EventHex integrates with Tap Payments, which supports mada natively alongside Visa, Mastercard, and Apple Pay. Arabic is mandatory, not optional: Saudi attendees expect registration forms, confirmation emails, and the attendee app itself to render in correct Arabic with proper RTL layout.",
    payments: [{ label: "Tap Payments (mada, Visa, Apple Pay)", href: "/integrations/tap-payments/" }],
    arabicRtl: true,
    industryNote: "Vision 2030 mega-events and corporate conferences",
  },
  {
    slug: "doha",
    city: "Doha",
    country: "Qatar",
    region: "GCC / Middle East",
    intro:
      "Doha has built world-class event infrastructure around the FIFA World Cup 2022 legacy — purpose-built venues, a streamlined visa-on-arrival process, and a mature hospitality ecosystem that makes it one of the GCC's fastest-growing MICE destinations. Events range from Qatar Economic Forum (attracting heads of state and Fortune 500 CEOs) to large-scale entertainment festivals at Lusail. Organisers in Doha need technology that can handle VIP protocol, bilingual English/Arabic communications, and KNET or Tap-based payment flows without friction.",
    localAngle:
      "KNET is Qatar's national debit payment network and is the default payment method for a large segment of residents — without KNET support, ticketed events lose a material share of local purchasers. Tap Payments covers KNET alongside international cards for Doha-based events. Qatar's population is highly diverse (over 85% expatriate), so multilingual capability — Arabic for locals and government delegates, English for the international community — is essential across every attendee communication.",
    payments: [{ label: "Tap Payments (KNET + international cards)", href: "/integrations/tap-payments/" }],
    arabicRtl: true,
    industryNote: "post-World-Cup MICE and entertainment events",
  },
  {
    slug: "london",
    city: "London",
    country: "UK",
    region: "Europe",
    intro:
      "London is one of Europe's top three event cities — ExCeL, Olympia, and the O2 handle hundreds of large-scale conferences and trade shows annually alongside a dense calendar of corporate dinners, product launches, and charity galas. Attendees are tech-savvy, expect fast digital check-in, and increasingly register via mobile. GDPR compliance, Stripe-powered card payments, and robust session-level analytics are the table stakes for serious London event organisers.",
    localAngle:
      "UK events operate under GDPR, which means registration forms must include explicit consent flows, data retention controls, and opt-in language that satisfies ICO requirements — EventHex handles this at the form-builder level without requiring custom development per event. Stripe is the default payment processor for UK card transactions (Visa, Mastercard, American Express), and EventHex's Stripe integration supports GBP pricing, VAT-inclusive ticketing, and partial refunds. London's corporate event sector also relies heavily on CRM integrations with HubSpot for post-event lead follow-up — EventHex syncs attendee data to HubSpot in real time.",
    payments: [{ label: "Stripe", href: "/integrations/stripe/" }],
    arabicRtl: false,
    industryNote: "Europe's premier conference and trade-show market",
  },
  {
    slug: "singapore",
    city: "Singapore",
    country: "Singapore",
    region: "Asia-Pacific",
    intro:
      "Singapore punches well above its geographic size as an event hub: Marina Bay Sands, Suntec, and Singapore EXPO handle Asia's largest technology, finance, and life-sciences conferences, while the city-state's position as ASEAN's commercial gateway draws delegations from across Southeast and Northeast Asia. Event organisers here work to high operational standards — fast badge printing, real-time session counts for fire-safety compliance, and polished digital experiences that reflect Singapore's reputation for efficiency.",
    localAngle:
      "Singapore's attendee base is highly multilingual (English, Mandarin, Malay, Tamil) but English is the default working language for most professional events, keeping localisation requirements manageable. Payment rails favour Stripe for card transactions (SGD), with strong uptake of PayNow QR and digital wallets — EventHex's Stripe integration covers standard card flows, and the platform's open webhook architecture allows PayNow pass-through for price-sensitive ticketing tiers. Organisers in Singapore also lean on WhatsApp for last-mile attendee communication, particularly for multi-day conferences where schedule changes need to reach attendees instantly.",
    payments: [{ label: "Stripe", href: "/integrations/stripe/" }],
    arabicRtl: false,
    industryNote: "ASEAN's leading MICE and technology conference hub",
  },
  {
    slug: "mumbai",
    city: "Mumbai",
    country: "India",
    region: "South Asia",
    intro:
      "Mumbai is India's commercial capital and the country's busiest event city — from Bombay Stock Exchange investor days and pharmaceutical industry summits at NESCO to large-scale cultural festivals, Bollywood award ceremonies, and IPL hospitality events. Event scale in Mumbai is genuinely large: multi-thousand-attendee conferences are routine, registration queues at venue doors are a known pain point, and organisers compete on operational smoothness as much as content quality. EventHex's multi-device check-in, bulk import tools, and real-time dashboard are built for exactly this pressure.",
    localAngle:
      "Razorpay is the dominant payment gateway in India, supporting UPI (the most popular payment method among Indian professionals), net banking, domestic debit/credit cards, and EMI — EventHex integrates with Razorpay natively, so Mumbai attendees can pay via UPI QR or their preferred bank without redirection friction. India's event market also sees high WhatsApp engagement: event confirmations, digital tickets, and QR codes delivered via WhatsApp see dramatically higher open rates than email in the Indian market. EventHex's WhatsApp notification flow is configured for this from day one.",
    payments: [{ label: "Razorpay (UPI, cards, net banking)", href: "/integrations/razorpay/" }],
    arabicRtl: false,
    industryNote: "India's largest event market by scale and volume",
  },
];
