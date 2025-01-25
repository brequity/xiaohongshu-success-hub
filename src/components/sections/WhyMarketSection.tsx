import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Influence",
    description: "It's a trendsetter in China, shaping consumer behavior."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Engagement",
    description: "High interaction rates due to its community-driven model."
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Sales",
    description: "Direct link between content and e-commerce, enabling immediate sales."
  }
];

export const WhyMarketSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ea384c]">
            Why Market on Xiaohongshu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the key advantages of marketing your brand on Xiaohongshu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-4 mb-4">
                <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};