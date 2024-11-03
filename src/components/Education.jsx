function Education() {
  const educations = [
    {
      id: 1,
      year: "2023 - 2024",
      school: "University of Antananarivo",
      description: "3rd year of a Bachelor's degree in MISA",
    },
    {
      id: 2,
      year: "2022 - 2023",
      school: "University of Antananarivo",
      description:
        "3rd year of a Bachelor's degree in  Mathematics and Computer Science",
    },
    {
      id: 3,
      year: "2023",
      school: "Digital Training Center",
      description: "Web Development Training",
    },
    {
      id: 4,
      year: "2022 - 2020",
      school: "University of Antananarivo",
      description:
        "2nd year of a Bachelor's degree in Mathematics and Computer Science",
    },
    {
      id: 5,
      year: "2019 - 2020",
      school: "University of Antananarivo",
      description:
        " 1st year of a Bachelor's degree in Mathematics and Computer Science",
    },

    {
      id: 6,
      year: "2018",
      school: "Nanisana High School",
      description: "Baccalaureate series C",
    },
  ];
  return (
    <div id="education" className="pt-[70px] px-4 sm:px-10 md:px-14">
      <h1 className=" mb-4 text-yellow_primary text-center text-3xl md:text-5xl">
        My Educations & Training
      </h1>

      <div className="w-full flex flex-wrap">
        {educations.map((education, index) => (
          <div className="group text-white_primary   w-full sm:w-1/2 xl:w-1/3 p-4 shadow-md cursor-pointer">
            <div className=" sm:h-[220px] rounded-lg  overflow-hidden bg-[rgba(136,136,136,.05)] p-7 ">
              <h1 className="text-2xl text-blue_primary  py-2 ">
                {education.school}
              </h1>
              <div className="overflow-hidden ">
                <h2 className="text-xl  py-2 ">{education.year}</h2>
                <h3 className="text-lg  py-2 ">{education.description}</h3>
              </div>
              <div className="bg-[rgba(136,136,136,.05)] px-3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Education;
