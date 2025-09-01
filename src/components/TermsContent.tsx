"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TermsOfUseItem } from "@/constants/termsOfUse";
import { useLanguageContext } from "@/contexts/LanguageContext";
import {
  termsLeftPanelVariants,
  termsRightPanelVariants,
  termsListItemVariants,
  termsContentVariants,
  termsTitleVariants,
  termsTextVariants,
  termsNumberBadgeVariants,
  termsViewport,
} from "@/lib/animations/termsAnimations";

interface TermsContentProps {
  data: TermsOfUseItem[];
}

export default function TermsContent({ data }: TermsContentProps) {
  const { t } = useLanguageContext();
  const [activeItem, setActiveItem] = useState<number>(1);

  const activeContent = data.find((item) => item.id === activeItem);

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
      {/* Left Section - Terms List */}
      <motion.div 
        className="bg-terms-background rounded-lg border-[0.5px] border-faq p-9 px-4 w-fit"
        variants={termsLeftPanelVariants}
        initial="hidden"
        whileInView="visible"
        viewport={termsViewport}
        whileHover="hover"
      >
        <div>
          {data.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 cursor-pointer border ${
                activeItem === item.id
                  ? "border-[#00e0e0] text-[#00e0e0] bg-[#00e0e0]/10"
                  : "text-white hover:border-[#00e0e0]/50 border-transparent"
              }`}
              variants={termsListItemVariants}
              whileHover="hover"
              whileTap="tap"
              animate={activeItem === item.id ? "active" : "inactive"}
              custom={index}
            >
              <div className="flex items-center gap-3 w-full">
                <motion.span
                  className={`rounded-full flex items-center justify-center text-sm font-bold`}
                  variants={termsNumberBadgeVariants}
                >
                  {item.id} .
                </motion.span>
                <span className="font-medium">{t(item.titleKey)}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Right Section - Content Display */}
      <motion.div 
        className="bg-terms-background rounded-lg border-[0.5px] border-faq p-9 h-fit min-h-96 flex items-start flex-col justify-center"
        variants={termsRightPanelVariants}
        initial="hidden"
        whileInView="visible"
        viewport={termsViewport}
        whileHover="hover"
      >
        <AnimatePresence mode="wait">
          {activeContent && (
            <motion.div
              key={activeContent.id}
              variants={termsContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div 
                className="flex items-center gap-3 mb-3"
                variants={termsTitleVariants}
              >
                <motion.span 
                  className="flex items-center justify-center text-2xl font-bold text-active"
                  variants={termsNumberBadgeVariants}
                >
                  {activeContent.id} .
                </motion.span>
                <h3 className="text-2xl font-bold text-active">
                  {t(activeContent.titleKey)}
                </h3>
              </motion.div>
              <motion.div 
                className="prose prose-invert max-w-none"
                variants={termsTextVariants}
              >
                <p className="text-white/80 leading-relaxed text-lg">
                  {t(activeContent.contentKey)}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
