import { motion } from "framer-motion";
import { BookOpen, Target, TrendingUp, DollarSign } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Comprehensive Xiaohongshu Guide",
    description: "Step-by-step instructions for creating engaging Xiaohongshu content that resonates with Chinese audiences",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Platform Migration Strategy",
    description: "Expert guidance on migrating your content strategy to Xiaohongshu from other social platforms",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Content Creation Mastery",
    description: "Master Xiaohongshu's unique content style and learn how to optimize for the platform's algorithm",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Monetization Blueprint",
    description: "Transform your Xiaohongshu presence into a sustainable income stream with proven monetization strategies",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        {/* Welcome Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coral">
            What is Xiaohongshu?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Xiaohongshu (Little Red Book) is China's leading lifestyle and shopping platform. Our academy guides you through creating authentic, engaging content that resonates with Chinese audiences.
          </p>
        </motion.div>

        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-jade/10 text-jade rounded-full">
            Xiaohongshu Academy Curriculum
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master Xiaohongshu Content Creation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive guide covers everything you need to know about becoming a successful content creator on Xiaohongshu
          </p>
        </div>

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