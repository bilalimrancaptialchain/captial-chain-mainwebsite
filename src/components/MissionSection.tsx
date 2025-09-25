import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MissionBoxData } from "@/constants/aboutMission";
import { useLanguage } from "@/hooks/useLanguage";
import {
  aboutMissionSectionVariants,
  aboutMissionTitleVariants,
  aboutMissionBoxVariants,
  aboutMissionBoxImageVariants,
  aboutMissionDescriptionVariants,
  aboutViewport,
} from "@/lib/animations/aboutAnimations";

interface MissionSectionProps {
  topTitle: string;
  missionText: string;
  bottomText: string;
  backgroundImage: string;
  boxes: MissionBoxData[];
}

const MissionSection: React.FC<MissionSectionProps> = ({
  topTitle,
  missionText,
  bottomText,
  backgroundImage,
  boxes,
}) => {
  const { t } = useLanguage();
  const renderTextWithGreen = (text: string, greenParts: string[]) => {
    if (greenParts.length === 0) {
      return text;
    }

    let result = text;
    greenParts.forEach((greenPart) => {
      const regex = new RegExp(
        `(${greenPart.replace(/[.*+?^${}()|[\\]\\]/g, "\\\\$&")})`,
        "gi"
      );
      result = result.replace(regex, '<span class="text-active">$1</span>');
    });

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <motion.div
      className="relative py-16 md:py-24"
      variants={aboutMissionSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={aboutViewport}
    >
      {/* Background Image */}
      <div
        className="absolute bottom-0 left-0 right-0 h-3/4 rotate-180 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Title */}
        <motion.h2
          className="text-white/80 text-3xl md:text-4xl lg:text-5xl font-normal text-center pb-32 font-display"
          variants={aboutMissionTitleVariants}
        >
          {topTitle}
        </motion.h2>

        {/* Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {boxes.map((box, index) => (
            <motion.div
              key={box.id}
              className="rounded-xl border-[0.5px] border-faq p-6 shadow-xl min-h-60 cursor-pointer bg-[#061A2F]"
              style={{
                boxShadow:
                  "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(25px)",
              }}
              variants={aboutMissionBoxVariants}
              whileHover="hover"
              custom={index}
            >
              {/* Image with 3D effect */}
              <div className="relative mb-6 transform -translate-y-2">
                <motion.div
                  className="absolute mx-auto -top-28"
                  variants={aboutMissionBoxImageVariants}
                >
                  <Image
                    src={box.imageSrc}
                    alt={box.imageAlt}
                    width={248}
                    height={248}
                    loading="lazy"
                    className="w-48 h-48 lg:w-56 lg:h-56 xl:w-62 xl:h-62 object-contain filter drop-shadow-lg mx-auto"
                    style={{
                      filter:
                        "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 0 rgba(255, 255, 255, 0.1))",
                    }}
                  />
                </motion.div>
              </div>

              {/* Text */}
              <p className="text-white text-center text-lg md:text-base leading-relaxed mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
                {renderTextWithGreen(t(box.textKey), box.greenParts)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          className="text-white text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed"
          variants={aboutMissionDescriptionVariants}
        >
          {bottomText}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default MissionSection;
