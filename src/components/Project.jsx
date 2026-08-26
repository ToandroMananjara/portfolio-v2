import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Download,
  Eye,
  X,
  ZoomIn,
} from "lucide-react";
import Section from "./ui/Section";
import { projects, projectGroups } from "../data/projects";
import { fadeUp, stagger } from "../lib/motion";
import { useBodyScrollLock } from "../lib/useBodyScrollLock";
import { useLang } from "../lib/i18n.jsx";

/**
 * Rend l'image d'un projet -- ou rien du tout.
 *
 * La garde `if (!project.image) return null` est indispensable : les projets
 * d'entreprise n'ont pas d'image (le code appartient au client). Sans elle,
 * <img src={undefined}> declenche une requete vers l'URL de la page et laisse
 * une zone cassee dans la grille.
 */
function ProjectImage({ project, className = "", onZoom }) {
  const { t, pick } = useLang();
  if (!project.image) return null;

  const media = (
    <>
      <img
        src={project.image}
        alt={pick(project.title)}
        loading="lazy"
        className={`w-full h-full ${
          project.isMobile ? "object-contain p-4" : "object-cover"
        } transition-transform duration-500 group-hover:scale-105`}
      />
      {onZoom && (
        // Le curseur loupe suffit a signaler l'action a la souris, mais reste
        // invisible au tactile et pour qui ne survole pas. Cette pastille rend
        // l'agrandissement decouvrable.
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="rounded-full bg-black/60 p-3 text-white_primary backdrop-blur-sm">
            <ZoomIn className="w-5 h-5" />
          </span>
        </span>
      )}
    </>
  );

  const base = `relative overflow-hidden ${
    project.isMobile ? "flex items-center justify-center bg-black/30" : ""
  } ${className}`;

  if (!onZoom) return <div className={base}>{media}</div>;

  return (
    <button
      type="button"
      onClick={onZoom}
      aria-label={`${pick(project.title)} — ${t("work.zoom")}`}
      className={`${base} cursor-zoom-in w-full text-left`}
    >
      {media}
    </button>
  );
}

/**
 * Visionneuse plein ecran. Volontairement minimale : une image, un fond, et
 * trois facons d'en sortir (Echap, le fond, la croix). Le curseur passe en
 * zoom-out sur le fond pour indiquer que cliquer referme.
 */
