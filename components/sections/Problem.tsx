import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PROBLEM } from "@/lib/copy";

export function Problem() {
  return (
    <section className="bg-off border-y border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24">
        <Eyebrow>{PROBLEM.eyebrow}</Eyebrow>
        <h2
          className="mt-5 text-navy font-bold"
          style={{
            fontSize: "clamp(32px, 4.4vw, 44px)",
            letterSpacing: "-0.018em",
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          {PROBLEM.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {PROBLEM.stats.map((s) => (
            <Card key={s.n} className="p-8">
              <div
                className="tabular-nums font-bold text-navy"
                style={{ fontSize: 56, letterSpacing: "-0.02em", lineHeight: 1 }}
              >
                {s.n}
              </div>
              <p
                className="mt-4 text-body"
                style={{ fontSize: 15, lineHeight: 1.55 }}
              >
                {s.l}
              </p>
              <div
                className="mt-5 pt-4 tabular-nums text-muted border-t border-border"
                style={{ fontSize: 12, letterSpacing: "0.04em" }}
              >
                Source: {s.src}
              </div>
            </Card>
          ))}
        </div>

        <p
          className="mt-12 max-w-3xl text-body"
          style={{ fontSize: 18, lineHeight: 1.6 }}
        >
          {PROBLEM.body}
        </p>
      </div>
    </section>
  );
}
