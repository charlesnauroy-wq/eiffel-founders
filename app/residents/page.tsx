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
            Six fondateurs. Un projet commun.
          </h1>
          <p style={{ fontSize: "1rem", color: "#6B6B6B", lineHeight: 1.8 }}>
            Les résidents d'Eiffel Founders sont des entrepreneurs issus du programme X-HEC Entrepreneurs. Chacun persuadé que le succès entrepreneurial dépend de leur environnement, ils rassemblent leur vision pour construire un lieu de vie partagé et enrichissant.
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

    </>
  );
}
