import homepageIntegration from "../assets/projects/integration-newsHomePage.png";
import portfolioV1 from "../assets/projects/mon-portfolio.png";
import quiz from "../assets/projects/quiz.png";
import todoList from "../assets/projects/todoList.png";
import varotra from "../assets/projects/varotra.png";
import watchStore from "../assets/projects/watch-store.png";
import footballStat from "../assets/projects/football.png";

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "mobile", label: "Mobile" },
];

export const projects = [
  {
    id: "football-stats",
    title: "Football Statistics Platform",
    description:
      "Full-stack platform aggregating live football statistics with a typed React frontend and a PHP MVC backend.",
    image: footballStat,
    category: "fullstack",
    featured: true,
    technologies: ["React", "TypeScript", "PHP", "MVC", "MySQL"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/ToandroMananjara/football-statistique.git",
      },
      {
        label: "Backend",
        url: "https://github.com/ToandroMananjara/football-statistique-backend.git",
      },
    ],
  },
  {
    id: "varotra",
    title: "Varotra — E-commerce App",
    description:
      "Cross-platform mobile commerce app built with React Native, Expo and TypeScript.",
    image: varotra,
    category: "mobile",
    isMobile: true,
    technologies: ["React Native", "Expo", "TypeScript"],
    download:
      "https://drive.google.com/file/d/1H2itfSnF5Tgiq1zpF3GtihVMWKPWHHo_/view?usp=sharing",
    links: [
      {
        label: "Repository",
        url: "https://github.com/ToandroMananjara/test.mobile.git",
      },
    ],
  },
  {
    id: "watch-store",
    title: "Watch Store",
    description: "E-commerce front-end for a curated luxury watch catalogue.",
    image: watchStore,
    category: "frontend",
    technologies: ["React", "CSS3"],
    site: "https://watch-store-by-toandro.netlify.app/",
    links: [
      {
        label: "Repository",
        url: "https://github.com/ToandroMananjara/watch-store.git",
      },
    ],
  },
  {
    id: "todo-list",
    title: "Todo List App",
    description: "Task manager with full CRUD and persistent local storage.",
    image: todoList,
    category: "frontend",
    technologies: ["React", "TypeScript", "localStorage"],
    site: "https://todo-by-toandro.netlify.app/",
    links: [
      {
        label: "Repository",
        url: "https://github.com/ToandroMananjara/newTodo_list.git",
      },
    ],
  },
  {
    id: "quiz",
    title: "Capital Quiz",
    description: "Interactive quiz testing world capitals knowledge.",
    image: quiz,
    category: "frontend",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    site: "https://quiz-by-toandro.netlify.app/",
    links: [
      {
        label: "Repository",
        url: "https://github.com/ToandroMananjara/quiz-capital.git",
      },
    ],
  },
  {
    id: "portfolio-v1",
    title: "Portfolio v1",
    description: "First iteration of my personal portfolio.",
    image: portfolioV1,
    category: "frontend",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    site: "https://toandro.netlify.app/",
    links: [
      {
        label: "Repository",
        url: "https://github.com/DTC-Formation/my-portfolio-ToandroMananjara.git",
      },
    ],
  },
  {
    id: "homepage-integration",
    title: "News Homepage Integration",
    description: "Pixel-perfect responsive integration of a news homepage.",
    image: homepageIntegration,
    category: "frontend",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    site: "https://evaluation-toandro.netlify.app/",
    links: [
      {
        label: "Repository",
        url: "https://github.com/DTC-Formation/evaluation-html-css-ToandroMananjara.git",
      },
    ],
  },
];
