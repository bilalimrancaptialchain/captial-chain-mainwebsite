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
      { name: t("footer.links.metatrader"), href: "/metatrader" },
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
    <footer className="footer bg-[#010A13] text-white footer-border">
      <div className="footer-content">
        <div className="footer-main-content grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-80 items-center max-w-7xl mx-auto px-12 xl:px-0 pb-12">
          {/* Left Side - Logo and Social */}
          <div className="footer-left-section lg:col-span-5 pt-12 lg:pt-0 lg:border-e-[1px] border-footer-border h-full flex flex-col items-start sm:flex-row sm:items-center lg:items-start lg:flex-col lg:justify-center">
            <div className="footer-brand-section mb-6">
              <Image
                src="/images/logo.png"
                alt="Capital Chain"
                width={150}
                loading="lazy"
                height={40}
                className="footer-logo mb-4"
              />
              <p className="footer-description text-white text-lg leading-relaxed max-w-3xs font-display">
                {t("footer.description")}
              </p>

              {/* Contact Info */}
              <div className="footer-contact-info mt-4 space-y-2">
                <a
                  href="tel:+94781352833"
                  className="flex items-center gap-2 text-white/80 hover:text-active font-display text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M3 5C3 3.895 3.895 3 5 3h3.279c.431 0 .813.276.949.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.128c1.102 2.445 3.072 4.415 5.517 5.517l1.128-2.257a1 1 0 0 1 1.21-.502l4.493 1.498c.408.136.684.518.684.949V19c0 1.105-.895 2-2 2h-1C9.716 21 3 14.284 3 6V5Z" fill="#00E0E0"/>
                  </svg>
                  +94 78 135 2833
                </a>
                <a
                  href="mailto:info@capitalchain.co"
                  className="flex items-center gap-2 text-white/80 hover:text-active font-display text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm16 2-8 5-8-5v12h16V6Z" fill="#00E0E0"/>
                  </svg>
                  info@capitalchain.co
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="footer-social-links flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                    aria-label={social.label}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="footer-right-section lg:col-span-7">
            <div className="footer-links-grid grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="footer-link-category">
                  <h3 className="footer-link-category-title text-active font-display font-bold footer-menu-border text-base mb-4">
                    {category}
                  </h3>
                  <ul className="footer-link-list space-y-3">
                    {links.map((link, index) => (
                      <li key={index} className="footer-link-item">
                        <a
                          href={link.href}
                          onClick={(e) => handleFooterLinkClick(link.href, e)}
                          className={`footer-link font-display transition-colors duration-200 text-sm ${isActiveLink(link.href)
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

        <div className="footer-disclaimer-section pt-8 border-t footer-border min-h-80 pb-12">
          <div className="footer-disclaimer-content max-w-7xl mx-auto px-12 xl:px-0">
            <p className="footer-disclaimer-title font-display text-white font-normal">
              {t("footer.disclaimer")}
            </p>
            <div className="footer-disclaimer-texts flex flex-col items-start gap-4 mt-1">
              <small className="footer-disclaimer-text font-display text-white/60 font-normal">
                {t("footer.disclaimerText1")}
              </small>
              <small className="footer-disclaimer-text font-display text-white/60 font-normal">
                {t("footer.disclaimerText2")}
              </small>
              <small className="footer-disclaimer-text font-display text-white/60 font-normal">
                {t("footer.disclaimerText3")}
              </small>
              <small className="footer-disclaimer-text font-display text-white/60 font-normal">
                {t("footer.disclaimerText4")}
              </small>
              <small className="footer-disclaimer-text font-display text-white/60 font-normal">
                {t("footer.disclaimerText5")}
              </small>
            </div>

            {/* Company Information */}
            <div className="footer-risk-warning-content mt-8">
              <div className="space-y-6">
                {/* Regional Restrictions */}
                <div>
                  <h3 className="text-white font-display font-bold text-[15px] mb-3">
                    Regional Restrictions:
                  </h3>
                  <p className="text-white/60 font-display text-sm leading-relaxed">
                    We do not offer our brokerage services to residents of certain jurisdictions such as USA, North Korea, and other regions. For more information, please refer to our FAQ page. The information on this site and the products and services offered are not intended for distribution to any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-display font-bold text-[15px] mb-3">
                    Company:
                  </h3>
                  <p className="text-white/60 font-display text-sm leading-relaxed mb-4">
                    Capital Chain Group Ltd. is registered as an International Business Company in Saint Lucia with the Registration No. 2025-00674.
                  </p>
                  
                  <h3 className="text-white font-display font-bold text-[15px] mb-3">
                    Registered Address:
                  </h3>
                  <p className="text-white/60 font-display text-sm leading-relaxed mb-4">
                    01, Ground Floor, Rodney Court Building, Rodney Bay, Gros-Islet, St Lucia
                  </p>
                  
                  <h3 className="text-white font-display font-bold text-[15px] mb-3">
                    Physical Address:
                  </h3>
                  <p className="text-white/60 font-display text-sm leading-relaxed">
                    No. 369/1/1A, Meewella Building, Galle Rd, Colombo 00400, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-newsletter-section pt-8 border-t footer-border pb-12">
          <div className="footer-newsletter-content max-w-7xl mx-auto px-12 xl:px-0 min-h-40 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="footer-newsletter-info">
              <h3 className="footer-newsletter-title text-active font-display font-bold text-xl mb-2">
                {t("footer.newsletterTitle")}
              </h3>
              <p className="footer-newsletter-description text-white font-display text-base">
                {t("footer.newsletterDescription")}
              </p>
            </div>
            <form onSubmit={handleEmailSubmit} className="footer-newsletter-form space-y-4">
              <div className="footer-newsletter-form-content flex flex-col gap-4 items-start w-full">
                <div className="w-full flex flex-col md:flex-row items-stretch md:items-center gap-4">
                  <div className="footer-newsletter-input-container flex-1 w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("footer.emailPlaceholder")}
                      className="footer-newsletter-input w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-active focus:ring-1 focus:ring-active transition-colors duration-200 font-display"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !isSubscribed}
                    className="footer-newsletter-submit-button px-6 py-3 bg-gradient-to-r from-active to-green-500 text-white font-display font-medium rounded-lg hover:from-active/90 hover:to-green-500/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
                <div className="footer-newsletter-consent flex items-center space-x-2 self-start">
                  <input
                    type="checkbox"
                    id="newsletter-consent"
                    checked={isSubscribed}
                    onChange={(e) => setIsSubscribed(e.target.checked)}
                    className="footer-newsletter-checkbox w-5 h-5 text-active bg-gray-800 border-gray-600 rounded focus:ring-active focus:ring-2 accent-active"
                    aria-describedby="newsletter-consent-label"
                  />
                  <label
                    htmlFor="newsletter-consent"
                    id="newsletter-consent-label"
                    className="footer-newsletter-consent-label text-sm text-gray-300 cursor-pointer font-display"
                  >
                    {t("footer.consentText") || "I agree to receive newsletter updates"}
                  </label>
                </div>
              </div>
              {submitMessage && (
                <p
                  className={`footer-newsletter-message text-sm font-display ${submitMessage.includes("Successfully")
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
