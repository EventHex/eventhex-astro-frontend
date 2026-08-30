import assert from "node:assert/strict";
import test from "node:test";

import { buildCalBookingFieldsResponses } from "../src/lib/demo-booking-fields.ts";

test("sends only attendee-visible fields to Cal.com", () => {
  assert.deepEqual(
    buildCalBookingFieldsResponses({
      company: "Acme Events",
      role: "Producer",
      notes: "We need help with registration.",
    }),
    {
      company: "Acme Events",
      role: "Producer",
      notes: "We need help with registration.",
    },
  );
});

test("does not create a Cal.com notes field when the attendee left it blank", () => {
  assert.deepEqual(buildCalBookingFieldsResponses({ company: "Acme Events" }), {
    company: "Acme Events",
  });
});
