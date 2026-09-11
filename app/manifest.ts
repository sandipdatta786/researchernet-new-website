import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ResearcherNet", short_name: "ResearcherNet", description: "AI research collaboration, from paper to product.",
    start_url: "/", display: "browser", background_color: "#0a0a0b", theme_color: "#0a0a0b",
    icons: [{ src: "/brand/mark-192.png", sizes: "192x192", type: "image/png" }, { src: "/brand/mark-512.png", sizes: "512x512", type: "image/png" }],
  };
}
