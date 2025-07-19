import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a sample resume download link
    const link = document.createElement('a');
    link.href = '/sample-resume.pdf'; // You can replace this with actual resume URL
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 rounded-full bg-gradient-accent p-1 shadow-glow">
            <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-primary">
              JD
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          {/* Bio */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate developer with 5+ years of experience building scalable web applications
            and beautiful user interfaces. I love turning complex problems into simple, elegant solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={handleResumeDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              className="px-6 py-3 rounded-lg font-medium hover:bg-nav-hover border-border"
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Skills
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-lg hover:bg-nav-hover border-border">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-lg hover:bg-nav-hover border-border">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-lg hover:bg-nav-hover border-border">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;