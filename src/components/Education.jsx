import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Section from "./ui/Section";
import { education } from "../data/education";
import { fadeUp, stagger } from "../lib/motion";

const TYPE_STYLES = {
  University: "text-blue_primary border-blue_primary/30 bg-blue_primary/5",
  Formation: "text-yellow_primary border-yellow_primary/30 bg-yellow_primary/5",
  "High School": "text-purple_primary border-purple_primary/30 bg-purple_primary/5",
};

function Education() {
  return (
    <Section
      id="education"
      index="05"
      eyebrow="education"
      title="Background & training."
    >
      <motion.div
        variants={stagger(0.05, 0.08)}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {education.map((entry) => (
          <motion.article
            key={entry.id}
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-blue_primary/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue_primary/10 text-blue_primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span
                className={`text-[11px] font-mono px-2 py-1 rounded-md border ${
                  TYPE_STYLES[entry.type] ??
                  "text-gray-300 border-white/10 bg-white/[0.03]"
                }`}
              >
                {entry.type}
              </span>
            </div>
            <p className="font-mono text-xs text-yellow_primary">{entry.year}</p>
            <h3 className="mt-1 text-lg font-semibold text-white_primary leading-tight">
              {entry.school}
            </h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              {entry.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

export default Education;
