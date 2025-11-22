import facebook from "/src/assets/socials/facebook.png";
import linkedin from "/src/assets/socials/linkedin.png";
import github from "/src/assets/socials/github.png";
import { ArrowDown } from "lucide-react";

function Hero() {
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
    <div
      id="home"
      className="bg-[url('/src/assets/bg/toandro-home-cover.jpg')] bg-center bg-cover h-screen w-full flex flex-col items-center justify-center py-[60px] px-2 transition-all duration-500 ease-out overflow-hidden"
    >
      <div className="grow">
        <div className="flex flex-col justify-center h-full">
          <h1 className="uppercase text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-wide text-center">
            Toandro Mananjara
          </h1>
          <h4 className="uppercase text-yellow_primary text-center text-xl sm:text-2xl lg:text-3xl m-2 lg:m-6 tracking-wide">
            Full Stack Developer
          </h4>
          <div className="flex justify-center">
            <ul className="flex gap-x-3 m-1">
              {socials.map((social, index) => (
                <li
                  key={index}
                  className="bg-white_primary rounded-full p-2 flex justify-center items-center hover:scale-125  hover:mx-2 cursor-pointer  transition-all duration-300 ease-in-out"
                >
                  <a
                    href={social.link}
                    className="w-[35px] h-[35px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={social.name} alt={`Social ${index}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <a
          href="/#about"
          className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue_primary/80 to-blue_primary/60 rounded-full hover:from-blue_primary hover:to-blue_primary border-2 border-blue_primary/30 shadow-lg animate-bounce hover:animate-none transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <ArrowDown className="w-5 h-5 text-white_primary group-hover:translate-y-1 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue_primary to-yellow_primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
