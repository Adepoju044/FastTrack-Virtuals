const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-medium rounded-lg text-center cursor-pointer transition-all duration-300";

  const variants = {
    primary:
      "text-white bg-gradient-to-r from-ftvprimary to-ftvprimary-400 hover:from-ftvsecondary hover:to-ftvsecondary-400 focus:ring-1 focus:outline-none focus:ring-ftvprimary shadow-lg hover:shadow-xl",
    secondary:
      "text-white bg-ftvsecondary hover:bg-ftvsecondary-400 focus:ring-1 focus:outline-none focus:ring-ftvsecondary",
    outline:
      "border border-ftvprimary-300 text-ftvprimary hover:bg-ftvprimary-400 hover:text-white focus:ring-2 focus:ring-ftvprimary-300",
  };

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-5 text-base",
    lg: "py-4 px-6 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
