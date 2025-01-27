import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Award, 
  Users, 
  BookOpen, 
  Image as ImageIcon, 
  TrendingUp, 
  Globe2, 
  MessageCircle,
  AlertTriangle
} from "lucide-react";

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

const AestheticMedical = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-coral">
            Marketing Strategies for Aesthetic Medical Clinics
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Effective marketing approaches for aesthetic medical clinics on Xiaohongshu
          </p>

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

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Challenges for Overseas Clinics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="hover:border-coral transition-colors duration-300">
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
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Start?</h2>
            <p className="text-gray-600 mb-8">
              Let us help you create a successful marketing strategy for your aesthetic medical clinic on Xiaohongshu.
            </p>
            <Button className="bg-coral hover:bg-coral/90">
              Contact Us for Support
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AestheticMedical;