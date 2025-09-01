"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  rankCardVariants,
  rankImageVariants,
  rankTextVariants,
  featureCardVariants,
  featureContentVariants,
  featureItemVariants,
  ranksContainerVariants,
  ranksGridVariants,
  ranksSectionVariants,
} from "@/lib/animations/partnership";
import { useLanguage } from "@/hooks/useLanguage";

// Types
type RankTier = {
  id: string;
  name: string;
  points: string;
  image: string;
};

type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

// Data functions
const getRankTiers = (t: (key: string) => string): RankTier[] => [
  {
    id: "pioneer",
    name: t("partnership.ranks.tiers.pioneer.name"),
    points: t("partnership.ranks.tiers.pioneer.points"),
    image: "/images/partnership/pioneer.webp",
  },
  {
    id: "legend",
    name: t("partnership.ranks.tiers.legend.name"),
    points: t("partnership.ranks.tiers.legend.points"),
    image: "/images/partnership/legend.webp",
  },
  {
    id: "immortal",
    name: t("partnership.ranks.tiers.immortal.name"),
    points: t("partnership.ranks.tiers.immortal.points"),
    image: "/images/partnership/immortal.webp",
  },
];

const getFeatures = (t: (key: string) => string): Feature[] => [
  {
    id: "commissions",
    icon: "/images/partnership/revenue.png",
    title: t("partnership.ranks.features.commissions.title"),
    description: t("partnership.ranks.features.commissions.description"),
  },
  {
    id: "tokens",
    icon: "/images/partnership/gift-card.png",
    title: t("partnership.ranks.features.tokens.title"),
    description: t("partnership.ranks.features.tokens.description"),
  },
  {
    id: "discount",
    icon: "/images/partnership/10-percent.png",
    title: t("partnership.ranks.features.discount.title"),
    description: t("partnership.ranks.features.discount.description"),
  },
  {
    id: "dashboard",
    icon: "/images/partnership/business-report.png",
    title: t("partnership.ranks.features.dashboard.title"),
    description: t("partnership.ranks.features.dashboard.description"),
  },
];

const RankCard: React.FC<{ rank: RankTier; index: number }> = ({
  rank,
  index,
}) => {
  // Create dynamic variants with index-based delays
  const dynamicCardVariants = {
    ...rankCardVariants,
    visible: {
      ...rankCardVariants.visible,
      transition: {
        ...rankCardVariants.visible.transition,
        delay: index * 0.2,
      },
    },
  };

  const dynamicImageVariants = {
    ...rankImageVariants,
    visible: {
      ...rankImageVariants.visible,
      transition: {
        ...rankImageVariants.visible.transition,
        delay: index * 0.2 + 0.3,
      },
    },
  };

  const dynamicTextVariants = {
    ...rankTextVariants,
    visible: {
      ...rankTextVariants.visible,
      transition: {
        ...rankTextVariants.visible.transition,
        delay: index * 0.2 + 0.5,
      },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center flex-col cursor-pointer"
      variants={dynamicCardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={dynamicImageVariants}>
        <Image
          src={rank.image}
          alt={rank.name.toLowerCase()}
          width={262}
          height={280}
          loading="lazy"
          className="md:w-3xs w-48 object-contain"
        />
      </motion.div>
      <motion.h5
        className="md:text-4xl text-2xl text-white font-semibold"
        variants={dynamicTextVariants}
        whileHover={{
          textShadow: "0 0 20px rgba(255,255,255,0.8)",
          transition: { duration: 0.15 },
        }}
      >
        {rank.name}
      </motion.h5>
      <motion.p
        className="md:text-4xl text-2xl text-active"
        variants={dynamicTextVariants}
        whileHover={{
          scale: 1.03,
          textShadow: "0 0 15px rgba(0,224,224,0.8)",
          transition: { duration: 0.15 },
        }}
      >
        {rank.points}
      </motion.p>
    </motion.div>
  );
};

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({
  feature,
  index,
}) => {
  // Create dynamic variants with index-based delays
  const dynamicFeatureCardVariants = {
    ...featureCardVariants,
    visible: {
      ...featureCardVariants.visible,
      transition: {
        ...featureCardVariants.visible.transition,
        delay: index * 0.15,
      },
    },
  };

  const dynamicContentVariants = {
    ...featureContentVariants,
    visible: {
      ...featureContentVariants.visible,
      transition: {
        ...featureContentVariants.visible.transition,
        delay: index * 0.15 + 0.2,
      },
    },
  };

  return (
    <motion.div
      className="w-60 flex items-start justify-center flex-col border-[0.5px] border-faq p-6 rounded-xl cursor-pointer"
      variants={dynamicFeatureCardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={dynamicContentVariants}>
        <motion.div variants={featureItemVariants}>
          <Image
            src={feature.icon}
            alt={feature.id}
            width={33}
            height={33}
            loading="lazy"
            className="object-contain"
          />
        </motion.div>
        <motion.h5
          className="text-base text-active font-semibold text-start font-display leading-5 mt-3"
          variants={featureItemVariants}
        >
          {feature.title}
        </motion.h5>
        <motion.p
          className="text-xs text-white/90 text-start mt-2"
          variants={featureItemVariants}
        >
          {feature.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const RankTiers: React.FC<{ t: (key: string) => string }> = ({ t }) => {
  const rankTiers = getRankTiers(t);

  return (
    <motion.div
      className="flex items-center justify-center flex-wrap md:gap-14 gap-1"
      variants={ranksContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {rankTiers.map((rank, index) => (
        <RankCard key={rank.id} rank={rank} index={index} />
      ))}
    </motion.div>
  );
};

const FeatureGrid: React.FC<{ t: (key: string) => string }> = ({ t }) => {
  const features = getFeatures(t);

  return (
    <motion.div
      className="flex items-stretch justify-center flex-wrap md:gap-10 gap-5"
      variants={ranksGridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} feature={feature} index={index} />
      ))}
    </motion.div>
  );
};

const Ranks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      className="w-full bg-[url('/images/partnership/bg-ranks.webp')] bg-bottom bg-cover bg-no-repeat
      flex items-center justify-center flex-col gap-20 pb-20 pt-10 px-5"
      variants={ranksSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <RankTiers t={t} />
      <FeatureGrid t={t} />
    </motion.section>
  );
};

export default Ranks;
