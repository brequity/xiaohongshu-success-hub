import { motion } from "framer-motion";
import { CheckSquare, FileText, Users, Settings } from "lucide-react";

const steps = [
  {
    icon: <CheckSquare className="w-6 h-6" />,
    title: "Account Setup",
    description: "Create and verify your official business account on Xiaohongshu."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Content Strategy",
    description: "Develop a content plan that aligns with platform trends and your brand voice."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Building",
    description: "Engage with your target audience and build a loyal following."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Performance Optimization",
    description: "Monitor metrics and optimize your strategy for better results."
  }
];

export const XHSGettingStarted = () => {
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
            Getting Started
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your step-by-step guide to launching on Xiaohongshu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};