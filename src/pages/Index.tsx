import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SocialSection from "@/components/SocialSection";
import SetupSection from "@/components/SetupSection";
import PartnersSection from "@/components/PartnersSection";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SocialSection />
        <SetupSection />
        <PartnersSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
