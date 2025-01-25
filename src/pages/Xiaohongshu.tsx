import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { XiaohongshuHero } from "@/components/sections/XiaohongshuHero";
import { MarketingStrategyForm } from "@/components/sections/MarketingStrategyForm";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServicesSection } from "@/components/sections/ServicesSection";

const Xiaohongshu = () => {
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
      <XiaohongshuHero scrollToMarketingPlan={scrollToMarketingPlan} />
      <MarketingStrategyForm
        marketingObjective={marketingObjective}
        budget={budget}
        setMarketingObjective={setMarketingObjective}
        setBudget={setBudget}
        handleGetStrategy={handleGetStrategy}
      />
      <BenefitsSection />
      <CTASection />
      <ServicesSection />
    </div>
  );
};

export default Xiaohongshu;