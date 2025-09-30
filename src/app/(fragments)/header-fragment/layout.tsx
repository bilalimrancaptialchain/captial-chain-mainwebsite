"use client";

import EmbedAwareProviders from "@/components/EmbedAwareProviders";

export default function FragmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "transparent" }}>
        <EmbedAwareProviders>{children}</EmbedAwareProviders>
      </body>
    </html>
  );
}


