import { Link } from "react-router-dom";

interface PandaLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  showText?: boolean;
}

const PandaLogo = ({
  size = "md",
  variant = "light",
  showText = true
}: PandaLogoProps) => {
  // Get responsive classes based on size prop
  const getResponsiveClasses = () => {
    switch (size) {
      case "sm":
        return "w-28 h-8 sm:w-32 sm:h-10 md:w-36 md:h-11";
      case "md":
        return "w-32 h-10 sm:w-40 sm:h-12 md:w-44 md:h-[3.375rem]";
      case "lg":
        return "w-36 h-11 sm:w-44 sm:h-[3.375rem] md:w-48 md:h-[3.75rem] lg:w-52 lg:h-16";
      default:
        return "w-32 h-10 sm:w-40 sm:h-12 md:w-44 md:h-[3.375rem]";
    }
  };

  return (
    <Link to="/" className="flex items-center flex-shrink-0">
      <img
        src="/images/logo_pfsg.png"
        alt="Panda Finance Logo"
        className={`object-contain ${getResponsiveClasses()}`}
      />
    </Link>
  );
};

export default PandaLogo;
