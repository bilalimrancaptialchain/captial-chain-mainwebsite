"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import {
  propTradingContainerVariants,
  propTradingItemVariants,
  propTradingImageVariants,
  propTradingFloatingVariants,
} from "@/lib/animations/partnership";
import Link from "next/link";

const PropTrading = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      className="w-full min-h-screen bg-[url('/images/partnership/bg-prop-trading.webp')] bg-no-repeat bg-top bg-cover
            flex items-center justify-center flex-col pb-20 lg:pt-0 pt-20 px-4"
      variants={propTradingContainerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Desktop/Tablet 3D Floating Image */}
      <motion.div
        className="hidden md:block"
        variants={propTradingFloatingVariants}
        initial="hidden"
        animate={["visible", "floating"]}
        whileHover="hover"
        style={{
          perspective: "10000px",
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src="/images/partnership/prop-trading.webp"
          alt="prop trading"
          width={600}
          height={600}
          loading="lazy"
          className="w-full object-contain"
          style={{
            transform: "rotateX(15deg) rotateY(-10deg)",
            filter: "drop-shadow(0 25px 50px rgba(0,224,224,0.3))",
          }}
        />
      </motion.div>

      {/* Mobile Simple Image */}
      <motion.div
        className="block md:hidden"
        variants={propTradingImageVariants}
      >
        <Image
          src="/images/partnership/prop-trading.webp"
          alt="prop trading"
          width={600}
          height={600}
          loading="lazy"
          className="w-full max-w-lg object-contain"
        />
      </motion.div>

      <motion.p
        className="lg:text-7xl md:text-4xl text-2xl text-white font-semibold text-center font-display"
        variants={propTradingItemVariants}
      >
        {t("partnership.propTrading.title")}{" "}
        <motion.span
          className="text-active font-display"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {t("partnership.propTrading.titleHighlight1")}
        </motion.span>{" "}
        {t("partnership.propTrading.titleTopEnd")} <br />
        {t("partnership.propTrading.titleMiddle")}{" "}
        <motion.span
          className="text-active font-display"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {t("partnership.propTrading.titleHighlight2")}
        </motion.span>
        <br /> {t("partnership.propTrading.titleEnd")}
      </motion.p>

      <motion.p
        className="lg:text-4xl md:text-2xl text-lg text-white/61 font-light md:mt-5 mt-2 font-display"
        variants={propTradingItemVariants}
      >
        {t("partnership.propTrading.subtitle")}
      </motion.p>

      <div className="flex flex-col md:flex-row gap-4 w-full md:max-w-lg md:mt-10 mt-5">
        <Link
          href={"https://checkout.capitalchain.co/affiliate-signup/"}
          className="
              flex-1 bg-gradient-to-r from-[#00E0E0] to-[#10B981] 
              md:text-xl text-base text-black py-3 duration-200 hover:shadow-[0px_0px_35px_0px_#00E0E075] 
              text-center rounded-[7px] cursor-pointer
            "
        >
          <span className="block font-display font-medium">
            {t("partnership.getStartedNow")}
          </span>
        </Link>

        <Link
          href={"https://checkout.capitalchain.co/affiliate-signin/"}
          className="
              flex-1 bg-transparent border-2 border-active 
              md:text-xl text-base text-[#00E0E0] py-3 duration-200 hover:bg-active hover:text-black 
              text-center rounded-[7px] cursor-pointer transition-all hover:shadow-[0px_0px_35px_0px_#00E0E075]
            "
        >
          <span className="block font-display font-medium">
            {t("partnership.affiliateLogin")}
          </span>
        </Link>
      </div>
    </motion.section>
  );
};

export default PropTrading;
