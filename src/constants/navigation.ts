export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Partnership", href: "/partnership" },
  { name: "Blog", href: "/blog" },
  {
    name: "About Us",
    href: "/about_us",
    submenu: [
      { name: "About Us", href: "/about_us" },
      { name: "Contact us", href: "/contact_us" },
    ],
  },
  { name: "Terms of Service", href: "/terms-of-use" },
  { name: "FAQ", href: "https://help.capitalchain.co" },
];

export type NavigationItem = {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
};
