import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section">
      <div className="container container--narrow center">
        <div className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>404</div>
        <h1 className="h1">That page isn't in the corpus.</h1>
        <p className="lead mt-3">The link may be old — application pages now live at app.researchernet.com.</p>
        <div className="row mt-4" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn--primary">Home</Link>
          <Link href="/product" className="btn btn--secondary">Product</Link>
        </div>
      </div>
    </section>
  );
}
