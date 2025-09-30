"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageWrapper } from "@/components/LanguageWrapper";
import FloatingChat from "@/components/FloatingChat";
import IntercomWrapper from "@/components/IntercomWrapper";
import EmailPopupProvider from "@/components/EmailPopupProvider";

export default function EmbedAwareProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEmbed = pathname === "/header-fragment";

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
        <EmailPopupProvider trigger="time" delay={10000} title="Get Your $5k Free Trading Challenge" subtitle="Just by Engaging with the Community">
          <LanguageWrapper>{children}</LanguageWrapper>
          <FloatingChat />
        </EmailPopupProvider>
      </LanguageProvider>
    </IntercomWrapper>
  );
}


