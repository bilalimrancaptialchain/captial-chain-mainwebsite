import React from "react";
import { notFound } from "next/navigation";
import FAQHeader from "@/components/FAQHeader";
import FAQDetailContent from "@/components/FAQDetailContent";
import {
  categoryData,
} from "@/constants/faqData";

interface PageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

export default async function FAQDetailPage({ params }: PageProps) {
  const { category, id } = await params;
  const categoryInfo = categoryData[category];

  if (!categoryInfo) {
    notFound();
  }

  const faqItem = categoryInfo.faqs.find((faq) => faq.id === parseInt(id));

  if (!faqItem) {
    notFound();
  }

  return (
    <>
      <FAQHeader />
      <FAQDetailContent 
        category={category}
        categoryInfo={categoryInfo}
        faqItem={faqItem}
      />
    </>
  );
}

export async function generateStaticParams() {
  const paths: { category: string; id: string }[] = [];
  
  Object.keys(categoryData).forEach((category) => {
    categoryData[category].faqs.forEach((faq) => {
      paths.push({
        category,
        id: faq.id.toString(),
      });
    });
  });
  
  return paths;
}

export async function generateMetadata({ params }: PageProps) {
  const { category, id } = await params;
  const categoryInfo = categoryData[category];

  if (!categoryInfo) {
    return {
      title: "not found !",
    };
  }

  const faqItem = categoryInfo.faqs.find((faq) => faq.id === parseInt(id));

  if (!faqItem) {
    return {
      title: "not found !",
    };
  }

  return {
    title: `FAQ - ${category} | Capital Chain`,
    description: "FAQ page for Capital Chain",
  };
}
