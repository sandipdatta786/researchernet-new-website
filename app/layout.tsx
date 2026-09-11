import type { Metadata, Viewport } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/seo";
import { facts, SITE_URL } from "@/content/facts";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", style: ["italic", "normal"], weight: ["400", "500"], display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "ResearcherNet — AI Research Collaboration, From Paper to Product", template: "%s | ResearcherNet" },
  description: facts.description,
  applicationName: "ResearcherNet",
  keywords: ["AI research collaboration platform", "research to commercialization platform", "AI literature review", "find research collaborators", "collaborative LaTeX editor", "research platform India"],
  authors: [{ name: "ResearcherNet" }],
  creator: facts.legalName,
  openGraph: { type: "website", siteName: "ResearcherNet", locale: "en_IN", url: SITE_URL },
  twitter: { card: "summary_large_image", site: facts.social.xHandle },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { themeColor: "#0a0a0b", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <JsonLd data={organizationJsonLd()} />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
