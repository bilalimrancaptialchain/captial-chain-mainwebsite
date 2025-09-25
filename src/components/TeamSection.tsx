import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TeamMember } from "@/constants/teamMembers";
import { useLanguage } from "@/hooks/useLanguage";
import {
  aboutTeamSectionVariants,
  aboutTeamTitleVariants,
  aboutTeamMemberVariants,
  aboutTeamMemberImageVariants,
  aboutTeamMemberInfoVariants,
  aboutViewport,
} from "@/lib/animations/aboutAnimations";

interface TeamSectionProps {
  title: string;
  teamMembers: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, teamMembers }) => {
  const { t } = useLanguage();
  return (
    <motion.div
      className="py-16 md:py-24"
      style={{ backgroundColor: "#000F1E" }}
      variants={aboutTeamSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={aboutViewport}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Title */}
        <motion.h2
          className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16"
          variants={aboutTeamTitleVariants}
        >
          {title}
        </motion.h2>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
          {teamMembers.map((member, index) => {
            return (
              <motion.div
                key={member.id}
                className="w-[300px] md:w-[320px]"
                variants={aboutTeamMemberVariants}
                custom={index}
              >
                <div className="bg-white rounded-xl border border-faq overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Image */}
                  <motion.div
                    className="relative h-64 sm:h-72 md:h-80 w-full bg-gray-200"
                    variants={aboutTeamMemberImageVariants}
                  >
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      fill
                      loading="lazy"
                      className="object-cover w-full h-full"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      onError={(e) => {
                        console.error(`Failed to load image: ${member.imageSrc}`);
                        e.currentTarget.style.display = 'none';
                        // Show fallback
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder - hidden by default */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-sm" style={{ display: 'none' }}>
                      {member.name}
                    </div>
                  </motion.div>

                  {/* Info Section */}
                  <motion.div
                    className="p-4 sm:p-6 md:p-8"
                    style={{ backgroundColor: "#000F1E" }}
                    variants={aboutTeamMemberInfoVariants}
                  >
                    <h3 className="text-active font-display text-lg sm:text-xl font-bold text-center">
                      {member.name}
                    </h3>
                    <p className="text-white text-xs sm:text-sm text-center font-display mt-1">
                      {t(member.positionKey)}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamSection;
