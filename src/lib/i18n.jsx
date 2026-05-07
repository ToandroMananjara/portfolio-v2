import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../locales/translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "lang";

const detectLang = () => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "fr" || stored === "en") return stored;
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const t = (key) => translations[key]?.[lang] ?? key;
    const pick = (value) => {
      if (value && typeof value === "object" && ("en" in value || "fr" in value)) {
        return value[lang] ?? value.en ?? value.fr;
      }
      return value;
    };
    const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));
    return { lang, setLang, toggle, t, pick };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
