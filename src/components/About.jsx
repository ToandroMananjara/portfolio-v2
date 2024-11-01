import React from "react";

function About({ handleMenu, orderPopUp }) {
  const skills = [
    {
      id: 0,
      src: "/src/assets/skills/C.svg",
      alt: "Langage C",
      title: "Langage C",
      description: "",
    },
    {
      id: 1,
      src: "/src/assets/skills/CPP.svg",
      alt: "CPP",
    },
    {
      id: 2,
      src: "/src/assets/skills/HTML.svg",
      alt: "html",
    },
    {
      id: 3,
      src: "/src/assets/skills/CSS.svg",
      alt: "css",
    },
    {
      id: 4,
      src: "/src/assets/skills/JavaScript.svg",
      alt: "javascript",
    },
    {
      id: 5,
      src: "/src/assets/skills/Bootstrap.svg",
      alt: "bootstrap",
    },
    {
      id: 6,
      src: "/src/assets/skills/React-Dark.svg",
      alt: "react js",
    },
    {
      id: 7,
      src: "/src/assets/skills/PHP-Dark.svg",
      alt: "php",
    },
    {
      id: 8,
      src: "/src/assets/skills/MySQL-Dark.svg",
      alt: "MySql",
    },
  ];
  return (
    <div
      id="about"
      className=" pt-[70px] px-4 sm:px-10 md:px-14"
      onClick={() => orderPopUp && handleMenu()}
    >
      <h1 className=" m-4 md:m-0 text-center text-3xl md:text-5xl">About Me</h1>
      <div className=" flex md:flex-row gap-y-2 flex-col py:6 md:my-14 w-full">
        <div className="md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <img
            src="/src/assets/me.png"
            alt=""
            className=" h-[15em] md:h-[20em] bg-white bg-opacity-80 rounded-full "
          />
        </div>
        <div className="text-sm md:text-xl bg-[rgba(136,136,136,.05)] shadow-md text-white_primary md:h-auto md:w-1/2  p-4 md:p-10 rounded-xl z-0">
          <div className=" border-l-2 px-4">
            <h3 className="m-0">
              My name is{" "}
              <span className="text-xl">MAHASALOTRA Toandromananjara</span>
            </h3>
            <p className="my-4 ">
              I am 23 years old and I am in my third year of a Bachelor's degree
              in Mathematics and Computer Science at the University of
              Antananarivo. Additionally, I am self-learning Programming and Web
              Development.
            </p>
            <div className="w-full min-h-fit flex justify-start mt-6">
              <a
                href="/src/assets/data/CV_Toandro.pdf"
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
        <h1 className=" text-center text-3xl md:text-5xl m-4 md:m-0">
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
