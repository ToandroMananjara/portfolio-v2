export const EASE_OUT = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT = [0.65, 0, 0.35, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT } },
};

export const stagger = (delayChildren = 0.1, stagger = 0.08) => ({
  hidden: {},
  show: {
    transition: {
      delayChildren,
      staggerChildren: stagger,
    },
  },
});

export const inViewProps = {
  initial: "hidden",
  whileInView: "show",
  // amount: "some" declenche des qu'une partie de l'element entre dans l'ecran.
  //
  // Ne PAS revenir a une fraction (0.2 par exemple) : le seuil porte sur la
  // hauteur de l'element, pas sur celle de l'ecran. Sur une section longue --
  // la liste des projets sur mobile fait plusieurs milliers de pixels -- 20 %
  // de sa hauteur depasse la hauteur du viewport, le seuil n'est jamais
  // atteint, l'animation ne demarre pas et le contenu reste invisible tout en
  // occupant sa place. Le bug ne se voit qu'a partir d'une certaine longueur,
  // donc il apparait en cours de projet sans qu'on ait touche a l'animation.
  viewport: { once: true, amount: "some" },
};
