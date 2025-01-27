import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, BookOpen, Image as ImageIcon, TrendingUp, Globe2, MessageCircle } from "lucide-react";

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

export const MarketingStrategiesSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-8">Key Marketing Strategies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strategies.map((strategy, index) => (
          <Card key={index} className="hover:border-coral transition-colors duration-300">
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
        ))}
      </div>
    </section>
  );
};