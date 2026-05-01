import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { HOW } from "@/lib/copy";

export function HowItWorks() {
  return (
    <section id="how" className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-28">
        <Eyebrow>{HOW.eyebrow}</Eyebrow>
        <h2
          className="mt-5 text-navy font-bold"
          style={{
            fontSize: "clamp(32px, 4.4vw, 44px)",
            letterSpacing: "-0.018em",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {HOW.title}
        </h2>

        <div className="mt-14 bg-off border border-border p-10">
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-2 relative">
            {HOW.steps.map((s, i) => (
              <li key={s.n} className="relative md:px-3">
                {i < HOW.steps.length - 1 && (
                  <div
                    className="hidden md:block absolute z-10"
                    style={{ top: 40, right: -10 }}
                    aria-hidden="true"
                  >
                    <Icon name="arrow-right" size={16} color="#2C6BED" strokeWidth={2} />
                  </div>
                )}
                <div
                  className="bg-white flex items-center justify-center"
                  style={{
                    border: "2px solid #0A1F44",
                    borderRadius: 8,
                    height: 96,
                  }}
                >
                  <Icon name={s.icon} size={44} color="#0A1F44" strokeWidth={2} />
                </div>
                <div className="mt-5">
                  <div
                    className="tabular-nums font-semibold uppercase"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.08em",
                      color: "var(--color-accent-strong)",
                    }}
                  >
                    {s.n} / {s.t}
                  </div>
                  <p
                    className="mt-2 text-body"
                    style={{ fontSize: 15, lineHeight: 1.55 }}
                  >
                    {s.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
