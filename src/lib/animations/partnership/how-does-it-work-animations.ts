export const boxVariants = {
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
      delay: 0.2, // Will be overridden with index * 0.2
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0px 15px 40px 0px rgba(0,224,224,0.4)",
    transition: {
      duration: 0.3,
    },
  },
};

export const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.3, // Will be overridden with index * 0.2 + 0.3
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const connectorVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.4, // Will be overridden with index * 0.2 + 0.4
    },
  },
};

export const iconVariants = {
  hidden: { opacity: 0, rotate: -180 }, // Will be overridden with rotation - 180
  visible: {
    opacity: 1,
    rotate: 0, // Will be overridden with rotation
    transition: {
      duration: 0.6,
      delay: 0.6, // Will be overridden with index * 0.2 + 0.6
    },
  },
  hover: {
    scale: 1.2,
    filter: "drop-shadow(0 0 10px rgba(0,224,224,0.8))",
    transition: {
      duration: 0.3,
    },
  },
};

export const rowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

export const finalStepVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0px 20px 50px 0px rgba(81,211,222,0.5)",
    transition: {
      duration: 0.3,
    },
  },
};

export const finalContentVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const finalItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const imageVariants = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
    },
  },
};

export const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
  hover: {
    y: -4,
    scale: 1.05,
    boxShadow: "0px 15px 60px 0px rgba(0,224,224,0.6)",
    background: "linear-gradient(to right, #00F0F0, #008A8A)",
    transition: {
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
  },
};

export const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

export const titleVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.05,
    textShadow: "0 0 20px rgba(0,224,224,0.8)",
    transition: {
      duration: 0.3,
    },
  },
};

export const stepsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.4,
    },
  },
};