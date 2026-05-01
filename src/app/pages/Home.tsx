import { Hero } from "@/app/components/Hero";
import { Features } from "@/app/components/Features";
import { HowItWorks } from "@/app/components/HowItWorks";
import { FAQ } from "@/app/components/FAQ";
import { CTA } from "@/app/components/CTA";

export function Home() {
  return (
    <>
      <Hero />
      <div id="features">
        <Features />
      </div>
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  );
}
