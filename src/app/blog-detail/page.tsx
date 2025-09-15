"use client";

import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MostViewedArticles from "@/components/MostViewedArticles";
import { blogApi, BlogPost } from "@/lib/api";
import {
  blogSectionVariants,
  blogCardContentVariants,
  blogCardItemVariants,
} from "@/lib/animations/blog/index";

function BlogDetailContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setError('Blog post ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const fetchedPost = await blogApi.getPostById(parseInt(id));
        
        if (!fetchedPost) {
          setError('Blog post not found');
          return;
        }
        
        setPost(fetchedPost);
      } catch (err) {
        setError('Failed to fetch blog post. Please try again later.');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="bil2 min-h-screen relative flex items-center justify-center">
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
        <div className="relative z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-active"></div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
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
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Error</h1>
          <p className="text-white/70 mb-6">{error || 'Blog post not found'}</p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-active hover:bg-active/80 text-white rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
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
        className="relative z-10 min-h-screen pt-60 max-w-4xl mx-auto px-4 sm:px-8 lg:px-20 pb-12"
        variants={blogSectionVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Blog Header */}
        <motion.div 
          className="mb-12"
          variants={blogCardContentVariants}
        >
          {/* Blog Image */}
          <motion.div
            className="relative h-96 w-full overflow-hidden rounded-xl mb-8"
            variants={blogCardItemVariants}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#041933]/20" />
          </motion.div>

          {/* Blog Title */}
          <motion.h1
            className="text-white text-3xl md:text-4xl font-bold mb-6 font-display"
            variants={blogCardItemVariants}
          >
            {post.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            className="flex flex-wrap gap-y-4 items-center gap-6 text-sm text-white/60 mb-8 pb-8 border-b border-faq"
            variants={blogCardItemVariants}
          >
            {/* Date */}
            <div className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.5625 1.5C6.5625 1.18934 6.31066 0.9375 6 0.9375C5.68934 0.9375 5.4375 1.18934 5.4375 1.5V2.625H5.25C3.59314 2.625 2.25 3.96814 2.25 5.625V6.1875H15.75V5.625C15.75 3.96814 14.4068 2.625 12.75 2.625H12.5625V1.5C12.5625 1.18934 12.3106 0.9375 12 0.9375C11.6894 0.9375 11.4375 1.18934 11.4375 1.5V2.625H6.5625V1.5ZM2.25 7.3125H15.75V13.5C15.75 15.1568 14.4068 16.5 12.75 16.5H5.25C3.59314 16.5 2.25 15.1568 2.25 13.5V7.3125ZM9 12C9.41423 12 9.75 11.6642 9.75 11.25C9.75 10.8358 9.41423 10.5 9 10.5C8.58577 10.5 8.25 10.8358 8.25 11.25C8.25 11.6642 8.58577 12 9 12ZM12.75 11.25C12.75 11.6642 12.4142 12 12 12C11.5858 12 11.25 11.6642 11.25 11.25C11.25 10.8358 11.5858 10.5 12 10.5C12.4142 10.5 12.75 10.8358 12.75 11.25ZM6 12C6.41421 12 6.75 11.6642 6.75 11.25C6.75 10.8358 6.41421 10.5 6 10.5C5.58579 10.5 5.25 10.8358 5.25 11.25C5.25 11.6642 5.58579 12 6 12Z"
                  fill="#00E0E0"
                />
              </svg>
              <span className="font-display">{post.date}</span>
            </div>

            {/* Time */}
            <div className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5ZM9.5625 5.25C9.5625 4.93934 9.31065 4.6875 9 4.6875C8.68935 4.6875 8.4375 4.93934 8.4375 5.25V9C8.4375 9.2421 8.59245 9.45705 8.8221 9.53362L11.0721 10.2836C11.3668 10.3819 11.6854 10.2226 11.7836 9.9279C11.8819 9.63315 11.7226 9.31462 11.4279 9.21637L9.5625 8.59455V5.25Z"
                  fill="#00E0E0"
                />
              </svg>
              <span className="font-display">{post.time}</span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.087 9.43125C14.8601 8.61785 14.8601 7.38211 14.087 6.56871C12.7832 5.19687 10.5438 3.33331 8.00016 3.33331C5.45648 3.33331 3.21715 5.19687 1.9133 6.56871C1.14023 7.38211 1.14023 8.61785 1.9133 9.43125C3.21715 10.8031 5.45648 12.6666 8.00016 12.6666C10.5438 12.6666 12.7832 10.8031 14.087 9.43125ZM8.00016 9.99998C9.10476 9.99998 10.0002 9.10458 10.0002 7.99998C10.0002 6.89538 9.10476 5.99998 8.00016 5.99998C6.89556 5.99998 6.00016 6.89538 6.00016 7.99998C6.00016 9.10458 6.89556 9.99998 8.00016 9.99998Z"
                  fill="#00E0E0"
                />
              </svg>
              <span className="font-display">{post.views.toLocaleString()}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Blog Content */}
        <motion.div 
          className="prose prose-lg prose-invert max-w-none mb-16"
          variants={blogCardContentVariants}
        >
          <motion.div
            className="text-white/80 text-lg leading-relaxed font-light space-y-6"
            variants={blogCardItemVariants}
          >
            {post.description && (
              <p className="mb-6 text-xl font-medium text-white">
                {post.description}
              </p>
            )}
            
            <div 
              className="prose prose-lg prose-invert max-w-none space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            />
          </motion.div>
        </motion.div>

        {/* Most Viewed Articles Section */}
        <motion.div
          variants={blogCardContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <MostViewedArticles />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function BlogDetailPage() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#071327]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-active"></div>
        </div>
      }>
        <BlogDetailContent />
      </Suspense>
      <Footer />
    </>
  );
}