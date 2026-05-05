import { motion } from "framer-motion";
import Section from "./ui/Section";
import { expertise } from "../data/expertise";
import { skillCategories } from "../data/skills";
import { fadeUp, stagger } from "../lib/motion";

function Skills() {
  return (
    <Section
      id="expertise"
      index="02"
      eyebrow="expertise"
      title="What I do, and how."
      subtitle="I work across the stack with a focus on shipping maintainable products. Below are the three areas I focus on day-to-day, and the tools I reach for."
    >
      <motion.div
        variants={stagger(0.05, 0.12)}
        className="grid md:grid-cols-3 gap-6"
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
              <div className="w-12 h-12 rounded-xl bg-blue_primary/10 text-blue_primary flex items-center justify-center mb-5 group-hover:bg-blue_primary/15 transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white_primary">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                {item.summary}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="font-mono text-yellow_primary">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-16 md:mt-20">
        <p className="font-mono text-sm text-blue_primary mb-6">
          <span className="text-yellow_primary">{"//"}</span> tech-stack
        </p>
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-6 items-start"
            >
              <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider md:pt-3">
                {category.label}
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
