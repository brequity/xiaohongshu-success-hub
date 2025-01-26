import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag } from "lucide-react";

const cases = [
  {
    title: "Beauty Brand Success",
    metrics: {
      growth: "300%",
      timeframe: "6 months",
      engagement: "45% engagement rate"
    },
    description: "A international beauty brand achieved remarkable follower growth through strategic KOL partnerships and authentic content creation.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Fashion Retailer Growth",
    metrics: {
      growth: "250%",
      timeframe: "8 months",
      engagement: "38% engagement rate"
    },
    description: "A fashion retailer expanded their market presence through targeted community engagement and lifestyle content.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Luxury Brand Impact",
    metrics: {
      growth: "400%",
      timeframe: "12 months",
      engagement: "52% engagement rate"
    },
    description: "A luxury brand transformed their digital presence through strategic content and community building.",
    icon: <ShoppingBag className="w-6 h-6" />
  }
];

export const XHSSuccessStories = () => {
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real examples of brands achieving remarkable success on Xiaohongshu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral mb-6">
                {case_.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{case_.title}</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Growth</span>
                  <span className="font-semibold text-coral">{case_.metrics.growth}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Timeframe</span>
                  <span className="font-semibold">{case_.metrics.timeframe}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Engagement</span>
                  <span className="font-semibold text-jade">{case_.metrics.engagement}</span>
                </div>
              </div>
              <p className="text-gray-600">{case_.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};