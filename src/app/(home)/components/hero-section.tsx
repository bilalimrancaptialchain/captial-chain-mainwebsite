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
            src="/images/home/EnhancedOrb-Png.webp"
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
          
          <div className="flex flex-col items-center gap-6 relative z-20 px-5">
            <motion.h1
              className="hero-title max-w-5xl text-center text-3xl text-white font-semibold flex flex-col leading-[85%]"
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
          </div>
        </motion.div>

        <motion.div
          className="hero-content relative z-20 w-full px-5 pt-8 pb-8"
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
        >
          <Cards />
          
          {/* Buttons - Mobile Only, After Cards */}
          <div className="w-full flex flex-col gap-3 mt-8">
            <motion.button
              onClick={() => {
                const element = document.getElementById('pricing');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-gradient-to-r from-active to-green-500 text-white font-display font-medium px-8 py-3 rounded-lg hover:from-active/90 hover:to-green-500/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              Start Challenge
            </motion.button>
            
            <motion.a
              href="https://checkout.capitalchain.co/reward-signup-free-user/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-[#00E0E0] bg-transparent text-[#00E0E0] hover:bg-[#00E0E0] hover:text-black font-display font-medium px-8 py-3 rounded-lg transition-all duration-200 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
            >
              {t("header.claimFreeAccount")}
            </motion.a>
          </div>
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
            src="/images/home/EnhancedOrb-Png.webp"
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
