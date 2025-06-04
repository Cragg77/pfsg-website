import { Link } from "react-router-dom";
import type { SubMenuItem } from "@/data/navigationData";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface NavDropdownProps {
  subItems: SubMenuItem[];
  isHovered: boolean;
}

export function NavDropdown({ subItems, isHovered }: NavDropdownProps) {
  if (subItems.length === 0) return null;

  return (
    <div
      className={cn(
        "dropdown-menu absolute left-0 top-full z-50 w-full bg-yellow-400 border-b border-t border-yellow-500 shadow-md transition-all duration-300 ease-in-out",
        isHovered
          ? "translate-y-0 opacity-100 fade-in"
          : "pointer-events-none -translate-y-1 opacity-0"
      )}
    >
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group flex flex-col rounded-md p-4 transition-colors hover:bg-yellow-500 border border-transparent hover:border-yellow-600"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {item.icon && (
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-black">
                      <span className="text-yellow-400 text-lg">{item.icon}</span>
                    </div>
                  )}
                  <span className="font-bold text-lg text-black transition-colors group-hover:text-white">
                    {item.title}
                  </span>
                </div>
                <ChevronRight
                  className="h-5 w-5 text-black transition-transform group-hover:text-white group-hover:translate-x-1"
                />
              </div>
              {item.description && (
                <span className="mt-2 pl-[52px] text-black group-hover:text-white">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
