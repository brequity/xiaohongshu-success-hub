import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";
import { useCarousel } from "@/hooks/use-carousel";
import { useMediaQuery } from "@/hooks/use-mobile";

const challenges = [
  {
    title: "Cultural Barriers",
    description: "Adapt messaging to meet local expectations and preferences for natural-looking enhancements."
  },
  {
    title: "Language Barrier",
    description: "Navigate the predominantly Mandarin-speaking platform with professional translation support."
  },
  {
    title: "Regulatory Requirements",
    description: "Comply with local regulations and obtain necessary certifications for medical advertising."
  },
  {
    title: "Platform-Specific Content",
    description: "Create authentic, UGC-style content that resonates with the community."
  },
  {
    title: "Trust and Credibility",
    description: "Build trust despite geographical distance and logistical challenges."
  },
  {
    title: "Logistics and Access",
    description: "Address concerns about travel, costs, and post-treatment follow-up care."
  },
  {
    title: "Competition",
    description: "Stand out among established local clinics through strategic branding and differentiation."
  }
];

const ChallengeCard = ({ challenge, index }: { challenge: typeof challenges[0], index: number }) => (
  <Card className="hover:border-coral transition-colors duration-300">
    <CardHeader>
      <div className="flex items-center gap-4">
        <AlertTriangle className="w-6 h-6 text-coral" />
        <CardTitle className="text-lg">{challenge.title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{challenge.description}</p>
    </CardContent>
  </Card>
);

export const ChallengesSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { api, setApi, activeSlide, onSelect } = useCarousel();

  if (isMobile) {
    return (
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Challenges for Overseas Clinics</h2>
        <div className="relative px-4">
          <Carousel
            setApi={setApi}
            className="w-full max-w-sm mx-auto"
            onSlideChange={onSelect}
          >
            <CarouselContent>
              {challenges.map((challenge, index) => (
                <CarouselItem key={index}>
                  <ChallengeCard challenge={challenge} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
          <CarouselDots
            itemCount={challenges.length}
            activeSlide={activeSlide}
            onDotClick={(index) => api?.scrollTo(index)}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-8">Challenges for Overseas Clinics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} challenge={challenge} index={index} />
        ))}
      </div>
    </section>
  );
};