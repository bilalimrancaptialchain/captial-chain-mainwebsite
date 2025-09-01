export const smoothScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const handleFooterLinkClick = (href: string, e: React.MouseEvent) => {
  // Check if it's a hash link (internal section)
  if (href.startsWith("#")) {
    e.preventDefault();
    const sectionId = href.substring(1);

    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }

    // If we're on home page, scroll to section
    smoothScrollToSection(sectionId);
  }
};
