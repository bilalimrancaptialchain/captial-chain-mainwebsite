import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/api";
import {
  blogCardVariants,
  blogCardImageVariants,
  blogCardContentVariants,
  blogCardItemVariants,
} from "@/lib/animations/blog/index";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
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
        className="bg-[#041933] backdrop-blur-sm rounded-xl overflow-hidden border border-faq cursor-pointer min-h-[486px]"
        variants={isDesktop ? blogCardVariants : undefined}
        initial={isDesktop ? "hidden" : undefined}
        whileInView={isDesktop ? "visible" : undefined}
        whileHover={isDesktop ? "hover" : undefined}
        viewport={isDesktop ? { once: true, amount: 0.3 } : undefined}
        animate={!isDesktop ? { opacity: 1, y: 0, scale: 1 } : undefined}
      >
        {/* Image Section */}
        <motion.div
          className="relative h-64 w-full overflow-hidden"
          variants={isDesktop ? blogCardImageVariants : undefined}
          animate={!isDesktop ? { opacity: 1, scale: 1 } : undefined}
        >
          <motion.div 
            whileHover={isDesktop ? "hover" : undefined} 
            variants={isDesktop ? blogCardImageVariants : undefined}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              loading="lazy"
            />
          </motion.div>
          <div className="absolute inset-0 top-1/2 bg-[#041933] opacity-50" />
        </motion.div>

        {/* Content Section with Dark Overlay Background */}
        <motion.div
          className="p-6 bg-[#041933] h-full"
          variants={isDesktop ? blogCardContentVariants : undefined}
          animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
        >
          {/* Title */}
          <motion.h3
            className="text-white text-xl font-bold mb-3 line-clamp-2 font-display"
            variants={isDesktop ? blogCardItemVariants : undefined}
            animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
          >
            {post.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-white/70 text-sm mb-4 line-clamp-3 font-display"
            variants={isDesktop ? blogCardItemVariants : undefined}
            animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
          >
            {post.description}
          </motion.p>

          {/* Meta Information */}
          <motion.div
            className="flex flex-wrap gap-y-4 items-center justify-between text-xs text-white/60 px-3"
            variants={isDesktop ? blogCardItemVariants : undefined}
            animate={!isDesktop ? { opacity: 1, y: 0 } : undefined}
          >
            {/* Date */}
            <div className="flex items-center gap-2 bg-[#071327] p-2 rounded-lg">
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
            <div className="flex items-center gap-2 bg-[#071327] p-2 rounded-lg">
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
              <span className="font-display">
                {post.views.toLocaleString()}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
