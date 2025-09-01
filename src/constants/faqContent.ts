export interface ContentSection {
  id: number;
  title: string;
  description: string;
}

export interface RelatedPost {
  id: number;
  title: string;
  href: string;
}

export const contentSections: ContentSection[] = [
  {
    id: 1,
    title: "Step-by-Step Guide",
    description:
      "Follow these detailed instructions to complete the process successfully. Each step is designed to be clear and easy to understand. FundingPips, founded in November 2022, is built by traders for traders. We understand firsthand the challenges traders face in this industry, and our goal is to change the game. As a trusted trading firm headquartered in Dubai, we are committed to providing traders with the best tools, resources, and support to unlock their full potential and succeed.",
  },
  {
    id: 2,
    title: "Important Notes",
    description:
      "Please keep these important points in mind while following the instructions. These notes will help you avoid common mistakes.",
  },
  {
    id: 3,
    title: "Additional Resources",
    description:
      "For more detailed information and advanced configurations, please refer to our comprehensive documentation and support materials.",
  },
];

export const relatedPosts: RelatedPost[] = [
  {
    id: 1,
    title: "Understanding Capital Chain Platform",
    href: "getting-started/platform-overview",
  },
  {
    id: 2,
    title: "Trading Strategies and Tips",
    href: "trading/strategies",
  },
  {
    id: 3,
    title: "Security Best Practices",
    href: "security/best-practices",
  },
  {
    id: 4,
    title: "API Integration Guide",
    href: "api-documentation/integration",
  },
  {
    id: 5,
    title: "Account Verification Process",
    href: "account-management/verification",
  },
];