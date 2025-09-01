import { Variants } from "framer-motion";

// About Page Section Variants
export const aboutSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

// About Hero Content Variants
export const aboutHeroContentVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
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

// About Title Variants
export const aboutTitleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// About Text Variants
export const aboutTextVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// About Image Section Variants
export const aboutImageSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

// About Image Variants
export const aboutImageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// About Image Content Variants
export const aboutImageContentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.2,
    },
  },
};

// Mission Section Variants
export const aboutMissionSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

// Mission Title Variants
export const aboutMissionTitleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Mission Box Variants
export const aboutMissionBoxVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
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
  hover: {
    y: -8,
    scale: 1.05,
    boxShadow: "0px 20px 60px 0px rgba(0,224,224,0.3)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Mission Box Image Variants
export const aboutMissionBoxImageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

// Mission Description Variants
export const aboutMissionDescriptionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Team Section Variants
export const aboutTeamSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

// Team Title Variants
export const aboutTeamTitleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Team Member Card Variants
export const aboutTeamMemberVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
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
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0px 15px 40px 0px rgba(0,224,224,0.2)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Team Member Image Variants
export const aboutTeamMemberImageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

// Team Member Info Variants
export const aboutTeamMemberInfoVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1,
    },
  },
};

// About Viewport Configuration
export const aboutViewport = {
  once: true,
  amount: 0.2,
};

// About Transitions
export const aboutTransitions = {
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