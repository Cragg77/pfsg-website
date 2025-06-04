import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight, X } from "lucide-react";
import PandaLogo from "./PandaLogo";
import { NavDropdown } from "./NavDropdown";
import { mainNavItems, type MenuItem } from "@/data/navigationData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Check if the current path matches the menu item
  const isActive = (item: MenuItem) => {
    if (item.link === "/" && location.pathname === "/") {
      return true;
    }

    return location.pathname.startsWith(item.link) && item.link !== "/";
  };

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md">
      <div className="container mx-auto flex h-20 lg:h-24 items-center justify-between px-4 lg:px-8 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 py-2 pr-4 lg:pr-10 flex-shrink-0 min-w-fit">
          <PandaLogo variant="light" size="lg" showText={true} />
        </div>
        {/* Desktop Nav/Buttons Wrapper */}
        <div className="hidden md:flex flex-1 items-center justify-between">
          {/* Desktop Navigation */}
          <nav className="flex-1">
            <ul className="flex space-x-10 lg:space-x-12">
              {mainNavItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${item.subItems && item.subItems.length > 0 ? "has-dropdown" : ""} ${isActive(item) ? "active" : ""}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.link}
                    className={`flex items-center py-8 lg:py-10 transition-colors font-montserrat font-bold text-sm tracking-wide uppercase ${isActive(item) ? "text-yellow-400" : "text-white hover:text-yellow-400"} ${hoveredIndex === index ? "text-yellow-400" : ""}`}
                  >
                    {item.title}
                    {item.subItems && item.subItems.length > 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${hoveredIndex === index ? "rotate-180" : ""}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </Link>
                  {item.subItems && item.subItems.length > 0 && (
                    <NavDropdown
                      subItems={item.subItems}
                      isHovered={hoveredIndex === index}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Action Buttons */}
          <div className="flex items-center gap-4 lg:gap-5 min-w-fit whitespace-nowrap ml-8">
            <Button asChild>
              <a href="https://pandamortgages.gettrail.com/Account/Register/70455c6f-99ba-4d3f-83c0-cb5ef6c230ee" target="_blank" rel="noopener noreferrer">Apply Online</a>
            </Button>
            <Button
              onClick={() => window.open("https://pandamortgages.gettrail.com/Account/Register/70455c6f-99ba-4d3f-83c0-cb5ef6c230ee", "_blank")}
            >
              Login to CRM
            </Button>
          </div>
        </div>
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button onClick={toggleMenu} variant="ghost" size="icon" className="text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <AlignRight className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white w-[80%] sm:w-[350px] overflow-y-auto">
              <nav className="flex flex-col gap-6 mt-12 pb-6">
                {mainNavItems.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <Link
                      to={item.link}
                      className={`text-lg font-montserrat font-medium tracking-wide uppercase ${
                        isActive(item) ? "text-yellow-400" : "hover:text-yellow-400"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.subItems && item.subItems.length > 0 && (
                      <div className="ml-4 flex flex-col gap-3 border-l border-gray-700 pl-4 mt-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.link}
                            className="flex gap-2 items-center text-sm text-gray-300 hover:text-yellow-400 font-montserrat"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.icon && (
                              <span className="text-yellow-500">{subItem.icon}</span>
                            )}
                            <span>{subItem.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-6 flex flex-col gap-3">
                  <Button
                    asChild
                  >
                    <a href="https://pandamortgages.gettrail.com/Account/Register/70455c6f-99ba-4d3f-83c0-cb5ef6c230ee" target="_blank" rel="noopener noreferrer">Apply Online</a>
                  </Button>
                  <Button
                    onClick={() => window.open("https://pandamortgages.gettrail.com/Account/Register/70455c6f-99ba-4d3f-83c0-cb5ef6c230ee", "_blank")}
                  >
                    Login to CRM
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
