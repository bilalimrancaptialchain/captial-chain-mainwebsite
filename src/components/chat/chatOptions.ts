import { ChatOption } from "./ChatMessage";

export const getChatOptions = (t: (key: string) => string): ChatOption[] => [
  {
    id: "trading-models",
    label: t("chat.tradingModels"),
    subOptions: [
      {
        id: "prop-trading",
        label: t("chat.propTrading"),
      },
      {
        id: "copy-trading",
        label: t("chat.copyTrading"),
      },
      {
        id: "algo-trading",
        label: t("chat.algoTrading"),
      },
    ],
  },
  {
    id: "account-types",
    label: t("chat.accountTypes"),
    subOptions: [
      {
        id: "challenge",
        label: t("chat.challengeAccount"),
      },
      {
        id: "funded",
        label: t("chat.fundedAccount"),
      },
      {
        id: "demo",
        label: t("chat.demoAccount"),
      },
    ],
  },
  {
    id: "support",
    label: t("chat.support"),
    subOptions: [
      {
        id: "technical",
        label: t("chat.technicalSupport"),
      },
      {
        id: "account-help",
        label: t("chat.accountHelp"),
      },
      {
        id: "billing",
        label: t("chat.billing"),
      },
    ],
  },
  {
    id: "partnership",
    label: t("chat.partnership"),
    subOptions: [
      {
        id: "affiliate",
        label: t("chat.affiliateProgram"),
      },
      {
        id: "ib",
        label: t("chat.introducingBroker"),
      },
      {
        id: "white-label",
        label: t("chat.whiteLabel"),
      },
    ],
  },
  {
    id: "other",
    label: t("chat.other"),
    subOptions: [],
  },
];