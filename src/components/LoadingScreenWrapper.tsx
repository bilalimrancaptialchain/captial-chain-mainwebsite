"use client";

import React from 'react';
import LoadingScreen from './LoadingScreen';
import { useLoadingScreen } from '../hooks/useLoadingScreen';

interface LoadingScreenWrapperProps {
  children: React.ReactNode;
  enabled?: boolean;
}

const LoadingScreenWrapper: React.FC<LoadingScreenWrapperProps> = ({ children, enabled = false }) => {
  const { isLoading, handleLoadingComplete } = useLoadingScreen();

  return (
    <>
      {enabled && isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {children}
    </>
  );
};

export default LoadingScreenWrapper;
