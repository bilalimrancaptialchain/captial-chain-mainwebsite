"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListCard from "@/components/BlogListCard";
import SearchInput from "@/components/SearchInput";
import { blogApi, BlogPost } from "@/lib/api";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const searchPosts = async () => {
        try {
          const { posts } = await blogApi.searchPosts(query);
          setSearchResults(posts);
        } catch (error) {
          console.error('Search error:', error);
          setSearchResults([]);
        } finally {
          setIsLoading(false);
        }
      };

      const timer = setTimeout(searchPosts, 300);
      return () => clearTimeout(timer);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className="min-h-screen relative">
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

      <div className="relative z-10 min-h-screen pt-60 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 pb-12">
        <div className="space-y-15">
          <SearchInput initialValue={query} />

          <div className="mt-20">
            {query && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Search results for: &ldquo;{query}&rdquo;
                </h2>
                <p className="text-gray-400">
                  {isLoading
                    ? "Searching..."
                    : `${searchResults.length} articles found`}
                </p>
              </div>
            )}

            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            ) : (
              <div className="space-y-6">
                {searchResults.length > 0 ? (
                  searchResults.map((post) => (
                    <BlogListCard key={post.id} post={post} />
                  ))
                ) : query ? (
                  <div className="text-center py-20">
                    <p className="text-gray-400 text-lg">
                      No articles found with this search term.
                    </p>
                    <p className="text-gray-500 mt-2">
                      Please try different keywords.
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-gray-400 text-lg">
                      Enter your search term to find articles.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#071327]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      }>
        <SearchContent />
      </Suspense>
      <Footer />
    </>
  );
}