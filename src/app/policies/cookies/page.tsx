"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiesPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#071327] text-white">
        {/* Hero */}
        <section className="relative min-h-[30vh] pt-24 md:pt-28 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/about_mission_bg.webp')", opacity: 0.15 }}
          />
          <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 py-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold font-display">Cookie Policy</h1>
            <p className="mt-3 text-white/70">
              Understand how we use cookies and similar technologies.
            </p>
            <div className="mt-5 text-white/70 max-w-3xl mx-auto">
              Details on cookies, local storage, and similar technologies we use.
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="rounded-xl border border-[#0f2b45] bg-[#061A2F] p-6 md:p-10 shadow-xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">1. What Are Cookies?</h2>
              <p className="text-white/80">
                Cookies are small text files stored on your device when you visit a website. We also use
                similar technologies such as local storage, session storage, and pixels to remember
                preferences, improve performance, and enhance your experience.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">2. Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>
                  Essential Cookies: required for core functionality (e.g., navigation, language, and
                  security).
                </li>
                <li>
                  Performance and Analytics: help us understand how you use the site to improve stability and
                  features.
                </li>
                <li>
                  Preference Cookies: remember settings such as language and display options.
                </li>
                <li>
                  Marketing/Attribution: measure campaigns and conversions where applicable.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">3. Your Choices</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>
                  Browser Controls: you can block or delete cookies via your browser settings; essential
                  cookies may be required for the site to function.
                </li>
                <li>
                  Consent: where required, we will request your consent before placing non-essential cookies.
                </li>
                <li>
                  Do Not Track: we honor applicable signals to the extent technically feasible.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">4. Third-Party Cookies</h2>
              <p className="text-white/80">
                Some cookies are set by third parties (e.g., analytics or payment providers). We do not
                control these providers and recommend reviewing their respective policies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">5. Updates</h2>
              <p className="text-white/80">
                We may update this policy to reflect changes in technology or regulation. Please check back
                periodically for updates.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">6. Contact</h2>
              <p className="text-white/80">Capital Chain Group Ltd., Opal Tower, Bussiness Bay, Dubai</p>
              <p className="text-white/80">Email: info@capitalchain.co</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


