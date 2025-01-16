import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Complete Xiaohongshu Strategy Guide",
  "Content Creation Templates",
  "Engagement Growth Tactics",
  "Monetization Strategies",
  "Algorithm Optimization Tips",
  "Case Studies & Examples",
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-coral/10 text-coral rounded-full">
            Investment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get instant access to our comprehensive guide and start building your Xiaohongshu presence
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8 text-center border-b">
            <h3 className="text-2xl font-bold mb-2">Complete Guide</h3>
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-gray-600 ml-2">USD</span>
            </div>
            <Button 
              size="lg" 
              className="w-full bg-coral hover:bg-coral-light transition-all duration-300"
            >
              Get Access Now
            </Button>
          </div>
          <div className="p-8">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-jade mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};