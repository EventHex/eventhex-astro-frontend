#!/usr/bin/env python3
"""Resize + convert an image to WebP for the EventHex site and print markup facts."""
import argparse
import os
import re
import sys

from PIL import Image


def kebab(name: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-") or "image"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("dest_dir")
    ap.add_argument("--name")
    ap.add_argument("--max-width", type=int, default=1400)
    ap.add_argument("--quality", type=int, default=82)
    a = ap.parse_args()

    img = Image.open(a.src)
    if img.width > a.max_width:
        h = round(img.height * a.max_width / img.width)
        img = img.resize((a.max_width, h), Image.LANCZOS)
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGBA" if "A" in img.mode else "RGB")

    os.makedirs(a.dest_dir, exist_ok=True)
    base = kebab(a.name or os.path.splitext(os.path.basename(a.src))[0])
    out = os.path.join(a.dest_dir, base + ".webp")
    img.save(out, "WEBP", quality=a.quality, method=6)
    before = os.path.getsize(a.src)
    after = os.path.getsize(out)
    print(f"file:   {out}")
    print(f"src:    /{os.path.relpath(out, 'public')}" if "public" in out else f"src:    {out}")
    print(f"size:   {img.width}x{img.height}")
    print(f"bytes:  {before} -> {after} ({after * 100 // max(before, 1)}%)")
    if after > 150_000:
        print("warn:   over 150 KB; lower --quality or --max-width", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
