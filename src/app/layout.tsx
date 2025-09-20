import type { Metadata } from "next";
import { Exo_2, Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Capital Chain - Advanced Trading Solutions & Business Management Platform",
  description: "Capital Chain offers cutting-edge trading solutions, comprehensive business management tools, and innovative financial services. Join our platform for professional trading, portfolio management, and business growth opportunities.",
  keywords: "trading platform, business management, financial services, portfolio management, trading solutions, investment platform",
  authors: [{ name: "Capital Chain" }],
  creator: "Capital Chain",
  publisher: "Capital Chain",
  robots: "index, follow",
  openGraph: {
    title: "Capital Chain - Advanced Trading Solutions",
    description: "Professional trading platform with comprehensive business management tools and innovative financial services.",
    type: "website",
    locale: "en_US",
    siteName: "Capital Chain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Chain - Advanced Trading Solutions",
    description: "Professional trading platform with comprehensive business management tools.",
    creator: "@Capitalchain",
  },
  icons: {
    icon: "/favicon.webp",
  },
  viewport: "width=device-width, initial-scale=1",
};

import { LanguageProvider } from "../contexts/LanguageContext";
import { LanguageWrapper } from "../components/LanguageWrapper";
import FloatingChat from "../components/FloatingChat";
import IntercomWrapper from "../components/IntercomWrapper";
import EmailPopupProvider from "../components/EmailPopupProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only load Twitter tracking in production and when explicitly enabled
  // const enableTwitterTracking = process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ENABLE_TWITTER_TRACKING === 'true';
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D2S0LF9PSJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D2S0LF9PSJ');
          `}
        </Script>
        
     
          <Script 
            id="twitter-pixel" 
            strategy="afterInteractive"
            data-cookieconsent="tracking"
          >
            {`!function(e,t,n,s,u,a)
    {e.twq ||
      ((s = e.twq =
        function () {
          s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
        }),
      (s.version = "1.1"),
      (s.queue = []),
      (u = t.createElement(n)),
      (u.async = !0),
      (u.src = "https://static.ads-twitter.com/uwt.js"),
      (a = t.getElementsByTagName(n)[0]),
      a.parentNode.insertBefore(u, a))}
    (window,document,'script'); twq('config','qc22r');`}
          </Script>
      
      </head>
      <body
        className={`${inter.variable} ${exo2.variable} ${vazirmatn.variable}`}
        suppressHydrationWarning={true}
      >
        <IntercomWrapper>
          <LanguageProvider>
            <EmailPopupProvider 
              trigger="time" 
              delay={10000}
              title="Get Your Free Trading Challenge"
              subtitle="Join thousands of successful traders"
            >
              <LanguageWrapper>{children}</LanguageWrapper>
              <FloatingChat />
            </EmailPopupProvider>
          </LanguageProvider>
        </IntercomWrapper>
      </body>
    </html>
  );
}
