import React from "react";
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
      alt: "",
      code_link:
        "https://github.com/DTC-Formation/evaluation-html-css-ToandroMananjara.git",
      site_link: "https://evaluation-toandro.netlify.app/",
      title: "Homepage integration",
    },
    {
      id: 1,
      name: portfolioV1,
      alt: "",
      code_link:
        "https://github.com/DTC-Formation/my-portfolio-ToandroMananjara.git",
      site_link: "https://toandro.netlify.app/",
      title: "My portfolio v1",
    },
    {
      id: 2,
      name: quiz,
      alt: "",
      code_link: "https://github.com/ToandroMananjara/quiz-capital.git",
      site_link: "https://quiz-by-toandro.netlify.app/",
      title: "App Web Capital Quiz",
    },
    {
      id: 3,
      name: todoList,
      alt: "",
      code_link: "https://github.com/ToandroMananjara/newTodo_list.git",
      site_link: "https://todo-by-toandro.netlify.app/",
      title: "App Web Todo list",
    },
    {
      id: 4,
      name: dataSales,
      alt: "",
      code_link:
        "https://github.com/ToandroMananjara/manipulation_data_sales.git",
      site_link: "https://sales-gestion-by-toandro.netlify.app/",
      title: "Sales List",
    },
    {
      id: 5,
      name: watchStore,
      alt: "",
      code_link: "https://github.com/ToandroMananjara/watch-store.git",
      site_link: "https://watch-store-by-toandro.netlify.app/",
      title: "Watch Store",
    },
  ];
  return (
    <div id="projects" className="pt-[70px] px-4 sm:px-10 md:px-14">
      <h1 className=" mb-4 text-yellow_primary text-center text-3xl md:text-5xl">
        My Projects
      </h1>

      <div className="w-full flex flex-wrap">
        {projects.map((project, index) => (
          <div className="group text-white_primary  w-full sm:w-1/2 xl:w-1/3 p-4 shadow-md cursor-pointer">
            <div className="rounded-lg  overflow-hidden bg-[rgba(136,136,136,.05)]  ">
              <h1 className="text-2xl text-center py-7 ">{project.title}</h1>

              <div className="overflow-hidden ">
                <img
                  src={project.name}
                  alt=""
                  width=""
                  className="h-[200px] lg:h-[300px] w-full group-hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="bg-[rgba(136,136,136,.05)] px-3">
                {/* <h1 className="text-2xl text-center pb-4 ">{project.title}</h1> */}
                <div className="flex justify-center gap-x-6 py-7">
                  <a
                    href={project.site_link}
                    target="blank_"
                    className=" border-2 rounded-md px-4 py-2 hover:text-blue_primary hover:border-blue_primary text-sm sm:text-lg transition-all duration-300 ease-in-out"
                  >
                    View Site
                  </a>

                  <a
                    href={project.code_link}
                    target="blank_"
                    className="border-2 rounded-md px-4 py-2 hover:text-blue_primary hover:border-blue_primary text-sm sm:text-lg transition-all duration-300 ease-in-out"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
