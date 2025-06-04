import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "light", size = "md" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-black";
  const accentColor = "text-yellow-400";

  const fontSize = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  }[size];

  return (
    <Link to="/" className="flex items-center">
      <span className={`font-bold ${fontSize} ${textColor}`}>
        Panda <span className={accentColor}>Financial</span>
      </span>
    </Link>
  );
};

export default Logo;
