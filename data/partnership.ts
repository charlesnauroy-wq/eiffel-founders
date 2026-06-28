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
    body: "Chaque année, la nouvelle promotion de X-HEC Entrepreneurs reprend le flambeau. Eiffel Founders n'est pas un bail ponctuel : c'est le début d'un partenariat structurel avec un vivier annuel de fondateurs.",
  },
  {
    number: "02",
    title: "Un groupe sérieux et présélectionné",
    body: "Huit fondateurs issus du programme X-HEC Entrepreneurs. Des profils vérifiés, engagés, et porteurs de projets ambitieux.",
  },
  {
    number: "03",
    title: "Un lieu habité, animé et valorisé",
    body: "Eiffel Founders n'est pas une colocation ordinaire. C'est un lieu de travail, de rencontres et d'événements. Le bien sera mis en valeur en permanence.",
  },
  {
    number: "04",
    title: "Une visibilité auprès d'un écosystème de premier plan",
    body: "Alumni X-HEC, fondateurs, fonds de venture capital, startups en croissance, journalistes tech : Eiffel Founders rayonne dans un écosystème à forte valeur symbolique et économique.",
  },
  {
    number: "05",
    title: "Un potentiel de co-organisation d'événements",
    body: "Cohabs peut être associé aux événements organisés dans le lieu : talks, dîners founders, démos.",
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
    description: "Préparation du lieu. Possibilité d'emménagement anticipé si l'état du bien le permet, selon un calendrier convenu ensemble.",
  },
  {
    date: "Septembre 2026",
    title: "Premiers événements Eiffel Founders",
    description: "Lancement du programme d'événements : talks, dîners, sessions de build. Activation des premiers partenariats avec l'écosystème.",
  },
  {
    date: "2026 — 2027",
    title: "Développement et rayonnement",
    description: "Montée en puissance du programme événementiel, consolidation des partenariats, préparation du relais avec la nouvelle promotion X-HEC Entrepreneurs.",
  },
];
