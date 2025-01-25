import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface MarketingStrategyFormProps {
  marketingObjective: string;
  budget: string;
  setMarketingObjective: (value: string) => void;
  setBudget: (value: string) => void;
  handleGetStrategy: () => void;
}

export const MarketingStrategyForm = ({
  marketingObjective,
  budget,
  setMarketingObjective,
  setBudget,
  handleGetStrategy
}: MarketingStrategyFormProps) => {
  return (
    <section id="marketing-plan" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Get Your Custom Marketing Plan</h2>
            <p className="text-gray-600">
              Select your marketing objectives and budget to receive a tailored strategy that maximizes your ROI on Xiaohongshu
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Marketing Objectives
                </label>
                <Select onValueChange={setMarketingObjective} value={marketingObjective}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your business objectives" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brand-awareness">Build Brand Awareness</SelectItem>
                    <SelectItem value="sales-growth">Drive Sales Growth</SelectItem>
                    <SelectItem value="market-entry">Enter Chinese Market</SelectItem>
                    <SelectItem value="engagement">Increase Customer Engagement</SelectItem>
                    <SelectItem value="influencer">Develop Influencer Partnerships</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Marketing Investment
                </label>
                <Select onValueChange={setBudget} value={budget}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your investment range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                    <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                    <SelectItem value="2001-5000">$2,001 - $5,000</SelectItem>
                    <SelectItem value="5000+">$5,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-coral hover:bg-coral-light"
                onClick={handleGetStrategy}
                disabled={!marketingObjective || !budget}
              >
                Get Your Growth Strategy
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <p className="text-sm text-gray-500 text-center">
                * Our business strategists will contact you within 24 hours with your customized plan
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};