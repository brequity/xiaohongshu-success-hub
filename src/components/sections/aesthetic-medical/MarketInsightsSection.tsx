import { motion } from "framer-motion";
import { InsightsList } from "./market-insights/InsightsList";
import { TourismFactors } from "./market-insights/TourismFactors";

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

        <InsightsList />
        <TourismFactors />
      </motion.div>
    </section>
  );
};