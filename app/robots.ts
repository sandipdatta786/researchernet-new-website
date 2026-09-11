import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/facts";

export default function robots(): MetadataRoute.Robots {
  const preview = process.env.VERCEL_ENV === "preview";
  return preview
    ? { rules: { userAgent: "*", disallow: "/" } }
    : { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }], sitemap: `${SITE_URL}/sitemap.xml`, host: SITE_URL };
}
