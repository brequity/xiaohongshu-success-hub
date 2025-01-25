import { motion } from "framer-motion";
import { Users, Globe, MessageSquare, ShoppingCart } from "lucide-react";
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

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Target Audience",
    description: "Reach predominantly female users aged 18-35, known for their high purchasing power and interest in lifestyle content",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Market Influence",
    description: "Tap into China's leading trendsetter platform that shapes consumer behavior and drives purchasing decisions",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Community Engagement",
    description: "Benefit from high interaction rates through authentic recommendations and active user participation",
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce Integration",
    description: "Leverage direct links between content and sales through seamless shopping features",
  },
];

export const Features = () => {
  const isMobile = useIsMobile();
  const { api, setApi, activeSlide, onSelect } = useCarousel();

  const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
          {feature.icon}
        </div>
        <img 
          src="/lovable-uploads/40ec6227-aaaf-4f19-b08a-6618a1281fc6.png" 
          alt="Xiaohongshu Logo" 
          className="w-8 h-8 object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
          id="what-is-xiaohongshu"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ea384c]">
            Why Choose Xiaohongshu?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why Xiaohongshu has become China's most influential platform for lifestyle content and social commerce, connecting brands with over 200 million engaged users.
          </p>
        </motion.div>

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
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full">
                    <FeatureCard feature={feature} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-10">
                <CarouselPrevious className="h-8 w-8 rounded-full" />
              </div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                <CarouselNext className="h-8 w-8 rounded-full" />
              </div>
              <CarouselDots itemCount={features.length} activeSlide={activeSlide} />
            </Carousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};