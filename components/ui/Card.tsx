import type { CSSProperties, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "article" | "section";
}

export function Card({ children, className = "", style, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={`bg-white border border-border rounded-lg shadow-card ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
