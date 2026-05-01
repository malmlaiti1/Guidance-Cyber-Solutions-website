import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { FEATURES } from "@/lib/copy";

export function Features() {
  return (
    <section id="product" className="bg-off border-y border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-28">
        <Eyebrow>{FEATURES.eyebrow}</Eyebrow>
        <h2
          className="mt-5 text-navy font-bold"
          style={{
            fontSize: "clamp(32px, 4.4vw, 44px)",
            letterSpacing: "-0.018em",
            lineHeight: 1.1,
            maxWidth: 880,
          }}
        >
          {FEATURES.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {FEATURES.items.map((f) => (
            <Card key={f.t} className="p-9">
              <Icon name={f.icon} size={32} color="#0A1F44" />
              <h3
                className="mt-6 text-navy font-semibold"
                style={{
                  fontSize: 22,
                  letterSpacing: "-0.005em",
                  lineHeight: 1.25,
                }}
              >
                {f.t}
              </h3>
              <p className="mt-3 text-body" style={{ fontSize: 16, lineHeight: 1.6 }}>
                {f.d}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
