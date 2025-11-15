import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      id: 1,
      period: "June 2025 – Present",
      title: "Full-Stack Developer",
      company: "Freelance",
      type: "Freelance",
      description: [
        "Development of complete web applications using Next.js, NestJS, TypeScript, PostgreSQL",
        "Database design and maintenance, REST API implementation",
        "Frontend component optimization for performance and responsiveness",
        "PostgreSQL database maintenance, bug fixes and deployment on VPS (Docker + Nginx)",
      ],
    },
    {
      id: 2,
      period: "August 2025",
      title: "Front-End Developer",
      company: "Freelance",
      type: "Freelance",
      description: [
        "Design of an innovative web application using artificial intelligence for the music industry",
        "Development of a dynamic and responsive interface with React.js and TypeScript",
      ],
    },
    {
      id: 3,
      period: "July – August 2025",
      title: "Mobile Development Intern",
      company: "Paika Sarl",
      type: "Internship",
      description: [
        "Full-stack mobile application development with React Native, NestJS, TypeScript and Zustand",
        "PostgreSQL database design and implementation of key features",
        "Applied Agile Scrum methodology throughout the development process",
      ],
    },
    {
      id: 4,
      period: "March – May 2025",
      title: "Web Development Intern",
      company: "Kinga IT",
      type: "Internship",
      description: [
        "Contribution to full-stack development with React, NestJS, TypeScript, MongoDB and PostgreSQL",
        "Integration of new features and application of collaborative development best practices",
        "Applied Agile Scrum methodology throughout the development process",
      ],
    },
  ];

  return (
    <motion.div
      id="experience"
      className="pt-[70px] px-4 sm:px-10 md:px-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="mb-4 text-yellow_primary text-center text-3xl md:text-5xl"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h1>

      <div className="w-full flex flex-wrap">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className="group text-white_primary w-full lg:w-1/2 p-4 shadow-md cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-full rounded-lg overflow-hidden bg-[rgba(136,136,136,.05)] p-6 flex flex-col relative border border-transparent"
              whileHover={{
                borderColor: "#d9af23",
                boxShadow: "0 5px 20px rgba(217, 175, 35, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Type Badge */}
              <motion.div
                className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  experience.type === "Freelance"
                    ? "bg-yellow_primary/20 text-yellow_primary"
                    : "bg-blue_primary/20 text-blue_primary"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {experience.type}
              </motion.div>

              {/* Period */}
              <motion.div
                className="text-sm text-yellow_primary/80 font-medium mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {experience.period}
              </motion.div>

              {/* Title and Company */}
              <motion.h3
                className="text-xl font-bold mb-1 group-hover:text-yellow_primary transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {experience.title}
              </motion.h3>

              <motion.p
                className="text-base text-gray-400 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {experience.company}
              </motion.p>

              {/* Description List */}
              <motion.ul
                className="space-y-2 text-sm text-gray-300 flex-grow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {experience.description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-yellow_primary mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow_primary to-blue_primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                initial={{ scaleX: 0 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
