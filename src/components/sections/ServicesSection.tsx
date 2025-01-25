import { Building, Network, Users, ChartBar, Megaphone, Bot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const services = [
  {
    icon: <Building className="w-10 h-10 text-coral" />,
    title: "Xiaohongshu Account Setup & Management",
    description: "Establish and optimize your official Xiaohongshu account for maximum impact."
  },
  {
    icon: <Network className="w-10 h-10 text-coral" />,
    title: "Content Creation",
    description: "Crafting authentic, high-engagement content that matches the platform's aesthetic and user preferences."
  },
  {
    icon: <Users className="w-10 h-10 text-coral" />,
    title: "Influencer (KOL/KOC) Collaborations",
    description: "Leverage the right influencers to amplify your brand's voice."
  },
  {
    icon: <Megaphone className="w-10 h-10 text-coral" />,
    title: "Ad Campaigns",
    description: "Design and manage ad campaigns with real-time performance tracking."
  },
  {
    icon: <ChartBar className="w-10 h-10 text-coral" />,
    title: "Analytics and Reporting",
    description: "Detailed insights into campaign performance to continually refine strategy."
  },
  {
    icon: <Bot className="w-10 h-10 text-coral" />,
    title: "AI-Powered Lead Management",
    description: "24/7 intelligent lead engagement and qualification system for faster response times and higher conversion rates."
  }
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <Card className="border-2 hover:border-coral transition-colors duration-300 h-full">
    <CardHeader className="text-center">
      <div className="flex justify-center mb-4">
        {service.icon}
      </div>
      <CardTitle className="text-xl">{service.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 text-center">{service.description}</p>
    </CardContent>
  </Card>
);

export const ServicesSection = () => {
  const isMobile = useIsMobile();
  const { api, setApi, activeSlide, onSelect } = useCarousel();

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ea384c]">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions to establish and grow your brand on Xiaohongshu
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
                {services.map((service, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full">
                    <ServiceCard service={service} />
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
                itemCount={services.length} 
                activeSlide={activeSlide} 
                onDotClick={handleDotClick}
              />
            </Carousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};