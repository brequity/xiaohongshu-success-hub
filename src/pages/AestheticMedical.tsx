import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/aesthetic-medical/HeroSection";
import { IntroductionSection } from "@/components/sections/aesthetic-medical/IntroductionSection";
import { MarketInsightsSection } from "@/components/sections/aesthetic-medical/MarketInsightsSection";
import { MarketingStrategiesSection } from "@/components/sections/aesthetic-medical/MarketingStrategiesSection";
import { CaseStudiesSection } from "@/components/sections/aesthetic-medical/CaseStudiesSection";
import { ChallengesSection } from "@/components/sections/aesthetic-medical/ChallengesSection";
import { SectionTitle } from "@/components/sections/aesthetic-medical/shared/SectionTitle";
import { motion } from "framer-motion";

const AestheticMedical = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <IntroductionSection />
          <MarketInsightsSection />
          <MarketingStrategiesSection />
          <CaseStudiesSection />
          <ChallengesSection />
          <FAQSection />

          <section className="text-center">
            <SectionTitle 
              title="Ready to Start?"
              subtitle="Let us help you create a successful marketing strategy for your aesthetic medical clinic on Xiaohongshu."
            />
            <Button className="bg-coral hover:bg-coral/90">
              Contact Us for Support
            </Button>
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default AestheticMedical;