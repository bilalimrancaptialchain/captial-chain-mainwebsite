"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AmlPolicyPage() {
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
            <h1 className="text-3xl md:text-5xl font-extrabold font-display">Anti-Money Laundering (AML) Policy</h1>
            <p className="mt-3 text-white/70 max-w-3xl mx-auto">
              Capital Chain is committed to preventing money laundering and terrorist financing across its
              operations and partnerships.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="rounded-xl border border-[#0f2b45] bg-[#061A2F] p-6 md:p-10 shadow-xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Policy Statement</h2>
              <p className="text-white/80">
                Capital Chain is committed to preventing money laundering and terrorist financing. This policy
                applies to all employees, contractors, and business partners. Unwavering compliance with
                applicable laws and regulations shall serve to safeguard Capital Chain's reputation and uphold
                public trust in Capital Chain.
              </p>
              <p className="text-white/80">
                Therefore, it is advisable for Capital Chain to establish an anti-money laundering (AML)
                policy that delineates the prescribed measures to be observed, aiming to ensure the efficient
                execution of guidelines that support the attainment of overarching organizational goals, while
                guaranteeing conformity with the regulatory structure and ensuring compliance with applicable
                laws and regulations in all jurisdictions where Capital Chain operates.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Policy Objectives</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>
                  To establish precise and unambiguous policies for Capital Chain concerning the matters of
                  money laundering, terrorist financing, and the avoidance of sanctions.
                </li>
                <li>To provide clear and concise explanations of the compliance responsibilities that all employees are obligated to fulfill.</li>
                <li>To offer guidance to employees regarding their daily business activities in alignment with legal requirements.</li>
                <li>To foster a work environment that upholds a culture of adherence to legal regulations in the manner in which employees execute their duties.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Definition of Money Laundering</h2>
              <p className="text-white/80">
                As per the provisions outlined in Article 2 of the Anti-Money Laundering (AML) Law, the
                offense of money laundering is defined as the engagement in any of the following activities
                with the knowledge that the funds involved are derived from a criminal act:
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>transfers or moves the proceeds, or disposes of the funds/proceeds intending to conceal or disguise their source</li>
                <li>conceals or disguises the true nature, source or location of the proceeds including the manner of disposal</li>
                <li>acquires, possesses or uses the proceeds on receiving them</li>
                <li>assists the person who committed the felony/misdemeanor to escape punishment.</li>
              </ul>
              <p className="text-white/80">
                It is essential to note that money laundering is always an intentional act and cannot be
                committed through mere negligence. However, Capital Chain acknowledges that acts exhibiting
                gross negligence, particularly those involving the failure to report suspicions of criminality,
                may incur criminal liability.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Laws and Regulations</h2>
              <p className="text-white/80">The laws which Capital Chain is subjected to and with which Capital Chain comply:</p>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>UAE Federal Law No. 20 of 2018</li>
                <li>Cabinet Resolution No. 10 of 2019</li>
                <li>UAE Federal Law No. 7 of 2014: Combating Terrorism Crimes</li>
                <li>UAE Federal Penal Law No. 3 of 1987 (Penal Code)</li>
                <li>UAE Federal Penal Procedures Law No. 35 of 1992</li>
                <li>UAE Federal Law No. 5 of 2012: Combating Cyber Crimes</li>
                <li>SCA Decision (17/R) of 2010</li>
                <li>UAE Central Bank AML Regulations (e.g., Circular No. 24/2000 and amendments)</li>
                <li>Applicable UN sanctions ratified by the UAE</li>
              </ul>
              <p className="text-white/80">
                Pursuant to the Regulations, it is mandated for financial institutions in the United Arab
                Emirates (UAE) to adopt a risk-based approach in order to fulfill their legal obligations...
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Investigatory Powers and Criminal Enforcement</h2>
              <p className="text-white/80">
                The oversight of reporting and probing suspected illicit financial conduct in the UAE falls
                within the purview of the Financial Intelligence Unit (FIU) operating under the UAE Central
                Bank. The Public Prosecution retains the authority to initiate legal proceedings pertaining to
                these offenses, which are adjudicated within the criminal courts system.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Defenses</h2>
              <p className="text-white/80">
                The Regulations do not provide any legally established defenses specific to charges of money
                laundering... Once the Public Prosecutor determines that actions amount to a money laundering
                offense, the case is referred to the criminal courts.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Detection of Unusual/Suspicious Transactions</h2>
              <p className="text-white/80">
                Capital Chain’s transactions predominantly involve individual transactions ranging from $9 to
                $999. In adherence to the legal obligations, meticulous manual approval is undertaken for each
                transaction, employing due diligence to detect abnormal or suspicious activity.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Risk Rating</h2>
              <p className="text-white/80">
                A distinct and dedicated risk management unit conducts manual examination of client profiles.
                Due diligence is conducted thoroughly subsequent to evaluating risk ratings.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Resolutions and Sanctions</h2>
              <p className="text-white/80">
                Administrative sanctions may include warnings, fines, limitations or suspension of business
                activities, actions against accountable management, and appointment of a temporary observer. In
                the event of conviction, penalties range from AED 100,000 to AED 10 million and up to 10 years’
                imprisonment.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Capital Chain’s Obligations</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Identify potential risks associated with criminal activities within its operations.</li>
                <li>Conduct ongoing assessments of these identified risks.</li>
                <li>Establish internal controls and policies to effectively manage the identified risks.</li>
                <li>Implement appropriate due diligence procedures.</li>
                <li>Adhere to and implement any United Nations directives pertaining to CFT and proliferation.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Designated Compliance Team</h2>
              <p className="text-white/80">
                The Risk Management team should regularly perform compliance testing. A Designated Compliance
                Officer should hold responsibility for the comprehensive AML/CFT program, including the
                coordination and oversight of its day-to-day operations.
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


