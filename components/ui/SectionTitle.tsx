type SectionTitleProps = {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionTitle({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            color: "#C9A84C",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          {label}
        </span>
      )}
      {centered ? (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
          <span
            style={{
              display: "block",
              width: "48px",
              height: "2px",
              backgroundColor: "#C9A84C",
            }}
          />
        </div>
      ) : (
        <span
          style={{
            display: "block",
            width: "48px",
            height: "2px",
            backgroundColor: "#C9A84C",
            marginBottom: "1.25rem",
          }}
        />
      )}
      <h2
        style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          fontWeight: 600,
          color: light ? "#0A0A0A" : "#F5F5F5",
          lineHeight: 1.2,
          marginBottom: subtitle ? "1rem" : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: "1rem",
            color: light ? "#555555" : "#888888",
            lineHeight: 1.7,
            maxWidth: centered ? "560px" : "none",
            margin: centered ? "0 auto" : 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
