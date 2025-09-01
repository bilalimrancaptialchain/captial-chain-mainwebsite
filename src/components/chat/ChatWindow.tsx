"use client";

import React from "react";
import { useLanguageContext } from "../../contexts/LanguageContext";
import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";
import ChatInput from "./ChatInput";
import { Message, ChatOption } from "./ChatMessage";

interface ChatWindowProps {
  messages: Message[];
  selectedFile: File | null;
  onClose: () => void;
  onOptionSelect: (option: ChatOption) => void;
  onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: () => void;
  onTriggerFileInput: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  selectedFile,
  onClose,
  onOptionSelect,
  onFileSelect,
  onRemoveFile,
  onTriggerFileInput,
  fileInputRef,
}) => {
  const { language } = useLanguageContext();
  const isRTL = language === "fa";

  return (
    <div className="fixed bottom-24 right-6 z-[9998]">
      {/* Chat Window */}
      <div
        className={`relative bg-gradient-to-br from-[#071327] to-[#0a1123] 
                      border border-[#00e0e0]/30 rounded-2xl shadow-2xl 
                      w-96 h-[500px] 
                      flex flex-col overflow-hidden`}
        style={{
          boxShadow: "0px 0px 40px 0px #00e0e040",
          direction: isRTL ? "rtl" : "ltr",
        }}
      >
        <ChatHeader onClose={onClose} />
        <ChatContent messages={messages} onOptionSelect={onOptionSelect} />
        <ChatInput
          selectedFile={selectedFile}
          onFileSelect={onFileSelect}
          onRemoveFile={onRemoveFile}
          onTriggerFileInput={onTriggerFileInput}
          fileInputRef={fileInputRef}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
