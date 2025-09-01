import { Variants } from 'framer-motion';

// Common animation variants for sections
export const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3
    }
  }
};

// Common animation variants for titles
export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Common animation variants for cards
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Common hover animation variants
export const hoverVariants: Variants = {
  hover: {
    scale: 1.05,
    y: -8,
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1]
    }
  }
};

// Fade in animation
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

// Slide up animation
export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

// Scale animation
export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

// Image hover animation
export const imageHoverVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3
    }
  }
};

// Common transition configurations
export const transitions = {
  default: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
  },
  fast: {
    duration: 0.3,
    ease: [0.42, 0, 0.58, 1] as [number, number, number, number]
  },
  slow: {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
  }
};

// Common viewport configurations
export const viewportConfig = {
  once: true,
  amount: 0.2
};