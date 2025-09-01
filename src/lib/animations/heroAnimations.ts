import { Variants } from "framer-motion";

// Hero Section Animation Variants - Optimized for performance
export const heroSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const heroOverlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.4,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};

export const heroTitleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

export const heroTitleSpanVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const heroContentVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
      ease: "easeOut",
    },
  },
};

// Hero Section Viewport Configuration
export const heroViewport = {
  once: true,
  amount: 0.3,
};

// Hero Section Transitions
export const heroTransitions = {
  default: {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
  fast: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
  slow: {
    duration: 1.2,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
};
