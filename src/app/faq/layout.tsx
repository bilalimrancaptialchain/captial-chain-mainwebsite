import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Chapital Chain",
  description: "Frequently Asked Questions - Capital Chain Platform",
};

// Empty Header Component for FAQ pages
const EmptyHeader = () => {
  return (
    <header className="w-full h-20 bg-transparent">
      {/* Empty header - placeholder for future customization */}
    </header>
  );
};

export default function FAQLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <EmptyHeader />
      <main className="flex-1">{children}</main>
      {/* No Footer for FAQ pages */}
    </>
  );
}