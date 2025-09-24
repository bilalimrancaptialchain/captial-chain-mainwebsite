"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguageContext } from "@/contexts/LanguageContext";
import {
  contactInfoSectionVariants,
  contactInfoCardVariants,
  contactViewport,
} from "@/lib/animations/contactAnimations";

const ContactInfoSection = () => {
  const { t } = useLanguageContext();
  
  const contactItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
        </svg>
      ),
      title: "Registered Address",
      content: [
        "01, Ground Floor, Rodney Court Building,",
        "Rodney Bay, Gros-Islet, St Lucia"
      ]
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
        </svg>
      ),
      title: "Physical Address",
      content: [
        "01, Ground Floor, Rodney Court Building,",
        "Rodney Bay, Gros-Islet, St. Lucia"
      ]
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C21.1 19 22 18.1 22 17V7C22 5.9 21.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z" fill="white"/>
        </svg>
      ),
      title: "Mail Us",
      content: ["info@capitalchain.com"]
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" fill="white"/>
        </svg>
      ),
      title: "Call Us",
      content: ["+94 78 135 2833"]
    }
  ];

  return (
    <motion.div
      className="bg-[#071327] py-16 px-4"
      variants={contactInfoSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={contactViewport}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              variants={contactInfoCardVariants}
              whileHover="hover"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-[#D4AF37] font-display font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <div className="space-y-1">
                  {item.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-white font-display text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfoSection;
