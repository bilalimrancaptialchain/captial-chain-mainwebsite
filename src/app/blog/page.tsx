"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SearchInput from "@/components/SearchInput";
import BlogCard from "@/components/BlogCard";
import BlogListCard from "@/components/BlogListCard";
import Pagination from "@/components/Pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogApi, BlogPost } from "@/lib/api";
import {
  blogSectionVariants,
  featuredGridVariants,
  blogListContainerVariants,
} from "@/lib/animations/blog/index";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const postsPerPage = 5;

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Fetch blog posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch all posts to get featured posts (first 3)
        const { posts: allPosts } = await blogApi.getAllPosts(1, 50);
        
        // Set featured posts (first 3)
        setFeaturedPosts(allPosts.slice(0, 3));
        
        // Get remaining posts for pagination
        const remainingPosts = allPosts.slice(3);
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        const currentPosts = remainingPosts.slice(startIndex, endIndex);
        
        setBlogPosts(currentPosts);
        setTotalPages(Math.ceil(remainingPosts.length / postsPerPage));
      } catch (err) {
        setError('Failed to fetch blog posts. Please try again later.');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen relative">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/image_three.webp')",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(360deg, rgba(7, 19, 39, 0.75) 0%, #071327 81.87%)",
            }}
          />
        </div>

        {/* Content */}
        <motion.div 
          className="relative z-10 min-h-screen pt-60 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 pb-12"
          variants={isDesktop ? blogSectionVariants : undefined}
          initial={isDesktop ? "hidden" : undefined}
          animate={isDesktop ? "visible" : { opacity: 1, y: 0 }}
        >
          <div className="space-y-15">
            <SearchInput />

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-active"></div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="text-center py-20">
                <p className="text-red-400 text-lg mb-4">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-6 py-2 bg-active hover:bg-active/80 text-white rounded-lg transition-colors"
                >
                  Retry
                </button>
              </div>
            )}

            {/* Featured Blog Posts (First 3 in Grid) */}
            {!loading && !error && featuredPosts.length > 0 && (
              <div className="mt-20">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-12"
                  variants={isDesktop ? featuredGridVariants : undefined}
                  initial={isDesktop ? "hidden" : undefined}
                  whileInView={isDesktop ? "visible" : undefined}
                  viewport={isDesktop ? { once: true, amount: 0.2 } : undefined}
                  animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
                >
                  {featuredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </motion.div>
              </div>
            )}

            {/* All Blog Posts (List View) */}
            {!loading && !error && blogPosts.length > 0 && (
              <div className="mt-20">
                <motion.div 
                  className="space-y-6 mt-12"
                  variants={isDesktop ? blogListContainerVariants : undefined}
                  initial={isDesktop ? "hidden" : undefined}
                  whileInView={isDesktop ? "visible" : undefined}
                  viewport={isDesktop ? { once: true, amount: 0.2 } : undefined}
                  animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
                >
                  {blogPosts.map((post) => (
                    <BlogListCard key={post.id} post={post} />
                  ))}
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            )}

            {/* Empty State */}
            {!loading && !error && featuredPosts.length === 0 && blogPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-white/70 text-lg">No blog posts found.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
