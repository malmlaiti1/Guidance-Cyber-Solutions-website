import { Eyebrow } from "@/components/ui/Eyebrow";
import { COMPANY } from "@/lib/copy";

export function Company() {
  return (
    <section id="company" className="bg-white border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <Eyebrow>{COMPANY.eyebrow}</Eyebrow>
            <h2
              className="mt-5 text-navy font-bold"
              style={{
                fontSize: "clamp(28px, 3.8vw, 40px)",
                letterSpacing: "-0.015em",
                lineHeight: 1.1,
              }}
            >
              {COMPANY.title}
            </h2>
            <p
              className="mt-7 text-body"
              style={{ fontSize: 17, lineHeight: 1.65 }}
            >
              {COMPANY.body}
            </p>
            <div
              className="mt-8 text-muted"
              style={{ fontSize: 14, lineHeight: 1.55 }}
            >
              {COMPANY.backers}
            </div>
          </div>

          <div className="md:col-span-7">
            <div
              className="border border-border space-y-px"
              style={{ background: "var(--color-border)" }}
            >
              {COMPANY.founders.map((f) => (
                <div
                  key={f.name}
                  className="flex items-start gap-4 md:gap-6 p-5 md:p-6 bg-white"
                >
                  <div
                    className="bg-navy text-white flex items-center justify-center font-semibold shrink-0"
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      fontSize: 20,
                      letterSpacing: "0.02em",
                    }}
                    aria-hidden="true"
                  >
                    {f.initials}
                  </div>
                  <div>
                    <div
                      className="text-navy font-semibold"
                      style={{ fontSize: 17, lineHeight: 1.35 }}
                    >
                      {f.name}.
                    </div>
                    <p
                      className="mt-2 text-body"
                      style={{ fontSize: 15, lineHeight: 1.6 }}
                    >
                      {f.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
