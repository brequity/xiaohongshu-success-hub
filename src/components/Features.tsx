import { motion } from "framer-motion";
import { BookOpen, Target, TrendingUp, DollarSign, Users, Globe, MessageSquare, ShoppingCart } from "lucide-react";

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Target Audience",
    description: "Reach predominantly female users aged 18-35, known for their high purchasing power and interest in lifestyle content",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Market Influence",
    description: "Tap into China's leading trendsetter platform that shapes consumer behavior and drives purchasing decisions",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Community Engagement",
    description: "Benefit from high interaction rates through authentic recommendations and active user participation",
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce Integration",
    description: "Leverage direct links between content and sales through seamless shopping features",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
          id="what-is-xiaohongshu"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ea384c]">
            Why Choose Xiaohongshu?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why Xiaohongshu has become China's most influential platform for lifestyle content and social commerce, connecting brands with over 200 million engaged users.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
                  {feature.icon}
                </div>
                <img 
                  src="/lovable-uploads/40ec6227-aaaf-4f19-b08a-6618a1281fc6.png" 
                  alt="Xiaohongshu Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};