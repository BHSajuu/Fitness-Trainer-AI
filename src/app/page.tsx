import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UserPrograms from "@/components/UserPrograms";
import StatsSection from "@/components/StatsSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <UserPrograms />
    </div>
  );
};

export default HomePage;