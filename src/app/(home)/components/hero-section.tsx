"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Cards from "./cards";
import { useLanguageContext } from "@/contexts/LanguageContext";
import {
  heroSectionVariants,
  heroOverlayVariants,
  heroTitleVariants,
  heroTitleSpanVariants,
  heroContentVariants,
} from "@/lib/animations/heroAnimations";

const HeroSection = () => {
  const { t } = useLanguageContext();

  return (
    <section className="hero-section w-full flex flex-col md:flex-col">
      {/* Mobile Layout */}
      <div className="md:hidden w-full">
        <motion.div
          className="hero-background w-full h-[300px] flex items-center justify-center z-20 relative overflow-hidden"
          variants={heroSectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/home/hero-image.webp"
            alt="Hero Background"
            fill
            priority
            className="hero-image object-contain object-top"
          />
          <motion.div
            className="hero-overlay absolute inset-0 bg-background opacity-40 z-10"
            variants={heroOverlayVariants}
            initial="hidden"
            animate="visible"
          />
          
          <motion.h1
            className="hero-title max-w-5xl text-center text-3xl text-white font-semibold flex flex-col leading-[85%] relative z-20 px-5"
            variants={heroTitleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="hero-title-part" variants={heroTitleSpanVariants}>
              {t("hero.title")}
            </motion.span>
            <motion.span className="text-active hero-title-highlight" variants={heroTitleSpanVariants}>
              {t("hero.titleHighlight")}
            </motion.span>
            <motion.span className="hero-title-part" variants={heroTitleSpanVariants}>
              {t("hero.titleEnd")}
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          className="hero-content relative z-20 w-full px-5 pt-8 pb-8"
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
        >
          <Cards />
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block w-full">
        <motion.div
          className="hero-background w-full h-screen lg:max-h-[700px] max-h-[300px] md:-translate-y-44 -translate-y-36 flex md:items-end items-center justify-center z-20 inset-0 relative overflow-hidden"
          variants={heroSectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/home/hero-image.webp"
            alt="Hero Background"
            fill
            priority
            className="hero-image object-contain object-top"
          />
          <motion.div
            className="hero-overlay absolute inset-0 bg-background opacity-40 z-10"
            variants={heroOverlayVariants}
            initial="hidden"
            animate="visible"
          />

          <motion.h1
            className="hero-title max-w-5xl text-center lg:text-[84px] sm:text-6xl text-3xl text-white font-semibold flex flex-col leading-[85%] relative z-20 px-5 lg:mb-12"
            variants={heroTitleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="hero-title-part" variants={heroTitleSpanVariants}>
              {t("hero.title")}
            </motion.span>
            <motion.span className="text-active hero-title-highlight" variants={heroTitleSpanVariants}>
              {t("hero.titleHighlight")}
            </motion.span>
            <motion.span className="hero-title-part" variants={heroTitleSpanVariants}>
              {t("hero.titleEnd")}
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          className="hero-content relative z-20 lg:-translate-y-20 sm:-translate-y-10 w-full px-5"
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
        >
          <Cards />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
