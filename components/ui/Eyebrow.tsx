import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "soft";
}

export function Eyebrow({ children, className = "", tone = "accent" }: EyebrowProps) {
  const color = tone === "soft" ? "text-soft" : "text-[var(--color-accent-strong)]";
  return (
    <div
      className={`font-semibold text-xs uppercase ${color} ${className}`.trim()}
      style={{ letterSpacing: "0.08em" }}
    >
      {children}
    </div>
  );
}
