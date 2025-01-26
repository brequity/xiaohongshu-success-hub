import { motion } from "framer-motion";
import { Users, ShoppingCart, MessageSquare, Video } from "lucide-react";

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "User-Generated Content",
    description: "Authentic reviews, recommendations, and lifestyle content created by real users and influencers."
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Integrated Shopping",
    description: "Direct purchasing through content with integrated 'buy' buttons and product links."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Community Engagement",
    description: "Active community discussions, comments, and sharing of experiences."
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Multi-Format Content",
    description: "Photos, videos, live streams, and detailed written reviews in a single platform."
  }
];

export const XHSHowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ea384c]">
            How Xiaohongshu Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the platform's unique blend of social media and e-commerce features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};