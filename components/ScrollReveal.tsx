"use client";

import { MotionConfig, motion } from "framer-motion";
import type { ReactNode } from "react";
import { revealEase, scrollViewport } from "@/lib/motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article";
};

export function ScrollReveal({ children, className, delay = 0, as = "div" }: ScrollRevealProps) {
  const motionProps = {
    className,
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: scrollViewport,
    transition: { duration: 0.34, delay, ease: revealEase },
  };

  return (
    <MotionConfig reducedMotion="user">
      {as === "article" ? (
        <motion.article {...motionProps}>{children}</motion.article>
      ) : (
        <motion.div {...motionProps}>{children}</motion.div>
      )}
    </MotionConfig>
  );
}
