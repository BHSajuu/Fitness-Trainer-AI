import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UserPrograms from "@/components/UserPrograms";


const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <UserPrograms />
    </div>
  );
};

export default HomePage;