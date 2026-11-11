import { Bot, Layers, Smartphone, Rocket } from "lucide-react";

/**
 * Les cartes décrivent des services, du point de vue du client : ce qu'il y
 * gagne, pas la couche technique. L'IA vient en premier, c'est le
 * différenciateur.
 */
export const expertise = [
  {
    id: "ai",
    icon: Bot,
    title: { en: "AI Automation & Agents", fr: "Automatisation & agents IA" },
    summary: {
      en: "What takes up your team's time every day, AI handles: sorting emails, writing reports, making calls, following up.",
      fr: "Ce qui occupe vos équipes chaque jour, l'IA s'en charge : tri des mails, comptes-rendus, appels, relances.",
    },
    bullets: [
      {
        en: "Agents that act inside your existing tools, not a demo on the side",
        fr: "Des agents qui agissent dans vos outils existants, pas une démo à côté",
      },
      {
        en: "Answers grounded in your documents and data, with safeguards",
        fr: "Des réponses fondées sur vos documents et vos données, avec des garde-fous",
      },
      {
        en: "Voice agents that call, listen and fill in the data for you",
        fr: "Des agents vocaux qui appellent, écoutent et remplissent les données à votre place",
      },
    ],
  },
  {
    id: "web",
    icon: Layers,
    title: { en: "Custom Web Applications", fr: "Applications web sur mesure" },
    summary: {
      en: "A business tool built around how your team actually works — from the database to the screen.",
      fr: "Un outil métier taillé pour la façon dont vos équipes travaillent — de la base de données à l'écran.",
    },
    bullets: [
      {
        en: "Clear interfaces your team adopts without training",
        fr: "Des interfaces claires, adoptées sans formation",
      },
      {
        en: "Your data centralised in one place instead of scattered files",
        fr: "Vos données réunies au même endroit, plutôt que dans des fichiers éparpillés",
      },
      {
        en: "Secure access: everyone sees only what concerns them",
        fr: "Des accès sécurisés : chacun ne voit que ce qui le concerne",
      },
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: { en: "Mobile Apps", fr: "Applications mobiles" },
    summary: {
      en: "One app for iOS and Android — one budget, one codebase to maintain.",
      fr: "Une seule application pour iOS et Android — un seul budget, une seule base à maintenir.",
    },
    bullets: [
      {
        en: "The same experience on every phone",
        fr: "La même expérience sur tous les téléphones",
      },
      {
        en: "Ordering and payment built in",
        fr: "Commande et paiement intégrés",
      },
      {
        en: "From prototype to store, fast",
        fr: "Du prototype aux stores, rapidement",
      },
    ],
  },
  {
    id: "delivery",
    icon: Rocket,
    title: { en: "Deployment & Maintenance", fr: "Mise en production & suivi" },
    summary: {
      en: "Deployed, secured and maintained: your product stays online without you having to think about it.",
      fr: "Déployé, sécurisé et maintenu : votre produit reste en ligne sans que vous ayez à y penser.",
    },
    bullets: [
      {
        en: "Production deployment on your infrastructure or in the cloud",
        fr: "Mise en ligne sur votre infrastructure ou dans le cloud",
      },
      {
        en: "Automated tests before every update",
        fr: "Des tests automatiques avant chaque mise à jour",
      },
      {
        en: "A product you can keep evolving, with no lock-in",
        fr: "Un produit que vous pouvez faire évoluer, sans dépendance",
      },
    ],
  },
];
