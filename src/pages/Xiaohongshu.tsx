import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const stats = [
  { number: "600M+", label: "Active Users" },
  { number: "200M+", label: "Daily Posts" },
  { number: "50B+", label: "Monthly Views" },
  { number: "#1", label: "Lifestyle Platform in China" },
];

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Rapid Growth Platform",
    description: "Tap into China's fastest-growing social commerce platform with over 600 million active users"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Targeted Audience",
    description: "Connect with young, urban Chinese consumers who are actively seeking lifestyle and product recommendations"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "High Engagement",
    description: "Benefit from Xiaohongshu's highly engaged community with authentic user-generated content"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Proven Results",
    description: "Join thousands of successful creators and brands who have built their presence on Xiaohongshu"
  }
];

const Xiaohongshu = () => {
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
              Master Xiaohongshu Marketing
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Transform your brand's presence on China's most influential lifestyle platform. Get started with our comprehensive guide and expert strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-coral hover:bg-coral-light">
                Get Started Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                Watch Demo
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get Your Free Quote Today</h2>
              <p className="text-gray-600">
                Select your monthly marketing budget to receive a customized Xiaohongshu strategy proposal
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Marketing Budget
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2000-5000">¥2,000 - ¥5,000</SelectItem>
                      <SelectItem value="5000-10000">¥5,000 - ¥10,000</SelectItem>
                      <SelectItem value="10000-20000">¥10,000 - ¥20,000</SelectItem>
                      <SelectItem value="20000-50000">¥20,000 - ¥50,000</SelectItem>
                      <SelectItem value="50000+">¥50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-coral hover:bg-coral-light"
                >
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * We'll get back to you within 24 hours with a customized proposal
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Xiaohongshu?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover why leading brands and creators are choosing Xiaohongshu as their primary platform for reaching Chinese consumers
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
            Ready to Grow Your Presence on Xiaohongshu?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful creators and brands. Get started today!
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-coral hover:bg-gray-100">
            Start Your Journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Xiaohongshu;
