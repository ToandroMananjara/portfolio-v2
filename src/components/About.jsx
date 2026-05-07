import { motion } from "framer-motion";
import { Download } from "lucide-react";
import me from "../assets/me.png";
import myCv from "../assets/data/CV_Toandro.pdf";
import Section from "./ui/Section";
import { fadeUp } from "../lib/motion";
import { useLang } from "../lib/i18n.jsx";

const calculateAge = (birthYear) => new Date().getFullYear() - birthYear;

function About() {
  const { t } = useLang();
  const age = calculateAge(2001);

  const stats = [
    { value: "4+", label: t("about.stat.years") },
    { value: "10+", label: t("about.stat.projects") },
    { value: "M2", label: t("about.stat.misa") },
  ];

  return (
    <Section
      id="about"
      index="01"
      eyebrow={t("about.eyebrow")}
      title={t("about.title")}
      subtitle={t("about.subtitle").replace("{age}", age)}
    >
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <motion.div
          variants={fadeUp}
          className="md:col-span-5 flex justify-center md:justify-start"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl border border-blue_primary/30" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-yellow_primary/60 rounded-2xl" />
            <img
              src={me}
              alt="Toandro Mananjara"
              loading="lazy"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl bg-white/80 shadow-xl"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="md:col-span-7 space-y-6">
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              {t("about.p1.before")}
              <span className="text-white_primary font-medium">
                {t("about.p1.highlight")}
              </span>
              {t("about.p1.after")}
            </p>
            <p>{t("about.p2")}</p>
            <p className="text-gray-400 italic border-l-2 border-yellow_primary/60 pl-4">
              {t("about.quote")}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue_primary">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={myCv}
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-yellow_primary text-yellow_primary rounded-lg font-medium hover:bg-yellow_primary hover:text-gray_primary transition-colors duration-300"
            >
              <Download className="w-4 h-4" />
              {t("about.cv")}
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export default About;
