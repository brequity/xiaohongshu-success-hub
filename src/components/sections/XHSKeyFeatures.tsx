import { motion } from "framer-motion";
import { Building, FileText, Megaphone } from "lucide-react";

const features = [
  {
    icon: <Building className="w-6 h-6" />,
    title: "Official Accounts",
    description: "Establish your brand presence with a verified business account that provides access to advanced analytics and features.",
    benefits: [
      "Enhanced credibility",
      "Access to business tools",
      "Performance analytics",
      "Direct customer engagement"
    ]
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Content Types",
    description: "Leverage multiple content formats to engage your audience effectively.",
    benefits: [
      "Photo-based Notes",
      "Short-form videos",
      "Live streaming",
      "Product showcases"
    ]
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Advertising Options",
    description: "Reach your target audience through various advertising channels.",
    benefits: [
      "Search ads",
      "Display advertising",
      "KOL collaborations",
      "Sponsored content"
    ]
  }
];

export const XHSKeyFeatures = () => {
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
            Key Features for Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential tools and features to establish and grow your brand on Xiaohongshu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-coral rounded-full mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};