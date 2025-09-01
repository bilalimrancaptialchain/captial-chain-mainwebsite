import { Variants } from "framer-motion";

// Contact Page Section Variants
export const contactSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

// Contact Hero Section Variants
export const contactHeroSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
    },
  },
};

// Map Section Variants
export const contactMapSectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.3,
    },
  },
};

// Map Content Variants
export const contactMapContentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Map Title Variants
export const contactMapTitleVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Map Bottom Content Variants
export const contactMapBottomVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.2,
    },
  },
};

// Map Button Variants
export const contactMapButtonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 30px 0px rgba(0,224,224,0.3)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Contact Info Section Variants
export const contactInfoSectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.3,
    },
  },
};

// Contact Info Card Variants
export const contactInfoCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.2,
    },
  },
  hover: {
    y: -5,
    boxShadow: "0px 15px 40px 0px rgba(0,224,224,0.2)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Contact Info Text Variants
export const contactInfoTextVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Contact Info Button Variants
export const contactInfoButtonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 25px 0px rgba(16,185,129,0.4)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Contact Accordion Section Variants
export const contactAccordionSectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Contact Accordion Header Variants
export const contactAccordionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    backgroundColor: "rgba(55, 65, 81, 0.5)",
    transition: {
      duration: 0.2,
    },
  },
};

// Contact Accordion Content Variants
export const contactAccordionContentVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
      opacity: {
        duration: 0.3,
        delay: 0.2,
      },
      staggerChildren: 0.1,
    },
  },
};

// Contact Form Field Variants
export const contactFormFieldVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Contact Form Input Variants
export const contactFormInputVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  focus: {
    scale: 1.02,
    boxShadow: "0px 0px 0px 2px rgba(0,224,224,0.3)",
    transition: {
      duration: 0.2,
    },
  },
};

// Contact Form Submit Button Variants
export const contactFormSubmitVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 15px 35px 0px rgba(16,185,129,0.4)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

// Contact Chevron Icon Variants
export const contactChevronVariants: Variants = {
  closed: {
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  open: {
    rotate: 180,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Contact Viewport Configuration
export const contactViewport = {
  once: true,
  amount: 0.2,
};

// Contact Transitions
export const contactTransitions = {
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
};