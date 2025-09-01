"use client";
import React from "react";
import { useLanguageContext } from "@/contexts/LanguageContext";

interface TextWithGradientLineProps {
  textKey: string;
}

export default function TextWithGradientLine({ textKey }: TextWithGradientLineProps) {
  const { t, language } = useLanguageContext();
  const isRTL = language === 'fa';
  
  return (
    <div className="relative flex flex-col items-start gap-6 xl:gap-0 xl:flex-row xl:items-center">
      <p className="text-white font-display text-lg">
        {t(textKey)}
      </p>

      <div
        className="flex-1 block w-full"
        style={{
          height: "0.2px",
          border: "0.5px solid",
          borderImageSource:
            "linear-gradient(90deg, rgba(0, 224, 224, 0) 0%, #00E0E0 100%)",
          borderImageSlice: 1,
          transform: isRTL ? 'rotate(180deg)' : 'none',
        }}
      />
    </div>
  );
}