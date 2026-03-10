import { Link } from "react-router-dom";

const CTAButton = ({
  to = "#contact",
  children = "Book a Free Strategy Call",
  size = "lg",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-lg text-center cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 uppercase outline-none focus:outline-none";

  const sizeStyles = {
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
    xl: "py-5 px-10 text-xl",
  };

  const colorStyles =
    "bg-gradient-to-r from-ftvsecondary to-ftvsecondary-400 hover:from-ftvprimary hover:to-ftvprimary-400 text-white";

  if (to.startsWith("#")) {
    return (
      <a
        href={to}
        className={`${baseStyles} ${sizeStyles[size]} ${colorStyles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={`${baseStyles} ${sizeStyles[size]} ${colorStyles} ${className}`}
    >
      {children}
    </Link>
  );
};

export default CTAButton;
