import React from "react";
import HeroSection from "./(home)/components/hero-section";
import OurMission from "./(home)/components/our-mission";
import TradingSolution from "./(home)/components/trading-solution";
import SummerCampaign from "./(home)/components/summer-campaign";
import TradingChallenge from "./(home)/components/trading-challenge";
import AchievementsRoadmap from "./(home)/components/achievements-roadmap";
import TestimonialSlider from "@/components/TestimonialSlider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div
          style={{
            background:
              "linear-gradient(181deg, rgba(2, 5, 12, 0.86) 0.86%, #071327 95.11%)",
          }}
          className="min-h-screen pt-44 relative flex items-center justify-start flex-col"
        >
          <HeroSection />
          <OurMission />
          <div id="trading-platforms" className="w-full">
            <TradingSolution />
          </div>
          <div id="airdrop-program" className="w-full">
            <SummerCampaign />
          </div>
          <div id="pricing" className="w-full">
            <TradingChallenge />
          </div>
          <AchievementsRoadmap />
          <TestimonialSlider />
        </div>
      </main>
      <div id="risk-disclosure">
        <Footer />
      </div>
    </>
  );
}
