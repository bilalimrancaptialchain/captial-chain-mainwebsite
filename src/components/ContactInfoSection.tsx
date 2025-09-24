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
                <span className="text-black font-semibold">{t("contact.emailUs")}</span>
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
                    d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.271 2.07999 4.18C2.055 3.90347 2.08788 3.62476 2.17649 3.36162C2.2651 3.09849 2.40756 2.85669 2.59476 2.65162C2.78196 2.44655 3.0099 2.28271 3.26388 2.17052C3.51786 2.05833 3.79266 2.00026 4.06999 2H7.06999C7.57099 1.99522 8.05811 2.16708 8.44499 2.49C8.80373 2.787 9.07013 3.17136 9.21999 3.6C9.43099 4.24 9.55099 4.91 9.57999 5.59C9.59099 5.86 9.56099 6.13 9.48999 6.39C9.42099 6.64 9.31099 6.88 9.15999 7.09L7.99999 8.25C9.21999 10.48 11.02 12.29 13.25 13.51L14.41 12.35C14.62 12.2 14.86 12.09 15.11 12.02C15.37 11.95 15.64 11.92 15.91 11.93C16.59 11.96 17.26 12.08 17.9 12.29C18.32 12.44 18.7 12.7 19 13.05C19.32 13.44 19.49 13.92 19.5 14.42V17.42C19.5 17.7 19.45 17.98 19.35 18.25C19.25 18.52 19.1 18.77 18.91 18.99C18.72 19.21 18.49 19.39 18.24 19.53C17.99 19.67 17.72 19.76 17.44 19.81C17.16 19.86 16.88 19.86 16.6 19.81C16.32 19.76 16.05 19.67 15.8 19.53C15.55 19.39 15.32 19.21 15.13 18.99C14.94 18.77 14.79 18.52 14.69 18.25C14.59 17.98 14.54 17.7 14.54 17.42V16.92H22Z"
                    fill="black"
                  />
                </svg>
                <span className="text-black font-semibold">{t("contact.callUs")}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfoSection;
