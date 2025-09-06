import React from "react";
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
    name: "Projects",
    link: "/#projects",
  },
  {
    id: 3,
    name: "Education",
    link: "/#education",
  },
  {
    id: 4,
    name: "Contact",
    link: "/#contact",
  },
];

function Navbar({ handleMenu, orderPopUp, setOrderPopUp }) {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
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
      } fixed w-screen z-[999] dark:text-white  flex justify-between px-5  sm:px-10 md:px-14  py-3 transition-all duration-500 ease-in-out`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="navbar-left"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
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
        <AnimatePresence>
          <motion.div
            className={`menu-container text-gray_primary md:text-white_primary absolute md:static ${
              !orderPopUp
                ? "top-[-1000px]"
                : "top-0 bg-white_primary md:bg-transparent"
            } right-0 md:px-0 md:py-0 px-10 py-5 md:flex md:items-center transition-all duration-700 ease-in-out`}
            initial={{ x: orderPopUp ? 0 : 300, opacity: orderPopUp ? 1 : 0 }}
            animate={{
              x: orderPopUp ? 0 : 300,
              opacity: orderPopUp ? 1 : 0,
            }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className="relative mb-3 md:hidden"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <X
                className="absolute top-[-10px] right-[-30px]  w-[30px] h-[30px] cursor-pointer "
                onClick={handleMenu}
              />
            </motion.div>
            <div className="menu-link">
              <ul className="flex flex-col md:flex-row gap-10 gap-y-2">
                {menu.map((menuItem, index) => (
                  <motion.li
                    key={index}
                    id={menuItem.id}
                    className="cursor-pointer"
                    onClick={() => {
                      setOrderPopUp(false);
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
        </AnimatePresence>
        <motion.div
          className="cart md:hidden flex items-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu
            className="cursor-pointer w-[40px] h-[40px]"
            onClick={handleMenu}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Navbar;
