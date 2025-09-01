import {
  TelegramIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
} from "../components/icons/SocialIcons";

// Static data for footer links
export const footerLinks = {
  Platform: [
    { name: "Trading Platforms", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Airdrop Program", href: "#" },
    { name: "Partnership", href: "/partnership" },
  ],
  Company: [
    { name: "About Us", href: "/about_us" },
    { name: "Contact", href: "/contact_us" },
    { name: "Blog", href: "/blog" },
  ],
  Legal: [
    { name: "Terms of Service", href: "/terms-of-use" },
    { name: "Risk Disclosure", href: "#" },
  ],
  QuickAccess: [
    { name: "Homepage", href: "/" },
    { name: "About us", href: "/about_us" },
    { name: "Contact us", href: "/contact_us" },
    { name: "FAQ", href: "/faq" },
    { name: "Checkout", href: "#" },
  ],
};

export const socialLinks = [
  {
    icon: TelegramIcon,
    href: "https://t.me/officialcapitalchain",
    label: "Telegram",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/capital_chain/",
    label: "Instagram",
  },
  { icon: XIcon, href: "https://x.com/theCapitalChain", label: "X" },
  {
    icon: YouTubeIcon,
    href: "https://www.youtube.com/@CapitalChainPropFirm/shorts",
    label: "YouTube",
  },
];
