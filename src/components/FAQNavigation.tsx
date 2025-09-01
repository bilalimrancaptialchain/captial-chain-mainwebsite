import React from "react";
import Link from "next/link";

interface NavigationItem {
  id: number;
  title: string;
  href: string;
}

interface FAQNavigationProps {
  items: NavigationItem[];
  headerText?: string;
  baseUrl?: string;
}

const FAQNavigation: React.FC<FAQNavigationProps> = ({
  items,
  headerText,
  baseUrl = "/faq",
}) => {
  return (
    <div className="w-full">
      <div
        className="border-[0.5px] border-faq rounded-xl p-9"
        style={{
          background: "radial-gradient(#011F3F, #071327)",
          boxShadow: "0 0 20px rgba(45, 212, 191, 0.1)",
        }}
      >
        {headerText && (
          <h3 className="text-teal-400 font-semibold text-xl font-display mb-6 px-3">
            {headerText}
          </h3>
        )}
        <div className="space-y-4">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`${baseUrl}/${item.href}`}
              className="flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:bg-white/5 group"
            >
              <span className="text-white font-display text-lg group-hover:text-teal-400 transition-colors">
                {item.title}
              </span>

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQNavigation;
