import { Navigation } from "@/components/Navigation";
import { XHSHero } from "@/components/sections/XHSHero";
import { XHSIntro } from "@/components/sections/XHSIntro";
import { XHSHowItWorks } from "@/components/sections/XHSHowItWorks";
import { XHSWhyMarket } from "@/components/sections/XHSWhyMarket";
import { XHSKeyFeatures } from "@/components/sections/XHSKeyFeatures";
import { XHSSuccessStories } from "@/components/sections/XHSSuccessStories";
import { XHSChallenges } from "@/components/sections/XHSChallenges";
import { XHSGettingStarted } from "@/components/sections/XHSGettingStarted";
import { XHSFAQ } from "@/components/sections/XHSFAQ";
import { NewsletterSubscription } from "@/components/NewsletterSubscription";

const XHS = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <XHSHero />
      <XHSIntro />
      <XHSHowItWorks />
      <XHSWhyMarket />
      <XHSKeyFeatures />
      <XHSSuccessStories />
      <XHSChallenges />
      <XHSGettingStarted />
      <XHSFAQ />
      <NewsletterSubscription />
    </div>
  );
};

export default XHS;