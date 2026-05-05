import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Section from "./ui/Section";
import { experiences } from "../data/experiences";
import { fadeUp, stagger } from "../lib/motion";

const TYPE_STYLES = {
  Freelance: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  Contract: "text-purple_primary border-purple_primary/30 bg-purple_primary/5",
};

function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow="experience"
      title="Where I've shipped real things."
      subtitle="A timeline of the teams and clients I've worked with — from internships to freelance engagements."
    >
      <motion.ol
        variants={stagger(0.05, 0.1)}
        className="relative border-l border-white/10 ml-3 md:ml-4 space-y-10"
      >
        {experiences.map((xp) => (
          <motion.li
            key={xp.id}
            variants={fadeUp}
            className="group relative pl-8 md:pl-10"
          >
            <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-blue_primary ring-4 ring-gray_primary group-hover:bg-yellow_primary transition-colors" />

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-blue_primary/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white_primary">
                    {xp.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
                    <span className="text-blue_primary font-medium">
                      {xp.company}
                    </span>
                    <span className="hidden sm:inline">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {xp.location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-gray-300 px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.03]">
                    {xp.period}
                  </span>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-md border ${
                      TYPE_STYLES[xp.type] ??
                      "text-gray-300 border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    {xp.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">{xp.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {xp.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded-md text-blue_primary bg-blue_primary/5 border border-blue_primary/20"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}

export default Experience;
