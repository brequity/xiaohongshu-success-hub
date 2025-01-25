import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  const scrollToMarketingPlan = () => {
    const marketingPlanSection = document.getElementById('marketing-plan');
    if (marketingPlanSection) {
      marketingPlanSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-coral to-coral-light text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Expand Your Business in China?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join successful brands generating significant ROI on Xiaohongshu. Let's create your success story.
        </p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="bg-white text-coral hover:bg-gray-100"
          onClick={scrollToMarketingPlan}
        >
          Start Your Growth Journey
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};