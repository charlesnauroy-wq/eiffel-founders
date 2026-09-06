export type Resident = {
  id: number;
  firstName: string;
  lastName: string;
  tagline: string;
  photo: string;
  linkedin: string;
};

export const residents: Resident[] = [
  {
    id: 1,
    firstName: "Daphné",
    lastName: "Lamarre",
    tagline: "Fondatrice · X-HEC Entrepreneurs",
    photo: "/images/residents/daphne-lamarre.jpg",
    linkedin: "https://www.linkedin.com/in/daphn%C3%A9e-lamarre-2b2b5926b/",
  },
  {
    id: 2,
    firstName: "Alix",
    lastName: "Monteyne",
    tagline: "Fondatrice · X-HEC Entrepreneurs",
    photo: "/images/residents/alix-monteyne.jpg",
    linkedin: "https://www.linkedin.com/in/alix-monteyne-614887292/",
  },
  {
    id: 3,
    firstName: "Anaeve",
    lastName: "Petit",
    tagline: "Fondatrice · X-HEC Entrepreneurs",
    photo: "/images/residents/anaeve-petit.jpg",
    linkedin: "https://www.linkedin.com/in/anaevepetit/",
  },
  {
    id: 4,
    firstName: "Maxime",
    lastName: "Romatet",
    tagline: "Fondateur · X-HEC Entrepreneurs",
    photo: "/images/residents/maxime-romatet.jpg",
    linkedin: "https://www.linkedin.com/in/maximeromatet/",
  },
  {
    id: 5,
    firstName: "Mathieu",
    lastName: "Grossin",
    tagline: "Fondateur · X-HEC Entrepreneurs",
    photo: "/images/residents/mathieu-grossin.jpg",
    linkedin: "https://www.linkedin.com/in/mathieu-grossin-91a356220/",
  },
  {
    id: 6,
    firstName: "Hugo",
    lastName: "Gesland",
    tagline: "Fondateur · X-HEC Entrepreneurs",
    photo: "/images/residents/hugo-gesland.jpg",
    linkedin: "https://www.linkedin.com/in/hugo-gesland-1233a2254/",
  },
];
