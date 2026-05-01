import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { PRICING_FOOTNOTE, PRICING_TIERS } from "@/lib/copy";
import { MAILTO } from "@/lib/site";

type CtaKey = "starter" | "group" | "partner";

const CTA_HREF: Record<CtaKey, string> = {
  starter: MAILTO.starter,
  group: MAILTO.group,
  partner: MAILTO.partner,
};

export function PricingTiers() {
  return (
    <section className="bg-white border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <p
          className="mt-12 max-w-3xl text-muted"
          style={{ fontSize: 15, lineHeight: 1.65 }}
        >
          {PRICING_FOOTNOTE}
        </p>
      </div>
    </section>
  );
}

interface TierProps {
  tier: (typeof PRICING_TIERS)[number];
}

function TierCard({ tier }: TierProps) {
  const isHL = tier.highlight;
  const cardCls = "relative overflow-hidden";
  const cardStyle = isHL
    ? { background: "#0A1F44", color: "#FFFFFF", borderColor: "#0A1F44" }
    : undefined;

  return (
    <Card className={cardCls} style={cardStyle}>
      {isHL && (
        <div
          className="absolute font-semibold uppercase"
          style={{
            top: 16,
            right: 16,
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "var(--color-soft)",
            border: "1px solid var(--color-soft)",
            padding: "4px 8px",
          }}
        >
          Most popular
        </div>
      )}
      <div className="p-9">
        <div
          className="font-semibold uppercase"
          style={{
            fontSize: 12,
            letterSpacing: "0.08em",
            color: isHL ? "var(--color-soft)" : "var(--color-accent-strong)",
          }}
        >
          {tier.name}
        </div>

        <div
          className="mt-3"
          style={{
            fontSize: 16,
            lineHeight: 1.45,
            color: isHL ? "rgba(255,255,255,0.75)" : "var(--color-muted)",
          }}
        >
          {tier.forWho}
        </div>

        <div className="mt-7 flex items-baseline gap-2">
          <span
            className="tabular-nums font-bold"
            style={{
              fontSize: 48,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: isHL ? "#FFFFFF" : "var(--color-navy)",
            }}
          >
            {tier.price}
          </span>
          <span
            className="font-medium"
            style={{
              fontSize: 14,
              color: isHL ? "rgba(255,255,255,0.7)" : "var(--color-muted)",
            }}
          >
            {tier.unit}
          </span>
        </div>
        {"sub" in tier && tier.sub && (
          <div
            className="mt-2"
            style={{
              fontSize: 13,
              color: isHL ? "rgba(255,255,255,0.65)" : "var(--color-muted)",
            }}
          >
            {tier.sub}
          </div>
        )}

        <ul className="mt-8 space-y-3">
          {tier.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3"
              style={{ fontSize: 15, lineHeight: 1.5 }}
            >
              <span style={{ marginTop: 3, flexShrink: 0 }}>
                <Icon
                  name="check"
                  size={16}
                  color={isHL ? "#7BA7FF" : "#2C6BED"}
                  strokeWidth={2}
                />
              </span>
              <span
                style={{
                  color: isHL ? "rgba(255,255,255,0.92)" : "var(--color-body)",
                }}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-9">
          {/* TODO(launch): replace mailto with real form handler. */}
          <a
            href={CTA_HREF[tier.cta.href]}
            className="inline-flex items-center justify-center gap-2.5 bg-accent text-white font-semibold w-full hover:bg-[var(--color-accent-hover)] transition-colors"
            style={{
              padding: "12px 20px",
              fontSize: 15,
            }}
          >
            {tier.cta.label}
          </a>
        </div>
      </div>
    </Card>
  );
}
