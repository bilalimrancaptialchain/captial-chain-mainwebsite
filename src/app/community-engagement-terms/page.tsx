"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CommunityEngagementTermsPage() {
  const pdfUrl = "/documents/Community-Engagement-Program -Guideline-Terms.pdf";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#071327] text-white">
        {/* Hero */}
        <section className="relative min-h-[30vh] pt-24 md:pt-28 flex items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/about_mission_bg.webp')", opacity: 0.15 }} />
          <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 py-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold font-display">
              Community Engagement Program – Terms & Conditions
            </h1>
            <p className="mt-3 text-white/70">
              Please read these terms carefully before applying to the Program.
            </p>
            <div className="mt-5">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-b from-[#00E0E0] to-[#10B981] text-[#001018] font-semibold"
              >
                View PDF Guide
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="rounded-xl border border-[#0f2b45] bg-[#061A2F] p-6 md:p-10 shadow-xl">
            <p className="text-white/80 mb-6">
              By applying to and participating in the Community Engagement Program (&quot;Program&quot;), you agree to the following terms and conditions:
            </p>

            <ol className="space-y-8 list-decimal pl-6">
              <li>
                <h2 className="text-[#00E0E0] font-display font-bold text-xl mb-2">Eligibility</h2>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>The Program is only available to first-time users.</li>
                  <li>Individuals who have previously received accounts through influencer giveaways are not eligible to participate.</li>
                  <li>The Program is separate from any airdrop initiative and is not included in such campaigns.</li>
                  <li>You must have more than 100 social media followers to be eligible.</li>
                </ul>
              </li>

              <li>
                <h2 className="text-[#00E0E0] font-display font-bold text-xl mb-2">Application & Approval</h2>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>All applications will be reviewed by the Company’s team.</li>
                  <li>Participation is subject to final approval. Submission of an application does not guarantee acceptance into the Program.</li>
                </ul>
              </li>

              <li>
                <h2 className="text-[#00E0E0] font-display font-bold text-xl mb-2">Participant Obligations</h2>
                <p className="text-white/80 mb-2">Approved participants (&quot;Funded Traders&quot;) are required to:</p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>Collaborate in interviews, promotional content, or case studies as requested.</li>
                  <li>Post reviews and actively engage in social media and community initiatives.</li>
                </ul>
                <p className="text-white/80 mt-4 mb-2">Participants must maintain ongoing engagement with the community, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>Following official channels.</li>
                  <li>Keeping shared posts, stories, or other promotional content active.</li>
                </ul>
              </li>

              <li>
                <h2 className="text-[#00E0E0] font-display font-bold text-xl mb-2">Loss of Eligibility</h2>
                <p className="text-white/80 mb-2">Any act of disengagement, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>Unfollowing official channels,</li>
                  <li>Deleting posts, stories, or promotional content,</li>
                  <li>Withdrawing from community activity,</li>
                </ul>
                <p className="text-white/80 mt-4 mb-2">may result in:</p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>Immediate termination of Program participation,</li>
                  <li>Loss of eligibility for a funded account,</li>
                  <li>Cancellation of any pending or future payouts.</li>
                </ul>
              </li>

              <li>
                <h2 className="text-[#00E0E0] font-display font-bold text-xl mb-2">General</h2>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>The Company reserves the right to amend or update these Terms & Conditions at any time.</li>
                  <li>The Company’s decisions regarding eligibility, approval, and termination are final and binding.</li>
                </ul>
              </li>

              <li>
                <h2 className="text-[#00E0E0] font-display font-bold text-xl mb-2">Sign Up and Approval Flow</h2>
                <p className="text-white/80">
                  Please refer to the PDF guide for the detailed approval guidelines and flow.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


