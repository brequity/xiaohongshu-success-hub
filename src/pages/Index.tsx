import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const stats = [
  { number: "600M+", label: "Monthly Active Users" },
  { number: "70%", label: "Users with High Purchasing Power" },
  { number: "80%", label: "Brand Conversion Rate" },
  { number: "#1", label: "Social Commerce Platform" },
];

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Market Penetration",
    description: "Access China's most influential social commerce platform with over 600 million active consumers ready to discover your brand"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Premium Audience",
    description: "Connect with affluent Chinese consumers who have high purchasing power and actively seek product recommendations"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "High ROI",
    description: "Benefit from Xiaohongshu's exceptional conversion rates and proven track record in driving sales"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Expert Support",
    description: "Get comprehensive support from our team to develop and execute your Xiaohongshu marketing strategy"
  }
];

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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/2bc9c4e5-8efa-47e6-ab5c-a2b76d1fe92c.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay */}
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

          {/* Stats Grid */}
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

      {/* Get a Quote Section */}
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Xiaohongshu for Your Business?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join successful brands that are leveraging Xiaohongshu's unique ecosystem to drive significant business growth in China
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center text-coral mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-coral to-coral-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Expand Your Business in China?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join successful brands generating significant ROI on Xiaohongshu. Let's create your success story.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-coral hover:bg-gray-100">
            Start Your Growth Journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;