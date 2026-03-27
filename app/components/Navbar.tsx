"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "#services" },
  { label: "Sermons", href: "#sermons" },
  { label: "Beliefs", href: "#beliefs" },
  { label: "Connect", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/TTCUK-logo.gif"
          alt="TTCUK"
          style={{ height: 53, width: "auto", display: "block" }}
        />
      </a>

      <ul className="nav-links" style={{ display: "flex" }}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <button
        className={`nav-hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <a
        href="https://pay.sumup.com/b2c/QCDJNNFJ"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-give"
      >
        Give →
      </a>

      <div className={`nav-mobile ${open ? "show" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href="https://pay.sumup.com/b2c/QCDJNNFJ"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-give"
          style={{ textAlign: "center", marginTop: 8 }}
        >
          Give Online →
        </a>
      </div>
    </nav>
  );
}
