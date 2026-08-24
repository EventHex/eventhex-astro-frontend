import assert from "node:assert/strict";
import test from "node:test";

import {
  isDemoSlotBookable,
  requiresDemoApproval,
} from "../src/lib/demo-booking-policy.ts";

test("requires approval at the 23:30 IST boundary", () => {
  assert.equal(requiresDemoApproval("2026-01-01T18:00:00.000Z"), true);
});

test("does not require approval immediately before 23:30 IST", () => {
  assert.equal(requiresDemoApproval("2026-01-01T17:59:00.000Z"), false);
});

test("requires approval immediately before 08:30 IST", () => {
  assert.equal(requiresDemoApproval("2026-01-02T02:59:00.000Z"), true);
});

test("does not require approval at the 08:30 IST boundary", () => {
  assert.equal(requiresDemoApproval("2026-01-02T03:00:00.000Z"), false);
});

test("rejects an invalid start time", () => {
  assert.throws(() => requiresDemoApproval("not-a-date"), /Invalid demo start time/);
});

const MIDDAY_IST = "2026-01-01T06:30:00.000Z";

test("keeps the 22:30 IST same-day boundary visible", () => {
  assert.equal(isDemoSlotBookable("2026-01-01T17:00:00.000Z", MIDDAY_IST), true);
});

test("hides same-day slots after 22:30 IST", () => {
  assert.equal(isDemoSlotBookable("2026-01-01T17:30:00.000Z", MIDDAY_IST), false);
});

test("hides next-day slots before 08:30 IST", () => {
  assert.equal(isDemoSlotBookable("2026-01-02T02:30:00.000Z", MIDDAY_IST), false);
});

test("shows the next-day 08:30 IST boundary", () => {
  assert.equal(isDemoSlotBookable("2026-01-02T03:00:00.000Z", MIDDAY_IST), true);
});

test("shows overnight slots beyond the nearest blackout", () => {
  assert.equal(isDemoSlotBookable("2026-01-02T19:00:00.000Z", MIDDAY_IST), true);
});

test("hides the remainder of an overnight blackout when now is before 08:30 IST", () => {
  const overnightNow = "2026-01-01T20:30:00.000Z"; // 02:00 IST on Jan 2
  assert.equal(isDemoSlotBookable("2026-01-02T02:00:00.000Z", overnightNow), false);
  assert.equal(isDemoSlotBookable("2026-01-02T03:00:00.000Z", overnightNow), true);
});

test("closes every Sunday in the host timezone", () => {
  assert.equal(isDemoSlotBookable("2026-01-04T06:30:00.000Z", MIDDAY_IST), false);
});

test("rejects past and invalid visibility inputs", () => {
  assert.equal(isDemoSlotBookable("2026-01-01T06:00:00.000Z", MIDDAY_IST), false);
  assert.throws(() => isDemoSlotBookable("not-a-date", MIDDAY_IST), /Invalid demo start time/);
  assert.throws(() => isDemoSlotBookable("2026-01-02T03:00:00.000Z", "not-a-date"), /Invalid current time/);
});
