'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface EmailCapturePopupProps {
  isVisible: boolean;
  trigger?: 'scroll' | 'time' | 'exit' | 'click';
  title?: string;
  subtitle?: string;
  buttonText?: string;
  showCaptcha?: boolean;
  onClose?: () => void;
}

export default function EmailCapturePopup({
  isVisible,
  trigger = 'scroll',
  title = 'Get Your Free Trading Challenge',
  subtitle = 'Join thousands of successful traders',
  buttonText = 'Get Started Now',
  showCaptcha = true,
  onClose
}: EmailCapturePopupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaNumbers, setCaptchaNumbers] = useState({ num1: 0, num2: 0 });
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // Generate simple math captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaNumbers({ num1, num2 });
    setCaptchaAnswer((num1 + num2).toString());
    setCaptcha(''); // Clear previous answer
    return { num1, num2 };
  };

  // Generate captcha when popup becomes visible (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isVisible && showCaptcha) {
      generateCaptcha();
    }
  }, [isVisible, showCaptcha]);

  // Note: Trigger logic is handled by useEmailPopup hook

  const handleClose = () => {
    onClose?.();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    if (showCaptcha && captcha !== captchaAnswer) {
      setMessage('Please solve the math problem correctly');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // Send directly to WordPress REST API
      const response = await fetch('https://checkout.capitalchain.co/wp-json/wp/v2/popup-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'main_website_popup',
          trigger,
          dontShowAgain
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Set cookie if user doesn't want to see popup again
          if (dontShowAgain) {
            const expires = new Date();
            expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000)); // 1 year
            document.cookie = `cc-popup-disabled=true; expires=${expires.toUTCString()}; path=/`;
          }
          setMessage('Thank you! We\'ll be in touch soon.');
          setEmail('');
          setTimeout(() => {
            handleClose();
          }, 2000);
        } else {
          setMessage(data.message || 'Something went wrong. Please try again.');
        }
      } else {
        // Fallback: Just log the email and show success
        console.log('Popup email submission (fallback):', { email, source: 'main_website_popup', trigger });
        // Set cookie if user doesn't want to see popup again
        if (dontShowAgain) {
          const expires = new Date();
          expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000)); // 1 year
          document.cookie = `cc-popup-disabled=true; expires=${expires.toUTCString()}; path=/`;
        }
        setMessage('Thank you! We\'ll be in touch soon.');
        setEmail('');
        setTimeout(() => {
          handleClose();
        }, 2000);
      }
  } catch (error) {
    console.error('Popup submission error:', error);
    // Fallback: Just log the email and show success
    console.log('Popup email submission (fallback):', { email, source: 'main_website_popup', trigger });
    // Set cookie if user doesn't want to see popup again
    if (dontShowAgain) {
      const expires = new Date();
      expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000)); // 1 year
      document.cookie = `cc-popup-disabled=true; expires=${expires.toUTCString()}; path=/`;
    }
    setMessage('Thank you! We\'ll be in touch soon.');
    setEmail('');
    setTimeout(() => {
      handleClose();
    }, 2000);
  } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="cc-popup-overlay">
      <div className="cc-popup-container">
        <div className="cc-popup-content">
          <button 
            className="cc-popup-close" 
            onClick={handleClose}
            aria-label="Close popup"
          >
            <X size={20} />
          </button>

          <div className="cc-popup-header">
            <div className="cc-logo">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="url(#gradient)" stroke="url(#gradient2)" strokeWidth="2"/>
                <path d="M16 24L20 28L32 16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00E0E0"/>
                    <stop offset="100%" stopColor="#16B3B3"/>
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00E0E0"/>
                    <stop offset="100%" stopColor="#16B3B3"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="cc-popup-title">{title}</h2>
            <p className="cc-popup-subtitle">{subtitle}</p>
          </div>

          <form className="cc-popup-form" onSubmit={handleSubmit}>
            <div className="cc-form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="cc-email-input"
                required
              />
            </div>

            {showCaptcha && (
              <div className="cc-captcha-group">
                <div className="cc-captcha-question">
                  <span>What is {captchaNumbers.num1} + {captchaNumbers.num2} = ?</span>
                  <button 
                    type="button" 
                    onClick={generateCaptcha}
                    className="cc-refresh-captcha"
                    title="Generate new question"
                  >
                    🔄
                  </button>
                </div>
                <div className="cc-captcha-input-container">
                  <input
                    type="text"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    placeholder="Answer"
                    className="cc-captcha-input"
                    required
                  />
                </div>
              </div>
            )}

            <div className="cc-dont-show-again">
              <label className="cc-checkbox-label">
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                  className="cc-checkbox"
                />
                <span className="cc-checkbox-text">Don&apos;t show this popup again</span>
              </label>
            </div>

            <button 
              type="submit" 
              className="cc-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : buttonText}
            </button>

            {message && (
              <div className={`cc-message ${message.includes('Thank you') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}
          </form>

          <div className="cc-popup-footer">
            <p className="cc-privacy-text">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cc-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 26, 47, 0.9);
          backdrop-filter: blur(15px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: cc-fadeIn 0.4s ease-out;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }

        .cc-popup-container {
          position: relative;
          max-width: 480px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .cc-popup-content {
          background: rgba(6, 12, 24, 0.85);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(207, 230, 234, 0.2);
          position: relative;
          animation: cc-slideUp 0.5s ease-out;
          color: #F5F9FB;
        }

        .cc-popup-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(207, 230, 234, 0.15);
          border: 1px solid rgba(207, 230, 234, 0.25);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #CFE6EA;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .cc-popup-close:hover {
          background: rgba(0, 224, 224, 0.2);
          border-color: #00E0E0;
          color: #00E0E0;
          transform: rotate(90deg);
          box-shadow: 0 0 0 3px rgba(0, 224, 224, 0.18);
        }

        .cc-popup-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .cc-logo {
          margin-bottom: 20px;
          display: inline-block;
          animation: cc-pulse 2s infinite;
        }

        .cc-popup-title {
          font-family: "Exo 2", Inter, sans-serif;
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 700;
          color: #F5F9FB;
          margin: 0 0 10px 0;
          background: linear-gradient(135deg, #00E0E0, #16B3B3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }

        .cc-popup-subtitle {
          font-size: clamp(14px, 2vw, 16px);
          color: rgba(245, 249, 251, 0.85);
          margin: 0;
          line-height: 1.5;
        }

        .cc-popup-form {
          margin-bottom: 20px;
        }

        .cc-form-group {
          margin-bottom: 20px;
        }

        .cc-email-input {
          width: 100%;
          background: rgba(15, 26, 47, 0.7);
          border: 1px solid rgba(207, 230, 234, 0.25);
          color: #F5F9FB;
          border-radius: 12px;
          padding: 16px 18px;
          font-size: 16px;
          outline: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .cc-email-input::placeholder {
          color: rgba(245, 249, 251, 0.55);
        }

        .cc-email-input:focus {
          border-color: #00E0E0;
          box-shadow: 0 0 0 3px rgba(0, 224, 224, 0.18);
          background: rgba(15, 26, 47, 0.85);
        }

        .cc-captcha-group {
          margin-bottom: 20px;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .cc-captcha-input-container {
          display: flex;
          gap: 8px;
          align-items: center;
          width:20%;
        }

        .cc-captcha-question {
          background: rgba(0, 224, 224, 0.1);
          border: 1px solid rgba(0, 224, 224, 0.3);
          border-radius: 8px;
          padding: 12px 16px;
          font-weight: 600;
          color: #00E0E0;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          min-height: 48px;
          font-size: 18px;
          width: 80%;
        }

        .cc-refresh-captcha {
          background: rgba(0, 224, 224, 0.2);
          border: 1px solid rgba(0, 224, 224, 0.4);
          border-radius: 4px;
          padding: 4px 8px;
          color: #00E0E0;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.2s ease;
        }

        .cc-refresh-captcha:hover {
          background: rgba(0, 224, 224, 0.3);
          transform: rotate(180deg);
        }

        .cc-captcha-input {
          width: 100%;
          background: rgba(15, 26, 47, 0.7);
          border: 1px solid rgba(207, 230, 234, 0.25);
          color: #F5F9FB;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 16px;
          outline: none;
          transition: all 0.3s ease;
          text-align: center;
        }

        .cc-captcha-input:focus {
          border-color: #00E0E0;
          box-shadow: 0 0 0 2px rgba(0, 224, 224, 0.18);
        }

        .cc-dont-show-again {
          margin: 16px 0;
        }

        .cc-checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
          color: rgba(245, 249, 251, 0.8);
        }

        .cc-checkbox {
          width: 16px;
          height: 16px;
          accent-color: #00E0E0;
          cursor: pointer;
        }

        .cc-checkbox-text {
          user-select: none;
        }

        .cc-submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #00E0E0, #16B3B3);
          color: #06212A;
          border: none;
          border-radius: 12px;
          padding: 16px 24px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cc-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 224, 224, 0.3);
        }

        .cc-submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .cc-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .cc-message {
          margin-top: 16px;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 14px;
          text-align: center;
          font-weight: 500;
        }

        .cc-message.success {
          background: rgba(98, 212, 122, 0.15);
          border: 1px solid rgba(98, 212, 122, 0.3);
          color: #62D47A;
        }

        .cc-message.error {
          background: rgba(234, 68, 68, 0.15);
          border: 1px solid rgba(234, 68, 68, 0.3);
          color: #EA4444;
        }

        .cc-popup-footer {
          text-align: center;
        }

        .cc-privacy-text {
          font-size: 12px;
          color: rgba(245, 249, 251, 0.65);
          margin: 0;
        }

        @keyframes cc-fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes cc-slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cc-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @media (max-width: 768px) {
          .cc-popup-container {
            max-width: 95%;
            margin: 10px;
          }
          
          .cc-popup-content {
            padding: 20px;
            margin: 0;
          }
          
          .cc-popup-title {
            font-size: 24px;
            line-height: 1.2;
          }
          
          .cc-popup-subtitle {
            font-size: 14px;
            line-height: 1.4;
          }
          
          .cc-captcha-group {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          
          .cc-captcha-question {
            text-align: left;
            justify-content: space-between;
            padding: 16px 12px;
            font-size: 16px;
            line-height: 1.4;
            white-space: normal;
            word-break: break-word;
          }
          
          .cc-captcha-input {
            width: 100%;
            font-size: 16px;
            padding: 14px 16px;
            text-align: center;
            
          }
          
          .cc-email-input {
            font-size: 16px;
            padding: 14px 16px;
          }
          
          .cc-submit-btn {
            padding: 16px 20px;
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .cc-popup-container {
            max-width: 100%;
            margin: 5px;
            max-height: 95vh;
          }
          .cc-captcha-input-container{
          width:100%;
          }
          .cc-popup-content {
            padding: 16px;
            border-radius: 16px;
          }
          
          .cc-popup-title {
            font-size: 20px;
          }
          
          .cc-captcha-question {
            font-size: 14px;
            padding: 12px 8px;
            text-align: left;
            justify-content: flex-start;
          }
          
          .cc-refresh-captcha {
            padding: 6px 10px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}
