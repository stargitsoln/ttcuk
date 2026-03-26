"use client";
import { useEffect, useRef } from "react";

export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.body.scrollHeight - window.innerHeight;
      const pct = (window.scrollY / h) * 100;
      if (barRef.current) barRef.current.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="progress-bar" ref={barRef} />;
}
