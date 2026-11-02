---
name: eventhex-image-seo
description: Optimize and SEO-prepare images added to the EventHex Astro site. Use whenever an image (screenshot, hero, illustration) is added or changed on a page - resizes, compresses to WebP, names the file, writes alt text, sets width/height, loading and fetchpriority.
---

# EventHex image SEO

Run this for every image added to `src/pages/**` or components.

## 1. File
- Location: `public/feature-images/<page-or-feature>/` (existing convention).
- Name: lowercase kebab-case describing the content (`discount-coupons.webp`), never `Screenshot 2026...` or `image1`.
- Keep the original out of `public/` (scratchpad).
- Run `scripts/optimize_image.py`:
  `python3 -I .claude/skills/eventhex-image-seo/scripts/optimize_image.py <src> <dest-dir> [--name kebab-name] [--max-width 1400] [--quality 82]`
  It resizes to max width (no upscaling), writes WebP, strips metadata, and prints `src`, `width`, `height`, bytes. SVG: leave as is, run `npx svgo` if available.
- Budget: hero ≤ 150 KB, in-page screenshots ≤ 100 KB. Re-run with lower `--quality` (min 70) or smaller `--max-width` if over.
- Screenshots: capture at 2x, crop to the component, then downscale; text must stay legible at displayed size.

## 2. Alt text
- Describe what the image shows and why it matters for the page topic, 6-16 words, specific: "EventHex discount coupons list with usage limits".
- Include the product name or primary keyword once, naturally. No "image of", no keyword stuffing, no repeating the adjacent heading.
- Purely decorative (icons, cursors, glows): `alt=""` and `aria-hidden="true"`.
- HTML-built illustrations: `role="img"` with an `aria-label` describing the whole illustration.
- Screenshots must contain no real customer data (names, emails, phone numbers, org names). Crop or choose demo data; ask before using a live event.

## 3. Markup
```astro
<img src="/feature-images/<dir>/<name>.webp" alt="..." width="1400" height="790" loading="lazy" decoding="async" />
```
- `width`/`height` = real pixel size from the script (prevents layout shift).
- Above the fold (hero) only: `loading="eager"` + `fetchpriority="high"`, no lazy. Everything else lazy.
- Never `<img>` for text that should be real HTML.
- For OG: absolute URL, 1200x630, passed as `ogImage` on the layout.

## 4. Report
After running, output a table: file, dimensions, KB before/after, alt text, loading mode. Flag any image over budget or containing personal data.
