import { Eyebrow } from "@/components/ui/Eyebrow";
import { GridBackdrop } from "@/components/ui/GridBackdrop";

interface PageHeadProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHead({ eyebrow, title, subtitle }: PageHeadProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <GridBackdrop />
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative pt-24 pb-16">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          className="mt-5 text-navy font-bold"
          style={{
            fontSize: "clamp(36px, 5.6vw, 56px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            maxWidth: 920,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 text-body"
            style={{ fontSize: 18, lineHeight: 1.55, maxWidth: 720 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
