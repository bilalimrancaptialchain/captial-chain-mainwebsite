"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Minimum loading time for better UX (5 seconds for testing)
    const minLoadingTime = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();
    }, 5000);

    // Ensure loading completes even if progress is slow
    const maxLoadingTime = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();
    }, 6000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(minLoadingTime);
      clearTimeout(maxLoadingTime);
    };
  }, [onLoadingComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Main loading content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo with circular loading animation */}
        <div className="relative flex items-center justify-center">
          {/* Circular loading ring */}
          <div className="absolute w-48 h-48 border-4 border-transparent border-t-blue-400 border-r-purple-400 rounded-full animate-spin"></div>
          <div className="absolute w-40 h-40 border-4 border-transparent border-t-purple-400 border-l-blue-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          <div className="absolute w-32 h-32 border-4 border-transparent border-t-cyan-400 border-b-pink-400 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
          
          {/* Central logo */}
          <div className="relative bg-white rounded-full p-6 shadow-2xl z-10">
            <Image
              src="/images/logo.png"
              alt="Capital Chain Logo"
              width={80}
              height={80}
              className="animate-logo-pulse"
            />
          </div>
          
          {/* Orbiting dots */}
          <div className="absolute w-48 h-48 animate-spin" style={{ animationDuration: '4s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
          </div>
          <div className="absolute w-40 h-40 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>
          <div className="absolute w-56 h-56 animate-spin" style={{ animationDuration: '5s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
          </div>
        </div>

        {/* Company name */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 animate-pulse">
            Capital Chain
          </h1>
          <p className="text-lg text-blue-200 animate-fade-in">
            Advanced Trading Solutions
          </p>
        </div>

        {/* Loading progress bar */}
        <div className="w-64 md:w-80">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="text-center mt-2">
            <span className="text-sm text-gray-300">
              Loading... {Math.round(Math.min(progress, 100))}%
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;
