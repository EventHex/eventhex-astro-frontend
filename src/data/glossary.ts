export interface GlossaryEntry {
  term: string;
  slug: string;
  /** One-sentence definition used for meta descriptions and index card excerpts */
  short: string;
  /** 2–3 paragraph explanation as HTML (use <p> tags) */
  body: string;
  /** 3–4 related slugs from the same glossary */
  related: string[];
}

export const glossary: GlossaryEntry[] = [
  {
    term: "Event Management Software",
    slug: "event-management-software",
    short: "An all-in-one platform that centralises the planning, promotion, execution, and analysis of events in a single dashboard.",
    body: `<p>Event management software replaces disconnected spreadsheets and email chains with a unified workspace covering registration, ticketing, marketing, on-site operations, and post-event reporting. Instead of juggling six tools, an organiser logs into one platform to see registrations arriving in real time, attendee communications going out automatically, and check-in stats updating live on event day.</p>
<p>The right platform reduces administrative overhead and lets the team focus on attendee experience rather than logistics. Key capabilities to evaluate include customisable registration forms, multi-tier ticketing, marketing automation, QR check-in, session management, and analytics dashboards that connect all the dots.</p>
<p>EventHex is a modern example that unifies these workflows under one roof, purpose-built for organisers who run everything from intimate corporate workshops to large multi-day conferences.</p>`,
    related: [
      "event-registration-software",
      "event-ticketing-platform",
      "event-analytics",
      "conference-management-software",
    ],
  },
  {
    term: "Event Registration Software",
    slug: "event-registration-software",
    short: "Software that lets attendees sign up, choose sessions, and pay online without any manual processing by the organiser.",
    body: `<p>Event registration software automates the full sign-up journey: custom form fields, session preferences, dietary requirements, payment processing, and automatic confirmation emails — all without a single spreadsheet or manual email. Conditional logic forms show or hide fields based on previous answers, keeping the experience clean for each attendee type.</p>
<p>Real-time dashboards show registration velocity so teams can adjust marketing spend accordingly. The data collected at registration also seeds your CRM and personalises the attendee journey downstream — from tailored reminder emails to personalised on-site badge details.</p>
<p>EventHex supports multi-ticket types, group registrations, promo codes, and instant confirmation emails, giving organisers everything they need to convert interest into confirmed attendance efficiently.</p>`,
    related: [
      "event-ticketing-platform",
      "registration-confirmation-email",
      "discount-codes-events",
      "attendee-management",
    ],
  },
  {
    term: "Event Ticketing Platform",
    slug: "event-ticketing-platform",
    short: "A platform that handles ticket creation, pricing tiers, payment collection, and digital ticket delivery to buyers.",
    body: `<p>An event ticketing platform manages the commercial side of attendance: creating ticket types (VIP, general, group), setting prices, collecting payments, and delivering QR-coded tickets via email or mobile wallet. Advanced platforms support early-bird pricing that switches automatically at deadline, group discount thresholds, and promo codes for targeted audiences.</p>
<p>The ticketing system should connect directly to the check-in system so there is no duplicate data entry — a scanned QR code at the door should pull the attendee record instantly. Fee structures vary widely between platforms: some charge a percentage per ticket, others offer flat fees or zero platform fees, passing only payment processor costs to organisers.</p>
<p>EventHex's ticketing module supports both free and paid events with transparent fee structures and instant payouts, and every ticket issued includes a QR code that feeds directly into the on-site check-in flow.</p>`,
    related: [
      "event-ticketing-fees",
      "early-bird-pricing",
      "discount-codes-events",
      "qr-code-check-in",
    ],
  },
  {
    term: "QR Code Check-In",
    slug: "qr-code-check-in",
    short: "A fast entry process where attendees scan a unique QR code on their ticket to verify identity and gain access in under a second.",
    body: `<p>QR code check-in replaces printed guest lists and manual name searches with an instant scan-to-verify process. Each attendee receives a unique QR code on their confirmation email or digital ticket, which staff scan using a mobile app to confirm identity and trigger badge printing — the whole process takes under three seconds per person.</p>
<p>The best check-in apps work offline and sync automatically when connectivity resumes, so a busy entrance hall with poor Wi-Fi never causes queues. Real-time arrival dashboards show check-in velocity live so operations teams can open additional lanes before bottlenecks form.</p>
<p>EventHex's QR check-in app runs on standard iOS and Android devices, supports walk-in registration for guests not pre-registered, and sends live arrival data to the organiser dashboard — no proprietary hardware required.</p>`,
    related: [
      "event-check-in-software",
      "badge-printing",
      "attendee-management",
      "event-ticketing-platform",
    ],
  },
  {
    term: "Attendee Management",
    slug: "attendee-management",
    short: "The end-to-end process of capturing, communicating with, and tracking every registered guest from sign-up through post-event follow-up.",
    body: `<p>Attendee management encompasses every touchpoint between an organiser and their registered guests: data capture at registration, personalised pre-event communications, session assignment, dietary and accessibility needs, on-site badge production, and post-event follow-up surveys. Centralised attendee records let teams personalise every interaction rather than sending the same message to everyone.</p>
<p>Good attendee management is the foundation of strong NPS scores and high re-registration rates. Segmenting attendees by ticket type, company size, or session track enables targeted messaging that feels relevant rather than generic, and it reduces unsubscribes and complaints significantly.</p>
<p>EventHex maintains persistent attendee profiles that grow richer with every event, enabling organisers to reward loyal attendees, identify at-risk no-shows before the event, and personalise outreach at scale without manual effort.</p>`,
    related: [
      "event-registration-software",
      "event-crm",
      "post-event-survey",
      "net-promoter-score",
    ],
  },
  {
    term: "Event Marketing Automation",
    slug: "event-marketing-automation",
    short: "Automated email, SMS, or WhatsApp sequences triggered by attendee behaviour to nurture prospects and keep registrants engaged.",
    body: `<p>Event marketing automation triggers personalised messages based on attendee behaviour — registration completion, ticket purchase, session selection, or inactivity. Instead of blasting the same message to every contact, automation sequences nurture prospects through the registration funnel and keep confirmed attendees engaged until event day with relevant content.</p>
<p>Effective automation maps to the attendee lifecycle: a save-the-date for new contacts, a registration reminder for interested-but-not-converted prospects, a session builder prompt for new registrants, and a logistics briefing three days before the event. Each message delivers value rather than simply promoting the event.</p>
<p>EventHex supports drip campaigns, reminder sequences, and post-event follow-ups that trigger automatically based on registration status, ticket type, or session selection — teams that use marketing automation consistently report higher attendance rates and lower no-show figures.</p>`,
    related: [
      "drip-campaign",
      "whatsapp-event-marketing",
      "push-notifications-events",
      "registration-confirmation-email",
    ],
  },
  {
    term: "Hybrid Event",
    slug: "hybrid-event",
    short: "An event that combines an in-person venue experience with a live-streamed virtual component so remote and on-site audiences participate simultaneously.",
    body: `<p>A hybrid event serves two audiences at once: those physically present in the venue and those joining remotely via a virtual event platform. The challenge is delivering equal value to both cohorts — virtual attendees shouldn't feel like second-class citizens watching a passive live stream while in-room delegates get the full networking and interactive experience.</p>
<p>Bridging the gap requires shared interactive features: live polling that both audiences vote on simultaneously, Q&A queues where virtual questions appear alongside in-room ones, and networking lounges where remote participants can schedule 1:1 video calls with in-person attendees. The production complexity is higher than a purely in-person or virtual event, so planning and rehearsal time should be budgeted accordingly.</p>
<p>EventHex's hybrid event suite unifies registration, check-in, the event app, and virtual platform under one dashboard, giving organisers a single view of engagement across both audiences rather than stitching together separate tools.</p>`,
    related: [
      "virtual-event-platform",
      "event-app",
      "live-polling",
      "session-management",
    ],
  },
  {
    term: "Virtual Event Platform",
    slug: "virtual-event-platform",
    short: "A browser-based environment for hosting fully online conferences, webinars, and trade shows accessible to attendees from anywhere.",
    body: `<p>A virtual event platform replicates the experience of a multi-room conference or exhibition in a browser window: attendees join a branded lobby, navigate between session tracks, visit sponsor and exhibitor booths, and network in breakout lounges — all without leaving their desk. Key features include live streaming, multi-track session rooms, live chat, networking tables, and on-demand recording libraries.</p>
<p>Unlike a basic video conferencing tool, a purpose-built virtual event platform handles thousands of concurrent attendees, offers dedicated registration and ticketing flows, and generates detailed engagement analytics — session attendance duration, poll responses, booth dwell time, and connection requests made.</p>
<p>EventHex's virtual and hybrid event suite supports large-scale online events with branded lobbies, integrated registration, and post-event analytics, without requiring attendees to download an app or install a plugin.</p>`,
    related: [
      "hybrid-event",
      "webinar-platform",
      "on-demand-recording",
      "event-analytics",
    ],
  },
  {
    term: "Event App",
    slug: "event-app",
    short: "A mobile application that serves as the attendee's digital companion throughout the event, surfacing the agenda, maps, networking, and live engagement tools.",
    body: `<p>An event app is a mobile application — or a Progressive Web App (PWA) attendees access through their phone's browser — that replaces printed programmes and paper maps. It typically surfaces the full event agenda, speaker bios, interactive venue maps, live polling, networking tools, and push notifications for last-minute announcements.</p>
<p>A well-designed event app reduces staff enquiries on the day and keeps attendees oriented throughout a complex multi-track programme. The ability to personalise a schedule — bookmarking sessions, setting reminders, and noting speaker questions — dramatically improves the attendee experience compared to a generic printed handout.</p>
<p>EventHex's event app syncs in real time with the organiser's dashboard, so schedule changes, room reassignments, and new announcements appear instantly for every attendee without reprinting anything or sending a mass email.</p>`,
    related: [
      "push-notifications-events",
      "event-agenda",
      "session-management",
      "hybrid-event",
    ],
  },
  {
    term: "Event Analytics",
    slug: "event-analytics",
    short: "The collection and analysis of event data — registrations, check-ins, session attendance, engagement — to generate actionable insights for improving future events.",
    body: `<p>Event analytics transforms raw data into decisions. Meaningful metrics include registration conversion rate (visitors who registered ÷ visitors who viewed the event page), session fill rates, peak check-in times, app engagement scores, and post-event NPS. Tracking these over multiple events reveals trends that aren't visible in a single data point.</p>
<p>Real-time analytics are equally important during the event itself: knowing that Room B is at 90% capacity before the session starts lets staff redirect attendees to an overflow space rather than turning people away. Similarly, seeing that email open rates for a particular segment are low allows the marketing team to switch to WhatsApp or push notifications for that cohort.</p>
<p>EventHex's analytics dashboard visualises all of these metrics in real time and exports data for deeper analysis in BI tools. Connecting registration, check-in, app engagement, and survey data in one view gives organisers the complete picture without manual data wrangling.</p>`,
    related: [
      "event-roi",
      "net-promoter-score",
      "post-event-survey",
      "sponsor-roi-report",
    ],
  },
  {
    term: "Net Promoter Score",
    slug: "net-promoter-score",
    short: "A single-question survey metric — 'How likely are you to recommend this event?' — that produces a score between -100 and +100 measuring attendee loyalty.",
    body: `<p>Net Promoter Score (NPS) asks one question: "How likely are you to recommend this event to a colleague or friend?" on a 0–10 scale. Respondents are classified as Promoters (9–10), Passives (7–8), or Detractors (0–6). NPS equals the percentage of Promoters minus the percentage of Detractors. For events, a score above +50 is considered excellent and correlates strongly with high re-registration rates and organic word-of-mouth growth.</p>
<p>NPS is most valuable when tracked across multiple editions of the same event, revealing whether experience improvements are translating into measurably higher satisfaction. A sudden drop in NPS for a specific session track or ticket category points to a specific area to fix, not a vague sense that "things could be better."</p>
<p>EventHex's post-event survey tool calculates NPS automatically and segments results by ticket type, session track, or attendee cohort — so organisers see not just the overall score but which parts of the programme drove it up or down.</p>`,
    related: [
      "post-event-survey",
      "event-feedback",
      "event-analytics",
      "attendee-management",
    ],
  },
  {
    term: "Event Gamification",
    slug: "event-gamification",
    short: "The application of game mechanics — points, badges, leaderboards, and challenges — to drive attendee engagement during an event.",
    body: `<p>Event gamification applies proven game design mechanics to nudge attendee behaviour in ways that benefit both the organiser and attendees. Common applications include awarding points for visiting sponsor booths, completing feedback surveys, attending sessions, connecting with fellow attendees, or answering trivia questions about speakers. Leaderboards displayed on screens throughout the venue create friendly competition and keep energy levels high throughout a long day.</p>
<p>Gamification increases engagement measurably: attendees who participate in gamification programmes visit more exhibitor booths, complete more sessions, and submit more survey responses than those who don't. The key is designing challenges that align with the organiser's goals (booth traffic, networking connections, survey completion) rather than arbitrary point-scoring.</p>
<p>EventHex's gamification module lets organisers configure custom challenges, real-time leaderboards visible in the event app, and prize redemption at a designated booth — all without requiring a separate third-party tool.</p>`,
    related: [
      "event-app",
      "event-lead-generation",
      "exhibitor-management",
      "event-feedback",
    ],
  },
  {
    term: "Live Polling",
    slug: "live-polling",
    short: "An interactive feature that lets speakers pose real-time questions to the audience and display results on screen during a session.",
    body: `<p>Live polling turns passive listeners into active participants. Speakers pose questions — multiple choice, word clouds, rating scales, or open Q&A — attendees respond on their phones, and results appear on screen in real time. The instant feedback loop lets speakers adapt their content mid-session: if 70% of the room already knows the answer to a foundational question, they can skip ahead to more advanced material.</p>
<p>For hybrid events, live polling is a particularly powerful equaliser: both in-person and virtual attendees vote simultaneously on the same poll, and the aggregated results represent the full audience rather than just the people in the room. This makes virtual participants feel genuinely part of the conversation rather than passive observers.</p>
<p>EventHex supports live polling for both in-person and virtual attendees simultaneously, with results exportable for post-session analysis — giving organisers data on which topics sparked the most engagement across the programme.</p>`,
    related: [
      "session-management",
      "event-app",
      "event-feedback",
      "hybrid-event",
    ],
  },
  {
    term: "Event Sponsorship",
    slug: "event-sponsorship",
    short: "A commercial arrangement in which a company provides funding or support to an event in exchange for brand visibility, lead access, and audience association.",
    body: `<p>Event sponsorship is a mutual value exchange: sponsors provide funding or in-kind support (AV equipment, catering, prizes) and receive brand visibility, access to the event's audience, and association with its content and reputation. Sponsorships are typically structured in tiers — Platinum, Gold, Silver — with each level offering escalating benefits such as speaking slots, branded areas, exclusive networking sessions, or attendee data access.</p>
<p>Successful sponsorship programmes align sponsor objectives with event content. A cybersecurity company sponsoring a tech conference gains credibility by association; a catering brand sponsoring a food festival gains direct product sampling opportunities. The clearer the audience-sponsor fit, the easier renewal conversations become.</p>
<p>Organisers must demonstrate clear ROI to sponsors through quantified metrics — logo impressions, booth traffic, leads captured, survey mentions. EventHex's sponsor management module tracks these automatically and produces branded sponsor ROI reports, making renewal pitches data-driven rather than anecdotal.</p>`,
    related: [
      "event-sponsorship-tiers",
      "event-sponsorship-proposal",
      "sponsor-roi-report",
      "exhibitor-management",
    ],
  },
  {
    term: "Event ROI",
    slug: "event-roi",
    short: "A measure of whether the revenue, pipeline, or business value generated by an event outweighs its total cost.",
    body: `<p>Event ROI (Return on Investment) answers the fundamental question: was the event worth it? For commercial events, the calculation is relatively straightforward — ticket revenue plus sponsor income minus total costs (venue, AV, catering, staffing, technology, marketing). For corporate or internal events, ROI is harder to quantify because the returns are often intangible: pipeline influenced, partnerships formed, employee satisfaction gains, or brand perception improvements.</p>
<p>Establishing clear ROI criteria before the event makes the post-event calculation credible. "Generate 200 qualified sales leads" or "achieve an NPS of +60" are measurable targets; "raise brand awareness" is not. Connecting event attendance data to CRM pipeline data (which deals were influenced by event participation?) is the most powerful way to demonstrate event ROI to finance and executive stakeholders.</p>
<p>EventHex's analytics tools help quantify both tangible and intangible returns by connecting registration data with post-event surveys and exportable reports that feed directly into a financial model alongside ticket and sponsor revenue data.</p>`,
    related: [
      "event-analytics",
      "event-budget-template",
      "sponsor-roi-report",
      "post-event-survey",
    ],
  },
  {
    term: "Badge Printing",
    slug: "badge-printing",
    short: "The production of attendee name badges, either pre-printed or printed on demand at the event entrance upon check-in.",
    body: `<p>Badge printing at events ranges from bulk pre-printed badges sorted into alphabetical envelopes (the old approach) to on-demand kiosk printing triggered by a QR code scan at arrival. On-demand printing eliminates badge waste for no-shows, removes the pre-event stuffing logistics bottleneck, and handles late registrations gracefully — a badge prints in seconds rather than requiring a last-minute manual insert.</p>
<p>A well-designed badge serves multiple functions beyond a name display: session track colour-coding helps venue staff direct attendees, access tier markings control entry to VIP or restricted areas, and a QR code on the badge enables exhibitor lead capture by scan throughout the event. Badge design should also be legible from a conversational distance — large name, clear company name, and minimal clutter.</p>
<p>EventHex integrates with leading badge printers to produce branded badges with the attendee's name, company, title, session track colour-coding, and a QR code — all within seconds of check-in, with no pre-event preparation required.</p>`,
    related: [
      "qr-code-check-in",
      "event-check-in-software",
      "event-registration-software",
      "attendee-management",
    ],
  },
  {
    term: "Session Management",
    slug: "session-management",
    short: "The creation, scheduling, capacity control, speaker assignment, and attendance tracking of individual sessions within a multi-track event.",
    body: `<p>Session management covers every dimension of an individual session's lifecycle: creation (title, description, format, duration), scheduling (assigning a room, time slot, and day), capacity control (registration limits per session), speaker assignment (linking speaker profiles and AV requirements), and real-time attendance tracking on the event day. In a multi-track conference with dozens of parallel sessions, managing all of this without a purpose-built tool quickly becomes error-prone.</p>
<p>Effective session management also gives attendees agency: a personalised agenda builder lets them select sessions of interest before the event, which feeds capacity data back to the organiser (high-interest sessions may need a larger room). Session-specific feedback collection after each talk provides granular data on which topics and speakers resonated most with the audience.</p>
<p>EventHex's session management module lets organisers publish a dynamic agenda, limit session registrations, track real-time attendance per room, and gather session-specific feedback — all connected to the same attendee profiles used at check-in.</p>`,
    related: [
      "speaker-management",
      "event-agenda",
      "breakout-session",
      "multi-day-event-management",
    ],
  },
  {
    term: "Speaker Management",
    slug: "speaker-management",
    short: "The process of recruiting, onboarding, briefing, and supporting speakers from call-for-papers through post-event follow-up.",
    body: `<p>Speaker management involves coordinating a significant number of people — keynotes, panellists, workshop facilitators, virtual presenters — each with different requirements, schedules, and levels of tech confidence. The process typically includes: issuing a call for papers or direct invitation, collecting bio, headshot, presentation files, AV requirements, and travel details through a self-service speaker portal, assigning sessions and confirming times, and briefing speakers on format, time limits, and audience expectations.</p>
<p>Without a dedicated system, speaker management becomes a patchwork of email threads and shared folders that inevitably loses someone's headshot or misses an AV requirement. A self-service speaker portal dramatically reduces the back-and-forth: each speaker sees only their own schedule and checklist, and the events team gets a consolidated view of outstanding items across all speakers.</p>
<p>EventHex's speaker management module gives each speaker a personalised dashboard to upload assets and view their schedule, while the organiser dashboard shows a completion status for every speaker — ensuring nothing falls through the cracks before production day.</p>`,
    related: [
      "session-management",
      "event-agenda",
      "conference-management-software",
      "ai-session-recap",
    ],
  },
  {
    term: "Event Website Builder",
    slug: "event-website-builder",
    short: "A drag-and-drop tool for creating professional, SEO-friendly event microsites without needing a developer or separate CMS.",
    body: `<p>An event website builder lets organisers create a dedicated, branded event microsite — including a homepage, agenda, speaker profiles, sponsor showcase, venue map, and registration flow — without writing a line of code. Unlike embedding a registration form in an existing corporate website, a dedicated event site provides a focused conversion environment where every element is designed to move visitors towards registration.</p>
<p>The best event website builders connect live data directly to the site: session counts update automatically as registrations come in, speaker bios pull from the speaker management system, and ticket availability reflects real-time inventory. This eliminates the maintenance burden of keeping a static HTML page up to date as event details evolve.</p>
<p>EventHex's website builder uses drag-and-drop blocks that connect directly to live data, mobile-responsive out of the box. A fast, conversion-optimised event website typically lifts registration conversion rates by 20–30% compared to generic registration forms hosted on third-party ticketing pages.</p>`,
    related: [
      "event-registration-software",
      "event-marketing-automation",
      "white-label-event-platform",
      "event-analytics",
    ],
  },
  {
    term: "Drip Campaign",
    slug: "drip-campaign",
    short: "A scheduled sequence of automated messages sent to prospects or registrants over time to build anticipation, reduce no-shows, and drive action.",
    body: `<p>A drip campaign is a pre-planned sequence of emails, WhatsApp messages, or push notifications sent at specific intervals or triggered by attendee actions. For events, the sequence typically starts weeks before the event — a save-the-date, followed by agenda teasers, speaker spotlights, and logistics briefings — and continues until the event itself, with a post-event follow-up sequence closing the loop.</p>
<p>The key distinction between a drip campaign and a newsletter blast is personalisation and timing. A drip campaign sends the right message at the right stage of the attendee's journey: someone who registered three months ago receives different content than someone who registered yesterday. Conditional branches let the sequence adapt — registered attendees skip the "why you should come" message and jump straight to logistics.</p>
<p>EventHex's drip campaign builder uses visual workflow logic so organisers can create multi-branch sequences based on ticket type, registration date, or session selections. Teams that run drip campaigns report 25–40% fewer no-shows compared to single-announcement events.</p>`,
    related: [
      "event-marketing-automation",
      "registration-confirmation-email",
      "whatsapp-event-marketing",
      "push-notifications-events",
    ],
  },
  {
    term: "Exhibitor Management",
    slug: "exhibitor-management",
    short: "The end-to-end logistics of running an exhibition floor: booth assignment, exhibitor onboarding, lead capture, and post-show ROI reporting.",
    body: `<p>Exhibitor management covers a distinct set of operational challenges from attendee management: assigning booths on a floor plan, onboarding exhibitor companies (not individuals) with branded portals for asset submission, providing lead capture tools, coordinating build and breakdown logistics, and delivering post-show ROI reports that justify re-booking. Exhibitors represent significant revenue for event organisers and deserve an experience that matches the investment they're making.</p>
<p>The most common exhibitor complaint is not knowing who visited their booth and how to follow up. Modern exhibitor management platforms solve this by giving booth staff a mobile badge scanner that captures lead details in real time, tagged with interest categories and follow-up notes the staff member adds on the spot. These leads sync to the exhibitor's CRM within minutes, not days.</p>
<p>EventHex's exhibitor management module provides branded portals, live lead scanning via the event app, and post-show lead export — making it easy for exhibitors to demonstrate ROI to their own management and giving organisers a strong reason to re-book.</p>`,
    related: [
      "event-floor-plan",
      "event-lead-generation",
      "trade-show-management",
      "sponsor-roi-report",
    ],
  },
  {
    term: "Event Check-In Software",
    slug: "event-check-in-software",
    short: "A digital system that verifies attendee identity, marks attendance in real time, and triggers badge printing — all in under three seconds per person.",
    body: `<p>Event check-in software replaces paper guest lists and manual name searches with a fast, digital verification flow. Staff open the app on a tablet or phone, scan the attendee's QR code, and the system confirms identity, marks attendance, and triggers badge printing — the whole process takes two to three seconds per person. Name-search fallback handles the inevitable "I didn't get my QR code" scenarios without creating a separate queue.</p>
<p>The best check-in systems are hardware-agnostic (any iOS or Android device) and work offline, syncing data automatically when connectivity resumes. This matters at busy venue entrances where network congestion is common, and at outdoor events where Wi-Fi coverage is unreliable.</p>
<p>EventHex's check-in app provides real-time arrival dashboards that let operations teams anticipate crowding and redeploy staff before queues form — turning the check-in gate from a potential friction point into a smooth first impression of the event.</p>`,
    related: [
      "qr-code-check-in",
      "badge-printing",
      "attendee-management",
      "event-capacity-management",
    ],
  },
  {
    term: "Post-Event Survey",
    slug: "post-event-survey",
    short: "A structured feedback form sent to attendees after an event to measure satisfaction, identify problems, and inform future planning.",
    body: `<p>A post-event survey is one of the most valuable data collection opportunities in the event lifecycle, yet it's frequently mishandled — sent too late, too long, or with questions that produce unusable data. Effective post-event surveys are short (5–10 questions maximum), sent within 24 hours of the event closing while memories are fresh, and include a mix of quantitative measures (NPS, session ratings) and qualitative prompts (what was the highlight? what would you change?).</p>
<p>The channel matters as much as the content. Email surveys for events achieve 15–25% response rates on average; WhatsApp surveys sent via EventHex's concierge feature regularly achieve 40–60% response rates because the message arrives in a channel attendees check frequently and the reply flow is frictionless.</p>
<p>EventHex automatically sends post-event surveys via email or WhatsApp and aggregates results in a dashboard that surfaces NPS, average ratings by session, and common themes in open-text responses — feeding insights directly into planning cycles, sponsor reports, and internal stakeholder presentations.</p>`,
    related: [
      "net-promoter-score",
      "event-feedback",
      "event-analytics",
      "event-crm",
    ],
  },
  {
    term: "Event CRM",
    slug: "event-crm",
    short: "A CRM system that stores unified attendee histories — registrations, sessions attended, survey responses — across multiple events over time.",
    body: `<p>An event CRM (Customer Relationship Management) system stores unified attendee histories across every event an individual has attended: registrations, sessions selected, check-in timestamps, survey responses, sponsorships purchased, and communication interactions. Unlike a general CRM that stores contacts and deals, an event CRM understands event-specific concepts like ticket types, agenda selections, and check-in status — making attendee segmentation and personalisation far more precise.</p>
<p>The compound value of an event CRM grows with each event run. A contact who has attended three annual conferences is a very different prospect than someone who attended one webinar; the event CRM makes that distinction automatically and enables the marketing team to act on it with targeted re-engagement campaigns.</p>
<p>EventHex maintains persistent attendee profiles enriched by every event, and connects via API to leading CRMs (Salesforce, HubSpot) to complete the revenue attribution loop — allowing sales teams to see which pipeline deals were influenced by event attendance.</p>`,
    related: [
      "attendee-management",
      "event-lead-generation",
      "event-marketing-automation",
      "post-event-survey",
    ],
  },
  {
    term: "AI Event Networking",
    slug: "ai-event-networking",
    short: "Machine-learning-powered matching that recommends the most relevant attendee connections before, during, and after an event.",
    body: `<p>AI event networking uses machine learning to analyse attendee profiles — job titles, industries, stated interests, attendance history, and declared goals — and recommend the most compatible connections. Instead of hoping serendipity brings the right people together in a hallway, the system sends targeted "You should meet..." prompts with one-tap meeting requests and a brief explanation of why the connection is relevant to both parties.</p>
<p>The quality of recommendations depends entirely on the quality of attendee profile data. Events that use detailed registration forms asking about goals, interests, and challenges produce far better AI match quality than those that only collect name and company. This is worth communicating to attendees: the more they share, the better their networking experience.</p>
<p>EventHex's Smart Connect feature ranks connection recommendations by compatibility score and facilitates 1:1 meeting scheduling within the event app. Events with AI networking typically see 3–5× more scheduled meetings compared to those relying solely on open networking sessions.</p>`,
    related: [
      "event-app",
      "event-lead-generation",
      "event-gamification",
      "hybrid-event",
    ],
  },
  {
    term: "Event Budget Template",
    slug: "event-budget-template",
    short: "A structured spreadsheet or digital form that captures every anticipated event cost alongside actual spend to track variance in real time.",
    body: `<p>An event budget template is the financial backbone of event planning, capturing every cost category — venue hire, AV production, catering, marketing spend, staffing, technology subscriptions, printing, and contingency reserve — alongside actual spend as invoices arrive. A well-built template calculates budget vs. actual variance for each line item in real time and provides a running total against the overall event budget ceiling.</p>
<p>The most common budgeting mistake is forgetting ancillary costs: payment processing fees, insurance, data protection compliance costs, venue Wi-Fi upgrades, or speaker expenses. Using a template from previous similar events as a starting point captures these hidden costs before they become surprises. Building a 10–15% contingency into the overall budget is standard practice.</p>
<p>EventHex's financial reporting exports actual ticket revenue, processing fees, and refund totals to feed directly into your budget model — giving organisers real-time visibility into the gap between projected and actual income without manual reconciliation.</p>`,
    related: [
      "event-roi",
      "event-ticketing-fees",
      "corporate-events",
      "event-management-software",
    ],
  },
  {
    term: "On-Demand Recording",
    slug: "on-demand-recording",
    short: "Session videos made available to attendees after a live event concludes, extending content shelf-life and turning the event into a year-round asset.",
    body: `<p>On-demand recordings extend an event's value well beyond the live dates. A three-day conference that captures every session produces 30, 50, or 100 hours of on-demand content that can be gated behind registration, sold as a standalone digital ticket, or offered as a free post-event resource for lead generation. This turns a single event investment into a content library that generates leads for months.</p>
<p>The production quality expectations for on-demand content have risen significantly: attendees now compare recordings to professionally produced YouTube content and online courses. Basic screen recordings of webcam presenters no longer suffice for high-stakes professional events. Investing in decent capture equipment and basic post-production editing (removing dead time, adding chapter markers) pays dividends in completion rates and perceived value.</p>
<p>EventHex's virtual event suite captures session streams automatically and publishes them to a gated library accessible via the attendee portal — organisers choose whether to make recordings free, require registration, or offer them as a paid upgrade, all from the same dashboard.</p>`,
    related: [
      "virtual-event-platform",
      "webinar-platform",
      "ai-session-recap",
      "session-management",
    ],
  },
  {
    term: "Event Capacity Management",
    slug: "event-capacity-management",
    short: "Ensuring the number of attendees never exceeds safe venue or session limits through real-time tracking, registration caps, and waitlist triggers.",
    body: `<p>Event capacity management is both a safety requirement and an experience quality issue. Overcrowded session rooms compromise fire safety compliance and create a negative attendee experience; under-filled rooms waste expensive venue space and create an awkward atmosphere for speakers and remaining attendees. The goal is optimising attendance density across every space simultaneously.</p>
<p>Managing capacity requires action at three stages: at registration (enforcing caps per session or ticket type and automatically triggering waitlists), before the event (monitoring registration trends and re-allocating room assignments if demand is higher or lower than expected), and on the day (using real-time check-in data to alert staff when a room approaches its limit).</p>
<p>EventHex's platform enforces capacity limits at both the registration stage and at check-in, alerting staff when a room approaches maximum capacity and managing waitlist conversions automatically — all updated in real time on the organiser's dashboard.</p>`,
    related: [
      "waitlist-management",
      "event-check-in-software",
      "session-management",
      "event-floor-plan",
    ],
  },
  {
    term: "Discount Codes for Events",
    slug: "discount-codes-events",
    short: "Promo codes that let organisers offer reduced ticket prices to specific audiences without publicly lowering the headline ticket price.",
    body: `<p>Discount codes (also called promo codes) allow organisers to offer different prices to different audiences without changing the publicly listed ticket price. Common use cases include early-registrant rewards, speaker and sponsor complimentary access, group booking discounts, media passes, alumni pricing for returning attendees, and partner cross-promotions. Each code can be configured as a percentage discount, fixed-amount reduction, or a "make it free" code for complimentary access.</p>
<p>The tracking value of discount codes is often underappreciated: when each marketing partner or channel gets a unique code, redemption data reveals which partnerships and campaigns are actually driving registrations — far more useful than last-click attribution models. This data directly informs the next event's marketing budget allocation.</p>
<p>EventHex's ticketing module lets organisers create unlimited discount codes with optional usage limits (e.g., only 50 uses), expiry dates, and single-use restrictions — preventing codes from being shared publicly and diluting the pricing strategy.</p>`,
    related: [
      "early-bird-pricing",
      "event-ticketing-platform",
      "event-marketing-automation",
      "event-ticketing-fees",
    ],
  },
  {
    term: "White-Label Event Platform",
    slug: "white-label-event-platform",
    short: "An event management platform deployed under a client's own brand — custom domain, logo, and colours — with no mention of the underlying software provider.",
    body: `<p>A white-label event platform gives agencies, associations, and enterprise organisations a complete event management stack — registration, ticketing, event app, analytics — presented entirely under their own brand identity. Attendees interact with the client's custom domain, receive emails from the client's sender address, and see the client's logo throughout, building trust and brand recognition rather than promoting a third-party tool.</p>
<p>White-label platforms are particularly valuable for agencies that manage multiple clients' events, since they can present a proprietary-feeling solution to each client while running everything on one underlying platform. They're also important for established associations and professional bodies whose members expect a consistent branded experience year after year.</p>
<p>EventHex's white-label offering provides partners with a complete event stack under their own brand identity, including branded event websites, mobile apps, email communications, and attendee-facing portals — all managed from a single agency-level dashboard.</p>`,
    related: [
      "event-website-builder",
      "event-management-software",
      "event-registration-software",
      "corporate-events",
    ],
  },
  {
    term: "Waitlist Management",
    slug: "waitlist-management",
    short: "An automated queue that holds interested attendees when capacity is full, then notifies and converts them when a spot becomes available.",
    body: `<p>Waitlist management prevents the twin problems of leaving interested attendees without a path to attendance and leaving empty seats due to cancellations. When an event or session reaches its registration cap, the waitlist automatically queues new sign-ups in order and holds their interest without requiring manual tracking. When a cancellation or capacity expansion creates availability, the next person on the waitlist receives an automated notification with a time-limited registration link.</p>
<p>A well-managed waitlist also serves as a valuable demand signal. A long waitlist for a particular session topic indicates that adding a second session date, a larger room, or an on-demand recording of that session would satisfy unmet demand. Sharing waitlist data with stakeholders demonstrates the event's commercial appeal and justifies venue upgrades for future editions.</p>
<p>EventHex processes waitlist conversions automatically — sending personalised offers with a countdown timer so spots don't sit unfilled — and gives organisers real-time visibility into waitlist length across all ticket types and sessions.</p>`,
    related: [
      "event-capacity-management",
      "event-ticketing-platform",
      "early-bird-pricing",
      "event-registration-software",
    ],
  },
  {
    term: "GDPR for Events",
    slug: "gdpr-events",
    short: "The data protection rules that govern how event organisers collect, store, and process attendee personal data under EU and UK law.",
    body: `<p>GDPR (General Data Protection Regulation) compliance for events means collecting, storing, and processing attendee personal data lawfully, transparently, and securely. The key obligations for event organisers include: obtaining clear, unbundled consent for marketing communications (separate from the event registration terms), providing a visible privacy policy and data retention period, honouring subject access requests within 30 days, and having a signed data processing agreement (DPA) with every technology vendor who touches attendee data.</p>
<p>Common compliance failures in the events industry include: using a single checkbox for both terms acceptance and marketing consent, sharing attendee lists with sponsors without explicit consent, retaining personal data indefinitely after an event concludes, and failing to update legacy attendee databases when individuals request deletion. Each of these can trigger enforcement action under GDPR, with fines of up to €20 million or 4% of global annual turnover.</p>
<p>EventHex is built with GDPR compliance in mind: data is stored in EU-compliant infrastructure, consent flags are captured separately at registration, opt-out requests are processed automatically, and DPAs are available for all enterprise clients.</p>`,
    related: [
      "event-registration-software",
      "attendee-management",
      "event-crm",
      "post-event-survey",
    ],
  },
  {
    term: "Multi-Day Event Management",
    slug: "multi-day-event-management",
    short: "The operational management of events spanning two or more days, including per-day session tracks, variable access passes, and sustained attendee engagement.",
    body: `<p>Multi-day event management introduces complexity that doesn't exist in single-day events: different session tracks on different days, variable-length access passes (some attendees attend all three days, others only the second), separate catering arrangements per day, and the challenge of maintaining attendee energy and engagement through a sustained programme. Tracking who should be admitted on which days requires a check-in system that understands multi-day ticket types, not just a binary "in/out" status.</p>
<p>Communication logistics also multiply with event length: attendees need day-specific morning briefings, programme adjustments for sessions that overran the previous day, and targeted reminders for sessions they selected in advance. A generic "here's the full programme" email doesn't serve multi-day attendees as well as a tailored daily digest.</p>
<p>EventHex supports multi-day events natively, with per-day analytics dashboards, day-pass ticket types, and agenda builders that span multiple dates — plus automated morning-of-event reminder communications segmented by each day's programme.</p>`,
    related: [
      "session-management",
      "event-agenda",
      "event-capacity-management",
      "conference-management-software",
    ],
  },
  {
    term: "Event Floor Plan",
    slug: "event-floor-plan",
    short: "An interactive or static map of the event venue showing session rooms, exhibition booths, catering stations, and navigation routes.",
    body: `<p>An event floor plan serves different audiences with different needs: attendees use it to navigate between session rooms and find exhibitor booths; exhibitors use it to assess the relative traffic value of different booth locations; operations staff use it to coordinate space allocation, access control, and emergency egress routes. A static PDF floor plan meets the minimum requirement, but an interactive digital floor plan embedded in the event app adds significant value at large or complex venues.</p>
<p>For trade show and exhibition organisers, the floor plan is also a commercial tool: it displays available and reserved booth spaces, allows exhibitors to submit booth space preferences during booking, and can highlight premium locations at higher price points. Updating booth assignments in the digital floor plan instantly updates what every attendee sees in the app — no reprinting required.</p>
<p>EventHex's floor plan tool lets organisers upload venue layouts and overlay booth numbers, session room names, and sponsor logos that update dynamically as assignments change, keeping the in-app map accurate throughout the planning process and on event day.</p>`,
    related: [
      "exhibitor-management",
      "trade-show-management",
      "event-app",
      "event-capacity-management",
    ],
  },
  {
    term: "Conference Management Software",
    slug: "conference-management-software",
    short: "Specialised event technology designed for multi-track professional and academic conferences, including abstract submission, peer review, and CPD certification.",
    body: `<p>Conference management software is a specialised category of event technology that goes beyond standard event registration and ticketing to address the unique demands of professional and academic conferences. It typically includes abstract submission and peer review workflows, session scheduling across multiple simultaneous tracks, speaker management portals, personalised attendee agenda builders, continuing professional development (CPD) credit tracking, and certificate generation.</p>
<p>Choosing a platform purpose-built for conferences (rather than adapting a generic event ticketing tool) dramatically reduces configuration overhead. A conference-specific tool understands concepts like "call for papers closing date," "double-blind review process," and "CPD points per session" natively — an organiser shouldn't need to build workarounds for these standard conference requirements.</p>
<p>EventHex's conference module covers session management, speaker portals, personalised agenda builders, and AI-generated session recaps alongside standard registration and check-in — features that are becoming table stakes for attendees at modern professional conferences.</p>`,
    related: [
      "session-management",
      "speaker-management",
      "event-management-software",
      "multi-day-event-management",
    ],
  },
  {
    term: "Trade Show Management",
    slug: "trade-show-management",
    short: "The end-to-end operations of an exhibition event: exhibitor recruitment, booth allocation, visitor registration, lead capture, and post-show ROI reporting.",
    body: `<p>Trade show management covers the simultaneous management of two distinct audiences — exhibitors and visitors — whose needs and priorities are quite different. Exhibitors need a frictionless onboarding experience (booth confirmation, portal access, lead capture tools), maximum qualified visitor traffic at their booths, and a post-show lead list they can act on immediately. Visitors need fast check-in, an easy way to navigate the floor plan and find relevant exhibitors, and enough dwell time at each booth to have a meaningful conversation.</p>
<p>The operational complexity of trade shows is high: booth build and breakdown logistics, catering for exhibitors versus visitors, electrical and data supply to booths, security zoning, and the coordination of any conference sessions running alongside the exhibition floor. Good trade show management software handles all of these as connected workflows rather than separate spreadsheets.</p>
<p>EventHex's trade show module gives exhibitors branded portals with live lead capture while visitors enjoy fast QR check-in, an interactive floor plan, and an exhibitor directory in the event app — with post-show analytics on booth traffic and connection quality for both audiences.</p>`,
    related: [
      "exhibitor-management",
      "event-floor-plan",
      "event-lead-generation",
      "badge-printing",
    ],
  },
  {
    term: "Webinar Platform",
    slug: "webinar-platform",
    short: "A platform designed for hosting live online presentations to large audiences, with tools for Q&A, live chat, polls, and on-demand replay.",
    body: `<p>A webinar platform is designed for broadcast-style online events where a small number of presenters address a large, often anonymous audience — the opposite of a video conferencing tool designed for team meetings. Key features include branded waiting rooms, registration and attendee tracking, live streaming with audience chat and Q&A moderation, live polling, and automatic recording for on-demand replay. The production quality and engagement tools available on a dedicated webinar platform significantly exceed those of a standard video call tool.</p>
<p>For B2B marketers, gated webinar registrations are one of the most cost-effective lead generation tactics available: attendees self-select by registering, the content filters for qualified prospects, and post-webinar follow-up sequences convert a portion to sales pipeline. Webinar attendance rates average 35–45% of registrants, so driving registration volume is the primary lever for maximising live attendance.</p>
<p>EventHex's virtual event suite supports webinar-style formats with registration, branded waiting rooms, live engagement tools, and on-demand replay access — giving marketing teams a complete pipeline-generating webinar capability within the same platform they use for in-person events.</p>`,
    related: [
      "virtual-event-platform",
      "on-demand-recording",
      "live-polling",
      "event-registration-software",
    ],
  },
  {
    term: "Early Bird Pricing",
    slug: "early-bird-pricing",
    short: "Discounted ticket rates offered to attendees who register before a specified deadline, rewarding early commitment and generating upfront cash flow.",
    body: `<p>Early bird pricing incentivises attendees to register sooner rather than waiting until the last minute, rewarding commitment and reducing the marketing team's reliance on last-minute urgency campaigns. It generates early cash flow for the organiser, provides a demand signal months before the event date, and creates genuine urgency without artificial scarcity — the deadline is real and transparent.</p>
<p>Multiple early bird tiers are common: a "super early bird" 6 months out offers the steepest discount, a second tier 3 months out offers a moderate discount, and standard pricing applies in the final weeks. This graduated structure maintains the perception of value at each stage while maximising registration across the full promotional window.</p>
<p>EventHex's ticketing module supports multiple pricing tiers with automatic date-based switching — when the early bird deadline passes at midnight, the price updates without any manual intervention, and organisers can set different early bird structures per ticket type or session package.</p>`,
    related: [
      "event-ticketing-platform",
      "discount-codes-events",
      "event-ticketing-fees",
      "waitlist-management",
    ],
  },
  {
    term: "WhatsApp Event Marketing",
    slug: "whatsapp-event-marketing",
    short: "Using the WhatsApp Business API to send event announcements, confirmations, reminders, and surveys directly to attendees at 90%+ open rates.",
    body: `<p>WhatsApp event marketing uses the WhatsApp Business API to deliver event communications directly to attendees' phones, achieving open rates of 90%+ — compared to 20–25% for event marketing emails. Messages can include interactive buttons ("Register Now", "Add to Calendar", "View Agenda") and rich media (images, PDF programmes, location cards), making WhatsApp both a marketing channel and a transactional one. The channel works especially well in regions where WhatsApp is the primary communication tool — the Middle East, South Asia, Latin America, and much of Africa.</p>
<p>Effective WhatsApp event marketing sequences follow the attendee journey: a save-the-date when the event is announced, a registration nudge for interested prospects, a confirmation with QR ticket upon registration, a logistics briefing the day before, and a post-event survey within hours of the event closing. Each message arrives in a personal, conversational context that email can't replicate.</p>
<p>EventHex's WhatsApp Event Concierge automates this entire journey via WhatsApp, including two-way interactions where attendees can reply to ask logistical questions. Organisers must obtain explicit WhatsApp consent at registration to comply with WhatsApp's Business Policy and relevant data protection regulations.</p>`,
    related: [
      "event-marketing-automation",
      "drip-campaign",
      "push-notifications-events",
      "registration-confirmation-email",
    ],
  },
  {
    term: "Event Feedback",
    slug: "event-feedback",
    short: "Structured input collected from attendees, speakers, and sponsors at multiple points to evaluate quality and guide continuous improvement.",
    body: `<p>Event feedback is structured input collected at multiple points in the event lifecycle — during sessions via live polling, immediately after via in-app micro-surveys, and days later via a comprehensive post-event survey. Capturing feedback at different moments yields different insights: in-session sentiment is raw and immediate; post-event reflections are more considered and may surface issues that only became apparent after the attendee returned to the office.</p>
<p>Effective feedback programmes go beyond simple star ratings. Open-ended questions ("What was the single best thing about this event?" and "What one change would have made the biggest difference?") consistently surface insights that closed-ended scales miss. Analysing text responses with sentiment analysis or AI summarisation makes open-ended feedback manageable at scale.</p>
<p>EventHex aggregates feedback from all channels — in-app micro-surveys, post-event email and WhatsApp surveys, session-specific polls — into a unified dashboard, so organisers see the complete picture without manually stitching together reports from different systems.</p>`,
    related: [
      "post-event-survey",
      "net-promoter-score",
      "live-polling",
      "event-analytics",
    ],
  },
  {
    term: "Sponsor ROI Report",
    slug: "sponsor-roi-report",
    short: "A post-event report delivered to sponsors quantifying the brand visibility, audience reach, booth traffic, and leads their investment generated.",
    body: `<p>A sponsor ROI report is a post-event document that translates a sponsor's investment into quantified business outcomes: logo impressions across all event touchpoints, booth visit counts, leads captured via badge scanning, session attendance for any branded content, app click-throughs on sponsor listings, and survey mentions by attendees. Sponsors increasingly demand data-backed reports rather than anecdotal summaries — a professional ROI report is often the deciding factor in a renewal conversation.</p>
<p>The most compelling sponsor ROI reports go beyond raw numbers to contextualise them: "Your booth received 847 visits, representing 34% of all exhibition floor traffic" is more meaningful than "847 booth visits." Including audience quality metrics — job titles of leads captured, seniority distribution, decision-making authority — adds further credibility and connects the event metrics to the sponsor's actual business goals.</p>
<p>EventHex generates branded sponsor ROI reports automatically, pulling data from the check-in system, app analytics, and exhibitor lead scans. Delivering these reports within a week of the event, while the sponsor's sales team is still following up leads, maximises their perceived value and makes renewal conversations easier.</p>`,
    related: [
      "event-sponsorship",
      "event-sponsorship-tiers",
      "exhibitor-management",
      "event-analytics",
    ],
  },
  {
    term: "Breakout Session",
    slug: "breakout-session",
    short: "A smaller, focused workshop or discussion that runs concurrently with the main programme, allowing deeper exploration of niche topics in a more intimate setting.",
    body: `<p>A breakout session is a smaller, focused group activity — workshop, panel discussion, roundtable, or hands-on demonstration — that runs concurrently with or adjacent to the main event programme in a separate room. Breakouts allow deep exploration of niche topics that wouldn't justify plenary hall time, enable interactive formats (group exercises, case study analysis) that don't work with a large audience, and give attendees agency over their own learning agenda.</p>
<p>Managing breakouts introduces operational complexity: each breakout needs its own room with appropriate AV setup, capacity limit, registration or sign-up flow (pre-event or on-the-day), and facilitator briefing. In a large conference with 30 simultaneous breakouts, tracking which sessions are full, which are under-attended, and whether attendees are in the right rooms requires a purpose-built session management tool.</p>
<p>EventHex's session management module handles parallel breakout tracks with individual capacity controls, room assignments, and session-specific feedback collection — so organisers can compare engagement quality across all tracks and use the data to design a better programme next time.</p>`,
    related: [
      "session-management",
      "event-capacity-management",
      "event-agenda",
      "conference-management-software",
    ],
  },
  {
    term: "Event Agenda",
    slug: "event-agenda",
    short: "The structured schedule of sessions, breaks, networking slots, and activities that guides attendees through an event.",
    body: `<p>An event agenda — or programme — is the primary navigation tool for attendees at any event of more than trivial complexity. A digital, interactive agenda accessible in the event app and on the event website lets attendees personalise their schedule, get notified of room changes, view session descriptions and speaker bios, and plan their networking time. A well-structured agenda also communicates the event's overall narrative: what is the logical flow from opening keynote through to closing session?</p>
<p>Publishing the agenda early — ideally as soon as speakers are confirmed — drives registrations, since many professionals need to justify attending to a manager. The ability to show specific sessions of direct professional relevance converts "nice to attend" into "I need to be there." Keeping the digital agenda synchronised with any last-minute programme changes is critical: discovering a session has moved rooms via a printed insert handed out at registration is a poor experience.</p>
<p>EventHex's agenda builder supports multi-track, multi-day events with drag-and-drop scheduling, real-time published updates, and per-session capacity indicators — so attendees always have an accurate view of what's happening and where, from months before the event to the final session on the last day.</p>`,
    related: [
      "session-management",
      "event-app",
      "breakout-session",
      "multi-day-event-management",
    ],
  },
  {
    term: "Push Notifications for Events",
    slug: "push-notifications-events",
    short: "Time-sensitive alerts delivered to attendees' lock screens via the event app — session starting soon, room change, networking match found.",
    body: `<p>Push notifications deliver time-sensitive event updates directly to attendees' lock screens via the event app, achieving open rates of 60–80% — far higher than email for in-the-moment information. The most valuable use cases are genuinely time-critical: a session starting in 10 minutes for attendees who bookmarked it, a room reassignment for an over-subscribed session, a keynote speaker now going live in the main hall, or an AI networking match available for a 1:1 meeting.</p>
<p>The key discipline with push notifications is restraint. Overuse erodes trust quickly, leading attendees to disable notifications entirely — which defeats the purpose entirely. Best practice is to reserve push notifications for actionable, time-critical information and use email or WhatsApp for informational content that can wait hours or days. Segmenting notifications by session track or ticket type prevents irrelevant alerts from reaching people who don't need them.</p>
<p>EventHex's event app supports targeted push notifications segmented by session track, ticket type, or individual attendee, giving organisers the tools to be relevant rather than noisy in their event-day communications.</p>`,
    related: [
      "event-app",
      "event-marketing-automation",
      "drip-campaign",
      "whatsapp-event-marketing",
    ],
  },
  {
    term: "Event Lead Generation",
    slug: "event-lead-generation",
    short: "The systematic capture of prospect contact details and buying intent signals during an event, primarily for exhibitors, sponsors, and organisers.",
    body: `<p>Event lead generation is the process of capturing prospect contact details and interest signals during an event, converting attendance into actionable sales pipeline. For exhibitors, lead generation happens at the booth — staff scan attendee badges and immediately tag each lead with product interest categories, conversation notes, and follow-up actions. For the organising company, lead generation happens throughout the event via session registrations, content downloads, and networking interactions that indicate buyer intent.</p>
<p>Modern event lead capture goes well beyond exchanging business cards or collecting badge scans into a spreadsheet. The most effective systems capture the context of each interaction: which demo did the prospect see, what pain points did they describe, what is the urgency of their purchasing decision? This context makes post-event follow-up more personalised and conversion rates significantly higher.</p>
<p>EventHex's exhibitor lead capture module lets booth staff scan attendee badges and immediately tag leads with interest categories and follow-up actions, syncing to the exhibitor's CRM within minutes. Events remain one of the highest-converting B2B lead sources when lead capture is integrated seamlessly into the attendee journey.</p>`,
    related: [
      "exhibitor-management",
      "event-crm",
      "ai-event-networking",
      "trade-show-management",
    ],
  },
  {
    term: "AI Session Recap",
    slug: "ai-session-recap",
    short: "An automatically generated summary of a recorded session — key points, action items, Q&A highlights — produced within minutes of the session ending.",
    body: `<p>An AI session recap is an automatically generated summary produced from a session transcript or recording, capturing the key points discussed, notable quotes, action items raised, and audience Q&A highlights — delivered within minutes of the session ending rather than days or weeks later. This allows attendees who couldn't attend a session to get the essential content immediately, and gives those who did attend a structured reference they can share with colleagues who weren't at the event.</p>
<p>The quality of AI recaps depends on transcript quality, which in turn depends on audio clarity. Investing in good microphone setup for sessions significantly improves both transcript accuracy and the resulting AI summaries. High-quality recaps can also be repurposed as blog posts, LinkedIn articles, or email newsletter content — turning each session into multiple pieces of value for the organiser's content marketing programme.</p>
<p>EventHex's AI Session Recap feature processes session transcripts using large language models and publishes formatted recaps to the attendee portal automatically — turning every session recording into a searchable, shareable knowledge asset without requiring speakers or organisers to write a single word.</p>`,
    related: [
      "on-demand-recording",
      "session-management",
      "virtual-event-platform",
      "event-analytics",
    ],
  },
  {
    term: "Event Certificate",
    slug: "event-certificate",
    short: "A digital or printed document issued to attendees confirming participation in an event or completion of a training programme, often required for CPD accreditation.",
    body: `<p>Event certificates are official documents confirming that an individual attended an event, completed a workshop, or achieved a specific qualification — important for Continuing Professional Development (CPD) programmes, academic conferences, professional training courses, and any event where attendance needs to be documented for career advancement or regulatory compliance. The certificate needs to be branded, personalised, and tamper-resistant to carry credibility with third parties.</p>
<p>The manual approach to certificate generation — designing a template, mail-merging names, converting to PDFs, and emailing individually — is time-consuming and error-prone at scale. An automated certificate system triggered by check-in confirmation or session completion eliminates this overhead entirely and delivers certificates to attendees within minutes of qualifying, while the event experience is still fresh.</p>
<p>EventHex's certificate module generates branded, personalised PDF certificates automatically when an attendee completes check-in or fulfils specific conditions (e.g., attended 80% of sessions). Certificates can include QR codes for third-party verification, eliminating the need for manual authenticity checks.</p>`,
    related: [
      "attendee-management",
      "event-check-in-software",
      "conference-management-software",
      "badge-printing",
    ],
  },
  {
    term: "Event Volunteer Management",
    slug: "event-volunteer-management",
    short: "The recruitment, scheduling, role assignment, and communication with unpaid staff who support event operations.",
    body: `<p>Event volunteer management covers the full lifecycle of working with an unpaid workforce: recruiting volunteers (often through event registration forms or a separate volunteer portal), assigning them to specific roles and shifts (registration desk, session room management, information points, load-in/load-out), briefing them on their responsibilities and escalation paths, and communicating shift times and logistics separately from the general attendee communications. Volunteers need different access permissions than regular attendees: early access, staff-only area entry, and sometimes multi-day shifts.</p>
<p>The retention of good volunteers across multiple events is one of the most undervalued assets in the events industry. Volunteers who feel well-briefed, appreciated, and professionally managed come back next time — and bring friends. Automated thank-you communications sent promptly after the event, combined with a personalised volunteer certificate, significantly improve retention rates compared to an ad hoc thank-you email sent weeks later.</p>
<p>EventHex supports volunteer badge types with appropriate access permissions, enables volunteer coordinators to send separate communications to the volunteer cohort, and tracks volunteer hours and assignments across the event — making volunteer management as structured as any other aspect of the operations.</p>`,
    related: [
      "attendee-management",
      "event-check-in-software",
      "badge-printing",
      "event-management-software",
    ],
  },
  {
    term: "Peer-to-Peer Fundraising Event",
    slug: "peer-to-peer-fundraising-event",
    short: "An event format where individual participants create personal fundraising pages and solicit donations from their own networks on behalf of the organising charity.",
    body: `<p>A peer-to-peer (P2P) fundraising event empowers individual participants — runners in a charity marathon, teams in a quiz night, walkers in a sponsored hike — to create personal fundraising pages and solicit donations from their own social and professional networks. This dramatically amplifies reach beyond the charity's owned audience: each participant becomes a fundraising ambassador, and their personal network sees appeals they wouldn't encounter through the charity's direct channels.</p>
<p>The operational challenge of a P2P fundraising event is the interplay between event management (registrations, check-in, session management if there are presentations or awards) and fundraising management (individual page creation, donation tracking, leaderboards, and thank-you communications to both donors and participants). These two systems need to be connected, not separate silos that require manual reconciliation.</p>
<p>EventHex's fundraising event capabilities include 0% commission ticketing, donation collection at checkout, and impact reporting dashboards for donors and participants — ensuring that the technology doesn't eat into the funds being raised for the charitable cause.</p>`,
    related: [
      "event-ticketing-platform",
      "event-gamification",
      "event-analytics",
      "event-ticketing-fees",
    ],
  },
  {
    term: "Event Sponsorship Proposal",
    slug: "event-sponsorship-proposal",
    short: "A formal document presented to potential sponsors outlining audience demographics, branding opportunities, and the specific benefits available at each sponsorship tier.",
    body: `<p>An event sponsorship proposal is the commercial document that converts a sponsor's interest into a signed agreement. A compelling proposal starts with the sponsor's perspective — what business objective does this event help them achieve? — rather than a generic list of logo placement opportunities. The proposal should demonstrate a clear audience-sponsor fit: why are the attendees' job titles, industries, and purchasing responsibilities a match for the sponsor's target customer profile?</p>
<p>Strong proposals include data from previous editions: attendee seniority breakdown, industry distribution, company size profile, geographic spread, and past sponsor ROI metrics. This transforms the proposal from a speculative pitch into a data-backed investment case. First-time events without historical data can use registration data from the early sign-up phase and comparable industry event benchmarks instead.</p>
<p>EventHex's sponsor management tools help organisers compile audience insights from registration data to build credible, data-backed proposals — and track which proposals are outstanding, under negotiation, or closed, providing a clear view of sponsorship revenue pipeline ahead of the event.</p>`,
    related: [
      "event-sponsorship",
      "event-sponsorship-tiers",
      "sponsor-roi-report",
      "event-analytics",
    ],
  },
  {
    term: "Event Ticketing Fees",
    slug: "event-ticketing-fees",
    short: "The charges applied by a ticketing platform for processing registrations and payments, typically a percentage of the ticket price plus a fixed per-ticket charge.",
    body: `<p>Event ticketing fees are the transaction costs charged by a ticketing platform for hosting registrations and processing payments. The most common structure is a percentage of ticket price plus a fixed per-transaction fee (for example, 2.5% + $0.99 per ticket). On top of the platform fee, payment processor fees (Stripe, PayPal) apply separately, typically adding another 1.4–2.9% + a small fixed charge depending on card type and country.</p>
<p>Organising teams must make two decisions: whether to absorb fees into the ticket price (i.e., receive less per ticket) or pass them on to attendees as a transparent service charge; and whether the platform's fee model is competitive relative to the value it provides. Zero-platform-fee models are attractive but often have trade-offs in support levels, feature depth, or payout timing.</p>
<p>EventHex offers competitive fee structures including 0% platform fees on certain plans, with only payment processor costs applied. Understanding the full fee model — including payout timing, refund policies, and any minimum monthly charges — is essential before committing to a ticketing platform for a high-revenue event.</p>`,
    related: [
      "event-ticketing-platform",
      "early-bird-pricing",
      "event-budget-template",
      "discount-codes-events",
    ],
  },
  {
    term: "Corporate Events",
    slug: "corporate-events",
    short: "Internally or externally focused events organised by a company — town halls, product launches, sales kickoffs, partner summits, and team-building activities.",
    body: `<p>Corporate events encompass a wide range of gathering types: internal events (town halls, all-hands meetings, sales kickoffs, team-building days, training workshops) and external events (product launches, partner summits, client appreciation dinners, user conferences). Despite their variety, they share common requirements: brand consistency across all touchpoints, alignment with specific business objectives, and the ability to measure outcomes that connect to business results rather than just attendance numbers.</p>
<p>Corporate events increasingly need to serve hybrid audiences — some attendees are in the room, others are joining from other offices or home — which requires platforms built for simultaneous in-person and virtual delivery rather than two separate events stitched together. Invitation-only registration flows, gated content, and CRM integration for attendee tracking are also standard expectations at the corporate event level.</p>
<p>EventHex's corporate event module supports private invitation-only registration flows, branded portals, executive-level reporting dashboards, and CRM integration for attributing event participation to business outcomes like pipeline influence and employee engagement scores.</p>`,
    related: [
      "white-label-event-platform",
      "event-analytics",
      "hybrid-event",
      "event-budget-template",
    ],
  },
  {
    term: "Event Sponsorship Tiers",
    slug: "event-sponsorship-tiers",
    short: "Structured levels of sponsorship (Platinum, Gold, Silver, Bronze) that define escalating packages of benefits and corresponding investment levels.",
    body: `<p>Event sponsorship tiers are the structured packages that allow sponsors to self-select the commitment level that matches their marketing goals and budget. A well-designed tier structure has a clear value ladder: each step up in tier should deliver meaningfully better outcomes for the sponsor, not just more logo placements. Platinum might offer a keynote speaking slot, exclusive networking session, and the largest booth in a premium location; Gold might offer a standard speaking slot, a mid-size booth, and a branded push notification; Silver might offer a booth and logo placement only.</p>
<p>The number of tiers matters: too few tiers (just two options) limits revenue potential; too many tiers (six or seven) creates confusion and slows decision-making. Three to four tiers is the most common and effective structure. The naming convention matters less than the clarity of what each tier delivers — "Presenting Sponsor" and "Supporting Sponsor" can work as well as "Platinum" and "Gold" if the benefits are well-defined.</p>
<p>EventHex's sponsor management tools let organisers configure tier benefits, track which sponsors are assigned to which tier, generate tier-specific ROI reports, and build a renewals pipeline sorted by current tier and renewal likelihood.</p>`,
    related: [
      "event-sponsorship",
      "event-sponsorship-proposal",
      "sponsor-roi-report",
      "exhibitor-management",
    ],
  },
  {
    term: "Registration Confirmation Email",
    slug: "registration-confirmation-email",
    short: "The first transactional email an attendee receives after registering, containing their ticket, key event details, and next steps.",
    body: `<p>The registration confirmation email is the most important transactional message in the event marketing funnel — it arrives at the moment of highest attendee engagement and typically achieves open rates of 70–90%. It must contain everything the attendee needs: the event date, time, and location or virtual joining link; a unique QR code ticket; one-click calendar add links; and a clear point of contact for questions. Missing any of these elements forces attendees to contact support unnecessarily.</p>
<p>Since the confirmation email is near-universally opened, it is also the ideal moment for an optional upsell (add a workshop, upgrade to VIP access) or a referral prompt ("Know someone who should come? Share this link"). These additions should be secondary to the confirmation information — not so prominent that they overshadow the essentials — but well-timed upsells in confirmation emails consistently convert at higher rates than standalone promotional emails sent later.</p>
<p>EventHex sends fully branded, customisable confirmation emails instantly upon registration, with conditional content blocks that vary by ticket type or session selection — ensuring every attendee receives a confirmation that's relevant to their specific registration rather than a generic catch-all message.</p>`,
    related: [
      "event-registration-software",
      "event-marketing-automation",
      "drip-campaign",
      "attendee-management",
    ],
  },
];

/** @deprecated Use `glossary` instead */
export const glossaryEntries = glossary;
