import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/aesthetic-medical/HeroSection";
import { IntroductionSection } from "@/components/sections/aesthetic-medical/IntroductionSection";
import { MarketingStrategiesSection } from "@/components/sections/aesthetic-medical/MarketingStrategiesSection";
import { CaseStudiesSection } from "@/components/sections/aesthetic-medical/CaseStudiesSection";
import { ChallengesSection } from "@/components/sections/aesthetic-medical/ChallengesSection";

const AestheticMedical = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <IntroductionSection />
          <MarketingStrategiesSection />
          <CaseStudiesSection />
          <ChallengesSection />
          <FAQSection />

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Start?</h2>
            <p className="text-gray-600 mb-8">
              Let us help you create a successful marketing strategy for your aesthetic medical clinic on Xiaohongshu.
            </p>
            <Button className="bg-coral hover:bg-coral/90">
              Contact Us for Support
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AestheticMedical;