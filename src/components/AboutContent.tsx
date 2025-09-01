import React from "react";
import { motion } from "framer-motion";
import {
  aboutHeroContentVariants,
  aboutTitleVariants,
  aboutTextVariants,
  aboutViewport,
} from "@/lib/animations/aboutAnimations";

interface AboutContentProps {
  title: string;
  firstText: string;
  secondText: string;
  firstTextBoldParts?: string[];
  secondTextBoldParts?: string[];
}

const AboutContent: React.FC<AboutContentProps> = ({
  title,
  firstText,
  secondText,
  firstTextBoldParts = [],
  secondTextBoldParts = [],
}) => {
  const renderTextWithBold = (text: string, boldParts: string[]) => {
    if (boldParts.length === 0) {
      return text;
    }

    let result = text;
    boldParts.forEach((boldPart) => {
      const regex = new RegExp(
        `(${boldPart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "gi"
      );
      result = result.replace(regex, "<b>$1</b>");
    });

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <motion.div
      className="relative z-20 text-white text-center px-4"
      variants={aboutHeroContentVariants}
      initial="hidden"
      animate="visible"
      viewport={aboutViewport}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-normal mb-6 text-active font-display"
        variants={aboutTitleVariants}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl max-w-3xl mx-auto mb-4 font-light text-white/80"
        variants={aboutTextVariants}
      >
        {renderTextWithBold(firstText, firstTextBoldParts)}
      </motion.p>
      <motion.p
        className="text-lg md:text-xl max-w-3xl mx-auto font-light text-white/80"
        variants={aboutTextVariants}
      >
        {renderTextWithBold(secondText, secondTextBoldParts)}
      </motion.p>
    </motion.div>
  );
};

export default AboutContent;
