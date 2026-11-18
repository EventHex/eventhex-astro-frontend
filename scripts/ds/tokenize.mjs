#!/usr/bin/env node
// Replaces raw hex colours in CSS contexts (<style> blocks, style="" attributes, .css files)
// with design-system tokens from src/styles/ds.css. Brand colours map exactly; neutral greys
// map to the nearest neutral token; other colours are listed for a manual decision.
// SVG artwork attributes (fill/stroke/stop-color) are left alone.
// Usage: node scripts/ds/tokenize.mjs <file...> [--write]
import { readFileSync, writeFileSync } from "node:fs";

const write = process.argv.includes("--write");
const files = process.argv.slice(2).filter((a) => !a.startsWith("--"));

const exact = {
  "375DFB": "--ds-blue", "315DFF": "--ds-blue", "3B5BFF": "--ds-blue", "2563EB": "--ds-blue",
  "1C46D4": "--ds-blue-hover", "2B4ED4": "--ds-blue-hover", "2741C7": "--ds-blue-hover",
  "5B47EE": "--ds-indigo", "9F81FF": "--ds-violet", "AFA3FF": "--ds-violet-soft", "BAA0FF": "--ds-violet-soft",
  "CBBAFC": "--ds-violet-soft", "ABFFFF": "--ds-cyan",
  "E5EBFF": "--ds-surface-tint", "EEF2FF": "--ds-surface-tint", "EFF4FF": "--ds-surface-tint",
  "F5F8FF": "--ds-surface", "F8FAFF": "--ds-surface", "F7F8FC": "--ds-surface",
  "0D0A2C": "--ds-night", "0B1020": "--ds-night", "14151D": "--ds-night-2", "333864": "--ds-night-card",
  "25D366": "--ds-whatsapp",
  "12B76A": "--ds-success", "10B981": "--ds-success", "22C55E": "--ds-success", "16A34A": "--ds-success", "067647": "--ds-success",
  "ECFDF3": "--ds-success-soft", "DCFCE7": "--ds-success-soft",
  "F79009": "--ds-warning", "F59E0B": "--ds-warning", "FDB022": "--ds-warning", "B54708": "--ds-warning",
  "FFFAEB": "--ds-warning-soft", "FEF3C7": "--ds-warning-soft", "FFF4E5": "--ds-warning-soft",
  "F04438": "--ds-danger", "EF4444": "--ds-danger", "F97066": "--ds-danger", "B42318": "--ds-danger",
  "FEF3F2": "--ds-danger-soft", "FEE2E2": "--ds-danger-soft",
};
// neutral scale, light to dark (value used for nearest-match)
const neutrals = [
  ["FFFFFF", "--ds-white"], ["F5F8FF", "--ds-surface"], ["F0F2F5", "--ds-surface-tab"], ["E8ECF2", "--ds-line"],
  ["E4E7EC", "--ds-line-strong"], ["868C98", "--ds-label"], ["667085", "--ds-muted"], ["525866", "--ds-body"],
  ["475467", "--ds-sub"], ["343B46", "--ds-ink-2"], ["22272F", "--ds-ink"], ["14151D", "--ds-night-2"], ["000000", "--ds-black"],
];
const rgb = (h) => [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
const norm = (h) => (h.length === 3 ? h.split("").map((c) => c + c).join("") : h).toUpperCase();
const isNeutral = ([r, g, b]) => Math.max(r, g, b) - Math.min(r, g, b) <= 28;
const lum = ([r, g, b]) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

function tokenFor(hex) {
  const h = norm(hex);
  if (exact[h]) return exact[h];
  const c = rgb(h);
  if (!isNeutral(c)) return null;
  let best = null, d = Infinity;
  for (const [nh, tok] of neutrals) { const dd = Math.abs(lum(rgb(nh)) - lum(c)); if (dd < d) { d = dd; best = tok; } }
  return best;
}

const HEX = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;
const unresolved = new Map();
const swapCss = (css) => css.replace(HEX, (m, h) => {
  const tok = tokenFor(h);
  if (!tok) { unresolved.set(m, (unresolved.get(m) ?? 0) + 1); return m; }
  return `var(${tok})`;
});

let total = 0;
for (const file of files) {
  const src = readFileSync(file, "utf8");
  let out;
  if (file.endsWith(".css")) out = swapCss(src);
  else out = src
    .replace(/(<style\b[^>]*>)([\s\S]*?)(<\/style>)/g, (_, a, css, b) => a + swapCss(css) + b)
    .replace(/(\sstyle=")([^"]*)(")/g, (_, a, css, b) => a + swapCss(css) + b)
    .replace(/(\sstyle=')([^']*)(')/g, (_, a, css, b) => a + swapCss(css) + b);
  const before = (src.match(HEX) ?? []).length, after = (out.match(HEX) ?? []).length;
  total += before - after;
  console.log(`${String(before - after).padStart(5)} replaced, ${String(after).padStart(4)} left  ${file}`);
  if (write && out !== src) writeFileSync(file, out);
}
if (unresolved.size) {
  console.log("\nNot mapped (decide by hand or add a token):");
  [...unresolved.entries()].sort((a, b) => b[1] - a[1]).forEach(([h, n]) => console.log(`  ${h} x${n}`));
}
console.log(`\n${total} replaced${write ? "" : " (dry run, add --write)"}`);
