"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#071327] text-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo.png"
            alt="Capital Chain"
            width={140}
            height={40}
            priority
          />
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          4<span className="text-[#00E0E0]">0</span>4
        </h1>
        <p className="mt-3 text-xl md:text-2xl text-white/80 font-display">
          Page not found
        </p>
        <p className="mt-3 text-white/60">
          The page you are looking for might have been moved, removed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-gradient-to-b from-[#00E0E0] to-[#10B981] text-[#001018] font-semibold transition-colors hover:from-[#00E0E0]/90 hover:to-[#10B981]/90"
          >
            Return to Homepage
          </Link>
          <Link
            href="/contact_us"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 border border-[#00E0E0] text-white hover:bg-[#00E0E0]/10"
          >
            Contact Support
          </Link>
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          <div className="h-40 rounded-xl border border-[#0e2a46] bg-[#061A2F] flex items-center justify-center">
            <p className="text-white/60">
              &quot;Your ideas, our risk&quot; — keep exploring Capital Chain.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}


