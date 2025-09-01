"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TermsContent from "@/components/TermsContent";
import { termsOfUseData } from "@/constants/termsOfUse";
import {
  termsHeroSectionVariants,
  termsBackgroundVariants,
  termsContainerVariants,
  termsViewport,
} from "@/lib/animations/termsAnimations";

export default function TermsOfUsePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <motion.div 
          className="min-h-screen relative"
          variants={termsHeroSectionVariants}
          initial="hidden"
          animate="visible"
          viewport={termsViewport}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/images/image_two.webp)",
            }}
            variants={termsBackgroundVariants}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(360deg, rgba(7, 19, 39, 0.75) 0%, #071327 81.87%)",
              }}
            ></div>
          </motion.div>

          <motion.div 
            className="relative z-10 container mx-auto px-4 pt-44 pb-12"
            variants={termsContainerVariants}
          >
            <TermsContent data={termsOfUseData} />
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
