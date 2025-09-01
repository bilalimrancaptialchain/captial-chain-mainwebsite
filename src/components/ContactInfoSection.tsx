"use client";

import React from "react";

import { motion } from "framer-motion";
import { useLanguageContext } from "@/contexts/LanguageContext";
import {
  contactInfoSectionVariants,
  contactInfoCardVariants,
  contactInfoTextVariants,
  contactInfoButtonVariants,
  contactViewport,
} from "@/lib/animations/contactAnimations";

const ContactInfoSection = () => {
  const { t } = useLanguageContext();
  return (
    <motion.div
      className="bg-background py-16 px-4"
      variants={contactInfoSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={contactViewport}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="border-[0.5px] border-faq bg-[#041933] rounded-lg p-8 md:px-12"
          variants={contactInfoCardVariants}
          whileHover="hover"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-start">
              <motion.h2
                className="text-white text-2xl lg:text-3xl font-bold font-display mb-1"
                variants={contactInfoTextVariants}
              >
                {t("contact.emailTeam")}
              </motion.h2>
              <motion.p
                className="text-white/55 font-light text-lg font-display"
                variants={contactInfoTextVariants}
              >
                {t("contact.weAreHereToHelp")}
              </motion.p>
            </div>

            {/* Right Side - Button */}
            <div className="flex-shrink-0">
              <motion.button
                className="bg-gradient-to-b from-[#00E0E0] to-[#10B981] font-display cursor-pointer px-8 py-3 rounded-sm transition-all duration-200 text-lg xl:text-2xl shadow-lg hover:inset-shadow-button font-normal"
                variants={contactInfoButtonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                {t("contact.supportEmail")}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfoSection;
