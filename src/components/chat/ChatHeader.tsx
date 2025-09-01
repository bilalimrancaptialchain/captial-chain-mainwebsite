"use client";

import React from "react";
import { X } from "lucide-react";
import { useLanguageContext } from "../../contexts/LanguageContext";

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
  const { t, language } = useLanguageContext();
  const isRTL = language === "fa";

  return (
    <div
      className={`bg-gradient-to-r from-[#00e0e0]/10 to-[#239191]/10 
                    border-b border-[#00e0e0]/20 p-4 flex items-center justify-between ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
    >
      <div
        className={`flex items-center ${
          isRTL ? "space-x-reverse space-x-3" : "space-x-3"
        }`}
      >
        <div className="w-3 h-3 bg-[#00e0e0] rounded-full animate-pulse"></div>
        <h3
          className={`text-white font-medium text-lg ps-3 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {t("chat.onlineChat")}
        </h3>
      </div>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-white transition-colors duration-200 
                   hover:bg-white/10 rounded-full p-1"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default ChatHeader;
