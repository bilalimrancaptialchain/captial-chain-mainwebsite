import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationItem } from "@/constants/navigation";

interface MobileNavigationProps {
  navigationItems: NavigationItem[];
  activeLink: string | null;
  setIsOpen: (open: boolean) => void;
}

export default function MobileNavigation({
  navigationItems,
  activeLink,
  setIsOpen,
}: MobileNavigationProps) {
  return (
    <nav className="flex flex-col space-y-4 mt-8">
      {navigationItems.map((item) => (
        <div key={item.name}>
          <a
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={cn(
              "text-white/70 hover:text-white px-4 py-3 text-base font-medium transition-colors rounded-lg hover:bg-white/10 flex items-center justify-between relative",
              activeLink === item.href && "text-[var(--header-active-navbar)] bg-[var(--header-active-navbar)]/20 border-l-4 border-[var(--header-active-navbar)]"
            )}
          >
            {item.name}
            {item.submenu && <ChevronDown className="h-4 w-4" />}
            {activeLink === item.href && (
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--header-active-navbar)]" />
            )}
          </a>
          {item.submenu && (
            <div className="ml-4 mt-2 space-y-2">
              {item.submenu.map((subItem) => (
                <a
                  key={subItem.name}
                  href={subItem.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-white/60 hover:text-white px-4 py-2 text-sm transition-colors rounded-lg hover:bg-white/5 relative",
                    activeLink === subItem.href && "text-[var(--header-active-navbar)] bg-[var(--header-active-navbar)]/15 border-l-2 border-[var(--header-active-navbar)]"
                  )}
                >
                  {subItem.name}
                  {activeLink === subItem.href && (
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--header-active-navbar)]" />
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}