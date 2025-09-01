"use client";
import CheckedIcon from "@/components/icons/checked-icon";
import {
  paymentMethods,
  challengeFeatures,
  challengePricing,
  challengeDetails,
  type ChallengeData,
  type PaymentMethod,
  type ChallengeConfig,
  type ChallengeDetails,
} from "@/constants/trading-challenge";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguageContext } from "@/contexts/LanguageContext";
import {
  tradingChallengeSectionVariants,
  tradingChallengeHeaderVariants,
  tradingChallengeContentVariants,
  tradingChallengeToggleVariants,
  tradingChallengeTableVariants,
  tradingChallengeTableRowVariants,
  tradingChallengeFeatureVariants,
  tradingChallengePricingVariants,
  tradingChallengePricingCardVariants,
  tradingChallengeButtonVariants,
  tradingChallengePaymentVariants,
  tradingChallengeViewport,
  tradingChallengeTransitions,
} from "@/lib/animations/tradingChallengeAnimations";

type ChallengeType = "Standard" | "Atomic";
type StepType = "1" | "2";
type AccountSizeType = "5k" | "10k" | "25k" | "50k" | "100k";

const TradingChallenge = () => {
  const { t } = useLanguageContext();
  const [typeChallenge, setTypeChallenge] = useState<ChallengeType>("Standard");
  const [stepChallenge, setStepChallenge] = useState<StepType>("1");
  const [accountSize, setAccountSize] = useState<AccountSizeType>("5k");

  const stepDisplayName = useMemo(() => {
    return stepChallenge === "1"
      ? t("tradingChallenge.oneStep")
      : t("tradingChallenge.twoStep");
  }, [stepChallenge, t]);

  const pricing = useMemo(() => {
    const key =
      `${typeChallenge}-${stepChallenge}-${accountSize}` as keyof typeof challengePricing;
    return challengePricing[key];
  }, [typeChallenge, stepChallenge, accountSize]);

  const currentChallengeDetails = useMemo(() => {
    return challengeDetails[typeChallenge];
  }, [typeChallenge]);

  return (
    <motion.section
      className="w-full flex items-center justify-center flex-col px-5 lg:py-32 py-20 bg-[url('/images/home/bg-trading-challenge.webp')] opacity-70 bg-no-repeat bg-top bg-cover relative"
      variants={tradingChallengeSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={tradingChallengeViewport}
    >
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="z-10 w-full flex flex-col items-center justify-center">
        <SectionHeader />

        <motion.div
          className="w-full max-w-7xl flex lg:items-start items-center justify-center lg:flex-row flex-col gap-7 mt-20"
          variants={tradingChallengeContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={tradingChallengeViewport}
        >
          <ChallengeDetailsPanel
            typeChallenge={typeChallenge}
            stepChallenge={stepChallenge}
            stepDisplayName={stepDisplayName}
            accountSize={accountSize}
            currentChallengeDetails={currentChallengeDetails}
            onTypeChange={setTypeChallenge}
            onStepChange={setStepChallenge}
            onAccountSizeChange={setAccountSize}
          />

          <PricingPanel
            typeChallenge={typeChallenge}
            stepDisplayName={stepDisplayName}
            pricing={pricing}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
interface AccountSizeSelectorProps {
  selectedSize: AccountSizeType;
  onSizeChange: (size: AccountSizeType) => void;
}

const AccountSizeSelector = ({
  selectedSize,
  onSizeChange,
}: AccountSizeSelectorProps) => {
  const accountSizes: { value: AccountSizeType; label: string }[] = [
    { value: "5k", label: "$5,000" },
    { value: "10k", label: "$10,000" },
    { value: "25k", label: "$25,000" },
    { value: "50k", label: "$50,000" },
    { value: "100k", label: "$100,000" },
  ];

  return (
    <motion.div
      className="w-full p-[1px] bg-[linear-gradient(105.83deg,#00E0E0_-11.09%,#086565_100.34%)] rounded-2xl"
      variants={tradingChallengeToggleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={tradingChallengeViewport}
    >
      <div className="w-full px-4 py-3 bg-black rounded-2xl flex items-center gap-2 flex-wrap">
        {accountSizes.map((size) => (
          <motion.button
            key={size.value}
            onClick={() => onSizeChange(size.value)}
            className={`flex-1 min-w-[80px] px-3 py-2 rounded-[7px] cursor-pointer transition-all ease-in-out duration-200 text-sm ${
              selectedSize === size.value
                ? "bg-active shadow-[0px_0px_31px_-10px_#00E0E0] text-slate-900"
                : "border-active bg-slate-900 text-active"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={tradingChallengeTransitions.button}
          >
            {size.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

const SectionHeader = () => {
  const { t } = useLanguageContext();

  return (
    <motion.h1
      className="lg:text-5xl text-3xl text-white font-semibold text-center"
      variants={tradingChallengeHeaderVariants}
      initial="hidden"
      whileInView="visible"
      viewport={tradingChallengeViewport}
    >
      {t("tradingChallenge.title")}{" "}
      <span className="text-active">
        {t("tradingChallenge.titleHighlight")}
      </span>
    </motion.h1>
  );
};

interface ToggleButtonProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const ToggleButton = ({
  options,
  selectedValue,
  onChange,
}: ToggleButtonProps) => (
  <motion.div
    className="w-full p-[1px] bg-[linear-gradient(105.83deg,#00E0E0_-11.09%,#086565_100.34%)] rounded-2xl"
    variants={tradingChallengeToggleVariants}
    initial="hidden"
    whileInView="visible"
    viewport={tradingChallengeViewport}
  >
    <div className="w-full px-4 py-3 bg-black rounded-2xl flex items-center gap-3.5">
      {options.map((option) => (
        <motion.button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`w-full px-6 py-2 rounded-[7px] cursor-pointer transition-all ease-in-out duration-200 ${
            selectedValue === option.value
              ? "bg-active shadow-[0px_0px_31px_-10px_#00E0E0] text-base text-slate-900"
              : "border-active bg-slate-900 text-base text-active"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={tradingChallengeTransitions.button}
        >
          {option.label}
        </motion.button>
      ))}
    </div>
  </motion.div>
);

interface ChallengeDetailsPanelProps {
  typeChallenge: ChallengeType;
  stepChallenge: StepType;
  stepDisplayName: string;
  accountSize: AccountSizeType;
  currentChallengeDetails: ChallengeDetails;
  onTypeChange: (type: ChallengeType) => void;
  onStepChange: (step: StepType) => void;
  onAccountSizeChange: (size: AccountSizeType) => void;
}

const ChallengeDetailsPanel = ({
  typeChallenge,
  stepChallenge,
  stepDisplayName,
  accountSize,
  currentChallengeDetails,
  onTypeChange,
  onStepChange,
  onAccountSizeChange,
}: ChallengeDetailsPanelProps) => {
  const { t } = useLanguageContext();

  return (
    <div className="w-full lg:max-w-[640px] flex items-start justify-start flex-col gap-7 lg:order-1 order-2">
      <div className="w-full flex items-center justify-center lg:flex-row flex-col gap-6">
        <ToggleButton
          options={[
            { value: "Standard", label: t("tradingChallenge.standard") },
            { value: "Atomic", label: t("tradingChallenge.atomic") },
          ]}
          selectedValue={typeChallenge}
          onChange={(value) => onTypeChange(value as ChallengeType)}
        />

        <ToggleButton
          options={[
            { value: "1", label: t("tradingChallenge.oneStep") },
            { value: "2", label: t("tradingChallenge.twoStep") },
          ]}
          selectedValue={stepChallenge}
          onChange={(value) => onStepChange(value as StepType)}
        />
      </div>

      <AccountSizeSelector
        selectedSize={accountSize}
        onSizeChange={onAccountSizeChange}
      />

      <ChallengeTable
        typeChallenge={typeChallenge}
        stepChallenge={stepChallenge}
        stepDisplayName={stepDisplayName}
        currentChallengeDetails={currentChallengeDetails}
      />
    </div>
  );
};

interface ChallengeTableProps {
  typeChallenge: ChallengeType;
  stepChallenge: StepType;
  stepDisplayName: string;
  currentChallengeDetails: ChallengeDetails;
}

const ChallengeTable = ({
  typeChallenge,
  stepChallenge,
  stepDisplayName,
  currentChallengeDetails,
}: ChallengeTableProps) => (
  <motion.div
    style={{
      background:
        "radial-gradient(116.47% 110.87% at -3.02% -22.1%, rgba(0, 224, 224, 0.82) 0%, #0E1B34 54.91%, #000E1C 62.15%)",
    }}
    className="w-full flex items-center justify-start flex-col rounded-2xl md:px-9 px-4 pt-12 pb-8"
    variants={tradingChallengeTableVariants}
    initial="hidden"
    whileInView="visible"
    viewport={tradingChallengeViewport}
  >
    <ChallengeTableHeader
      typeChallenge={typeChallenge}
      stepChallenge={stepChallenge}
      stepDisplayName={stepDisplayName}
    />

    <ChallengeTableBody
      typeChallenge={typeChallenge}
      stepChallenge={stepChallenge}
      currentChallengeDetails={currentChallengeDetails}
    />

    <ChallengeFeatures />
  </motion.div>
);

interface ChallengeTableHeaderProps {
  typeChallenge: ChallengeType;
  stepChallenge: StepType;
  stepDisplayName: string;
}

const ChallengeTableHeader = ({
  typeChallenge,
  stepChallenge,
  stepDisplayName,
}: ChallengeTableHeaderProps) => {
  const { t } = useLanguageContext();
  const isOneStep = stepChallenge === "1";

  return (
    <div className="w-full flex items-end justify-between lg:mb-12">
      <div className="w-1/2 flex flex-col items-start">
        <h2 className="md:text-2xl text-lg text-white font-semibold">
          {typeChallenge}
        </h2>
        <p className="md:text-base text-sm text-active font-light">
          {stepDisplayName} {t("tradingChallenge.evaluation")}
        </p>
      </div>
      <div className="w-1/2 flex items-center justify-between">
        {(isOneStep
          ? [t("tradingChallenge.step1"), t("tradingChallenge.funded")]
          : [
              t("tradingChallenge.step1"),
              t("tradingChallenge.step2"),
              t("tradingChallenge.funded"),
            ]
        ).map((step) => (
          <p key={step} className="md:text-sm text-xs text-white font-semibold">
            {step}
          </p>
        ))}
      </div>
    </div>
  );
};

interface ChallengeTableBodyProps {
  typeChallenge: ChallengeType;
  stepChallenge: StepType;
  currentChallengeDetails: ChallengeDetails;
}

const ChallengeTableBody = ({
  typeChallenge,
  stepChallenge,
  currentChallengeDetails,
}: ChallengeTableBodyProps) => {
  const dynamicChallengeData: ChallengeData[] = [
    {
      id: 1,
      name: "Profit Target",
      image: "/images/home/target.png",
      step1: currentChallengeDetails.profitTarget.step1,
      step2: currentChallengeDetails.profitTarget.step2,
      funded: currentChallengeDetails.profitTarget.funded,
    },
    {
      id: 2,
      name: "Maximum Loss Limit",
      image: "/images/home/speed-limit.png",
      step1: currentChallengeDetails.maximumLossLimit.step1,
      step2: currentChallengeDetails.maximumLossLimit.step2,
      funded: currentChallengeDetails.maximumLossLimit.funded,
    },
    {
      id: 3,
      name: "Daily Loss Limit",
      image: "/images/home/sun-energy.png",
      step1: currentChallengeDetails.dailyLossLimit.step1,
      step2: currentChallengeDetails.dailyLossLimit.step2,
      funded: currentChallengeDetails.dailyLossLimit.funded,
    },
    {
      id: 4,
      name: "Maximum Loss Limit Type",
      image: "/images/home/coding.png",
      step1: currentChallengeDetails.maximumLossLimitType.step1,
      step2: currentChallengeDetails.maximumLossLimitType.step2,
      funded: currentChallengeDetails.maximumLossLimitType.funded,
    },
    {
      id: 5,
      name: "Profit Split",
      image: "/images/home/division.png",
      step1: currentChallengeDetails.profitSplit.step1,
      step2: currentChallengeDetails.profitSplit.step2,
      funded: currentChallengeDetails.profitSplit.funded,
    },
    {
      id: 6,
      name: "Refundable Fee",
      image: "/images/home/recycle.png",
      step1: currentChallengeDetails.refundableFee.step1,
      step2: currentChallengeDetails.refundableFee.step2,
      funded: currentChallengeDetails.refundableFee.funded,
    },
  ];

  return (
    <>
      {dynamicChallengeData.map((item, index) => (
        <ChallengeTableRow
          key={item.id}
          item={item}
          typeChallenge={typeChallenge}
          stepChallenge={stepChallenge}
          isLast={index === dynamicChallengeData.length - 1}
        />
      ))}
    </>
  );
};

interface ChallengeTableRowProps {
  item: ChallengeData;
  typeChallenge: ChallengeType;
  stepChallenge: StepType;
  isLast: boolean;
}

const ChallengeTableRow = ({
  item,
  typeChallenge,
  stepChallenge,
  isLast,
}: ChallengeTableRowProps) => {
  const renderValue = (value: string) => {
    return value === "100%" ? <CheckedIcon /> : value;
  };

  const isOneStep = stepChallenge === "1";

  return (
    <motion.div
      className={`w-full py-4 flex items-center border-b ${
        !isLast ? "border-active" : "border-transparent"
      }`}
      variants={tradingChallengeTableRowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={tradingChallengeViewport}
    >
      <div className="w-1/2 flex items-center justify-start gap-5">
        <Image
          src={item.image}
          alt={item.name}
          width={20}
          height={20}
          loading="lazy"
        />
        <p className="md:text-sm text-xs text-white font-light">{item.name}</p>
      </div>
      <div className="w-1/2 flex items-center justify-between">
        <p className="md:text-sm text-xs text-active font-semibold">
          {renderValue(item.step1)}
        </p>
        {!isOneStep && (
          <p className="md:text-sm text-xs text-active font-semibold">
            {renderValue(item.step2)}
          </p>
        )}
        <p className="md:text-sm text-xs text-active font-semibold">
          {renderValue(item.funded)}
        </p>
      </div>
    </motion.div>
  );
};

const ChallengeFeatures = () => (
  <div className="w-full flex items-center md:flex-row flex-col gap-5 md:mt-0 mt-10">
    {challengeFeatures.map((feature) => (
      <FeatureItem key={feature.id} feature={feature} />
    ))}
  </div>
);

interface FeatureItemProps {
  feature: { id: number; name: string; enabled: boolean };
}

const FeatureItem = ({ feature }: FeatureItemProps) => (
  <motion.div
    className="w-full bg-[linear-gradient(273.47deg,rgba(0,224,224,0.7)_28.3%,rgba(7,17,34,0.7)_109.32%)] p-[0.75px] rounded-4xl"
    variants={tradingChallengeFeatureVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={tradingChallengeViewport}
  >
    <div className="w-full rounded-4xl flex items-center justify-between px-2 bg-blue-charcoal py-1 pe-4">
      <p className="text-sm font-light text-gradient">{feature.name}</p>
      {feature.enabled && (
        <div className="size-7 flex items-center justify-center bg-teal-700 rounded-full">
          <CheckedIcon />
        </div>
      )}
    </div>
  </motion.div>
);

interface PricingPanelProps {
  typeChallenge: ChallengeType;
  stepDisplayName: string;
  pricing?: ChallengeConfig;
}

const PricingPanel = ({
  typeChallenge,
  stepDisplayName,
  pricing,
}: PricingPanelProps) => (
  <motion.div
    className="w-full flex lg:items-start items-center justify-start flex-col gap-7 lg:order-2 order-1"
    variants={tradingChallengePricingVariants}
    initial="hidden"
    whileInView="visible"
    viewport={tradingChallengeViewport}
  >
    <PricingCard
      typeChallenge={typeChallenge}
      stepDisplayName={stepDisplayName}
      pricing={pricing}
    />

    {/* <RefundableNotice /> */}

    <PaymentMethods />
  </motion.div>
);

interface PricingCardProps {
  typeChallenge: ChallengeType;
  stepDisplayName: string;
  pricing?: ChallengeConfig;
}

const PricingCard = ({
  typeChallenge,
  stepDisplayName,
  pricing,
}: PricingCardProps) => {
  const { t } = useLanguageContext();

  return (
    <motion.div
      className="bg-[radial-gradient(116.47%_110.87%_at_-3.02%_-22.1%,rgba(0,224,224,0.82)_0%,#0E1B34_44.91%,#000E1C_62.15%)] w-full md:h-[405px] h-96 rounded-2xl mg:p-7 p-12 lg:pt-12 flex items-start justify-between flex-col"
      variants={tradingChallengePricingCardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={tradingChallengeViewport}
    >
      <div className="flex items-start justify-start flex-col">
        <p className="md:text-2xl text-lg text-active font-light">
          {t("tradingChallenge.pricing")}
        </p>
        {pricing ? (
          <p className="md:text-6xl text-4xl text-white font-bold mb-8">
            ${pricing.price}{" "}
            <span className="text-3xl text-white/32 font-light line-through">
              ${pricing.originalPrice}
            </span>
          </p>
        ) : (
          <p className="md:text-2xl text-lg text-red-400 font-bold mb-8">
            {t("tradingChallenge.notAvailable")}
          </p>
        )}
        <p className="md:text-3xl text-2xl text-white font-semibold">
          {typeChallenge}
        </p>
        <p className="md:text-2xl text-lg text-active font-light">
          {stepDisplayName}
        </p>
      </div>
      <motion.div
        variants={tradingChallengeButtonVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        whileTap="tap"
        viewport={tradingChallengeViewport}
        className="w-full"
      >
        <Link
          href="https://Checkout.capitalchain.co"
          className="w-full bg-gradient-to-r from-[#00E0E0] to-[#10B981] md:text-2xl text-lg text-black font-medium py-5 rounded-[7px] flex items-center justify-center hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] transition-all hover:inset-shadow-button-home duration-200"
        >
          {t("tradingChallenge.startChallenge")}
        </Link>
      </motion.div>
    </motion.div>
  );
};

const RefundableNotice = () => {
  const { t } = useLanguageContext();

  return (
    <motion.div
      className="w-full md:h-20 h-16 md:rounded-2xl rounded-lg bg-blue-charcoal flex items-center justify-center"
      variants={tradingChallengeFeatureVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={tradingChallengeViewport}
    >
      <p className="md:text-2xl text-lg text-white font-medium">
        {t("tradingChallenge.refundableNotice")}
      </p>
    </motion.div>
  );
};

const PaymentMethods = () => (
  <motion.div
    className="w-full flex items-center justify-center flex-wrap gap-3"
    variants={tradingChallengePaymentVariants}
    initial="hidden"
    whileInView="visible"
    viewport={tradingChallengeViewport}
  >
    {paymentMethods.map((method) => (
      <PaymentMethodItem key={method.id} method={method} />
    ))}
  </motion.div>
);

interface PaymentMethodItemProps {
  method: PaymentMethod;
}

const PaymentMethodItem = ({ method }: PaymentMethodItemProps) => (
  <motion.div
    className="min-h-11 px-6 bg-blue-charcoal flex items-center justify-center rounded-sm overflow-hidden"
    variants={tradingChallengeFeatureVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={tradingChallengeViewport}
  >
    <Image
      src={method.image}
      alt={method.alt}
      width={method.width}
      height={method.height}
      loading="lazy"
      className="object-contain"
    />
  </motion.div>
);

export default TradingChallenge;
