"use client";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { valueProps, timeline } from "@/data/partnership";

export default function CohabsPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "8rem 1.5rem 5rem",
          backgroundColor: "#F7F6F2",
          borderBottom: "1px solid #E0DED6",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(#E0DED6 1px, transparent 1px), linear-gradient(90deg, #E0DED6 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#C9A84C", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
            Proposition de partenariat · Juin 2026
          </span>
          <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.5rem" }} />
          <h1
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 600,
              color: "#1B2E4B",
              lineHeight: 1.1,
              maxWidth: "900px",
              marginBottom: "1.5rem",
            }}
          >
            Pourquoi Cohabs peut devenir notre partenaire immobilier premium.
          </h1>
          <p style={{ fontSize: "1rem", color: "#6B6B6B", lineHeight: 1.8, marginBottom: "3rem" }}>
            Eiffel Founders ne recherche pas un simple bail. Nous cherchons un partenaire immobilier qui comprend la valeur de notre projet et qui souhaite construire une relation durable avec l'écosystème des Eiffel Founders.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/cohabs-memo"
              style={{ backgroundColor: "#1B2E4B", color: "#FFFFFF", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", padding: "1rem 2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Download size={14} /> Télécharger le memo
            </Link>
            <a
              href="mailto:contact@eiffel-founders.com"
              style={{ backgroundColor: "transparent", color: "#1A1A1A", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", padding: "1rem 2rem", border: "1px solid #E0DED6", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem" }}>
            <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, color: "#1B2E4B", marginBottom: "0.75rem" }}>
              Ce que Cohabs gagne dans ce partenariat
            </h2>
            <p style={{ color: "#6B6B6B", fontSize: "0.95rem", maxWidth: "560px", lineHeight: 1.7 }}>
              Accueillir Eiffel Founders, c'est bien plus que louer des chambres. C'est héberger un projet entrepreneurial structuré, crédible et durable.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "#E0DED6" }}>
            {valueProps.map((prop) => (
              <div
                key={prop.number}
                style={{ backgroundColor: "#FFFFFF", padding: "2.5rem 3rem", display: "grid", gridTemplateColumns: "72px 1fr", gap: "2rem", alignItems: "start", transition: "background-color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "#F7F6F2")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "#FFFFFF")}
              >
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "1.25rem", color: "#E0DED6", fontWeight: 700 }}>
                  {prop.number}
                </span>
                <div>
                  <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.15rem", fontWeight: 600, color: "#1B2E4B", marginBottom: "0.6rem" }}>
                    {prop.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.8 }}>{prop.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The properties */}
      <section style={{ backgroundColor: "#F7F6F2", borderTop: "1px solid #E0DED6", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: "#1B2E4B", marginBottom: "0.75rem" }}>
              Les biens en discussion avec Cohabs
            </h2>
            </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1px", backgroundColor: "#E0DED6", marginBottom: "2rem" }}>
            {[
              {
                arr: "14e arrondissement",
                desc: "Bien en cours de travaux.",
              },
              {
                arr: "19e arrondissement — Buttes-Chaumont",
                desc: "Bien en cours de travaux.",
              },
            ].map((property, i) => (
              <div key={i} style={{ backgroundColor: "#FFFFFF", padding: "2.5rem" }}>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {property.arr}
                </div>
                <p style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: 1.7 }}>{property.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DED6", padding: "1.5rem 2rem" }}>
            <p style={{ fontSize: "0.85rem", color: "#6B6B6B", lineHeight: 1.7 }}>
              Nous sommes ouverts à discuter pour emménager en septembre dans un bien encore en travaux si cela facilite le lancement. Nous attendons les détails complets de Cohabs pour confirmer notre intérêt et discuter des conditions. Nous faisons confiance à Cohabs pour nous proposer le bien le plus adapté à notre projet. Notre priorité est de démarrer dans les meilleures conditions pour les deux parties, avec un calendrier réaliste et une installation progressive possible.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E0DED6", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: "#1B2E4B" }}>
              Calendrier envisagé
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {timeline.map((item, i) => (
              <div
                key={i}
                style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "3rem", paddingBottom: "3rem", position: "relative" }}
              >
                {i < timeline.length - 1 && (
                  <div style={{ position: "absolute", left: "calc(180px + 3rem/2 - 0.5px)", top: "24px", bottom: "0", width: "1px", backgroundColor: "#E0DED6" }} />
                )}
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", color: "#C9A84C", letterSpacing: "0.1em", paddingTop: "4px" }}>
                  {item.date}
                </span>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "-1.75rem", top: "6px", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#C9A84C", border: "2px solid #FFFFFF", display: "block" }} />
                  <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1rem", fontWeight: 600, color: "#1B2E4B", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#6B6B6B", lineHeight: 1.7 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section style={{ backgroundColor: "#F7F6F2", borderTop: "1px solid #E0DED6", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div>
              <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
              <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: "#1B2E4B", marginBottom: "1.25rem", lineHeight: 1.3 }}>
                Un partenariat pensé pour durer
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#6B6B6B", lineHeight: 1.8, marginBottom: "1rem" }}>
                Eiffel Founders n'est pas un projet ponctuel. C'est une structure pérenne ancrée dans le programme X-HEC Entrepreneurs, qui regroupe chaque année une nouvelle promotion de 120 fondateurs.
              </p>
              <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.8 }}>
                À l'issue de chaque année, la promotion suivante a vocation à reprendre le flambeau dans le même lieu. Pour Cohabs, c'est la garantie d'un partenariat renouvelable, d'une relation pluriannuelle avec un vivier annuel de fondateurs X-HEC — à l'image de ce que{" "}
                <a href="https://www.fontaine-founders.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C", textDecoration: "none", borderBottom: "1px solid #C9A84C" }}>
                  Fontaine Founders
                </a>{" "}
                a démontré à San Francisco.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "#E0DED6" }}>
              {[
                { year: "2026 — 2027", desc: "Promotion Eiffel Founders #1 — 8 fondateurs en résidence." },
                { year: "2027 — 2028", desc: "Transmission à la promotion X-HEC Entrepreneurs suivante." },
                { year: "2028+", desc: "Eiffel Founders devient un actif durable de l'écosystème X-HEC à Paris." },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: "#FFFFFF", padding: "1.5rem 2rem" }}>
                  <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", color: "#C9A84C", marginBottom: "0.5rem", letterSpacing: "0.1em" }}>{item.year}</div>
                  <p style={{ fontSize: "0.85rem", color: "#6B6B6B", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership terms */}
      <section style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E0DED6", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem", maxWidth: "640px" }}>
            <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: "#1B2E4B", marginBottom: "1rem" }}>
              Leviers de partenariat à co-construire
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.8 }}>
              Nous souhaitons construire avec Cohabs un partenariat long terme autour d'un lieu habité, animé et valorisé. Plusieurs leviers peuvent être discutés pour faciliter le lancement et créer les conditions d'une relation durable.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", backgroundColor: "#E0DED6" }}>
            {[
              { n: "01", title: "Partenariat long terme", body: "Engagement pluriannuel avec reconduction possible à chaque nouvelle promotion X-HEC Entrepreneurs." },
              { n: "02", title: "Accompagnement événementiel", body: "Association de Cohabs à nos événements : visibilité, co-branding, etc." },
              { n: "03", title: "Flexibilité pendant les travaux", body: "Installation progressive possible avant la finalisation complète des travaux, selon un calendrier convenu ensemble." },
              { n: "04", title: "Frais d'entrée allégés", body: "Suppression ou réduction des frais de dossier en contrepartie de l'engagement long terme et de la visibilité offerte." },
              { n: "05", title: "Période d'installation", body: "Une semaine de transition en août pour préparer le lieu avant l'emménagement officiel." },
              { n: "06", title: "Conditions de lancement", body: "Conditions locatives adaptées à la première année, reflétant la valeur du partenariat dans sa globalité." },
            ].map((item) => (
              <div key={item.n} style={{ backgroundColor: "#FFFFFF", padding: "2rem 2.5rem" }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "0.15em", display: "block", marginBottom: "0.75rem" }}>
                  {item.n}
                </span>
                <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1rem", fontWeight: 600, color: "#1B2E4B", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.825rem", color: "#6B6B6B", lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: "#1B2E4B", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", margin: "0 auto 1.25rem" }} />
          <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 600, color: "#FFFFFF", marginBottom: "1.25rem", lineHeight: 1.25 }}>
            Prêts à construire ce partenariat avec vous.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: "3rem" }}>
            Nous sommes disponibles pour un échange approfondi et la visite des biens proposés ;)
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <Link
              href="/cohabs-memo"
              style={{ backgroundColor: "#C9A84C", color: "#000000", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", padding: "1rem 2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Download size={14} /> Memo partenariat
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", backgroundColor: "rgba(255,255,255,0.08)", maxWidth: "500px", margin: "0 auto" }}>
            {[
              { name: "Maxime Romatet", phone: "+33 7 69 18 70 16" },
              { name: "Daphné Lamarre", phone: "+33 7 83 79 00 32" },
            ].map((c, i) => (
              <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.04)", padding: "1.25rem 1.75rem", textAlign: "center" }}>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)", marginBottom: "0.25rem" }}>{c.name}</div>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", color: "#C9A84C" }}>{c.phone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
