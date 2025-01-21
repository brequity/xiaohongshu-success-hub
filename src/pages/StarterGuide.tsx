import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StarterGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-center mb-8">10-Minute Quickstart Guide to Xiaohongshu</h1>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started (Minutes 1-2)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>First, download the Xiaohongshu app from your app store (you may need to switch to the Chinese App Store or use an APK file). Create your account using either your phone number or email - international numbers work fine.</p>
              <p>For your initial setup, focus on three key elements:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Upload a clear, professional profile picture - either a well-lit headshot or your brand logo</li>
                <li>Choose a username that's professional and memorable, ideally matching your brand</li>
                <li>Write a brief but impactful bio that clearly states who you are and what value you provide</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Optimize Your Profile (Minutes 3-4)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your bio is crucial - include 3-4 keywords that represent your expertise. For example, "Beauty Expert | Travel Enthusiast | Lifestyle Creator." Make sure to add any permitted social media links and select your primary content categories (like Beauty, Fashion, or Lifestyle).</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Plan Your First Post (Minutes 5-6)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your first post should showcase your best work. Here's what makes a strong first post:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Select 4-9 high-quality photos that represent your content style</li>
                <li>Write a clear, engaging caption (200-300 characters works well)</li>
                <li>Add 3-5 relevant hashtags that match your content</li>
                <li>Include a call-to-action, like asking a question or encouraging saves</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prepare Your Content (Minutes 7-8)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Before posting, ensure you have:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>High-resolution, well-lit photos ready to go</li>
                <li>Clear, error-free text prepared in advance</li>
                <li>Researched relevant hashtags for your niche</li>
                <li>Planned your posting time (peak hours are 7-9am and 7-10pm CST)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Start Engaging (Minutes 9-10)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Begin building your presence through engagement:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Like 10-15 posts in your niche daily</li>
                <li>Leave thoughtful comments on 5-7 posts</li>
                <li>Save content that inspires you or relates to your niche</li>
                <li>Follow accounts that align with your content style</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>First Week Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Set these achievable targets for your first week:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Post your first piece of content</li>
                <li>Follow 50 relevant accounts in your niche</li>
                <li>Engage with at least 20 posts daily</li>
                <li>Save 15 posts that inspire you</li>
                <li>Respond to every comment you receive</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Tips for Success</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Remember these essential guidelines:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Focus on quality over quantity in everything you do</li>
                <li>Stay authentic - your unique perspective matters</li>
                <li>Engage consistently with your growing community</li>
                <li>Provide value in every post</li>
                <li>Maintain daily activity on the platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Watch out for these typical newcomer errors:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Posting low-quality images</li>
                <li>Using irrelevant or too many hashtags</li>
                <li>Neglecting to engage with others</li>
                <li>Posting irregularly</li>
                <li>Creating only promotional content</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>After your first week, focus on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Creating a consistent content calendar</li>
                <li>Establishing a regular posting routine</li>
                <li>Tracking your engagement metrics</li>
                <li>Analyzing what content performs best</li>
                <li>Adjusting your strategy based on results</li>
              </ul>
              <p className="mt-6 font-medium">Remember: The key to success on Xiaohongshu isn't just about posting content - it's about building genuine connections and providing real value to your audience. Start with these basics and build from there. Consistency and authenticity will take you far on this platform.</p>
              <p className="mt-4 italic">Need help with any of these steps? Check back to the main chapters of this guide for detailed strategies on each element mentioned here.</p>
              <p className="text-xl font-semibold text-center mt-8">Let your Xiaohongshu journey begin!</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StarterGuide;