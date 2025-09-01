"use client";

import React from "react";
import { Paperclip } from "lucide-react";
import { useLanguageContext } from "../../contexts/LanguageContext";
import FileUpload from "./FileUpload";

interface ChatInputProps {
  selectedFile: File | null;
  onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: () => void;
  onTriggerFileInput: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const ChatInput: React.FC<ChatInputProps> = ({
  selectedFile,
  onFileSelect,
  onRemoveFile,
  onTriggerFileInput,
  fileInputRef,
}) => {
  const { t, language } = useLanguageContext();
  const isRTL = language === "fa";

  return (
    <div className="border-t border-[#00e0e0]/20 p-4">
      {/* Selected File Display */}
      <FileUpload
        selectedFile={selectedFile}
        onFileSelect={onFileSelect}
        onRemoveFile={onRemoveFile}
        fileInputRef={fileInputRef}
      />

      <div className={`flex ${isRTL ? "space-x-2" : "space-x-2"}`}>
        <input
          type="text"
          placeholder={t("chat.typeMessage")}
          className={`flex-1 bg-[#041933]/50 border border-[#00e0e0]/30 
                     rounded-lg px-4 py-2 text-white placeholder-gray-400 
                     focus:outline-none focus:border-[#00e0e0] transition-colors duration-200 ${
                       isRTL ? "text-right" : "text-left"
                     }`}
          dir={isRTL ? "rtl" : "ltr"}
        />

        {/* File Upload Button */}
        <button
          onClick={onTriggerFileInput}
          className="bg-[#041933]/50 border border-[#00e0e0]/30 hover:border-[#00e0e0] 
                     px-3 py-2 rounded-lg text-gray-400 hover:text-[#00e0e0] 
                     transition-all duration-200 hover:bg-[#041933]/70"
          title={t("chat.sendFile")}
        >
          <Paperclip size={18} />
        </button>

        <button
          className="bg-gradient-to-r from-[#00e0e0] to-[#239191] 
                           hover:from-[#00c5c5] hover:to-[#1f7a7a] 
                           px-4 py-2 rounded-lg text-white font-medium 
                           transition-all duration-200 hover:shadow-lg"
          style={{
            boxShadow: "0px 0px 15px 0px #00e0e050",
          }}
        >
          {t("chat.send")}
        </button>
      </div>

      {/* Hidden File Input */}
      {!selectedFile && (
        <input
          ref={fileInputRef}
          type="file"
          onChange={onFileSelect}
          className="hidden"
          accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
        />
      )}
    </div>
  );
};

export default ChatInput;
