function Education() {
  const educations = [
    {
      id: 1,
      year: "2024 - 2025",
      school: "University of Antananarivo (MISA)",
      description: "Master 1 in Computer Science",
      type: "University",
    },
    {
      id: 2,
      year: "2021 - 2024",
      school: "University of Antananarivo (MISA)",
      description: "Bachelor's Degree in Computer Science - Graduated",
      type: "University",
    },
    {
      id: 3,
      year: "2023",
      school: "Digital Training Center",
      description: "Web Development Training - Full Stack Development",
      type: "Formation",
    },
    {
      id: 4,
      year: "2020 - 2021",
      school: "University of Antananarivo",
      description: "2nd year Bachelor's in Mathematics and Computer Science",
      type: "University",
    },
    {
      id: 5,
      year: "2019 - 2020",
      school: "University of Antananarivo",
      description: "1st year Bachelor's in Mathematics and Computer Science",
      type: "University",
    },
    {
      id: 6,
      year: "2018",
      school: "Lycée Nanisana",
      description: "Baccalaureate series C (Sciences)",
      type: "High School",
    },
  ];
  return (
    <div id="education" className="pt-[70px] px-4 sm:px-10 md:px-14">
      <h1 className=" mb-4 text-yellow_primary text-center text-3xl md:text-5xl">
        Education & Training
      </h1>

      <div className="w-full flex flex-wrap">
        {educations.map((education, index) => (
          <div
            key={index}
            className="group text-white_primary w-full sm:w-1/2 xl:w-1/3 p-4 shadow-md cursor-pointer"
          >
            <div className="h-full rounded-lg overflow-hidden bg-[rgba(136,136,136,.05)] p-6 flex flex-col relative border border-transparent hover:border-yellow_primary hover:shadow-lg transition-all duration-300">
              {/* Type Badge */}
              <div
                className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  education.type === "University"
                    ? "bg-blue_primary/20 text-blue_primary"
                    : education.type === "Formation"
                    ? "bg-yellow_primary/20 text-yellow_primary"
                    : "bg-purple-500/20 text-purple-400"
                }`}
              >
                {education.type}
              </div>

              <h1 className="text-xl md:text-2xl text-blue_primary font-bold py-2 leading-tight">
                {education.school}
              </h1>

              <div className="flex-grow">
                <h2 className="text-lg md:text-xl text-yellow_primary font-semibold py-2">
                  {education.year}
                </h2>
                <h3 className="text-base md:text-lg text-gray-300 py-2 leading-relaxed">
                  {education.description}
                </h3>
              </div>

              {/* Decorative element */}
              <div className="h-1 w-0 bg-gradient-to-r from-blue_primary to-yellow_primary rounded-full mt-4 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Education;
