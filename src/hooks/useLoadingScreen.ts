"use client";

import { useState, useEffect } from 'react';

export const useLoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the page has already been loaded before
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    
    if (hasLoaded) {
      // If page was already loaded in this session, skip loading screen
      setIsLoading(false);
      return;
    }

    // Mark as loaded for this session
    sessionStorage.setItem('hasLoaded', 'true');
    
    // Set a minimum loading time for better UX (5 seconds for testing)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return { isLoading, handleLoadingComplete };
};
