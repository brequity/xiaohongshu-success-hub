import { motion } from "framer-motion";
import { TrendingUp, Activity, Users, MapPin, Plane } from "lucide-react";

export const MarketInsightsSection = () => {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Insights into China's Medical Aesthetics Market: Growth, Trends, and Emerging Opportunities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-coral/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-coral" />
                </div>
                <h3 className="text-lg font-semibold">Market Growth and Potential</h3>
              </div>
              <p className="text-gray-600">
                China's medical aesthetics industry has been expanding rapidly, with the market value reaching approximately 217.9 billion RMB in 2021, reflecting a 12% annual growth rate. Projections suggest that this upward trajectory will continue in the coming years as consumers increasingly prioritize enhancing their appearance. The sector's robust growth underscores its immense potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-coral/10 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-coral" />
                </div>
                <h3 className="text-lg font-semibold">Preference for Non-Invasive Treatments</h3>
              </div>
              <p className="text-gray-600">
                Non-surgical procedures, particularly energy-based treatments like laser and radiofrequency therapies, remain the cornerstone of the market. Their popularity stems from their minimal invasiveness, shorter recovery times, and effectiveness. These procedures account for a significant portion of the industry's revenue and have become the go-to options for many consumers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-coral/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-coral" />
                </div>
                <h3 className="text-lg font-semibold">Evolving Consumer Demographics</h3>
              </div>
              <p className="text-gray-600">
                The market is increasingly driven by "mature" consumers aged 26 and above, who now comprise more than half of all paying customers. This demographic focuses on anti-aging and facial rejuvenation treatments and demonstrates higher spending per session along with more frequent visits, highlighting their importance as a target audience.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-coral/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-coral" />
                </div>
                <h3 className="text-lg font-semibold">Regional Market Variances</h3>
              </div>
              <p className="text-gray-600">
                While first-tier cities like Beijing and Shanghai continue to dominate as major hubs for medical aesthetics, the rise of second- and third-tier cities such as Zhengzhou, Changsha, Xi'an, and Tianjin presents new opportunities. These regions, with less market saturation and growing demand, are emerging as critical battlegrounds for industry expansion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-coral/10 rounded-lg flex items-center justify-center">
                  <Plane className="w-5 h-5 text-coral" />
                </div>
                <h3 className="text-lg font-semibold">Growing Interest in Overseas Medical Aesthetics</h3>
              </div>
              <p className="text-gray-600">
                An increasing number of Chinese consumers are looking abroad for medical aesthetic treatments. Approximately 16% of those considering or undergoing procedures in recent years have expressed interest in seeking treatments overseas, with Hong Kong, Macau, Taiwan, Japan, and South Korea being top destinations.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gray-50 p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-6">Key Drivers of International Medical Tourism</h3>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-6">
              The growing trend of seeking medical aesthetic treatments abroad is driven by several compelling factors:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li><span className="font-medium">Perceived Expertise and Technology:</span> Many Chinese consumers view overseas clinics as offering superior expertise, advanced technology, and more cutting-edge treatments compared to domestic providers.</li>
              <li><span className="font-medium">Diverse Treatment Options:</span> International clinics often provide a broader range of services, including innovative or niche treatments not yet widely available in China.</li>
              <li><span className="font-medium">High-Quality Standards:</span> Countries like Japan and South Korea are renowned for their meticulous attention to detail, safety standards, and natural-looking results, which align with Chinese preferences.</li>
              <li><span className="font-medium">Discretion and Privacy:</span> Seeking treatments abroad allows clients to maintain privacy, avoiding potential social stigma associated with aesthetic enhancements.</li>
              <li><span className="font-medium">Combining Treatment with Travel:</span> Many consumers view overseas treatments as part of a luxury experience, combining medical aesthetics with tourism and shopping.</li>
            </ul>
            <p>
              China's medical aesthetics market continues to thrive, fueled by increasing domestic demand and a growing interest in international options. For businesses, adapting to the preferences of local consumers while also understanding the appeal of overseas treatments can open new opportunities for growth and differentiation in this dynamic industry.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};