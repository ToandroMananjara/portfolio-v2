import React from "react";
import { motion } from "framer-motion";
import me from "../assets/me.png";

// Front-End Skills
import html from "../assets/skills/HTML.svg";
import css from "../assets/skills/CSS.svg";
import JavaScript from "../assets/skills/JavaScript.svg";
import typescript from "../assets/skills/TypeScript.svg";
import ReactDark from "../assets/skills/React-Dark.svg";
import nextjs from "../assets/skills/NextJS.svg";
import reactNative from "../assets/skills/ReactNative.svg";
import tailwindcss from "../assets/skills/TailwindCSS.svg";
import Bootstrap from "../assets/skills/Bootstrap.svg";
import materialui from "../assets/skills/MaterialUI.svg";

// Back-End Skills
import nodejs from "../assets/skills/NodeJS.svg";
import nestjs from "../assets/skills/NestJS.svg";

// Databases
import MySQLDark from "../assets/skills/MySQL-Dark.svg";
import postgresql from "../assets/skills/PostgreSQL.svg";
import mongodb from "../assets/skills/MongoDB.svg";

// Programming Languages
import python from "../assets/skills/Python.svg";
import java from "../assets/skills/Java.svg";
import langageC from "../assets/skills/C.svg";
import langageCpp from "../assets/skills/CPP.svg";
import PHPDark from "../assets/skills/PHP-Dark.svg";

// Tools & DevOps
import git from "../assets/skills/Git.svg";
import docker from "../assets/skills/Docker.svg";

import myCv from "../assets/data/CV_Toandro.pdf";

function About({ handleMenu, orderPopUp }) {
  const calculAge = (yearOfbirth) => {
    let date = new Date();
    return date.getFullYear() - yearOfbirth;
  };
  const skills = [
    // Front-End Development
    {
      category: "Front-End",
      skills: [
        { id: 0, src: html, alt: "HTML5", title: "HTML5" },
        { id: 1, src: css, alt: "CSS3", title: "CSS3" },
        {
          id: 2,
          src: JavaScript,
          alt: "JavaScript",
          title: "JavaScript (ES6+)",
        },
        { id: 3, src: typescript, alt: "TypeScript", title: "TypeScript" },
        { id: 4, src: ReactDark, alt: "React", title: "React" },
        { id: 5, src: nextjs, alt: "Next.js", title: "Next.js" },
        { id: 6, src: reactNative, alt: "React Native", title: "React Native" },
        { id: 7, src: tailwindcss, alt: "Tailwind CSS", title: "Tailwind CSS" },
        { id: 8, src: Bootstrap, alt: "Bootstrap", title: "Bootstrap" },
        { id: 9, src: materialui, alt: "Material-UI", title: "Material-UI" },
      ],
    },
    // Back-End Development
    {
      category: "Back-End",
      skills: [
        { id: 10, src: nodejs, alt: "Node.js", title: "Node.js" },
        { id: 11, src: nestjs, alt: "NestJS", title: "NestJS" },
      ],
    },
    // Databases
    {
      category: "Bases de Données",
      skills: [
        { id: 12, src: MySQLDark, alt: "MySQL", title: "MySQL" },
        { id: 13, src: postgresql, alt: "PostgreSQL", title: "PostgreSQL" },
        { id: 14, src: mongodb, alt: "MongoDB", title: "MongoDB" },
      ],
    },
    // Programming Languages
    {
      category: "Autres Langages",
      skills: [
        { id: 15, src: python, alt: "Python", title: "Python" },
        { id: 16, src: java, alt: "Java", title: "Java" },
        { id: 17, src: langageC, alt: "C", title: "C" },
        { id: 18, src: langageCpp, alt: "C++", title: "C++" },
        { id: 19, src: PHPDark, alt: "PHP", title: "PHP" },
      ],
    },
    // Tools & DevOps
    {
      category: "Outils & DevOps",
      skills: [
        { id: 20, src: git, alt: "Git", title: "Git/GitHub" },
        { id: 21, src: docker, alt: "Docker", title: "Docker" },
      ],
    },
  ];

  const myProfiles = {
    myName: "MAHASALOTRA",
    myFirstName: "Toandromananjara",
    age: calculAge(2001),
  };

  return (
    <motion.div
      id="about"
      className=" pt-[70px] px-4 sm:px-10 md:px-14"
      onClick={() => orderPopUp && handleMenu()}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className=" m-4 md:m-0 text-yellow_primary text-center text-3xl md:text-5xl"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>
      <div className=" flex md:flex-row gap-y-2 flex-col py:6 md:my-14 w-full">
        <motion.div
          className="md:w-1/2 flex justify-center items-center mb-4 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={me}
            alt="Toandro Mananjara"
            className=" h-[15em] md:h-[20em] bg-white bg-opacity-80 rounded-full "
            whileHover={{
              scale: 1.05,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
          />
        </motion.div>
        <motion.div
          className="text-sm md:text-xl bg-[rgba(136,136,136,.05)] shadow-md text-white_primary md:h-auto md:w-1/2  p-4 md:p-10 rounded-xl z-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className=" border-l-2 px-4">
            <motion.h3
              className="m-0"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              My name is{" "}
              <span className="text-xl">
                {myProfiles.myName + " " + myProfiles.myFirstName}
              </span>
            </motion.h3>
            <motion.p
              className="my-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              I am {myProfiles.age} years old and I am a Full Stack Developer
              with {myProfiles.age - 18} years of experience in web development.
              I am currently in my third year of a Bachelor&apos;s degree at the
              University of Antananarivo in the MISA program. Passionate about
              creating innovative web solutions using modern technologies.
            </motion.p>
            <motion.div
              className="w-full min-h-fit flex justify-start mt-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.a
                href={myCv}
                download
                className="text-xl sm:text-2xl text-white_primary py-2  bg-yellow_primary px-7 rounded-lg cursor-pointer hover:bg-white_primary hover:text-gray_primary transition-all duration-500 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="">Download my CV</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className=""
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-yellow_primary text-center text-3xl md:text-5xl m-4 md:m-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Compétences Techniques
        </motion.h1>

        {skills.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            className="mb-6 md:mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-blue_primary text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              {category.category}
            </motion.h3>
            <ul className="flex justify-center flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skill.id}
                  className="group relative cursor-pointer transition-all duration-300 ease-in-out"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                >
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] transition-transform duration-200"
                    title={skill.title}
                  />
                  <div className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 bg-gray_primary text-white_primary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 pointer-events-none">
                    {skill.title}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default About;
