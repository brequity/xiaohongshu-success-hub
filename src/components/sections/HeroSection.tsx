import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { number: "200M+", label: "Monthly Active Users" },
  { number: "70%", label: "Users with High Purchasing Power" },
  { number: "80%", label: "Brand Conversion Rate" },
  { number: "#1", label: "Social Commerce Platform" },
];

export const HeroSection = ({ scrollToMarketingPlan }: { scrollToMarketingPlan: () => void }) => {
  const scrollToCaseStudies = () => {
    const caseStudiesSection = document.querySelector('#case-studies');
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:bg-[75%_center]"
        style={{
          backgroundImage: "url('/lovable-uploads/2bc9c4e5-8efa-47e6-ab5c-a2b76d1fe92c.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Grow Your Business on Xiaohongshu
          </h1>
          <p className="text-base md:text-xl text-gray-100 mb-8">
            Tap into China's most influential social commerce platform. Our expert team will help you create a winning strategy to reach millions of potential customers and drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-16">
            <Button 
              size="lg" 
              className="bg-coral hover:bg-coral-light"
              onClick={scrollToMarketingPlan}
            >
              Start Your Growth Strategy
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white"
              onClick={scrollToCaseStudies}
            >
              View Success Stories
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-sm md:text-base text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};