function Lightbox({ project, onClose }) {
  const { t, pick } = useLang();
  useBodyScrollLock(Boolean(project));

  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          /*
            w-screen (100vw) plutot que inset-0 : 100vw inclut la largeur de la
            barre de defilement, alors que inset-0 s'arrete au bord de la zone
            de contenu. Sans cela, une bande de la couleur du site reste visible
            a droite, le long du fond noir.
          */
          className="fixed top-0 left-0 w-screen h-screen z-[10000] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label={t("work.close")}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 cursor-zoom-out"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={t("work.close")}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white_primary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <motion.img
            src={project.image}
            alt={pick(project.title)}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-full max-h-full object-contain rounded-lg shadow-2xl pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TechList({ items, className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((tech) => (
        <li
          key={tech}
          className="font-mono text-xs px-2.5 py-1 rounded-md text-yellow_primary bg-yellow_primary/5 border border-yellow_primary/20"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

/** Ligne de contexte : « Redsmite · Mai — Juin 2026 ». */
function ProjectMeta({ project }) {
  const { pick } = useLang();
  if (!project.org && !project.period) return null;
  return (
    <p className="font-mono text-xs text-gray-500">
      {project.org && (
        <span className="text-blue_primary">{pick(project.org)}</span>
      )}
      {project.org && project.period && <span className="mx-1.5">·</span>}
      {project.period && pick(project.period)}
    </p>
  );
}

/**
 * Liste de realisations, repliee au-dela de `visible` entrees.
 *
 * Sans ce repli, une carte a 3 puces et une carte a 6 puces n'ont pas la meme
 * hauteur et la grille devient irreguliere. On garde donc un aperçu homogene,
 * le detail restant a un clic.
 */
function HighlightList({ items, visible = 2 }) {
  const { t, pick } = useLang();
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? items : items.slice(0, visible);
  const hidden = items.length - visible;

  return (
    <div>
      <ul className="space-y-2">
        {shown.map((item, i) => (
          <li
            key={i}
            className="flex gap-2.5 text-sm text-gray-400 leading-relaxed"
          >
            <span className="text-yellow_primary/60 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-current" />
            <span>{pick(item)}</span>
          </li>
        ))}
      </ul>
      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 font-mono text-xs text-blue_primary hover:text-blue_primary/80 transition-colors"
        >
          {expanded ? t("work.less") : `+${hidden} ${t("work.more")}`}
        </button>
      )}
    </div>
  );
}

/**
 * Une carte n'affiche sa barre d'actions que si elle a un lien a proposer.
 * Il n'y a plus de bouton « Détails » : tout le contenu est deja sur la carte
 * (puces repliables comprises), un modal ne montrerait rien de plus.
 */
function hasActions(project) {
  return (
    Boolean(project.site) ||
    Boolean(project.download) ||
    (project.links?.length ?? 0) > 0
  );
}

function ProjectActions({ project, compact = false }) {
  const { t } = useLang();
  const btnHeight = compact ? "h-9" : "h-10";
  const size = compact
    ? `${btnHeight} px-3 text-[15px]`
    : `${btnHeight} px-3.5 text-base`;
  const iconBtnSize = compact ? `${btnHeight} px-5` : `${btnHeight} px-6`;
  const iconSize = compact ? "w-4 h-4" : "w-[18px] h-[18px]";
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {project.site && (
        <a
          href={project.site}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 ${size} rounded-md border border-blue_primary/30 text-blue_primary hover:bg-blue_primary/10 transition-colors`}
        >
          <Eye className={iconSize} />
          {t("work.live")}
        </a>
      )}
      {project.download && (
        <a
          href={project.download}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("work.download")}
          title={t("work.download")}
          className={`inline-flex items-center justify-center ${iconBtnSize} rounded-md border border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10 transition-colors`}
        >
          <Download className={iconSize} />
        </a>
      )}
      {project.links?.map((link) => (
        <a
          key={link.labelKey}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t(link.labelKey)}
          title={t(link.labelKey)}
          className={`inline-flex items-center gap-1.5 ${size} rounded-md border border-white/10 text-gray-300 hover:border-white/30 hover:text-white_primary transition-colors`}
        >
          <Code2 className={iconSize} />
          {t(link.labelKey)}
        </a>
      ))}
    </div>
  );
}

/**
 * Projet mis en avant. Le layout s'adapte a la presence d'une image :
 * deux colonnes avec visuel, une seule colonne sans.
 */
function FeaturedProject({ project, onZoom }) {
  const { t, pick } = useLang();
  const hasImage = Boolean(project.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative grid gap-0 rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-blue_primary/30 transition-colors mb-10 ${
        hasImage ? "md:grid-cols-2" : ""
      }`}
    >
      <ProjectImage
        project={project}
        className="aspect-[16/10] md:aspect-auto"
        onZoom={onZoom}
      />
      <div className="p-6 md:p-8 flex flex-col">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
          <span className="font-mono text-xs text-yellow_primary">
            {t("work.featured")}
          </span>
          <ProjectMeta project={project} />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white_primary">
          {pick(project.title)}
        </h3>
        {project.tagline && (
          <p className="mt-2 text-blue_primary/90 leading-relaxed">
            {pick(project.tagline)}
          </p>
        )}
        <p className="mt-3 text-gray-400 leading-relaxed">
          {pick(project.description)}
        </p>

        {project.highlights && (
          <div className="mt-5">
            <p className="font-mono text-xs text-gray-500 mb-3">
              <span className="text-yellow_primary/70">{"//"}</span>{" "}
              {t("work.highlights")}
            </p>
            <HighlightList items={project.highlights} visible={3} />
          </div>
        )}

        <TechList items={project.technologies} className="mt-6" />
        {hasActions(project) && (
          <div className="mt-6">
            <ProjectActions project={project} />
          </div>
        )}
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, onZoom }) {
  const { pick } = useLang();
  return (
    <article className="group h-full flex flex-col rounded-xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-blue_primary/30 hover:-translate-y-1 transition-all duration-300">
      <ProjectImage project={project} className="h-48" onZoom={onZoom} />
      <div className="p-5 flex flex-col flex-1">
        <ProjectMeta project={project} />
        <h3 className="mt-1.5 text-lg font-semibold text-white_primary">
          {pick(project.title)}
        </h3>
        {project.tagline && (
          <p className="mt-1 text-sm text-blue_primary/80 leading-relaxed">
            {pick(project.tagline)}
          </p>
        )}

        {project.highlights ? (
          <div className="mt-4">
            <HighlightList items={project.highlights} visible={2} />
          </div>
        ) : (
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            {pick(project.description)}
          </p>
        )}

        {/*
          mt-auto est porte par la stack, pas par la barre d'actions : c'est elle
          qui doit etre plaquee en bas de la carte. Sinon, sur une carte a
          description courte, la stack reste collee au texte et un vide s'installe
          jusqu'a la separation. pt-4 garantit un ecart minimal avec le contenu
          au-dessus (les puces ou le bouton « +N de plus ») meme quand la carte est
          pleine et que mt-auto n'a plus d'espace a distribuer. mb-4 laisse
          ensuite respirer avant la barre.
        */}
        <TechList
          items={project.technologies}
          className={hasActions(project) ? "mt-auto pt-4 mb-4" : "mt-auto pt-4"}
        />
        {hasActions(project) && (
          <div className="pt-4 border-t border-white/5">
            <ProjectActions project={project} compact />
          </div>
        )}
      </div>
    </article>
  );
}

function Project() {
  const { t } = useLang();
  const [activeGroup, setActiveGroup] = useState("enterprise");
  // Projet dont l'image est affichee en plein ecran.
  const [zoomed, setZoomed] = useState(null);

  const { featured, rest } = useMemo(() => {
    const inGroup = projects.filter((p) => p.group === activeGroup);
    const star = inGroup.find((p) => p.featured);
    return {
      featured: star ?? null,
      rest: star ? inGroup.filter((p) => !p.featured) : inGroup,
    };
  }, [activeGroup]);

  return (
    <Section
      id="work"
      index="04"
      eyebrow={t("work.eyebrow")}
      title={t("work.title")}
      subtitle={t("work.subtitle")}
    >
      <motion.div
        variants={stagger(0.04, 0.08)}
        className="flex flex-wrap gap-2 mb-8 font-mono text-sm"
      >
        {projectGroups.map((group) => {
          const isActive = activeGroup === group.id;
          const count = projects.filter((p) => p.group === group.id).length;
          return (
            <motion.button
              key={group.id}
              variants={fadeUp}
              type="button"
              onClick={() => setActiveGroup(group.id)}
              className={`px-3 py-1.5 rounded-md border transition-colors ${
                isActive
                  ? "border-blue_primary text-blue_primary bg-blue_primary/10"
                  : "border-white/10 text-gray-400 hover:text-white_primary hover:border-white/30"
              }`}
            >
              <span className="text-yellow_primary/70 mr-1">{"//"}</span>
              {t(group.labelKey)}
              <span className="ml-1.5 text-gray-500">{count}</span>
            </motion.button>
          );
        })}
      </motion.div>

      {featured && (
        <FeaturedProject
          key={featured.id}
          project={featured}
          onZoom={featured.image ? () => setZoomed(featured) : undefined}
        />
      )}

      <motion.div
        key={activeGroup}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {rest.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onZoom={project.image ? () => setZoomed(project) : undefined}
          />
        ))}
      </motion.div>

      {rest.length === 0 && !featured && (
        <p className="font-mono text-sm text-gray-500 mt-4">
          <span className="text-yellow_primary/70">{"//"}</span>{" "}
          {t("work.empty")}
        </p>
      )}

      <Lightbox project={zoomed} onClose={() => setZoomed(null)} />
    </Section>
  );
}

export default Project;
