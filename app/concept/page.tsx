import { Globe, MapPin } from "lucide-react";
import Link from "next/link";
import { ArrowRight, Building2, Users, Zap } from "lucide-react";

const pillars = [
  {
    icon: <Zap size={22} color="#C9A84C" />,
    title: "Build",
    body: "Le lieu est avant tout un espace de travail. Les résidents y construisent leurs startups au quotidien, s'entraident, partagent leurs expertises et accueillent leurs collaborateurs dans un cadre professionnel.",
  },
  {
    icon: <Users size={22} color="#C9A84C" />,
    title: "Meet-up",
    body: "Dîners fondateurs, talks experts, soirées alumni : Eiffel Founders anime un réseau vivant entre ses résidents et les acteurs clés de l'écosystème parisien.",
  },
  {
    icon: <Building2 size={22} color="#C9A84C" />,
    title: "Events",
    body: "Hackathons, demo days, pitch nights, conférences AI : le lieu accueille des événements qui rayonnent au-delà des résidents et positionnent Eiffel Founders comme un acteur visible de la scène startup parisienne.",
  },
];

export default function ConceptPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "8rem 1.5rem 5rem", backgroundColor: "#F7F6F2", borderBottom: "1px solid #E0DED6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#C9A84C", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
            Le Concept
          </span>
          <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.5rem" }} />
          <h1
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              fontWeight: 600,
              color: "#1B2E4B",
              lineHeight: 1.1,
              maxWidth: "900px",
              marginBottom: "1.5rem",
            }}
          >
            Une ambassade parisienne pour les fondateurs X-HEC.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#6B6B6B", lineHeight: 1.8, maxWidth: "600px" }}>
            Le programme X-HEC Entrepreneurs regroupe chaque année 120 fondateurs répartis entre Jouy-en-Josas, Saclay, Station F, Singapour, San Francisco et d'autres lieux à travers le monde. Eiffel Founders est leur point de convergence à Paris.
          </p>
        </div>
      </section>

      {/* Context */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 1.5rem", borderBottom: "1px solid #E0DED6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <Globe size={16} color="#C9A84C" />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#C9A84C", textTransform: "uppercase" }}>
                L'inspiration
              </span>
            </div>
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.4rem, 2vw, 1.75rem)", fontWeight: 600, color: "#1B2E4B", marginBottom: "1rem", lineHeight: 1.3 }}>
              De San Francisco à Paris
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.8 }}>
              L'expérience{" "}
              <a href="https://www.fontaine-founders.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C", textDecoration: "none", borderBottom: "1px solid #C9A84C" }}>
                Fontaine Founders
              </a>{" "}
              à San Francisco, où une partie de la promotion 2026 a vécu et travaillé sous le même toit, a démontré la valeur d'une cohorte entrepreneuriale réunie dans un même espace. La proximité génère des collaborations, accélère les décisions et crée un sentiment d'appartenance difficile à reproduire à distance.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.8, marginTop: "1rem" }}>
              Eiffel Founders est la continuation parisienne de cet esprit — alliant l'énergie d'une hacker house américaine et le sérieux d'un écosystème entrepreneurial français structuré.
            </p>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <MapPin size={16} color="#C9A84C" />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#C9A84C", textTransform: "uppercase" }}>
                Le besoin
              </span>
            </div>
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.4rem, 2vw, 1.75rem)", fontWeight: 600, color: "#1B2E4B", marginBottom: "1rem", lineHeight: 1.3 }}>
              Un lieu identifiable à Paris
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.8 }}>
              Les fondateurs X-HEC manquent d'un ancrage physique dans la capitale. Entre les campus dispersés et les espaces de coworking anonymes, il n'existe pas encore de lieu qui incarne l'identité collective de la promotion à Paris.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.8, marginTop: "1rem" }}>
              Eiffel Founders répond à ce manque : un lieu central, reconnaissable, vivant et professionnel, capable d'accueillir aussi bien du travail quotidien que des événements de rayonnement.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section style={{ backgroundColor: "#F7F6F2", borderTop: "1px solid #E0DED6", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, color: "#1B2E4B" }}>
              Trois usages. Une vision.
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "#E0DED6" }}>
            {pillars.map((pillar, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "3rem",
                  display: "grid",
                  gridTemplateColumns: "64px 1fr",
                  gap: "2rem",
                  alignItems: "start",
                }}
              >
                <div style={{ paddingTop: "0.2rem" }}>{pillar.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.25rem", fontWeight: 600, color: "#1B2E4B", marginBottom: "0.75rem" }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.8 }}>{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 1.5rem", borderTop: "1px solid #E0DED6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link
            href="/residents"
            style={{ backgroundColor: "#1B2E4B", color: "#FFFFFF", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", padding: "1rem 2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            Rencontrer les fondateurs <ArrowRight size={14} />
          </Link>
          <Link
            href="/cohabs"
            style={{ backgroundColor: "transparent", color: "#1A1A1A", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", padding: "1rem 2rem", border: "1px solid #E0DED6", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            Partenariat Cohabs
          </Link>
        </div>
      </section>
    </>
  );
}
