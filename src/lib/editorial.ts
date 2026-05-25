import type { WPBaseEntry, WPFaqItem, WPNews, WPPost } from "./wordpress";
import { rewriteContentUrls } from "./wordpress";

export type EditorialKind = "blog" | "news";

export interface EditorialImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface EditorialHeading {
  id: string;
  level: 2 | 3;
  text: string;
}

export interface EditorialEntry {
  id: number;
  kind: EditorialKind;
  slug: string;
  title: string;
  description: string;
  excerptHtml: string;
  contentHtml: string;
  date: string;
  formattedDate: string;
  author: string;
  category: string;
  categorySlug: string;
  href: string;
  image: EditorialImage | null;
  readingTime: number;
  headings: EditorialHeading[];
  seoTitle: string;
  seoDescription: string;
  seoOgImage: string;
  faqs: WPFaqItem[];
}

const HTML_ENTITY_MAP: Record<string, string> = {
  amp: "&",
  apos: "'",
  gt: ">",
  hellip: "...",
  ldquo: '"',
  lsquo: "'",
  lt: "<",
  mdash: "-",
  nbsp: " ",
  ndash: "-",
  quot: '"',
  rdquo: '"',
  rsquo: "'",
};

export function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&#x([\da-f]+);/gi, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, entity: string) => HTML_ENTITY_MAP[entity.toLowerCase()] ?? match);
}

function cleanRenderedHtml(rawHtml: string): string {
  return rawHtml
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/linkedin(?:\+\d+)?\s*(?=<\/p>)/gi, "")
    .replace(/<p>(?:\s|&nbsp;|&#160;)*<\/p>/gi, "")
    .trim();
}

function stripHtml(rawHtml: string): string {
  const normalizedHtml = cleanRenderedHtml(rawHtml);

  return decodeHtmlEntities(
    normalizedHtml
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function sanitizePlainText(rawHtml: string): string {
  return stripHtml(rawHtml).replace(/^[\s'">-]+/, "").trim();
}

function truncateText(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength).trimEnd()}...`;
}

function slugify(value: string): string {
  return decodeHtmlEntities(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-") || "section";
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function getAuthorName(entry: WPBaseEntry): string {
  const authorName = entry._embedded?.author?.[0]?.name;
  return authorName ? decodeHtmlEntities(authorName) : "EventHex Team";
}

function getPrimaryTerm(entry: WPBaseEntry, taxonomy: string): { name: string; slug: string } | null {
  const terms = entry._embedded?.["wp:term"]?.flat();
  const matchedTerm = terms?.find((term) => term.taxonomy === taxonomy);

  return matchedTerm ? { name: decodeHtmlEntities(matchedTerm.name), slug: matchedTerm.slug } : null;
}

function getFeaturedImage(entry: WPBaseEntry, title: string): EditorialImage | null {
  const media = entry._embedded?.["wp:featuredmedia"]?.[0];

  if (!media) {
    return null;
  }

  return {
    src: media.source_url,
    alt: decodeHtmlEntities(media.alt_text || title),
    width: media.media_details?.width,
    height: media.media_details?.height,
  };
}

function resolveExcerptHtml(entry: WPBaseEntry): string {
  const excerptHtml = entry.excerpt?.rendered?.trim();
  const cleanedContent = cleanRenderedHtml(entry.content.rendered);

  if (excerptHtml) {
    return cleanRenderedHtml(excerptHtml);
  }

  return cleanedContent.match(/<p\b[^>]*>[\s\S]*?<\/p>/i)?.[0] ?? cleanedContent;
}

function injectHeadingIds(html: string): { html: string; headings: EditorialHeading[] } {
  const headings: EditorialHeading[] = [];
  const idUsage = new Map<string, number>();

  const decoratedHtml = html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, rawLevel, attrs, innerHtml) => {
    const text = stripHtml(innerHtml);

    if (!text) {
      return match;
    }

    const baseId = slugify(text);
    const seenCount = idUsage.get(baseId) ?? 0;
    const id = seenCount === 0 ? baseId : `${baseId}-${seenCount + 1}`;

    idUsage.set(baseId, seenCount + 1);
    headings.push({ id, level: Number(rawLevel) as 2 | 3, text });

    return `<h${rawLevel}${attrs.replace(/\sid=(['"]).*?\1/gi, "")} id="${id}">${innerHtml}</h${rawLevel}>`;
  });

  return { html: decoratedHtml, headings };
}

function createEntry(entry: WPBaseEntry, kind: EditorialKind, fallbackCategory: string): EditorialEntry {
  const title = sanitizePlainText(entry.title.rendered);
  const excerptHtml = resolveExcerptHtml(entry);
  const cleanedContent = cleanRenderedHtml(rewriteContentUrls(entry.content.rendered));
  const { html: contentHtml, headings } = injectHeadingIds(cleanedContent);
  const description = truncateText(sanitizePlainText(excerptHtml || cleanedContent), 190);
  const wordCount = stripHtml(cleanedContent).split(/\s+/).filter(Boolean).length;

  const primaryTerm = kind === "blog" ? getPrimaryTerm(entry, "category") : null;

  return {
    id: entry.id,
    kind,
    slug: entry.slug,
    title,
    description,
    excerptHtml,
    contentHtml,
    date: entry.date,
    formattedDate: formatDate(entry.date),
    author: getAuthorName(entry),
    category: primaryTerm?.name ?? fallbackCategory,
    categorySlug: primaryTerm?.slug ?? "",
    href: kind === "blog" ? `/blog/${entry.slug}/` : `/news/${entry.slug}/`,
    image: getFeaturedImage(entry, title),
    readingTime: Math.max(1, Math.ceil(wordCount / 220)),
    headings,
    seoTitle: entry.seo?.title || "",
    seoDescription: entry.seo?.description || "",
    seoOgImage: entry.seo?.ogImage || "",
    faqs: entry.seo?.faqs ?? [],
  };
}

export function normalizeBlogPost(post: WPPost): EditorialEntry {
  return createEntry(post, "blog", "EventHex Blog");
}

export function normalizeBlogPosts(posts: WPPost[]): EditorialEntry[] {
  return posts
    .map((post) => normalizeBlogPost(post))
    .sort((left, right) => Date.parse(right.date) - Date.parse(left.date));
}

export function normalizeNewsItem(newsItem: WPNews): EditorialEntry {
  return createEntry(newsItem, "news", "EventHex News");
}

export function normalizeNewsItems(newsItems: WPNews[]): EditorialEntry[] {
  return newsItems
    .map((newsItem) => normalizeNewsItem(newsItem))
    .sort((left, right) => Date.parse(right.date) - Date.parse(left.date));
}

export function getUniqueCategories(items: EditorialEntry[]): { name: string; slug: string }[] {
  const seen = new Set<string>();
  const result: { name: string; slug: string }[] = [];
  for (const item of items) {
    if (item.category && item.categorySlug && !seen.has(item.categorySlug)) {
      seen.add(item.categorySlug);
      result.push({ name: item.category, slug: item.categorySlug });
    }
  }
  return result.slice(0, 6);
}

export function categorySlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}