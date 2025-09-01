"use client";

import { useLanguageContext } from "../contexts/LanguageContext";
import { useEffect } from "react";

interface LanguageWrapperProps {
  children: React.ReactNode;
}

export function LanguageWrapper({ children }: LanguageWrapperProps) {
  const { language: currentLanguage } = useLanguageContext();

  const isRTL = ["fa"].includes(currentLanguage);
  const fontClass =
    currentLanguage === "fa"
      ? "font-vazir"
      : currentLanguage === "en"
      ? "font-sans"
      : "font-inter";

  useEffect(() => {
    // Update document direction and font
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    
    // Apply font class to body
    document.body.className = document.body.className.replace(/font-(vazir|sans|inter)/g, '');
    document.body.classList.add(fontClass);
    
    // Apply direction class to body
    document.body.className = document.body.className.replace(/(rtl|ltr)/g, '');
    document.body.classList.add(isRTL ? 'rtl' : 'ltr');
    
    // Force font application for Persian language
    if (currentLanguage === 'fa') {
      document.body.style.fontFamily = 'var(--font-vazir), ui-sans-serif, system-ui, sans-serif';
    } else {
      document.body.style.fontFamily = '';
    }
  }, [currentLanguage, isRTL, fontClass]);

  return (
    <div
      className={`${fontClass} ${isRTL ? "rtl" : "ltr"} min-h-screen`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {children}
    </div>
  );
}
