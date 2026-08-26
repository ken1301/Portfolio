export const revealEase = [0.2, 0.8, 0.2, 1] as const;

export const scrollViewport = {
  once: true,
  amount: 0.05,
  margin: "0px",
} as const;

export const projectGridViewport = {
  once: true,
  amount: 0.02,
  margin: "0px",
} as const;

export const fadeRiseReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.34, ease: revealEase } },
};
