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
import expo from "../assets/skills/Expo.svg";
import vite from "../assets/skills/Vite.svg";
import zustand from "../assets/skills/Zustand.png";
import zod from "../assets/skills/Zod.svg";
import fastapi from "../assets/skills/FastAPI.svg";
import prisma from "../assets/skills/Prisma.svg";
import jwt from "../assets/skills/JWT.svg";
import swagger from "../assets/skills/Swagger.svg";
import resend from "../assets/skills/Resend.svg";
import stripe from "../assets/skills/Stripe.svg";
import supabase from "../assets/skills/Supabase.svg";
import redis from "../assets/skills/Redis.svg";
import firebase from "../assets/skills/Firebase.svg";
import elevenlabs from "../assets/skills/ElevenLabs.svg";
import assemblyai from "../assets/skills/AssemblyAI.svg";
import triggerdev from "../assets/skills/TriggerDev.svg";
import promptfoo from "../assets/skills/Promptfoo.svg";
import n8n from "../assets/skills/n8n.svg";
import playwright from "../assets/skills/Playwright.svg";
import vitest from "../assets/skills/Vitest.svg";
import pytest from "../assets/skills/Pytest.svg";
import jest from "../assets/skills/Jest.svg";
import vercel from "../assets/skills/Vercel.svg";
import caddy from "../assets/skills/Caddy.svg";
import awsS3 from "../assets/skills/AWSS3.svg";
// Icones generiques : reservees aux concepts, qui n'ont pas de logo officiel.
import {
  Braces,
  Database,
  Languages,
  Network,
  ShieldAlert,
  Sparkles,
  Bot,
  Brain,
  MessageSquare,
  Workflow,
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
      { name: "Expo", src: expo },
      { name: "Vite", src: vite },
      { name: "Zustand", src: zustand },
      { name: "Zod", src: zod },
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
      { name: "FastAPI", src: fastapi },
      { name: "Prisma", src: prisma },
      { name: "JWT", src: jwt },
      { name: "Swagger", src: swagger },
      { name: "Resend", src: resend },
      { name: "Stripe", src: stripe },
    ],
  },
  {
    id: "databases",
    labelKey: "skills.cat.databases",
    items: [
      { name: "PostgreSQL", src: postgresql },
      { name: "MySQL", src: mysql },
      { name: "MongoDB", src: mongodb },
      { name: "Supabase", src: supabase },
      { name: "Redis", src: redis },
      { name: "Firebase", src: firebase },
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
      { name: "ElevenLabs", src: elevenlabs },
      { name: "AssemblyAI", src: assemblyai },
      { name: "n8n", src: n8n },
      { name: "Trigger.dev", src: triggerdev },
      { name: "promptfoo", src: promptfoo },
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
      { name: "Playwright", src: playwright },
      { name: "Vitest", src: vitest },
      { name: "pytest", src: pytest },
      { name: "Jest", src: jest },
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
      { name: "Vercel", src: vercel },
      { name: "Caddy", src: caddy },
      { name: "AWS S3", src: awsS3 },
    ],
  },
];
