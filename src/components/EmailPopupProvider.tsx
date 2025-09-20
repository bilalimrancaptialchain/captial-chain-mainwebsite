'use client';

import React from 'react';
import EmailCapturePopup from './EmailCapturePopup';
import { useEmailPopup } from '@/hooks/useEmailPopup';

interface EmailPopupProviderProps {
  children: React.ReactNode;
  trigger?: 'scroll' | 'time' | 'exit' | 'click';
  delay?: number;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  showCaptcha?: boolean;
  enabled?: boolean;
}

export default function EmailPopupProvider({
  children,
  trigger = 'scroll',
  delay = 3000,
  title = 'Get Your Free Trading Challenge',
  subtitle = 'Join thousands of successful traders',
  buttonText = 'Get Started Now',
  showCaptcha = true,
  enabled = true
}: EmailPopupProviderProps) {
  const { isVisible, hidePopup } = useEmailPopup({
    trigger,
    delay,
    enabled
  });

  return (
    <>
      {children}
      {isVisible && (
        <EmailCapturePopup
          trigger={trigger}
          delay={delay}
          title={title}
          subtitle={subtitle}
          buttonText={buttonText}
          showCaptcha={showCaptcha}
          onClose={hidePopup}
        />
      )}
    </>
  );
}
