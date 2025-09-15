import { cn } from "@/lib/utils";
import { NavigationItem } from "@/constants/navigation";

interface DesktopNavigationProps {
  navigationItems: NavigationItem[];
  activeLink: string | null;
  activeDropdown: string | null;
  handleMouseEnter: (itemName: string) => void;
  handleMouseLeave: () => void;
}

export default function DesktopNavigation({
  navigationItems,
  activeLink,
  activeDropdown,
  handleMouseEnter,
  handleMouseLeave,
}: DesktopNavigationProps) {
  return (
    <nav className="hidden md:flex" suppressHydrationWarning>
      {navigationItems.map((item) => (
        <div
          key={item.name}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={item.href}
            className={cn(
              "text-white px-2 lg:px-3 py-4 text-[10px] lg:text-xs font-semibold transition-colors flex items-center gap-1 font-display relative",
              activeLink === item.href && "navbar-active"
            )}
          >
            {item.name}
          </a>
          {item.submenu && activeDropdown === item.name && (
            <div className="absolute top-full left-0 bg-submenu-background rounded-lg shadow-lg py-2 flex flex-col items-center w-32">
              {item.submenu.map((subItem) => (
                <a
                  key={subItem.name}
                  href={subItem.href}
                  className="block text-xs transition-colors text-center font-display font-medium text-subment-forground py-4 hover:text-subment-forground-hover"
                >
                  {subItem.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
