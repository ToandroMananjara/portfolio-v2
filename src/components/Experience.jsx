function Experience() {
  const experiences = [
    {
      id: 1,
      period: "June 2025 – Present",
      title: "Full-Stack Developer",
      company: "Freelance",
      location: "Remote",
      website: "",
      type: "Freelance",
      description:
        "Development of complete web applications using Next.js, NestJS, TypeScript, PostgreSQL. Database design and maintenance, REST API implementation. Frontend component optimization for performance and responsiveness. PostgreSQL database maintenance, bug fixes and deployment on VPS (Docker + Nginx).",
      technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Docker"],
    },
    {
      id: 2,
      period: "August 2025",
      title: "Front-End Developer",
      company: "Freelance",
      location: "Remote",
      website: "",
      type: "Freelance",
      description:
        "Design of an innovative web application using artificial intelligence for the music industry. Development of a dynamic and responsive interface with React.js and TypeScript.",
      technologies: ["React.js", "TypeScript", "AI Integration"],
    },
    {
      id: 3,
      period: "July – August 2025",
      title: "Mobile Development Intern",
      company: "Paika Sarl",
      location: "Madagascar",
      website: "",
      type: "Internship",
      description:
        "Full-stack mobile application development with React Native, NestJS, TypeScript and Zustand. PostgreSQL database design and implementation of key features. Applied Agile Scrum methodology throughout the development process.",
      technologies: [
        "React Native",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Zustand",
      ],
    },
    {
      id: 4,
      period: "March – May 2025",
      title: "Web Development Intern",
      company: "Kinga IT",
      location: "Madagascar",
      website: "",
      type: "Internship",
      description:
        "Contribution to full-stack development with React, NestJS, TypeScript, MongoDB and PostgreSQL. Integration of new features and application of collaborative development best practices. Applied Agile Scrum methodology throughout the development process.",
      technologies: ["React", "NestJS", "TypeScript", "MongoDB", "PostgreSQL"],
    },
  ];

  return (
    <div id="experience" className="pt-[70px] px-4 sm:px-10 md:px-14">
      <h1 className="mb-8 text-yellow_primary text-center text-3xl md:text-5xl">
        Professional Experience
      </h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="group relative">
            {/* Timeline Line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue_primary/50 to-transparent hidden md:block" />
            )}

            <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Timeline Dot */}
              <div className="hidden md:flex items-start pt-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue_primary to-yellow_primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 rounded-full bg-gray_primary" />
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-[rgba(136,136,136,.05)] rounded-xl p-6 border border-transparent hover:border-blue_primary/30 hover:shadow-lg transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-blue_primary mb-2 group-hover:text-yellow_primary transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-300">
                      <span className="font-semibold text-white_primary">
                        {experience.company}
                      </span>
                      <span className="hidden sm:inline text-gray-500">•</span>
                      <span className="text-sm text-gray-400">
                        {experience.location}
                      </span>
                    </div>
                    {experience.website && (
                      <a
                        href={experience.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue_primary hover:text-yellow_primary transition-colors duration-300 underline"
                      >
                        {experience.website}
                      </a>
                    )}
                  </div>

                  {/* Period Badge */}
                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <span className="text-sm font-medium text-yellow_primary bg-yellow_primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {experience.period}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        experience.type === "Freelance"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-purple-500/20 text-purple-400"
                      }`}
                    >
                      {experience.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-4">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue_primary/10 text-blue_primary text-xs rounded-full border border-blue_primary/20 hover:bg-blue_primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
