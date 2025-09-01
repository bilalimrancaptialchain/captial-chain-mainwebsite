"use client";
import React from "react";
import Link from "next/link";
import { useLanguageContext } from "@/contexts/LanguageContext";
import LastUpdateInfo from "@/components/LastUpdateInfo";
import ContentSections from "@/components/ContentSections";
import FAQNavigation from "@/components/FAQNavigation";
import { CategoryData, FAQItem } from "@/constants/faqData";
import { contentSections, relatedPosts } from "@/constants/faqContent";

interface FAQDetailContentProps {
  category: string;
  categoryInfo: CategoryData;
  faqItem: FAQItem;
}

export default function FAQDetailContent({ category, categoryInfo, faqItem }: FAQDetailContentProps) {
  const { t } = useLanguageContext();

  return (
    <main className="flex-1 pt-36">
      <div className="min-h-screen max-w-7xl mx-auto px-20 pb-12">
        <div className="space-y-8">
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/faq" className="hover:text-active transition-colors">
              FAQ
            </Link>
            <span>/</span>
            <Link
              href={`/faq/${category}`}
              className="hover:text-active transition-colors"
            >
              {t(categoryInfo.titleKey)}
            </Link>
            <span>/</span>
            <span className="text-active">{t(faqItem.questionKey)}</span>
          </div>
          <LastUpdateInfo
            title={t(faqItem.questionKey)}
            lastUpdateDate="2025/Jul/17"
          />
          <div className="mt-24">
            <ContentSections sections={contentSections} />
          </div>
          <div className="mt-24">
            <FAQNavigation
              items={relatedPosts}
              headerText="Related Posts"
              baseUrl="/faq"
            />
          </div>
        </div>
      </div>
    </main>
  );
}