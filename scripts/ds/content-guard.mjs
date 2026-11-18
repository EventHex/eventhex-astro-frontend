#!/usr/bin/env node
// Content guard for the design-system migration.
// Compares the visible text, headings, links and image alts of a page between a
// baseline (live site by default) and a local build, so a restyle never changes copy.
// Usage: node scripts/ds/content-guard.mjs /event-registration/ [--base https://eventhex.ai] [--local http://localhost:4321] [--allow file]
const args = process.argv.slice(2);
const path = args.find((a) => a.startsWith("/")) ?? "/";
const opt = (name, fallback) => { const i = args.indexOf(name); return i > -1 ? args[i + 1] : fallback; };
const base = opt("--base", "https://eventhex.ai");
const local = opt("--local", "http://localhost:4321");

const strip = (html) => html
  .replace(/<!--[\s\S]*?-->/g, " ")
  .replace(/<(script|style|svg|noscript|template)\b[\s\S]*?<\/\1>/gi, " ");

function extract(html) {
  const main = strip(html);
  const body = main.replace(/^[\s\S]*?<body[^>]*>/i, "").replace(/<\/body>[\s\S]*$/i, "");
  // site chrome (header, footer, widgets) is checked separately
  const content = body.replace(/<header\b[\s\S]*?<\/header>/gi, " ").replace(/<footer\b[\s\S]*?<\/footer>/gi, " ");
  const decode = (t) => t.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&#39;|&#x27;|&rsquo;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&mdash;/g, "—").replace(/&middot;/g, "·");
  const text = decode(content.replace(/<br\s*\/?>/gi, " ").replace(/<\/(p|h[1-6]|li|div|section|article|summary|figcaption|td|th|button|label|nav|ol|ul)>/gi, "\n").replace(/<\/?(span|a|b|strong|em|i|small)\b[^>]*>/gi, "").replace(/<[^>]+>/g, " "))
    .split("\n").map((l) => l.replace(/\s+/g, " ").trim()).filter(Boolean);
  const words = text.join(" ").replace(/\s+/g, " ");
  const headings = [...content.matchAll(/<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/gi)].map((m) => `${m[1]}: ${decode(m[2].replace(/<br\s*\/?>/gi, " ").replace(/<\/?(span|a|b|strong|em|i|small)\b[^>]*>/gi, "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim()}`);
  const links = [...content.matchAll(/<a\b[^>]*href="([^"]+)"/gi)].map((m) => m[1]).sort();
  const alts = [...content.matchAll(/<img\b[^>]*alt="([^"]*)"/gi)].map((m) => decode(m[1])).sort();
  return { words, headings, links, alts };
}

async function get(url) {
  const res = await fetch(url, { headers: { "user-agent": "eventhex-content-guard" } });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return extract(await res.text());
}

const diffList = (a, b) => ({ missing: a.filter((x) => !b.includes(x)), added: b.filter((x) => !a.includes(x)) });

const [before, after] = await Promise.all([get(base + path), get(local + path)]);
let failed = false;
const report = (label, d) => {
  if (!d.missing.length && !d.added.length) { console.log(`ok   ${label}`); return; }
  failed = true;
  console.log(`DIFF ${label}`);
  d.missing.forEach((x) => console.log(`  - ${x}`));
  d.added.forEach((x) => console.log(`  + ${x}`));
};
report("headings", diffList(before.headings, after.headings));
report("links", diffList(before.links, after.links));
report("image alts", diffList(before.alts, after.alts));
if (before.words === after.words) console.log("ok   body text");
else {
  failed = true;
  const a = before.words.split(" "), b = after.words.split(" ");
  let i = 0; while (i < a.length && a[i] === b[i]) i++;
  console.log(`DIFF body text (first change at word ${i}):`);
  console.log(`  live : …${a.slice(Math.max(0, i - 8), i + 16).join(" ")}`);
  console.log(`  local: …${b.slice(Math.max(0, i - 8), i + 16).join(" ")}`);
}
process.exit(failed ? 1 : 0);
