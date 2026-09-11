import type { MetadataRoute } from "next";
import { SITE_URL, facts } from "@/content/facts";
import { productPages, segments } from "@/content/product";
import { blogPosts } from "@/content/blog";
import { comparePages } from "@/content/compare";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(facts.lastUpdated);
  const page = (path: string, priority = 0.7, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly", lastModified: Date = now) => ({ url: `${SITE_URL}${path}`, lastModified, changeFrequency, priority });
  return [
    page("", 1, "weekly"),
    page("/product", 0.9), ...productPages.map((p) => page(`/product/${p.slug}`, 0.8)),
    ...segments.map((s) => page(`/for/${s.slug}`, 0.8)),
    page("/institutional-pilot", 0.9), page("/pricing", 0.9),
    page("/blog", 0.7, "weekly"), ...blogPosts.map((b) => page(`/blog/${b.slug}`, 0.6, "monthly", new Date(b.updatedDate ?? b.publishDate))),
    page("/compare", 0.7), ...comparePages.map((c) => page(`/compare/${c.slug}`, 0.7)),
    page("/faq", 0.6), page("/about", 0.7), page("/recognition", 0.6), page("/investors", 0.5), page("/contact", 0.5), page("/press", 0.4),
    page("/privacy", 0.2, "yearly"), page("/terms", 0.2, "yearly"),
  ];
}
