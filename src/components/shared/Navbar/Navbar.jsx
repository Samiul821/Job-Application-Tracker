import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Moon, Sun } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
  const [isDarkIcon, setIsDarkIcon] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-xl
        bg-white/85
        border-b
        border-gray-200
        shadow-xl
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Link to="/" className="flex items-center gap-2 group">
                <div
                  className="
                  w-9 h-9
                  rounded-lg
                  bg-gradient-to-br
                  from-[#5B3DF5]
                  to-[#7C3AED]
                  flex items-center justify-center
                  shadow-md
                  "
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="
                      M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2
                      M9 5a2 2 0 002 2h2a2 2 0 002-2
                      M9 5a2 2 0 012-2h2a2 2 0 012 2
                      m-6 9l2 2 4-4
                      "
                    />
                  </svg>
                </div>

                <span
                  className="
                  hidden sm:block
                  text-lg
                  font-bold
                  bg-gradient-to-r
                  from-[#5B3DF5]
                  to-[#7C3AED]
                  bg-clip-text
                  text-transparent
                  "
                >
                  JobTrack Pro
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}

            <div
              className="
              hidden lg:flex
              items-center
              gap-2
              "
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    to={item.href}
                    className="
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-600
                      hover:text-[#5B3DF5]
                      rounded-lg
                      transition-all
                      "
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Side */}

            <div
              className="
              flex
              items-center
              gap-2
              "
            >
              {/* Search */}

              <button
                className="
                p-2.5
                hover:bg-gray-100
                rounded-lg
                transition
                "
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>

              {/* Theme Toggle Icon Only */}

              <motion.button
                whileHover={{
                  scale: 1.15,
                  rotate: -5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() => setIsDarkIcon(!isDarkIcon)}
                className="
                p-2.5
                hover:bg-gray-100
                rounded-lg
                transition
                "
              >
                <motion.div
                  animate={{
                    rotate: isDarkIcon ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {isDarkIcon ? (
                    <Sun
                      className="
                      w-5
                      h-5
                      text-gray-600
                      "
                    />
                  ) : (
                    <Moon
                      className="
                      w-5
                      h-5
                      text-gray-600
                      "
                    />
                  )}
                </motion.div>
              </motion.button>

              {/* Login */}

              <button
                className="
                hidden sm:block
                px-5
                py-2
                rounded-full
                border-2
                border-[#5B3DF5]
                text-[#5B3DF5]
                font-semibold
                text-sm
                "
              >
                Login
              </button>

              {/* Get Started */}

              <button
                className="
                hidden sm:block
                px-6
                py-2
                rounded-full
                bg-gradient-to-r
                from-[#5B3DF5]
                to-[#7C3AED]
                text-white
                font-semibold
                text-sm
                "
              >
                Get Started
              </button>

              {/* Mobile Button */}

              <button
                onClick={toggleMenu}
                className="
                lg:hidden
                p-2.5
                "
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
            fixed
            top-16
            left-0
            right-0
            z-40
            lg:hidden
            "
          >
            <div
              onClick={closeMenu}
              className="
              fixed
              inset-0
              bg-black/30
              "
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="
              relative
              mx-4
              mt-3
              bg-white
              rounded-2xl
              shadow-2xl
              p-5
              "
            >
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={closeMenu}
                    className="
                      block
                      px-4
                      py-3
                      rounded-lg
                      hover:bg-gray-100
                      "
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                <button
                  className="
                  w-full
                  py-3
                  rounded-full
                  border-2
                  border-[#5B3DF5]
                  text-[#5B3DF5]
                  "
                >
                  Login
                </button>

                <button
                  className="
                  w-full
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#5B3DF5]
                  to-[#7C3AED]
                  text-white
                  "
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;