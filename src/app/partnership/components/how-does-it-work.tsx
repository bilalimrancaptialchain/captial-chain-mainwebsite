"use client";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import {
  howItWorksBoxVariants,
  howItWorksContentVariants,
  howItWorksItemVariants,
  howItWorksConnectorVariants,
  howItWorksIconVariants,
  howItWorksRowVariants,
  howItWorksFinalStepVariants,
  howItWorksFinalContentVariants,
  howItWorksFinalItemVariants,
  howItWorksImageVariants,
  howItWorksButtonVariants,
  howItWorksSectionVariants,
  howItWorksTitleVariants,
  howItWorksStepsContainerVariants,
} from "@/lib/animations/partnership";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

// Constants
const COLORS = {
  active: "#00e0e0",
  midnight: "bg-midnight",
  white: "text-white",
  black: "text-black",
} as const;

// Step data type
type StepData = {
  id: number;
  title: string;
  description: string;
};

const getStepsData = (t: (key: string) => string): StepData[] => [
  {
    id: 1,
    title: t("partnership.howItWorks.steps.step1.title"),
    description: t("partnership.howItWorks.steps.step1.description"),
  },
  {
    id: 2,
    title: t("partnership.howItWorks.steps.step2.title"),
    description: t("partnership.howItWorks.steps.step2.description"),
  },
  {
    id: 3,
    title: t("partnership.howItWorks.steps.step3.title"),
    description: t("partnership.howItWorks.steps.step3.description"),
  },
  {
    id: 4,
    title: t("partnership.howItWorks.steps.step4.title"),
    description: t("partnership.howItWorks.steps.step4.description"),
  },
];

