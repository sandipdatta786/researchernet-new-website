# ResearcherNet — marketing website

The public website for [researchernet.com](https://researchernet.com): the AI-powered research collaboration and research-to-market platform built by AIMTECH Dynamics Private Limited, Kolkata.

The application itself lives at **app.researchernet.com**; this site owns the root domain, and every legacy application path (`/signup`, `/login`, `/dashboard`, …) is 301-redirected to the app (see `next.config.ts`).

## Stack

- **Next.js 15** (App Router, static generation for every marketing page) · **React 19** · **TypeScript**
- Vanilla CSS design system in `app/globals.css` (no utility framework) — dark, editorial, orange accent
- `marked` for first-party Markdown (blog, comparisons, legal)
- Deployed on **Vercel** (`vercel.json` pins the Mumbai region)

## Run it

```bash
npm install
cp .env.example .env.local   # fill in what you have; everything is optional for local dev
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
npm run lint && npm run typecheck
```

## Deploy on Vercel

1. vercel.com → **Add New → Project** → import this GitHub repository. Framework preset: Next.js. Root directory: `/`. Production branch: `main`.
2. **Settings → Environment Variables** — add the keys from `.env.example`:
   - `NEXT_PUBLIC_SITE_URL=https://researchernet.com`
   - `NEXT_PUBLIC_APP_URL=https://app.researchernet.com`
   - `NEXT_PUBLIC_GTM_ID` (Google Tag Manager container — analytics stay off until set)
   - `RESEND_API_KEY`, `FORM_TO_EMAIL`, `FORM_FROM_EMAIL` (form delivery via [Resend](https://resend.com); without a key, submissions are logged to the Vercel function logs and the visitor still sees a success message)
   - `NEXT_PUBLIC_DEMO_VIDEO_ID` (YouTube id of the product demo; a placeholder shows until set)
3. **Settings → Domains** — add `researchernet.com` and `www.researchernet.com` (www redirects to the apex). Vercel shows the exact DNS records; at Namecheap add the `A` record for `@` and the `CNAME` for `www`, and leave MX/TXT records untouched.
4. Move the application to `app.researchernet.com` **before** switching the apex — OAuth redirect URIs, cookie domain and API base URL must accept the new host. Test sign-up and sign-in there first.
5. After DNS propagates: verify https on both hosts, confirm `/signup` redirects to the app, submit `https://researchernet.com/sitemap.xml` in Google Search Console and request indexing for the priority pages.

Every pull request gets a Vercel preview URL; previews send `X-Robots-Tag: noindex` and a disallow-all `robots.txt` automatically.

## Where things live

| Path | What |
|---|---|
| `content/facts.ts` | **The facts sheet.** Every number, name, date, price and claim on the site. Change it here and every page, FAQ answer, JSON-LD block and `llms.txt` updates. |
| `content/product.ts` | Six engines, product deep-dive pages, segment (solutions) pages, FAQs, pilot FAQs |
| `content/blog.ts` | Blog posts (Markdown in template literals) |
| `content/compare.ts` | "ResearcherNet vs X" comparison pages |
| `content/legal.ts` | Privacy policy and terms (Markdown) |
| `app/` | Routes. `sitemap.ts`, `robots.ts`, `manifest.ts`, `llms.txt/route.ts` and `opengraph-image.tsx` are generated from content |
| `app/api/lead/route.ts` | Pilot / contact / investor form handler (honeypot, rate limit, Resend email) |
| `components/` | Nav, footer, page blocks, product mock surfaces, pricing table, forms, analytics |
| `app/globals.css` | Design tokens and layout primitives |
| `scripts/` | Dev-only verification harness: renders every route to static HTML with Next.js modules stubbed and screenshots them (`npm run verify`). Not part of the build. |

## Editing content

- **Add a blog post:** append an object to `content/blog.ts` (slug, title, description, keywords, category, dates, author, Markdown `content`). The post, its OG image, sitemap entry and JSON-LD are generated.
- **Add a comparison:** append to `content/compare.ts`; keep the honesty rules (praise what the competitor does well; mark roadmap items "in development").
- **Update numbers** (researchers, institutions, prices): only in `content/facts.ts`, and update LinkedIn and the deck the same day.
- **Roadmap vs live:** a feature is described as live only after it ships; otherwise it belongs on `/product/roadmap` (edit the roadmap page in `content/product.ts`).

## Analytics

Google Tag Manager loads only when `NEXT_PUBLIC_GTM_ID` is set, after Consent Mode v2 defaults (analytics denied until the visitor accepts the banner). Key events pushed to the data layer: `signup_click`, `pilot_request`, `contact_submit`, `demo_play`, `pricing_view`, `blog_engaged`. Configure GA4 cross-domain measurement for `researchernet.com` + `app.researchernet.com`, and have the app fire `sign_up` on successful registration.

## Before launch — checklist

- [ ] Confirm the facts in `content/facts.ts` (institution count, paper corpus figure, INR rate, social URLs — LinkedIn/YouTube render only when filled in)
- [ ] Founder headshots → replace the initials avatars on `/about`
- [ ] Demo video id → `NEXT_PUBLIC_DEMO_VIDEO_ID`
- [ ] Testimonial consents (three JU professors) and institution logo permissions (names-only strip until then)
- [ ] Legal review of `content/legal.ts` (placeholders: grievance officer name, refund clause)
- [ ] GTM container + GA4 + Search Console; Resend API key
- [ ] App live on `app.researchernet.com`, then DNS cutover

© AIMTECH Dynamics Private Limited. Patent pending — IN 202531120470.
