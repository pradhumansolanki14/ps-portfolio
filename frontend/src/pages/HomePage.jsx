import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../sections/home/HeroSection";
import AboutPreview from "../sections/home/AboutPreview";
import FeaturedProjects from "../sections/home/FeaturedProjects";
import SkillsPreview from "../sections/home/SkillsPreview";
import CTASection from "../sections/home/CTASection";
import ReviewsSection from "../sections/home/ReviewSection";

const HomePage = () => {
  return (
    <>
    

      <main className="pt-22 md:pt-0 space-y-20 md:space-y-24">
        <HeroSection/>
        <AboutPreview/>
        <SkillsPreview />
        <FeaturedProjects />
        <ReviewsSection/>
        <CTASection />
      </main>

   
    </>
  );
};

export default HomePage;