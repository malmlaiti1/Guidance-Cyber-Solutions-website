import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GridBackdrop } from "@/components/ui/GridBackdrop";
import { Icon } from "@/components/ui/Icon";
import { HERO, HERO_PANEL } from "@/lib/copy";
import { MAILTO } from "@/lib/site";

const SEV_COLORS: Record<
  "Critical" | "Warning" | "Info",
  { color: string; bg: string }
> = {
  Critical: { color: "var(--color-critical)", bg: "var(--color-critical-bg)" },
  Warning: { color: "var(--color-warning)", bg: "var(--color-warning-bg)" },
  Info: { color: "var(--color-info)", bg: "var(--color-info-bg)" },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <GridBackdrop />
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative grid grid-cols-12 gap-10 pt-20 pb-24">
        <div className="col-span-12 lg:col-span-7">
          <Eyebrow>{HERO.eyebrow}</Eyebrow>
          <h1
            className="mt-6 text-navy font-bold"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.02,
            }}
          >
            {HERO.title}
          </h1>
          <p
            className="mt-7 text-body"
            style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 640 }}
          >
            {HERO.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={MAILTO.snapshot}>{HERO.primaryCta}</ButtonLink>
            <ButtonLink href="#how" variant="secondary">
              {HERO.secondaryCta}
            </ButtonLink>
          </div>
          <div
            className="mt-5 text-muted"
            style={{ fontSize: 13, lineHeight: 1.6 }}
          >
            {HERO.fineprint}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <HeroPanel />
        </div>
      </div>
    </section>
  );
}

function HeroPanel() {
  return (
    <Card className="overflow-hidden">
      <div className="px-5 py-4 flex items-center justify-between border-b border-border bg-off">
        <div className="flex items-center gap-2">
          <Icon name="clipboard-list" size={18} color="#0A1F44" />
          <span className="text-navy font-semibold" style={{ fontSize: 14 }}>
            {HERO_PANEL.title}
          </span>
        </div>
        <span
          className="tabular-nums text-muted font-semibold uppercase"
          style={{ fontSize: 12, letterSpacing: "0.06em" }}
        >
          Live
        </span>
      </div>

      <div className="px-5 py-5 grid grid-cols-3 gap-4 border-b border-border">
        {HERO_PANEL.stats.map((s) => (
          <Stat key={s.l} n={s.n} l={s.l} />
        ))}
      </div>

      <ul>
        {HERO_PANEL.findings.map((f, i) => {
          const sev = SEV_COLORS[f.sev];
          return (
            <li
              key={i}
              className="px-5 py-4 flex items-start gap-4"
              style={{
                borderBottom:
                  i < HERO_PANEL.findings.length - 1
                    ? "1px solid var(--color-border)"
                    : "none",
              }}
            >
              <span
                className="tabular-nums font-semibold uppercase whitespace-nowrap"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  color: sev.color,
                  background: sev.bg,
                  padding: "4px 8px",
                }}
              >
                {f.sev}
              </span>
              <div className="flex-1">
                <div
                  className="text-body font-medium"
                  style={{ fontSize: 14, lineHeight: 1.45 }}
                >
                  {f.t}
                </div>
                <div
                  className="tabular-nums mt-1 text-muted"
                  style={{ fontSize: 12 }}
                >
                  NIST 800-66 / {f.l}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="px-5 py-4 flex items-center justify-between bg-off">
        <span className="text-muted" style={{ fontSize: 13 }}>
          {HERO_PANEL.footerNote}
        </span>
        <span
          className="flex items-center gap-1.5 font-semibold"
          style={{ fontSize: 13, color: "var(--color-accent-strong)" }}
        >
          {HERO_PANEL.footerCta}{" "}
          <Icon name="arrow-right" size={14} color="#1F58D6" strokeWidth={2} />
        </span>
      </div>
    </Card>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div
        className="tabular-nums font-bold text-navy"
        style={{ fontSize: 28, letterSpacing: "-0.01em", lineHeight: 1 }}
      >
        {n}
      </div>
      <div
        className="mt-1.5 text-muted"
        style={{ fontSize: 12, lineHeight: 1.4 }}
      >
        {l}
      </div>
    </div>
  );
}
