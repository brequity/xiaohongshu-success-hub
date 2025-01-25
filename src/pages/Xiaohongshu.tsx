import { Navigation } from "@/components/Navigation";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { SuccessStoriesSection } from "@/components/sections/SuccessStoriesSection";

const Xiaohongshu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <BenefitsSection />
      <SuccessStoriesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Xiaohongshu;