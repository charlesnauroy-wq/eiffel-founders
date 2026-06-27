# Eiffel Founders

Site officiel d'Eiffel Founders — le camp de base parisien des fondateurs X-HEC Entrepreneurs.

---

## Lancer le projet en local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## Déployer sur Vercel

```bash
# Installer la CLI Vercel (une seule fois)
npm install -g vercel

# Déployer en production
vercel --prod
```

Vercel détecte automatiquement Next.js. Aucune configuration supplémentaire n'est nécessaire.

---

## Structure du projet

```
app/                    # Pages du site (Next.js App Router)
├── page.tsx            # Home
├── concept/            # /concept
├── residents/          # /residents
├── events/             # /events
├── partners/           # /partners
├── cohabs/             # /cohabs — page partenariat Cohabs
├── cohabs-memo/        # /cohabs-memo — memo imprimable
└── contact/            # /contact

components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── ui/
│   ├── Button.tsx
│   └── SectionTitle.tsx
└── sections/
    └── ResidentCard.tsx

data/
├── residents.ts        # Données des 8 résidents
├── events.ts           # Formats d'événements
└── partnership.ts      # Données partenariat Cohabs
```

---

## Modifier les données des résidents

Ouvrir `data/residents.ts`.

Chaque résident a la structure suivante :

```typescript
{
  id: 1,
  firstName: "Prénom",
  lastName: "Nom",
  tagline: "Fondateur · X-HEC Entrepreneurs",  // ligne affichée sous le nom
  photo: "/images/residents/prenom-nom.jpg",
  linkedin: "https://www.linkedin.com/in/...",
}
```

**Pour modifier une tagline** : changer le champ `tagline` directement dans le fichier.

---

## Ajouter les photos des résidents

1. Préparer la photo au format `.jpg` ou `.png`, idéalement carrée (400×400 px minimum).
2. Nommer le fichier exactement comme indiqué dans `data/residents.ts` (ex: `maxime-romatet.jpg`).
3. Déposer le fichier dans `public/images/residents/`.

Tant qu'une photo est absente, les initiales du résident sont affichées à la place.

Liste des fichiers attendus :
- `public/images/residents/christian-banide.jpg`
- `public/images/residents/daphne-lamarre.jpg`
- `public/images/residents/fayed-al-rashid.jpg`
- `public/images/residents/alix-monteyne.jpg`
- `public/images/residents/anaeve-petit.jpg`
- `public/images/residents/maxime-romatet.jpg`
- `public/images/residents/mathieu-grossin.jpg`
- `public/images/residents/hugo-gesland.jpg`

---

## Pages principales

| Route | Description |
|---|---|
| `/` | Page d'accueil |
| `/concept` | Présentation du concept |
| `/residents` | Grille des 8 résidents |
| `/events` | Formats événementiels |
| `/partners` | Partenaires recherchés |
| `/cohabs` | Page partenariat Cohabs (pitch deck web) |
| `/cohabs-memo` | Mémo imprimable (export PDF navigateur) |
| `/contact` | Contacts et liens LinkedIn |

---

## Exporter le memo Cohabs en PDF

1. Ouvrir `/cohabs-memo` dans le navigateur.
2. Cliquer sur le bouton **"Imprimer / Exporter PDF"**.
3. Dans la boîte de dialogue d'impression, sélectionner **"Enregistrer en PDF"** comme destination.
4. Choisir le format A4.

---

## Stack technique

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- **lucide-react** (icônes)
- **Vercel** (déploiement)

---

## Contact

- Email : contact@eiffel-founders.com
- Maxime Romatet : +33 7 69 18 70 16
- Daphné Lamarre : +33 7 83 79 00 32
