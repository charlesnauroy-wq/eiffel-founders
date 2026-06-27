export type EventFormat = {
  icon: string;
  title: string;
  description: string;
};

export const eventFormats: EventFormat[] = [
  {
    icon: "Cpu",
    title: "AI & Frontier Tech",
    description: "Sessions dédiées aux technologies émergentes, LLMs et applications de l'intelligence artificielle.",
  },
  {
    icon: "Wrench",
    title: "Workshops",
    description: "Ateliers pratiques animés par des experts : go-to-market, fundraising, product, growth.",
  },
  {
    icon: "Zap",
    title: "Hackathons",
    description: "48 heures pour construire, itérer et pitcher un prototype devant un jury de founders et d'investisseurs.",
  },
  {
    icon: "Presentation",
    title: "Demo Days",
    description: "Présentation des projets en cours à un public sélectionné : alumni, VCs, journalistes tech.",
  },
  {
    icon: "Mic",
    title: "Talks « How We Built It »",
    description: "Retours d'expérience de fondateurs ayant traversé les grandes étapes : idée, seed, scale.",
  },
  {
    icon: "Star",
    title: "Pitch Nights",
    description: "Soirées de pitch dans un cadre intime, avec retours directs d'investisseurs et de pairs.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Dîners Founders",
    description: "Dîners privés réunissant des fondateurs en activité, des alumni et des acteurs de l'écosystème.",
  },
  {
    icon: "GraduationCap",
    title: "Rencontres Alumni",
    description: "Soirées de connexion entre la promotion en cours et les générations X-HEC précédentes.",
  },
  {
    icon: "Laptop",
    title: "Sessions de Build Collectives",
    description: "Journées de travail intensif en groupe, ouvertes aux résidents, fondateurs invités et partenaires.",
  },
];
