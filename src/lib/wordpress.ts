const WP_URL = import.meta.env.WP_URL || "https://eventhex.ai";
const WP_API = `${WP_URL}/wp-json/wp/v2`;

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  status: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
}

export interface WPPage {
  id: number;
  date: string;
  slug: string;
  status: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  author: number;
  featured_media: number;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: Record<string, { source_url: string; width: number; height: number }>;
  };
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
  const posts = await fetchAPI<WPPost[]>("/posts", { slug });
  return posts[0] ?? null;
}

export async function getPostById(id: number): Promise<WPPost> {
  return fetchAPI<WPPost>(`/posts/${id}`);
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
