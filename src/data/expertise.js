import { Code2, Layers, Smartphone, Brain } from "lucide-react";

export const expertise = [
  {
    id: "frontend",
    icon: Layers,
    title: { en: "Frontend Engineering", fr: "Ingénierie Frontend" },
    summary: {
      en: "Interfaces that feel fast, look polished, and stay maintainable as the product grows.",
      fr: "Des interfaces rapides, soignées et qui restent maintenables quand le produit grandit.",
    },
    bullets: [
      {
        en: "Translate Figma into pixel-accurate, accessible UI",
        fr: "Du Figma à une UI pixel-perfect et accessible",
      },
      {
        en: "Smooth interactions and motion that guide the user",
        fr: "Des interactions et animations qui guident l'utilisateur",
      },
      {
        en: "Reusable components that scale with the team",
        fr: "Des composants réutilisables qui passent à l'échelle",
      },
    ],
  },
  {
    id: "backend",
    icon: Code2,
    title: { en: "Backend & APIs", fr: "Backend & APIs" },
    summary: {
      en: "Reliable services that hold up in production — secure, well-modelled, easy to evolve.",
      fr: "Des services fiables, sécurisés, bien modélisés et faciles à faire évoluer.",
    },
    bullets: [
      {
        en: "Clear data models and APIs your frontend will love",
        fr: "Des modèles de données et APIs limpides pour le frontend",
      },
      {
        en: "Authentication and permissions done right",
        fr: "Authentification et permissions, faites correctement",
      },
      {
        en: "Predictable deploys you can trust on a Friday",
        fr: "Des déploiements prévisibles, même un vendredi",
      },
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: { en: "Mobile Development", fr: "Développement Mobile" },
    summary: {
      en: "One codebase, two stores — shipping native-feeling apps without doubling the team.",
      fr: "Une seule base de code, deux stores — des apps natives sans doubler l'équipe.",
    },
    bullets: [
      {
        en: "Consistent experience across iOS and Android",
        fr: "Une expérience cohérente sur iOS et Android",
      },
      {
        en: "Offline-aware flows and snappy navigation",
        fr: "Une navigation fluide et un mode hors-ligne soigné",
      },
      {
        en: "Faster iteration from prototype to production",
        fr: "Du prototype à la prod, plus rapidement",
      },
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: { en: "AI Engineering", fr: "Ingénierie IA" },
    summary: {
      en: "Turning unstructured data, documents and conversations into reliable product features.",
      fr: "Transformer données, documents et conversations en fonctionnalités fiables.",
    },
    bullets: [
      {
        en: "LLM features that actually ship — not just demos",
        fr: "Des features LLM qui passent en prod, pas juste des démos",
      },
      {
        en: "Retrieval, prompts and guardrails tuned for your domain",
        fr: "Retrieval, prompts et garde-fous calibrés pour ton domaine",
      },
      {
        en: "Agents and voice experiences embedded in real workflows",
        fr: "Agents et expériences vocales intégrés à de vrais workflows",
      },
    ],
  },
];
