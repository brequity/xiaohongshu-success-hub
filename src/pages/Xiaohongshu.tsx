import { Navigation } from "@/components/Navigation";
import { Features } from "@/components/Features";
import { PlatformComparison } from "@/components/PlatformComparison";
import { Hero } from "@/components/Hero";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CTASection } from "@/components/sections/CTASection";

const Xiaohongshu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <PlatformComparison />
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

export default Xiaohongshu;