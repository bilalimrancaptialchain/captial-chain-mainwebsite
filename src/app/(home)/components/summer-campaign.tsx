"use client";

import React, { useState, useEffect } from "react";
import { useLanguageContext } from "@/contexts/LanguageContext";

const SummerCampaign = () => {
  const { t, language } = useLanguageContext();
  const isRTL = language === "fa";

  const steps = [
    {
      id: 1,
      value: t("summerCampaign.values.5k"),
      points: t("summerCampaign.points.1point"),
    },
    {
      id: 2,
      value: t("summerCampaign.values.10k"),
      points: t("summerCampaign.points.2points"),
    },
    {
      id: 3,
      value: t("summerCampaign.values.25k"),
      points: t("summerCampaign.points.3points"),
    },
    {
      id: 4,
      value: t("summerCampaign.values.50k"),
      points: t("summerCampaign.points.4points"),
    },
    {
      id: 5,
      value: t("summerCampaign.values.100k"),
      points: t("summerCampaign.points.5points"),
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length) {
          return 1; // Reset to first step after completing all
        }
        return prev + 1;
      });
    }, 1500); // Change step every 1.5 seconds

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="summer-campaign-section w-full flex items-center justify-center flex-col py-16 md:py-36 gap-14 relative bg-[#000A13]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="summer-campaign-video absolute top-0 left-0 w-full h-full object-cover scale-90"
      >
        <source src="/videos/Render01.mp4" type="video/mp4" />
      </video>
      <div className="summer-campaign-overlay absolute w-full h-full z-10" />
      <div className="w-full px-5 relative z-30">
        <div className="summer-campaign-header max-w-[827px] flex items-center justify-center flex-col gap-4 z-30 mx-auto">
          <p className="summer-campaign-title lg:text-6xl sm:text-4xl text-3xl text-white font-semibold text-center">
            {t("summerCampaign.title")}{" "}
            <span className="summer-campaign-title-highlight text-active">
              {t("summerCampaign.titleHighlight")}
            </span>
            ,
          </p>
          <p className="summer-campaign-subtitle lg:text-4xl text-2xl text-white font-semibold text-center">
            {t("summerCampaign.subtitle")}{" "}
            <span className="summer-campaign-subtitle-highlight text-active">
              {t("summerCampaign.subtitleHighlight")}
            </span>
            .
          </p>
        </div>

        <div className="summer-campaign-description-container w-full max-w-6xl rounded-xl flex items-center justify-center flex-col gap-11 px-10 mt-16 pt-14 pb-9 z-30 mx-auto">
          <p className="summer-campaign-description max-w-[767px] text-2xl text-white text-center">
            {t("summerCampaign.description")}
          </p>
          <p className="summer-campaign-additional-info max-w-[767px] text-xl text-white font-light text-center">
            {t("summerCampaign.additionalInfo")}
          </p>
        </div>

        <div
          className={`summer-campaign-steps-container w-full max-w-[1020px] flex items-center justify-center relative z-30 mx-auto`}
        >
          <div
            className="summer-campaign-progress-bar absolute md:h-5 h-3 bg-active md:top-6 top-3 z-10 transition-all duration-1000 ease-in-out"
            style={{
              width: `${(currentStep / steps.length) * 80}%`,
              ...(isRTL ? { right: "10%" } : { left: "10%" }),
            }}
          />
          {steps.map((item, index) => {
            const stepNumber = index + 1;
            return (
              <div
                key={item.id}
                className="summer-campaign-step w-full flex items-center justify-start flex-col gap-7 z-20"
              >
                <div className="summer-campaign-step-number-container w-full flex items-center justify-center">
                  <p
                    className={`summer-campaign-step-number md:size-16 size-8 md:min-w-16 min-w-8 rounded-full text-black md:text-2xl text-lg flex items-center 
                                  justify-center font-extrabold transition-all duration-500 ${
                                    stepNumber <= currentStep
                                      ? "bg-active shadow-[0px_0px_31px_-13px_#00E0E0]"
                                      : "bg-gray-600"
                                  }`}
                  >
                    {item.id}
                  </p>
                </div>
                <div className="summer-campaign-step-content flex items-center justify-start flex-col">
                  <p className="summer-campaign-step-value md:text-5xl text-xl text-white font-bold">
                    {item.value}
                  </p>
                  <p className="summer-campaign-step-points md:text-2xl text-sm text-active">{item.points}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SummerCampaign;
