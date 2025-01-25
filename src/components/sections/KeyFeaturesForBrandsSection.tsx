import { motion } from "framer-motion";
import { CheckSquare, FileText, Megaphone } from "lucide-react";

const features = [
  {
    icon: <CheckSquare className="w-6 h-6" />,
    title: "Official Accounts",
    description: "Gain credibility and direct access to the platform's features."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Content",
    description: "From Notes to Live Streams, tailor content to engage users authentically."
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Advertising Options",
    description: "From search ads to influencer partnerships."
  }
];

export const KeyFeaturesForBrandsSection = () => {
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
            Key Features for Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leverage these powerful features to build your brand presence
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