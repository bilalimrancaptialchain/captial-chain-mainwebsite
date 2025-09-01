import { Variants } from "framer-motion";

// Blog Page Section Variants
export const blogSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

// Search Input Variants
export const searchInputVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Blog Card Variants
export const blogCardVariants: Variants = {
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
      ease: "easeOut",
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

// Blog Card Image Variants
export const blogCardImageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
};

// Blog Card Content Variants
export const blogCardContentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      staggerChildren: 0.1,
    },
  },
};

// Blog Card Item Variants
export const blogCardItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

// Blog List Card Variants
export const blogListCardVariants: Variants = {
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    x: 8,
    scale: 1.02,
    boxShadow: "0px 15px 40px 0px rgba(0,224,224,0.2)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Blog List Card Image Variants
export const blogListCardImageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    x: -30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
};

// Blog List Card Content Variants
export const blogListCardContentVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      staggerChildren: 0.1,
    },
  },
};

// Featured Grid Variants
export const featuredGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

// Blog List Container Variants
export const blogListContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

// Pagination Variants
export const paginationVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      staggerChildren: 0.05,
    },
  },
};

// Pagination Button Variants
export const paginationButtonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    scale: 1.1,
    backgroundColor: "rgba(255,255,255,0.1)",
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Search Suggestions Variants
export const searchSuggestionsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

// Search Suggestion Item Variants
export const searchSuggestionItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    backgroundColor: "rgba(255,255,255,0.1)",
    x: 5,
    transition: {
      duration: 0.2,
    },
  },
};
