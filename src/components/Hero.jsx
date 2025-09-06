import React from "react";
import { motion } from "framer-motion";
import facebook from "/src/assets/socials/facebook.png";
import linkedin from "/src/assets/socials/linkedin.png";
import github from "/src/assets/socials/github.png";

function Hero({ handleMenu, orderPopUp }) {
  const socials = [
    {
      id: 0,
      name: facebook,
      link: "https://www.facebook.com/anwar.mananjara",
    },
    {
      id: 1,
      name: linkedin,
      link: "https://www.linkedin.com/in/toandromananjara-mahasalotra-44b289280",
    },
    {
      id: 3,
      name: github,
      link: "https://github.com/ToandroMananjara",
    },
  ];
  return (
    <motion.div
      id="home"
      className="bg-[url('/src/assets/bg/toandro-home-cover.jpg')] bg-center bg-cover h-screen flex flex-col items-center justify-center py-[60px] px-2 transition-all duration-500 ease-out"
      onClick={() => orderPopUp && handleMenu()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="grow"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex flex-col justify-center h-full">
          <motion.h1
            className="uppercase text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-wide text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Toandro Mananjara
          </motion.h1>
          <motion.h4
            className="uppercase text-yellow_primary text-center text-xl sm:text-2xl lg:text-3xl m-2 lg:m-6 tracking-wide"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Full Stack Developer
          </motion.h4>
          <motion.div
            className="flex justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <ul className="flex gap-x-3 m-1">
              {socials.map((social, index) => (
                <motion.li
                  key={index}
                  className="bg-white_primary rounded-full p-2 flex justify-center items-center hover:scale-125  hover:mx-2 cursor-pointer  transition-all duration-300 ease-in-out"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.8 + index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href={social.link}
                    className="w-[35px] h-[35px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={social.name} alt={`Social ${index}`} />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="w-full flex justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.a
          href="/#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl sm:text-4xl  bg-[#1a191d] shadow-md px-7 py-2 rounded-lg cursor-pointer hover:bg-white_primary hover:text-gray_primary transition-all duration-500 ease-in-out">
            See More
          </span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
