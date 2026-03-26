"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
};

const offsets = {
  up: { y: 48, x: 0 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  style,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px 0px" });

  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
