import AICoursesPreview from "@/components/AICoursesPreview";
import AIJobsListing from "@/components/AIJobsListing";
import AINewsBlog from "@/components/AINewsBlog";
import AITechOverview from "@/components/AITechOverview";
import AIToolsPreview from "@/components/AIToolsPreview";
import ExploreNetwork from "@/components/ExploreNetwork";
import GlobalStats from "@/components/GlobalStats";
import HeroSection from "@/components/HeroSection";
import NewsletterSection from "@/components/NewsletterSection";
import TopAICourses from "@/components/TopAICourses";
import TrustedPlatforms from "@/components/TrustedPlatforms";
import UpcomingAITools from "@/components/UpcomingAITools";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <GlobalStats />
      <TrustedPlatforms />
      <AICoursesPreview />
      <AIToolsPreview />
      <AITechOverview />
      <AIJobsListing />
      <NewsletterSection />
    </div>
  );
}
