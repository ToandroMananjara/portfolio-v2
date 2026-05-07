import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { socials } from "../data/socials";
import { navItems } from "../data/navigation";
import { fadeUp, inViewProps, stagger } from "../lib/motion";
import { useLang } from "../lib/i18n.jsx";

function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  const quickLinks = navItems.filter((i) => i.href.startsWith("#"));

  return (
    <motion.footer
      variants={stagger(0.05, 0.08)}
      {...inViewProps}
      className="relative border-t border-white/5 bg-white/[0.015]"
    >
      <div className="max-w-content mx-auto px-4 sm:px-10 md:px-14 py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10">
          <motion.div variants={fadeUp} className="col-span-2 md:col-span-6 space-y-5">
            <p className="font-mono text-sm text-blue_primary">
              <span className="text-yellow_primary">{"//"}</span> {t("footer.eyebrow")}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white_primary">
              {t("footer.title")}
            </h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              {t("footer.subtitle")}
            </p>
            <a
              href="mailto:mahasalotra@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-blue_primary text-blue_primary hover:bg-blue_primary hover:text-gray_primary transition-colors duration-300 font-medium"
            >
              <Mail className="w-4 h-4" />
              mahasalotra@gmail.com
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="col-span-1 md:col-span-3">
            <p className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-4">
              {t("footer.sitemap")}
            </p>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="font-mono text-sm text-gray-300 hover:text-blue_primary transition-colors"
                  >
                    <span className="text-yellow_primary/70 mr-1">{"//"}</span>
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="col-span-1 md:col-span-3">
            <p className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-4">
              {t("footer.connect")}
            </p>
            <ul className="space-y-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={
                        social.href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="inline-flex items-center gap-3 text-gray-300 hover:text-blue_primary transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-500 font-mono">
            © {year} Toandro Mananjara — {t("footer.rights")}
          </p>
          <a
            href="#home"
            aria-label={t("footer.backToTop")}
            className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue_primary transition-colors"
          >
            <span className="font-mono">{t("footer.backToTop")}</span>
            <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue_primary/40 transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
