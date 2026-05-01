import type { Metadata } from "next";

import { Faq } from "@/components/sections/Faq";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { PageHead } from "@/components/ui/PageHead";
import { PRICING_HEAD } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Per-location pricing for multi-location healthcare practices. No per-asset surprises. No 12-month enterprise contracts.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing / Guidance Cyber Solutions",
    description:
      "Per-location pricing for multi-location healthcare practices. No per-asset surprises.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <main id="main">
      <PageHead
        eyebrow={PRICING_HEAD.eyebrow}
        title={PRICING_HEAD.title}
        subtitle={PRICING_HEAD.subtitle}
      />
      <PricingTiers />
      <Faq />
    </main>
  );
}
