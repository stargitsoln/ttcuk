import type { Metadata } from "next";
import Link from "next/link";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <>
      <nav className="contact-nav">
        <Link href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/TTCUK-logo.gif"
            alt="TTCUK"
            style={{ height: 48, width: "auto", display: "block" }}
          />
        </Link>
        <Link href="/" className="contact-back">
          &larr; Back Home
        </Link>
      </nav>

      <main className="give-page give-thankyou-page" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <section className="give-thankyou-section">
          <span className="section-label" style={{ display: "block", textAlign: "center" }}>
            Error 404
          </span>

          <h1 className="give-thankyou-heading" style={{ fontSize: "clamp(48px, 6vw, 64px)" }}>
            Page Not <em>Found</em>
          </h1>

          <p className="give-thankyou-text" style={{ maxWidth: 400, margin: "0 auto 40px" }}>
            We couldn&apos;t find the page you were looking for. It might have been removed,
            had its name changed, or is temporarily unavailable.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/" className="btn-primary">
              Return to Homepage
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
