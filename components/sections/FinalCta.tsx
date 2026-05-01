import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FINAL_CTA } from "@/lib/copy";
import { MAILTO } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="bg-off border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-28">
        <Eyebrow>{FINAL_CTA.eyebrow}</Eyebrow>
        <h2
          className="mt-5 text-navy font-bold"
          style={{
            fontSize: "clamp(36px, 5.6vw, 56px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            maxWidth: 920,
          }}
        >
          {FINAL_CTA.title}
        </h2>
        <p
          className="mt-6 text-body"
          style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 720 }}
        >
          {FINAL_CTA.body}
        </p>
        <div className="mt-9 flex flex-wrap gap-3 items-center">
          <ButtonLink href={MAILTO.requestSnapshot}>{FINAL_CTA.primaryCta}</ButtonLink>
          <a
            href={MAILTO.msp}
            className="font-semibold py-[14px] px-1.5"
            style={{ fontSize: 15, color: "var(--color-accent-strong)" }}
          >
            {FINAL_CTA.partnerLink}
          </a>
        </div>
      </div>
    </section>
  );
}
