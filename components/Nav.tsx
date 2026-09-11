import Link from "next/link";
import Image from "next/image";
import { productPages, segments } from "@/content/product";
import { appLogin, appSignup } from "@/lib/seo";
import { Chevron } from "./Icons";
import { MobileNav } from "./MobileNav";
import { NavBehaviour } from "./NavBehaviour";
import { SignupLink } from "./TrackLink";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="ResearcherNet home">
      <Image src="/brand/mark-192.png" alt="" width={26} height={30} priority />
      <span>Researcher<b>Net</b></span>
    </Link>
  );
}

export function Nav() {
  const product = productPages.map((p) => ({ href: `/product/${p.slug}`, title: p.nav, sub: p.eyebrow }));
  const solutions = segments.map((s) => ({ href: `/for/${s.slug}`, title: s.nav, sub: s.audience }));
  return (
    <header className="nav">
      <NavBehaviour />
      <div className="container">
        <div className="nav__inner">
          <Brand />
          <nav className="nav__links" aria-label="Primary">
            <details>
              <summary>Product <Chevron /></summary>
              <div className="nav__menu nav__menu--wide">
                <Link href="/product"><b>Overview</b><span>Six engines, one workspace</span></Link>
                {product.map((i) => (
                  <Link key={i.href} href={i.href}><b>{i.title}</b><span>{i.sub}</span></Link>
                ))}
              </div>
            </details>
            <details>
              <summary>Solutions <Chevron /></summary>
              <div className="nav__menu">
                {solutions.map((i) => (
                  <Link key={i.href} href={i.href}><b>{i.title}</b><span>{i.sub}</span></Link>
                ))}
                <Link href="/institutional-pilot"><b>Institutional pilot</b><span>90 days, complimentary first year</span></Link>
              </div>
            </details>
            <Link href="/pricing">Pricing</Link>
            <details>
              <summary>Resources <Chevron /></summary>
              <div className="nav__menu">
                <Link href="/blog"><b>Blog</b><span>Guides for researchers and institutions</span></Link>
                <Link href="/compare"><b>Compare</b><span>ResearcherNet vs SciSpace, Elicit, Overleaf…</span></Link>
                <Link href="/faq"><b>FAQ</b><span>Straight answers</span></Link>
                <Link href="/press"><b>Press kit</b><span>Logos, boilerplate, photos</span></Link>
              </div>
            </details>
            <details>
              <summary>Company <Chevron /></summary>
              <div className="nav__menu">
                <Link href="/about"><b>About</b><span>Team, story, IIC Jadavpur University</span></Link>
                <Link href="/recognition"><b>Recognition</b><span>IEEE ICME, ICPR, RISE, Eureka…</span></Link>
                <Link href="/investors"><b>Investors</b><span>Seed round open</span></Link>
                <Link href="/contact"><b>Contact</b><span>Pilots, partnerships, press</span></Link>
              </div>
            </details>
          </nav>
          <div className="nav__cta">
            <a href={appLogin} className="btn btn--ghost">Log in</a>
            <SignupLink href={appSignup} className="btn btn--primary btn--sm" location="nav">Start free</SignupLink>
            <MobileNav
              groups={[
                { label: "Product", items: [{ href: "/product", title: "Overview" }, ...product] },
                { label: "Solutions", items: [...solutions, { href: "/institutional-pilot", title: "Institutional pilot" }] },
                { label: "Resources", items: [{ href: "/pricing", title: "Pricing" }, { href: "/blog", title: "Blog" }, { href: "/compare", title: "Compare" }, { href: "/faq", title: "FAQ" }] },
                { label: "Company", items: [{ href: "/about", title: "About" }, { href: "/recognition", title: "Recognition" }, { href: "/investors", title: "Investors" }, { href: "/contact", title: "Contact" }] },
              ]}
              loginHref={appLogin}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
