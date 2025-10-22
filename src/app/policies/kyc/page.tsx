"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KycPolicyPage() {
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
            <h1 className="text-3xl md:text-5xl font-extrabold font-display">Know Your Customer (KYC) Policy</h1>
            <p className="mt-3 text-white/70 max-w-3xl mx-auto">
              Customer and Business Partner Due Diligence to mitigate ML/TF risk and ensure regulatory
              compliance.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="rounded-xl border border-[#0f2b45] bg-[#061A2F] p-6 md:p-10 shadow-xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Customer and Business Partner Due Diligence</h2>
              <p className="text-white/80">
                Dealers in real estate and non-resident customers (especially those from high-risk countries),
                foreign and local politically exposed persons (PEP), complex legal entities and third-party
                buyers are examples of high-risk counterparties, which therefore require enhanced due
                diligence procedures.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Know Your Customer (KYC)</h2>
              <p className="text-white/80">
                The purpose of the KYC procedures is to provide a mechanism through which potential
                counterparties can be identified and resolved in a simple, streamlined fashion, while ensuring
                that all interested parties have been consulted. This process mitigates the risk of being
                exploited for money laundering/terrorist financing and enables detection of suspicious
                transactions that are incompatible with the information received.
              </p>
              <p className="text-white/80">
                Capital Chain is required to undertake KYC measures for all proposed transactions and business
                relationships. Under general KYC measures, Capital Chain should:
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>
                  Verify the identity of the counterparty on the basis of original or properly certified
                  documents from reliable and independent sources;
                </li>
                <li>
                  Identify the ultimate beneficial owner (UBO), take reasonable measures to verify identity and
                  understand ownership/control structure; verify authority where acting on behalf of another;
                </li>
                <li>Obtain information on the purpose and intended nature of the relationship to develop a risk profile;</li>
                <li>Seek to understand source of wealth and source of funds;</li>
                <li>
                  Undertake ongoing due diligence and transaction scrutiny to ensure activity is consistent with
                  Capital Chain’s knowledge of the counterparty, business, and risk profile.
                </li>
              </ul>
              <p className="text-white/80">
                Each measure is applied on a risk-sensitive basis. For higher risk categories, enhanced due
                diligence is performed. Records are kept for a minimum of five years.
              </p>
              <p className="text-white/80">
                Where Capital Chain is unable to comply with identity/UBO measures, it must not commence or
                must terminate the relationship and should file a suspicious transaction report.
              </p>
              <p className="text-white/80">
                Requirements apply to all new counterparties and retrospectively to existing ones based on
                materiality and risk, with at least annual reviews.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Identity</h2>
              <p className="text-white/80">
                Capital Chain will establish and verify the identity of any counterparty prior to transactions
                or relationships. The following information/evidence should be obtained:
              </p>
              <h3 className="text-white font-display font-semibold">Natural Persons</h3>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Full name</li>
                <li>Date of birth</li>
                <li>Nationality</li>
                <li>Legal domicile</li>
                <li>Current residential address (not a PO box)</li>
                <li>Name and address of employer</li>
                <li>Higher management approval if the customer/beneficial owner is a PEP</li>
              </ul>
              <p className="text-white/80">
                Items (a)–(c) should be obtained from a current valid passport or, exceptionally, an official
                identification document with photo.
              </p>
              <p className="text-white/80">Documentary evidence of address (any of the following):</p>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Tenancy agreement</li>
                <li>Utility bill</li>
                <li>Employer/sponsor letter confirming residential address</li>
              </ul>

              <h3 className="text-white font-display font-semibold">Legal Persons and Arrangements</h3>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Full business name and any trading name</li>
                <li>Registered or business address</li>
                <li>Name/address of legal representative in the UAE (if located outside the UAE)</li>
                <li>Date and place of incorporation/registration</li>
                <li>Certificate of incorporation/registration</li>
                <li>Articles of association or similar documents</li>
                <li>Valid commercial/professional license</li>
                <li>Identity of directors/partners/trustees/equivalent executives</li>
                <li>
                  For a trust: certified trust deed and documentary evidence of current trustees’ appointment
                </li>
              </ul>

              <h3 className="text-white font-display font-semibold">Legal Representatives</h3>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Legalised power of attorney</li>
                <li>Legalised memorandum/articles of association</li>
                <li>Where authority not covered, legalised board resolution and power of attorney</li>
                <li>Natural person items (a)–(e) above</li>
              </ul>
              <p className="text-white/80">
                Where originals cannot be obtained (no physical contact), the counterparty is high risk and
                copies must be certified as true by a person of good standing (e.g., lawyer, notary, accountant,
                bank manager, police officer, embassy/consulate employee).
              </p>
              <p className="text-white/80">
                Downloading publicly available information from official sources (e.g., regulator/government
                websites) is sufficient for verification. Reputable KYC information providers, bank references,
                and reliable public databases can be used on a risk-sensitive basis.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Source of Wealth / Source of Funds</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Information regarding the origin of the funds</li>
                <li>Structure of the funds (e.g., loans or credit finance)</li>
                <li>Information regarding the source of wealth and income</li>
              </ul>
              <p className="text-white/80">
                If satisfactory evidence cannot be obtained, do not commence/perform the transaction, terminate
                the relationship, and consider filing a suspicious transaction report. Capital Chain should only
                accept payment from authorised and recognised banks.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Indicators of Suspicious Activity</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Non-transparent or unusually complex ownership structure</li>
                <li>Counterparty/funds originate from high-risk countries</li>
                <li>Payment in cash</li>
                <li>Unusual income or inconsistency with standard of living</li>
                <li>Unusual rise in counterparty’s financial means</li>
                <li>Anonymous transactions</li>
                <li>Use of front companies, shells, trusts, or complex structures</li>
                <li>Use of complex loans/credit/mortgage schemes</li>
                <li>Reliance on third parties to transact on a counterparty’s behalf</li>
                <li>Manipulation of valuations (e.g., successive sales at higher prices)</li>
              </ul>
              <p className="text-white/80">
                Sanctions compliance screening on all applicable lists is mandatory prior to establishing a
                relationship. If a counterparty appears on a list, do not commence/perform transactions,
                terminate the relationship, and file a suspicious transaction report.
              </p>
              <p className="text-white/80 font-semibold">DNFBP Obligations (UAE Central Bank)</p>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Maintain up-to-date awareness of UN sanctions lists and compare with counterparty databases</li>
                <li>Screen prior to relationships/transactions to ensure not listed</li>
                <li>Freeze/unfreeze funds of listed persons as instructed by authorities</li>
                <li>Immediately report to supervisory authorities when listed persons are identified or funds frozen</li>
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


