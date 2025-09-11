export interface ChallengeData {
  id: number;
  name: string;
  image: string;
  step1: string;
  step2: string;
  funded: string;
}

export interface PaymentMethod {
  id: number;
  name: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

export interface ChallengeConfig {
  type: "Standard" | "Atomic";
  step: "1" | "2";
  price: number;
  originalPrice: number;
}

export interface ChallengeDetails {
  profitTarget: {
    step1: string;
    step2: string;
    funded: string;
  };
  maximumLossLimit: {
    step1: string;
    step2: string;
    funded: string;
  };
  dailyLossLimit: {
    step1: string;
    step2: string;
    funded: string;
  };
  maximumLossLimitType: {
    step1: string;
    step2: string;
    funded: string;
  };
  profitSplit: {
    step1: string;
    step2: string;
    funded: string;
  };
  refundableFee: {
    step1: string;
    step2: string;
    funded: string;
  };
}

export interface Challenge {
  name: string;
  type: string;
  swap_free: boolean;
  maximum_drawdown_type: string;
  phase_1_configuration: {
    target_profit: string;
    daily_drawdown: string;
    maximum_drawdown: string;
    minimum_trading_days: number;
  };
  phase_2_configuration?: {
    target_profit: string;
    daily_drawdown: string;
    maximum_drawdown: string;
    minimum_trading_days: number;
  };
  live_account_configuration: {
    daily_drawdown: string;
    maximum_drawdown: string;
    target_profit: string;
    payout_rules: {
      minimum_trading_days: number;
      consistency_rule: string;
      profit_split: string;
      minimum_payout: string;
      refundable_fee: string;
    };
  };
  pricing: {
    "5k_account": string;
    "10k_account": string;
    "25k_account": string;
    "50k_account": string;
    "100k_account": string;
  };
}

export interface ChallengeFeature {
  id: number;
  name: string;
  enabled: boolean;
}

export interface TradingChallengeData {
  challenges: Challenge[];
  payment_methods: PaymentMethod[];
  challenge_features: ChallengeFeature[];
}

export const dataChalengeType: ChallengeData[] = [
  {
    id: 1,
    name: "Profit Target",
    image: "/images/home/target.png",
    step1: "10%",
    step2: "5%",
    funded: "∞",
  },
  {
    id: 2,
    name: "Maximum Loss Limit",
    image: "/images/home/speed-limit.png",
    step1: "6%",
    step2: "10%",
    funded: "10%",
  },
  {
    id: 3,
    name: "Daily Loss Limit",
    image: "/images/home/sun-energy.png",
    step1: "3%",
    step2: "5%",
    funded: "5%",
  },
  {
    id: 4,
    name: "Maximum Loss Limit Type",
    image: "/images/home/coding.png",
    step1: "Static",
    step2: "Static",
    funded: "Static",
  },
  {
    id: 5,
    name: "Profit Split",
    image: "/images/home/division.png",
    step1: "80%",
    step2: "80%",
    funded: "80%",
  },
  {
    id: 6,
    name: "Refundable Fee",
    image: "/images/home/recycle.png",
    step1: "100%",
    step2: "100%",
    funded: "100%",
  },
];

export const paymentMethods: PaymentMethod[] = [
  {
    id: 1,
    name: "Visa",
    image: "/images/home/visa.png",
    alt: "visa",
    width: 52,
    height: 15,
  },
  {
    id: 2,
    name: "American Express",
    image: "/images/home/american.png",
    alt: "american express",
    width: 66,
    height: 23,
  },
  {
    id: 3,
    name: "PayPal",
    image: "/images/home/paypal.png",
    alt: "paypal",
    width: 66,
    height: 17,
  },
  {
    id: 4,
    name: "Mastercard",
    image: "/images/home/mastercard.png",
    alt: "mastercard",
    width: 33,
    height: 26,
  },
  {
    id: 5,
    name: "Bitcoin",
    image: "/images/home/bitcoin.png",
    alt: "bitcoin",
    width: 96,
    height: 44,
  },
];

export const tradingChallengeData: TradingChallengeData = {
  challenges: [
    {
      name: "Atomic",
      type: "One evaluation phase",
      swap_free: false,
      maximum_drawdown_type: "Static",
      phase_1_configuration: {
        target_profit: "10%",
        daily_drawdown: "3%",
        maximum_drawdown: "7%",
        minimum_trading_days: 4,
      },
      live_account_configuration: {
        daily_drawdown: "3%",
        maximum_drawdown: "7%",
        target_profit:"∞",
        payout_rules: {
          minimum_trading_days: 30,
          consistency_rule: "25%",
          profit_split: "80%",
          minimum_payout: "$100.0",
          refundable_fee: "100%",
        },
      },
      pricing: {
        "5k_account": "$48.0",
        "10k_account": "$77.0",
        "25k_account": "$199.0",
        "50k_account": "$319.0",
        "100k_account": "$577.0",
      },
    },
    {
      name: "Atomic",
      type: "Two evaluation phases",
      swap_free: false,
      maximum_drawdown_type: "Static",
      phase_1_configuration: {
        target_profit: "8%",
        daily_drawdown: "5%",
        maximum_drawdown: "12%",
        minimum_trading_days: 4,
      },
      phase_2_configuration: {
        target_profit: "5%",
        daily_drawdown: "5%",
        maximum_drawdown: "12%",
        minimum_trading_days: 4,
      },
      live_account_configuration: {
        daily_drawdown: "5%",
        maximum_drawdown: "12%",
        target_profit:"∞",
        payout_rules: {
          minimum_trading_days: 30,
          consistency_rule: "25%",
          profit_split: "80%",
          minimum_payout: "$100.0",
          refundable_fee: "100%",
        },
      },
      pricing: {
        "5k_account": "$54.0",
        "10k_account": "$85.0",
        "25k_account": "$220.0",
        "50k_account": "$349.0",
        "100k_account": "$599.0",
      },
    },
    {
      name: "Standard",
      type: "One evaluation phase",
      swap_free: false,
      maximum_drawdown_type: "Static",
      phase_1_configuration: {
        target_profit: "10%",
        daily_drawdown: "3%",
        maximum_drawdown: "6%",
        minimum_trading_days: 4,
      },
      live_account_configuration: {
        daily_drawdown: "3%",
        maximum_drawdown: "6%",
        target_profit: "∞",
        payout_rules: {
          minimum_trading_days: 30,
          consistency_rule: "25%",
          profit_split: "80%",
          minimum_payout: "$100.0",
          refundable_fee: "100%",
        },
      },
      pricing: {
        "5k_account": "$31.0",
        "10k_account": "$57.0",
        "25k_account": "$139.0",
        "50k_account": "$240.0",
        "100k_account": "$419.0",
      },
    },
    {
      name: "Standard",
      type: "Two evaluation phases",
      swap_free: false,
      maximum_drawdown_type: "Static",
      phase_1_configuration: {
        target_profit: "8%",
        daily_drawdown: "5%",
        maximum_drawdown: "10%",
        minimum_trading_days: 4,
      },
      phase_2_configuration: {
        target_profit: "5%",
        daily_drawdown: "5%",
        maximum_drawdown: "10%",
        minimum_trading_days: 4,
      },
      live_account_configuration: {
        daily_drawdown: "5%",
        maximum_drawdown: "10%",
        target_profit:"∞",
        payout_rules: {
          minimum_trading_days: 30,
          consistency_rule: "25%",
          profit_split: "80%",
          minimum_payout: "$100.0",
          refundable_fee: "100%",
        },
      },
      pricing: {
        "5k_account": "$35.0",
        "10k_account": "$66.0",
        "25k_account": "$149.0",
        "50k_account": "$269.0",
        "100k_account": "$449.0",
      },
    },
  ],
  payment_methods: [
    {
      id: 1,
      name: "Visa",
      image: "/images/home/visa.png",
      alt: "visa",
      width: 52,
      height: 15,
    },
    {
      id: 2,
      name: "American Express",
      image: "/images/home/american.png",
      alt: "american express",
      width: 66,
      height: 23,
    },
    {
      id: 3,
      name: "PayPal",
      image: "/images/home/paypal.png",
      alt: "paypal",
      width: 66,
      height: 17,
    },
    {
      id: 4,
      name: "Mastercard",
      image: "/images/home/mastercard.png",
      alt: "mastercard",
      width: 33,
      height: 26,
    },
    {
      id: 5,
      name: "Bitcoin",
      image: "/images/home/bitcoin.png",
      alt: "bitcoin",
      width: 96,
      height: 44,
    },
  ],
  challenge_features: [
    {
      id: 1,
      name: "Weekend Holding",
      enabled: true,
    },
    {
      id: 2,
      name: "News Trading",
      enabled: true,
    },
  ],
};

export const challengeFeatures = [
  {
    id: 1,
    name: "Weekend Holding",
    enabled: true,
  },
  {
    id: 2,
    name: "News Trading",
    enabled: true,
  },
];

export const challengeDetails: Record<string, ChallengeDetails> = {
  Standard: {
    profitTarget: {
      step1: "10%",
      step2: "5%",
      funded: "10%",
    },
    maximumLossLimit: {
      step1: "6%",
      step2: "5%",
      funded: "6%",
    },
    dailyLossLimit: {
      step1: "3%",
      step2: "10%",
      funded: "3%",
    },
    maximumLossLimitType: {
      step1: "Static",
      step2: "Static",
      funded: "Static",
    },
    profitSplit: {
      step1: "80%",
      step2: "80%",
      funded: "80%",
    },
    refundableFee: {
      step1: "100%",
      step2: "100%",
      funded: "100%",
    },
  },
  Atomic: {
    profitTarget: {
      step1: "10%",
      step2: "5%",
      funded: "∞",
    },
    maximumLossLimit: {
      step1: "7%",
      step2: "12%",
      funded: "7%",
    },
    dailyLossLimit: {
      step1: "3%",
      step2: "5%",
      funded: "3%",
    },
    maximumLossLimitType: {
      step1: "Static",
      step2: "Static",
      funded: "Static",
    },
    profitSplit: {
      step1: "80%",
      step2: "80%",
      funded: "80%",
    },
    refundableFee: {
      step1: "100%",
      step2: "100%",
      funded: "100%",
    },
  },
};

export const challengePricing: Record<string, ChallengeConfig> = {
  // Standard One Step
  "Standard-1-5k": {
    type: "Standard",
    step: "1",
    price: 31,
    originalPrice: 31,
  },
  "Standard-1-10k": {
    type: "Standard",
    step: "1",
    price: 57,
    originalPrice: 57,
  },
  "Standard-1-25k": {
    type: "Standard",
    step: "1",
    price: 139,
    originalPrice: 139,
  },
  "Standard-1-50k": {
    type: "Standard",
    step: "1",
    price: 240,
    originalPrice: 240,
  },
  "Standard-1-100k": {
    type: "Standard",
    step: "1",
    price: 419,
    originalPrice: 419,
  },
  // Standard Two Step
  "Standard-2-5k": {
    type: "Standard",
    step: "2",
    price: 35,
    originalPrice: 35,
  },
  "Standard-2-10k": {
    type: "Standard",
    step: "2",
    price: 66,
    originalPrice: 66,
  },
  "Standard-2-25k": {
    type: "Standard",
    step: "2",
    price: 149,
    originalPrice: 149,
  },
  "Standard-2-50k": {
    type: "Standard",
    step: "2",
    price: 269,
    originalPrice: 269,
  },
  "Standard-2-100k": {
    type: "Standard",
    step: "2",
    price: 449,
    originalPrice: 449,
  },
  // Atomic One Step
  "Atomic-1-5k": { type: "Atomic", step: "1", price: 48, originalPrice: 48 },
  "Atomic-1-10k": { type: "Atomic", step: "1", price: 77, originalPrice: 77 },
  "Atomic-1-25k": { type: "Atomic", step: "1", price: 199, originalPrice: 199 },
  "Atomic-1-50k": { type: "Atomic", step: "1", price: 319, originalPrice: 319 },
  "Atomic-1-100k": {
    type: "Atomic",
    step: "1",
    price: 577,
    originalPrice: 577,
  },
  // Atomic Two Step
  "Atomic-2-5k": { type: "Atomic", step: "2", price: 54, originalPrice: 54 },
  "Atomic-2-10k": { type: "Atomic", step: "2", price: 85, originalPrice: 85 },
  "Atomic-2-25k": { type: "Atomic", step: "2", price: 220, originalPrice: 220 },
  "Atomic-2-50k": { type: "Atomic", step: "2", price: 349, originalPrice: 349 },
  "Atomic-2-100k": {
    type: "Atomic",
    step: "2",
    price: 599,
    originalPrice: 599,
  },
};
