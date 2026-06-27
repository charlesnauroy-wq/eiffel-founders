import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#EEECEA", borderTop: "1px solid #E0DED6", padding: "3rem 1.5rem" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
          marginBottom: "2.5rem",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.1rem", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.25rem" }}>
            Eiffel Founders
          </div>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: "#C9A84C", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            X-HEC · Paris
          </div>
          <p style={{ fontSize: "0.8rem", color: "#6B6B6B", lineHeight: 1.6, maxWidth: "220px" }}>
            Le camp de base parisien des fondateurs X-HEC Entrepreneurs.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div style={{ fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem", fontFamily: "JetBrains Mono, monospace" }}>
            Navigation
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              { href: "/", label: "Home" },
              { href: "/residents", label: "Résidents" },
              { href: "/events", label: "Événements" },
              { href: "/partners", label: "Partenaires" },
              { href: "/cohabs", label: "Cohabs" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ fontSize: "0.8rem", color: "#6B6B6B", textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem", fontFamily: "JetBrains Mono, monospace" }}>
            Contact
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <a href="mailto:contact@eiffel-founders.com" style={{ fontSize: "0.8rem", color: "#1A1A1A", textDecoration: "none" }}>
              contact@eiffel-founders.com
            </a>
            <span style={{ fontSize: "0.8rem", color: "#6B6B6B" }}>Maxime Romatet · +33 7 69 18 70 16</span>
            <span style={{ fontSize: "0.8rem", color: "#6B6B6B" }}>Daphné Lamarre · +33 7 83 79 00 32</span>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #E0DED6", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
        <span style={{ fontSize: "0.7rem", color: "#9E9E9E" }}>© 2026 Eiffel Founders.</span>
        <Link href="/cohabs" style={{ fontSize: "0.7rem", color: "#C9A84C", textDecoration: "none", letterSpacing: "0.08em" }}>
          Partenariat Cohabs →
        </Link>
      </div>
    </footer>
  );
}
