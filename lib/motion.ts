export const revealEase = [0.2, 0.8, 0.2, 1] as const;

export const scrollViewport = {
  once: true,
  amount: 0.2,
  margin: "-80px",
} as const;

export const projectGridViewport = {
  once: true,
  amount: 0.08,
  margin: "-80px",
} as const;

export const fadeRiseReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: revealEase } },
};
