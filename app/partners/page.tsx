import Link from "next/link";
import { ArrowRight, Building2, Cpu, GraduationCap, TrendingUp } from "lucide-react";

const partnerCategories = [
  {
    icon: <Building2 size={20} color="#C9A84C" />,
    title: "Partenaire logement",
    description: "Un propriétaire ou opérateur de résidences qui accueille le groupe dans un cadre adapté au travail et aux événements. Cohabs est notre partenaire privilégié dans cette catégorie.",
    featured: true,
    link: "/cohabs",
    cta: "Voir le partenariat Cohabs",
  },
  {
    icon: <Cpu size={20} color="#C9A84C" />,
    title: "Partenaires tech & IA",
    description: "Startups, laboratoires ou scale-ups souhaitant animer des sessions techniques, des hackathons ou des talks dans un cadre founder-first.",
    featured: false,
  },
  {
    icon: <TrendingUp size={20} color="#C9A84C" />,
    title: "Fonds & investisseurs",
    description: "Fonds de venture capital et business angels qui souhaitent rencontrer les fondateurs X-HEC dans un cadre informel et sélectif.",
    featured: false,
  },
  {
    icon: <GraduationCap size={20} color="#C9A84C" />,
    title: "Alumni & mentors",
    description: "Diplômés X-HEC et mentors expérimentés qui souhaitent contribuer à l'écosystème en partageant leur expérience avec la promotion en activité.",
    featured: false,
  },
];

const whatWeOffer = [
  "Un accès privilégié à l'écosystème Eiffel Founders",
  "Une présence lors des événements et dîners fondateurs",
  "Une visibilité auprès de l'écosystème et des alumnis HEC Paris et Polytechnique",
  "Des opportunités de co-organisation d'événements",
  "Un positionnement early stage dans les start-ups de demain",
  "Une association à un lieu pensé pour la création et l'innovation",
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "8rem 1.5rem 5rem", backgroundColor: "#F7F6F2", borderBottom: "1px solid #E0DED6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#C9A84C", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
            Partenariats
          </span>
          <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.5rem" }} />
          <h1
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 600,
              color: "#1B2E4B",
              lineHeight: 1.1,
              maxWidth: "800px",
              marginBottom: "1.25rem",
            }}
          >
            Construire ensemble un écosystème ambitieux.
          </h1>
          <p style={{ fontSize: "1rem", color: "#6B6B6B", lineHeight: 1.8 }}>
            Eiffel Founders cherche des partenaires qui partagent notre conviction : une hackerhouse dans Paris provoque la construction de projets, de relations et d'opportunités pour l'écosystème entrepreneurial français.
          </p>
        </div>
      </section>

      {/* What we offer */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "start" }}>
            <div>
              <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
              <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: "#1B2E4B", marginBottom: "1rem", lineHeight: 1.3 }}>
                Ce qu'un partenariat avec Eiffel Founders vous apporte
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.8 }}>
                Nos partenaires bénéficient d'un accès unique à l'un des réseaux les plus sélectifs de l'entrepreneuriat français.
              </p>
            </div>
            <div>
              {whatWeOffer.map((item, i) => (
                <div key={i} style={{ padding: "1.25rem 0", borderBottom: "1px solid #E0DED6", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "#C9A84C", paddingTop: "2px", minWidth: "24px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner categories */}
      <section style={{ backgroundColor: "#F7F6F2", borderTop: "1px solid #E0DED6", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: "#1B2E4B" }}>
              Catégories de partenaires recherchés
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", backgroundColor: "#E0DED6" }}>
            {partnerCategories.map((cat, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  border: cat.featured ? "2px solid #C9A84C" : "none",
                  position: "relative",
                }}
              >
                {cat.featured && (
                  <span style={{ position: "absolute", top: "1rem", right: "1rem", fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Prioritaire
                  </span>
                )}
                <div>{cat.icon}</div>
                <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.1rem", fontWeight: 600, color: "#1B2E4B" }}>{cat.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#6B6B6B", lineHeight: 1.7, flex: 1 }}>{cat.description}</p>
                {cat.link && cat.cta && (
                  <Link href={cat.link} style={{ fontSize: "0.75rem", color: "#C9A84C", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "0.5rem" }}>
                    {cat.cta} <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 1.5rem", borderTop: "1px solid #E0DED6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1B2E4B", marginBottom: "0.5rem" }}>
            Vous souhaitez devenir partenaire ?
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#6B6B6B" }}>Contactez-nous directement pour échanger sur les possibilités : <a href="mailto:contact@eiffel-founders.com" style={{ color: "#C9A84C", textDecoration: "none" }}>contact@eiffel-founders.com</a></p>
        </div>
      </section>
    </>
  );
}
