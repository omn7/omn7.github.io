import { useState } from "react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import HackathonsSection from "@/components/sections/HackathonsSection";
import BlogsSection from "@/components/sections/BlogsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("hackathons");

  const renderActiveSection = () => {
    switch (activeTab) {
      case "hackathons":
        return <HackathonsSection />;
      case "blogs":
        return <BlogsSection />;
      case "skills":
        return <SkillsSection />;
      case "resume":
        return <ResumeSection />;
      default:
        return <HackathonsSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-roboto">
      <Hero />
      <ProjectsSection />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderActiveSection()}
      <Footer />
    </div>
  );
};

export default Index;
