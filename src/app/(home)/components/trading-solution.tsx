"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { type TradingSolutionCard } from "@/constants/tradingSolutions";
import {
  sectionVariants,
  titleVariants,
  cardVariants,
  slideUpVariants,
  scaleVariants,
  imageHoverVariants,
  transitions,
} from "@/lib/animations";
import { useLanguageContext } from "@/contexts/LanguageContext";

// Component for individual trading solution card
interface TradingCardProps {
  card: TradingSolutionCard;
  index: number;
}

const TradingCard: React.FC<TradingCardProps> = ({ card, index }) => {
  const baseDelay = 0.2 + index * 0.1;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={`trading-card lg:w-[400px] w-80 lg:h-[343px] h-72 md:w-full bg-blue-charcoal rounded-xl p-6 relative mx-auto ${
        card.isComingSoon ? "opacity-50" : ""
      }`}
      variants={cardVariants}
      whileHover="hover"
      animate="visible"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: card.isComingSoon ? 0.5 : 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ ...transitions.default, delay: baseDelay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="trading-card-inner w-full h-full bg-solution-card rounded-xl flex items-center justify-center flex-col gap-2.5"
        variants={scaleVariants}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ...transitions.fast, delay: baseDelay + 0.1 }}
      >
        <motion.div
          className="trading-card-content w-full h-full rounded-xl flex items-center justify-center flex-col gap-2.5 -translate-y-5"
          variants={slideUpVariants}
          initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.3, delay: baseDelay + 0.1 }}
        >
          <motion.div
            className="trading-card-image-container"
            variants={imageHoverVariants}
            whileHover="hover"
            animate={
              card.isComingSoon && isHovered
                ? { filter: "blur(2px)" }
                : { filter: "blur(0px)" }
            }
            transition={{ duration: 0.2 }}
          >
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              width={250}
              height={250}
              className="trading-card-image lg:size-[250px] size-44"
              loading="lazy"
            />
          </motion.div>
          <motion.h2
            className="trading-card-title lg:text-3xl text-2xl text-active font-semibold"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: baseDelay + 0.15 }}
            animate={
              card.isComingSoon && isHovered
                ? { filter: "blur(1px)" }
                : { filter: "blur(0px)" }
            }
          >
            {card.title}
          </motion.h2>
          <motion.p
            className="trading-card-description text-sm text-white/80 text-center font-normal"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: baseDelay + 0.35 }}
          >
            {card.description}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Coming Soon Overlay for Metatrader5 */}
      {card.isComingSoon && (
        <motion.div
          className="trading-card-overlay absolute inset-0 flex items-center justify-center rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="trading-card-overlay-content bg-black/60 backdrop-blur-sm rounded-lg px-6 py-3"
            initial={{ scale: 0.8, y: 20 }}
            animate={{
              scale: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <p className="trading-card-overlay-text text-white text-xl font-semibold text-center">
              Coming soon ...
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

const TradingSolution = () => {
  const { t } = useLanguageContext();

  // Create translated trading solution cards
  const translatedTradingSolutionCards: TradingSolutionCard[] = [
    {
      id: "tradelocker",
      title: "Tradelocker",
      description: t("tradingSolution.cards.tradelocker"),
      imageSrc: "/images/home/tradelocker.webp",
      imageAlt: "tradelocker",
    },
    {
      id: "volumetrica",
      title: "Volumetrica",
      description: t("tradingSolution.cards.volumetrica"),
      imageSrc: "/images/home/volumetrica.webp",
      imageAlt: "volumetrica",
    },
    {
      id: "metatrader5",
      title: "Metatrader5",
      description: t("tradingSolution.cards.metatrader5"),
      imageSrc: "/images/home/metatrader5.webp",
      imageAlt: "Metatrader5",
      isComingSoon: true,
    },
  ];

  return (
    <motion.section
      className="trading-solution-section w-full bg-[linear-gradient(305.11deg,#101E38_3.34%,#070E1A_106.86%)]
            flex items-center justify-center flex-col py-36 gap-14"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full px-5">
        <motion.h1
          className="trading-solution-title max-w-[720px] lg:text-5xl sm:text-3xl text-2xl text-white font-semibold text-center mx-auto"
          variants={titleVariants}
        >
          {t("tradingSolution.title")}{" "}
          <motion.span
            className="trading-solution-title-highlight text-active"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {t("tradingSolution.titleHighlight1")}
          </motion.span>{" "}
          {t("tradingSolution.titleMiddle")}{" "}
          <motion.span
            className="trading-solution-title-highlight text-active"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            {t("tradingSolution.titleHighlight2")}
          </motion.span>
          .
        </motion.h1>
        <motion.div
          className="trading-solution-cards-container w-full flex items-center justify-center flex-wrap gap-x-8 gap-y-20 md:grid md:grid-cols-3 md:max-w-[1300px] md:gap-8 md:mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transitions.slow, delay: 0.4 }}
        >
          {translatedTradingSolutionCards.map((card, index) => (
            <TradingCard key={card.id} card={card} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TradingSolution;
