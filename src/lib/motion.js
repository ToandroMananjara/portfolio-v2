export const EASE_OUT = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT = [0.65, 0, 0.35, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT } },
};

export const stagger = (delayChildren = 0.1, stagger = 0.08) => ({
  hidden: {},
  show: {
    transition: {
      delayChildren,
      staggerChildren: stagger,
    },
  },
});

export const inViewProps = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
};
