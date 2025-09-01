import React from "react";
import { RoadmapItem } from "@/constants/roadmapData";
import BranchSVG from "./BranchSVG";
import { useLanguageContext } from "@/contexts/LanguageContext";

interface TimelineItemProps {
  item: RoadmapItem;
  index: number;
  isActive: boolean;
  ref: (el: HTMLDivElement | null) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = React.forwardRef<
  HTMLDivElement,
  TimelineItemProps
>(({ item, isActive }, ref) => {
  const { language } = useLanguageContext();
  const isRTL = language === "fa";
  return (
    <div className="relative" ref={ref}>
      {/* Circle - Desktop */}
      <div
        className={`absolute ${
          isRTL
            ? "right-1/2 transform translate-x-1/2"
            : "left-1/2 transform -translate-x-1/2"
        } -translate-y-1/2 top-1/2 hidden md:block`}
      >
        <div
          className={`w-7 h-7 rounded-full border-4 transition-all duration-500 ${
            isActive
              ? "bg-[#00E0E0] border-[#00E0E0] shadow-[0_0_15px_#00E0E0]"
              : "bg-transparent border-[#152E57]"
          }`}
        />
      </div>

      {/* Circle - Mobile */}
      <div
        className={`absolute ${
          isRTL
            ? "start-6 transform translate-x-1/2"
            : "left-6 transform -translate-x-1/2"
        } -translate-y-1/2 top-1/2 md:hidden`}
      >
        <div
          className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
            isActive
              ? "bg-[#00E0E0] border-[#00E0E0] shadow-[0_0_10px_#00E0E0]"
              : "bg-transparent border-[#152E57]"
          }`}
        />
      </div>

      {/* Branch SVG */}
      <BranchSVG position={item.position} isActive={isActive} />

      {/* Content - Desktop */}
      <div
        className={`hidden md:block ${
          isRTL
            ? item.position === "left"
              ? "text-right md:flex md:justify-end md:w-11/12 lg:w-10/12"
              : "ms-auto text-right md:block md:w-11/12 lg:w-10/12"
            : item.position === "left"
            ? "ms-40 text-left w-4/12"
            : "ml-auto text-left w-4/12"
        }`}
      >
        <div
          className={`transform transition-all duration-700 delay-300 ${
            isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="p-6 rounded-lg transition-all duration-300">
            <div className="flex items-center gap-2">
              <p className="text-active font-display font-semibold">
                {item.year}
              </p>{" "}
              <p className="font-display text-white/90 font-light">
                / {item.quarterInfo}
              </p>
            </div>
            <h3
              className="text-lg font-medium mb-3 font-display"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 224, 224, 0.69) 0%, rgba(0, 122, 122, 0.48) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item.title}
            </h3>
            <div className="space-y-1">
              {item.description.map((desc, descIndex) => (
                <p key={descIndex} className="text-gray-300 text-sm">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content - Mobile */}
      <div className={`md:hidden ${isRTL ? "mr-16 ml-4" : "ml-16 mr-4"}`}>
        <div
          className={`transform transition-all duration-700 delay-300 ${
            isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="p-4 rounded-lg">
            <div className="text-xs font-medium mb-1 flex items-center gap-1">
              <p className="text-active font-display font-semibold">
                {item.year}
              </p>{" "}
              <p className="font-display text-white/90 font-light">
                / {item.quarterInfo}
              </p>
            </div>
            <h3
              className="text-base font-medium mb-3 font-display"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 224, 224, 0.69) 0%, rgba(0, 122, 122, 0.48) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item.title}
            </h3>
            <div className="space-y-1">
              {item.description.map((desc, descIndex) => (
                <p key={descIndex} className="text-gray-300 text-xs">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";

export default TimelineItem;
