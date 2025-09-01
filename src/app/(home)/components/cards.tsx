"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguageContext } from "@/contexts/LanguageContext";

const Cards = () => {
  const { t } = useLanguageContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const cardsData = [
    {
      icon: "/images/home/diamond.webp",
      text: t("tradingSolution.cards.decentralized.text"),
      highlight1: t("tradingSolution.cards.decentralized.highlight1"),
      middleText: t("tradingSolution.cards.decentralized.text2"),
      highlight2: t("tradingSolution.cards.decentralized.highlight2"),
    },
    {
      icon: "/images/home/native_token.webp",
      text: t("tradingSolution.cards.nativeToken.text"),
      highlight1: t("tradingSolution.cards.nativeToken.highlight1"),
      middleText: t("tradingSolution.cards.nativeToken.text2"),
      highlight2: t("tradingSolution.cards.nativeToken.highlight2"),
    },
    {
      icon: "/images/home/copy.webp",
      text: "",
      highlight1: t("tradingSolution.cards.profitSplit.highlight1"),
      middleText: t("tradingSolution.cards.profitSplit.text"),
      highlight2: "",
    },
    {
      icon: "/images/home/no_limit.webp",
      text: "",
      highlight1: t("tradingSolution.cards.noTimeLimit.highlight1"),
      middleText: t("tradingSolution.cards.noTimeLimit.text"),
      highlight2: "",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <motion.div
        className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-7 lg:gap-y-14 gap-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="w-full max-w-[289px] lg:h-40 h-32 bg-card flex items-start justify-end flex-col lg:px-8 px-4 lg:pb-5 pb-3 rounded-xl relative cursor-pointer"
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              },
            }}
            whileHover="hover"
            style={{
              boxShadow: "0 4px 20px rgba(0, 224, 224, 0.1)",
            }}
          >
            <motion.div
              className="lg:size-36 size-24 absolute start-0 bottom-1/2 overflow-hidden"
              variants={{
                hover: {
                  scale: 1.03,
                  y: -4,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
            >
              <Image
                src={card.icon}
                alt="Card Icon"
                width={144}
                height={144}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </motion.div>

            <motion.p
              className="lg:text-base text-sm text-white relative z-10 line-clamp-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
            >
              {card.text}
              {card.highlight1 && (
                <span className="text-active px-1.5">{card.highlight1}</span>
              )}
              {card.middleText}
              {card.highlight2 && (
                <span className="text-active px-1.5">{card.highlight2}</span>
              )}
            </motion.p>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-active/5 to-transparent opacity-0 rounded-xl"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Cards;
