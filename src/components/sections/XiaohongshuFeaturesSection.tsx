import { motion } from "framer-motion";
import { Users, ShoppingCart, Brain, Video } from "lucide-react";

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "User-Generated Content (UGC)",
    description: "Xiaohongshu thrives on content created by its users, ranging from product reviews and lifestyle tips to travel experiences. This platform encourages authenticity and peer-to-peer recommendations, which are highly valued by its user base. Users can post photos, videos, and notes, creating a rich tapestry of content that influences buying decisions."
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Integrated E-commerce",
    description: "Unlike many Western social platforms, Xiaohongshu directly integrates e-commerce into its social interface. Users can discover products within the content they browse and purchase them without leaving the app. This seamless shopping experience is facilitated through features like product tags, 'buy' buttons, and direct links to e-commerce stores within posts or live streams."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Content Discovery via AI Algorithms",
    description: "Xiaohongshu uses sophisticated AI algorithms to curate and present content based on user interests, behavior, and interaction history. The platform offers different feeds like \"Follow\" for content from followed accounts, \"Explore\" for personalized recommendations, and \"Nearby\" for location-based content. This personalization ensures users see content that is relevant and engaging to them."
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Live Streaming and Influencer Marketing",
    description: "Live streaming is a significant feature on Xiaohongshu, where brands and influencers can engage in real-time with their audience, showcasing products, offering tutorials, or hosting Q&A sessions. This feature not only boosts engagement but also directly impacts sales through live selling events. Influencers, or Key Opinion Leaders (KOLs), play a crucial role in marketing, leveraging their trust and connection with followers to promote products and lifestyles, enhancing brand visibility and credibility."
  }
];

export const XiaohongshuFeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ea384c]">
            Xiaohongshu Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the key features that make Xiaohongshu a powerful platform for brands and content creators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};