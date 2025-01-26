import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Hashtag {
  chinese: string;
  english: string;
}

interface Category {
  name: string;
  description: string;
  hashtags: Hashtag[];
}

const categories: Category[] = [
  {
    name: "Beauty & Skincare",
    description: "Popular hashtags for beauty products and skincare routines",
    hashtags: [
      { chinese: "#护肤推荐", english: "Skincare Recommendations" },
      { chinese: "#美妆分享", english: "Beauty Sharing" },
      { chinese: "#化妆技巧", english: "Makeup Tips" },
      { chinese: "#护肤心得", english: "Skincare Experience" },
      { chinese: "#美妆测评", english: "Beauty Reviews" },
      { chinese: "#护肤品推荐", english: "Skincare Product Recommendations" },
      { chinese: "#美妆教程", english: "Makeup Tutorial" },
      { chinese: "#护肤小知识", english: "Skincare Tips" },
      { chinese: "#美妆好物", english: "Beauty Finds" },
      { chinese: "#护肤经验分享", english: "Skincare Experience Sharing" }
    ]
  },
  {
    name: "Fashion & Style",
    description: "Trending hashtags for fashion and style content",
    hashtags: [
      { chinese: "#穿搭分享", english: "Outfit Sharing" },
      { chinese: "#时尚搭配", english: "Fashion Matching" },
      { chinese: "#日常穿搭", english: "Daily Outfits" },
      { chinese: "#穿搭推荐", english: "Outfit Recommendations" },
      { chinese: "#时尚单品", english: "Fashion Items" },
      { chinese: "#搭配技巧", english: "Styling Tips" },
      { chinese: "#穿搭灵感", english: "Outfit Inspiration" },
      { chinese: "#时尚穿搭", english: "Fashion Styling" },
      { chinese: "#穿搭日记", english: "Outfit Diary" },
      { chinese: "#搭配分享", english: "Style Sharing" }
    ]
  },
  {
    name: "Food & Dining",
    description: "Popular hashtags for food and restaurant content",
    hashtags: [
      { chinese: "#美食推荐", english: "Food Recommendations" },
      { chinese: "#美食分享", english: "Food Sharing" },
      { chinese: "#美食探店", english: "Restaurant Discovery" },
      { chinese: "#美食测评", english: "Food Reviews" },
      { chinese: "#美食打卡", english: "Food Check-in" },
      { chinese: "#美食记录", english: "Food Journal" },
      { chinese: "#美食vlog", english: "Food Vlog" },
      { chinese: "#美食攻略", english: "Food Guide" },
      { chinese: "#美食日记", english: "Food Diary" },
      { chinese: "#美食探索", english: "Food Exploration" }
    ]
  },
  {
    name: "Lifestyle & Travel",
    description: "Trending hashtags for lifestyle and travel content",
    hashtags: [
      { chinese: "#生活方式", english: "Lifestyle" },
      { chinese: "#旅行分享", english: "Travel Sharing" },
      { chinese: "#生活记录", english: "Life Records" },
      { chinese: "#旅行日记", english: "Travel Diary" },
      { chinese: "#生活日常", english: "Daily Life" },
      { chinese: "#旅行攻略", english: "Travel Guide" },
      { chinese: "#生活感悟", english: "Life Insights" },
      { chinese: "#旅行探索", english: "Travel Exploration" },
      { chinese: "#生活态度", english: "Life Attitude" },
      { chinese: "#旅行vlog", english: "Travel Vlog" }
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
                  <div key={hashtag.chinese} className="flex flex-col items-center gap-1 mb-2">
                    <Badge
                      variant="secondary"
                      className="text-sm py-1 px-3 cursor-pointer hover:bg-primary hover:text-white transition-colors"
                      onClick={() => {
                        navigator.clipboard.writeText(hashtag.chinese);
                        // You could add a toast notification here
                      }}
                    >
                      {hashtag.chinese}
                    </Badge>
                    <span className="text-xs text-gray-500">{hashtag.english}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};