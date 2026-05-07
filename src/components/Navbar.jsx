import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { navItems } from "../data/navigation";
import { useLang } from "../lib/i18n.jsx";

function Navbar() {
  const { lang, toggle, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems
      .filter((i) => i.href.startsWith("#"))
      .map((i) => i.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[999] transition-colors duration-300 ${
          scrolled
            ? "bg-gray_primary/85 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-content mx-auto flex items-center justify-between px-5 sm:px-10 md:px-14 h-[var(--nav-height,72px)]">
        <a
          href="#home"
          className="font-mono text-2xl font-semibold text-blue_primary hover:text-yellow_primary transition-colors"
          aria-label="Toandro Mananjara — home"
        >
          <span className="text-yellow_primary">{"<"}</span>TM
          <span className="text-yellow_primary">{" />"}</span>
        </a>

        <ul className="hidden md:flex items-center gap-7 font-mono text-sm">
          {navItems.map((item) => {
            const isActive = activeId === item.id && item.href.startsWith("#");
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`group inline-flex items-center gap-1 transition-colors ${
                    isActive
                      ? "text-blue_primary"
                      : "text-gray-300 hover:text-blue_primary"
                  }`}
                >
                  <span
                    className={`text-yellow_primary/80 transition-opacity ${
                      isActive ? "opacity-100" : "opacity-50 group-hover:opacity-100"
                    }`}
                  >
                    {"//"}
                  </span>
                  <span>{t(item.labelKey)}</span>
                </a>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={toggle}
              aria-label={t("nav.langLabel")}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-white/10 text-gray-300 hover:text-blue_primary hover:border-blue_primary/40 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{lang}</span>
            </button>
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-1">
          <button
            type="button"
            onClick={toggle}
            aria-label={t("nav.langLabel")}
            className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-white/10 text-gray-300 hover:text-blue_primary text-xs font-mono"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase">{lang}</span>
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="p-2 -mr-2 text-white_primary hover:text-blue_primary transition-colors"
            aria-label={t("nav.menuOpen")}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[1000] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              className="absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-gray_primary border-l border-white/10 px-6 py-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-white_primary hover:text-blue_primary transition-colors"
                  aria-label={t("nav.menuClose")}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ul className="mt-6 flex flex-col gap-2 font-mono">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-3 rounded-md text-gray-200 hover:text-blue_primary hover:bg-white/5 transition-colors"
                    >
                      <span className="text-yellow_primary/80 mr-2">{"//"}</span>
                      {t(item.labelKey)}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
