"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogApi } from "@/lib/api";
import {
  faqMostViewedVariants,
  faqArticleItemVariants,
  faqArticleDotVariants,
  faqViewport,
} from "@/lib/animations/faqAnimations";

interface Article {
  id: number;
  title: string;
}

interface MostViewedArticlesProps {
  articles?: Article[];
}

export default function MostViewedArticles({
  articles,
}: MostViewedArticlesProps) {
  const [mostViewedArticles, setMostViewedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(!articles);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (articles) {
      setMostViewedArticles(articles);
      return;
    }

    const fetchMostViewedArticles = async () => {
      try {
        setLoading(true);
        const { posts } = await blogApi.getAllPosts(1, 20);
        
        const sortedPosts = posts
          .sort((a, b) => b.views - a.views)
          .slice(0, 6)
          .map(post => ({
            id: post.id,
            title: post.title
          }));
        
        setMostViewedArticles(sortedPosts);
      } catch (error) {
        console.error('Error fetching most viewed articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMostViewedArticles();
  }, [articles]);
  
  return (
    <motion.div 
      className="border-[0.5px] border-faq rounded-xl p-9 bg-secondary-background"
      initial={isDesktop ? "hidden" : undefined}
      whileInView={isDesktop ? "visible" : undefined}
      variants={isDesktop ? faqMostViewedVariants : undefined}
      viewport={isDesktop ? faqViewport : undefined}
      animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
    >
      <motion.h2 
        className="text-active font-display text-3xl font-semibold mb-8"
        variants={isDesktop ? faqArticleItemVariants : undefined}
        animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
      >
        Most Viewed Articles
      </motion.h2>

      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-active"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mostViewedArticles.map((article) => (
            <Link 
              key={article.id} 
              href={`/blog-detail?id=${article.id}`}
              className="block"
            >
              <motion.div 
                className="flex items-center gap-5 cursor-pointer"
                variants={isDesktop ? faqArticleItemVariants : undefined}
                whileHover={isDesktop ? "hover" : undefined}
                animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
              >
                <motion.div
                  className="rounded-full bg-active flex-shrink-0"
                  style={{
                    width: "12px",
                    height: "12px",
                  }}
                  variants={isDesktop ? faqArticleDotVariants : undefined}
                  whileHover={isDesktop ? "hover" : undefined}
                  animate={!isDesktop ? { scale: 1 } : undefined}
                />
                <p className="text-white text-xl font-display hover:text-active transition-colors duration-200">
                  {article.title}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  );
}
