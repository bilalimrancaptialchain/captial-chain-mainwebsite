"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import {
  contactSectionVariants,
  contactHeroSectionVariants,
  contactViewport,
} from "@/lib/animations/contactAnimations";

export default function ContactUs() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pb-12 pt-24 md:pt-28">
        {/* Hero Section */}
        <motion.div 
          className="min-h-[30vh] relative"
          variants={contactHeroSectionVariants}
          initial="hidden"
          animate="visible"
          viewport={contactViewport}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/image_three.webp')",
            }}
          ></div>

          {/* Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(360deg, rgba(7, 19, 39, 0.75) 0%, #071327 81.87%)",
            }}
          ></div>
          
          {/* Hero Content */}
          <div className="relative z-20 flex items-center justify-center min-h-[30vh]">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white font-display mb-3">
                Contact Us
              </h1>
              <p className="text-lg text-white/80 font-display">
                Get in touch with our team
              </p>
            </div>
          </div>
        </motion.div>
        {/* Contact Info Section */}
        <motion.div
          variants={contactSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={contactViewport}
        >
          <ContactInfoSection />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
