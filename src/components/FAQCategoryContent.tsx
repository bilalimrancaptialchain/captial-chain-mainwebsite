"use client";
import React from "react";
import Link from "next/link";
import { useLanguageContext } from "@/contexts/LanguageContext";
import FAQSectionHeader from "@/components/FAQSectionHeader";
import FAQNavigation from "@/components/FAQNavigation";
import { CategoryData } from "@/constants/faqData";

interface FAQCategoryContentProps {
  category: string;
  data: CategoryData;
}

export default function FAQCategoryContent({ category, data }: FAQCategoryContentProps) {
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
            <span className="text-active">{t(data.titleKey)}</span>
          </div>
          <FAQSectionHeader
            greenText={t(data.titleKey)}
            whiteText={t(data.descriptionKey)}
          />
          <div className="mt-24">
            <FAQNavigation
              items={data.faqs.map((faq) => ({
                id: faq.id,
                title: t(faq.questionKey),
                href: `${category}/${faq.id}`,
              }))}
              headerText="Questions in this category"
              baseUrl="/faq"
            />
          </div>
        </div>
      </div>
    </main>
  );
}