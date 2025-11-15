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
            <ul className="flex flex-row gap-10">
              {menu.map((menuItem, index) => (
                <motion.li
                  key={index}
                  id={menuItem.id}
                  className="cursor-pointer"
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
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="menu-container text-gray_primary absolute top-0 right-0 bg-white_primary/50 backdrop-blur-sm px-10 py-5 flex flex-col items-start md:hidden"
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
