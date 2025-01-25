import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarketingPlanSection } from "@/components/sections/MarketingPlanSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  const navigate = useNavigate();
  const [marketingObjective, setMarketingObjective] = useState("");
  const [budget, setBudget] = useState("");

  const handleGetStrategy = () => {
    navigate(`/growth-strategy?objective=${encodeURIComponent(marketingObjective)}&budget=${encodeURIComponent(budget)}`);
  };

  const scrollToMarketingPlan = () => {
    const marketingPlanSection = document.getElementById('marketing-plan');
    if (marketingPlanSection) {
      marketingPlanSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection scrollToMarketingPlan={scrollToMarketingPlan} />
      <MarketingPlanSection
        marketingObjective={marketingObjective}
        budget={budget}
        setMarketingObjective={setMarketingObjective}
        setBudget={setBudget}
        handleGetStrategy={handleGetStrategy}
      />
      <BenefitsSection />
      <CaseStudiesSection />
      <CTASection />
    </div>
  );
};

export default Index;