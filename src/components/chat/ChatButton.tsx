"use client";

import React from "react";

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        onClick={onClick}
        className="bg-gradient-to-r from-[#00e0e0] to-[#239191] hover:from-[#00c5c5] hover:to-[#1f7a7a] 
                   w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
                   flex items-center justify-center group transform hover:scale-110 cursor-pointer"
        style={{
          boxShadow: "0px 0px 20px 0px #00e0e075",
        }}
      >
        {/* Chat SVG Icon */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white group-hover:scale-110 transition-transform duration-200"
        >
          <path
            d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
            fill="currentColor"
          />
          <circle cx="8" cy="10" r="1.5" fill="#071327" />
          <circle cx="12" cy="10" r="1.5" fill="#071327" />
          <circle cx="16" cy="10" r="1.5" fill="#071327" />
        </svg>
      </button>
    </div>
  );
};

export default ChatButton;
