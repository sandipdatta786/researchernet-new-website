"use client";
import { useEffect } from "react";
import { track } from "./Analytics";

/** Fires blog_engaged once when the reader scrolls past 75% of the page. */
export function BlogEngagement({ slug }: { slug: string }) {
  useEffect(() => {
    let fired = false;
    const onScroll = () => {
      if (fired) return;
      const h = document.documentElement;
      const pct = (h.scrollTop + window.innerHeight) / h.scrollHeight;
      if (pct >= 0.75) { fired = true; track("blog_engaged", { slug }); window.removeEventListener("scroll", onScroll); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);
  return null;
}
