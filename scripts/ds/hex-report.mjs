#!/usr/bin/env node
// Lists raw hex colours left in pages and components, so the migration to the
// design system (src/styles/ds.css) can be tracked page by page.
// Usage: node scripts/ds/hex-report.mjs [path-prefix]
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["src/pages", "src/components", "src/layouts"];
const prefix = process.argv[2] ?? "";
const skip = new Set(["src/styles/ds.css"]);
const rows = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(astro|css|ts)$/.test(name) && !skip.has(p) && p.startsWith(prefix)) {
      const n = (readFileSync(p, "utf8").match(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/g) ?? []).length;
      if (n) rows.push([n, p]);
    }
  }
};
roots.forEach(walk);
rows.sort((a, b) => b[0] - a[0]);
rows.forEach(([n, p]) => console.log(String(n).padStart(5), p));
console.log(`\n${rows.reduce((s, [n]) => s + n, 0)} raw hex values in ${rows.length} files`);
