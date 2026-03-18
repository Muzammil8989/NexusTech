import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-scroll";
import { Button } from "../ui/button";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home",         path: "home" },
  { name: "Services",     path: "services" },
  { name: "About",        path: "about" },
  { name: "Products",     path: "products" },
  { name: "Testimonials", path: "testimonials" },
  { name: "FAQ",          path: "faq" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="px-4 lg:px-20 max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 uppercase font-bold text-base sm:text-xl">
            <img
              src={Logo}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover flex-shrink-0"
              alt="NexusTech Logo"
            />
            <span className="text-neutralDGrey dark:text-white">NexusTech</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  smooth={true}
                  duration={500}
                  className="text-sm font-medium text-neutralGrey dark:text-gray-300 hover:text-BrandPrimary dark:hover:text-BrandSecondary transition-colors cursor-pointer"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-neutralGrey dark:text-gray-300 hover:text-BrandPrimary dark:hover:text-BrandSecondary transition-colors"
            >
              Login
            </a>
            <Button
              size="sm"
              className="bg-BrandPrimary hover:bg-BrandPrimary/90 text-white px-5 shadow-md shadow-BrandPrimary/20"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn items-center justify-center w-10 h-10 rounded-lg bg-neutralDGrey/10 border border-neutralDGrey/30 text-neutralDGrey hover:bg-BrandPrimary/10 transition-colors"
          >
            {isMenuOpen ? <HiOutlineXMark size={22} /> : <HiBars3BottomRight size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-b border-border shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map(({ name, path }) => (
                <Link
                  to={path}
                  key={name}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-neutralDGrey dark:text-white hover:text-BrandPrimary dark:hover:text-BrandSecondary hover:bg-BrandPrimary/5 py-2.5 px-3 rounded-lg transition-colors cursor-pointer"
                >
                  {name}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-3 border-t border-border mt-2">
                <a
                  href="#"
                  className="text-sm font-medium text-neutralGrey dark:text-gray-300 hover:text-BrandPrimary transition-colors"
                >
                  Login
                </a>
                <Button
                  size="sm"
                  className="bg-BrandPrimary hover:bg-BrandPrimary/90 text-white px-5"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
