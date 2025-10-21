"use client";

import Link from "next/link";
import React from "react";

export default function NotificationBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] w-full h-8 bg-gradient-to-r from-[#00E0E0] to-[#16B3B3] text-[#06212A] overflow-hidden">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center">
        <div className="relative w-full overflow-hidden">
          <div className="whitespace-nowrap will-change-transform animate-[cc-ticker_20s_linear_infinite]">
            <span className="mr-12 font-medium">
              Please review our Terms of Use — it has been updated.
              <Link href="/terms-of-use" className="underline ml-2">
                Read now
              </Link>
            </span>
            <span className="mr-12 font-medium">
              Please review our Terms of Use — it has been updated.
              <Link href="/terms-of-use" className="underline ml-2">
                Read now
              </Link>
            </span>
            <span className="mr-12 font-medium">
              Please review our Terms of Use — it has been updated.
              <Link href="/terms-of-use" className="underline ml-2">
                Read now
              </Link>
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes cc-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}


