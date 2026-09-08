import assert from "node:assert/strict";
import test from "node:test";
import { getLegacyBlogRedirect } from "../src/lib/blog-redirects.ts";

test("renamed articles redirect from both legacy locations, with optional trailing slash", () => {
  const slug = "20-best-event-management-software-tools-to-simplify-your-event-planning-2025-edition";
  for (const prefix of ["/", "/blog/"]) {
    for (const suffix of ["", "/"]) {
      assert.equal(getLegacyBlogRedirect(`${prefix}${slug}${suffix}`), "/blog/25-best-event-management-software-tools-2026-edition/");
    }
  }
});

test("consolidated articles go to their replacement and exhibitor mistakes go to the article", () => {
  assert.equal(getLegacyBlogRedirect("/blog/how-ai-powered-event-matchmaking-platforms-drive-real-b2b-value/"), "/blog/ai-event-matchmaking-networking-guide/");
  assert.equal(getLegacyBlogRedirect("/12-mistakes-first-time-event-organizers-make-and-how-to-avoid-them/"), "/blog/first-time-exhibitor-management-mistakes/");
});

test("current articles, unknown URLs, other route types and object keys do not redirect", () => {
  for (const path of ["/blog/25-best-event-management-software-tools-2026-edition/", "/blog/unknown-article/", "/news/5902-2/", "/blog/5902-2/extra/", "/blog/", "/constructor/", "/__proto__/"]) {
    assert.equal(getLegacyBlogRedirect(path), null, path);
  }
});
