"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import ContactInfoSection from "@/components/ContactInfoSection";
import ContactAccordion from "@/components/ContactAccordion";
import {
  contactSectionVariants,
  contactHeroSectionVariants,
  contactViewport,
} from "@/lib/animations/contactAnimations";

export default function ContactUs() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pb-12">
        {/* Hero Section */}
        <motion.div 
          className="min-h-[70vh] relative"
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
          {/* Map Section */}
          <MapSection />
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
        {/* Contact Accordion */}
        <motion.div
          variants={contactSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={contactViewport}
        >
          <ContactAccordion />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
