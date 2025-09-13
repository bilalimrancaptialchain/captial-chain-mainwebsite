"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useLanguageContext } from "@/contexts/LanguageContext";
import {
  missionSectionVariants,
  missionContentVariants,
  missionTitleVariants,
  missionButtonVariants,
  missionDescriptionVariants,
  missionHighlightVariants,
  missionViewport,
  missionTransitions,
} from "@/lib/animations/missionAnimations";
import { cn } from "@/lib/utils";

const OurMission = () => {
  const { t, language } = useLanguageContext();
  const isRTL = language === "fa";

  return (
    <motion.section
      className="mission-section w-full min-h-[712px] bg-midnight flex items-center justify-center relative py-16 md:py-20"
      variants={missionSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={missionViewport}
    >
      <div className="mission-container w-full max-w-[1536px] mx-auto px-4 md:px-8 lg:px-20">
        <div className="mission-content-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            className={cn(
              "mission-text-content flex flex-col gap-6",
              isRTL ? "lg:order-2 text-right" : "lg:order-1 text-left"
            )}
            variants={missionContentVariants}
          >
            <motion.p
              className="mission-title text-white md:text-4xl sm:text-3xl text-2xl font-semibold leading-tight"
              variants={missionTitleVariants}
            >
              {t("mission.title")}{" "}
              <motion.span
                className="mission-title-highlight text-active"
                variants={missionHighlightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={missionTransitions.highlight1}
              >
                {t("mission.titleHighlight1")}
              </motion.span>{" "}
              {t("mission.titleMiddle")}{" "}
              <motion.span
                className="mission-title-highlight text-active"
                variants={missionHighlightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={missionTransitions.highlight2}
              >
                {t("mission.titleHighlight2")}
              </motion.span>
              .
            </motion.p>

            <motion.p
              className="mission-description text-white/80 md:text-lg text-base leading-relaxed"
              variants={missionDescriptionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t("mission.description")}
            </motion.p>

            <motion.div
              variants={missionButtonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="mission-button-wrapper mt-4"
            >
              <Link
                href="/"
                className="mission-button inline-block md:text-base text-sm text-black font-medium bg-active px-7 py-2.5 rounded-lg hover:inset-shadow-button-home duration-200 relative overflow-hidden hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] transition-all"
              >
                {t("mission.learnMoreButton")}
              </Link>
            </motion.div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className={cn(
              "mission-video-container relative w-[80%] mx-auto sm:w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden",
              isRTL ? "lg:order-1" : "lg:order-2"
            )}
            variants={missionContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="mission-video w-full h-full object-cover"
              onError={(e) => console.error("Video failed to load:", e)}
            >
              <source src="/videos/Animate02.mp4" type="video/mp4" />
            </video>
            {/* Optional overlay for better video visibility */}
            <div className="mission-video-overlay absolute inset-0 bg-black/10 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurMission;
