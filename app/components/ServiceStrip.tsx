"use client";
import { useRef } from "react";
import Reveal from "./Reveal";

const sermons = [
  {
    id: "lZlsIWLHQQE",
    title: "Flourishing & Thriving Through Extraordinary Love (Part 1)",
    speaker: "Pastor Yinka Adewale",
    series: "Flourishing & Thriving",
  },
  {
    id: "pKYA2wNxNWw",
    title: "Flourishing & Thriving by Grace",
    speaker: "Pastor Adeyinka Adewale",
    series: "Flourishing & Thriving",
  },
  {
    id: "2n5IEZL42YQ",
    title: "Flourishing by Extraordinary Faith",
    speaker: "Pastor Yinka Adewale",
    series: "Flourishing & Thriving",
  },
  {
    id: "77uBcfOjZzw",
    title: "From Little Faith to Great Faith",
    speaker: "Pastor Yinka Adewale",
    series: "Flourishing & Thriving",
  },
  {
    id: "kq0IgS02SgI",
    title: "Passion Restored",
    speaker: "Pastor Shola John",
    series: "Restored",
  },
  {
    id: "f301M_AU72Y",
    title: "Faith to Finish Strong",
    speaker: "Pastor Genevieve Bosah",
    series: "Great Grace for Finishing Strong",
  },
  {
    id: "YnJc2xABfh4",
    title: "The Mystery of Thriving — Sure-Footed",
    speaker: "Pastor Yinka Adewale",
    series: "Sure-Footed",
  },
  {
    id: "WHl4cmZRtj8",
    title: "Overcoming Trauma Wounds by the Help of God",
    speaker: "Pastor Yinka Adewale",
    series: "Special Message",
  },
];

export default function ServiceStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section className="sermons-section" id="sermons">
      <video
        className="section-bg-video"
        src="/images/TTCUK-logo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="section-bg-overlay" />
      <Reveal style={{ textAlign: "center", marginBottom: 48, padding: "0 64px", position: "relative", zIndex: 1 }}>
        <span className="section-label" style={{ textAlign: "center", display: "block" }}>
          Watch &amp; Listen
        </span>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Recent Sermons
        </h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
          Powerful messages from TTCUKOnline — watch on YouTube
        </p>
      </Reveal>

      <div className="sermons-carousel-wrap" style={{ position: "relative", zIndex: 1 }}>
        <button className="sermons-nav prev" onClick={() => scroll("left")} aria-label="Previous">‹</button>

        <div className="sermons-grid" ref={scrollRef}>
          {sermons.map((s) => (
            <a
              key={s.id}
              href={`https://www.youtube.com/watch?v=${s.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sermon-card"
            >
              <div className="sermon-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${s.id}/hqdefault.jpg`}
                  alt={s.title}
                  className="sermon-thumb-img"
                />
                <div className="sermon-thumb-inner">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="sermon-info">
                <span className="sermon-series">{s.series}</span>
                <h3 className="sermon-title">{s.title}</h3>
                <span className="sermon-channel">{s.speaker}</span>
              </div>
            </a>
          ))}
        </div>

        <button className="sermons-nav next" onClick={() => scroll("right")} aria-label="Next">›</button>
      </div>

      <Reveal style={{ textAlign: "center", marginTop: 48, padding: "0 64px", position: "relative", zIndex: 1 }}>
        <a
          href="https://www.youtube.com/@TTCUKOnline"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          View All on YouTube
        </a>
      </Reveal>
    </section>
  );
}
