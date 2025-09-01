"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import {
  commissionHeaderVariants,
  commissionItemVariants,
  commissionCardVariants,
  commissionContentVariants,
  commissionCardItemVariants,
  commissionContainerVariants,
  commissionMessageVariants,
  commissionMessageItemVariants,
  commissionSectionVariants,
} from "@/lib/animations/partnership";

interface CommissionTier {
  id: string;
  title: string;
  description: string;
  commission: string;
}

const getCommissionTiers = (t: (key: string) => string): CommissionTier[] => [
  {
    id: "pioneer",
    title: t("partnership.commissionModel.tiers.pioneer.title"),
    description: t("partnership.commissionModel.tiers.pioneer.description"),
    commission: t("partnership.commissionModel.tiers.pioneer.commission"),
  },
  {
    id: "legend",
    title: t("partnership.ranks.tiers.legend.name"),
    description: t("partnership.commissionModel.tiers.expert.description"),
    commission: t("partnership.commissionModel.tiers.expert.commission"),
  },
  {
    id: "immortal",
    title: t("partnership.ranks.tiers.immortal.name"),
    description: t("partnership.commissionModel.tiers.legend.description"),
    commission: t("partnership.commissionModel.tiers.legend.commission"),
  },
];

const SectionHeader: React.FC<{ t: (key: string) => string }> = ({ t }) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      variants={commissionHeaderVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h5
        className="lg:text-7xl md:text-4xl text-2xl text-white font-medium font-display"
        variants={commissionItemVariants}
      >
        {t("partnership.commissionModel.title")}
      </motion.h5>
      <motion.p
        className="lg:text-4xl md:text-2xl text-lg text-active font-display font-normal"
        variants={commissionItemVariants}
      >
        {t("partnership.commissionModel.subtitle")}
      </motion.p>
    </motion.div>
  );
};

const CommissionCard: React.FC<{ tier: CommissionTier; index: number }> = ({
  tier,
  index,
}) => {
  // Create dynamic variants with index-based delays
  const dynamicCardVariants = {
    ...commissionCardVariants,
    visible: {
      ...commissionCardVariants.visible,
      transition: {
        ...commissionCardVariants.visible.transition,
        delay: index * 0.2,
      },
    },
  };

  const dynamicContentVariants = {
    ...commissionContentVariants,
    visible: {
      ...commissionContentVariants.visible,
      transition: {
        ...commissionContentVariants.visible.transition,
        delay: index * 0.2 + 0.3,
      },
    },
  };

  return (
    <motion.div
      className="sm:w-96 w-full bg-gradient-to-r from-active to-[#086565] p-[1px] border-[0.5px] border-faq rounded-2xl cursor-pointer"
      variants={dynamicCardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="w-full bg-[#0e2548] flex items-start justify-center flex-col rounded-2xl px-8 py-6"
        variants={dynamicContentVariants}
      >
        <motion.h5
          className="md:text-4xl text-2xl text-active font-semibold font-display"
          variants={commissionCardItemVariants}
        >
          {tier.title}
        </motion.h5>
        <motion.p
          className="md:text-xl text-lg text-white font-medium"
          variants={commissionCardItemVariants}
        >
          {tier.description}
        </motion.p>
        <motion.p
          className="bg-blue-charcoal font-display md:text-xl text-lg text-active font-medium px-4 py-1 rounded-[7px] border border-active/28 mt-3"
          variants={commissionCardItemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(0, 224, 224, 0.5)",
            transition: { duration: 0.2 },
          }}
        >
          {tier.commission}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const CommissionCards: React.FC<{ tiers: CommissionTier[] }> = ({ tiers }) => {
  return (
    <motion.div
      className="flex items-center justify-center flex-wrap md:gap-10 gap-5"
      variants={commissionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {tiers.map((tier, index) => (
        <CommissionCard key={tier.id} tier={tier} index={index} />
      ))}
    </motion.div>
  );
};

const PartnershipMessage: React.FC<{ t: (key: string) => string }> = ({
  t,
}) => {
  return (
    <motion.div
      className="relative w-full flex items-center justify-center flex-col py-20 px-4 bg-[#000A13] overflow-hidden"
      variants={commissionMessageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-90"
      >
        <source src="/videos/Render01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute w-full h-full z-10 bg-black/20" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center flex-col">
        <motion.h4
          className="max-w-4xl lg:text-6xl md:text-4xl text-2xl text-white font-medium font-display leading-20 text-center"
          variants={commissionMessageItemVariants}
        >
          {t("partnership.commissionModel.partnershipMessage.title")}{" "}
          <motion.span
            className="text-active font-display"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t(
              "partnership.commissionModel.partnershipMessage.titleHighlight1"
            )}
          </motion.span>{" "}
          {t("partnership.commissionModel.partnershipMessage.titleTopEnd")}
          <br />
          {t("partnership.commissionModel.partnershipMessage.titleMiddle")}{" "}
          <motion.span
            className="text-active font-display"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t(
              "partnership.commissionModel.partnershipMessage.titleHighlight2"
            )}
          </motion.span>
        </motion.h4>
        <motion.p
          className="max-w-4xl lg:text-2xl md:text-xl text-sm text-white/90 font-display text-center mt-12"
          variants={commissionMessageItemVariants}
        >
          {t("partnership.commissionModel.partnershipMessage.description")}
        </motion.p>
      </div>
    </motion.div>
  );
};

const CommissionModel: React.FC = () => {
  const { t } = useLanguage();
  const commissionTiers = getCommissionTiers(t);

  return (
    <motion.section
      className="w-full flex items-center justify-center flex-col md:py-20 py-10 md:gap-20 gap-10 px-4"
      variants={commissionSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <SectionHeader t={t} />
      <CommissionCards tiers={commissionTiers} />
      <PartnershipMessage t={t} />
    </motion.section>
  );
};

export default CommissionModel;
