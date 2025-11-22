import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Menu } from "lucide-react";

const menu = [
  {
    id: 0,
    name: "Home",
    link: "/#home",
  },
  {
    id: 1,
    name: "About",
    link: "/#about",
  },
  {
    id: 2,
    name: "Experience",
    link: "/#experience",
  },
  {
    id: 3,
    name: "Skills",
    link: "/#skills",
  },
  {
    id: 4,
    name: "Projects",
    link: "/#projects",
  },
  {
    id: 5,
    name: "Education",
    link: "/#education",
  },
  {
    id: 6,
    name: "Contact",
    link: "mailto:mahasalotra@gmail.com",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={` ${
        scrolling
          ? "bg-gray_primary bg-opacity-90 backdrop-blur-md"
          : "bg-transparent"
      } fixed w-full left-0 right-0 z-[999] dark:text-white flex justify-between px-5 sm:px-10 md:px-14 py-3 transition-all duration-500 ease-in-out`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="navbar-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="logo flex text-3xl gap-1"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="logo-text text-blue_primary">
            <a href="/">
              <strong>TM</strong>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="navbar-right text-xl flex gap-2 md:gap-12">
        <div className="dark-mode flex items-center"> </div>

        {/* Desktop Menu - Always Visible */}
        <div className="hidden md:flex md:items-center">
          <div className="menu-link">
            <ul className="flex flex-row gap-8">
              {/* Home */}
              <motion.li
                className="cursor-pointer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <a
                  href="/#home"
                  className="hover:text-blue_primary transition-all duration-300 ease-in-out relative group"
                >
                  Home
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue_primary group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </a>
              </motion.li>

              {/* About Me Section */}
              <motion.li
                className="relative group cursor-pointer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  ease: "easeOut",
                }}
              >
                <span className="hover:text-blue_primary transition-all duration-300 ease-in-out flex items-center gap-1">
                  About Me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform group-hover:rotate-180 duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
                <div className="absolute top-full left-0 mt-2 bg-gray_primary/95 backdrop-blur-md rounded-lg shadow-xl border border-blue_primary/20 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[180px] z-50">
                  <a
                    href="/#about"
                    className="block px-5 py-3 hover:bg-blue_primary/20 hover:text-blue_primary hover:pl-6 transition-all duration-200 border-l-2 border-transparent hover:border-blue_primary"
                  >
                    About
                  </a>
                  <a
                    href="/#education"
                    className="block px-5 py-3 hover:bg-blue_primary/20 hover:text-blue_primary hover:pl-6 transition-all duration-200 border-l-2 border-transparent hover:border-blue_primary"
                  >
                    Education
                  </a>
                </div>
              </motion.li>

              {/* Professional Section */}
              <motion.li
                className="relative group cursor-pointer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              >
                <span className="hover:text-blue_primary transition-all duration-300 ease-in-out flex items-center gap-1">
                  Portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform group-hover:rotate-180 duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
                <div className="absolute top-full left-0 mt-2 bg-gray_primary/95 backdrop-blur-md rounded-lg shadow-xl border border-blue_primary/20 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[180px] z-50">
                  <a
                    href="/#experience"
                    className="block px-5 py-3 hover:bg-blue_primary/20 hover:text-blue_primary hover:pl-6 transition-all duration-200 border-l-2 border-transparent hover:border-blue_primary"
                  >
                    Experience
                  </a>
                  <a
                    href="/#skills"
                    className="block px-5 py-3 hover:bg-blue_primary/20 hover:text-blue_primary hover:pl-6 transition-all duration-200 border-l-2 border-transparent hover:border-blue_primary"
                  >
                    Skills
                  </a>
                  <a
                    href="/#projects"
                    className="block px-5 py-3 hover:bg-blue_primary/20 hover:text-blue_primary hover:pl-6 transition-all duration-200 border-l-2 border-transparent hover:border-blue_primary"
                  >
                    Projects
                  </a>
                </div>
              </motion.li>

              {/* Contact */}
              <motion.li
                className="cursor-pointer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <a
                  href="mailto:mahasalotra@gmail.com"
                  className="hover:text-blue_primary transition-all duration-300 ease-in-out relative group"
                >
                  Contact
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue_primary group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="menu-container text-white_primary absolute top-0 right-0 bg-gray_primary/95 backdrop-blur-sm px-10 py-5 flex flex-col items-start md:hidden"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                className="relative mb-3"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <X
                  className="absolute  top-[-10px] left-[0px] w-[230px] h-[30px] cursor-pointer"
                  onClick={closeMenu}
                />
              </motion.div>
              <div className="menu-link">
                <ul className="flex flex-col gap-10 gap-y-2">
                  {menu.map((menuItem, index) => (
                    <motion.li
                      key={index}
                      id={menuItem.id}
                      className="cursor-pointer"
                      onClick={() => {
                        closeMenu();
                      }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + 0.3,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <a
                        href={menuItem.link}
                        className="hover:text-blue_primary transition-all duration-300 ease-in-out relative group"
                      >
                        {menuItem.name}
                        <motion.span
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue_primary group-hover:w-full transition-all duration-300"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="cart md:hidden flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu
            className="cursor-pointer w-[40px] h-[40px]"
            onClick={toggleMenu}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Navbar;
