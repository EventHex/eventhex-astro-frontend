export const faqs = [
  {
    question: "Can EventHex collect custom abstract fields and files?",
    answer: "The call connects to the event form flow, so organizers can configure submission fields and file collection around the programme requirements.",
  },
  {
    question: "Can reviewers work in a separate portal?",
    answer: "Yes. Reviewers receive scoped access to their assigned submissions and can save drafts, submit rubric scores, comments, recommendations, and confidence.",
  },
  {
    question: "Does EventHex support blind review?",
    answer: "A blind-review setting exists in the abstract review configuration. Confirm exactly which author fields should be hidden and test the reviewer experience before opening the call.",
  },
  {
    question: "Can reviewers be assigned automatically?",
    answer: "The API includes automatic assignment as well as bulk assignment. Review the event's reviewer pool, minimums, conflicts, and workload rules before relying on the result.",
  },
  {
    question: "Can authors revise a submission?",
    answer: "An eligible author can upload a revision after a revision-requested or conditional-accept state; the revised submission returns to the review queue.",
  },
  {
    question: "Can accepted abstracts become sessions?",
    answer: "Yes. The organizer can push accepted or conditionally accepted submissions into session records, then finish timing, stage, track, and lineup in Session Management.",
  },
] as const;
