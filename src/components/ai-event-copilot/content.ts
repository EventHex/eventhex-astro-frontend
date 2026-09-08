export const copilotFaqs = [
  {
    q: "What is EventHex Copilot?",
    a: "EventHex Copilot is an organizer-facing AI assistant for supported questions and actions inside an EventHex event. It combines access to event workflows with conversational input and structured results.",
  },
  {
    q: "How does Copilot work across different event jobs?",
    a: "One unified Copilot can work across analytics, agenda and speakers, tickets, attendees, orders, exhibitors, forms, polls, coupons, event settings, and event copy through supported tools.",
  },
  {
    q: "Does Copilot only answer questions?",
    a: "No. It can return event answers and structured results, prepare drafts, and carry out supported organizer actions such as creating a session, ticket, coupon, form, or live poll.",
  },
  {
    q: "Does Copilot change event data automatically?",
    a: "The control depends on the action. Read-only questions return answers; fully specified supported create requests can proceed; incomplete requests can produce a draft; destructive actions, event-detail updates, and selected event-wide settings require explicit confirmation.",
  },
  {
    q: "What kinds of results can Copilot show?",
    a: "Depending on the request, Copilot can return plain-language answers, metric cards, charts, tables, event lists, checklists, drafts, confirmation cards, success states, and private attendee-export downloads.",
  },
  {
    q: "Can Copilot remember an earlier conversation?",
    a: "The organizer experience supports event-scoped conversation threads and history. You can return to a thread and continue related work for that event.",
  },
  {
    q: "Can I speak to Copilot instead of typing?",
    a: "The organizer experience includes voice-note transcription as an input option. You can also type a request and mention a supported event record.",
  },
  {
    q: "Is this the same as the attendee EventHex AI chatbot?",
    a: "No. This page covers the organizer Copilot for managing event work. The attendee-facing EventHex AI experience in the mobile app is a separate product surface.",
  },
  {
    q: "Is Copilot available in every EventHex workspace?",
    a: "Availability, supported actions, usage limits, and plan requirements can vary by EventHex setup. Book a demo to confirm the right configuration for your team and events.",
  },
] as const;
