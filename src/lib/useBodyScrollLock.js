import { useEffect } from "react";

/**
 * Verrouille le defilement de la page tant que `locked` est vrai.
 *
 * Piege resolu ici : on ne peut PAS se contenter de `document.body`. La regle
 * de propagation du viewport veut que l'overflow du body ne soit transmis au
 * viewport que si celui de <html> vaut `visible`. Or index.css declare
 * `html { overflow-x: hidden }` -- <html> est donc l'element defilant, et
 * verrouiller uniquement le body n'a aucun effet.
 *
 * On verrouille les deux : documentElement pour ce cas, body pour rester
 * correct si la regle CSS venait a changer.
 *
 * Les appels imbriques fonctionnent (un modal qui ouvre une visionneuse) :
 * chaque instance memorise la valeur precedente et la restaure en sortant.
 */
export function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;

    const root = document.documentElement;
    const { body } = document;
    const previousRoot = root.style.overflow;
    const previousBody = body.style.overflow;

    root.style.overflow = "hidden";
    body.style.overflow = "hidden";
    // Signale l'etat au CSS : la gouttiere de scrollbar reste reservee (aucun
    // saut de layout) mais son rail est rendu invisible, sinon il se detache
    // en gris sur le fond sombre d'une visionneuse plein ecran.
    root.setAttribute("data-scroll-locked", "");

    return () => {
      root.style.overflow = previousRoot;
      body.style.overflow = previousBody;
      root.removeAttribute("data-scroll-locked");
    };
  }, [locked]);
}
