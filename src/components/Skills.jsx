import { motion } from "framer-motion";
import Section from "./ui/Section";
import { expertise } from "../data/expertise";
import { skillCategories } from "../data/skills";
import { fadeUp, stagger } from "../lib/motion";
import { useLang } from "../lib/i18n.jsx";

function Skills() {
  const { t, pick } = useLang();

  return (
    <Section
      id="expertise"
      index="02"
      eyebrow={t("skills.eyebrow")}
      title={t("skills.title")}
      subtitle={t("skills.subtitle")}
    >
      <motion.div
        variants={stagger(0.05, 0.12)}
        className="grid sm:grid-cols-2 gap-6"
      >
        {expertise.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-blue_primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue_primary/10 text-blue_primary flex items-center justify-center shrink-0 group-hover:bg-blue_primary/15 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white_primary">
                  {pick(item.title)}
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {pick(item.summary)}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {item.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="font-mono text-yellow_primary">›</span>
                    <span>{pick(b)}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-16 md:mt-20">
        <p className="font-mono text-sm text-blue_primary mb-6">
          <span className="text-yellow_primary">{"//"}</span> {t("skills.techStack")}
        </p>
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-6 items-start"
            >
              <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider md:pt-3">
                {t(category.labelKey)}
              </h4>
              <ul className="flex flex-wrap gap-3">
                {category.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <li
                      key={skill.name}
                      className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-blue_primary/40 hover:bg-white/[0.04] transition-colors"
                    >
                      {skill.src ? (
                        <img
                          src={skill.src}
                          alt=""
                          aria-hidden="true"
                          className="w-5 h-5"
                        />
                      ) : Icon ? (
                        <Icon
                          className="w-5 h-5 text-blue_primary"
                          aria-hidden="true"
                        />
                      ) : null}
                      <span className="text-sm text-gray-300 group-hover:text-white_primary transition-colors">
                        {skill.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

export default Skills;
