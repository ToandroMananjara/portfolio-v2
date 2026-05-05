import { Code2, Layers, Smartphone } from "lucide-react";

export const expertise = [
  {
    id: "frontend",
    icon: Layers,
    title: "Frontend Engineering",
    summary:
      "Crafting fast, accessible interfaces with React, Next.js and TypeScript.",
    bullets: [
      "Component architecture & design systems",
      "Performance, accessibility, responsive layouts",
      "Tailwind CSS, Framer Motion, modern tooling",
    ],
  },
  {
    id: "backend",
    icon: Code2,
    title: "Backend & APIs",
    summary:
      "Designing reliable services with NestJS, Node.js and PostgreSQL.",
    bullets: [
      "REST APIs, authentication, role-based access",
      "Relational & document data modelling",
      "Containerised deploys with Docker + Nginx",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    summary:
      "Building cross-platform apps with React Native and Expo.",
    bullets: [
      "Shared business logic across iOS & Android",
      "State management with Zustand / Context",
      "Native module integration when it matters",
    ],
  },
];
