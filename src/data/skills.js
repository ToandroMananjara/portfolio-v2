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
  Braces,
  Sparkles,
  Workflow,
  AudioLines,
  Database,
  Bot,
  Brain,
  Network,
  MessageSquare,
} from "lucide-react";

export const skillCategories = [
  {
    id: "frontend",
    labelKey: "skills.cat.frontend",
    items: [
      { name: "HTML5", src: html },
      { name: "CSS3", src: css },
      { name: "JavaScript", src: javascript },
      { name: "TypeScript", src: typescript },
      { name: "React", src: react },
      { name: "Next.js", src: nextjs },
      { name: "React Native", src: reactNative },
      { name: "Tailwind CSS", src: tailwind },
      { name: "Bootstrap", src: bootstrap },
      { name: "Material UI", src: materialui },
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
    ],
  },
  {
    id: "ai",
    labelKey: "skills.cat.ai",
    items: [
      { name: "OpenAI", icon: Sparkles },
      { name: "Anthropic Claude", icon: Brain },
      { name: "Gemini", icon: Bot },
      { name: "LangChain", icon: Network },
      { name: "RAG / Vector DB", icon: Database },
      { name: "Prompt Engineering", icon: MessageSquare },
      { name: "ElevenLabs", icon: AudioLines },
      { name: "Trigger.dev", icon: Workflow },
    ],
  },
  {
    id: "languages",
    labelKey: "skills.cat.languages",
    items: [
      { name: "Python", src: python },
      { name: "Java", src: java },
      { name: "C", src: c },
      { name: "C++", src: cpp },
      { name: "PHP", src: php },
    ],
  },
  {
    id: "tools",
    labelKey: "skills.cat.tools",
    items: [
      { name: "Git", src: git },
      { name: "GitHub", src: github },
      { name: "Docker", src: docker },
    ],
  },
];
