import { Navigation } from "@/components/Navigation";
import { XiaohongshuHero } from "@/components/sections/XiaohongshuHero";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/ContactForm";

const Xiaohongshu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <XiaohongshuHero />
      <BenefitsSection />
      <CaseStudiesSection />
      <CTASection />
      <ContactForm />
    </div>
  );
};

export default Xiaohongshu;