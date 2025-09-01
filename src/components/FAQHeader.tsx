"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { faqHeaderVariants } from "@/lib/animations/faqAnimations";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function FAQHeader() {
  const { t } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="header-gradient fixed top-0 left-0 right-0 z-50 max-w-header mx-auto"
      initial="hidden"
      animate="visible"
      variants={faqHeaderVariants}
    >
      <div className="header-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full min-h-36">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center w-full">
            {/* Left side - Logo and FAQ title */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/logo.png"
                alt="Chapital Chain"
                width={120}
                height={40}
                loading="lazy"
                className="h-8 w-auto"
              />
              <h1 className="text-white text-xl font-semibold">
                {t("navigation.faq")}
              </h1>
            </motion.div>

            {/* Right side - Language Selector and Return Home button */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <LanguageSelector />
              <Button variant="trading" size="trading">
                <Link href="/">{t("common.returnToHome")}</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden justify-between items-center w-full">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/logo.png"
                alt="Chapital Chain"
                width={100}
                height={32}
                loading="lazy"
                className="h-6 w-auto"
              />
            </motion.div>

            {/* Hamburger Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.button
                  className="header-gradient p-2 backdrop-blur-sm"
                  aria-label="Open navigation menu"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Menu className="h-6 w-6 text-white" />
                </motion.button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-80 bg-black/90 backdrop-blur-xl border-white/10 px-4"
              >
                <SheetHeader>
                  <SheetTitle className="text-white text-left">
                    <Image
                      src="/images/logo.png"
                      alt="Chapital Chain"
                      width={120}
                      height={40}
                      loading="lazy"
                      className="h-8 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-8 space-y-6">
                  {/* FAQ Title */}
                  <div className="text-white text-xl font-semibold border-b border-white/10 pb-4">
                    {t("navigation.faq")}
                  </div>

                  {/* Language Selector */}
                  <div className="space-y-2">
                    <LanguageSelector />
                  </div>

                  {/* Return Home Button */}
                  <div className="pt-4">
                    <Button
                      variant="trading"
                      size="trading"
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/">{t("common.returnToHome")}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
