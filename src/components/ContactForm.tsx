"use client";
import React from "react";
import { socialLinks } from "../constants/footer";
import { Button } from "./ui/button";
import { useLanguageContext } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguageContext();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
      {/* Left Side - Contact Form */}
      <div className="space-y-6">
        {/* Email Input */}
        <div className="relative">
          <div className="absolute start-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.54">
                <path
                  d="M6.41603 7.37596C6.07138 7.1462 5.60573 7.23933 5.37596 7.58397C5.1462 7.92862 5.23933 8.39427 5.58397 8.62404L6.41603 7.37596ZM18.416 8.62404C18.7607 8.39427 18.8538 7.92862 18.624 7.58397C18.3943 7.23933 17.9286 7.1462 17.584 7.37596L18.416 8.62404ZM6 3.75H18V2.25H6V3.75ZM21.25 7V17H22.75V7H21.25ZM18 20.25H6V21.75H18V20.25ZM2.75 17V7H1.25V17H2.75ZM6 20.25C4.20507 20.25 2.75 18.7949 2.75 17H1.25C1.25 19.6234 3.37665 21.75 6 21.75V20.25ZM21.25 17C21.25 18.7949 19.7949 20.25 18 20.25V21.75C20.6234 21.75 22.75 19.6234 22.75 17H21.25ZM18 3.75C19.7949 3.75 21.25 5.20507 21.25 7H22.75C22.75 4.37665 20.6234 2.25 18 2.25V3.75ZM6 2.25C3.37665 2.25 1.25 4.37665 1.25 7H2.75C2.75 5.20507 4.20507 3.75 6 3.75V2.25ZM5.58397 8.62404L9.36518 11.1448L10.1972 9.89676L6.41603 7.37596L5.58397 8.62404ZM14.6348 11.1448L18.416 8.62404L17.584 7.37596L13.8028 9.89676L14.6348 11.1448ZM9.36518 11.1448C10.9607 12.2085 13.0393 12.2085 14.6348 11.1448L13.8028 9.89676C12.7111 10.6245 11.2889 10.6245 10.1972 9.89676L9.36518 11.1448Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <input
            type="email"
            placeholder={t("contactForm.yourEmail")}
            className="w-full ps-12 pe-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none border-[0.5px] border-faq rounded-2xl transition-colors"
          />
        </div>

        {/* Name and Topic Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute start-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.54">
                  <path
                    d="M12 21C15.866 21 19 19.433 19 17.5C19 15.567 15.866 14 12 14C8.13401 14 5 15.567 5 17.5C5 19.433 8.13401 21 12 21Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <input
              type="text"
              placeholder={t("contactForm.yourName")}
              className="ps-12 pe-4 py-3 border-[0.5px] border-faq rounded-2xl bg-transparent text-white placeholder-gray-400 focus:outline-none transition-colors font-display w-full"
            />
          </div>
          <div className="relative">
            <div className="absolute start-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M9 9.25C8.58579 9.25 8.25 9.58579 8.25 10C8.25 10.4142 8.58579 10.75 9 10.75V9.25ZM12 10.75C12.4142 10.75 12.75 10.4142 12.75 10C12.75 9.58579 12.4142 9.25 12 9.25V10.75ZM9 5.25C8.58579 5.25 8.25 5.58579 8.25 6C8.25 6.41421 8.58579 6.75 9 6.75V5.25ZM15 6.75C15.4142 6.75 15.75 6.41421 15.75 6C15.75 5.58579 15.4142 5.25 15 5.25V6.75ZM21.25 16V19H22.75V16H21.25ZM19 21.25H5V22.75H19V21.25ZM2.75 19V16H1.25V19H2.75ZM5 13.75H6V12.25H5V13.75ZM7 14.25L8.2 15.85L9.4 14.95L8.2 13.35L7 14.25ZM18 13.75H19V12.25H18V13.75ZM15.8 15.85L17 14.25L15.8 13.35L14.6 14.95L15.8 15.85ZM12 17.75C13.4951 17.75 14.9029 17.0461 15.8 15.85L14.6 14.95C13.9862 15.7684 13.023 16.25 12 16.25V17.75ZM18 12.25C17.1344 12.25 16.3194 12.6575 15.8 13.35L17 14.25C17.2361 13.9352 17.6066 13.75 18 13.75V12.25ZM8.2 15.85C9.09706 17.0461 10.5049 17.75 12 17.75V16.25C10.977 16.25 10.0138 15.7684 9.4 14.95L8.2 15.85ZM6 13.75C6.39345 13.75 6.76393 13.9352 7 14.25L8.2 13.35C7.68065 12.6575 6.86558 12.25 6 12.25V13.75ZM5 21.25C3.75736 21.25 2.75 20.2426 2.75 19H1.25C1.25 21.0711 2.92893 22.75 5 22.75V21.25ZM21.25 19C21.25 20.2426 20.2426 21.25 19 21.25V22.75C21.0711 22.75 22.75 21.0711 22.75 19H21.25ZM22.75 16C22.75 13.9289 21.0711 12.25 19 12.25V13.75C20.2426 13.75 21.25 14.7574 21.25 16H22.75ZM2.75 16C2.75 14.7574 3.75736 13.75 5 13.75V12.25C2.92893 12.25 1.25 13.9289 1.25 16H2.75ZM20.75 13V6H19.25V13H20.75ZM16 1.25H8V2.75H16V1.25ZM3.25 6V13H4.75V6H3.25ZM8 1.25C5.37665 1.25 3.25 3.37665 3.25 6H4.75C4.75 4.20507 6.20507 2.75 8 2.75V1.25ZM20.75 6C20.75 3.37665 18.6234 1.25 16 1.25V2.75C17.7949 2.75 19.25 4.20507 19.25 6H20.75ZM9 10.75H12V9.25H9V10.75ZM9 6.75H15V5.25H9V6.75Z"
                  fill="white"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder={t("contactForm.topic")}
              className="ps-12 pe-4 py-3 border-[0.5px] border-faq rounded-2xl bg-transparent text-white placeholder-gray-400 focus:outline-none transition-colors font-display w-full"
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div>
          <textarea
            placeholder={t("contactForm.askUsAnything")}
            rows={6}
            className="w-full px-4 py-3 border-[0.5px] border-faq rounded-2xl bg-transparent text-white placeholder-gray-400 focus:outline-none font-display transition-colors resize-none"
          />
        </div>

        <Button
          variant="trading"
          size="trading"
          className="w-full text-xl font-normal font-display"
        >
          {t("common.submit")}
        </Button>
      </div>

      {/* Right Side - Contact Info */}
      <div className="space-y-6 lg:pl-8">
        {/* Still Confused Title */}
        <h3 className="text-2xl font-bold text-active mb-4 font-display">
          {t("contactForm.stillConfused")}
        </h3>

        {/* Description */}
        <p className="text-white/60 font-display font-light mb-8">
          {t("contactForm.description")}
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 rtl:space-x-reverse">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="text-active transition-colors duration-200 p-3 rounded-lg"
                aria-label={social.label}
              >
                <IconComponent color="#00E0E0" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
