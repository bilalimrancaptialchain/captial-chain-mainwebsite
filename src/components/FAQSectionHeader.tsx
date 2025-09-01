import React from "react";

interface FAQSectionHeaderProps {
  greenText: string;
  whiteText: string;
}

const FAQSectionHeader: React.FC<FAQSectionHeaderProps> = ({ greenText, whiteText }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 items-center sm:items-start space-x-4 mb-8">
      <div className="relative">
        <div className="w-20 p-4 md:w-28 aspect-square rounded-xl flex items-center justify-center bg-[#063E4E]">
          <svg
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_293_49)">
              <path
                d="M29.6008 46.6303C27.5841 46.6303 25.9517 44.9955 25.9517 42.9812C25.9517 38.2665 29.2408 33.9581 35.4613 30.5304C40.0957 27.976 42.4943 22.9135 41.5675 17.6345C40.7111 12.7617 36.7093 8.75987 31.8365 7.90355C28.3212 7.28563 24.8667 8.12736 22.1031 10.273C19.3906 12.3822 17.6853 15.5375 17.4274 18.9311C17.2742 20.9381 15.5177 22.4464 13.5132 22.2932C11.5037 22.1399 9.99785 20.3883 10.1511 18.3789C10.5647 12.9369 13.2893 7.88165 17.6269 4.51232C22.035 1.08459 27.5306 -0.260711 33.0967 0.714815C40.9398 2.09174 47.3793 8.5312 48.7562 16.3743C50.2085 24.6432 46.2797 32.9023 38.9839 36.9237C35.3932 38.9015 33.2499 41.1663 33.2499 42.9812C33.2499 44.9955 31.6176 46.6303 29.6008 46.6303ZM25.9517 55.1448C25.9517 57.1591 27.5865 58.7939 29.6008 58.7939C31.6151 58.7939 33.2499 57.1591 33.2499 55.1448C33.2499 53.1305 31.6151 51.4957 29.6008 51.4957C27.5865 51.4957 25.9517 53.1305 25.9517 55.1448Z"
                fill="#00E0E0"
              />
            </g>
            <defs>
              <clipPath id="clip0_293_49">
                <rect
                  width="58.3857"
                  height="58.3857"
                  fill="white"
                  transform="translate(0.407959 0.408203)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <span className="text-teal-400 font-semibold text-4xl md:text-6xl font-display text-center sm:text-start">
          {greenText}
        </span>
        <span className="text-white text-2xl md:text-4xl font-display text-center sm:text-start">
          {whiteText}
        </span>
      </div>
    </div>
  );
};

export default FAQSectionHeader;