// Reusable Components
interface StepBoxProps {
  stepNumber: number;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

const StepBox: React.FC<StepBoxProps> = ({
  stepNumber,
  title,
  description,
  className = "",
  index = 0,
}) => {
  const baseClasses = `
    w-full md:h-48 md:max-w-[455px] ${COLORS.midnight} rounded-[19px] 
    py-8 sm:px-14 px-8 flex items-start justify-center flex-col gap-1
    cursor-pointer
  `;

  // Create dynamic variants with index-based delays
  const dynamicBoxVariants = {
    ...howItWorksBoxVariants,
    visible: {
      ...howItWorksBoxVariants.visible,
      transition: {
        ...howItWorksBoxVariants.visible.transition,
        delay: index * 0.2,
      },
    },
  };

  const dynamicContentVariants = {
    ...howItWorksContentVariants,
    visible: {
      ...howItWorksContentVariants.visible,
      transition: {
        ...howItWorksContentVariants.visible.transition,
        delay: index * 0.2 + 0.3,
      },
    },
  };

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      variants={dynamicBoxVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={dynamicContentVariants}>
        <motion.p
          className="lg:text-2xl text-lg text-white font-semibold"
          variants={howItWorksItemVariants}
        >
          Step {stepNumber}:{" "}
          <motion.span
            className="text-active"
            whileHover={{
              textShadow: "0 0 15px rgba(0,224,224,0.8)",
              transition: { duration: 0.2 },
            }}
          >
            {title}
          </motion.span>
        </motion.p>
        <motion.p
          className="lg:text-lg text-sm text-white font-light"
          variants={howItWorksItemVariants}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

interface ConnectorProps {
  direction?: "horizontal" | "vertical";
  rotation?: number;
  className?: string;
  index?: number;
}

const Connector: React.FC<ConnectorProps> = ({
  direction = "horizontal",
  rotation = 0,
  className = "",
  index = 0,
}) => {
  const isHorizontal = direction === "horizontal";
  const baseClasses = isHorizontal
    ? "min-w-8 border border-active relative md:flex items-center justify-center hidden"
    : "min-h-8 max-w-fit border border-active relative flex items-center justify-center";

  // Create dynamic variants with index-based delays
  const dynamicConnectorVariants = {
    ...howItWorksConnectorVariants,
    visible: {
      ...howItWorksConnectorVariants.visible,
      transition: {
        ...howItWorksConnectorVariants.visible.transition,
        delay: index * 0.2 + 0.4,
      },
    },
  };

  const dynamicIconVariants = {
    ...howItWorksIconVariants,
    hidden: { ...howItWorksIconVariants.hidden, rotate: rotation - 180 },
    visible: {
      ...howItWorksIconVariants.visible,
      rotate: rotation,
      transition: {
        ...howItWorksIconVariants.visible.transition,
        delay: index * 0.2 + 0.6,
      },
    },
  };

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      variants={dynamicConnectorVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        variants={dynamicIconVariants}
        whileHover="hover"
        className="absolute"
      >
        <PlayIcon fill={COLORS.active} />
      </motion.div>
    </motion.div>
  );
};

const MobileConnector: React.FC = () => (
  <div className="w-full md:hidden flex items-center justify-center">
    <div className="w-full flex items-center justify-center">
      <Connector direction="vertical" rotation={90} />
    </div>
  </div>
);

const VerticalConnector: React.FC<{ reverse?: boolean }> = ({
  reverse = false,
}) => (
  <div className="w-full flex items-center justify-center">
    {reverse && <div className="w-full md:block hidden"></div>}
    <div className="w-full flex items-center justify-center">
      <Connector direction="vertical" rotation={90} />
    </div>
    {!reverse && <div className="w-full md:block hidden"></div>}
  </div>
);

const StepRow: React.FC<{
  leftStep: StepData;
  rightStep: StepData;
  connectorRotation?: number;
  rowIndex?: number;
}> = ({ leftStep, rightStep, connectorRotation = 0, rowIndex = 0 }) => {
  return (
    <motion.div
      variants={howItWorksRowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center justify-center md:flex-row flex-col">
        <StepBox
          stepNumber={leftStep.id}
          title={leftStep.title}
          description={leftStep.description}
          index={rowIndex * 2}
        />
        <Connector rotation={connectorRotation} index={rowIndex * 2 + 1} />
        <MobileConnector />
        <StepBox
          stepNumber={rightStep.id}
          title={rightStep.title}
          description={rightStep.description}
          index={rowIndex * 2 + 1}
        />
      </div>
      <VerticalConnector />
    </motion.div>
  );
};

const FinalStep: React.FC<{ t: (key: string) => string }> = ({ t }) => {
  const { language } = useLanguageContext();
  const isRTL = language === "fa";
  return (
    <motion.div
      className={cn(
        `
      w-full md:h-44 rounded-[19px] py-8 sm:px-14 px-8 
      flex items-start justify-between relative md:flex-row flex-col
       from-[#030914] via-[#071327] to-[#51D3DE]
      cursor-pointer
      `,
        isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r"
      )}
      variants={howItWorksFinalStepVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="md:w-1/2 w-full flex items-start justify-center flex-col gap-1"
        variants={howItWorksFinalContentVariants}
      >
        <motion.p
          className="lg:text-2xl text-lg text-white font-semibold"
          variants={howItWorksFinalItemVariants}
        >
          Step 5:{" "}
          <motion.span
            className="text-active"
            whileHover={{
              textShadow: "0 0 15px rgba(0,224,224,0.8)",
              transition: { duration: 0.2 },
            }}
          >
            {t("partnership.howItWorks.steps.step5.title")}
          </motion.span>
        </motion.p>
        <motion.p
          className="lg:text-lg text-sm text-white font-light"
          variants={howItWorksFinalItemVariants}
        >
          {t("partnership.howItWorks.steps.step5.description")}
        </motion.p>
      </motion.div>
      <div className="w-full h-56 md:hidden block"></div>
      <motion.div
        variants={howItWorksImageVariants}
        whileHover="hover"
        className="absolute -bottom-10 end-0"
      >
        <Image
          src="/images/partnership/step5.webp"
          alt="Step 5 illustration"
          width={358}
          height={262}
          className="object-contain"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
};

const CTAButton: React.FC<{ t: (key: string) => string }> = ({ t }) => {
  return (
    <motion.div
      variants={howItWorksButtonVariants}
      initial="hidden"
      whileInView="visible"
      className="w-full mx-auto flex items-center justify-center"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Link
        href={"https://checkout.capitalchain.co/affiliate-signup/"}
        className="
          w-full md:max-w-lg bg-gradient-to-r from-[#00E0E0] to-[#10B981] 
          md:text-xl text-base text-black py-3 duration-200 hover:shadow-[0px_0px_35px_0px_#00E0E075] 
          md:mt-10 mt-5 text-center rounded-[7px] block
        "
      >
        <span className="block font-display font-medium">
          {t("partnership.getStartedNow")}
        </span>
      </Link>
    </motion.div>
  );
};

// Main Component
const HowDoesItWork: React.FC = () => {
  const { t } = useLanguage();
  const stepsData = getStepsData(t);

  return (
    <motion.section
      className="w-full flex items-center justify-center flex-col px-5 pb-24 md:pt-44 pt-24 gap-11"
      variants={howItWorksSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="lg:text-5xl md:text-3xl text-2xl text-active font-semibold"
        variants={howItWorksTitleVariants}
        whileHover="hover"
      >
        {t("partnership.howDoesItWork")}
      </motion.h2>

      <motion.div
        className="flex items-center justify-center flex-col md:mt-20 mt-10"
        variants={howItWorksStepsContainerVariants}
      >
        <StepRow
          leftStep={stepsData[0]}
          rightStep={stepsData[1]}
          rowIndex={0}
        />

        <StepRow
          leftStep={stepsData[2]}
          rightStep={stepsData[3]}
          connectorRotation={180}
          rowIndex={1}
        />

        <VerticalConnector reverse />

        <FinalStep t={t} />
      </motion.div>

      <CTAButton t={t} />
    </motion.section>
  );
};

export default HowDoesItWork;
