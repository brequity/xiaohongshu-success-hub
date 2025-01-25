import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

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

export const BenefitsSection = () => {
  return (
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
  );
};