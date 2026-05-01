import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GridBackdrop } from "@/components/ui/GridBackdrop";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for is not here.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" className="relative overflow-hidden bg-white">
      <GridBackdrop />
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative pt-32 pb-40">
        <Eyebrow>404</Eyebrow>
        <h1
          className="mt-5 text-navy font-bold"
          style={{
            fontSize: "clamp(40px, 6vw, 64px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.02,
            maxWidth: 920,
          }}
        >
          This page isn&rsquo;t here.
        </h1>
        <p
          className="mt-6 text-body"
          style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 640 }}
        >
          The link may be broken or the page may have moved. The rest of the site is one
          click away.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/pricing" variant="secondary">
            See pricing
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
