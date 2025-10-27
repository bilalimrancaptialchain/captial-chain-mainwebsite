"use client";

import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useLanguageContext } from "@/contexts/LanguageContext";
// Declare optional Twitter pixel on Window to avoid 'any'
declare global {
  interface Window {
    twq?: (action: string, event: string, data?: Record<string, unknown>) => void;
  }
}
// Map temporarily disabled
// import MapSection from "@/components/MapSection";
import {
  contactInfoSectionVariants,
  contactInfoCardVariants,
  contactFormFieldVariants,
  contactFormInputVariants,
  contactFormSubmitVariants,
  contactViewport,
} from "@/lib/animations/contactAnimations";

const ContactInfoSection = () => {
  const { t } = useLanguageContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    topic: "",
    message: "",
    hp: "", // honeypot
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const options = {
        method: 'POST',
        url: 'https://checkout.capitalchain.co/wp-json/forminator-extc9f96fb7/v1/submitc9f96fb7/156',
        headers: {
          cookie: 'nfd-enable-cf-opt=63a6825d27cab0f204d3b602',
          'Content-Type': 'application/json',
          'X-Forminator-Secret': 'c9f96fb7-ba0c-4adb-83d6-253fce515fba',
          'Accept': 'application/json'
        },
        data: {
          'name-1': formData.name,
          'email-1': formData.email,
          'text-1': formData.topic,
          'textarea-1': formData.message
        }
      } as const;

      const response = await axios.request(options);
      console.log('Form submitted successfully:', response.data);
      
      // Twitter conversion tracking for contact form submission
      if (typeof window !== 'undefined' && window.twq) {
        window.twq('event', 'tw-qc22r-qc22s', {});
      }
      
      setSubmitStatus('success');
      setFormData({
        email: "",
        name: "",
        topic: "",
        message: "",
        hp: "",
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
      ],
      clickable: false
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
        </svg>
      ),
      title: "Physical Address",
      content: [
        "Opal Tower, Bussiness Bay, Dubai"
      ],
      clickable: false
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM20 6L12 11L4 6H20ZM4 18H20V8L12 13L4 8V18Z" fill="white"/>
        </svg>
      ),
      title: "Mail Us",
      content: ["info@capitalchain.co"],
      clickable: true,
      href: "mailto:info@capitalchain.co"
    }
  ];

  return (
    <motion.div
      className="bg-[#071327] py-16 px-4 section-contact-info"
      variants={contactInfoSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={contactViewport}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 section-contact-tiles">
          {contactItems.map((item, index) => {
            const content = (
              <motion.div
                key={index}
                className={`flex items-start space-x-4 ${item.clickable ? 'cursor-pointer hover:bg-[#00E0E0]/10 rounded-lg p-2 -m-2 transition-all duration-200' : ''}`}
                variants={contactInfoCardVariants}
                whileHover={item.clickable ? "hover" : undefined}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#00E0E0] rounded-full flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[#00E0E0] font-display font-bold text-lg mb-2">
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
            );

            return item.clickable && item.href ? (
              <a
                key={index}
                href={item.href}
                className="block"
                target={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
              >
                {content}
              </a>
            ) : content;
          })}
        </div>

        {/* Map Section temporarily hidden */}

        {/* Contact Form Section */}
        <motion.div
          className="mt-16 section-contact-form"
          variants={contactInfoSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={contactViewport}
        >
          <div className="border-[0.5px] border-[#00E0E0] bg-[#041933] rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-white text-2xl lg:text-3xl font-bold font-display mb-2">
                {t("contact.sendMessage")}
              </h2>
              <p className="text-white/55 font-light text-lg font-display">
                {t("contact.fillFormBelow")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="pt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Form Fields */}
                <div className="space-y-6">
                  {/* Email Input */}
                  <motion.div
                    className="relative"
                    variants={contactFormFieldVariants}
                  >
                    <label className="block text-white text-sm font-medium mb-2">
                      {t("contact.form.emailAddress")}
                    </label>
                    <div className="relative">
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute start-3 top-1/2 transform -translate-y-1/2"
                      >
                        <g opacity="0.54">
                          <path
                            d="M8.61831 9.77283C8.18238 9.48222 7.59339 9.60001 7.30277 10.0359C7.01215 10.4719 7.12995 11.0609 7.56587 11.3515L8.61831 9.77283ZM23.7967 11.3515C24.2327 11.0609 24.3504 10.4719 24.0597 10.0359C23.7692 9.60001 23.1802 9.48222 22.7443 9.77283L23.7967 11.3515ZM8.09209 5.18648H23.2705V3.28918H8.09209V5.18648ZM27.3813 9.29729V21.9459H29.2786V9.29729H27.3813ZM23.2705 26.0568H8.09209V27.954H23.2705V26.0568ZM3.98128 21.9459V9.29729H2.08398V21.9459H3.98128ZM8.09209 26.0568C5.82175 26.0568 3.98128 24.2162 3.98128 21.9459H2.08398C2.08398 25.2642 4.77391 27.954 8.09209 27.954V26.0568ZM27.3813 21.9459C27.3813 24.2162 25.5408 26.0568 23.2705 26.0568V27.954C26.5887 27.954 29.2786 25.2642 29.2786 21.9459H27.3813ZM23.2705 5.18648C25.5408 5.18648 27.3813 7.02695 27.3813 9.29729H29.2786C29.2786 5.97911 26.5887 3.28918 23.2705 3.28918V5.18648ZM8.09209 3.28918C4.77391 3.28918 2.08398 5.97911 2.08398 9.29729H3.98128C3.98128 7.02695 5.82175 5.18648 8.09209 5.18648V3.28918ZM7.56587 11.3515L12.3486 14.5399L13.401 12.9613L8.61831 9.77283L7.56587 11.3515ZM19.0139 14.5399L23.7967 11.3515L22.7443 9.77283L17.9616 12.9613L19.0139 14.5399ZM12.3486 14.5399C14.3667 15.8853 16.9959 15.8853 19.0139 14.5399L17.9616 12.9613C16.5807 13.8818 14.7818 13.8818 13.401 12.9613L12.3486 14.5399Z"
                            fill="#00E0E0"
                          />
                        </g>
                      </svg>

                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full ps-14 pe-4 py-3 bg-[#022143] font-display border-[0.5px] border-[#00E0E0] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00E0E0] transition-colors"
                        placeholder={t("contact.form.emailPlaceholder")}
                        variants={contactFormInputVariants}
                        whileFocus="focus"
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Name and Topic Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <motion.div
                      className="relative"
                      variants={contactFormFieldVariants}
                    >
                      <label className="block text-white text-sm font-medium mb-2">
                        {t("contact.form.fullName")}
                      </label>
                      <div className="relative">
                        <svg
                          width="32"
                          height="31"
                          viewBox="0 0 32 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute start-3 top-1/2 transform -translate-y-1/2"
                        >
                          <g opacity="0.54">
                            <path
                              d="M15.9459 27.0757C20.8358 27.0757 24.7999 25.0937 24.7999 22.6487C24.7999 20.2037 20.8358 18.2217 15.9459 18.2217C11.0559 18.2217 7.0918 20.2037 7.0918 22.6487C7.0918 25.0937 11.0559 27.0757 15.9459 27.0757Z"
                              stroke="#00E0E0"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.9462 14.427C18.7404 14.427 21.0056 12.1618 21.0056 9.36756C21.0056 6.5733 18.7404 4.30811 15.9462 4.30811C13.1519 4.30811 10.8867 6.5733 10.8867 9.36756C10.8867 12.1618 13.1519 14.427 15.9462 14.427Z"
                              stroke="#00E0E0"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>

                        <motion.input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full ps-12 pe-4 py-3 bg-[#022143] font-display border-[0.5px] border-[#00E0E0] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00E0E0] transition-colors"
                          placeholder={t("contact.form.namePlaceholder")}
                          variants={contactFormInputVariants}
                          whileFocus="focus"
                          required
                        />
                      </div>
                    </motion.div>

                    {/* Topic Input */}
                    <motion.div
                      className="relative"
                      variants={contactFormFieldVariants}
                    >
                      <label className="block text-white text-sm font-medium mb-2">
                        {t("contact.form.topic")}
                      </label>
                      <div className="relative">
                        <svg
                          width="32"
                          height="31"
                          viewBox="0 0 32 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute start-3 top-1/2 transform -translate-y-1/2"
                        >
                          <path
                            opacity="0.5"
                            d="M12.2216 12.2135C11.6977 12.2135 11.273 12.6383 11.273 13.1622C11.273 13.6861 11.6977 14.1108 12.2216 14.1108V12.2135ZM16.0162 14.1108C16.5401 14.1108 16.9649 13.6861 16.9649 13.1622C16.9649 12.6383 16.5401 12.2135 16.0162 12.2135V14.1108ZM12.2216 7.15406C11.6977 7.15406 11.273 7.57879 11.273 8.10271C11.273 8.62663 11.6977 9.05136 12.2216 9.05136V7.15406ZM19.8108 9.05136C20.3347 9.05136 20.7595 8.62663 20.7595 8.10271C20.7595 7.57879 20.3347 7.15406 19.8108 7.15406V9.05136ZM27.7162 20.7514V24.546H29.6135V20.7514H27.7162ZM24.8703 27.3919H7.16219V29.2892H24.8703V27.3919ZM4.31624 24.546V20.7514H2.41895V24.546H4.31624ZM7.16219 17.9054H8.42705V16.0081H7.16219V17.9054ZM9.69192 18.5378L11.2098 20.5616L12.7276 19.4233L11.2098 17.3995L9.69192 18.5378ZM23.6054 17.9054H24.8703V16.0081H23.6054V17.9054ZM20.8227 20.5616L22.3406 18.5378L20.8227 17.3995L19.3049 19.4233L20.8227 20.5616ZM16.0162 22.9649C17.9073 22.9649 19.688 22.0745 20.8227 20.5616L19.3049 19.4233C18.5285 20.4584 17.3102 21.0676 16.0162 21.0676V22.9649ZM23.6054 16.0081C22.5106 16.0081 21.4797 16.5236 20.8227 17.3995L22.3406 18.5378C22.6392 18.1397 23.1078 17.9054 23.6054 17.9054V16.0081ZM11.2098 20.5616C12.3444 22.0745 14.1251 22.9649 16.0162 22.9649V21.0676C14.7223 21.0676 13.504 20.4584 12.7276 19.4233L11.2098 20.5616ZM8.42705 17.9054C8.92471 17.9054 9.39332 18.1397 9.69192 18.5378L11.2098 17.3995C10.5528 16.5236 9.52189 16.0081 8.42705 16.0081V17.9054ZM7.16219 27.3919C5.59042 27.3919 4.31624 26.1177 4.31624 24.546H2.41895C2.41895 27.1656 4.54256 29.2892 7.16219 29.2892V27.3919ZM27.7162 24.546C27.7162 26.1177 26.442 27.3919 24.8703 27.3919V29.2892C27.49 29.2892 29.6135 27.1656 29.6135 24.546H27.7162ZM29.6135 20.7514C29.6135 18.1317 27.49 16.0081 24.8703 16.0081V17.9054C26.442 17.9054 27.7162 19.1796 27.7162 20.7514H29.6135ZM4.31624 20.7514C4.31624 19.1796 5.59042 17.9054 7.16219 17.9054V16.0081C4.54256 16.0081 2.41895 18.1317 2.41895 20.7514H4.31624ZM27.0838 16.9568V8.10271H25.1865V16.9568H27.0838ZM21.0757 2.0946H10.9568V3.9919H21.0757V2.0946ZM4.94867 8.10271V16.9568H6.84597V8.10271H4.94867ZM10.9568 2.0946C7.6386 2.0946 4.94867 4.78453 4.94867 8.10271H6.84597C6.84597 5.83237 8.68644 3.9919 10.9568 3.9919V2.0946ZM27.0838 8.10271C27.0838 4.78453 24.3939 2.0946 21.0757 2.0946V3.9919C23.346 3.9919 25.1865 5.83237 25.1865 8.10271H27.0838ZM12.2216 14.1108H16.0162V12.2135H12.2216V14.1108ZM12.2216 9.05136H19.8108V7.15406H12.2216V9.05136Z"
                            fill="#00E0E0"
                          />
                        </svg>

                        <motion.input
                          type="text"
                          name="topic"
                          value={formData.topic}
                          onChange={handleInputChange}
                          className="w-full ps-12 pe-4 py-3 bg-[#022143] font-display border-[0.5px] border-[#00E0E0] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00E0E0] transition-colors"
                          placeholder={t("contact.form.topicPlaceholder")}
                          variants={contactFormInputVariants}
                          whileFocus="focus"
                          required
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Submit Button - Hidden on mobile, shown on desktop */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`hidden lg:block font-display px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg flex-1 w-full text-white ${
                      isSubmitting 
                        ? 'bg-gray-500 cursor-not-allowed' 
                        : submitStatus === 'success' 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : submitStatus === 'error' 
                            ? 'bg-red-600 hover:bg-red-700' 
                            : 'bg-gradient-to-b from-[#00E0E0] to-[#10B981] cursor-pointer'
                    }`}
                    variants={contactFormSubmitVariants}
                    whileHover={!isSubmitting ? "hover" : undefined}
                    whileTap={!isSubmitting ? "tap" : undefined}
                  >
                    {isSubmitting 
                      ? t("contact.form.submitting") || "Submitting..." 
                      : submitStatus === 'success' 
                        ? t("contact.form.success") || "✓ Sent Successfully!" 
                        : submitStatus === 'error' 
                          ? t("contact.form.error") || "✗ Failed to Send" 
                          : t("contact.form.submit")
                    }
                  </motion.button>
                </div>

                {/* Right Side - Message Textarea */}
                <motion.div variants={contactFormFieldVariants}>
                  <label className="block text-white text-sm font-medium mb-2">
                    {t("contact.form.message")}
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={8}
                    className="w-full p-4 bg-[#022143] font-display border-[0.5px] border-[#00E0E0] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00E0E0] transition-colors resize-none"
                    placeholder={t("contact.form.messagePlaceholder")}
                    variants={contactFormInputVariants}
                    whileFocus="focus"
                    required
                  />
                  
                  {/* Mobile Submit Button - Shown on mobile, hidden on desktop */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`block lg:hidden font-display px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg w-full text-white mt-4 ${
                      isSubmitting 
                        ? 'bg-gray-500 cursor-not-allowed' 
                        : submitStatus === 'success' 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : submitStatus === 'error' 
                            ? 'bg-red-600 hover:bg-red-700' 
                            : 'bg-gradient-to-b from-[#00E0E0] to-[#10B981] cursor-pointer'
                    }`}
                    variants={contactFormSubmitVariants}
                    whileHover={!isSubmitting ? "hover" : undefined}
                    whileTap={!isSubmitting ? "tap" : undefined}
                  >
                    {isSubmitting 
                      ? t("contact.form.submitting") || "Submitting..." 
                      : submitStatus === 'success' 
                        ? t("contact.form.success") || "✓ Sent Successfully!" 
                        : submitStatus === 'error' 
                          ? t("contact.form.error") || "✗ Failed to Send" 
                          : t("contact.form.submit")
                    }
                  </motion.button>
                </motion.div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfoSection;
