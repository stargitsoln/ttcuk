import Link from "next/link";
import Reveal from "./Reveal";

const actions = [
  {
    title: "Prayer Request",
    text: "We're here to pray with you. Send your request and we'll stand in faith together.",
    cta: "Let's Pray →",
    href: "/contact",
  },
  {
    title: "Testimony",
    text: "Share how God has transformed your life and inspire others with your story.",
    cta: "Share With Us →",
    href: "/contact",
  },
  {
    title: "Become a Member",
    text: "Be part of a loving, faith-filled community. There's a place here for you.",
    cta: "Get In Touch →",
    href: "/contact",
  },
  {
    title: "Watch Sermons",
    text: "Catch up on powerful messages from our recent series.",
    cta: "Watch Now →",
    href: "http://www.youtube.com/@TTCUKOnline",
    external: true,
  },
];

export default function CTABanner() {
  return (
    <div className="final-cta">
      <div className="ghost-word">
        <span className="ghost-be">BE</span>
        <span className="ghost-transformed">TRANSFORMED</span>
      </div>
      <Reveal style={{ position: "relative", zIndex: 1 }}>
        <span className="section-label" style={{ display: "block", marginBottom: 16 }}>
          Be Part of Something Bigger
        </span>
        <h2 className="final-title">
          Every person has a purpose.<br />
          <em>Discover yours here.</em>
        </h2>
      </Reveal>

      <div className="action-grid" style={{ position: "relative", zIndex: 1, marginBottom: 64 }}>
        {actions.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.1}>
            <div className="action-card">
              <h3 className="action-title">{a.title}</h3>
              <p className="action-text">{a.text}</p>
              {a.external ? (
                <a href={a.href} target="_blank" rel="noopener noreferrer" className="action-btn">
                  {a.cta}
                </a>
              ) : (
                <Link href={a.href} className="action-btn">{a.cta}</Link>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal style={{ position: "relative", zIndex: 1 }}>
        <div className="final-cta-btns">
          <a href="/contact" className="btn-primary">Get In Touch</a>
          <a
            href="http://www.youtube.com/@TTCUKOnline"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Watch Live
          </a>
        </div>
      </Reveal>
    </div>
  );
}
