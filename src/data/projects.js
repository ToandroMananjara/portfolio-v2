import varotra from "../assets/projects/varotra.png";
import footballStat from "../assets/projects/football.png";
import misara from "../assets/projects/misara.png";
import n8nWf1 from "../assets/projects/ai-business-automation/WF-1.png";
import n8nWf2 from "../assets/projects/ai-business-automation/WF-2.png";
import n8nWf3 from "../assets/projects/ai-business-automation/WF-3.png";
import n8nWf0 from "../assets/projects/ai-business-automation/WF-0.png";
import n8nSlack from "../assets/projects/ai-business-automation/slack.png";

/**
 * Deux groupes seulement : le travail professionnel et les projets personnels.
 * Les anciens filtres par technologie ont ete retires -- les technos restent
 * lisibles sur chaque carte, un troisieme niveau de filtrage n'apportait rien.
 */
export const projectGroups = [
  { id: "enterprise", labelKey: "work.group.enterprise" },
  { id: "personal", labelKey: "work.group.personal" },
];

/**
 * Projets d'entreprise : pas d'image, pas de lien -- ce code ne m'appartient pas.
 * Les noms de clients sont volontairement absents : chaque projet est presente
 * sous un nom de code et decrit a un niveau qui ne permet pas de les identifier.
 */
