import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { motion } from "framer-motion";
import PlatformComparison from "@/components/PlatformComparison";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <PlatformComparison />
      <Pricing />
    </motion.div>
  );
};

export default Index;