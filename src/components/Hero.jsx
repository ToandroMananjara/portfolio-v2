import facebook from "/src/assets/socials/facebook.png";
import linkedin from "/src/assets/socials/linkedin.png";
import github from "/src/assets/socials/github.png";

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
        <a href="/#about">
          <span className="text-2xl sm:text-4xl  bg-[#1a191d] shadow-md px-7 py-2 rounded-lg cursor-pointer hover:bg-white_primary hover:text-gray_primary transition-all duration-500 ease-in-out">
            See More
          </span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
