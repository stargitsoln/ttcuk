import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/app/components/Reveal";
import Footer from "@/app/components/Footer";
import Chatbot from "@/app/components/Chatbot";
import { locations, getLocation } from "@/lib/locations";

const SITE_URL = "https://www.ttcuk.church";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  const title = `Church in ${location.addressLocality} | TTCUK ${location.name} Campus`;
  const description = `Join The Transforming Church UK at our ${location.name} campus — ${location.streetAddress}, ${location.addressLocality} ${location.postalCode}. ${location.day}s, ${location.timeLabel}. All welcome.`;
  const url = `${SITE_URL}/locations/${location.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const otherLocations = locations.filter((l) => l.slug !== location.slug);
  const fullAddress = `${location.streetAddress}, ${location.addressLocality}, ${location.postalCode}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: `The Transforming Church UK — ${location.name} Campus`,
    url: `${SITE_URL}/locations/${location.slug}`,
    image: `${SITE_URL}${location.heroImage}`,
    telephone: "+447842671760",
    email: "hello@ttcuk.church",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      addressLocality: location.addressLocality,
      postalCode: location.postalCode,
      addressRegion: location.addressRegion,
      addressCountry: "GB",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: location.day,
      opens: location.opens,
      closes: location.closes,
    },
    parentOrganization: {
      "@type": "Church",
      name: "The Transforming Church UK",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Compact nav bar for sub-pages */}
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

      <main className="about-page">
        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero-img-wrap">
            <Image
              src={location.heroImage}
              alt={`${location.name} campus congregation`}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
            <div className="about-hero-overlay" />
          </div>
          <div className="about-hero-content">
            <Reveal>
              <span className="section-label" style={{ display: "block", textAlign: "center" }}>
                {location.day}s &middot; {location.timeLabel}
              </span>
              <h1 className="about-heading">{location.name} Campus</h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="about-intro">{location.intro}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="about-cta-btns" style={{ marginTop: 32 }}>
                <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Get Directions
                </a>
                <Link href="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Visit info + map */}
        <section className="about-mission">
          <div className="contact-grid" style={{ padding: "0 64px 0", maxWidth: 1000, margin: "0 auto" }}>
            <Reveal className="contact-info-card">
              <h3 className="contact-info-title">Visit Us</h3>
              <div className="contact-divider" />
              <div className="contact-details">
                <p className="contact-detail-name">{location.name} Campus</p>
                <address
                  style={{ fontStyle: "normal", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}
                >
                  {location.streetAddress}
                  <br />
                  {location.addressLocality}, {location.postalCode}
                </address>
              </div>
              <div className="contact-divider" />
              <p className="contact-info-text">
                {location.day}s, {location.timeLabel}
                {location.parking ? (
                  <>
                    <br />
                    {location.parking}
                  </>
                ) : null}
              </p>
            </Reveal>
            <Reveal
              delay={0.15}
              className="location-map"
              style={{ position: "relative", overflow: "hidden", display: "flex", minHeight: 320 }}
            >
              <iframe
                src={mapEmbedSrc}
                style={{ border: 0, display: "block", flex: "1 1 auto", width: "100%", minHeight: 320 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map to TTCUK ${location.name} Campus`}
              />
            </Reveal>
          </div>
        </section>

        {/* Other campuses */}
        {otherLocations.length > 0 && (
          <section className="section" style={{ background: "var(--dark)" }}>
            <Reveal style={{ textAlign: "center" }}>
              <span className="section-label" style={{ display: "block", textAlign: "center" }}>
                Also Near You
              </span>
              <h2 className="section-title" style={{ textAlign: "center" }}>
                Our Other Campuses
              </h2>
            </Reveal>
            <div className="card-grid">
              {otherLocations.map((l, i) => (
                <Reveal key={l.slug} delay={i * 0.1}>
                  <Link
                    href={`/locations/${l.slug}`}
                    className="feature-card"
                    style={{ "--card-bg": `url(${l.heroImage})` } as React.CSSProperties}
                  >
                    <div className="card-bg-image" />
                    <div className="card-bg-overlay" />
                    <h3 className="card-title">{l.name} Campus</h3>
                    <p className="card-text">
                      {l.streetAddress}, {l.addressLocality} {l.postalCode} — {l.day}s, {l.timeLabel}
                    </p>
                    <span className="card-arrow">Visit Campus →</span>
                    <div className="card-line" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <Chatbot />
    </>
  );
}
