import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag } from "lucide-react";

const reasons = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Market Influence",
    description: "Shape consumer trends and purchasing decisions through authentic content and community engagement."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Authentic Engagement",
    description: "Build trust through genuine user reviews, unboxing videos, and live streaming interactions."
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Direct Sales Impact",
    description: "Convert content viewers into customers with integrated e-commerce features and direct purchase options."
  }
];

export const XHSWhyMarket = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ea384c]">
            Why Market on Xiaohongshu?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the unique advantages of marketing your brand on China's leading lifestyle platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};