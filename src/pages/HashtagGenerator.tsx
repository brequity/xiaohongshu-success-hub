import { Navigation } from "@/components/Navigation";
import { HashtagHero } from "@/components/sections/HashtagHero";
import { HashtagCategories } from "@/components/sections/HashtagCategories";
import { NewsletterSubscription } from "@/components/NewsletterSubscription";

const HashtagGenerator = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HashtagHero />
      <HashtagCategories />
      <NewsletterSubscription />
    </div>
  );
};

export default HashtagGenerator;