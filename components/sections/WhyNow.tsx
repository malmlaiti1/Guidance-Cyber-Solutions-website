import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GridBackdrop } from "@/components/ui/GridBackdrop";
import { WHY_NOW } from "@/lib/copy";
import { MAILTO } from "@/lib/site";

export function WhyNow() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <GridBackdrop dark size={80} />
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 py-32">
        <div className="md:col-span-5">
          <Eyebrow tone="soft">{WHY_NOW.eyebrow}</Eyebrow>
          <h2
            className="mt-5 font-bold text-white"
            style={{
              fontSize: "clamp(34px, 4.6vw, 48px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {WHY_NOW.title}
          </h2>
        </div>
        <div className="md:col-span-7 self-center">
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {WHY_NOW.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={MAILTO.snapshot}>{WHY_NOW.cta}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
