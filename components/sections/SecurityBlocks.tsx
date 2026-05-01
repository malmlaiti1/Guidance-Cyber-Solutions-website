import type { ReactNode } from "react";

import { Icon, type IconName } from "@/components/ui/Icon";
import { COMPLIANCE_ROWS, SUBPROCESSORS } from "@/lib/copy";

interface SecuritySectionProps {
  id: string;
  n: string;
  title: string;
  icon: IconName;
  children: ReactNode;
}

export function SecuritySection({ id, n, title, icon, children }: SecuritySectionProps) {
  return (
    <section id={id} className="border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 py-20 bg-white">
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-3">
            <Icon name={icon} size={28} color="#0A1F44" />
            <span
              className="tabular-nums font-semibold uppercase"
              style={{
                fontSize: 12,
                letterSpacing: "0.08em",
                color: "var(--color-accent-strong)",
              }}
            >
              {n}
            </span>
          </div>
          <h2
            className="mt-5 text-navy font-bold"
            style={{ fontSize: 28, letterSpacing: "-0.01em", lineHeight: 1.2 }}
          >
            {title}
          </h2>
        </div>
        <div
          className="col-span-12 md:col-span-8 text-body"
          style={{ fontSize: 16, lineHeight: 1.65 }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

const TONE_STYLES: Record<
  "success" | "warning" | "muted",
  { color: string; bg: string }
> = {
  success: { color: "var(--color-success)", bg: "var(--color-success-bg)" },
  warning: { color: "var(--color-warning)", bg: "var(--color-warning-bg)" },
  muted: { color: "var(--color-muted)", bg: "var(--color-off)" },
};

export function ComplianceStatus() {
  return (
    <div className="border border-border">
      <div className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-border bg-off">
        <HeaderCell className="col-span-5">Certification</HeaderCell>
        <HeaderCell className="col-span-3">Status</HeaderCell>
        <HeaderCell className="col-span-4">Note</HeaderCell>
      </div>
      {COMPLIANCE_ROWS.map((r, i) => {
        const tone = TONE_STYLES[r.tone];
        return (
          <div
            key={r.name}
            className="grid grid-cols-12 gap-4 px-5 py-4 items-center"
            style={{
              borderBottom:
                i < COMPLIANCE_ROWS.length - 1 ? "1px solid var(--color-border)" : "none",
            }}
          >
            <div
              className="col-span-5 text-navy font-semibold"
              style={{ fontSize: 15 }}
            >
              {r.name}
            </div>
            <div className="col-span-3">
              <span
                className="font-semibold uppercase"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  color: tone.color,
                  background: tone.bg,
                  padding: "4px 8px",
                }}
              >
                {r.status}
              </span>
            </div>
            <div className="col-span-4 text-body" style={{ fontSize: 14, lineHeight: 1.5 }}>
              {r.note}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function SubprocessorList() {
  return (
    <div className="border border-border">
      <div className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-border bg-off">
        <HeaderCell className="col-span-4">Vendor</HeaderCell>
        <HeaderCell className="col-span-6">Role</HeaderCell>
        <HeaderCell className="col-span-2">Region</HeaderCell>
      </div>
      {SUBPROCESSORS.map((r, i) => (
        <div
          key={r.name}
          className="grid grid-cols-12 gap-4 px-5 py-4 items-center"
          style={{
            borderBottom:
              i < SUBPROCESSORS.length - 1 ? "1px solid var(--color-border)" : "none",
          }}
        >
          <div
            className="col-span-4 text-navy font-semibold"
            style={{ fontSize: 15 }}
          >
            {r.name}
          </div>
          <div
            className="col-span-6 text-body"
            style={{ fontSize: 14, lineHeight: 1.5 }}
          >
            {r.role}
          </div>
          <div
            className="col-span-2 tabular-nums text-muted"
            style={{ fontSize: 14 }}
          >
            {r.region}
          </div>
        </div>
      ))}
    </div>
  );
}

function HeaderCell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`font-semibold uppercase text-muted ${className}`.trim()}
      style={{ fontSize: 12, letterSpacing: "0.08em" }}
    >
      {children}
    </div>
  );
}
