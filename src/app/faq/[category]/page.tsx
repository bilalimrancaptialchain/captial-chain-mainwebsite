import React from "react";
import { notFound } from "next/navigation";
import FAQHeader from "@/components/FAQHeader";
import FAQCategoryContent from "@/components/FAQCategoryContent";
import { categoryData } from "@/constants/faqData";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const data = categoryData[category];

  if (!data) {
    notFound();
  }

  return (
    <>
      <FAQHeader />
      <FAQCategoryContent category={category} data={data} />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const data = categoryData[category];

  if (!data) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category} - FAQ | Capital Chain`,
    description: "FAQ category page for Capital Chain",
  };
}
