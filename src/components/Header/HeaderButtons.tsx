import { Button } from "@/components/ui/button";
import LoginIcon from "@/components/icons/LoginIcon";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

interface HeaderButtonsProps {
  isMobile?: boolean;
}

export default function HeaderButtons({
  isMobile = false,
}: HeaderButtonsProps) {
  const { t } = useLanguageContext();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerClass = isMobile
    ? "border-t border-white/10 pt-4 mt-6 space-y-3"
    : "hidden md:flex items-center space-x-2 lg:space-x-4";

  const buttonClass = isMobile ? "w-full mt-2" : "md:text-xxs";
  const loginButtonClass = isMobile
    ? "w-full flex items-center justify-center gap-2"
    : "flex items-center gap-2 text-xs";
  // Removed "Claim Free Account" button per request

  if (!isMounted) {
    return (
      <div className={containerClass}>
        <Button variant="login" size="login" className={loginButtonClass}>
          <LoginIcon className="w-4 h-4" />
          {t("header.loginSignup")}
        </Button>
        <Button variant="trading" size="trading" className={buttonClass}>
          {t("header.startTradingNow")}
        </Button>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <a
        href="https://app.capitalchain.co"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="login" size="login" className={loginButtonClass}>
          <LoginIcon className="w-4 h-4" />
          {t("header.loginSignup")}
        </Button>
      </a>
      {/* Removed "Claim Free Account" button on all viewports */}
      <a
        href="https://checkout.capitalchain.co"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="trading" size="trading" className={buttonClass}>
          {t("header.startTradingNow")}
        </Button>
      </a>
    </div>
  );
}
