"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResponsibleTradingPage() {
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
            <h1 className="text-3xl md:text-5xl font-extrabold font-display">Responsible Trading / Complaints Procedure</h1>
            <p className="mt-3 text-white/70 max-w-3xl mx-auto">
              Encouraging responsible behaviour among all users of Capital Chain trading and social features.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="rounded-xl border border-[#0f2b45] bg-[#061A2F] p-6 md:p-10 shadow-xl space-y-8">
            <div className="space-y-4">
              <p className="text-white/80">
                When it comes to trading on Capital Chain or using its social trading features, we encourage
                responsible behaviour among all our users. Our responsible trading policy calls on traders to
                protect themselves from emotional decision making that can result in unnecessary losses. Novice
                traders, in particular, tend to rely more on gut feelings due to limited experience.
              </p>
              <p className="text-white/80">To help traders avoid rash decisions, we recommend the following:</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Maximum Leverage</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>30:1 for major currency pairs</li>
                <li>20:1 for non-major currency pairs, gold and major indices</li>
                <li>10:1 for commodities other than gold and non-major equity indices</li>
                <li>5:1 for individual equities and other reference values</li>
                <li>2:1 for cryptocurrencies</li>
              </ul>
              <p className="text-white/80">Place no more than 20% of your equity on one trade.</p>
              <p className="text-white/80">
                The key factors of smart investing are low leverage and portfolio diversity, a fact attested to
                by the portfolios of Capital Chain&apos;s top traders.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Tips for Responsible Trading</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>
                  Only invest in what you know: familiarise yourself with the asset’s history and tendencies;
                  avoid random tips or gut feelings.
                </li>
                <li>
                  Look at your Risk Score: Keeping a Risk Score of 3 or lower on Capital Chain is recommended.
                </li>
                <li>
                  Adjust your portfolio: Diversify across asset classes. For lower involvement, consider
                  CopyPortfolios™ or the CopyTrader™ system.
                </li>
                <li>
                  Copy other responsible traders: Review Risk Scores, history, and portfolio diversity before
                  copying.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Contact</h2>
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


