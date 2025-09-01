"use client";

import { useState, useEffect } from "react";
import en from "../translations/en.json";
import es from "../translations/es.json";
import fa from "../translations/fa.json";

type Language = "en" | "es" | "fa";
type Translations = typeof en;

const translations: Record<Language, Translations> = {
  en,
  es,
  fa,
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    // Refresh the page to apply direction and other language-specific changes
    window.location.reload();
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  const getTranslation = (key: string): unknown => {
    const keys = key.split(".");
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return value;
  };

  return {
    language,
    changeLanguage,
    t,
    getTranslation,
    availableLanguages: Object.keys(translations) as Language[],
  };
};
