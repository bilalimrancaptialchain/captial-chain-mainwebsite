"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguageContext } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSelector: React.FC = () => {
  const { language, changeLanguage, availableLanguages } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languageNames = {
    en: "EN",
    es: "ES",
    fa: "FA",
  };

  const languageFullNames = {
    en: "English",
    es: "Español",
    fa: "فارسی",
  };

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang as "en" | "es" | "fa");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{languageNames[language]}</span>
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg min-w-[120px] z-50">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                language === lang ? "text-blue-400 bg-white/5" : "text-white"
              }`}
            >
              {languageFullNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
