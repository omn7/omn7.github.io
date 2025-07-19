import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import Footer from "@/components/Footer";
import { useState } from "react";

const aboutText = `I'm Om, a second-year Computer Engineering student with a strong passion for technology and innovation. Currently diving deep into areas like Generative AI, neural networks, transformers, and software development, I enjoy building practical projects that solve real-world problems. From experimenting with tools like Hugging Face and LangChain to creating web applications, I'm always eager to learn and apply new concepts in AI and coding.`;

const Index = () => {
  const [showFullAbout, setShowFullAbout] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground font-roboto">
      <Navigation />
      <Hero />
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">About Me</h2>
          <p className={`text-base sm:text-lg text-muted-foreground mx-auto ${showFullAbout ? '' : 'line-clamp-3'}`} style={{ WebkitLineClamp: showFullAbout ? 'unset' : 3 }}>
            {aboutText}
          </p>
          {!showFullAbout ? (
            <span
              className="mt-2 inline-block underline underline-offset-4 text-primary cursor-pointer font-medium px-2 py-1"
              onClick={() => setShowFullAbout(true)}
            >
              Read More
            </span>
          ) : (
            <span
              className="mt-2 inline-block underline underline-offset-4 text-primary cursor-pointer font-medium px-2 py-1"
              onClick={() => setShowFullAbout(false)}
            >
              Read Less
            </span>
          )}
        </div>
      </section>
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Index;
