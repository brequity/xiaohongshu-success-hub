import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, CheckCircle2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";
import { useCarousel } from "@/hooks/use-carousel";

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "User-Generated Content (UGC)",
    description: "Xiaohongshu thrives on content created by its users, ranging from product reviews and lifestyle tips to travel experiences. This platform encourages authenticity and peer-to-peer recommendations, which are highly valued by its user base. Users can post photos, videos, and notes, creating a rich tapestry of content that influences buying decisions."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Integrated E-commerce",
    description: "Unlike many Western social platforms, Xiaohongshu directly integrates e-commerce into its social interface. Users can discover products within the content they browse and purchase them without leaving the app. This seamless shopping experience is facilitated through features like product tags, 'buy' buttons, and direct links to e-commerce stores within posts or live streams."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Content Discovery via AI Algorithms",
    description: "Xiaohongshu uses sophisticated AI algorithms to curate and present content based on user interests, behavior, and interaction history. The platform offers different feeds like \"Follow\" for content from followed accounts, \"Explore\" for personalized recommendations, and \"Nearby\" for location-based content. This personalization ensures users see content that is relevant and engaging to them."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Live Streaming and Influencer Marketing",
    description: "Live streaming is a significant feature on Xiaohongshu, where brands and influencers can engage in real-time with their audience, showcasing products, offering tutorials, or hosting Q&A sessions. This feature not only boosts engagement but also directly impacts sales through live selling events. Influencers, or Key Opinion Leaders (KOLs), play a crucial role in marketing, leveraging their trust and connection with followers to promote products and lifestyles, enhancing brand visibility and credibility."
  }
];

export const BenefitsSection = () => {
  const isMobile = useIsMobile();
  const { api, setApi, activeSlide, onSelect } = useCarousel();

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full"
    >
      <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center text-coral mb-4">
        {benefit.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
      <p className="text-gray-600">{benefit.description}</p>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ea384c]">Why Choose Xiaohongshu for Your Business?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join successful brands that are leveraging Xiaohongshu's unique ecosystem to drive significant business growth in China
          </p>
        </div>

        {isMobile ? (
          <div className="relative w-full px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              setApi={setApi}
              onSlideChange={onSelect}
            >
              <CarouselContent className="-ml-4">
                {benefits.map((benefit, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full">
                    <BenefitCard benefit={benefit} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-10">
                <CarouselPrevious className="h-8 w-8 rounded-full" />
              </div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                <CarouselNext className="h-8 w-8 rounded-full" />
              </div>
              <CarouselDots 
                itemCount={benefits.length} 
                activeSlide={activeSlide} 
                onDotClick={handleDotClick}
              />
            </Carousel>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};