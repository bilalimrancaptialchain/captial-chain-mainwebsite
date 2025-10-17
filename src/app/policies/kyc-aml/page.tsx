"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KycAmlPolicyPage() {
  const pdfUrl = "/documents/Policies.pdf";

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
            <h1 className="text-3xl md:text-5xl font-extrabold font-display">KYC/AML Policy</h1>
            <p className="mt-3 text-white/70">
              Our requirements for identity verification and anti-money laundering compliance.
            </p>
            <div className="mt-5">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-b from-[#00E0E0] to-[#10B981] text-[#001018] font-semibold"
              >
                View Full Policies PDF
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="rounded-xl border border-[#0f2b45] bg-[#061A2F] p-6 md:p-10 shadow-xl">
            <p className="text-white/80 mb-6">
              This page outlines our KYC/AML Policy. For the official version, please refer to the full
              document using the button above.
            </p>
            <div className="rounded-lg overflow-hidden border border-[#0f2b45] bg-[#031224]">
              <object
                data={`${pdfUrl}`}
                type="application/pdf"
                className="w-full h-[75vh]"
              >
                <iframe src={`${pdfUrl}`} className="w-full h-[75vh]" />
              </object>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


