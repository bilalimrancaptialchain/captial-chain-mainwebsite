"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts, BlogPost } from "@/constants/blogPosts";
import { useLanguage } from "@/hooks/useLanguage";
import {
  searchInputVariants,
  searchSuggestionsVariants,
  searchSuggestionItemVariants,
} from "@/lib/animations/blog/index";

interface SearchInputProps {
  initialValue?: string;
}

export default function SearchInput({ initialValue = "" }: SearchInputProps) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const [suggestions, setSuggestions] = useState<BlogPost[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredSuggestions = blogPosts
        .filter(
          (post) =>
            t(post.titleKey).toLowerCase().includes(searchTerm.toLowerCase()) ||
            t(post.descriptionKey)
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        )
        .slice(0, 5); // Show max 5 suggestions
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setSelectedIndex(-1);
  }, [searchTerm, t]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        // Navigate to selected suggestion
        router.push(
          `/search?q=${encodeURIComponent(
            t(suggestions[selectedIndex].titleKey)
          )}`
        );
      } else {
        handleSearch();
      }
      setShowSuggestions(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  const handleSuggestionClick = (suggestion: BlogPost) => {
    router.push(`/search?q=${encodeURIComponent(t(suggestion.titleKey))}`);
    setShowSuggestions(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(e.target as Node) &&
      suggestionsRef.current &&
      !suggestionsRef.current.contains(e.target as Node)
    ) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const highlightText = (text: string, highlight: string) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="bg-yellow-400 text-black px-1 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <motion.div
      className="relative w-full bg-secondary-background"
      variants={searchInputVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder={t("blog.searchPlaceholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchTerm && setShowSuggestions(true)}
          className="w-full h-16 px-6 ps-16 text-lg text-white bg-transparent outline-none placeholder-gray-400 transition-colors border-[0.5px] border-faq rounded-xl font-display"
        />

        <motion.div className="absolute start-4 top-1/2 transform -translate-y-1/2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.7071 21.5696C26.3166 21.1791 25.6835 21.1792 25.293 21.5696C24.9025 21.9601 24.9025 22.5933 25.293 22.9839L26.7071 21.5696ZM22.9839 25.2929C22.5934 24.9024 21.9602 24.9024 21.5697 25.2929C21.1791 25.6835 21.1793 26.3165 21.5697 26.7071L22.9839 25.2929ZM3.66675 14C3.66675 8.29304 8.29313 3.66666 14.0001 3.66666V1.66666C7.18857 1.66666 1.66675 7.18848 1.66675 14H3.66675ZM14.0001 3.66666C19.707 3.66666 24.3334 8.29304 24.3334 14H26.3334C26.3334 7.18848 20.8115 1.66666 14.0001 1.66666V3.66666ZM24.3334 14C24.3334 19.7069 19.707 24.3333 14.0001 24.3333V26.3333C20.8115 26.3333 26.3334 20.8115 26.3334 14H24.3334ZM14.0001 24.3333C8.29313 24.3333 3.66675 19.7069 3.66675 14H1.66675C1.66675 20.8115 7.18857 26.3333 14.0001 26.3333V24.3333ZM27.8553 27.8551C27.2175 28.4928 26.1838 28.4928 25.5462 27.8551L24.1319 29.2693C25.5506 30.688 27.8507 30.688 29.2694 29.2693L27.8553 27.8551ZM27.8553 25.5461C28.4929 26.1837 28.4929 27.2175 27.8553 27.8551L29.2694 29.2693C30.6881 27.8507 30.6881 25.5505 29.2694 24.1319L27.8553 25.5461ZM25.293 22.9839L27.8553 25.5461L29.2694 24.1319L26.7071 21.5696L25.293 22.9839ZM25.5462 27.8551L22.9839 25.2929L21.5697 26.7071L24.1319 29.2693L25.5462 27.8551Z"
              fill="white"
            />
          </svg>
        </motion.div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="absolute end-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8.5 3a5.5 5.5 0 0 1 4.227 8.977l4.148 4.148a.75.75 0 1 1-1.06 1.06l-4.148-4.148A5.5 5.5 0 1 1 8.5 3Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
          </svg>
        </button>
      </div>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            ref={suggestionsRef}
            className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-600 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto"
            variants={searchSuggestionsVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {suggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`p-4 cursor-pointer border-b border-gray-700 last:border-b-0 ${
                  index === selectedIndex ? "bg-gray-700" : ""
                }`}
                variants={searchSuggestionItemVariants}
                whileHover="hover"
              >
                <h4 className="text-white font-medium text-sm mb-1">
                  {highlightText(t(suggestion.titleKey), searchTerm)}
                </h4>
                <p className="text-gray-400 text-xs line-clamp-2">
                  {highlightText(t(suggestion.descriptionKey), searchTerm)}
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                  <span>{suggestion.date}</span>
                  <span>
                    {suggestion.views} {t("blog.views")}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
