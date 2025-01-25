import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarketingPlanSection } from "@/components/sections/MarketingPlanSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ContactForm } from "@/components/ContactForm";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <HeroSection scrollToMarketingPlan={scrollToMarketingPlan} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MarketingPlanSection
            marketingObjective={marketingObjective}
            budget={budget}
            setMarketingObjective={setMarketingObjective}
            setBudget={setBudget}
            handleGetStrategy={handleGetStrategy}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <BenefitsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <CTASection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <ServicesSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <CaseStudiesSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <AboutUsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Index;