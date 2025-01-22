import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import PlatformComparison from "@/components/PlatformComparison";
import ImageCarousel from "@/components/ImageCarousel";
import { NewsletterSubscription } from "@/components/NewsletterSubscription";
import { ExitPopup } from "@/components/ExitPopup";
import { ContactForm } from "@/components/ContactForm";
import { Navigation } from "@/components/Navigation";
import { VideoSection } from "@/components/VideoSection";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <Hero />
      <Features />
      <VideoSection />
      <PlatformComparison />
      <ImageCarousel />
      <Pricing />
      <NewsletterSubscription />
      <ContactForm />
      <ExitPopup />
    </motion.div>
  );
};

export default Index;