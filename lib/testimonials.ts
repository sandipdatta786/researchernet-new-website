/**
 * Testimonials — shared by the home page, /for/institutions and /pilot/provenance.
 *
 * `slug` names an optional photo at /public/people/<slug>.jpg. Where the file is
 * absent the card renders without a portrait; nothing else changes.
 *
 * Order is derived, not hand-maintained: a quote containing a figure leads, because a
 * number is the most concrete thing a reader can take from a testimonial. `ordered()`
 * is stable, so quotes without a figure keep their authored order behind those that do.
 *
 * Publish only quotes with consent on file.
 */
export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  institution: string;
  slug: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "The semantic search found critical papers our previous tools missed.",
    name: "Prof. Sheli Sinha Chaudhuri",
    title: "Electronics & Tele-communication Engineering",
    institution: "Jadavpur University",
    slug: "sheli-sinha-chaudhuri",
  },
  {
    quote: "We finished our last grant proposal faster because the editor and citations finally felt native.",
    name: "Prof. Sayan Chatterjee",
    title: "Electronics & Tele-communication Engineering",
    institution: "Jadavpur University",
    slug: "sayan-chatterjee",
  },
  {
    quote: "Managing climate datasets here feels stable, legible, and built for researchers instead of file storage admins.",
    name: "Dr. Chinmoy Ghorai",
    title: "Electronics & Tele-communication Engineering",
    institution: "Jadavpur University",
    slug: "chinmoy-ghorai",
  },
];

/** True when the quote states a figure — "40%", "3x", "six months" and the like. */
export const hasFigure = (t: Testimonial) =>
  /\d/.test(t.quote) || /\b(two|three|four|five|six|seven|eight|nine|ten|half|twice|double|triple)\b/i.test(t.quote);

/** Quotes carrying a figure first; otherwise authored order is preserved. */
export function ordered(list: Testimonial[] = testimonials): Testimonial[] {
  return [...list].sort((a, b) => Number(hasFigure(b)) - Number(hasFigure(a)));
}
