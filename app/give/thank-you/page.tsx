import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Thank You for Giving",
  description:
    "Thank you for your generous gift to The Transforming Church UK. Your giving makes a difference.",
};

export default function ThankYouPage() {
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

      <main className="give-page give-thankyou-page">
        <section className="give-thankyou-section">
          <span className="section-label" style={{ display: "block", textAlign: "center" }}>
            The Transforming Church UK
          </span>

          <h1 className="give-thankyou-heading">
            Thank You for <em>Giving</em>
          </h1>

          <p className="give-thankyou-text">
            Your gift has been received. We are grateful for your generosity
            and your faithfulness. May God bless you abundantly as you
            continue to sow into His Kingdom.
          </p>

          <div className="give-thankyou-divider" />

          <blockquote className="give-scripture-text" style={{ marginBottom: "12px" }}>
            &ldquo;And my God will meet all your needs according to the riches
            of his glory in Christ Jesus.&rdquo;
          </blockquote>
          <cite className="give-scripture-ref" style={{ marginBottom: "48px", display: "block" }}>
            Philippians 4:19
          </cite>

          <div className="give-thankyou-actions">
            <Link href="/give" className="btn-primary">
              Give Again
            </Link>
            <Link href="/" className="btn-outline">
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
