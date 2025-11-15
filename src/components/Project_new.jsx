import React from "react";
import { motion } from "framer-motion";
import homepageIntegration from "../assets/projects/integration-newsHomePage.png";
import portfolioV1 from "../assets/projects/mon-portfolio.png";
import quiz from "../assets/projects/quiz.png";
import todoList from "../assets/projects/todoList.png";
import dataSales from "../assets/projects/data-sales.png";
import watchStore from "../assets/projects/watch-store.png";

function Project({ handleMenu, orderPopUp }) {
  const projects = [
    {
      id: 0,
      name: homepageIntegration,
      alt: "Homepage Integration Project",
      code_link:
        "https://github.com/DTC-Formation/evaluation-html-css-ToandroMananjara.git",
      site_link: "https://evaluation-toandro.netlify.app/",
      title: "Homepage Integration",
      description: "Responsive website integration using HTML5 and CSS3",
      technologies: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      id: 1,
      name: portfolioV1,
      alt: "Portfolio Version 1",
      code_link:
        "https://github.com/DTC-Formation/my-portfolio-ToandroMananjara.git",
      site_link: "https://toandro.netlify.app/",
      title: "Portfolio v1",
      description: "First version of my personal portfolio",
      technologies: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      id: 2,
      name: quiz,
      alt: "Capital Quiz Application",
      code_link: "https://github.com/ToandroMananjara/quiz-capital.git",
      site_link: "https://quiz-by-toandro.netlify.app/",
      title: "Capital Quiz App",
      description: "Interactive quiz application about world capitals",
      technologies: ["React", "CSS3", "JavaScript"],
    },
    {
      id: 3,
      name: todoList,
      alt: "Todo List Application",
      code_link: "https://github.com/ToandroMananjara/newTodo_list.git",
      site_link: "https://todo-by-toandro.netlify.app/",
      title: "Todo List App",
      description: "Task management application with CRUD operations",
      technologies: ["React", "localStorage", "CSS3"],
    },
    {
      id: 4,
      name: dataSales,
      alt: "Sales Data Management",
      code_link:
        "https://github.com/ToandroMananjara/manipulation_data_sales.git",
      site_link: "https://sales-gestion-by-toandro.netlify.app/",
      title: "Sales Data Manager",
      description: "Sales data manipulation and visualization tool",
      technologies: ["React", "Chart.js", "JavaScript"],
    },
    {
      id: 5,
      name: watchStore,
      alt: "Watch E-commerce Store",
      code_link: "https://github.com/ToandroMananjara/watch-store.git",
      site_link: "https://watch-store-by-toandro.netlify.app/",
      title: "Watch Store",
      description: "E-commerce platform for luxury watches",
      technologies: ["React", "Redux", "CSS3"],
    },
  ];

  return (
    <motion.div
      id="projects"
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
        My Projects
      </motion.h1>

      <div className="w-full flex flex-wrap">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group text-white_primary  w-full sm:w-1/2 xl:w-1/3 p-4 shadow-md cursor-pointer"
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
              className="h-full rounded-lg overflow-hidden bg-[rgba(136,136,136,.05)] relative border border-transparent"
              whileHover={{
                borderColor: "#d9af23",
                boxShadow: "0 5px 20px rgba(217, 175, 35, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={project.name}
                  alt={project.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <motion.h1
                  className="text-xl md:text-2xl text-blue_primary font-bold py-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h1>

                <motion.p
                  className="text-gray-300 py-2 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  className="flex flex-wrap gap-2 py-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-yellow_primary/20 text-yellow_primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex space-x-4 pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={project.code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue_primary/20 text-blue_primary rounded-lg hover:bg-blue_primary/30 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.site_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-yellow_primary/20 text-yellow_primary rounded-lg hover:bg-yellow_primary/30 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-medium">Demo</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Project;
