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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap md:justify-center gap-6 md:gap-8 w-full md:w-fit">
          {teamMembers.map((member, index) => {
            // Check if this is one of the last two items and we're on desktop
            const isLastTwoItems = index >= teamMembers.length - 2;
            const shouldCenter = isLastTwoItems && teamMembers.length % 3 !== 0;

            return (
              <motion.div
                key={member.id}
                className={`min-h-96 md:min-w-80 w-full md:w-fit ${
                  shouldCenter ? "lg:col-start-2 lg:col-end-3" : ""
                } ${
                  index === teamMembers.length - 2 &&
                  teamMembers.length % 3 === 2
                    ? "lg:col-start-1"
                    : ""
                }
                ${
                  index === teamMembers.length - 1 &&
                  teamMembers.length % 3 === 2
                    ? "lg:col-start-3"
                    : ""
                }`}
                variants={aboutTeamMemberVariants}
                custom={index}
              >
                <div className="bg-white rounded-xl border border-faq overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Image */}
                  <motion.div
                    className="relative h-80"
                    variants={aboutTeamMemberImageVariants}
                  >
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Info Section */}
                  <motion.div
                    className="p-8 py-4"
                    style={{ backgroundColor: "#000F1E" }}
                    variants={aboutTeamMemberInfoVariants}
                  >
                    <h3 className="text-active font-display text-xl font-bold text-start">
                      {member.name}
                    </h3>
                    <p className="text-white text-sm text-start font-display">
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
