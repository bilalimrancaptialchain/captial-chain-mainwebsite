"use client";

import { useState, useEffect } from 'react';

export const useLoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always show once on initial mount, then auto-hide after a delay
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
