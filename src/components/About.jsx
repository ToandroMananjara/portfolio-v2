import React from "react";
import me from "../assets/me.png";
import langageC from "../assets/skills/C.svg";
import langageCpp from "../assets/skills/CPP.svg";
import html from "../assets/skills/HTML.svg";
import css from "../assets/skills/CSS.svg";
import JavaScript from "../assets/skills/JavaScript.svg";
import Bootstrap from "../assets/skills/Bootstrap.svg";
import ReactDark from "../assets/skills/React-Dark.svg";
import PHPDark from "../assets/skills/PHP-Dark.svg";
import MySQLDark from "../assets/skills/MySQL-Dark.svg";
import myCv from "../assets/data/CV_Toandro.pdf";

function About({ handleMenu, orderPopUp }) {
  const calculAge = (yearOfbirth) => {
    let date = new Date();
    return date.getFullYear() - yearOfbirth;
  };
  const skills = [
    {
      id: 0,
      src: langageC,
      alt: "Langage C",
      title: "Langage C",
      description: "",
    },
    {
      id: 1,
      src: langageCpp,
      alt: "CPP",
    },
    {
      id: 2,
      src: html,
      alt: "html",
    },
    {
      id: 3,
      src: css,
      alt: "css",
    },
    {
      id: 4,
      src: JavaScript,
      alt: "javascript",
    },
    {
      id: 5,
      src: Bootstrap,
      alt: "bootstrap",
    },
    {
      id: 6,
      src: ReactDark,
      alt: "react js",
    },
    {
      id: 7,
      src: PHPDark,
      alt: "php",
    },
    {
      id: 8,
      src: MySQLDark,
      alt: "MySql",
    },
  ];

  const myProfiles = {
    myName: "MAHASALOTRA",
    myFirstName: "Toandromananjara",
    age: calculAge(2001),
  };

  return (
    <div
      id="about"
      className=" pt-[70px] px-4 sm:px-10 md:px-14"
      onClick={() => orderPopUp && handleMenu()}
    >
      <h1 className=" m-4 md:m-0 text-yellow_primary text-center text-3xl md:text-5xl">
        About Me
      </h1>
      <div className=" flex md:flex-row gap-y-2 flex-col py:6 md:my-14 w-full">
        <div className="md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <img
            src={me}
            alt=""
            className=" h-[15em] md:h-[20em] bg-white bg-opacity-80 rounded-full "
          />
        </div>
        <div className="text-sm md:text-xl bg-[rgba(136,136,136,.05)] shadow-md text-white_primary md:h-auto md:w-1/2  p-4 md:p-10 rounded-xl z-0">
          <div className=" border-l-2 px-4">
            <h3 className="m-0">
              My name is{" "}
              <span className="text-xl">
                {myProfiles.myName + " " + myProfiles.myFirstName}
              </span>
            </h3>
            <p className="my-4 ">
              I am {myProfiles.age} years old and I am in my third year of a
              Bachelor's degree at the University of Antananarivo in the MISA
              program.
            </p>
            <div className="w-full min-h-fit flex justify-start mt-6">
              <a
                href={myCv}
                download
                className="text-xl sm:text-2xl text-white_primary py-2  bg-yellow_primary px-7 rounded-lg cursor-pointer hover:bg-white_primary hover:text-gray_primary transition-all duration-500 ease-in-out"
              >
                <span className="">Download my CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-yellow_primary text-center text-3xl md:text-5xl m-4 md:m-0">
          My Skills
        </h1>

        <ul className="flex justify-center flex-wrap gap-3 mt-6  md:py-4 ">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="hover:scale-125  hover:mx-2 cursor-pointer  transition-all duration-300 ease-in-out"
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-[70px] h-[70px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
