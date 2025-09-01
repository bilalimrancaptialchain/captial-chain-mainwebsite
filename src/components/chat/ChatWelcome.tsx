"use client";

import React from "react";
import { useLanguageContext } from "../../contexts/LanguageContext";

const ChatWelcome: React.FC = () => {
  const { t, language } = useLanguageContext();
  const isRTL = language === "fa";

  return (
    <div
      className={`text-center text-gray-300 mt-8 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <div
        className="w-16 h-16 bg-gradient-to-r from-[#00e0e0]/20 to-[#239191]/20 
                      rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#00e0e0]"
        >
          <path
            d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
            fill="currentColor"
          />
          <circle cx="8" cy="10" r="1.5" fill="#071327" />
          <circle cx="12" cy="10" r="1.5" fill="#071327" />
          <circle cx="16" cy="10" r="1.5" fill="#071327" />
        </svg>
      </div>
      <p className={`text-sm mb-2 ${isRTL ? "text-right" : "text-left"}`}>
        {t("chat.welcomeToChat")}
      </p>
      <p
        className={`text-xs text-gray-400 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {t("chat.clickToStart")}
      </p>
    </div>
  );
};

export default ChatWelcome;
