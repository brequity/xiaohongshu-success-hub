import { motion } from "framer-motion";

export const TourismFactors = () => {
  return (
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
  );
};