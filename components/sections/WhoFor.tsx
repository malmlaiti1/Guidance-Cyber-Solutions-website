import { Eyebrow } from "@/components/ui/Eyebrow";
import { WHO_FOR } from "@/lib/copy";

export function WhoFor() {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-28">
        <Eyebrow>{WHO_FOR.eyebrow}</Eyebrow>
        <h2
          className="mt-5 text-navy font-bold"
          style={{
            fontSize: "clamp(32px, 4.4vw, 44px)",
            letterSpacing: "-0.018em",
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          {WHO_FOR.title}
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px mt-14 border border-border"
          style={{ background: "var(--color-border)" }}
        >
          {WHO_FOR.cols.map((c) => (
            <div key={c.t} className="bg-white p-9">
              <h3
                className="text-navy font-semibold"
                style={{ fontSize: 20, letterSpacing: "-0.005em", lineHeight: 1.3 }}
              >
                {c.t}.
              </h3>
              <p className="mt-4 text-body" style={{ fontSize: 16, lineHeight: 1.6 }}>
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
