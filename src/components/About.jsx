import me from "../assets/me.png";

import myCv from "../assets/data/CV_Toandro.pdf";

function About() {
  const calculAge = (yearOfbirth) => {
    let date = new Date();
    return date.getFullYear() - yearOfbirth;
  };

  const myProfiles = {
    myName: "MAHASALOTRA",
    myFirstName: "Toandromananjara",
    age: calculAge(2001),
  };

  return (
    <div id="about" className=" pt-[70px] px-4 sm:px-10 md:px-14">
      <h1 className=" m-4 md:m-0 text-yellow_primary text-center text-3xl md:text-5xl">
        About Me
      </h1>
      <div className=" flex md:flex-row gap-y-2 flex-col py:6 md:my-14 w-full">
        <div className="md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <img
            src={me}
            alt="Toandro Mananjara"
            className=" h-[15em] md:h-[20em] bg-white bg-opacity-80 rounded-full transition-transform duration-200 hover:scale-105"
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
            <p className="my-4">
              I am {myProfiles.age} years old and I am a Full Stack Developer. I
              have obtained my Bachelor&apos;s degree and I am currently in my
              final year of Master&apos;s degree at the University of
              Antananarivo in the MISA program. Passionate about creating
              innovative web solutions using modern technologies.
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
    </div>
  );
}

export default About;
