import { Company } from "@/components/sections/Company";
import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Problem } from "@/components/sections/Problem";
import { WhoFor } from "@/components/sections/WhoFor";
import { WhyNow } from "@/components/sections/WhyNow";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <WhoFor />
      <WhyNow />
      <Company />
      <FinalCta />
    </main>
  );
}
