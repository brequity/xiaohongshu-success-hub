import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PlatformComparison = () => {
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
    <div className="w-full py-12 px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Platform Comparison</h2>
      <div className="rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Feature</TableHead>
              <TableHead>Xiaohongshu</TableHead>
              <TableHead>TikTok</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisons.map((item) => (
              <TableRow key={item.feature}>
                <TableCell className="font-medium">{item.feature}</TableCell>
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

export default PlatformComparison;