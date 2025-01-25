import { Navigation } from "@/components/Navigation";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { SuccessStoriesSection } from "@/components/sections/SuccessStoriesSection";
import { EbookPreview } from "@/components/EbookPreview";
import { XiaohongshuFeaturesSection } from "@/components/sections/XiaohongshuFeaturesSection";

const Xiaohongshu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <XiaohongshuFeaturesSection />
      <BenefitsSection />
      <SuccessStoriesSection />
      <EbookPreview />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Xiaohongshu;