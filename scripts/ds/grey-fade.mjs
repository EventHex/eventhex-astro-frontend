#!/usr/bin/env node
// Replaces the legacy "dark-to-grey fade" heading text gradient (ink/night -> label grey)
// with solid ink, so only the design-system key-phrase gradient (.ds-hl) remains.
// Usage: node scripts/ds/grey-fade.mjs <file...>
import { readFileSync, writeFileSync } from "node:fs";
const FADE = /linear-gradient\(\s*(?:to right|\d+(?:\.\d+)?deg)\s*,\s*var\(--(?:heading-dark|aip-ink|ds-night-2|ds-ink|ds-sub|ds-black|ds-white)(?:,\s*var\(--ds-[a-z0-9-]+\))?\)[^;{}]*?var\(--ds-label\)[^;{}]*?\)/g;
const SOLID = "linear-gradient(90deg, var(--ds-ink), var(--ds-ink))";
const SOLID_LIGHT = "linear-gradient(90deg, var(--ds-on-night), var(--ds-on-night))";
let total = 0;
for (const f of process.argv.slice(2)) {
  const s = readFileSync(f, "utf8");
  let n = 0;
  const out = s.replace(FADE, (m) => { n++; return /var\(--ds-white\)/.test(m.slice(0, 40)) ? SOLID_LIGHT : SOLID; });
  if (n) { writeFileSync(f, out); console.log(String(n).padStart(3), f); total += n; }
}
console.log(total, "replaced");
