import React from "react";
import { useState, useEffect } from "react";
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
    link: "mailto:mahasalotra@gmail.com",
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
    <div
      className={` ${
        scrolling
          ? "bg-gray_primary bg-opacity-90 backdrop-blur-md"
          : "bg-transparent"
      } fixed w-screen z-[999] dark:text-white  flex justify-between px-5  sm:px-10 md:px-14  py-3 transition-all duration-500 ease-in-out`}
    >
      <div className="navbar-left">
        <div className="logo flex text-3xl gap-1 ">
          <div className="logo-text text-blue_primary">
            <a href="/">
              <strong>TM</strong>
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-right text-xl flex gap-2 md:gap-12">
        <div className="dark-mode flex items-center"> </div>
        <div
          className={`menu-container text-gray_primary md:text-white_primary absolute  md:static ${
            !orderPopUp
              ? "top-[-1000px] "
              : "top-0 bg-white_primary md:bg-transparent"
          } right-0 md:px-0 md:py-0 px-10 py-5 md:flex md:items-center transition-all duration-700 ease-in-out`}
        >
          <div className="relative mb-3 md:hidden">
            <X
              className="absolute top-[-10px] right-[-30px]  w-[30px] h-[30px] cursor-pointer "
              onClick={handleMenu}
            />
          </div>
          <div className="menu-link">
            <ul className="flex flex-col md:flex-row gap-10 gap-y-2">
              {menu.map((menu) => (
                <li
                  id={menu.id}
                  className="cursor-pointer"
                  onClick={() => {
                    setOrderPopUp(false);
                  }}
                >
                  <a
                    href={menu.link}
                    className="hover:text-blue_primary transition-all duration-300 ease-in-out"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cart md:hidden flex items-center">
          <Menu
            className="cursor-pointer w-[40px] h-[40px]"
            onClick={handleMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
