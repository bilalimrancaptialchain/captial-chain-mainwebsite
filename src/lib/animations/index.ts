// Export all animation variants and configurations
export * from "./heroAnimations";
export * from "./missionAnimations";
export * from "./tradingChallengeAnimations";
export * from "./aboutAnimations";
export * from "./contactAnimations";
export * from "./termsAnimations";
export * from "./faqAnimations";

// Re-export common animations from the main animations file
export {
  sectionVariants,
  titleVariants,
  cardVariants,
  hoverVariants,
  fadeInVariants,
  slideUpVariants,
  scaleVariants,
  imageHoverVariants,
  transitions,
  viewportConfig,
} from "../animations";
