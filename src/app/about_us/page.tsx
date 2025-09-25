"use client";
import React from "react";
import AboutContent from "@/components/AboutContent";
// import ImageSection from "@/components/ImageSection";
import MissionSection from "@/components/MissionSection";
import { missionBoxes, missionSectionData } from "@/constants/aboutMission";
import TeamSection from "@/components/TeamSection";
import { teamMembers } from "@/constants/teamMembers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";

export default function AboutUs() {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="min-h-[40vh] pt-40 md:pt-44 pb-20 relative flex items-center justify-center ">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/image_three.webp')",
            }}
          ></div>

          {/* Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(360deg, rgba(7, 19, 39, 0.75) 0%, #071327 81.87%)",
            }}
          ></div>

          {/* Content */}
          <AboutContent
            title={t("about.title")}
            firstText={t("about.firstText")}
            secondText={t("about.secondText")}
            firstTextBoldParts={["Capital Chain", "pioneering force"]}
            secondTextBoldParts={["Dubai's Meydan Free Zone"]}
          />
        </div>

        {/* Mission Section */}
        <MissionSection
          topTitle={t("about.missionTitle")}
          missionText={t("about.whiteText")}
          bottomText={t("about.missionDescription")}
          backgroundImage={missionSectionData.backgroundImage}
          boxes={missionBoxes}
        />


        {/* Team Section */}
        <TeamSection title={t("team.title")} teamMembers={teamMembers} />
      </div>
      <Footer />
    </>
  );
}
