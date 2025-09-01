"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguageContext } from "@/contexts/LanguageContext";
import {
  faqCategoriesGridVariants,
  faqCategoryCardVariants,
  faqCategoryTitleVariants,
  faqCategoryDescriptionVariants,
  faqCategoryStatsVariants,
  faqViewport,
} from "@/lib/animations/faqAnimations";

interface FAQCategory {
  id: number;
  titleKey: string;
  descriptionKey: string;
  articleCount: number;
  href: string;
}

interface FAQCategoriesProps {
  categories?: FAQCategory[];
}

const defaultCategories: FAQCategory[] = [
  {
    id: 1,
    titleKey: "faq.categories.gettingStarted.title",
    descriptionKey: "faq.categories.gettingStarted.description",
    articleCount: 12,
    href: "/faq/getting-started",
  },
  {
    id: 2,
    titleKey: "faq.categories.accountManagement.title",
    descriptionKey: "faq.categories.accountManagement.description",
    articleCount: 8,
    href: "/faq/account-management",
  },
  {
    id: 3,
    titleKey: "faq.categories.paymentsBilling.title",
    descriptionKey: "faq.categories.paymentsBilling.description",
    articleCount: 15,
    href: "/faq/payments-billing",
  },
  {
    id: 4,
    titleKey: "faq.categories.security.title",
    descriptionKey: "faq.categories.security.description",
    articleCount: 10,
    href: "/faq/security",
  },
  {
    id: 5,
    titleKey: "faq.categories.technicalSupport.title",
    descriptionKey: "faq.categories.technicalSupport.description",
    articleCount: 20,
    href: "/faq/technical-support",
  },
  {
    id: 6,
    titleKey: "faq.categories.apiDocumentation.title",
    descriptionKey: "faq.categories.apiDocumentation.description",
    articleCount: 25,
    href: "/faq/api-documentation",
  },
];

export default function FAQCategories({
  categories = defaultCategories,
}: FAQCategoriesProps) {
  const { t } = useLanguageContext();

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial="hidden"
      whileInView="visible"
      variants={faqCategoriesGridVariants}
      viewport={faqViewport}
    >
      {categories.map((category) => (
        <Link key={category.id} href={category.href}>
          <motion.div
            className="border-[0.5px] border-faq rounded-2xl p-6 px-10 hover:bg-gray-900/20 transition-colors cursor-pointer"
            style={{
              background: "radial-gradient(#011F3F , #071327)",
            }}
            variants={faqCategoryCardVariants}
            whileHover="hover"
          >
            <div className="mb-4">
              <div className="w-15 aspect-square bg-[#00E0E0]/20 rounded-xl flex items-center justify-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_149_173)">
                    <path
                      d="M15 23.75C13.9637 23.75 13.125 22.91 13.125 21.875C13.125 19.4525 14.815 17.2388 18.0112 15.4775C20.3925 14.165 21.625 11.5638 21.1488 8.85128C20.7088 6.34753 18.6525 4.29128 16.1487 3.85128C14.3425 3.53378 12.5675 3.96628 11.1475 5.06878C9.75375 6.15253 8.8775 7.77378 8.745 9.51753C8.66625 10.5488 7.76375 11.3238 6.73375 11.245C5.70125 11.1663 4.9275 10.2663 5.00625 9.23378C5.21875 6.43753 6.61875 3.84003 8.8475 2.10878C11.1125 0.347528 13.9362 -0.343722 16.7962 0.157528C20.8263 0.865028 24.135 4.17378 24.8425 8.20378C25.5888 12.4525 23.57 16.6963 19.8212 18.7625C17.9762 19.7788 16.875 20.9425 16.875 21.875C16.875 22.91 16.0362 23.75 15 23.75ZM13.125 28.125C13.125 29.16 13.965 30 15 30C16.035 30 16.875 29.16 16.875 28.125C16.875 27.09 16.035 26.25 15 26.25C13.965 26.25 13.125 27.09 13.125 28.125Z"
                      fill="#00E0E0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_149_173">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <motion.h3
              className="text-[#00E0E0] text-2xl font-semibold mb-2 font-display"
              variants={faqCategoryTitleVariants}
            >
              {t(category.titleKey)}
            </motion.h3>

            <motion.p
              className="text-white text-lg font-display mb-4 leading-relaxed"
              variants={faqCategoryDescriptionVariants}
            >
              {t(category.descriptionKey)}
            </motion.p>

            <div className="border-t border-gray-600 mb-4"></div>

            <motion.div
              className="flex items-center gap-2"
              variants={faqCategoryStatsVariants}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.08333 1.16663C2.79467 1.16663 1.75 2.21129 1.75 3.49996V10.5C1.75 11.7886 2.79467 12.8333 4.08333 12.8333H9.91667C11.2053 12.8333 12.25 11.7886 12.25 10.5V3.49996C12.25 2.21129 11.2053 1.16663 9.91667 1.16663H4.08333ZM4.66667 9.47913C4.42504 9.47913 4.22917 9.67501 4.22917 9.91663C4.22917 10.1582 4.42504 10.3541 4.66667 10.3541H7C7.24162 10.3541 7.4375 10.1582 7.4375 9.91663C7.4375 9.67501 7.24162 9.47913 7 9.47913H4.66667ZM4.22917 6.99996C4.22917 6.75834 4.42504 6.56246 4.66667 6.56246H9.33333C9.57495 6.56246 9.77083 6.75834 9.77083 6.99996C9.77083 7.24158 9.57495 7.43746 9.33333 7.43746H4.66667C4.42504 7.43746 4.22917 7.24158 4.22917 6.99996ZM4.66667 3.64579C4.42504 3.64579 4.22917 3.84167 4.22917 4.08329C4.22917 4.32492 4.42504 4.52079 4.66667 4.52079H9.33333C9.57495 4.52079 9.77083 4.32492 9.77083 4.08329C9.77083 3.84167 9.57495 3.64579 9.33333 3.64579H4.66667Z"
                  fill="#00E0E0"
                />
              </svg>

              <span className="text-active font-display font-light text-sm">
                {category.articleCount} {t("common.articles")}
              </span>
            </motion.div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}
