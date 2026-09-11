import type { NextConfig } from "next";

const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://app.researchernet.com").replace(/\/+$/, "");

// Paths that belonged to the application when it was served from the root domain.
// Keep old bookmarks and shared links working after the marketing site takes over researchernet.com.
const APP_PATHS = ["signup", "login", "register", "signin", "dashboard", "feed", "projects", "profile", "settings", "app", "workspace", "chat", "meetings", "analytics", "sessions", "editor", "forgot-password", "reset-password", "verify"];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return APP_PATHS.map((p) => ({
      source: `/${p}`,
      destination: `${APP_URL}/${p}`,
      permanent: true,
    })).concat(
      APP_PATHS.map((p) => ({
        source: `/${p}/:path*`,
        destination: `${APP_URL}/${p}/:path*`,
        permanent: true,
      })),
    );
  },
  async headers() {
    const isPreview = process.env.VERCEL_ENV === "preview";
    const common = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    ];
    if (isPreview) common.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });
    return [{ source: "/:path*", headers: common }];
  },
};

export default nextConfig;
