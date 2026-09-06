"use client";
import Link from "next/link";
import { ArrowRight, Building2, Users, Zap } from "lucide-react";
import { residents } from "@/data/residents";
import ResidentCard from "@/components/sections/ResidentCard";

const pillars = [
  {
    icon: <Zap size={20} color="#C9A84C" />,
    title: "Build",
    description: "Un espace de travail permanent pour les résidents et leurs invités — deep work, collaboration et sessions de build intensives.",
  },
  {
    icon: <Users size={20} color="#C9A84C" />,
    title: "Meet-up",
    description: "Dîners, talks, office hours : un lieu vivant qui connecte les fondateurs avec l'écosystème alumni, investisseurs et opérateurs.",
  },
  {
    icon: <Building2 size={20} color="#C9A84C" />,
    title: "Events",
    description: "Hackathons, demo days, pitch nights, conférences AI. Un programme ancré dans l'actualité tech et entrepreneuriale.",
  },
];

const xhecStats = [
  { value: "120", label: "Fondateurs par promotion", desc: "X-HEC Entrepreneurs réunit chaque année 120 entrepreneurs en formation." },
  { value: "2", label: "Grandes écoles réunies", desc: "L'excellence technique de Polytechnique alliée à la rigueur de gestion de HEC Paris." },
  { value: "∞", label: "Promotions à venir", desc: "Chaque année, la nouvelle promotion reprend le flambeau des Eiffel Founders." },
];

export default function HomePage() {
  const featuredResidents = residents.slice(0, 4);

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "8rem 1.5rem 5rem",
          backgroundColor: "#F7F6F2",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(#E0DED6 1px, transparent 1px), linear-gradient(90deg, #E0DED6 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.35,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative" }}>
          {/* Eyebrow */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
            <span style={{ display: "block", width: "32px", height: "1px", backgroundColor: "#C9A84C" }} />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#C9A84C", textTransform: "uppercase" }}>
              X-HEC Entrepreneurs · Paris · 2026
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontWeight: 600,
              color: "#1B2E4B",
              lineHeight: 1.08,
              marginBottom: "1.5rem",
              maxWidth: "900px",
            }}
          >
            Le camp de base <span style={{ color: "#C9A84C" }}>parisien</span>{" "}
            des fondateurs X-HEC Entrepreneurs.
          </h1>

          {/* Sub */}
          <p style={{ fontSize: "1.1rem", color: "#6B6B6B", lineHeight: 1.7, maxWidth: "540px", marginBottom: "3rem" }}>
            Six fondateurs. Un lieu pour construire, recevoir et faire grandir l'écosystème entrepreneurial X-HEC à Paris.
          </p>

        </div>
      </section>

      {/* ── 3 Pillars ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 1.5rem", borderBottom: "1px solid #E0DED6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, color: "#1B2E4B", marginBottom: "0.75rem" }}>
              Une vision.
            </h2>
            <p style={{ color: "#6B6B6B", fontSize: "1rem", maxWidth: "480px", lineHeight: 1.7 }}>
              Plus qu'une colocation : une infrastructure opérationnelle pour fondateurs ambitieux.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", backgroundColor: "#E0DED6" }}>
            {pillars.map((p, i) => (
              <div key={i} style={{ backgroundColor: "#FFFFFF", padding: "2.5rem" }}>
                <div style={{ marginBottom: "1.25rem" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.2rem", fontWeight: 600, color: "#1B2E4B", marginBottom: "0.75rem" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: 1.7 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── X-HEC context ── */}
      <section style={{ backgroundColor: "#F7F6F2", padding: "6rem 1.5rem", borderBottom: "1px solid #E0DED6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, color: "#1B2E4B", marginBottom: "1rem" }}>
              Ancré dans le programme X-HEC Entrepreneurs
            </h2>
            <p style={{ color: "#6B6B6B", fontSize: "1rem", lineHeight: 1.8 }}>
              La promotion X-HEC Entrepreneurs regroupe chaque année 120 fondateurs répartis entre Jouy-en-Josas, Saclay, Station F, Singapour et San Francisco. Eiffel Founders est leur ambassade parisienne — inspirée de l'expérience{" "}
              <a
                href="https://www.fontaine-founders.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#C9A84C", textDecoration: "none", borderBottom: "1px solid #C9A84C" }}
              >
                Fontaine Founders
              </a>{" "}
              à San Francisco.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", backgroundColor: "#E0DED6" }}>
            {xhecStats.map((stat, i) => (
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

      {/* ── Residents preview ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 1.5rem", borderBottom: "1px solid #E0DED6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
              <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 600, color: "#1B2E4B" }}>
                Les fondateurs résidents
              </h2>
            </div>
            <Link
              href="/residents"
              style={{ fontSize: "0.75rem", color: "#C9A84C", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
            >
              Voir tous les résidents <ArrowRight size={12} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", backgroundColor: "#E0DED6" }}>
            {featuredResidents.map((r) => (
              <ResidentCard key={r.id} resident={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Cohabs CTA ── */}
      <section style={{ backgroundColor: "#1B2E4B", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ maxWidth: "580px" }}>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#C9A84C", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
              Partenariat Logement
            </span>
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: "#FFFFFF", marginBottom: "1rem", lineHeight: 1.3 }}>
              Nous cherchons notre partenaire immobilier à Paris.
            </h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
              Découvrez pourquoi ce partenariat représente une opportunité durable pour les deux parties.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <Link
              href="/cohabs"
              style={{
                backgroundColor: "#C9A84C",
                color: "#000000",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "1rem 2rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                whiteSpace: "nowrap",
              }}
            >
              Voir le partenariat Cohabs <ArrowRight size={14} />
            </Link>
            <Link
              href="/cohabs-memo"
              style={{
                backgroundColor: "transparent",
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.72rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.75rem 2rem",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              Voir le memo partenariat
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section style={{ backgroundColor: "#F7F6F2", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", margin: "0 auto 1.25rem" }} />
          <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 600, color: "#1B2E4B", marginBottom: "1rem" }}>
            Prenons contact
          </h2>
          <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            Partenaire potentiel, alumni X-HEC, investisseur ou simplement curieux ? Nous sommes disponibles.
          </p>
          <a
            href="mailto:contact@eiffel-founders.com"
            style={{
              backgroundColor: "#1B2E4B",
              color: "#FFFFFF",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textDecoration: "none",
              padding: "1rem 2.5rem",
              display: "inline-block",
            }}
          >
            contact@eiffel-founders.com
          </a>
        </div>
      </section>
    </>
  );
}
