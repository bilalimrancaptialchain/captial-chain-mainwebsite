"use client";

import React from "react";
import Image from "next/image";
import { useLanguageContext } from "../../contexts/LanguageContext";

export interface ChatOption {
  id: string;
  label: string;
  subOptions?: ChatOption[];
}

export interface Message {
  id: string;
  type: "bot" | "user";
  content: string;
  options?: ChatOption[];
}

interface ChatMessageProps {
  message: Message;
  onOptionSelect: (option: ChatOption) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  onOptionSelect,
}) => {
  const { t, language } = useLanguageContext();
  const isRTL = language === "fa";

  return (
    <div
      className={`flex w-full ${
        message.type == "user"
          ? isRTL
            ? "justify-end"
            : "justify-end"
          : isRTL
          ? "justify-start"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] ${
          message.type === "user" ? "order-2" : "order-1"
        }`}
      >
        {message.type === "bot" && (
          <div
            className={`flex items-center mb-2 ${
              isRTL ? "space-x-reverse space-x-2" : "space-x-2"
            }`}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-[#00e0e0]/20 to-[#239191]/20 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Capital Chain"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  (
                    e.currentTarget.nextElementSibling as HTMLElement
                  ).style.display = "block";
                }}
              />
              <div className="w-6 h-6 text-[#00e0e0] text-xs font-bold hidden">
                CC
              </div>
            </div>
            <span className={`text-xs text-gray-400 ${isRTL ? "ps-2" : ""}`}>
              {t("chat.companyName")}
            </span>
          </div>
        )}
        <div
          className={`p-3 rounded-lg ${
            message.type === "user"
              ? "bg-gradient-to-r from-[#00e0e0] to-[#239191] text-white"
              : "bg-[#041933]/50 border border-[#00e0e0]/20 text-gray-200"
          } ${isRTL ? "text-right" : "text-left"}`}
        >
          <p className="text-sm">{message.content}</p>
        </div>
        {message.options && message.options.length > 0 && (
          <div className="mt-3 space-y-2">
            {message.options.map((option) => (
              <button
                key={option.id}
                onClick={() => onOptionSelect(option)}
                className={`w-full p-2 bg-[#041933]/30 border border-[#00e0e0]/30 
                           rounded-lg text-gray-300 hover:border-[#00e0e0] hover:bg-[#041933]/50 
                           transition-all duration-200 text-sm ${
                             isRTL ? "text-right" : "text-left"
                           }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