export const projects = [
  // ---------------------------------------------------------------- ENTREPRISE
  {
    id: "voice-interview-agent",
    group: "enterprise",
    featured: true,
    org: "Redsmite",
    title: {
      en: "Voice Interview Agent",
      fr: "Agent d'Interviews Vocales",
    },
    tagline: {
      en: "AI-powered automated voice interviews, from the call to structured data",
      fr: "Interviews vocales automatisées par IA, de l'appel à la donnée structurée",
    },
    description: {
      en: "Automated voice interview system: a real-time conversational agent calls establishments, conducts the interview and turns the answers into structured data.",
      fr: "Système d'interviews vocales automatisées : un agent conversationnel temps réel appelle les établissements, mène l'entretien et transforme les réponses en données structurées.",
    },
    highlights: [
      {
        en: "Real-time conversational voice agent combining speech synthesis, transcription and bidirectional audio streaming",
        fr: "Agent vocal conversationnel temps réel combinant synthèse vocale, transcription et flux audio bidirectionnel",
      },
      {
        en: "Outbound calls over the WhatsApp Business API, driven by a dedicated state machine with automatic retries on failure",
        fr: "Appels sortants via WhatsApp Business API, pilotés par une machine à états dédiée avec reprises automatiques sur échec",
      },
      {
        en: "LLM-based structured extraction of the answers, with transcript delivery by email",
        fr: "Extraction structurée des réponses par LLM, avec livraison des transcripts par e-mail",
      },
      {
        en: "Async FastAPI backend on PostgreSQL and Redis, interview campaigns orchestrated as background workflows",
        fr: "Backend FastAPI asynchrone sur PostgreSQL et Redis, campagnes d'interviews orchestrées en workflows",
      },
      {
        en: "Per-call cost tracking across voice and LLM usage to keep the running budget under control",
        fr: "Suivi des coûts par appel, voix et LLM, pour piloter le budget d'exploitation",
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "ElevenLabs",
      "WhatsApp API",
      "LLM APIs",
      "Trigger.dev",
      "Resend",
      "Docker",
    ],
  },
  {
    id: "stock-pilot",
    group: "enterprise",
    org: "Redsmite",
    title: { en: "Stock Pilot", fr: "Stock Pilot" },
    tagline: {
      en: "Inventory monitoring and replenishment decisions for a multi-SKU B2B distributor",
      fr: "Pilotage des stocks et décisions de réapprovisionnement pour un distributeur B2B multi-références",
    },
    description: {
      en: "Decision-support tool that turns raw inventory exports into stock coverage indicators and concrete replenishment proposals.",
      fr: "Outil d'aide à la décision qui transforme des exports de stock bruts en indicateurs de couverture et en propositions de réapprovisionnement concrètes.",
    },
    highlights: [
      {
        en: "Business data import from spreadsheet and text exports, with dedicated parsers, preview and draft state before validation",
        fr: "Import de données métier depuis des exports tableur et texte, avec analyseurs dédiés, prévisualisation et brouillon avant validation",
      },
      {
        en: "Stock coverage computed per reference and per period, surfacing priority replenishment targets",
        fr: "Calcul de la couverture de stock par référence et par période, avec identification des cibles prioritaires",
      },
      {
        en: "Order proposals generated from the analysis, with a finalisation workflow",
        fr: "Génération de propositions de commande à partir de l'analyse, avec circuit de finalisation",
      },
      {
        en: "Module-level role-based access control, with its own authentication and onboarding flow",
        fr: "Contrôle d'accès par rôles propre au module, avec parcours d'authentification et d'onboarding dédié",
      },
      {
        en: "End-to-end Playwright coverage on the critical paths: import, pagination, column selection, stock transitions",
        fr: "Couverture Playwright bout en bout sur les parcours critiques : import, pagination, sélection de colonnes, transitions de stock",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "RBAC",
      "Zod",
      "Resend",
      "Playwright",
      "Tailwind",
    ],
  },
  {
    id: "meeting-reports",
    group: "enterprise",
    org: "Redsmite",
    title: { en: "Meeting Reports", fr: "Comptes-Rendus Automatisés" },
    tagline: {
      en: "From meeting audio to a written, reviewed and automatically distributed report",
      fr: "De l'audio d'une réunion au compte-rendu rédigé, relu et diffusé automatiquement",
    },
    description: {
      en: "Meeting minutes pipeline: bots capture the audio, speakers are separated automatically, and the AI-written report is exported and sent on its own.",
      fr: "Chaîne de comptes-rendus : des bots captent l'audio, les locuteurs sont séparés automatiquement, et le compte-rendu rédigé par IA est exporté puis envoyé tout seul.",
    },
    highlights: [
      {
        en: "Automatic transcription with speaker diarisation, participant mapping and per-speaker summaries",
        fr: "Transcription automatique avec diarisation, association aux participants et synthèse par intervenant",
      },
      {
        en: "Bots joining video calls to capture audio without any manual step",
        fr: "Bots rejoignant les visioconférences pour capter l'audio sans intervention manuelle",
      },
      {
        en: "AI-generated report at several levels of detail, with translation into the target language",
        fr: "Compte-rendu généré par IA à plusieurs niveaux de détail, avec traduction dans la langue cible",
      },
      {
        en: "Chunked upload with resume for large recordings, and waveform rendering computed in a Web Worker",
        fr: "Upload par fragments avec reprise pour les gros enregistrements, et forme d'onde calculée dans un Web Worker",
      },
      {
        en: "Correction tracking against a baseline version, plus Markdown and Word export with automatic email delivery",
        fr: "Suivi des corrections par rapport à une version de référence, export Markdown et Word, envoi automatique par e-mail",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "AssemblyAI",
      "Web Audio API",
      "Web Workers",
      "Trigger.dev",
      "docx",
      "Resend",
      "Vitest",
    ],
  },
  {
    id: "mail-agent",
    group: "enterprise",
    org: "Redsmite",
    title: { en: "Mail Agent", fr: "Mail Agent" },
    tagline: {
      en: "AI agent drafting replies to inbound sales enquiries, with a human-reviewed memory",
      fr: "Agent IA qui rédige les réponses aux demandes commerciales, avec une mémoire revue par l'humain",
    },
    description: {
      en: "AI agent that reads inbound enquiry threads and drafts replies grounded in a real product catalogue, with a review loop that lets the team correct what it learns.",
      fr: "Agent IA qui lit les fils de demandes entrantes et rédige des réponses fondées sur un catalogue produits réel, avec une boucle de revue permettant à l'équipe de corriger ce qu'il apprend.",
    },
    highlights: [
      {
        en: "Reply drafts generated from inbound email threads, including text extracted from attachments",
        fr: "Brouillons de réponse générés à partir des fils d'e-mails entrants, pièces jointes comprises",
      },
      {
        en: "Answers grounded in a product catalogue and its technical specifications, rather than free-form generation",
        fr: "Réponses fondées sur un catalogue produits et ses spécifications techniques, plutôt qu'en génération libre",
      },
      {
        en: "Agent memory with a human review loop: validation queue, metrics page and directives steered through conversation",
        fr: "Mémoire de l'agent avec boucle de revue humaine : file de validation, page de métriques et directives pilotées par conversation",
      },
      {
        en: "Thread management: client linking, typed drafts, trash and full processing traceability",
        fr: "Gestion des fils : rattachement client, brouillons typés, corbeille et traçabilité des traitements",
      },
      {
        en: "Usage and cost tracking on every AI call",
        fr: "Suivi de la consommation et du coût de chaque appel IA",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "LLM APIs",
      "Trigger.dev",
      "Zod",
      "Resend",
      "Vitest",
    ],
  },
  {
    id: "newsletter-engine",
    group: "enterprise",
    org: "Redsmite",
    title: { en: "Newsletter Engine", fr: "Newsletter Engine" },
    tagline: {
      en: "Automation pipeline producing a full newsletter, from web research to a ready-to-send email",
      fr: "Pipeline d'automatisation qui produit une newsletter complète, de la veille web à l'e-mail prêt à envoyer",
    },
    description: {
      en: "End-to-end content pipeline: automated web research, LLM-assisted writing, image processing and email rendering, with an authenticated back-office to steer it.",
      fr: "Chaîne de contenu de bout en bout : veille web automatisée, rédaction assistée par LLM, traitement d'images et rendu e-mail, avec un back-office authentifié pour la piloter.",
    },
    highlights: [
      {
        en: "Automated source gathering through web search and headless-browser scraping, with a retry policy on failure",
        fr: "Collecte de sources automatisée par recherche web et scraping en navigateur headless, avec politique de reprise sur erreur",
      },
      {
        en: "LLM-assisted writing plugged into several providers, with automatic company-data enrichment from the legal registry",
        fr: "Rédaction assistée par LLM branchée sur plusieurs fournisseurs, avec enrichissement automatique des données d'entreprise via le registre légal",
      },
      {
        en: "Automated image processing: background removal, vector conversion and retouching",
        fr: "Traitement d'images automatisé : détourage, conversion vectorielle et retouche",
      },
      {
        en: "Email rendering optimised for real-world clients: inlined CSS, minification, cross-client compatibility",
        fr: "Rendu e-mail optimisé pour les clients de messagerie réels : CSS inliné, minification, compatibilité inter-clients",
      },
      {
        en: "Containerised deployment on a VPS behind a reverse proxy, with pytest coverage",
        fr: "Déploiement conteneurisé sur VPS derrière un reverse proxy, avec couverture pytest",
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Supabase",
      "LLM APIs",
      "Playwright",
      "OpenCV",
      "Jinja2",
      "Docker",
      "Caddy",
      "pytest",
    ],
  },
  {
    id: "ai-music-platform",
    group: "enterprise",
    org: { en: "Freelance", fr: "Freelance" },
    title: { en: "AI Music Platform", fr: "AI Music Platform" },
    tagline: {
      en: "Browser-based digital audio workstation to compose, edit and arrange tracks",
      fr: "Station de travail audio numérique dans le navigateur, pour composer, éditer et arranger",
    },
    description: {
      en: "A full DAW running in the browser: multitrack editing, interactive waveforms and real-time audio processing through the Web Audio API.",
      fr: "Un DAW complet qui tourne dans le navigateur : édition multipiste, formes d'onde interactives et traitement audio temps réel via la Web Audio API.",
    },
    highlights: [
      {
        en: "Full multitrack interface: interactive waveforms, synchronised playback and drag-and-drop track arrangement",
        fr: "Interface multipiste complète : formes d'onde interactives, lecture synchronisée et réorganisation des pistes par glisser-déposer",
      },
      {
        en: "In-browser audio processing through the Web Audio API, with independent tempo and pitch shifting",
        fr: "Traitement audio dans le navigateur via la Web Audio API, avec modification indépendante du tempo et de la hauteur",
      },
      {
        en: "Project export to WAV straight from the browser",
        fr: "Export des projets au format WAV directement depuis le navigateur",
      },
      {
        en: "Audio files stored on object storage through presigned URLs",
        fr: "Fichiers audio stockés sur du stockage objet via URLs présignées",
      },
      {
        en: "Complex application state handled with a feature-based architecture",
        fr: "État applicatif complexe géré dans une architecture par features",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "Web Audio API",
      "Tone.js",
      "wavesurfer.js",
      "AWS S3",
      "Tailwind",
    ],
  },
  {
    id: "health-booking",
    group: "enterprise",
    org: { en: "Freelance", fr: "Freelance" },
    title: {
      en: "Health Booking Platform",
      fr: "Plateforme de Rendez-vous Santé",
    },
    tagline: {
      en: "Connecting patients, healthcare professionals and pharmacies around appointment booking",
      fr: "Mise en relation patients, professionnels de santé et pharmacies autour de la prise de rendez-vous",
    },
    description: {
      en: "Booking platform with a modular REST API: practitioners, establishments, specialities, availability rules and a separate pharmacy track with delivery zones.",
      fr: "Plateforme de réservation avec une API REST modulaire : praticiens, établissements, spécialités, règles de disponibilité et circuit pharmacie distinct avec zones de livraison.",
    },
    highlights: [
      {
        en: "Modular REST API covering patients, professionals, establishments, specialities, appointments and documents",
        fr: "API REST modulaire couvrant patients, professionnels, établissements, spécialités, rendez-vous et documents",
      },
      {
        en: "Availability engine: per-practitioner slot rules, with a distinct pipeline for the pharmacy track",
        fr: "Moteur de disponibilités : règles de créneaux par praticien, avec un circuit distinct pour la partie pharmacie",
      },
      {
        en: "Security: token-based authentication, password hashing, rate limiting and strict input validation",
        fr: "Sécurité : authentification par jetons, hachage des mots de passe, limitation de débit et validation stricte des entrées",
      },
      {
        en: "Document management with file upload and CSV import/export",
        fr: "Gestion documentaire avec envoi de fichiers et import/export CSV",
      },
      {
        en: "Auto-generated API documentation, consumed by a Next.js front end",
        fr: "Documentation d'API auto-générée, consommée par un frontend Next.js",
      },
    ],
    technologies: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Swagger",
      "Next.js",
      "React",
      "Zustand",
    ],
  },
  {
    id: "food-truck-app",
    group: "enterprise",
    org: { en: "Internship · Paika Sarl", fr: "Stage · Paika Sarl" },
    title: { en: "Food Truck App", fr: "Application Food Truck" },
    tagline: {
      en: "Mobile ordering and payment for a food truck network, with its backend",
      fr: "Commande et paiement mobile pour un réseau de food trucks, avec son backend",
    },
    description: {
      en: "Cross-platform mobile app and its modular backend: menus, orders, payments, schedules and notifications for a network of food trucks.",
      fr: "Application mobile cross-platform et son backend modulaire : menus, commandes, paiements, plannings et notifications pour un réseau de food trucks.",
    },
    highlights: [
      {
        en: "Cross-platform mobile app shipped through the managed build pipeline",
        fr: "Application mobile cross-platform livrée via la chaîne de build managée",
      },
      {
        en: "Complete ordering flow with integrated card payment",
        fr: "Parcours de commande complet avec paiement par carte intégré",
      },
      {
        en: "Email and Google sign-in authentication",
        fr: "Authentification par e-mail et connexion Google",
      },
      {
        en: "Modular backend: food trucks, menus, orders, payments, schedules, cuisine types and notifications",
        fr: "Backend modulaire : food trucks, menus, commandes, paiements, plannings, types de cuisine et notifications",
      },
      {
        en: "Server-side fuzzy search, and production stability monitoring through crash reporting",
        fr: "Recherche floue côté serveur, et suivi de stabilité en production via le reporting de crashs",
      },
      {
        en: "Systematic test coverage: unit tests on every backend module (controller and service), end-to-end API tests, and integration tests on the mobile authentication flow",
        fr: "Couverture de tests systématique : tests unitaires sur chaque module backend (contrôleur et service), tests end-to-end sur l'API, et tests d'intégration sur le parcours d'authentification mobile",
      },
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Firebase",
      "Jest",
    ],
  },

  // ------------------------------------------------------------------- PERSO
  {
    id: "ai-business-automation",
    group: "personal",
    featured: true,
    org: {
      en: "Personal project · prototype, fictitious data",
      fr: "Projet perso · prototype, données fictives",
    },
    period: { en: "October 2026", fr: "Octobre 2026" },
    title: {
      en: "AI Business Automation — n8n",
      fr: "AI Business Automation — n8n",
    },
    tagline: {
      en: "AI automation of request handling for a call centre",
      fr: "Automatisation IA du traitement des demandes d'un centre d'appel",
    },
    description: {
      en: "Prototype for a call centre serving tradespeople: each email is qualified by an LLM, routed to the right team and gets a draft reply grounded in the FAQ, always reviewed by a human. CVs and invoices are extracted with automatic checks.",
      fr: "Prototype pour un centre d'appel au service d'artisans : chaque email est qualifié par un LLM, aiguillé vers la bonne équipe et reçoit un brouillon de réponse fondé sur la FAQ, toujours relu par un humain. Les CV et factures sont extraits avec contrôles automatiques.",
    },
    highlights: [
      {
        en: "96 % correct classification on 30 labelled emails, vs 67 % for a keyword rule",
        fr: "96 % de classification correcte sur 30 emails étiquetés, contre 67 % pour une règle par mots-clés",
      },
      {
        en: "0 invented data out of 54 fields expected empty, 99 % exact extracted fields",
        fr: "0 donnée inventée sur 54 champs attendus vides, 99 % de champs extraits exacts",
      },
      {
        en: "No request lost: Groq → Gemini failover, 6 real outages, 0 lost tickets",
        fr: "Aucune demande perdue : bascule Groq → Gemini, 6 pannes réelles, 0 ticket perdu",
      },
      {
        en: "Human in the loop: no reply sent automatically, sensitive cases handed straight to a human",
        fr: "Humain dans la boucle : aucune réponse envoyée seule, cas sensibles transmis directement",
      },
      {
        en: "The LLM extracts, the code computes and decides: every rule lives in a single config file",
        fr: "Le LLM extrait, le code calcule et décide : toutes les règles dans un seul fichier de configuration",
      },
      {
        en: "4 n8n workflows: email handling, CV and invoice extraction, error handling, setup",
        fr: "4 workflows n8n : traitement des emails, extraction CV et factures, gestion des erreurs, mise en place",
      },
      {
        en: "10 out of 10 CVs and invoices compliant, including one invoice with a wrong total detected",
        fr: "10 CV et factures conformes sur 10, dont une facture au total faux détectée",
      },
      {
        en: "Measured choices: model picked by comparative test, no vector database for a 25-entry FAQ",
        fr: "Choix mesurés : modèle choisi par test comparatif, pas de base vectorielle pour une FAQ de 25 entrées",
      },
      {
        en: "Limit: an unintelligible message was classified instead of going to a human (1 threshold missed out of 6)",
        fr: "Limite : un message incompréhensible a été classé au lieu d'aller à un humain (1 seuil manqué sur 6)",
      },
    ],
    image: n8nWf1,
    // Captures paysage : affichees dans un carrousel, sans recadrage.
    gallery: [
      {
        src: n8nWf0,
        caption: {
          en: "WF0 — Spreadsheet setup",
          fr: "WF0 — Mise en place du classeur",
        },
      },
      {
        src: n8nWf1,
        caption: {
          en: "WF1 — Request handling (main workflow, 24 nodes)",
          fr: "WF1 — Traitement des demandes (workflow principal, 24 nodes)",
        },
      },
      {
        src: n8nWf2,
        caption: {
          en: "WF2 — CV and invoice extraction",
          fr: "WF2 — Extraction des CV et des factures",
        },
      },
      {
        src: n8nWf3,
        caption: {
          en: "WF3 — Error handling",
          fr: "WF3 — Gestion des erreurs",
        },
      },
      {
        src: n8nSlack,
        caption: {
          en: "Slack alerts sent by WF3",
          fr: "Alertes Slack envoyées par le WF3",
        },
      },
    ],
    technologies: [
      "n8n",
      "LLM",
      "Groq",
      "Gemini",
      "Prompt engineering",
      "JavaScript",
      "Python",
      "Docker",
      "Google Sheets",
      "Slack",
    ],
    links: [
      {
        labelKey: "work.repo",
        url: "https://github.com/ToandroMananjara/ai-business-automation-n8n",
      },
    ],
  },
  {
    id: "football-stats",
    group: "personal",
    title: {
      en: "Football Statistics Platform",
      fr: "Plateforme de Statistiques Football",
    },
    tagline: {
      en: "Live football statistics, aggregated and served through a typed interface",
      fr: "Statistiques football en direct, agrégées et servies dans une interface typée",
    },
    description: {
      en: "Full-stack platform aggregating live football statistics, with a typed React frontend and a PHP MVC backend.",
      fr: "Plateforme full-stack qui agrège des stats foot en direct — frontend React typé, backend PHP MVC.",
    },
    image: footballStat,
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
    group: "personal",
    title: { en: "Varotra — E-commerce App", fr: "Varotra — App E-commerce" },
    tagline: {
      en: "Cross-platform mobile commerce, built end to end",
      fr: "Commerce mobile cross-platform, construit de bout en bout",
    },
    description: {
      en: "Cross-platform mobile commerce app built with React Native, Expo and TypeScript.",
      fr: "App mobile e-commerce cross-platform en React Native, Expo et TypeScript.",
    },
    image: varotra,
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
    id: "misara",
    group: "personal",
    title: { en: "MISAra — P2P File Transfer", fr: "MISAra — Transfert P2P" },
    image: misara,
    tagline: {
      en: "Desktop peer-to-peer file transfer over local network",
      fr: "Transfert de fichiers pair-à-pair sur réseau local, en application desktop",
    },
    description: {
      en: "Cross-platform desktop application transferring files directly between peers on a local network, with no intermediate server.",
      fr: "Application desktop multiplateforme qui transfère des fichiers directement entre pairs sur un réseau local, sans serveur intermédiaire.",
    },
    highlights: [
      {
        en: "Peer discovery and direct transfer over the local network, without any intermediate server",
        fr: "Découverte des pairs et transfert direct sur le réseau local, sans serveur intermédiaire",
      },
      {
        en: "Cross-platform desktop packaging for Windows, Linux and macOS",
        fr: "Empaquetage desktop multiplateforme pour Windows, Linux et macOS",
      },
      {
        en: "Virtualised file listing to stay responsive on large directories",
        fr: "Liste de fichiers virtualisée pour rester fluide sur de gros répertoires",
      },
      {
        en: "Fully localised interface",
        fr: "Interface entièrement localisée",
      },
    ],
    technologies: ["Electron", "React", "TypeScript", "MobX", "Webpack"],
  },
];
