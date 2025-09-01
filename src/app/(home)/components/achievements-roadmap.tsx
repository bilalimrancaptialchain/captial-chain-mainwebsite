"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { RoadmapItem } from "@/constants/roadmapData";
import { useLanguage } from "@/hooks/useLanguage";
import TimelineItem from "./TimelineItem";

const AchievementsRoadmap: React.FC = () => {
  const { t, getTranslation } = useLanguage();

  // Create translated roadmap data
  const translatedRoadmapData: RoadmapItem[] = [
    {
      id: 1,
      year: "2025",
      quarterInfo: t("roadmap.quarters.quarter1"),
      title: t("roadmap.items.item1.title"),
      description: getTranslation(
        "roadmap.items.item1.description"
      ) as string[],
      position: "left",
    },
    {
      id: 2,
      year: "2025",
      quarterInfo: t("roadmap.quarters.quarter2"),
      title: t("roadmap.items.item2.title"),
      description: getTranslation(
        "roadmap.items.item2.description"
      ) as string[],
      position: "right",
    },
    {
      id: 3,
      year: "2025",
      quarterInfo: t("roadmap.quarters.quarter3"),
      title: t("roadmap.items.item3.title"),
      description: getTranslation(
        "roadmap.items.item3.description"
      ) as string[],
      position: "left",
    },
    {
      id: 4,
      year: "2025",
      quarterInfo: t("roadmap.quarters.quarter4"),
      title: t("roadmap.items.item4.title"),
      description: getTranslation(
        "roadmap.items.item4.description"
      ) as string[],
      position: "right",
    },
    {
      id: 5,
      year: "2026",
      quarterInfo: t("roadmap.quarters.quarter1"),
      title: t("roadmap.items.item5.title"),
      description: getTranslation(
        "roadmap.items.item5.description"
      ) as string[],
      position: "left",
    },
    {
      id: 6,
      year: "2026",
      quarterInfo: t("roadmap.quarters.quarter2"),
      title: t("roadmap.items.item6.title"),
      description: getTranslation(
        "roadmap.items.item6.description"
      ) as string[],
      position: "right",
    },
  ];
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const [lineProgress, setLineProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animatedItemsRef = useRef<number[]>([]);

  // Update ref when state changes
  useEffect(() => {
    animatedItemsRef.current = animatedItems;
  }, [animatedItems]);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerTop = containerRect.top;
    const containerHeight = containerRect.height;
    const viewportHeight = window.innerHeight;

    // Calculate progress based on scroll position
    const scrollProgress = Math.max(
      0,
      Math.min(
        1,
        (viewportHeight - containerTop) /
          (viewportHeight + containerHeight * 0.5)
      )
    );

    // Update line progress
    setLineProgress(scrollProgress * 100);

    // Check which items should be animated
    const currentAnimatedItems = animatedItemsRef.current;
    const newAnimatedItems: number[] = [...currentAnimatedItems];
    let hasNewItems = false;

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const itemId = index + 1;

        if (
          itemCenter < viewportHeight * 0.8 &&
          !newAnimatedItems.includes(itemId)
        ) {
          newAnimatedItems.push(itemId);
          hasNewItems = true;
        }
      }
    });

    if (hasNewItems) {
      setAnimatedItems(newAnimatedItems);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const timelineLineStyles = {
    height: `${lineProgress}%`,
    backgroundColor: "#00E0E0",
    boxShadow: "0 0 10px #00E0E0",
  };

  return (
    <div className="w-full flex items-center justify-center bg-[#040614]">
      <div
        ref={containerRef}
        className="relative py-20 px-4 overflow-hidden w-full max-w-7xl"
        style={{
          background: "#040614",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/home/roadmap.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="mx-auto relative z-10 w-full">
          <div className="text-center mb-16">
            <h2 className="text-gray-400 text-lg mb-4 font-medium">
              {t("roadmap.subtitle")}
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-white">{t("roadmap.title")} </span>
              <span className="text-[#00E0E0]">
                {t("roadmap.titleHighlight")}
              </span>
            </h1>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line - Desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block">
              <div
                className="w-full h-full rounded-full"
                style={{ backgroundColor: "#152E57" }}
              />
              <div
                className="absolute top-0 left-0 w-full rounded-full transition-all duration-300 ease-out"
                style={timelineLineStyles}
              />
            </div>

            {/* Vertical Line - Mobile */}
            <div className="absolute start-6 w-1 h-full md:hidden">
              <div
                className="w-full h-full rounded-full"
                style={{ backgroundColor: "#152E57" }}
              />
              <div
                className="absolute top-0 left-0 w-full rounded-full transition-all duration-300 ease-out"
                style={timelineLineStyles}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16">
              {translatedRoadmapData.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={index}
                  isActive={animatedItems.includes(item.id)}
                  ref={(el: HTMLDivElement | null) => {
                    itemRefs.current[index] = el;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsRoadmap;
