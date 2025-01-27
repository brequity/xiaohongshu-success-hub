import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, BookOpen, Image as ImageIcon, TrendingUp, Globe2, MessageCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";
import { useCarousel } from "@/hooks/use-carousel";
import { useMediaQuery } from "@/hooks/use-mobile";

const strategies = [
  {
    icon: <Award className="w-6 h-6 text-coral" />,
    title: "Build Trust Through Certification",
    description: "Ensure your clinic profile is verified and highlight awards, accreditations, and partnerships to gain user trust."
  },
  {
    icon: <Users className="w-6 h-6 text-coral" />,
    title: "Leverage User-Generated Content",
    description: "Collaborate with KOLs and encourage clients to share their treatment journeys and reviews."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-coral" />,
    title: "Educational Content Creation",
    description: "Post engaging content that demystifies procedures using videos, infographics, and guides."
  },
  {
    icon: <ImageIcon className="w-6 h-6 text-coral" />,
    title: "Showcase Real Results",
    description: "Share high-quality images and videos of treatment results while respecting privacy guidelines."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-coral" />,
    title: "Align with Trending Topics",
    description: "Stay updated on trends and use popular hashtags to increase visibility."
  },
  {
    icon: <Globe2 className="w-6 h-6 text-coral" />,
    title: "Localized Campaigns",
    description: "Customize campaigns to resonate with Chinese audience preferences and aesthetic standards."
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-coral" />,
    title: "Engage Actively",
    description: "Respond promptly to interactions and host Q&A sessions or livestreams."
  }
];

const StrategyCard = ({ strategy, index }: { strategy: typeof strategies[0], index: number }) => (
  <Card className="hover:border-coral transition-colors duration-300">
    <CardHeader>
      <div className="flex items-center gap-4">
        {strategy.icon}
        <CardTitle className="text-lg">{strategy.title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{strategy.description}</p>
    </CardContent>
  </Card>
);

export const MarketingStrategiesSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { api, setApi, activeSlide, onSelect } = useCarousel();

  if (isMobile) {
    return (
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Key Marketing Strategies</h2>
        <div className="relative px-4">
          <Carousel
            setApi={setApi}
            className="w-full max-w-sm mx-auto"
            onSlideChange={onSelect}
          >
            <CarouselContent>
              {strategies.map((strategy, index) => (
                <CarouselItem key={index}>
                  <StrategyCard strategy={strategy} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
          <CarouselDots
            itemCount={strategies.length}
            activeSlide={activeSlide}
            onDotClick={(index) => api?.scrollTo(index)}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-8">Key Marketing Strategies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strategies.map((strategy, index) => (
          <StrategyCard key={index} strategy={strategy} index={index} />
        ))}
      </div>
    </section>
  );
};