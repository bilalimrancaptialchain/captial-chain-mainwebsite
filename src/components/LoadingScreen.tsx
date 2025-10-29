"use client";

import React, { useState, useEffect, useRef } from 'react';
import type { AnimationItem } from 'lottie-web';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  delayMs?: number; // show after this delay (avoid flicker)
  autoHideMs?: number | null; // hide automatically after N ms; null = don't auto-hide
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete, delayMs = 0, autoHideMs = 5000 }) => {
  const [isVisible, setIsVisible] = useState(delayMs === 0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animation: AnimationItem | undefined;
    let showTimeoutId: ReturnType<typeof setTimeout> | undefined;
    let hideTimeoutId: ReturnType<typeof setTimeout> | undefined;

    const load = async () => {
      // Delay before showing to avoid brief flashes
      const start = async () => {
        setIsVisible(true);
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
        } catch {
          // no-op
        }

        if (typeof autoHideMs === 'number') {
          hideTimeoutId = setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete?.();
          }, autoHideMs);
        }
      };

      if (delayMs > 0) {
        showTimeoutId = setTimeout(start, delayMs);
      } else {
        start();
      }
    };

    load();

    return () => {
      if (showTimeoutId) clearTimeout(showTimeoutId);
      if (hideTimeoutId) clearTimeout(hideTimeoutId);
      if (animation) animation.destroy();
    };
  }, [onLoadingComplete, delayMs, autoHideMs]);

  if (!isVisible) return null;

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
