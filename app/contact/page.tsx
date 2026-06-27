"use client";
import { residents } from "@/data/residents";
import { ExternalLink, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "8rem 1.5rem 5rem", backgroundColor: "#F7F6F2", borderBottom: "1px solid #E0DED6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#C9A84C", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
            Contact
          </span>
          <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.5rem" }} />
          <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 600, color: "#1B2E4B", lineHeight: 1.1, maxWidth: "600px", marginBottom: "1.25rem" }}>
            Parlons-nous.
          </h1>
          <p style={{ fontSize: "1rem", color: "#6B6B6B", lineHeight: 1.8, maxWidth: "520px" }}>
            Partenaire, investisseur, alumni X-HEC ou simplement curieux du projet — nous sommes disponibles pour échanger.
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", marginBottom: "5rem" }}>
            {/* General */}
            <div>
              <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
              <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1B2E4B", marginBottom: "1.5rem" }}>
                Contact général
              </h2>
              <a
                href="mailto:contact@eiffel-founders.com"
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", padding: "1.25rem 1.5rem", backgroundColor: "#F7F6F2", border: "1px solid #E0DED6", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A84C")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#E0DED6")}
              >
                <Mail size={16} color="#C9A84C" />
                <div>
                  <div style={{ fontSize: "0.6rem", color: "#9E9E9E", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "JetBrains Mono, monospace", marginBottom: "2px" }}>Email</div>
                  <div style={{ fontSize: "0.875rem", color: "#1A1A1A" }}>contact@eiffel-founders.com</div>
                </div>
              </a>
            </div>

            {/* Direct contacts */}
            <div>
              <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
              <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1B2E4B", marginBottom: "1.5rem" }}>
                Contacts directs
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "#E0DED6" }}>
                {[
                  { name: "Maxime Romatet", role: "Co-fondateur Eiffel Founders", phone: "+33 7 69 18 70 16" },
                  { name: "Daphné Lamarre", role: "Co-fondatrice Eiffel Founders", phone: "+33 7 83 79 00 32" },
                ].map((c, i) => (
                  <div key={i} style={{ backgroundColor: "#F7F6F2", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                    <div>
                      <div style={{ fontSize: "0.875rem", color: "#1A1A1A", marginBottom: "2px" }}>{c.name}</div>
                      <div style={{ fontSize: "0.75rem", color: "#9E9E9E" }}>{c.role}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "JetBrains Mono, monospace", fontSize: "0.8rem", color: "#C9A84C" }}>
                      <Phone size={12} />
                      {c.phone}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Residents LinkedIn */}
          <div>
            <span style={{ display: "block", width: "48px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "1.25rem" }} />
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1B2E4B", marginBottom: "2rem" }}>
              Les résidents sur LinkedIn
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", backgroundColor: "#E0DED6" }}>
              {residents.map((r) => (
                <a
                  key={r.id}
                  href={r.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: "#F7F6F2", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none", gap: "0.5rem", transition: "background-color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FFFFFF")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F7F6F2")}
                >
                  <span style={{ fontSize: "0.875rem", color: "#1A1A1A" }}>{r.firstName} {r.lastName}</span>
                  <ExternalLink size={13} color="#9E9E9E" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
