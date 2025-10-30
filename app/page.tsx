import AIJobsListing from "@/components/AIJobsListing";
import AINewsBlog from "@/components/AINewsBlog";
import AITechOverview from "@/components/AITechOverview";
import ExploreNetwork from "@/components/ExploreNetwork";
import GlobalStats from "@/components/GlobalStats";
import HeroSection from "@/components/HeroSection";
import NewsletterSection from "@/components/NewsletterSection";
import TopAICourses from "@/components/TopAICourses";
import UpcomingAITools from "@/components/UpcomingAITools";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <ExploreNetwork />
      <GlobalStats />
      <TopAICourses />
      <UpcomingAITools />
      <AINewsBlog />
      <AITechOverview />
      <AIJobsListing />
      <NewsletterSection />
    </main>
  );
}
