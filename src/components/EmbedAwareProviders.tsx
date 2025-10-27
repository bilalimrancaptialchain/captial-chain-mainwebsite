"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageWrapper } from "@/components/LanguageWrapper";
import FloatingChat from "@/components/FloatingChat";
import IntercomWrapper from "@/components/IntercomWrapper";
import EmailPopupProvider from "@/components/EmailPopupProvider";
import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function EmbedAwareProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEmbed = pathname === "/header-fragment";

  // Initialize Microsoft Clarity on non-embed routes only
  useEffect(() => {
    if (isEmbed) return;
    if (typeof window === "undefined") return;
    const w = window as unknown as { __CLARITY_LOADED__?: boolean } & Window;
    if (w.__CLARITY_LOADED__) return;
    try {
      Clarity.init("t91ia12yhe");
      w.__CLARITY_LOADED__ = true;
    } catch {
      // no-op: avoid crashing UI if Clarity fails to init
    }
  }, [isEmbed]);

  if (isEmbed) {
    // Minimal providers only; no chat or popups in embeds
    return (
      <LanguageProvider>
        <LanguageWrapper>{children}</LanguageWrapper>
      </LanguageProvider>
    );
  }

  return (
    <IntercomWrapper>
      <LanguageProvider>
        <EmailPopupProvider trigger="time" delay={10000} title="Get Your $5k Free Trading Challenge" subtitle="Just by Engaging with the Community" enabled={true}>
          <LanguageWrapper>{children}</LanguageWrapper>
          <FloatingChat />
        </EmailPopupProvider>
      </LanguageProvider>
    </IntercomWrapper>
  );
}



