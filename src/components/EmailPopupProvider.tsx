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
  title = 'Get Your Free $5k Trading Challenge',
  subtitle = 'Just by Engaging with the Community',
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
      {/* Test button - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <button
          onClick={() => {
            console.log('Manual popup trigger');
            localStorage.removeItem('cc-popup-shown');
            window.location.reload();
          }}
          style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            zIndex: 999999,
            background: '#00E0E0',
            color: '#06212A',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          Test Popup
        </button>
      )}
      {isVisible && (
        <EmailCapturePopup
          isVisible={isVisible}
          trigger={trigger}
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
