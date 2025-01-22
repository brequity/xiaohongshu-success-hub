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
    <div className="relative">
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <VideoSection />
        <PlatformComparison />
        <ImageCarousel />
        <Pricing />
        <NewsletterSubscription />
        <ContactForm />
        <ExitPopup />
      </main>
    </div>
  );
};

export default Index;