import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { EbookPreview } from "./EbookPreview";

const features = [
  "Complete Xiaohongshu Strategy Guide",
  "Content Creation Templates",
  "Engagement Growth Tactics",
  "Monetization Strategies",
  "Algorithm Optimization Tips",
  "Case Studies & Examples",
];

const bootcampFeatures = [
  ...features,
  "1-on-1 Mentorship Sessions",
  "Weekly Group Coaching Calls",
  "Private Community Access",
  "Personalized Content Review",
];

export const Pricing = () => {
  const { toast } = useToast();

  const handleCheckout = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        method: 'POST',
      });

      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to initiate checkout. Please try again.",
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-coral/10 text-coral rounded-full">
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get instant access to our comprehensive guide and start building your Xiaohongshu presence
          </p>
        </div>
        
        <EbookPreview />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-8 text-center border-b">
              <h3 className="text-2xl font-bold mb-2">Complete Guide Ebook</h3>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-lg text-gray-500 line-through">$29.90</span>
                <span className="text-4xl font-bold text-coral">$9.90</span>
                <span className="text-gray-600">USD</span>
              </div>
              <p className="text-sm text-coral mb-4">Save $20 Today!</p>
              <Button 
                size="lg" 
                className="w-full bg-coral hover:bg-coral-light transition-all duration-300"
                onClick={handleCheckout}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-coral"
          >
            <div className="p-8 text-center border-b">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-coral/10 text-coral rounded-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Bootcamp</h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-gray-600 ml-2">USD</span>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-coral hover:bg-coral-light transition-all duration-300"
                onClick={handleCheckout}
              >
                Enroll Now
              </Button>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {bootcampFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-jade mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};