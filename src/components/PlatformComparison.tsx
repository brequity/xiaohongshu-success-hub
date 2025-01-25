import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const PlatformComparison = () => {
  const comparisons = [
    {
      feature: "Primary Content Type",
      xiaohongshu: "Lifestyle reviews, product recommendations, and detailed guides",
      tiktok: "Short-form videos, entertainment, and trends",
    },
    {
      feature: "Content Format",
      xiaohongshu: "Photos, long-form text, and short videos",
      tiktok: "Short videos (15s-3min)",
    },
    {
      feature: "Target Audience",
      xiaohongshu: "Primarily female users (18-35) interested in lifestyle and shopping",
      tiktok: "Diverse audience across all age groups",
    },
    {
      feature: "Monetization",
      xiaohongshu: "E-commerce integration, affiliate marketing, sponsored posts",
      tiktok: "Creator Fund, brand partnerships, live streaming gifts",
    },
    {
      feature: "Content Discovery",
      xiaohongshu: "Search-based, topic-focused exploration",
      tiktok: "Algorithm-driven feed, trending challenges",
    },
    {
      feature: "User Engagement",
      xiaohongshu: "Detailed comments, saves, and sharing",
      tiktok: "Quick likes, comments, shares, and duets",
    },
  ];

  return (
    <div id="pricing" className="w-full py-12 px-4 md:px-6 lg:px-8 bg-red-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#ea384c]">Platform Comparison</h2>
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-600">
          While both Xiaohongshu and TikTok are popular social media platforms, they serve different purposes and audiences. Xiaohongshu focuses on lifestyle content, product reviews, and detailed recommendations, primarily targeting young female users interested in shopping and lifestyle content. In contrast, TikTok is centered around short-form entertainment videos appealing to a broader, global audience across all demographics.
        </p>
      </div>

      <div className="flex justify-center gap-20 mb-8">
        <div className="text-center">
          <img 
            src="/lovable-uploads/40ec6227-aaaf-4f19-b08a-6618a1281fc6.png" 
            alt="Xiaohongshu Logo" 
            className="w-24 h-24 object-contain mx-auto rounded-xl"
          />
          <p className="mt-2 font-medium text-[#ea384c]">Xiaohongshu</p>
        </div>
        <div className="text-center">
          <img 
            src="/lovable-uploads/c049559b-d34a-4e88-9e7a-baea7489e9b0.png" 
            alt="TikTok Logo" 
            className="w-24 h-24 object-contain mx-auto rounded-xl"
          />
          <p className="mt-2 font-medium text-[#ea384c]">TikTok</p>
        </div>
      </div>

      <div className="rounded-lg border border-red-200 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#ea384c]/5 hover:bg-[#ea384c]/10">
              <TableHead className="w-[200px] text-[#ea384c] font-semibold">Feature</TableHead>
              <TableHead className="text-[#ea384c] font-semibold">Xiaohongshu</TableHead>
              <TableHead className="text-[#ea384c] font-semibold">TikTok</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisons.map((item) => (
              <TableRow key={item.feature} className="hover:bg-red-50">
                <TableCell className="font-medium text-[#ea384c]">{item.feature}</TableCell>
                <TableCell>{item.xiaohongshu}</TableCell>
                <TableCell>{item.tiktok}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};