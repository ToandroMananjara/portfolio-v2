import html from "../assets/skills/HTML.svg";
import css from "../assets/skills/CSS.svg";
import javascript from "../assets/skills/JavaScript.svg";
import typescript from "../assets/skills/TypeScript.svg";
import react from "../assets/skills/React-Dark.svg";
import nextjs from "../assets/skills/NextJS.svg";
import reactNative from "../assets/skills/ReactNative.svg";
import tailwind from "../assets/skills/TailwindCSS.svg";
import bootstrap from "../assets/skills/Bootstrap.svg";
import materialui from "../assets/skills/MaterialUI.svg";
import nodejs from "../assets/skills/NodeJS.svg";
import express from "../assets/skills/ExpressJs.svg";
import nestjs from "../assets/skills/NestJS.svg";
import mysql from "../assets/skills/MySQL-Dark.svg";
import postgresql from "../assets/skills/PostgreSQL.svg";
import mongodb from "../assets/skills/MongoDB.svg";
import python from "../assets/skills/Python.svg";
import java from "../assets/skills/Java.svg";
import c from "../assets/skills/C.svg";
import cpp from "../assets/skills/CPP.svg";
import php from "../assets/skills/PHP-Dark.svg";
import git from "../assets/skills/Git.svg";
import github from "../assets/skills/Github.svg";
import docker from "../assets/skills/Docker.svg";
import {
  AudioLines,
  Boxes,
  Braces,
  Captions,
  CheckCheck,
  Cloud,
  CreditCard,
  Database,
  FileCode,
  Flame,
  FlaskConical,
  KeyRound,
  Languages,
  Layers,
  Mail,
  Network,
  Server,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TestTube,
  TestTube2,
  Bot,
  Brain,
  MessageSquare,
  Workflow,
  Zap,
} from "lucide-react";

/**
 * Les noms doivent correspondre EXACTEMENT a ceux utilises dans
 * src/data/projects.js. Une techno qui s'appelle "Tailwind" dans un projet et
 * "Tailwind CSS" ici passe pour deux choses differentes -- a l'oeil du lecteur
 * comme pour tout recoupement automatique.
 */
export const skillCategories = [
  {
    id: "frontend",
    labelKey: "skills.cat.frontend",
    items: [
      { name: "React", src: react },
      { name: "Next.js", src: nextjs },
      { name: "React Native", src: reactNative },
      { name: "Expo", icon: Smartphone },
      { name: "Vite", icon: Zap },
      { name: "Zustand", icon: Boxes },
      { name: "Zod", icon: ShieldCheck },
      { name: "Tailwind", src: tailwind },
      { name: "Material UI", src: materialui },
      { name: "Bootstrap", src: bootstrap },
      { name: "HTML5", src: html },
      { name: "CSS3", src: css },
    ],
  },
  {
    id: "backend",
    labelKey: "skills.cat.backend",
    items: [
      { name: "Node.js", src: nodejs },
      { name: "NestJS", src: nestjs },
      { name: "Express.js", src: express },
      { name: "FastAPI", icon: Braces },
      { name: "Prisma", icon: Layers },
      { name: "JWT", icon: KeyRound },
      { name: "Swagger", icon: FileCode },
      { name: "Resend", icon: Mail },
      { name: "Stripe", icon: CreditCard },
    ],
  },
  {
    id: "databases",
    labelKey: "skills.cat.databases",
    items: [
      { name: "PostgreSQL", src: postgresql },
      { name: "MySQL", src: mysql },
      { name: "MongoDB", src: mongodb },
      { name: "Supabase", icon: Database },
      { name: "Redis", icon: Zap },
      { name: "Firebase", icon: Flame },
    ],
  },
  {
    id: "ai",
    labelKey: "skills.cat.ai",
    items: [
      { name: "Generative AI", icon: Sparkles },
      { name: "AI Agentic", icon: Bot },
      { name: "LLM APIs", icon: Braces },
      { name: "Prompt Engineering", icon: MessageSquare },
      { name: "LLM Red Teaming", icon: ShieldAlert },
      { name: "ElevenLabs", icon: AudioLines },
      { name: "AssemblyAI", icon: Captions },
      { name: "Trigger.dev", icon: Workflow },
      { name: "promptfoo", icon: FlaskConical },
      { name: "RAG", icon: Workflow },
      { name: "Machine Learning", icon: Brain },
      { name: "Deep Learning", icon: Network },
      { name: "NLP", icon: Languages },
      { name: "Vector Databases", icon: Database },
    ],
  },
  {
    id: "testing",
    labelKey: "skills.cat.testing",
    items: [
      { name: "Playwright", icon: TestTube2 },
      { name: "Vitest", icon: TestTube },
      { name: "pytest", icon: FlaskConical },
      { name: "Jest", icon: CheckCheck },
    ],
  },
  {
    id: "languages",
    labelKey: "skills.cat.languages",
    items: [
      { name: "TypeScript", src: typescript },
      { name: "JavaScript", src: javascript },
      { name: "Python", src: python },
      { name: "Java", src: java },
      { name: "PHP", src: php },
      { name: "C", src: c },
      { name: "C++", src: cpp },
    ],
  },
  {
    id: "tools",
    labelKey: "skills.cat.tools",
    items: [
      { name: "Git", src: git },
      { name: "GitHub", src: github },
      { name: "Docker", src: docker },
      { name: "Vercel", icon: Cloud },
      { name: "Caddy", icon: Server },
      { name: "AWS S3", icon: Cloud },
    ],
  },
];
