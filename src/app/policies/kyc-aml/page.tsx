"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KycAmlPolicyPage() {
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
            <div className="mt-5 text-white/70 max-w-3xl mx-auto">
              Verification requirements and anti-money laundering measures we follow.
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="rounded-xl border border-[#0f2b45] bg-[#061A2F] p-6 md:p-10 shadow-xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">1. Anti-Money Laundering (AML) Policy</h2>
              <h3 className="text-white font-display font-semibold">Policy Statement</h3>
              <p className="text-white/80">
                Capital Chain is committed to preventing money laundering and terrorist financing. This policy
                applies to all employees, contractors, and business partners. Unwavering compliance with
                applicable laws and regulations shall serve to safeguard Capital Chain&apos;s reputation and uphold
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
              <h3 className="text-white font-display font-semibold">Policy Objectives</h3>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>
                  To establish precise and unambiguous policies for Capital Chain concerning the matters of
                  money laundering, terrorist financing, and the avoidance of sanctions.
                </li>
                <li>To provide clear and concise explanations of the compliance responsibilities of employees.</li>
                <li>
                  To offer guidance to employees regarding their daily business activities in alignment with
                  legal requirements.
                </li>
                <li>
                  To foster a work environment that upholds a culture of adherence to legal regulations in the
                  manner in which employees execute their duties.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-display font-semibold">Definition of Money Laundering</h3>
              <p className="text-white/80">
                As per Article 2 of the AML Law, money laundering is the engagement in any of the following
                activities with knowledge that the funds are derived from a criminal act:
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>
                  Transfers or moves the proceeds, or disposes of the funds/proceeds intending to conceal or
                  disguise their source.
                </li>
                <li>
                  Conceals or disguises the true nature, source or location of the proceeds including the
                  manner of disposal.
                </li>
                <li>Acquires, possesses or uses the proceeds on receiving them.</li>
                <li>Assists the person who committed the felony/misdemeanor to escape punishment.</li>
              </ul>
              <p className="text-white/80">
                Money laundering is always an intentional act. Acts exhibiting gross negligence, particularly
                failure to report suspicions of criminality, may incur criminal liability.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-display font-semibold">Laws and Regulations</h3>
              <p className="text-white/80">Capital Chain complies with, including but not limited to:</p>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>UAE Federal Law No. 20 of 2018 (AML Law)</li>
                <li>Cabinet Resolution No. 10 of 2019 (AML Regulations)</li>
                <li>UAE Federal Law No. 7 of 2014: Combating Terrorism Crimes</li>
                <li>UAE Federal Penal Law No. 3 of 1987 (Penal Code)</li>
                <li>UAE Federal Penal Procedures Law No. 35 of 1992</li>
                <li>UAE Federal Law No. 5 of 2012: Combating Cyber Crimes</li>
                <li>SCA Decision (17/R) of 2010</li>
                <li>UAE Central Bank AML Regulations (e.g., Circular No. 24/2000 and amendments)</li>
                <li>Applicable United Nations sanctions ratified by the UAE</li>
              </ul>
              <p className="text-white/80">
                Financial institutions must adopt a risk-based approach for onboarding and periodic AML
                assessments. Capital Chain implements a robust risk-based compliance program in accordance with
                legal mandates and best practices.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-display font-semibold">Investigatory Powers and Criminal Enforcement</h3>
              <p className="text-white/80">
                Suspicious activity reporting and investigation in the UAE falls under the FIU at the UAE
                Central Bank. The Public Prosecution initiates legal proceedings and cases are adjudicated by
                criminal courts.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-display font-semibold">Defenses</h3>
              <p className="text-white/80">
                No specific defenses exist for money laundering beyond general criminal law defenses. Once the
                Public Prosecutor determines actions amount to money laundering, the case must be referred to
                the courts; settlement/plea is not available.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-display font-semibold">Detection of Unusual/Suspicious Transactions</h3>
              <p className="text-white/80">
                Transactions predominantly range from $9 to $999. A meticulous manual approval process is
                applied with due diligence on each transaction to detect abnormal or suspicious activity and to
                maintain compliance with AML/CFT requirements.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-display font-semibold">Risk Rating</h3>
              <p className="text-white/80">
                A dedicated risk management unit conducts manual examination of client profiles. Comprehensive
                risk assessment and due diligence are performed according to the customer’s risk rating to
                mitigate potential risks in line with applicable frameworks.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-display font-semibold">Resolutions and Sanctions</h3>
              <p className="text-white/80">
                Administrative sanctions for non-compliance may include warnings, fines, business limitations
                or suspensions, and actions against accountable board/senior management. AML Law penalties for
                conviction range from AED 100,000 to AED 10 million and up to 10 years’ imprisonment.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-display font-semibold">Capital Chain’s Obligations</h3>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Identify potential risks associated with criminal activities within operations.</li>
                <li>Conduct ongoing assessments of identified risks.</li>
                <li>Establish internal controls and policies to manage risks.</li>
                <li>Implement appropriate due diligence procedures.</li>
                <li>
                  Adhere to United Nations directives on counter-terrorism financing and proliferation
                  financing.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-display font-semibold">Designated Compliance Team</h3>
              <p className="text-white/80">
                The Risk Management team regularly performs compliance testing. A Designated Compliance Officer
                is responsible for the comprehensive AML/CFT program and its day-to-day coordination and
                oversight.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[#00E0E0] font-display font-bold text-xl">Contact</h3>
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


