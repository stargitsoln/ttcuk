"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 animate-hero-zoom">
        <Image
          src="/images/congregation.jpg"
          alt="The Transforming Church UK congregation"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-[#0D2A52]/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.25em]">
              Welcome to
            </span>
          </div>
        </div>

        <h1
          className="animate-fade-up text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-4"
          style={{
            fontFamily: "var(--font-playfair)",
            animationDelay: "0.5s",
            opacity: 0,
          }}
        >
          The <span className="text-[#C9A84C]">Transforming</span>
          <br />
          Church UK
        </h1>

        <p
          className="animate-fade-up text-2xl md:text-3xl text-white/60 italic mb-8"
          style={{
            fontFamily: "var(--font-playfair)",
            animationDelay: "0.7s",
            opacity: 0,
          }}
        >
          One Church · Making Global Impact
        </p>

        <p
          className="animate-fade-up text-white/65 text-lg max-w-xl leading-relaxed mb-12"
          style={{ animationDelay: "0.9s", opacity: 0 }}
        >
          Are you searching for a vibrant, spirit-filled church where you can
          grow in faith, find purpose, and be part of a loving community?
          There&apos;s a place for you here.
        </p>

        <div
          className="animate-fade-up flex flex-wrap gap-4"
          style={{ animationDelay: "1.1s", opacity: 0 }}
        >
          <a
            href="http://www.youtube.com/@TTCUKOnline"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] hover:bg-[#F0D080] text-black font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)]"
          >
            ▶ &nbsp;Join Us Live
          </a>
          <a
            href="#about"
            className="border border-white/40 hover:border-[#C9A84C] hover:text-[#C9A84C] text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:-translate-y-1"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: "1.5s", opacity: 0 }}>
        <span className="text-white/30 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C]/80 to-transparent animate-scroll-line" />
      </div>
    </section>
  );
}
