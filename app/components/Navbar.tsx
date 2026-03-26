"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Online", href: "#online" },
  { label: "Sermons", href: "#sermons" },
  { label: "Connect", href: "#connect" },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-[#C9A84C]/20 py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center font-bold text-black text-sm">
            TTC
          </div>
          <span
            className="font-bold text-white text-sm tracking-wide hidden sm:block"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Transforming Church UK
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/70 hover:text-[#C9A84C] text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://pay.sumup.com/b2c/QCDJNNFJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A84C] hover:bg-[#F0D080] text-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 transition-all duration-200 hover:-translate-y-0.5"
            >
              Give
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/98 border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-[#C9A84C] text-sm font-semibold uppercase tracking-widest py-2 border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://pay.sumup.com/b2c/QCDJNNFJ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] text-black text-xs font-bold uppercase tracking-widest px-5 py-3 text-center mt-2"
          >
            Give Online
          </a>
        </div>
      )}
    </nav>
  );
}
