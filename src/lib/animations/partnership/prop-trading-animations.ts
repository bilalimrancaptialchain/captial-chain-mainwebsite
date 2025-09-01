export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const floatingVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    rotateX: 0,
    rotateY: 0,
    z: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 15,
    rotateY: -10,
    z: 50,
    transition: {
      duration: 0.8,
    },
  },
  floating: {
    y: [-8, 8, -8],
    rotateX: [15, 18, 15],
    rotateY: [-10, -7, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
  hover: {
    scale: 1.03,
    rotateX: 18,
    rotateY: -12,
    z: 60,
    transition: {
      duration: 0.2,
    },
  },
};

export const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 0 25px rgba(0, 224, 224, 0.6)",
    transition: {
      duration: 0.2,
    },
  },
};