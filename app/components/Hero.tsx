"use client";
import { useState, useEffect } from "react";
import ParticleCanvas from "./ParticleCanvas";
import Image from "next/image";

const slides = [
  { src: "/images/revsam2.jpg", alt: "Pastor Sam at TTCUK" },
  { src: "/images/baptism.jpg", alt: "Baptism at TTCUK" },
  { src: "/images/rev_sam.jpg", alt: "Rev Sam ministering" },
  { src: "/images/congregation7.jpg", alt: "TTCUK congregation" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      {/* Slideshow backgrounds */}
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className="hero-bg-img"
          priority={i === 0}
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.6s ease",
            zIndex: 0,
          }}
        />
      ))}
      <div className="hero-overlay" />

      <div className="rays">
        <div className="ray" />
        <div className="ray" />
        <div className="ray" />
        <div className="ray" />
        <div className="ray" />
      </div>
      <ParticleCanvas />

      <div className="hero-tag">Welcome to</div>
      <h1 className="hero-title">
        The Transforming<br />
        <em>Church UK</em>
      </h1>
      <p className="hero-sub">One Church — Making Global Impact</p>
      <div className="hero-cta">
        <a
          href="http://www.youtube.com/@TTCUKOnline"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Join Us Live
        </a>
        <a
          href="https://pay.sumup.com/b2c/QCDJNNFJ"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Give Today
        </a>
      </div>

      {/* Slide indicators */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
