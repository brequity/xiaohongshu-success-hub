import { motion } from "framer-motion";
import { Globe, Shield, BookOpen } from "lucide-react";

const challenges = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Cultural Nuances",
    description: "Understanding Chinese consumer culture and preferences is crucial for success on Xiaohongshu.",
    points: [
      "Local trends and preferences",
      "Language and communication style",
      "Consumer behavior patterns",
      "Cultural sensitivity"
    ]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Regulations",
    description: "Navigating China's regulatory environment requires careful attention to compliance.",
    points: [
      "Content guidelines",
      "Advertising regulations",
      "Data privacy laws",
      "E-commerce requirements"
    ]
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Platform Knowledge",
    description: "Mastering Xiaohongshu's unique features and best practices is essential.",
    points: [
      "Algorithm understanding",
      "Content optimization",
      "Community guidelines",
      "Performance tracking"
    ]
  }
];

export const XHSChallenges = () => {
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
            Challenges and Considerations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key challenges to consider when marketing on Xiaohongshu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral mb-6">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{challenge.title}</h3>
              <p className="text-gray-600 mb-6">{challenge.description}</p>
              <ul className="space-y-2">
                {challenge.points.map((point, i) => (
                  <li key={i} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-coral rounded-full mr-2" />
                    {point}
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