"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/constants/navigation";
import DesktopNavigation from "./Header/DesktopNavigation";
import MobileNavigation from "./Header/MobileNavigation";
import HeaderButtons from "./Header/HeaderButtons";
import LanguageSelector from "./LanguageSelector";
import { useLanguageContext } from "@/contexts/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const pathname = usePathname();
  const { t } = useLanguageContext();

  useEffect(() => {
    // Find the active navigation item based on current pathname
    let foundActiveLink = null;

    for (const item of navigationItems) {
      // Check if current path matches main item
      if (pathname === item.href) {
        foundActiveLink = item.href;
        break;
      }

      // Check if current path matches any submenu item
      if (item.submenu) {
        for (const subItem of item.submenu) {
          if (pathname === subItem.href) {
            foundActiveLink = subItem.href;
            break;
          }
        }
        if (foundActiveLink) break;
      }

      // For paths that start with the item href (like /blog/some-post)
      if (item.href !== "/" && pathname.startsWith(item.href)) {
        foundActiveLink = item.href;
        break;
      }
    }

    setActiveLink(foundActiveLink || pathname);
  }, [pathname]);

  const getTranslatedNavigationItems = () => {
    return navigationItems.map((item) => ({
      ...item,
      name: getNavigationTranslation(item.name),
      submenu: item.submenu?.map((subItem) => ({
        ...subItem,
        name: getNavigationTranslation(subItem.name),
      })),
    }));
  };

  const getNavigationTranslation = (itemName: string) => {
    switch (itemName) {
      case "Home":
        return t("navigation.home");
      case "Partnership":
        return t("navigation.partnership");
      case "Blog":
        return t("navigation.blog");
      case "About Us":
        return t("navigation.aboutUs");
      case "Contact us":
        return t("navigation.contactUs");
      case "Terms of Service":
        return t("navigation.termsOfService");
      case "FAQ":
        return t("navigation.faq");
      default:
        return itemName;
    }
  };

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="header header-gradient fixed top-8 left-0 right-0 z-50 max-w-header mx-auto">
      <div className="header-container mx-auto px-4">
        <div className="header-content flex justify-between items-center h-full min-h-20 md:min-h-20">
          <DesktopNavigation
            navigationItems={getTranslatedNavigationItems()}
            activeLink={activeLink}
            activeDropdown={activeDropdown}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />

          <div className="header-logo-container flex items-center">
            <Link href="/" className="header-logo-link flex items-center">
              <Image
                src="/images/logo.png"
                alt="Capital Chain"
                width={120}
                height={40}
                loading="lazy"
                className="header-logo h-7 lg:h-10 w-auto"
              />
            </Link>
          </div>

          <div
            className="header-actions hidden md:flex items-center gap-4"
            suppressHydrationWarning
          >
            <LanguageSelector />
            <HeaderButtons />
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="header-mobile-menu-button md:hidden header-gradient p-2 backdrop-blur-sm"
                aria-label="Open navigation menu"
                suppressHydrationWarning
              >
                <Menu className="header-mobile-menu-icon h-6 w-6 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="header-mobile-menu w-80 bg-black/90 backdrop-blur-xl border-white/10 px-4"
            >
              <SheetHeader>
                <SheetTitle className="header-mobile-menu-title text-white text-left">
                  <Link
                    href="/"
                    className="header-mobile-menu-logo-link flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="Capital Chain"
                      width={120}
                      height={40}
                      loading="lazy"
                      className="header-mobile-menu-logo h-8 w-auto"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <MobileNavigation
                navigationItems={getTranslatedNavigationItems()}
                activeLink={activeLink}
                setIsOpen={setIsOpen}
              />
              <div className="header-mobile-menu-actions mt-4 space-y-4">
                <LanguageSelector />
                <HeaderButtons isMobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
