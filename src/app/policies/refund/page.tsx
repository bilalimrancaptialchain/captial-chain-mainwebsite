"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RefundPolicyPage() {
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
            <h1 className="text-3xl md:text-5xl font-extrabold font-display">Refund Policy</h1>
            <p className="mt-3 text-white/70">
              Learn when and how refunds may be issued.
            </p>
            <div className="mt-5 text-white/70 max-w-3xl mx-auto">
              Clear guidance on eligibility and process for refunds.
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="rounded-xl border border-[#0f2b45] bg-[#061A2F] p-6 md:p-10 shadow-xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">1. General Policy</h2>
              <p className="text-white/80">
                Evaluation fees are generally non-refundable. However, we provide a refund pathway tied to
                performance in our evaluation programs as described below.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">2. Refund Eligibility</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>
                  Atomic Accounts (1-Step & 2-Step): Fee is refunded automatically upon the first successful
                  Performance Reward withdrawal.
                </li>
                <li>
                  Standard Accounts (1-Step & 2-Step): Fee is refunded automatically upon the third successful
                  Performance Reward withdrawal.
                </li>
                <li>
                  All accounts must remain in good standing with no rule violations.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">3. Non-Refundable Cases</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Breaches of trading rules or risk parameters.</li>
                <li>Unauthorized trading, platform abuse, or toxic flow behavior.</li>
                <li>Chargebacks or disputes initiated without contacting support.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">4. Requesting Support</h2>
              <p className="text-white/80">
                For billing questions, contact our support team. Provide your order ID, account email, and
                details of your request for the fastest resolution.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">5. Contact</h2>
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


