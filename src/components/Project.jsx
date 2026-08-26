import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Download,
  Eye,
  X,
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
function ProjectImage({ project, className = "" }) {
  const { pick } = useLang();
  if (!project.image) return null;
  return (
    <div
      className={`relative overflow-hidden ${
        project.isMobile ? "flex items-center justify-center bg-black/30" : ""
      } ${className}`}
    >
      <img
        src={project.image}
        alt={pick(project.title)}
        loading="lazy"
        className={`w-full h-full ${
          project.isMobile ? "object-contain p-4" : "object-cover"
        } transition-transform duration-500 group-hover:scale-105`}
      />
    </div>
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
 * Les projets d'entreprise n'ont ni lien ni bouton « Détails » : leurs puces
 * sont deja lisibles sur la carte via le repli, un modal ne montrerait rien de
 * plus. On evite donc d'afficher une barre d'actions vide.
 */
function hasActions(project) {
  return (
    Boolean(project.site) ||
    Boolean(project.download) ||
    (project.links?.length ?? 0) > 0 ||
    project.group === "personal"
  );
}

function ProjectActions({ project, onDetails, compact = false }) {
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
      {project.group === "personal" && (
        <button
          type="button"
          onClick={onDetails}
          className={`inline-flex items-center gap-1.5 ${size} rounded-md border border-white/10 text-gray-300 hover:border-white/30 hover:text-white_primary transition-colors`}
        >
          {t("work.details")}
          <ArrowUpRight className={iconSize} />
        </button>
      )}
    </div>
  );
}

/**
 * Projet mis en avant. Le layout s'adapte a la presence d'une image :
 * deux colonnes avec visuel, une seule colonne sans.
 */
function FeaturedProject({ project, onDetails }) {
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
      <ProjectImage project={project} className="aspect-[16/10] md:aspect-auto" />
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
            <ProjectActions project={project} onDetails={onDetails} />
          </div>
        )}
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, onDetails }) {
  const { pick } = useLang();
  return (
    <article className="group h-full flex flex-col rounded-xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-blue_primary/30 hover:-translate-y-1 transition-all duration-300">
      <ProjectImage project={project} className="h-48" />
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
            <ProjectActions project={project} onDetails={onDetails} compact />
          </div>
        )}
      </div>
    </article>
  );
}

function DetailsModal({ project, onClose }) {
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
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close details"
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={pick(project.title)}
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-gray_primary border border-white/10 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white_primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <ProjectImage project={project} className="h-64" />

            <div className="p-6 md:p-8">
              <ProjectMeta project={project} />
              <h3 className="mt-2 text-2xl font-bold text-white_primary">
                {pick(project.title)}
              </h3>
              {project.tagline && (
                <p className="mt-2 text-blue_primary/90 leading-relaxed">
                  {pick(project.tagline)}
                </p>
              )}
              <p className="mt-3 text-gray-300 leading-relaxed">
                {pick(project.description)}
              </p>

              {project.highlights && (
                <>
                  <p className="mt-6 font-mono text-xs text-gray-500 mb-3">
                    <span className="text-yellow_primary/70">{"//"}</span>{" "}
                    {t("work.highlights")}
                  </p>
                  {/* Dans le modal on montre tout : c'est le lieu du detail. */}
                  <HighlightList
                    items={project.highlights}
                    visible={project.highlights.length}
                  />
                </>
              )}

              <p className="mt-6 font-mono text-xs text-blue_primary mb-2">
                <span className="text-yellow_primary">{"//"}</span>{" "}
                {t("work.tech")}
              </p>
              <TechList items={project.technologies} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Project() {
  const { t } = useLang();
  const [activeGroup, setActiveGroup] = useState("enterprise");
  const [selected, setSelected] = useState(null);

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
          onDetails={() => setSelected(featured)}
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
            onDetails={() => setSelected(project)}
          />
        ))}
      </motion.div>

      {rest.length === 0 && !featured && (
        <p className="font-mono text-sm text-gray-500 mt-4">
          <span className="text-yellow_primary/70">{"//"}</span>{" "}
          {t("work.empty")}
        </p>
      )}

      <DetailsModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}

export default Project;
