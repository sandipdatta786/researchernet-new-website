import { ImageResponse } from "next/og";
import { facts } from "@/content/facts";

export const runtime = "edge";
export const alt = "ResearcherNet — AI research collaboration, from paper to product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, background: "linear-gradient(135deg, #0a0a0b 0%, #1a0f08 100%)", color: "#f4f4f5", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, fontWeight: 700 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center", color: "#0a0a0b", fontSize: 26 }}>R</div>
          ResearcherNet
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02 }}>Research, from paper<br />to product.</div>
          <div style={{ fontSize: 28, color: "#b4b4bb", maxWidth: 900 }}>{facts.description}</div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 22, color: "#fb923c" }}>
          <span>{facts.stats.researchers.value} researchers</span><span>·</span><span>Patent-pending</span><span>·</span><span>IEEE ICME & ICPR 2026</span><span>·</span><span>Made in India</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
