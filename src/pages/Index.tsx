import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import PlatformComparison from "@/components/PlatformComparison";
import ImageCarousel from "@/components/ImageCarousel";
import { NewsletterSubscription } from "@/components/NewsletterSubscription";
import { ExitPopup } from "@/components/ExitPopup";

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
      <ImageCarousel />
      <Pricing />
      <NewsletterSubscription />
      <ExitPopup />
    </motion.div>
  );
};

export default Index;