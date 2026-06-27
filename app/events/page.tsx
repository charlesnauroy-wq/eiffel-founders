"use client";
import {
  Cpu, Wrench, Zap, Presentation, Mic, Star,
  UtensilsCrossed, GraduationCap, Laptop, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { eventFormats } from "@/data/events";

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={20} color="#C9A84C" />,
  Wrench: <Wrench size={20} color="#C9A84C" />,
  Zap: <Zap size={20} color="#C9A84C" />,
  Presentation: <Presentation size={20} color="#C9A84C" />,
  Mic: <Mic size={20} color="#C9A84C" />,
  Star: <Star size={20} color="#C9A84C" />,
  UtensilsCrossed: <UtensilsCrossed size={20} color="#C9A84C" />,
  GraduationCap: <GraduationCap size={20} color="#C9A84C" />,
  Laptop: <Laptop size={20} color="#C9A84C" />,
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "8rem 1.5rem 5rem", backgroundColor: "#F7F6F2", borderBottom: "1px solid #E0DED6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#C9A84C", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
            Programme
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
            Un programme d'événements au cœur de l'écosystème.
          </h1>
          <p style={{ fontSize: "1rem", color: "#6B6B6B", lineHeight: 1.8, maxWidth: "560px" }}>
            Eiffel Founders a vocation à accueillir des événements réguliers qui renforcent le rayonnement du programme X-HEC et créent des connections durables entre fondateurs, investisseurs et opérateurs.
          </p>
        </div>
      </section>

      {/* Formats */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: "#1B2E4B", marginBottom: "0.5rem" }}>
              Formats envisagés
            </h2>
            <p style={{ fontSize: "0.85rem", color: "#9E9E9E", fontStyle: "italic" }}>
              Le programme définitif sera co-construit avec nos partenaires à partir de l'automne 2026.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", backgroundColor: "#E0DED6" }}>
            {eventFormats.map((format, i) => (
              <div
                key={i}
                style={{ backgroundColor: "#FFFFFF", padding: "2rem 2.5rem", transition: "background-color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "#F7F6F2")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "#FFFFFF")}
              >
                <div style={{ marginBottom: "1rem" }}>{iconMap[format.icon]}</div>
                <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1rem", fontWeight: 600, color: "#1B2E4B", marginBottom: "0.5rem" }}>
                  {format.title}
                </h3>
                <p style={{ fontSize: "0.825rem", color: "#6B6B6B", lineHeight: 1.7 }}>{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ backgroundColor: "#F7F6F2", borderTop: "1px solid #E0DED6", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
              <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: "#1B2E4B", marginBottom: "1rem", lineHeight: 1.3 }}>
                Des événements comme levier de rayonnement
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.8, marginBottom: "1rem" }}>
                Les événements organisés à Eiffel Founders ne sont pas pensés comme un mécanisme de financement, mais comme un levier de visibilité, de réseau et d'animation de l'écosystème.
              </p>
              <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.8 }}>
                Chaque événement est une opportunité de connecter des fondateurs avec des partenaires stratégiques, des investisseurs et des acteurs clés de la scène entrepreneuriale parisienne.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "#E0DED6" }}>
              {[
                { label: "Fréquence cible", value: "2–3 événements / mois" },
                { label: "Format", value: "Intime et sélectif (20–80 participants)" },
                { label: "Lancement", value: "Automne 2026" },
                { label: "Audience visée", value: "Fondateurs, VCs, Alumni X-HEC" },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: "#FFFFFF", padding: "1.25rem 1.75rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontSize: "0.8rem", color: "#9E9E9E" }}>{item.label}</span>
                  <span style={{ fontSize: "0.85rem", color: "#1A1A1A", textAlign: "right", fontWeight: 500 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 1.5rem", borderTop: "1px solid #E0DED6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <a
            href="mailto:contact@eiffel-founders.com"
            style={{ backgroundColor: "#1B2E4B", color: "#FFFFFF", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", padding: "1rem 2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            Devenir partenaire événementiel <ArrowRight size={14} />
          </a>
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
