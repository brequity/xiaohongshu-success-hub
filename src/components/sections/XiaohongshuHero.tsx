import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface XiaohongshuHeroProps {
  scrollToMarketingPlan: () => void;
}

const stats = [
  { number: "600M+", label: "Monthly Active Users" },
  { number: "70%", label: "Users with High Purchasing Power" },
  { number: "80%", label: "Brand Conversion Rate" },
  { number: "#1", label: "Social Commerce Platform" },
];

export const XiaohongshuHero = ({ scrollToMarketingPlan }: XiaohongshuHeroProps) => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/2bc9c4e5-8efa-47e6-ab5c-a2b76d1fe92c.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Grow Your Business on Xiaohongshu
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Tap into China's most influential social commerce platform. Our expert team will help you create a winning strategy to reach millions of potential customers and drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-coral hover:bg-coral-light"
              onClick={scrollToMarketingPlan}
            >
              Start Your Growth Strategy
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
              View Success Stories
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};