export type ValueProp = {
  number: string;
  title: string;
  body: string;
};

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

export const valueProps: ValueProp[] = [
  {
    number: "01",
    title: "Un partenariat durable, renouvelable chaque année",
    body: "Chaque année, la promotion suivante de X-HEC Entrepreneurs peut reprendre le flambeau. Eiffel Founders n'est pas un bail ponctuel : c'est le début d'un partenariat structurel avec un vivier annuel de fondateurs.",
  },
  {
    number: "02",
    title: "Un groupe sérieux et présélectionné",
    body: "Huit fondateurs issus du programme X-HEC Entrepreneurs, l'une des formations entrepreneuriales les plus sélectives de France. Des profils vérifiés, engagés, et porteurs de projets ambitieux.",
  },
  {
    number: "03",
    title: "Une vitrine premium pour la marque Cohabs",
    body: "Associer Cohabs à une hacker house de fondateurs renforce son positionnement premium et son ancrage dans l'écosystème entrepreneurial parisien, un marché clé pour la marque.",
  },
  {
    number: "04",
    title: "Un lieu habité, animé et valorisé",
    body: "Eiffel Founders n'est pas une colocation ordinaire. C'est un lieu de travail, de rencontres et d'événements. Le bien sera entretenu, activé et mis en valeur en permanence.",
  },
  {
    number: "05",
    title: "Une visibilité auprès d'un écosystème de premier plan",
    body: "Alumni X-HEC, fondateurs, fonds de venture capital, startups en croissance, journalistes tech : Eiffel Founders rayonne dans un écosystème à forte valeur symbolique et économique.",
  },
  {
    number: "06",
    title: "Un potentiel de co-organisation d'événements",
    body: "Cohabs peut être associé aux événements organisés dans le lieu : talks, dîners founders, démos. Une présence qualitative devant une audience de décideurs et de bâtisseurs.",
  },
];

export const timeline: TimelineItem[] = [
  {
    date: "Juillet 2026",
    title: "Finalisation du partenariat",
    description: "Signature du bail et confirmation des conditions. Définition du calendrier d'installation avec Cohabs.",
  },
  {
    date: "Août — Septembre 2026",
    title: "Installation progressive",
    description: "Préparation du lieu. Possibilité d'emménagement anticipé si l'état du bien le permet, ou attente de la finalisation des travaux selon ce qui convient le mieux à Cohabs.",
  },
  {
    date: "Automne 2026",
    title: "Premiers événements Eiffel Founders",
    description: "Lancement du programme d'événements : talks, dîners, sessions de build. Activation des premiers partenariats avec l'écosystème.",
  },
  {
    date: "2026 — 2027",
    title: "Développement et rayonnement",
    description: "Montée en puissance du programme événementiel, consolidation des partenariats, préparation du relais avec la promotion X-HEC Entrepreneurs suivante.",
  },
];
