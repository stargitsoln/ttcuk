"use client";
import { useEffect, useRef } from "react";

export default function BgVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
