"use client";

import React, { useEffect, useRef } from "react";
import ChatMessage, { Message, ChatOption } from "./ChatMessage";
import ChatWelcome from "./ChatWelcome";
import { useLanguageContext } from "@/contexts/LanguageContext";

interface ChatContentProps {
  messages: Message[];
  onOptionSelect: (option: ChatOption) => void;
}

const ChatContent: React.FC<ChatContentProps> = ({
  messages,
  onOptionSelect,
}) => {
  const { language } = useLanguageContext();
  const isRTL = language === "fa";
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  return (
    <div
      className="flex-1 p-4 overflow-y-auto"
      style={{ direction: isRTL ? "rtl" : "ltr" }}
    >
      {messages.length === 0 ? (
        <ChatWelcome />
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              onOptionSelect={onOptionSelect}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
};

export default ChatContent;
