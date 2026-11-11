import { ArrowDown, ArrowRight, Clock, LayoutGrid } from "lucide-react";
import { useLang } from "../lib/i18n.jsx";

function Hero() {
  const { t } = useLang();

  return (
    <div
      id="home"
      className="bg-[url('/src/assets/bg/toandro-home-cover.jpg')] bg-center bg-cover h-screen min-h-[600px] w-full flex flex-col items-center justify-center py-[60px] px-4 transition-all duration-500 ease-out overflow-hidden"
    >
      <div className="grow">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <h1 className="uppercase text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-wide">
            Toandro Mananjara
          </h1>
          <p className="uppercase text-yellow_primary text-xl sm:text-2xl lg:text-3xl m-2 lg:mt-6 lg:mb-4 tracking-wide">
            {t("hero.role")}
          </p>
          {/* L'intitulé dit ce que je suis ; cette ligne dit ce que le client
              y gagne. */}
          <p className="max-w-xl text-base sm:text-lg text-gray-300 leading-relaxed">
            {t("hero.tagline")}
          </p>

          <div className="mt-10 w-full max-w-xs sm:max-w-none flex flex-col sm:flex-row sm:justify-center items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-yellow_primary text-gray_primary text-base font-semibold shadow-lg shadow-yellow_primary/25 hover:shadow-yellow_primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t("hero.ctaContact")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white_primary/20 bg-white_primary/5 backdrop-blur-sm text-white_primary text-base font-medium hover:border-blue_primary/60 hover:text-blue_primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <LayoutGrid className="w-4 h-4" />
              {t("hero.ctaWork")}
            </a>
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" aria-hidden="true" />
            {t("hero.reassurance")}
          </p>

        </div>
      </div>

      <div className="w-full flex justify-center">
        <a
          href="#about"
          aria-label={t("hero.scroll")}
          className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue_primary/80 to-blue_primary/60 rounded-full hover:from-blue_primary hover:to-blue_primary border-2 border-blue_primary/30 shadow-lg animate-bounce hover:animate-none transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <ArrowDown className="w-5 h-5 text-white_primary group-hover:translate-y-1 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue_primary to-yellow_primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
