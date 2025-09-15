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
      <main className="main-content flex-1">
        <div
          style={{
            background:
              "linear-gradient(181deg, rgba(2, 5, 12, 0.86) 0.86%, #071327 95.11%)",
          }}
          className="main-background min-h-screen pt-16 md:pt-44 relative flex items-center justify-start flex-col w-full"
        >
          <div className="hero-section-wrapper w-full order-1">
            <HeroSection />
          </div>
          <div className="mission-section-wrapper w-full order-7 md:order-2">
            <OurMission />
          </div>
          <div id="trading-platforms" className="trading-platforms-section w-full order-2 md:order-3">
            <TradingSolution />
          </div>
          <div id="airdrop-program" className="airdrop-program-section w-full order-3 md:order-4">
            <SummerCampaign />
          </div>
          <div id="pricing" className="pricing-section w-full order-4 md:order-5">
            <TradingChallenge />
          </div>
          <div className="roadmap-section-wrapper w-full order-5 md:order-6">
            <AchievementsRoadmap />
          </div>
          <div className="testimonials-section-wrapper w-full order-6 md:order-7">
            <TestimonialSlider />
          </div>
        </div>
      </main>
      <div id="risk-disclosure" className="footer-section">
        <Footer />
      </div>
    </>
  );
}
