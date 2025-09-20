'use client';

import { useState, useEffect } from 'react';

interface UseEmailPopupOptions {
  trigger?: 'scroll' | 'time' | 'exit' | 'click';
  delay?: number;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  showCaptcha?: boolean;
  enabled?: boolean;
}

export function useEmailPopup(options: UseEmailPopupOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const {
    trigger = 'scroll',
    delay = 3000,
    enabled = true
  } = options;

  useEffect(() => {
    if (!enabled || hasShown) return;

    // Check if user has already seen the popup today (client-side only)
    if (typeof window === 'undefined') return;
    
    // Check if user has disabled the popup permanently
    const isDisabled = document.cookie.split(';').some(cookie => 
      cookie.trim().startsWith('cc-popup-disabled=true')
    );
    
    if (isDisabled) {
      setHasShown(true);
      return;
    }
    
    const lastShown = localStorage.getItem('cc-popup-shown');
    const today = new Date().toDateString();
    
    if (lastShown === today) {
      setHasShown(true);
      return;
    }

    if (trigger === 'time') {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem('cc-popup-shown', today);
      }, delay);
      return () => clearTimeout(timer);
    }

    if (trigger === 'scroll') {
      const handleScroll = () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > 30) {
          setIsVisible(true);
          setHasShown(true);
          localStorage.setItem('cc-popup-shown', today);
          window.removeEventListener('scroll', handleScroll);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

    if (trigger === 'exit') {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0) {
          setIsVisible(true);
          setHasShown(true);
          localStorage.setItem('cc-popup-shown', today);
          document.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [trigger, delay, enabled, hasShown]);

  const showPopup = () => {
    setIsVisible(true);
  };

  const hidePopup = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    showPopup,
    hidePopup,
    hasShown
  };
}
