import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: false });

/** Render trusted, first-party markdown (our own content files) to HTML. */
export function renderMarkdown(md: string): string {
  return marked.parse(md) as string;
}

export function readingTime(md: string): string {
  const words = md.replace(/[#*_`>\-|]/g, " ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
