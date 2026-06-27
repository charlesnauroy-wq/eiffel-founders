"use client";
import { useState } from "react";
import { Resident } from "@/data/residents";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

type Props = {
  resident: Resident;
};

export default function ResidentCard({ resident }: Props) {
  const [imgError, setImgError] = useState(false);
  const initials = `${resident.firstName[0]}${resident.lastName[0]}`;

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0DED6",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#C9A84C";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(201,168,76,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#E0DED6";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Photo or initials */}
      <div
        style={{
          width: "64px",
          height: "64px",
          backgroundColor: "#F0EEE8",
          border: "1px solid #E0DED6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {!imgError ? (
          <Image
            src={resident.photo}
            alt={`${resident.firstName} ${resident.lastName}`}
            width={64}
            height={64}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <span
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "1.1rem",
              color: "#C9A84C",
              userSelect: "none",
            }}
          >
            {initials}
          </span>
        )}
      </div>

      {/* Name */}
      <div
        style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#1A1A1A",
        }}
      >
        {resident.firstName} {resident.lastName}
      </div>

      {/* LinkedIn */}
      <a
        href={resident.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          fontSize: "0.7rem",
          color: "#9E9E9E",
          textDecoration: "none",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginTop: "auto",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9E9E9E")}
      >
        <ExternalLink size={11} />
        LinkedIn
      </a>
    </div>
  );
}
