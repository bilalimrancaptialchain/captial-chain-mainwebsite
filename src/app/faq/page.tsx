"use client";
import React from "react";
import { motion } from "framer-motion";
import TextWithGradientLine from "@/components/TextWithGradientLine";
import SearchInput from "@/components/SearchInput";
import MostViewedArticles from "@/components/MostViewedArticles";
import FAQCategories from "@/components/FAQCategories";
import ContactForm from "@/components/ContactForm";
import FAQHeader from "@/components/FAQHeader";
import {
  faqSectionVariants,
  faqContainerVariants,
  faqSearchSectionVariants,
  faqContactSectionVariants,
  faqTextGradientVariants,
  faqViewport,
} from "@/lib/animations/faqAnimations";

export default function page() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={faqSectionVariants}
    >
      <FAQHeader />
      <motion.div
        className="min-h-screen pt-32 max-w-7xl mx-auto px-8 md:px-20 pb-12"
        variants={faqContainerVariants}
        viewport={faqViewport}
      >
        <div className="space-y-15">
          <motion.div variants={faqTextGradientVariants}>
            <TextWithGradientLine textKey="common.searchYourQuestion" />
          </motion.div>
          <motion.div variants={faqSearchSectionVariants}>
            <SearchInput />
          </motion.div>
          <motion.div variants={faqTextGradientVariants}>
            <TextWithGradientLine textKey="common.findAmongFAQ" />
          </motion.div>
          <MostViewedArticles />
          <FAQCategories />
          <motion.div variants={faqTextGradientVariants}>
            <TextWithGradientLine textKey="common.contactCustomerService" />
          </motion.div>
          <motion.div variants={faqContactSectionVariants}>
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
