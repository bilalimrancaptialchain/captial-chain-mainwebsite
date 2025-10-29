"use client";

import React, { useState, useEffect, useRef } from 'react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animation: any;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const load = async () => {
      try {
        const Lottie = (await import('lottie-web')).default;
        if (containerRef.current) {
          animation = Lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/animation/data.json',
          });
        }
      } catch (e) {
        // no-op; if lottie fails, still complete after timeout
      }

      // Minimum visible time to avoid flash (matches wrapper timing expectations)
      timeoutId = setTimeout(() => {
        setIsLoading(false);
        onLoadingComplete?.();
      }, 5000);
    };

    load();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animation) animation.destroy();
    };
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div
        ref={containerRef}
        className="w-52 h-52 md:w-72 md:h-72"
        aria-label="Loading"
      />
    </div>
  );
};

export default LoadingScreen;
