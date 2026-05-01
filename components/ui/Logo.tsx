import type { CSSProperties } from "react";

type Variant = "primary" | "compact" | "stacked" | "mark";

interface LogoProps {
  variant?: Variant;
  scale?: number;
  reversed?: boolean;
  className?: string;
}

interface MarkProps {
  size?: number;
  reversed?: boolean;
  className?: string;
}

export function GMark({ size = 40, reversed = false, className }: MarkProps) {
  const stroke = reversed ? "#FFFFFF" : "#0A1F44";
  const strokeAccent = reversed ? "#FFFFFF" : "#2C6BED";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 22 L20 6 L34 22 L34 30 L20 18 L6 30 Z"
        stroke={stroke}
        strokeWidth={2.4}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 14 L26 26 L20 24"
        stroke={strokeAccent}
        strokeWidth={2.4}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

interface WordmarkProps {
  size?: number;
  includeSolutions?: boolean;
  reversed?: boolean;
}

function Wordmark({ size = 28, includeSolutions = true, reversed = false }: WordmarkProps) {
  const guidance = reversed ? "#FFFFFF" : "#0A1F44";
  const cyber = reversed ? "#FFFFFF" : "#2C6BED";
  const solutions = reversed ? "rgba(255,255,255,0.7)" : "#5A6478";
  const style: CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: size,
    letterSpacing: "-0.02em",
    lineHeight: 1,
    whiteSpace: "nowrap",
  };
  return (
    <span style={style}>
      <span style={{ color: guidance }}>Guidance</span>
      <span style={{ color: cyber }}> Cyber</span>
      {includeSolutions && (
        <span
          style={{
            color: solutions,
            fontSize: size * 0.62,
            fontWeight: 500,
            marginLeft: size * 0.25,
          }}
        >
          Solutions
        </span>
      )}
    </span>
  );
}

export function Logo({ variant = "primary", scale = 1, reversed = false, className }: LogoProps) {
  if (variant === "mark") {
    return <GMark size={64 * scale} reversed={reversed} className={className} />;
  }
  if (variant === "stacked") {
    return (
      <span
        className={className}
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12 * scale,
        }}
      >
        <GMark size={56 * scale} reversed={reversed} />
        <Wordmark size={22 * scale} reversed={reversed} />
      </span>
    );
  }
  if (variant === "compact") {
    return (
      <span
        className={className}
        style={{ display: "inline-flex", alignItems: "center", gap: 12 * scale }}
      >
        <GMark size={36 * scale} reversed={reversed} />
        <Wordmark size={26 * scale} includeSolutions={false} reversed={reversed} />
      </span>
    );
  }
  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: 14 * scale }}
    >
      <GMark size={40 * scale} reversed={reversed} />
      <Wordmark size={28 * scale} reversed={reversed} />
    </span>
  );
}
