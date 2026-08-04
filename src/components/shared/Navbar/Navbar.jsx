import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  HiOutlineSearch,
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineMoon,
} from "react-icons/hi";

import { MdAutoAwesome } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Home",
    "Features",
    "Dashboard",
    "Pricing",
    "About",
    "Contact",
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  w-11
                  h-11
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-[#5B3DF5]
                  via-[#7C3AED]
                  to-[#00C2FF]
                  text-white
                  shadow-xl
                  shadow-indigo-300/40
                  overflow-hidden
                "
              >
                <div className="absolute inset-0 bg-white/20 blur-md" />

                <MdAutoAwesome
                  size={24}
                  className="relative z-10"
                />
              </motion.div>

              <div className="leading-none">
                <h1
                  className="
                    text-xl
                    font-extrabold
                    tracking-tight
                    bg-gradient-to-r
                    from-[#5B3DF5]
                    via-[#7C3AED]
                    to-[#00C2FF]
                    bg-clip-text
                    text-transparent
                  "
                >
                  JobTrack
                </h1>

                <span
                  className="
                    text-[11px]
                    text-gray-400
                    font-semibold
                    tracking-[4px]
                  "
                >
                  PRO
                </span>
              </div>
            </motion.div>


            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="
                    relative
                    text-sm
                    font-medium
                    text-gray-600
                    hover:text-[#5B3DF5]
                    transition
                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-gradient-to-r
                    after:from-[#5B3DF5]
                    after:to-[#00C2FF]
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {item}
                </motion.a>
              ))}
            </div>


            {/* Right Side */}
            <div className="hidden md:flex items-center gap-3">

              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:bg-indigo-50
                  hover:text-[#5B3DF5]
                  transition
                "
              >
                <HiOutlineSearch size={20} />
              </motion.button>


              {/* Theme */}
              <motion.button
                whileHover={{
                  rotate: 20,
                  scale: 1.1,
                }}
                className="
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:bg-indigo-50
                  hover:text-[#5B3DF5]
                "
              >
                <HiOutlineMoon size={20} />
              </motion.button>


              {/* Login */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  relative
                  overflow-hidden
                  px-6
                  py-2.5
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  font-semibold
                  text-sm
                  text-gray-700
                  hover:text-[#5B3DF5]
                  hover:border-[#5B3DF5]
                  transition
                "
              >
                Login

                <motion.span
                  animate={{
                    x: ["-120%", "150%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-indigo-100
                    to-transparent
                  "
                />
              </motion.button>


              {/* Get Started */}
              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  relative
                  overflow-hidden
                  px-7
                  py-3
                  rounded-full
                  text-white
                  font-semibold
                  text-sm
                  bg-gradient-to-r
                  from-[#5B3DF5]
                  via-[#7C3AED]
                  to-[#00C2FF]
                  shadow-xl
                  shadow-indigo-300/40
                "
              >
                <span className="relative z-10">
                  Get Started
                </span>

                <motion.span
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    top-0
                    left-0
                    w-20
                    h-full
                    bg-white/30
                    skew-x-12
                    blur-md
                  "
                />
              </motion.button>

            </div>


            {/* Tablet + Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                lg:hidden
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                text-gray-600
                hover:bg-indigo-50
                hover:text-[#5B3DF5]
                transition
              "
            >
              {isOpen ? (
                <HiOutlineX size={26} />
              ) : (
                <HiOutlineMenu size={26} />
              )}
            </button>

          </div>
        </div>
      </nav>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: "-100%",
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 25,
            }}
            className="
              fixed
              top-16
              left-0
              z-[60]
              w-[320px]
              h-[calc(100vh-64px)]
              bg-white
              shadow-2xl
              border-r
              border-gray-200
              lg:hidden
            "
          >
            <div className="p-6 flex flex-col gap-3">

              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ x: 8 }}
                  onClick={() => setIsOpen(false)}
                  className="
                    px-4
                    py-3
                    rounded-xl
                    text-gray-700
                    font-medium
                    hover:bg-indigo-50
                    hover:text-[#5B3DF5]
                    transition
                  "
                >
                  {item}
                </motion.a>
              ))}


              <div className="border-t my-4" />


              <button
                className="
                  py-3
                  rounded-full
                  border
                  font-semibold
                  hover:border-[#5B3DF5]
                  hover:text-[#5B3DF5]
                  transition
                "
              >
                Login
              </button>


              <button
                className="
                  py-3
                  rounded-full
                  text-white
                  font-semibold
                  bg-gradient-to-r
                  from-[#5B3DF5]
                  to-[#00C2FF]
                "
              >
                Get Started
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;