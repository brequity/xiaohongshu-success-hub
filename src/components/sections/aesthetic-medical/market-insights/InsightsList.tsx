import { motion } from "framer-motion";
import { TrendingUp, Activity, Users, MapPin, Plane } from "lucide-react";
import { InsightCard } from "./InsightCard";

export const InsightsList = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: "Market Growth and Potential",
      description: "China's medical aesthetics industry has been expanding rapidly, with the market value reaching approximately 217.9 billion RMB in 2021, reflecting a 12% annual growth rate. Projections suggest that this upward trajectory will continue in the coming years as consumers increasingly prioritize enhancing their appearance. The sector's robust growth underscores its immense potential.",
    },
    {
      icon: Activity,
      title: "Preference for Non-Invasive Treatments",
      description: "Non-surgical procedures, particularly energy-based treatments like laser and radiofrequency therapies, remain the cornerstone of the market. Their popularity stems from their minimal invasiveness, shorter recovery times, and effectiveness. These procedures account for a significant portion of the industry's revenue and have become the go-to options for many consumers.",
    },
    {
      icon: Users,
      title: "Evolving Consumer Demographics",
      description: 'The market is increasingly driven by "mature" consumers aged 26 and above, who now comprise more than half of all paying customers. This demographic focuses on anti-aging and facial rejuvenation treatments and demonstrates higher spending per session along with more frequent visits, highlighting their importance as a target audience.',
    },
    {
      icon: MapPin,
      title: "Regional Market Variances",
      description: "While first-tier cities like Beijing and Shanghai continue to dominate as major hubs for medical aesthetics, the rise of second- and third-tier cities such as Zhengzhou, Changsha, Xi'an, and Tianjin presents new opportunities. These regions, with less market saturation and growing demand, are emerging as critical battlegrounds for industry expansion.",
    },
    {
      icon: Plane,
      title: "Growing Interest in Overseas Medical Aesthetics",
      description: "An increasing number of Chinese consumers are looking abroad for medical aesthetic treatments. Approximately 16% of those considering or undergoing procedures in recent years have expressed interest in seeking treatments overseas, with Hong Kong, Macau, Taiwan, Japan, and South Korea being top destinations.",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        {insights.slice(0, 3).map((insight, index) => (
          <InsightCard key={index} {...insight} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-6"
      >
        {insights.slice(3).map((insight, index) => (
          <InsightCard key={index + 3} {...insight} />
        ))}
      </motion.div>
    </div>
  );
};