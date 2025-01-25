import { motion } from "framer-motion";
import { BookOpen, Target, TrendingUp, DollarSign, Users, Shield, Zap, Gift } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Comprehensive Guide",
    description: "Step-by-step instructions for creating engaging content that resonates with Chinese audiences",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Platform Strategy",
    description: "Expert guidance on building your presence and growing your following on Xiaohongshu",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth Tactics",
    description: "Proven strategies to increase your engagement and reach on the platform",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Monetization",
    description: "Transform your presence into a sustainable income stream with proven strategies",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Building",
    description: "Learn how to build and nurture an engaged community around your content",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Brand Protection",
    description: "Strategies to maintain and protect your brand reputation on Xiaohongshu",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Quick Results",
    description: "See measurable growth within weeks of implementing our strategies",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Bonus Resources",
    description: "Access to templates, checklists, and exclusive creator resources",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
          id="what-is-xiaohongshu"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-coral/10 text-coral rounded-full">
            Why Choose Our Guide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Succeed on Xiaohongshu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive guide covers all aspects of content creation and growth on China's leading lifestyle platform
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