import { residents } from "@/data/residents";
import ResidentCard from "@/components/sections/ResidentCard";

export default function ResidentsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "8rem 1.5rem 5rem", backgroundColor: "#F7F6F2", borderBottom: "1px solid #E0DED6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#C9A84C", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
            Promotion 2026
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
            Huit fondateurs. Un projet commun.
          </h1>
          <p style={{ fontSize: "1rem", color: "#6B6B6B", lineHeight: 1.8, maxWidth: "580px" }}>
            Les résidents d'Eiffel Founders sont des entrepreneurs issus du programme X-HEC Entrepreneurs, l'une des formations les plus sélectives de France combinant l'excellence technique de l'École Polytechnique et la rigueur de gestion de HEC Paris.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", backgroundColor: "#E0DED6" }}>
            {residents.map((resident) => (
              <ResidentCard key={resident.id} resident={resident} />
            ))}
          </div>
        </div>
      </section>

      {/* X-HEC stats */}
      <section style={{ backgroundColor: "#F7F6F2", borderTop: "1px solid #E0DED6", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", backgroundColor: "#E0DED6" }}>
            {[
              { value: "120", label: "Fondateurs par promotion", desc: "X-HEC Entrepreneurs réunit chaque année 120 entrepreneurs en formation." },
              { value: "2", label: "Grandes écoles réunies", desc: "L'excellence technique de Polytechnique alliée à la rigueur de gestion de HEC Paris." },
              { value: "∞", label: "Promotions à venir", desc: "Chaque année, la promotion suivante peut reprendre le flambeau d'Eiffel Founders." },
            ].map((stat, i) => (
              <div key={i} style={{ backgroundColor: "#FFFFFF", padding: "2rem 2.5rem" }}>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "2.5rem", fontWeight: 700, color: "#C9A84C", marginBottom: "0.5rem" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#1B2E4B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {stat.label}
                </div>
                <p style={{ fontSize: "0.82rem", color: "#6B6B6B", lineHeight: 1.6 }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
