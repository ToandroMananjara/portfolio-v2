import { useState, useEffect, useRef } from "react";
import homepageIntegration from "../assets/projects/integration-newsHomePage.png";
import portfolioV1 from "../assets/projects/mon-portfolio.png";
import quiz from "../assets/projects/quiz.png";
import todoList from "../assets/projects/todoList.png";
import varotra from "../assets/projects/varotra.png";
import watchStore from "../assets/projects/watch-store.png";
import footballStat from "../assets/projects/football.png";
function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
  };

  const dropdownRef = useRef(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const openDetailsModal = (project) => {
    setSelectedProject(project);
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownIndex(null);
      }
    };

    if (openDropdownIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdownIndex]);

  // Bloquer le scroll quand un modal est ouvert
  useEffect(() => {
    if (isModalOpen || isDetailsModalOpen) {
      // Sauvegarder la position actuelle du scroll
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restaurer la position du scroll
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isModalOpen, isDetailsModalOpen]);
  const projects = [
    {
      id: 0,
      name: homepageIntegration,
      alt: "Homepage Integration Project",
      code_links: [
        {
          label: "Frontend",
          url: "https://github.com/DTC-Formation/evaluation-html-css-ToandroMananjara.git",
        },
      ],
      site_link: "https://evaluation-toandro.netlify.app/",
      title: "Homepage Integration",
      description: "Responsive website integration using HTML5 and CSS3",
      technologies: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      id: 1,
      name: portfolioV1,
      alt: "Portfolio Version 1",
      code_links: [
        {
          label: "Frontend",
          url: "https://github.com/DTC-Formation/my-portfolio-ToandroMananjara.git",
        },
      ],
      site_link: "https://toandro.netlify.app/",
      title: "Portfolio v1",
      description: "First version of my personal portfolio",
      technologies: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      id: 2,
      name: quiz,
      alt: "Capital Quiz Application",
      code_links: [
        {
          label: "Frontend",
          url: "https://github.com/ToandroMananjara/quiz-capital.git",
        },
      ],
      site_link: "https://quiz-by-toandro.netlify.app/",
      title: "Capital Quiz App",
      description: "Interactive quiz application about world capitals",
      technologies: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      id: 3,
      name: todoList,
      alt: "Todo List Application",
      code_links: [
        {
          label: "Frontend",
          url: "https://github.com/ToandroMananjara/newTodo_list.git",
        },
      ],
      site_link: "https://todo-by-toandro.netlify.app/",
      title: "Todo List App",
      description: "Task management application with CRUD operations",
      technologies: ["HTML5", "localStorage", "CSS3"],
    },
    {
      id: 4,
      name: varotra,
      alt: "Application E-commerce",
      isMobile: true,
      code_links: [
        {
          label: "Mobile App",
          url: "https://github.com/ToandroMananjara/test.mobile.git",
        },
      ],
      site_link: "",
      video_demo: "",
      title: "Application E-commerce",
      description: "Application E-commerce",
      technologies: ["ReactNative", "Expo", "LocalStorage", "TypeScript"],
    },
    {
      id: 5,
      name: watchStore,
      alt: "Watch E-commerce Store",
      code_links: [
        {
          label: "Frontend",
          url: "https://github.com/ToandroMananjara/watch-store.git",
        },
      ],
      site_link: "https://watch-store-by-toandro.netlify.app/",
      title: "Watch Store",
      description: "E-commerce platform for luxury watches",
      technologies: ["React", "CSS3"],
    },
    {
      id: 6,
      name: footballStat,
      alt: "Fullstack Football Statistics Application",
      code_links: [
        {
          label: "Frontend",
          url: "https://github.com/ToandroMananjara/football-statistique.git",
        },
        {
          label: "Backend",
          url: "https://github.com/ToandroMananjara/football-statistique-backend.git",
        },
      ],
      site_link: "",
      title: "Fullstack Football Statistics Application",
      description:
        "Complete football statistics platform with frontend and backend",
      technologies: ["React", "TypeScript", "PHP", "MVC", "MySql"],
    },
  ];

  return (
    <div id="projects" className="pt-[70px] px-4 sm:px-10 md:px-14">
      <h1 className=" mb-4 text-yellow_primary text-center text-3xl md:text-5xl">
        My Projects
      </h1>

      <div className="w-full flex flex-wrap">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group text-white_primary  w-full sm:w-1/2 xl:w-1/3 p-4 shadow-md cursor-pointer"
          >
            <div className="h-full rounded-lg overflow-hidden bg-[rgba(136,136,136,.05)] relative border border-transparent hover:border-yellow_primary hover:shadow-lg transition-all duration-300">
              <div
                className={`relative overflow-hidden ${
                  project.isMobile
                    ? "flex items-center justify-center bg-gray-800/30"
                    : ""
                }`}
              >
                <img
                  src={project.name}
                  alt={project.alt}
                  className={`w-full h-48 ${
                    project.isMobile ? "object-contain" : "object-cover"
                  } transition-transform duration-500 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h1 className="text-xl md:text-2xl text-blue_primary font-bold py-2">
                  {project.title}
                </h1>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 py-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-yellow_primary/20 text-yellow_primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {/* Demo Button */}
                  {project.video_demo ? (
                    <button
                      onClick={() => openModal(project.video_demo)}
                      className="flex items-center space-x-2 px-4 py-2 bg-yellow_primary/20 text-yellow_primary rounded-lg hover:bg-yellow_primary/30 transition-colors duration-300 hover:scale-105"
                    >
                      <span className="text-sm font-medium">Demo</span>
                    </button>
                  ) : (
                    <a
                      href={project.site_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-yellow_primary/20 text-yellow_primary rounded-lg hover:bg-yellow_primary/30 transition-colors duration-300 hover:scale-105"
                    >
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}

                  {/* Code Button with Dropdown or Direct Link */}
                  {project.code_links.length > 1 ? (
                    <div
                      className="relative"
                      ref={openDropdownIndex === index ? dropdownRef : null}
                    >
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue_primary/20 text-blue_primary rounded-lg hover:bg-blue_primary/30 transition-colors duration-300 hover:scale-105"
                      >
                        <span className="text-sm font-medium">Code</span>
                      </button>

                      {/* Dropdown Menu */}
                      {openDropdownIndex === index && (
                        <div className="absolute bottom-full mb-2 left-0 min-w-[140px] bg-[rgba(136,136,136,.15)] backdrop-blur-sm border border-blue_primary/30 rounded-lg shadow-2xl overflow-hidden z-50 flex flex-col">
                          {project.code_links.map((codeLink, idx) => (
                            <a
                              key={idx}
                              href={codeLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center px-4 py-3 text-blue_primary hover:bg-blue_primary/20 transition-all duration-200 text-sm font-medium hover:scale-105"
                              onClick={() => setOpenDropdownIndex(null)}
                            >
                              {codeLink.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={project.code_links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue_primary/20 text-blue_primary rounded-lg hover:bg-blue_primary/30 transition-colors duration-300 hover:scale-105"
                    >
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}

                  {/* Details Button */}
                  <button
                    onClick={() => openDetailsModal(project)}
                    className="flex items-center space-x-2 px-4 py-2 bg-white_primary/20 text-white_primary rounded-lg hover:bg-white_primary/30 transition-colors duration-300 hover:scale-105"
                  >
                    <span className="text-sm font-medium">Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {isDetailsModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
          onClick={closeDetailsModal}
        >
          <div
            className="relative w-full max-w-2xl bg-gray_primary rounded-lg overflow-hidden shadow-2xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeDetailsModal}
              className="absolute top-4 right-4 z-10 bg-white_primary/10 hover:bg-white_primary/20 text-white_primary rounded-full p-2 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow_primary pr-8">
                {selectedProject.title}
              </h2>

              <div
                className={`relative overflow-hidden rounded-lg ${
                  selectedProject.isMobile
                    ? "flex items-center justify-center bg-gray-800/50"
                    : ""
                }`}
              >
                <img
                  src={selectedProject.name}
                  alt={selectedProject.alt}
                  className={`w-full h-64 ${
                    selectedProject.isMobile ? "object-contain" : "object-cover"
                  }`}
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-blue_primary">
                  Description
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-blue_primary">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-yellow_primary/20 text-yellow_primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl bg-gray_primary rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white_primary/10 hover:bg-white_primary/20 text-white_primary rounded-full p-2 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative pt-[56.25%]">
              <iframe
                src={currentVideo}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Project Demo"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
