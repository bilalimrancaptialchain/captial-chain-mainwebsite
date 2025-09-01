export const rankCardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2, // Will be overridden with index * 0.2
    },
  },
  hover: {
    scale: 1.08,
    y: -8,
    filter: "brightness(1.2)",
    transition: {
      duration: 0.2,
    },
  },
};

export const rankImageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 6,
    transition: {
      duration: 0.4,
      delay: 0.3, // Will be overridden with index * 0.2 + 0.3
    },
  },
  hover: {
    scale: 1.08,
    y: 0,
    filter: "drop-shadow(0 0 25px rgba(0,224,224,0.6))",
    transition: {
      duration: 0.2,
    },
  },
};

export const rankTextVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.5, // Will be overridden with index * 0.2 + 0.5
    },
  },
};

export const featureCardVariants = {
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
      duration: 0.4,
      delay: 0.15, // Will be overridden with index * 0.15
    },
  },
  hover: {
    scale: 1.03,
    y: -3,
    background:
      "linear-gradient(135deg, rgba(0,224,224,0.1) 0%, rgba(8,101,101,0.1) 100%)",
    borderColor: "rgba(0,224,224,0.6)",
    boxShadow: "0 10px 30px rgba(0,224,224,0.2)",
    transition: {
      duration: 0.2,
    },
  },
};

export const featureContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.2, // Will be overridden with index * 0.15 + 0.2
      staggerChildren: 0.05,
    },
  },
};

export const featureItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
    },
  },
};

export const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};