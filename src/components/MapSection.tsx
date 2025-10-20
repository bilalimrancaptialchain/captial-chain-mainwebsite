"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLanguageContext } from "@/contexts/LanguageContext";
import {
  contactMapSectionVariants,
  contactMapContentVariants,
  contactMapTitleVariants,
  contactMapBottomVariants,
  contactMapButtonVariants,
  contactViewport,
} from "@/lib/animations/contactAnimations";

const MapSection: React.FC = () => {
  const { t } = useLanguageContext();
  const handleViewOnMap = () => {
    const address = "Opal Tower, Bussiness Bay, Dubai";
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <motion.div 
      className="relative rounded-4xl max-w-7xl mx-auto z-30 mt-15"
      variants={contactMapSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={contactViewport}
    >
      {/* Map Image */}
      <div
        className="relative h-[600px] bg-cover bg-center bg-no-repeat rounded-4xl"
        style={{
          backgroundImage: "url('/images/location.webp')",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 rounded-4xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(23, 32, 45, 0) 50%, #17202D 98.3%)",
          }}
        ></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-12">
          {/* Top Left Text */}
          <motion.div 
            className="text-white font-display text-3xl font-bold max-w-md"
            variants={contactMapTitleVariants}
          >
            {t("contact.location.title")}
          </motion.div>

          {/* Bottom Content */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start gap-y-6 sm:items-end justify-between w-full"
            variants={contactMapBottomVariants}
          >
            {/* Location Info */}
            <motion.div 
              className="flex items-center space-x-4 text-white flex-1"
              variants={contactMapContentVariants}
            >
              <MapPin className="w-6 h-6 text-white" />
              <div className="w-full">
                <p className="text-lg font-semibold font-display">
                  {t("contact.location.address")}
                </p>
              </div>
            </motion.div>

            {/* View on Map Button */}
            <motion.button
              onClick={handleViewOnMap}
              className="border border-white text-white py-1 px-4 rounded-full font-display cursor-pointer font-medium transition-colors duration-200"
              variants={contactMapButtonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              {t("contact.location.viewOnMap")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MapSection;
