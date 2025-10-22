"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RiskDisclosurePage() {
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
            <h1 className="text-3xl md:text-5xl font-extrabold font-display">Risk Disclosure</h1>
            <p className="mt-3 text-white/70">
              Important information about the risks of trading and participation.
            </p>
            <div className="mt-5 text-white/70 max-w-3xl mx-auto">
              Please read carefully before participating in trading programs.
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="rounded-xl border border-[#0f2b45] bg-[#061A2F] p-6 md:p-10 shadow-xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">1. General Risk Warning</h2>
              <p className="text-white/80">
                Trading in financial markets involves substantial risk of loss and is not suitable for all
                investors. You may lose some or all of your initial investment. Past performance does not
                guarantee future results.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">2. Evaluation Nature</h2>
              <p className="text-white/80">
                Our evaluation programs assess trading discipline and risk management on simulated
                environments. Results achieved during evaluations are not indicative of live trading results.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">3. Market Risks</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Volatility and slippage during news or illiquid conditions.</li>
                <li>Platform outages, latency, and connectivity issues.</li>
                <li>Pricing discrepancies between different venues and feeds.</li>
                <li>Leverage magnifying both profits and losses.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">4. No Advice</h2>
              <p className="text-white/80">
                Capital Chain does not provide investment, legal, or tax advice. Any educational content is for
                informational purposes only. You are solely responsible for your trading decisions.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">5. Responsibility</h2>
              <p className="text-white/80">
                By participating in our programs, you acknowledge and accept all trading risks. Capital Chain
                is not liable for direct or indirect losses arising from the use of our services.
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


