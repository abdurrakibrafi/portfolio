import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import ExperienceSection from "@/components/experiance";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <CustomCursor />
      <Navbar />

      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="border-t border-border py-8 text-center font-display text-xs text-muted-foreground">
        © 2026 Abdur Rakib Rafi — All Rights Reserved
      </footer>
    </div>
  );
};

export default Index;