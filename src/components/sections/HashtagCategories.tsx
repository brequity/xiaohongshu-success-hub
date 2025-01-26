import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Category {
  name: string;
  description: string;
  hashtags: string[];
}

const categories: Category[] = [
  {
    name: "Beauty & Skincare",
    description: "Popular hashtags for beauty products and skincare routines",
    hashtags: [
      "#护肤推荐",
      "#美妆分享",
      "#化妆技巧",
      "#护肤心得",
      "#美妆测评",
      "#护肤品推荐",
      "#美妆教程",
      "#护肤小知识",
      "#美妆好物",
      "#护肤经验分享"
    ]
  },
  {
    name: "Fashion & Style",
    description: "Trending hashtags for fashion and style content",
    hashtags: [
      "#穿搭分享",
      "#时尚搭配",
      "#日常穿搭",
      "#穿搭推荐",
      "#时尚单品",
      "#搭配技巧",
      "#穿搭灵感",
      "#时尚穿搭",
      "#穿搭日记",
      "#搭配分享"
    ]
  },
  {
    name: "Food & Dining",
    description: "Popular hashtags for food and restaurant content",
    hashtags: [
      "#美食推荐",
      "#美食分享",
      "#美食探店",
      "#美食测评",
      "#美食打卡",
      "#美食记录",
      "#美食vlog",
      "#美食攻略",
      "#美食日记",
      "#美食探索"
    ]
  },
  {
    name: "Lifestyle & Travel",
    description: "Trending hashtags for lifestyle and travel content",
    hashtags: [
      "#生活方式",
      "#旅行分享",
      "#生活记录",
      "#旅行日记",
      "#生活日常",
      "#旅行攻略",
      "#生活感悟",
      "#旅行探索",
      "#生活态度",
      "#旅行vlog"
    ]
  }
];

export const HashtagCategories = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Top Categories & Trending Hashtags
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card key={category.name} className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.hashtags.map((hashtag) => (
                  <Badge
                    key={hashtag}
                    variant="secondary"
                    className="text-sm py-1 px-3 cursor-pointer hover:bg-primary hover:text-white transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText(hashtag);
                      // You could add a toast notification here
                    }}
                  >
                    {hashtag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};