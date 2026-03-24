import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@components/ui/ThemeToggle";
import RoleSelectionModal from "@components/ui/RoleSelectionModal";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Who We Help", to: "/who-we-help" },
  { label: "About Us", to: "/about-us" },
  { label: "Our Founder", to: "/founder" },
  { label: "Contact", to: "/contact" },
];

const linkClass =
  "block py-2 px-2 rounded-sm hover:bg-transparent hover:text-ftvprimary text-ftvblack-300 dark:text-gray-300 transition-colors whitespace-nowrap text-sm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed w-full z-20 top-0 start-0 shadow-sm transition-colors duration-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-8 py-4">
          <Link to="/" className="flex items-center logo-container shrink-0">
            <img
              className="h-10 w-auto logo-warm-filter"
              alt="Fasttrack VA Logo"
              src="/fasttrack-logo.svg"
            />
          </Link>

          <ul className="hidden lg:flex uppercase items-center gap-x-1 xl:gap-x-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => setIsRoleModalOpen(true)}
              className="hidden lg:inline-flex text-white hover:bg-ftvprimary-500 font-medium rounded-lg text-sm py-2.5 px-4 bg-ftvprimary cursor-pointer uppercase shadow-md hover:shadow-lg transition-all whitespace-nowrap"
            >
              Get Started
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-ftvgrey-500 dark:text-gray-400 rounded-lg hover:bg-ftvgrey-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 17 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 px-4 py-4 shadow-lg">
            <ul className="flex flex-col space-y-1 uppercase">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="block py-3 px-4 rounded-lg text-ftvblack-300 dark:text-gray-300 hover:bg-ftvgrey-100 dark:hover:bg-gray-700 hover:text-ftvprimary transition-colors text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => {
                    setIsRoleModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-white bg-ftvprimary hover:bg-ftvprimary-500 font-medium rounded-lg text-sm py-3 px-5 uppercase transition-all"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <RoleSelectionModal
        isOpen={isRoleModalOpen}
        onClose={() => setIsRoleModalOpen(false)}
      />
    </header>
  );
};

export default Header;
