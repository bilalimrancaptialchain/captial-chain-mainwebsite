"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ComplaintProcessPage() {
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
            <h1 className="text-3xl md:text-5xl font-extrabold font-display">Complaint Process</h1>
            <p className="mt-3 text-white/70 max-w-3xl mx-auto">
              Our comprehensive complaint and illegal activity reporting procedure ensures transparency,
              accountability, and prompt action.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="rounded-xl border border-[#0f2b45] bg-[#061A2F] p-6 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">1. Purpose</h2>
              <p className="text-white/80">
                Complaints and Reports of Illegal Activity Procedure. At Capital Chain, we are committed to
                maintaining the highest standards of ethical conduct and compliance with legal and regulatory
                requirements. We understand the importance of a robust process for addressing any reports of
                illegal activity. This page outlines our comprehensive complaint procedure, ensuring
                transparency, accountability, and prompt action.
              </p>
              <p className="text-white/80">
                <span className="font-semibold">How to Report:</span> If you wish to report an incident or concern, please send a detailed
                email to <a href="mailto:support@capitalchain.co" className="text-[#00E0E0] underline">support@capitalchain.co</a>. We encourage you to include as much information as possible to
                facilitate a thorough investigation or Contact via Live Chat.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">2. Scope</h2>
              <p className="text-white/80">This procedure applies to complaints relating to:</p>
              <ul className="list-disc pl-6 text-white/80 space-y-1">
                <li>The products or services provided by Capital Chain</li>
                <li>Conduct of Capital Chain employees or representatives</li>
                <li>Any other aspect of operations affecting client satisfaction or trust</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">3. Definition of a Complaint</h2>
              <p className="text-white/80">
                “An expression of dissatisfaction, whether oral or written, about the provision of (or failure to
                provide) a financial or trading service by Capital Chain, which requires a response or
                resolution.”
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">4. Procedure</h2>
              <p className="text-white/80">
                The Company’s complaints process applies to all client categories. Resolution is achieved
                without undue delay, considering the seriousness and financial implications to both the client
                and the Company. This policy gathers required information and sets measures to solve potential
                inconveniences, complaints and/or grievances during the business relationship.
              </p>
              <p className="text-white/80">A complaint must be written in English and include:</p>
              <ul className="list-disc pl-6 text-white/80 space-y-1">
                <li>Client’s full name</li>
                <li>Trading account number</li>
                <li>Address and email address</li>
                <li>Affected transaction(s) number (if applicable)</li>
                <li>Date and time the issue arose</li>
                <li>Full and clear description of the issue</li>
                <li>
                  Reference to any correspondence exchanged with the Company (attach such correspondence)
                </li>
              </ul>
              <p className="text-white/80">
                The Company may, at its discretion, refuse to handle a complaint if the above requirements are
                not fulfilled. Complaints can be submitted free of charge. Communications will be clear and in
                plain language. All complaints are treated with strict confidentiality.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Support Hours</h2>
              <p className="text-white/80">
                Our support team is available Monday to Friday, from 9:30 AM to 6:00 PM (UAE Time).
              </p>
              <p className="text-white/80">
                On Saturdays, live chat operates from 10:00 AM to 3:00 PM (UAE Time). Please note that our office
                is closed on Sundays.
              </p>
              <p className="text-white/80">
                Outside these hours, email us at <a href="mailto:support@capitalchain.com" className="text-[#00E0E0] underline">support@capitalchain.com</a> and we’ll get back to you as soon as
                possible.
              </p>
              <p className="text-white/80">
                <span className="font-semibold">Tip:</span> When contacting support, provide your account ID, platform, and a clear
                description of the issue to speed up resolution.
              </p>
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


