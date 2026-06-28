"use client";

import { residents } from "@/data/residents";

export default function CohabsMemoPage() {
  return (
    <>
      {/* Print button */}
      <div
        className="no-print"
        style={{ position: "fixed", top: "1.5rem", right: "1.5rem", zIndex: 100, display: "flex", gap: "0.75rem" }}
      >
        <button
          onClick={() => window.print()}
          style={{ backgroundColor: "#1B2E4B", color: "#FFFFFF", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", border: "none", padding: "0.75rem 1.5rem", cursor: "pointer" }}
        >
          Imprimer / Exporter PDF
        </button>
        <a
          href="/cohabs"
          style={{ backgroundColor: "#F7F6F2", color: "#6B6B6B", fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none", padding: "0.75rem 1.5rem", border: "1px solid #E0DED6" }}
        >
          ← Retour
        </a>
      </div>

      {/* Memo */}
      <div style={{ backgroundColor: "white", color: "#111111", minHeight: "100vh", fontFamily: "Georgia, serif" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 48px" }}>

          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px", paddingBottom: "24px", borderBottom: "2px solid #111111" }}>
            <div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#111111", fontFamily: "Georgia, serif", letterSpacing: "0.02em", marginBottom: "4px" }}>
                Eiffel Founders
              </div>
              <div style={{ fontSize: "10px", color: "#888888", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "Courier New, monospace" }}>
                X-HEC Entrepreneurs · Paris · 2026
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "10px", color: "#888888", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Courier New, monospace", marginBottom: "4px" }}>
                Mémo Partenariat
              </div>
              <div style={{ fontSize: "11px", color: "#555555", fontFamily: "Courier New, monospace" }}>Juin 2026</div>
            </div>
          </div>

          {/* Title */}
          <div style={{ marginBottom: "36px" }}>
            <h1 style={{ fontSize: "26px", fontWeight: 700, color: "#111111", fontFamily: "Georgia, serif", lineHeight: 1.25, marginBottom: "8px" }}>
              Proposition de partenariat logement premium
            </h1>
            <p style={{ fontSize: "13px", color: "#555555", fontStyle: "italic", fontFamily: "Georgia, serif" }}>
              À l'attention de l'équipe Cohabs — Confidentiel
            </p>
          </div>

          {/* Section helper */}
          {[
            {
              title: "Le projet",
              content: (
                <>
                  <p style={{ fontSize: "13px", color: "#333333", lineHeight: 1.8, fontFamily: "Georgia, serif" }}>
                    Eiffel Founders est une hacker house parisienne portée par des fondateurs du programme X-HEC Entrepreneurs. Le projet réunit huit fondateurs dans un même lieu à Paris, avec trois missions : construire, se retrouver et organiser des événements pour l'écosystème entrepreneurial X-HEC.
                  </p>
                  <p style={{ fontSize: "13px", color: "#333333", lineHeight: 1.8, fontFamily: "Georgia, serif", marginTop: "10px" }}>
                    Inspiré de l'expérience{" "}
                    <a href="https://www.fontaine-founders.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C", textDecoration: "none" }}>
                      Fontaine Founders
                    </a>{" "}
                    à San Francisco, Eiffel Founders est la continuation parisienne d'un modèle éprouvé : une cohorte de fondateurs sous le même toit crée une dynamique collective impossible à reproduire à distance.
                  </p>
                </>
              ),
            },
          ].map((s) => (
            <section key={s.title} style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "11px", fontWeight: 700, color: "#111111", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "Courier New, monospace", marginBottom: "12px", paddingBottom: "6px", borderBottom: "1px solid #DDDDDD" }}>
                {s.title}
              </h2>
              {s.content}
            </section>
          ))}

          {/* Les résidents */}
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: 700, color: "#111111", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "Courier New, monospace", marginBottom: "12px", paddingBottom: "6px", borderBottom: "1px solid #DDDDDD" }}>
              Les 8 résidents
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0" }}>
              {residents.map((r, i) => (
                <div key={r.id} style={{ padding: "8px 12px", borderBottom: "1px solid #F0F0F0", borderRight: i % 2 === 0 ? "1px solid #F0F0F0" : "none" }}>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#111111", fontFamily: "Georgia, serif" }}>
                    {r.firstName} {r.lastName}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Ce que Cohabs gagne */}
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: 700, color: "#111111", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "Courier New, monospace", marginBottom: "12px", paddingBottom: "6px", borderBottom: "1px solid #DDDDDD" }}>
              Ce que Cohabs gagne
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                "Un partenariat durable, renouvelable chaque année avec la nouvelle promotion X-HEC.",
                "Un groupe sérieux et présélectionné, issu du programme X-HEC Entrepreneurs.",
                "Un lieu habité, animé et valorisé — mis en valeur en permanence.",
                "Une visibilité auprès de l'écosystème X-HEC, startup, alumni, tech et VC parisien.",
                "Un potentiel de co-organisation d'événements et de présence dans l'écosystème.",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "8px 0", borderBottom: "1px solid #F0F0F0" }}>
                  <span style={{ fontFamily: "Courier New, monospace", fontSize: "10px", color: "#AAAAAA", paddingTop: "2px", minWidth: "20px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "12px", color: "#333333", lineHeight: 1.6, fontFamily: "Georgia, serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: 700, color: "#111111", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "Courier New, monospace", marginBottom: "12px", paddingBottom: "6px", borderBottom: "1px solid #DDDDDD" }}>
              Calendrier
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { date: "Juillet 2026", title: "Finalisation & signature", desc: "Confirmation des conditions et signature du bail." },
                { date: "Août — Sep. 2026", title: "Installation", desc: "Installation progressive selon un calendrier convenu ensemble." },
                { date: "Septembre 2026", title: "Premiers événements", desc: "Lancement du programme événementiel Eiffel Founders." },
                { date: "2026 — 2027", title: "Développement", desc: "Montée en puissance et préparation du relais avec la promotion suivante." },
              ].map((item, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: "16px", padding: "10px 0", borderBottom: "1px solid #F0F0F0" }}>
                  <span style={{ fontFamily: "Courier New, monospace", fontSize: "10px", color: "#888888", letterSpacing: "0.06em", paddingTop: "2px" }}>{item.date}</span>
                  <div>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#111111", fontFamily: "Georgia, serif" }}>{item.title}</span>
                    <span style={{ fontSize: "11px", color: "#666666", fontFamily: "Georgia, serif", display: "block" }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Leviers */}
          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: 700, color: "#111111", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "Courier New, monospace", marginBottom: "12px", paddingBottom: "6px", borderBottom: "1px solid #DDDDDD" }}>
              Leviers de partenariat à discuter
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0" }}>
              {[
                "Partenariat long terme et pluriannuel",
                "Accompagnement événementiel : visibilité, co-branding, etc.",
                "Flexibilité pendant la période de travaux",
                "Suppression ou réduction des frais de dossier",
                "Semaine de transition avant emménagement",
                "Conditions locatives adaptées à la première année",
              ].map((item, i) => (
                <div key={i} style={{ padding: "8px 12px", borderBottom: "1px solid #F0F0F0", borderRight: i % 2 === 0 ? "1px solid #F0F0F0" : "none", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#AAAAAA", flexShrink: 0 }} />
                  <span style={{ fontSize: "11px", color: "#444444", fontFamily: "Georgia, serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <div style={{ borderTop: "2px solid #111111", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#111111", fontFamily: "Georgia, serif", marginBottom: "6px" }}>Contacts directs</div>
              <div style={{ fontSize: "11px", color: "#555555", fontFamily: "Courier New, monospace" }}>Maxime Romatet · +33 7 69 18 70 16</div>
              <div style={{ fontSize: "11px", color: "#555555", fontFamily: "Courier New, monospace" }}>Daphné Lamarre · +33 7 83 79 00 32</div>
              <div style={{ fontSize: "11px", color: "#555555", fontFamily: "Courier New, monospace", marginTop: "4px" }}>contact@eiffel-founders.com</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "11px", color: "#888888", fontFamily: "Courier New, monospace" }}>eiffel-founders.com</div>
              <div style={{ fontSize: "10px", color: "#AAAAAA", fontFamily: "Courier New, monospace", marginTop: "4px" }}>Document confidentiel · Juin 2026</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; padding: 0; }
          @page { margin: 0; size: A4; }
        }
      `}</style>
    </>
  );
}
