"use client";
import { useRef, useState, useEffect, useCallback } from "react";
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
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const grid = scrollRef.current;
    const card = grid.children[index] as HTMLElement;
    if (!card) return;
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    const gridWidth = grid.offsetWidth;
    grid.scrollTo({ left: cardLeft - (gridWidth - cardWidth) / 2, behavior: "smooth" });
    setCurrent(index);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (isMobile) {
      const next = dir === "right"
        ? (current + 1) % sermons.length
        : (current - 1 + sermons.length) % sermons.length;
      scrollToIndex(next);
    } else {
      scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  // Auto-scroll on mobile/tablet
  useEffect(() => {
    if (!isMobile) return;
    autoScrollRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % sermons.length;
        scrollToIndex(next);
        return next;
      });
    }, 4000);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isMobile, scrollToIndex]);

  // Sync dot indicator with manual scroll
  useEffect(() => {
    const grid = scrollRef.current;
    if (!grid || !isMobile) return;
    const onScroll = () => {
      const center = grid.scrollLeft + grid.offsetWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      Array.from(grid.children).forEach((child, i) => {
        const el = child as HTMLElement;
        const cardCenter = el.offsetLeft + el.offsetWidth / 2;
        const dist = Math.abs(center - cardCenter);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setCurrent(closest);
    };
    grid.addEventListener("scroll", onScroll, { passive: true });
    return () => grid.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  // Pause auto-scroll on touch
  const pauseAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  return (
    <section className="sermons-section" id="sermons">
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

        <div
          className="sermons-grid"
          ref={scrollRef}
          onTouchStart={pauseAutoScroll}
        >
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

      {/* Dot indicators — mobile/tablet only */}
      {isMobile && (
        <div className="sermons-dots">
          {sermons.map((_, i) => (
            <button
              key={i}
              className={`sermons-dot${i === current ? " active" : ""}`}
              onClick={() => { pauseAutoScroll(); scrollToIndex(i); }}
              aria-label={`Sermon ${i + 1}`}
            />
          ))}
        </div>
      )}

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
