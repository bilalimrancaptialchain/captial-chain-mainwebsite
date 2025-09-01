export interface TradingSolutionCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isComingSoon?: boolean;
}

// Fallback for components that can't use hooks
export const tradingSolutionCards: TradingSolutionCard[] = [
  {
    id: "tradelocker",
    title: "Tradelocker",
    description: "User-friendly, AI bot",
    imageSrc: "/images/home/tradelocker.webp",
    imageAlt: "tradelocker",
  },
  {
    id: "volumetrica",
    title: "Volumetrica",
    description: "trade +500 cryptocurrency, free costly TradingView tools",
    imageSrc: "/images/home/volumetrica.webp",
    imageAlt: "volumetrica",
  },
  {
    id: "metatrader5",
    title: "Metatrader5",
    description: "Coming soon ...",
    imageSrc: "/images/home/metatrader5.webp",
    imageAlt: "Metatrader5",
    isComingSoon: true,
  },
];
