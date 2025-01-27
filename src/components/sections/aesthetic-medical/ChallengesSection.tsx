import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

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

export const ChallengesSection = () => {
  return (
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
  );
};