"use client";

import React, { useState, useEffect, useRef } from 'react';
import type { AnimationItem } from 'lottie-web';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  delayMs?: number; // delay before showing to avoid flicker (0 = immediately)
  minVisibleMs?: number; // minimum time the loader stays visible once shown
  autoHideMs?: number | null; // hide automatically after N ms; null = don't auto-hide
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete, delayMs = 0, minVisibleMs = 3000,autoHideMs = null }) => {
  const [isVisible, setIsVisible] = useState(delayMs === 0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pageLoadedRef = useRef(false);
  const isVisibleRef = useRef(isVisible);

  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  useEffect(() => {
    let animation: AnimationItem | undefined;
    let showTimeoutId: ReturnType<typeof setTimeout> | undefined;
    let hideTimeoutId: ReturnType<typeof setTimeout> | undefined;

    let cleanup: (() => void) | undefined;
    const load = async () => {
      const showStartedAtMs = Date.now();
      const onPageReady = () => {
        pageLoadedRef.current = true;
        const elapsed = Date.now() - showStartedAtMs;
        const remaining = Math.max(0, minVisibleMs - elapsed);
        const finalize = () => {
          setIsVisible(false);
          onLoadingComplete?.();
          try {
            if (animation) animation.destroy();
          } catch {}
        };
        if (isVisibleRef.current && remaining > 0) {
          setTimeout(finalize, remaining);
        } else {
          finalize();
        }
      };
      // Delay before showing to avoid brief flashes
      const start = async () => {
        if (!pageLoadedRef.current) {
          setIsVisible(true);
        }
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
            onPageReady();
          }, autoHideMs);
        }
      };

      if (delayMs > 0) {
        showTimeoutId = setTimeout(() => {
          if (!pageLoadedRef.current) start();
        }, delayMs);
      } else {
        start();
      }

      // Hide immediately when the page is fully loaded
      if (typeof document !== 'undefined') {
        if (document.readyState === 'complete') {
          onPageReady();
        } else {
          const loadHandler = onPageReady;
          const readyStateHandler = () => {
            if (document.readyState === 'complete') onPageReady();
          };
          window.addEventListener('load', loadHandler, { once: true });
          document.addEventListener('readystatechange', readyStateHandler);
          // store cleanup to outer scope for effect cleanup
          cleanup = () => {
            window.removeEventListener('load', loadHandler);
            document.removeEventListener('readystatechange', readyStateHandler);
          };
        }
      }
    };

    load();

    return () => {
      if (showTimeoutId) clearTimeout(showTimeoutId);
      if (hideTimeoutId) clearTimeout(hideTimeoutId);
      if (animation) animation.destroy();
      if (cleanup) cleanup();
    };
  }, [onLoadingComplete, delayMs, autoHideMs, minVisibleMs]);

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
