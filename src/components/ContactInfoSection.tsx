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
                {t("contact.getInTouch")}
              </motion.h2>
              <motion.p
                className="text-white/55 font-light text-lg font-display"
                variants={contactInfoTextVariants}
              >
                {t("contact.weAreHereToHelp")}
              </motion.p>
            </div>

            {/* Right Side - Contact Buttons */}
            <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-4">
              {/* Email Button */}
              <motion.button
                className="bg-gradient-to-b from-[#00E0E0] to-[#10B981] font-display cursor-pointer px-6 py-3 rounded-sm transition-all duration-200 text-base xl:text-lg shadow-lg hover:inset-shadow-button font-normal flex items-center gap-2"
                variants={contactInfoButtonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.41603 7.37596C6.07138 7.1462 5.60573 7.23933 5.37596 7.58397C5.1462 7.92862 5.23933 8.39427 5.58397 8.62404L6.41603 7.37596ZM18.416 8.62404C18.7607 8.39427 18.8538 7.92862 18.624 7.58397C18.3943 7.23933 17.9286 7.1462 17.584 7.37596L18.416 8.62404ZM6 3.75H18V2.25H6V3.75ZM21.25 7V17H22.75V7H21.25ZM18 20.25H6V21.75H18V20.25ZM2.75 17V7H1.25V17H2.75ZM6 20.25C4.20507 20.25 2.75 18.7949 2.75 17H1.25C1.25 19.6234 3.37665 21.75 6 21.75V20.25ZM21.25 17C21.25 18.7949 19.7949 20.25 18 20.25V21.75C20.6234 21.75 22.75 19.6234 22.75 17H21.25ZM18 3.75C19.7949 3.75 21.25 5.20507 21.25 7H22.75C22.75 4.37665 20.6234 2.25 18 2.25V3.75ZM6 2.25C3.37665 2.25 1.25 4.37665 1.25 7H2.75C2.75 5.20507 4.20507 3.75 6 3.75V2.25ZM5.58397 8.62404L9.36518 11.1448L10.1972 9.89676L6.41603 7.37596L5.58397 8.62404ZM14.6348 11.1448L18.416 8.62404L17.584 7.37596L13.8028 9.89676L14.6348 11.1448ZM9.36518 11.1448C10.9607 12.2085 13.0393 12.2085 14.6348 11.1448L13.8028 9.89676C12.7111 10.6245 11.2889 10.6245 10.1972 9.89676L9.36518 11.1448Z"
                    fill="black"
                  />
                </svg>
                <span className="text-black font-semibold" style={{ color: 'black' }}>{t("contact.emailUs")}</span>
              </motion.button>
              
              {/* Phone Button */}
              <motion.button
                className="bg-gradient-to-b from-[#00E0E0] to-[#10B981] font-display cursor-pointer px-6 py-3 rounded-sm transition-all duration-200 text-base xl:text-lg shadow-lg hover:inset-shadow-button font-normal flex items-center gap-2"
                variants={contactInfoButtonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                    fill="black"
                  />
                </svg>
                <span className="text-black font-semibold" style={{ color: 'black' }}>{t("contact.callUs")}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfoSection;
