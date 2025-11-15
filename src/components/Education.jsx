import React from "react";
import { motion } from "framer-motion";

function Education() {
  const educations = [
    {
      id: 1,
      year: "2024 - 2025",
      school: "University of Antananarivo (MISA)",
      description: "Master 1 en Informatique",
      type: "University",
    },
    {
      id: 2,
      year: "2021 - 2024",
      school: "University of Antananarivo (MISA)",
      description: "Licence en Informatique - Diplômé",
      type: "University",
    },
    {
      id: 3,
      year: "2023",
      school: "Digital Training Center",
      description: "Formation Développement Web - Full Stack Development",
      type: "Formation",
    },
    {
      id: 4,
      year: "2020 - 2021",
      school: "University of Antananarivo",
      description: "2ème année Licence en Mathématiques et Informatique",
      type: "University",
    },
    {
      id: 5,
      year: "2019 - 2020",
      school: "University of Antananarivo",
      description: "1ère année Licence en Mathématiques et Informatique",
      type: "University",
    },
    {
      id: 6,
      year: "2018",
      school: "Lycée Nanisana",
      description: "Baccalauréat série C (Sciences)",
      type: "Lycée",
    },
  ];
  return (
    <motion.div
      id="education"
      className="pt-[70px] px-4 sm:px-10 md:px-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className=" mb-4 text-yellow_primary text-center text-3xl md:text-5xl"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Formation & Éducation
      </motion.h1>

      <div className="w-full flex flex-wrap">
        {educations.map((education, index) => (
          <motion.div
            key={index}
            className="group text-white_primary w-full sm:w-1/2 xl:w-1/3 p-4 shadow-md cursor-pointer"
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
                  education.type === "University"
                    ? "bg-blue_primary/20 text-blue_primary"
                    : education.type === "Formation"
                    ? "bg-yellow_primary/20 text-yellow_primary"
                    : "bg-purple-500/20 text-purple-400"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {education.type}
              </motion.div>

              <motion.h1
                className="text-xl md:text-2xl text-blue_primary font-bold py-2 leading-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {education.school}
              </motion.h1>

              <motion.div
                className="flex-grow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-lg md:text-xl text-yellow_primary font-semibold py-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {education.year}
                </motion.h2>
                <motion.h3
                  className="text-base md:text-lg text-gray-300 py-2 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {education.description}
                </motion.h3>
              </motion.div>

              {/* Decorative element */}
              <motion.div
                className="h-1 w-0 bg-gradient-to-r from-blue_primary to-yellow_primary rounded-full mt-4 group-hover:w-full transition-all duration-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
export default Education;
