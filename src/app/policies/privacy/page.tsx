"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
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
            <h1 className="text-3xl md:text-5xl font-extrabold font-display">Privacy Policy</h1>
            <p className="mt-3 text-white/70">
              Learn how we collect, use, and protect your information.
            </p>
            <div className="mt-5 text-white/70 max-w-3xl mx-auto">
              Our commitment to transparency and data protection.
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="rounded-xl border border-[#0f2b45] bg-[#061A2F] p-6 md:p-10 shadow-xl space-y-8">
            <p className="text-white/80">
              When you use our services, we collect and store personal data about you. This Privacy Statement
              (the &#39;Policy&#39;) informs you of the methods used to handle your personal data.
            </p>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Included in this Privacy Policy</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-1">
                <li>How do you get in touch with the person in charge of your personal data?</li>
                <li>In what ways do we obtain and what information do we gather about you?</li>
                <li>How do we make use of the information you provide about yourself?</li>
                <li>How do we keep our customers' personal information safe and secure?</li>
                <li>We share your personal information with whom?</li>
                <li>What about international organizations and third countries?</li>
                <li>When it comes to enforcing your rights, how do you go about it?</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Who is the Controller and Whom to Contact</h2>
              <p className="text-white/80">
                The controller of personal data is Capital Chain with its registered office at 01, Ground
                Floor, Rodney Court Building, Rodney Bay, Gros-Islet, St Lucia. You can contact Capital Chain at
                info@capitalchain.co regarding any questions and the exercise of rights relating to the processing
                of your personal data.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">What and How We Collect</h2>
              <p className="text-white/80">
                Personal data includes any information that can be used to identify or connect you to a
                specific individual. We collect data you provide and data collected automatically.
              </p>
              <h3 className="text-white font-display font-semibold">Data You Provide</h3>
              <p className="text-white/80">
                Whether you sign up for an account, provide personal information, place an order, participate in
                an event or project, or connect with us via customer service or social media, we may collect:
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-1">
                <li>
                  Identification and contact data: name, surname, phone number, email, postal address, date of
                  birth, username and password; records of communications and warranty claims.
                </li>
                <li>Payment data: bank account information.</li>
              </ul>
              <h3 className="text-white font-display font-semibold">Data Collected Automatically</h3>
              <ul className="list-disc pl-6 text-white/80 space-y-1">
                <li>
                  Device and usage data (e.g., IP address, visit time/date, country, login/logout information,
                  account settings, value of fictitious capital, account currency, business strategy).
                </li>
              </ul>
              <h3 className="text-white font-display font-semibold">Data from Third Parties</h3>
              <p className="text-white/80">
                If you link social accounts or trading platforms, we may receive financial data (instrument type,
                open/close times, profit/loss) and social data (username, profile picture, email) per their
                privacy policies.
              </p>
              <h3 className="text-white font-display font-semibold">Phone Number Usage</h3>
              <p className="text-white/80">
                Additionally, when you provide your phone number during account creation, events, partnership, or
                any other communication with us, we may store and use this number for service-related and
                promotional communication purposes, including marketing outreach via manual or automated (AI-based)
                phone calls or SMS.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">How We Use Your Data</h2>
              <h3 className="text-white font-display font-semibold">Creating a user account and signing up</h3>
              <p className="text-white/80">We use your data to register and manage your account.</p>
              <ul className="list-disc pl-6 text-white/80 space-y-1">
                <li>Personal information: name, email, phone number.</li>
                <li>Legal basis: necessary to register and provide access.</li>
              </ul>
              <h3 className="text-white font-display font-semibold">Providing services and contractual performance</h3>
              <ul className="list-disc pl-6 text-white/80 space-y-1">
                <li>
                  Data used: name, address, phone, email, payment info, service usage, simulated transactions,
                  linked social profile data.
                </li>
                <li>
                  Legal basis: contract performance and legitimate interests; retention for a short time
                  post-service to preserve and defend rights.
                </li>
              </ul>
              <h3 className="text-white font-display font-semibold">Marketing and events</h3>
              <ul className="list-disc pl-6 text-white/80 space-y-1">
                <li>Data used: contact and identification data.</li>
                <li>
                  Legal basis: legitimate interests in staying in touch with users; consent where required.
                </li>
              </ul>
              <h3 className="text-white font-display font-semibold">Social media and service improvement</h3>
              <ul className="list-disc pl-6 text-white/80 space-y-1">
                <li>Data used: name, email, phone and other data you provide via social media.</li>
                <li>Legal basis: legitimate interests to improve and secure services.</li>
              </ul>
              <h3 className="text-white font-display font-semibold">Phone-Based Marketing Communication</h3>
              <ul className="list-disc pl-6 text-white/80 space-y-1">
                <li>Data used: phone number and, where applicable, other identification/contact data.</li>
                <li>
                  Legal basis: consent or legitimate interests. You may withdraw consent or opt out at any time.
                </li>
              </ul>
              <h3 className="text-white font-display font-semibold">Analytics</h3>
              <ul className="list-disc pl-6 text-white/80 space-y-1">
                <li>
                  Data used: name, address, phone, email, device information, website/service usage, and
                  simulated trades results.
                </li>
                <li>Legal basis: legitimate interests to understand preferences and improve services.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Security</h2>
              <p className="text-white/80">
                Personal data is stored in an encrypted database with organizational and technical safeguards to
                prevent unauthorized access, modification, disclosure, or destruction.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Retention</h2>
              <p className="text-white/80">
                Personal data is processed only as necessary for stated goals or as required by law, then
                destroyed or anonymized. We retain data for: contract duration and enforcement (complaints,
                claims, legal actions); up to 5 years for marketing communications (or until you unsubscribe);
                or for periods required by relevant law.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Third Parties Use of Your Information</h2>
              <p className="text-white/80">
                We may share data with trading platform providers; group companies; cloud providers; payment
                operators; financial institutions; service/support providers; IT, marketing and communications
                agencies; consultants; postal providers; and other third parties where you consent or where
                legally required. Recipients are contractually required to protect data and follow our
                instructions. Some third parties act as controllers and process data under their own policies.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Your Rights</h2>
              <p className="text-white/80">
                Send a request to info@capitalchain.co to exercise your rights (including withdrawal of consent):
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-1">
                <li>Right of access: confirmation and a copy of personal data (first copy free).</li>
                <li>Right to rectification: correct inaccurate data; account tools available to edit details.</li>
                <li>
                  Right to erasure: when data is no longer needed; consent withdrawn with no other basis; direct
                  marketing objection with no overriding grounds; subject to legal exceptions (e.g., freedom of
                  expression, legal obligations, public interest, legal claims).
                </li>
                <li>Right to restriction: request temporary halt of processing (GDPR Art. 18).</li>
                <li>
                  Right to data portability: receive data in a structured, commonly used, machine-readable format
                  and transmit to another controller when processed by automated means.
                </li>
                <li>
                  Right to object: to processing based on legitimate interests; we will cease unless compelling
                  legitimate grounds or legal claims prevail. Objections to marketing are honored immediately.
                </li>
                <li>
                  Right to withdraw consent: at any time; does not affect lawfulness of prior processing.
                </li>
                <li>
                  Right not to be subject to automated decisions: including profiling, unless permitted by law or
                  based on explicit consent.
                </li>
                <li>
                  Right to lodge a complaint: with the relevant supervisory authority if you believe misuse of
                  personal information has occurred.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#00E0E0] font-display font-bold text-xl">Requirements to be Met</h2>
              <p className="text-white/80">
                We reserve the right to amend this policy at any time and will notify you of changes. A copy is
                available in your Client Section. Use of your own affiliate link shall not count as affiliate
                commission.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


