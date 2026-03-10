import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@components/ui/ThemeToggle";
import RoleSelectionModal from "@components/ui/RoleSelectionModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md fixed w-full z-20 top-0 start-0 shadow-sm navbar transition-colors duration-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mobilelg:px-15 px-8 py-4 relative">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse logo-container"
          >
            <img
              className="h-12 mobilelg:w-9/12 w-9/12 logo-warm-filter"
              alt="Fasttrack VA Logo"
              src="/fasttrack-logo.svg"
            />
          </Link>

          <div className="flex md:order-2 flex-row-reverse justify-start gap-x-4 items-center space-x-3 md:space-x-0 rtl:space-x-reverse tabletlg:w-6/12 mobilelg:w-7/12">
            <ThemeToggle />

            <button
              onClick={() => setIsRoleModalOpen(true)}
              className="text-white hover:bg-ftvsecondary focus:ring-4 focus:outline-none focus:ring-ftvprimary-300 font-medium rounded-lg text-sm py-3 px-5 text-center bg-ftvprimary cursor-pointer plusjakartasans uppercase z-30 mobilelg:inline-flex hidden shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            >
              Get Started
            </button>

            <ul className="md:flex uppercase justify-between space-x-6 hidden">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 rounded-sm hover:bg-ftvgrey-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-ftvprimary md:p-0 text-ftvblack-300 dark:text-gray-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 px-3 rounded-sm hover:bg-ftvgrey-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-ftvprimary md:p-0 text-ftvblack-300 dark:text-gray-300 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#who-we-help"
                  className="block py-2 px-3 rounded-sm hover:bg-ftvgrey-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-ftvprimary md:p-0 text-ftvblack-300 dark:text-gray-300 transition-colors whitespace-nowrap"
                >
                  Who We Help
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 rounded-sm hover:bg-ftvgrey-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-ftvprimary md:p-0 text-ftvblack-300 dark:text-gray-300 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block py-2 px-3 rounded-sm hover:bg-ftvgrey-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-ftvprimary md:p-0 text-ftvblack-300 dark:text-gray-300 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 rounded-sm hover:bg-ftvgrey-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-ftvprimary md:p-0 text-ftvblack-300 dark:text-gray-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-ftvgrey-500 dark:text-gray-400 rounded-lg md:hidden hover:bg-ftvgrey-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ftvgrey"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-7 h-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <RoleSelectionModal
        isOpen={isRoleModalOpen}
        onClose={() => setIsRoleModalOpen(false)}
      />
    </header>
  );
};

export default Header;
