"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/residents", label: "Résidents" },
  { href: "/events", label: "Événements" },
  { href: "/partners", label: "Partenaires" },
  { href: "/cohabs", label: "Cohabs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/cohabs-memo") return null;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(247, 246, 242, 0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E0DED6",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", flexDirection: "column", gap: "1px", textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#1A1A1A",
              letterSpacing: "0.02em",
            }}
          >
            Eiffel Founders
          </span>
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.6rem",
              color: "#C9A84C",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            X-HEC · Paris
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === "/" && pathname === "/");
            const isCohabs = link.href === "/cohabs";
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: isCohabs ? "#C9A84C" : isActive ? "#1A1A1A" : "#6B6B6B",
                  fontWeight: isActive || isCohabs ? 600 : 400,
                  borderBottom: isCohabs ? "1px solid #C9A84C" : "none",
                  paddingBottom: isCohabs ? "2px" : "0",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:contact@eiffel-founders.com"
            style={{
              backgroundColor: "#1B2E4B",
              color: "#FFFFFF",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0.55rem 1.25rem",
              transition: "background-color 0.2s",
            }}
          >
            Partner with us
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#1A1A1A", cursor: "pointer", display: "none" }}
          className="show-mobile"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: "#F7F6F2",
            borderTop: "1px solid #E0DED6",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
          className="show-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: "0.9rem",
                color: link.href === "/cohabs" ? "#C9A84C" : "#6B6B6B",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:contact@eiffel-founders.com"
            style={{
              backgroundColor: "#1B2E4B",
              color: "#FFFFFF",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0.75rem 1.5rem",
              textAlign: "center",
              marginTop: "0.5rem",
            }}
          >
            Partner with us
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
