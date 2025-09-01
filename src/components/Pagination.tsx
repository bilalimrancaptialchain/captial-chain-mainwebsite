import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import {
  paginationVariants,
  paginationButtonVariants,
} from "@/lib/animations/blog/index";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const { t } = useLanguage();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <motion.div 
      className="flex items-center justify-center gap-2 mt-12"
      variants={isDesktop ? paginationVariants : undefined}
      initial={isDesktop ? "hidden" : undefined}
      whileInView={isDesktop ? "visible" : undefined}
      viewport={isDesktop ? { once: true, amount: 0.3 } : undefined}
      animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
    >
      {/* Previous Button */}
      <motion.button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg text-white font-display disabled:opacity-50 disabled:cursor-not-allowed"
        variants={isDesktop ? paginationButtonVariants : undefined}
        whileHover={isDesktop && currentPage !== 1 ? "hover" : undefined}
        whileTap={isDesktop && currentPage !== 1 ? "tap" : undefined}
      >
        {t('blog.previous')}
      </motion.button>

      {/* Page Numbers */}
      {getVisiblePages().map((page, index) => (
        <motion.button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
          className={`px-4 py-2 rounded-lg cursor-pointer font-display ${
            page === currentPage
              ? "border-blue-600 text-active"
              : page === "..."
              ? "border-transparent text-white/50 cursor-default"
              : "border-white/20 text-white"
          }`}
          variants={isDesktop ? paginationButtonVariants : undefined}
          whileHover={isDesktop && page !== "..." && page !== currentPage ? "hover" : undefined}
          whileTap={isDesktop && page !== "..." && page !== currentPage ? "tap" : undefined}
        >
          {page}
        </motion.button>
      ))}

      {/* Next Button */}
      <motion.button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg text-white font-display disabled:opacity-50 disabled:cursor-not-allowed"
        variants={isDesktop ? paginationButtonVariants : undefined}
        whileHover={isDesktop && currentPage !== totalPages ? "hover" : undefined}
        whileTap={isDesktop && currentPage !== totalPages ? "tap" : undefined}
      >
        {t('blog.next')}
      </motion.button>
    </motion.div>
  );
}
