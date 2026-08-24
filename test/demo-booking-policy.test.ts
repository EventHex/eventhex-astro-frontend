import assert from "node:assert/strict";
import test from "node:test";

import { requiresDemoApproval } from "../src/lib/demo-booking-policy.ts";

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
