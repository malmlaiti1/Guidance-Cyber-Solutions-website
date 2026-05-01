import type { CSSProperties, ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  style?: CSSProperties;
  as?: "section" | "div";
}

export function Section({
  id,
  children,
  className = "",
  innerClassName = "",
  style,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={`relative ${className}`.trim()} style={style}>
      <div
        className={`max-w-[1280px] mx-auto px-6 md:px-10 relative ${innerClassName}`.trim()}
      >
        {children}
      </div>
    </Tag>
  );
}
