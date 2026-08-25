"use client";

import { MotionConfig, motion } from "framer-motion";
import { fadeRiseReveal, revealEase, scrollViewport } from "@/lib/motion";

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.05, ease: revealEase } },
};

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  titleId: string;
  intro?: string;
  className?: string;
};

export function SectionHeading({ index, label, title, titleId, intro, className = "" }: SectionHeadingProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={`section-heading section-heading-with-rail ${className}`.trim()}
        variants={fadeRiseReveal}
        initial="hidden"
        whileInView="visible"
        viewport={scrollViewport}
      >
        <div className="section-heading-main">
          <div className="section-kicker">// {index}. {label}</div>
          <h2 id={titleId}>{title}</h2>
          <motion.span className="section-heading-line" variants={lineReveal} aria-hidden="true" />
        </div>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </motion.div>
    </MotionConfig>
  );
}
