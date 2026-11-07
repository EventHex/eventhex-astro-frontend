import assert from "node:assert/strict";
import test from "node:test";
import { splitHighlight } from "../src/lib/ds/highlight.ts";

test("highlight keeps the heading text exactly", () => {
  const text = "Online Event Registration: One Form or a Full Checkout, Your Call";
  const parts = splitHighlight(text, "One Form or a Full Checkout");
  assert.ok(parts);
  assert.equal(parts.before + parts.highlight + parts.after, text);
  assert.equal(parts.highlight, "One Form or a Full Checkout");
});

test("missing or empty phrase falls back to the plain heading", () => {
  assert.equal(splitHighlight("Control who gets in", "who let in"), null);
  assert.equal(splitHighlight("Control who gets in"), null);
  assert.equal(splitHighlight("Control who gets in", ""), null);
});
