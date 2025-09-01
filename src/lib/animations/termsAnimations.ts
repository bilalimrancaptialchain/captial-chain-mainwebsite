import { Variants } from "framer-motion";

// Terms Page Section Variants
export const termsSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

// Terms Hero Section Variants
export const termsHeroSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
    },
  },
};

// Terms Container Variants
export const termsContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.2,
    },
  },
};

// Terms Left Panel Variants
export const termsLeftPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1,
    },
  },
};

// Terms Right Panel Variants
export const termsRightPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.2,
    },
  },
};

// Terms List Item Variants
export const termsListItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    scale: 1.02,
    x: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// Terms Content Variants
export const termsContentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// Terms Title Variants
export const termsTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Terms Text Variants
export const termsTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Terms Number Badge Variants
export const termsNumberBadgeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      type: "spring",
      stiffness: 100,
    },
  },
};

// Terms Active Item Variants
export const termsActiveItemVariants: Variants = {
  inactive: {
    borderColor: "transparent",
    color: "#ffffff",
    backgroundColor: "transparent",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  active: {
    borderColor: "#00e0e0",
    color: "#00e0e0",
    backgroundColor: "rgba(0, 224, 224, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Terms Panel Variants
export const termsPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0px 10px 30px 0px rgba(0,224,224,0.15)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Terms Background Variants
export const termsBackgroundVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Terms Viewport Configuration
export const termsViewport = {
  once: true,
  amount: 0.2,
};

// Terms Transitions
export const termsTransitions = {
  default: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
  fast: {
    duration: 0.3,
    ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
  },
  slow: {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
  spring: {
    type: "spring" as const,
    stiffness: 100,
    damping: 15,
  },
};