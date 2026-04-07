const WP_URL = import.meta.env.WP_URL || "https://eventhex.ai";
const WP_API = `${WP_URL}/wp-json/wp/v2`;

export interface WPRenderedField {
  rendered: string;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details?: {
    width?: number;
    height?: number;
    sizes?: Record<string, { source_url: string; width: number; height: number }>;
  };
}

export interface WPAuthorRecord {
  id: number;
  name: string;
  slug?: string;
}

export interface WPTermRecord {
  id: number;
  name: string;
  slug: string;
  taxonomy?: string;
}

export interface WPEmbedded {
  author?: WPAuthorRecord[];
  "wp:featuredmedia"?: WPMedia[];
  "wp:term"?: WPTermRecord[][];
}

export interface WPBaseEntry {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  link: string;
  title: WPRenderedField;
  content: WPRenderedField;
  excerpt?: WPRenderedField | null;
  author: number;
  featured_media: number;
  _embedded?: WPEmbedded;
}

export interface WPPost extends WPBaseEntry {
  categories: number[];
  tags: number[];
}

export interface WPNews extends WPBaseEntry {}

export interface WPPage {
  id: number;
  date: string;
  slug: string;
  status: string;
  link: string;
  title: WPRenderedField;
  content: WPRenderedField;
  author: number;
  featured_media: number;
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WPTag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

async function fetchAPI<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`${WP_API}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

// Posts
export async function getPosts(params: Record<string, string> = {}): Promise<WPPost[]> {
  return fetchAPI<WPPost[]>("/posts", { per_page: "10", _embed: "true", ...params });
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchAPI<WPPost[]>("/posts", { slug, _embed: "true" });
  return posts[0] ?? null;
}

export async function getPostById(id: number): Promise<WPPost> {
  return fetchAPI<WPPost>(`/posts/${id}`, { _embed: "true" });
}

// News
export async function getNews(params: Record<string, string> = {}): Promise<WPNews[]> {
  return fetchAPI<WPNews[]>("/news", { per_page: "10", _embed: "true", ...params });
}

export async function getNewsBySlug(slug: string): Promise<WPNews | null> {
  const newsEntries = await fetchAPI<WPNews[]>("/news", { slug, _embed: "true" });
  return newsEntries[0] ?? null;
}

// Pages
export async function getPages(params: Record<string, string> = {}): Promise<WPPage[]> {
  return fetchAPI<WPPage[]>("/pages", { per_page: "100", ...params });
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await fetchAPI<WPPage[]>("/pages", { slug });
  return pages[0] ?? null;
}

// Media
export async function getMedia(id: number): Promise<WPMedia> {
  return fetchAPI<WPMedia>(`/media/${id}`);
}

// Categories
export async function getCategories(params: Record<string, string> = {}): Promise<WPCategory[]> {
  return fetchAPI<WPCategory[]>("/categories", { per_page: "100", ...params });
}

export async function getCategoryBySlug(slug: string): Promise<WPCategory | null> {
  const cats = await fetchAPI<WPCategory[]>("/categories", { slug });
  return cats[0] ?? null;
}

// Tags
export async function getTags(params: Record<string, string> = {}): Promise<WPTag[]> {
  return fetchAPI<WPTag[]>("/tags", { per_page: "100", ...params });
}

// Sitemap helpers — fetch all entries with pagination
async function fetchAllEntries<T>(endpoint: string, fields: string): Promise<T[]> {
  const all: T[] = [];
  let page = 1;

  while (true) {
    const url = new URL(`${WP_API}${endpoint}`);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("page", String(page));
    url.searchParams.set("_fields", fields);

    const response = await fetch(url.toString());
    if (!response.ok) break;

    const entries = (await response.json()) as T[];
    if (entries.length === 0) break;

    all.push(...entries);
    const totalPages = Number(response.headers.get("X-WP-TotalPages") ?? "1");
    if (page >= totalPages) break;
    page++;
  }

  return all;
}

export interface WPSitemapEntry {
  slug: string;
  modified: string;
}

export async function getAllPostSlugs(): Promise<WPSitemapEntry[]> {
  return fetchAllEntries<WPSitemapEntry>("/posts", "slug,modified");
}

export async function getAllNewsSlugs(): Promise<WPSitemapEntry[]> {
  return fetchAllEntries<WPSitemapEntry>("/news", "slug,modified");
}
