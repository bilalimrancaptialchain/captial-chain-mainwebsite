"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { socialLinks } from "../constants/footer";
import { useLanguage } from "@/hooks/useLanguage";
import { handleFooterLinkClick } from "@/lib/scroll";

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setSubmitMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Simulate API call - replace with actual newsletter subscription logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitMessage("Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error) {
      console.log(error);
      setSubmitMessage("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerLinks = {
    [t("footer.categories.Platform")]: [
      { name: t("footer.links.tradingPlatforms"), href: "#trading-platforms" },
      { name: t("footer.links.pricing"), href: "#pricing" },
      { name: t("footer.links.airdropProgram"), href: "#airdrop-program" },
      { name: t("footer.links.partnership"), href: "/partnership" },
    ],
    [t("footer.categories.Company")]: [
      { name: t("footer.links.aboutUs"), href: "/about_us" },
      { name: t("footer.links.contact"), href: "/contact_us" },
      { name: t("footer.links.blog"), href: "/blog" },
    ],
    [t("footer.categories.Legal")]: [
      { name: t("footer.links.termsOfService"), href: "/terms-of-use" },
      { name: t("footer.links.riskDisclosure"), href: "#risk-disclosure" },
    ],
    [t("footer.categories.QuickAccess")]: [
      { name: t("footer.links.homepage"), href: "/" },
      { name: t("footer.links.aboutUs"), href: "/about_us" },
      { name: t("footer.links.contactUs"), href: "/contact_us" },
      { name: t("footer.links.faq"), href: "/faq" },
      { name: t("footer.links.checkout"), href: "#pricing" },
    ],
  };
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <footer className="bg-[#010A13] text-white footer-border">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-80 items-center max-w-7xl mx-auto px-12 xl:px-0 pb-12">
          {/* Left Side - Logo and Social */}
          <div className="lg:col-span-5 pt-12 lg:pt-0 lg:border-e-[1px] border-footer-border h-full flex flex-col items-start sm:flex-row sm:items-center lg:items-start lg:flex-col lg:justify-center">
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Chapital Chain"
                width={150}
                loading="lazy"
                height={40}
                className="mb-4"
              />
              <p className="text-white text-lg leading-relaxed max-w-3xs font-display">
                {t("footer.description")}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                    aria-label={social.label}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-active font-display font-bold footer-menu-border text-base mb-4">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          onClick={(e) => handleFooterLinkClick(link.href, e)}
                          className={`font-display transition-colors duration-200 text-sm ${
                            isActiveLink(link.href)
                              ? "text-active"
                              : "text-white hover:text-active"
                          }`}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t footer-border min-h-80 pb-12">
          <div className="max-w-7xl mx-auto px-12 xl:px-0">
            <p className="font-display text-white font-normal">
              {t("footer.disclaimer")}
            </p>
            <div className="flex flex-col items-start gap-4 mt-1">
              <small className="font-display text-white/60 font-normal">
                {t("footer.disclaimerText1")}
              </small>
              <small className="font-display text-white/60 font-normal">
                {t("footer.disclaimerText2")}
              </small>
              <small className="font-display text-white/60 font-normal">
                {t("footer.disclaimerText3")}
              </small>
              <small className="font-display text-white/60 font-normal">
                {t("footer.disclaimerText4")}
              </small>
              <small className="font-display text-white/60 font-normal">
                {t("footer.disclaimerText5")}
              </small>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t footer-border pb-12">
          <div className="max-w-7xl mx-auto px-12 xl:px-0 min-h-40 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-active font-display font-bold text-xl mb-2">
                {t("footer.newsletterTitle")}
              </h3>
              <p className="text-white font-display text-base">
                {t("footer.newsletterDescription")}
              </p>
            </div>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="flex-1 w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("footer.emailPlaceholder")}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-active focus:ring-1 focus:ring-active transition-colors duration-200 font-display"
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter-consent"
                    checked={isSubscribed}
                    onChange={(e) => setIsSubscribed(e.target.checked)}
                    className="w-5 h-5 text-active bg-gray-800 border-gray-600 rounded focus:ring-active focus:ring-2 accent-active"
                    aria-describedby="newsletter-consent-label"
                  />
                  <label 
                    htmlFor="newsletter-consent" 
                    id="newsletter-consent-label"
                    className="text-sm text-gray-300 cursor-pointer font-display"
                  >
                    {t("footer.consentText") || "I agree to receive newsletter updates"}
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !isSubscribed}
                  className="px-6 py-3 bg-gradient-to-r from-active to-green-500 text-white font-display font-medium rounded-lg hover:from-active/90 hover:to-green-500/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              {submitMessage && (
                <p
                  className={`text-sm font-display ${
                    submitMessage.includes("Successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
