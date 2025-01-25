import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingCart } from "lucide-react";

const successStories = [
  {
    brand: "Beauty Brand Success",
    metrics: {
      growth: "300%",
      timeframe: "6 months",
      engagement: "45% engagement rate"
    },
    description: "Achieved remarkable follower growth through strategic KOL partnerships and authentic content creation",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    brand: "Fashion Retailer Growth",
    metrics: {
      growth: "250%",
      timeframe: "8 months",
      engagement: "38% engagement rate"
    },
    description: "Expanded market presence through targeted community engagement and lifestyle content",
    icon: <Users className="w-6 h-6" />
  },
  {
    brand: "Lifestyle Brand Impact",
    metrics: {
      growth: "400%",
      timeframe: "12 months",
      engagement: "52% engagement rate"
    },
    description: "Transformed brand visibility through strategic content and community building",
    icon: <ShoppingCart className="w-6 h-6" />
  }
];

export const SuccessStoriesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ea384c]">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how brands are achieving remarkable success on Xiaohongshu through strategic content and community engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
            >
              <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center text-coral mb-4">
                {story.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{story.brand}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Growth</span>
                  <span className="font-semibold text-coral">{story.metrics.growth}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Timeframe</span>
                  <span className="font-semibold">{story.metrics.timeframe}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Engagement</span>
                  <span className="font-semibold text-jade">{story.metrics.engagement}</span>
                </div>
              </div>
              <p className="text-gray-600">{story.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};