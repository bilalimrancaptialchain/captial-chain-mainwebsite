"use client";

import { useState, useEffect } from 'react';

export const useLoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Start visible; will be hidden by LoadingScreen when the page is ready
    setIsLoading(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return { isLoading, handleLoadingComplete };
};
