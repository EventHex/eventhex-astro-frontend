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
- Screenshot style (match `event-registration`): tight crops of one UI component, ~760x480 CSS px (about 360-800 wide), no browser chrome, cut mid-component is fine. Never a whole page or full-viewport capture. Capture at 2x with Playwright `clip`, keep the 2x pixels, show in `erg-flow-composite` (primary/secondary/detail) or `erg-access-product-shot` with the status chip, action button and cursor.

- Before reusing an existing image, open it and confirm it shows what the alt will claim. File names lie: most `public/images/sponsor-management/*-dashboard.webp` are Platform Analytics admin screens, and `event-registration/confirmation-delivery.png` is an empty WhatsApp campaigns screen. Only `exhibitor-list-web-806.webp` and `sponsor-packages-web-806.webp` show exhibitor screens.
- Portal captures: use a demo event, crop to the component, and avoid screens with attendee names or empty states ("No ... found").

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
