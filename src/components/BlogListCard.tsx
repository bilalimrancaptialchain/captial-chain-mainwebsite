import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/api";
import {
  blogListCardVariants,
  blogListCardImageVariants,
  blogListCardContentVariants,
  blogCardItemVariants,
} from "@/lib/animations/blog/index";

interface BlogListCardProps {
  post: BlogPost;
}

export default function BlogListCard({ post }: BlogListCardProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <Link href={`/blog-detail?id=${post.id}`}>
      <motion.div 
        className="bg-background backdrop-blur-sm rounded-xl overflow-hidden border border-faq min-h-60 cursor-pointer"
        variants={isDesktop ? blogListCardVariants : undefined}
        initial={isDesktop ? "hidden" : undefined}
        whileInView={isDesktop ? "visible" : undefined}
        whileHover={isDesktop ? "hover" : undefined}
        viewport={isDesktop ? { once: true, amount: 0.3 } : undefined}
        animate={!isDesktop ? { opacity: 1, x: 0, scale: 1 } : undefined}
      >
      <motion.div className="flex flex-col sm:flex-row">
        {/* Image Section */}
        <motion.div 
          className="relative w-full sm:w-72 h-full min-h-60 flex-shrink-0 overflow-hidden"
          variants={isDesktop ? blogListCardImageVariants : undefined}
          animate={!isDesktop ? { opacity: 1, scale: 1, x: 0 } : undefined}
        >
          <motion.div
            whileHover={isDesktop ? "hover" : undefined}
            variants={isDesktop ? blogListCardImageVariants : undefined}
          >
            <Image
              src={post.image}
              alt={post.title}
              loading="lazy"
              fill
              className="object-cover rounded-l-xl h-full"
            />
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="flex-1 p-6 flex flex-col justify-between"
          variants={isDesktop ? blogListCardContentVariants : undefined}
          animate={!isDesktop ? { opacity: 1, x: 0 } : undefined}
        >
          {/* Title */}
          <motion.h3 
            className="text-white text-xl font-bold mb-3 line-clamp-2 font-display"
            variants={isDesktop ? blogCardItemVariants : undefined}
            animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
          >
            {post.title}
          </motion.h3>

          {/* Meta Information */}
          <motion.div 
            className="flex flex-wrap gap-y-4 items-center gap-6 text-xs text-white/60 mb-4"
            variants={isDesktop ? blogCardItemVariants : undefined}
            animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
          >
            <motion.div 
              className="flex items-center gap-2"
              variants={isDesktop ? blogCardItemVariants : undefined}
              animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-display">{post.date}</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              variants={isDesktop ? blogCardItemVariants : undefined}
              animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 6V12L16 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-display">{post.time}</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              variants={isDesktop ? blogCardItemVariants : undefined}
              animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42 13.98 8.42 12C8.42 10.02 10.02 8.42 12 8.42C13.98 8.42 15.58 10.02 15.58 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C18.82 5.8 15.53 3.72 12 3.72C8.47 3.72 5.18 5.8 2.89 9.4C1.99 10.81 1.99 13.18 2.89 14.59C5.18 18.19 8.47 20.27 12 20.27Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-display">
                {post.views.toLocaleString()}
              </span>
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full h-px bg-faq mb-4"
            variants={isDesktop ? blogCardItemVariants : undefined}
            animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
          ></motion.div>
          <motion.p 
            className="text-white/70 text-sm line-clamp-3 font-light"
            variants={isDesktop ? blogCardItemVariants : undefined}
            animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
          >
            {post.description}
          </motion.p>
        </motion.div>
       </motion.div>
     </motion.div>
    </Link>
  );
}
