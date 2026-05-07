import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, Download, Eye, Star, X } from "lucide-react";
import Section from "./ui/Section";
import { projects, projectCategories } from "../data/projects";
import { fadeUp, stagger } from "../lib/motion";
import { useBodyScrollLock } from "../lib/useBodyScrollLock";
import { useLang } from "../lib/i18n.jsx";

function ProjectImage({ project, className = "" }) {
  const { pick } = useLang();
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

function ProjectActions({ project, onDetails, compact = false }) {
  const { t } = useLang();
  const btnHeight = compact ? "h-9" : "h-10";
  const size = compact ? `${btnHeight} px-3 text-[15px]` : `${btnHeight} px-3.5 text-base`;
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
      <button
        type="button"
        onClick={onDetails}
        className={`inline-flex items-center gap-1.5 ${size} rounded-md border border-white/10 text-gray-300 hover:border-white/30 hover:text-white_primary transition-colors`}
      >
        {t("work.details")}
        <ArrowUpRight className={iconSize} />
      </button>
    </div>
  );
}

function FeaturedProject({ project, onDetails }) {
  const { t, pick } = useLang();
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-blue_primary/30 transition-colors mb-10"
    >
      <ProjectImage
        project={project}
        className="aspect-[16/10] md:aspect-auto"
      />
      <div className="p-6 md:p-8 flex flex-col">
        <div className="flex items-center gap-2 font-mono text-xs text-yellow_primary mb-3">
          <Star className="w-4 h-4 fill-current" />
          {t("work.featured")}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white_primary mb-3">
          {pick(project.title)}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-5">
          {pick(project.description)}
        </p>
        <TechList items={project.technologies} className="mb-6" />
        <div className="mt-auto">
          <ProjectActions project={project} onDetails={onDetails} />
        </div>
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
        <h3 className="text-lg font-semibold text-white_primary">
          {pick(project.title)}
        </h3>
        <p className="mt-1 text-sm text-gray-400 leading-relaxed line-clamp-2 min-h-[2.625rem]">
          {pick(project.description)}
        </p>
        <TechList items={project.technologies} className="mt-4" />
        <div className="mt-auto pt-4 border-t border-white/5">
          <ProjectActions project={project} onDetails={onDetails} compact />
        </div>
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
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-gray_primary border border-white/10 shadow-2xl"
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
              <h3 className="text-2xl font-bold text-white_primary">
                {pick(project.title)}
              </h3>
              <p className="mt-3 text-gray-300 leading-relaxed">
                {pick(project.description)}
              </p>
              <p className="mt-6 font-mono text-xs text-blue_primary mb-2">
                <span className="text-yellow_primary">{"//"}</span> {t("work.tech")}
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
  const [activeFilter, setActiveFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const featured = useMemo(() => projects.find((p) => p.featured), []);
  const showFeatured = activeFilter === "all";
  const filtered = useMemo(() => {
    const base = showFeatured ? projects.filter((p) => !p.featured) : projects;
    return activeFilter === "all"
      ? base
      : base.filter((p) => p.category === activeFilter);
  }, [activeFilter, showFeatured]);

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
        {projectCategories.map((category) => {
          const isActive = activeFilter === category.id;
          return (
            <motion.button
              key={category.id}
              variants={fadeUp}
              type="button"
              onClick={() => setActiveFilter(category.id)}
              className={`px-3 py-1.5 rounded-md border transition-colors ${
                isActive
                  ? "border-blue_primary text-blue_primary bg-blue_primary/10"
                  : "border-white/10 text-gray-400 hover:text-white_primary hover:border-white/30"
              }`}
            >
              <span className="text-yellow_primary/70 mr-1">{"//"}</span>
              {t(category.labelKey)}
            </motion.button>
          );
        })}
      </motion.div>

      {featured && showFeatured && (
        <FeaturedProject
          project={featured}
          onDetails={() => setSelected(featured)}
        />
      )}

      <motion.div
        key={activeFilter}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDetails={() => setSelected(project)}
          />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="font-mono text-sm text-gray-500 mt-4">
          <span className="text-yellow_primary/70">{"//"}</span> {t("work.empty")}
        </p>
      )}

      <DetailsModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}

export default Project;
