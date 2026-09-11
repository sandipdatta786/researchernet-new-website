import { ImageResponse } from "next/og";
import { blogPosts } from "@/content/blog";

export const runtime = "edge";
export const alt = "ResearcherNet blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  const title = p?.title ?? "ResearcherNet blog";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, background: "linear-gradient(135deg, #0a0a0b 0%, #1a0f08 100%)", color: "#f4f4f5", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#fb923c" }}>ResearcherNet · {p?.category ?? "Blog"}</div>
        <div style={{ fontSize: title.length > 70 ? 52 : 62, fontWeight: 700, letterSpacing: -2, lineHeight: 1.08 }}>{title}</div>
        <div style={{ fontSize: 24, color: "#b4b4bb" }}>{p ? `${p.author} · ${p.readTime}` : ""} — researchernet.com</div>
      </div>
    ),
    { ...size },
  );
}
