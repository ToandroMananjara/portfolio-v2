import homepageIntegration from "../assets/projects/integration-newsHomePage.png";
import portfolioV1 from "../assets/projects/mon-portfolio.png";
import quiz from "../assets/projects/quiz.png";
import todoList from "../assets/projects/todoList.png";
import varotra from "../assets/projects/varotra.png";
import watchStore from "../assets/projects/watch-store.png";
import footballStat from "../assets/projects/football.png";

export const projectCategories = [
  { id: "all", labelKey: "work.cat.all" },
  { id: "fullstack", labelKey: "work.cat.fullstack" },
  { id: "frontend", labelKey: "work.cat.frontend" },
  { id: "mobile", labelKey: "work.cat.mobile" },
];

export const projects = [
  {
    id: "football-stats",
    title: {
      en: "Football Statistics Platform",
      fr: "Plateforme de Statistiques Football",
    },
    description: {
      en: "Full-stack platform aggregating live football statistics, with a typed React frontend and a PHP MVC backend.",
      fr: "Plateforme full-stack qui agrège des stats foot en direct — frontend React typé, backend PHP MVC.",
    },
    image: footballStat,
    category: "fullstack",
    featured: true,
    technologies: ["React", "TypeScript", "PHP", "MVC", "MySQL"],
    links: [
      {
        labelKey: "work.frontend",
        url: "https://github.com/ToandroMananjara/football-statistique.git",
      },
      {
        labelKey: "work.backend",
        url: "https://github.com/ToandroMananjara/football-statistique-backend.git",
      },
    ],
  },
  {
    id: "varotra",
    title: { en: "Varotra — E-commerce App", fr: "Varotra — App E-commerce" },
    description: {
      en: "Cross-platform mobile commerce app built with React Native, Expo and TypeScript.",
      fr: "App mobile e-commerce cross-platform en React Native, Expo et TypeScript.",
    },
    image: varotra,
    category: "mobile",
    isMobile: true,
    technologies: ["React Native", "Expo", "TypeScript"],
    download:
      "https://drive.google.com/file/d/1H2itfSnF5Tgiq1zpF3GtihVMWKPWHHo_/view?usp=sharing",
    links: [
      {
        labelKey: "work.repo",
        url: "https://github.com/ToandroMananjara/test.mobile.git",
      },
    ],
  },
  {
    id: "watch-store",
    title: { en: "Watch Store", fr: "Watch Store" },
    description: {
      en: "E-commerce front-end for a curated luxury watch catalogue.",
      fr: "Front-end e-commerce pour un catalogue de montres de luxe.",
    },
    image: watchStore,
    category: "frontend",
    technologies: ["React", "CSS3"],
    site: "https://watch-store-by-toandro.netlify.app/",
    links: [
      {
        labelKey: "work.repo",
        url: "https://github.com/ToandroMananjara/watch-store.git",
      },
    ],
  },
  {
    id: "todo-list",
    title: { en: "Todo List App", fr: "App Todo List" },
    description: {
      en: "Task manager with full CRUD and persistent local storage.",
      fr: "Gestionnaire de tâches avec CRUD complet et stockage local persistant.",
    },
    image: todoList,
    category: "frontend",
    technologies: ["React", "TypeScript", "localStorage"],
    site: "https://todo-by-toandro.netlify.app/",
    links: [
      {
        labelKey: "work.repo",
        url: "https://github.com/ToandroMananjara/newTodo_list.git",
      },
    ],
  },
  {
    id: "quiz",
    title: { en: "Capital Quiz", fr: "Quiz des Capitales" },
    description: {
      en: "Interactive quiz testing world capitals knowledge.",
      fr: "Quiz interactif sur les capitales du monde.",
    },
    image: quiz,
    category: "frontend",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    site: "https://quiz-by-toandro.netlify.app/",
    links: [
      {
        labelKey: "work.repo",
        url: "https://github.com/ToandroMananjara/quiz-capital.git",
      },
    ],
  },
  {
    id: "portfolio-v1",
    title: { en: "Portfolio v1", fr: "Portfolio v1" },
    description: {
      en: "First iteration of my personal portfolio.",
      fr: "Première version de mon portfolio personnel.",
    },
    image: portfolioV1,
    category: "frontend",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    site: "https://toandro.netlify.app/",
    links: [
      {
        labelKey: "work.repo",
        url: "https://github.com/DTC-Formation/my-portfolio-ToandroMananjara.git",
      },
    ],
  },
  {
    id: "homepage-integration",
    title: {
      en: "News Homepage Integration",
      fr: "Intégration Homepage News",
    },
    description: {
      en: "Pixel-perfect responsive integration of a news homepage.",
      fr: "Intégration responsive pixel-perfect d'une homepage news.",
    },
    image: homepageIntegration,
    category: "frontend",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    site: "https://evaluation-toandro.netlify.app/",
    links: [
      {
        labelKey: "work.repo",
        url: "https://github.com/DTC-Formation/evaluation-html-css-ToandroMananjara.git",
      },
    ],
  },
];
