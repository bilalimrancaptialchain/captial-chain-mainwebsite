"use client";

import React from "react";
import { X, Paperclip } from "lucide-react";
import { useLanguageContext } from "../../contexts/LanguageContext";

interface FileUploadProps {
  selectedFile: File | null;
  onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const FileUpload: React.FC<FileUploadProps> = ({
  selectedFile,
  onFileSelect,
  onRemoveFile,
  fileInputRef,
}) => {
  const { language } = useLanguageContext();
  const isRTL = language === "fa";

  if (!selectedFile) return null;

  return (
    <div className="mb-3 p-2 bg-[#041933]/30 border border-[#00e0e0]/20 rounded-lg">
      <div
        className={`flex items-center justify-between ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`flex items-center ${
            isRTL ? "space-x-reverse space-x-2" : "space-x-2"
          }`}
        >
          <Paperclip size={16} className="text-[#00e0e0]" />
          <span className={`text-sm text-gray-300 truncate max-w-[200px] ${
            isRTL ? "text-right" : "text-left"
          }`}>
            {selectedFile.name}
          </span>
        </div>
        <button
          onClick={onRemoveFile}
          className="text-gray-400 hover:text-red-400 transition-colors duration-200"
        >
          <X size={16} />
        </button>
      </div>
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        onChange={onFileSelect}
        className="hidden"
        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
      />
    </div>
  );
};

export default FileUpload;