import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  aboutImageSectionVariants,
  aboutImageVariants,
  aboutImageContentVariants,
  aboutTitleVariants,
  aboutTextVariants,
  aboutViewport,
} from "@/lib/animations/aboutAnimations";

interface ImageSectionProps {
  imageSrc: string;
  imageAlt: string;
  greenText: string;
  whiteText: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  imageSrc,
  imageAlt,
  greenText,
  whiteText,
}) => {
  return (
    <motion.div
      className="image-section relative"
      variants={aboutImageSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={aboutViewport}
    >
      {/* Background Section */}
      <div
        className="image-section-background w-full min-h-96 relative pb-12"
        style={{ backgroundColor: "#000F1E" }}
      >
        {/* Image positioned to overlap between backgrounds */}
        <motion.div
          className="image-section-image-container absolute -top-40 md:-top-60 left-1/2 transform -translate-x-1/2 z-20"
          variants={aboutImageVariants}
        >
          <div className="image-section-image-wrapper relative max-w-[1000px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1000}
              height={1000}
              loading="lazy"
              className="image-section-image rounded-lg shadow-lg w-full h-full min-w-[350px] md:min-h-[800px] min-h-[350px] md:min-w-[800px]"
            />
          </div>
        </motion.div>

        {/* Content below image */}
        <motion.div
          className="image-section-content flex flex-col items-start justify-center h-full pt-40 md:pt-96 lg:pt-[500px] px-4 max-w-xl mx-auto"
          variants={aboutImageContentVariants}
        >
          <motion.h2
            className="image-section-title text-active font-display text-2xl md:text-3xl font-normal mb-4"
            variants={aboutTitleVariants}
          >
            {greenText}
          </motion.h2>
          <motion.p
            className="image-section-description text-white/80 text-lg md:text-xl max-w-xl leading-relaxed font-light"
            variants={aboutTextVariants}
          >
            {whiteText}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ImageSection;
