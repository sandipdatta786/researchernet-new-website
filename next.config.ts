import type { NextConfig } from "next";

const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://app.researchernet.com").replace(/\/+$/, "");

// Paths that belonged to the application when it was served from the root domain.
// Keep old bookmarks and shared links working after the marketing site takes over researchernet.com.
const APP_PATHS = ["signup", "login", "register", "signin", "dashboard", "feed", "projects", "profile", "settings", "app", "workspace", "chat", "meetings", "analytics", "sessions", "editor", "forgot-password", "reset-password", "verify"];

/**
 * Report-Only CSP. Nothing is blocked; violations POST to /csp-report so the policy can be
 * tuned against real traffic before it is enforced.
 *  - Cloudflare Insights ships the analytics beacon.
 *  - youtube-nocookie/ytimg cover the walkthrough lite-embed; an MP4 on another host
 *    needs that origin adding to media-src.
 *  - 'unsafe-inline' on script-src is required by Next's inline bootstrap and JSON-LD.
 */
const CSP_REPORT_ONLY = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://i.ytimg.com",
  "font-src 'self' data:",
  "media-src 'self' https://www.youtube-nocookie.com",
  "frame-src https://www.youtube-nocookie.com",
  "connect-src 'self' https://cloudflareinsights.com https://static.cloudflareinsights.com",
  "report-uri /csp-report",
  "report-to csp-endpoint",
].join("; ");

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
    common.push({ key: "Content-Security-Policy-Report-Only", value: CSP_REPORT_ONLY });
    common.push({ key: "Reporting-Endpoints", value: 'csp-endpoint="/csp-report"' });
    return [{ source: "/:path*", headers: common }];
  },
};

export default nextConfig;
