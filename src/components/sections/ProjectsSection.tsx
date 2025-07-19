import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "UpLiftx ",
      description: "Event Management Platform. done freelancing",
      technologies: ["React", "Node.js", "SupaBase", "Clerk API", "Tailwind CSS"],
      githubUrl: "https://github.com/omn7",
      liveUrl: "https://upliftx.vercel.app/",
      stars: 1,
      image: "/image.png"
    },
    {
      title: "Doubtbot AI",
      description: "This project is a chatbot powered by Gemini AI",
      technologies: ["TypeScript", "React", "gemini API", "Express"],
      githubUrl: "https://github.com/omn7/chat-ai",
      liveUrl: "https://doubtbot.netlify.app/",
      stars: 2,
      image: "/p1.png"
    },
    {
      title: "Crypto Price Tracker",
      description: "A real-time cryptocurrency price tracker.",
      technologies: ["React.js", "Javascript", "CoinGecko API", "Chart.js"],
      githubUrl: "https://github.com/omn7/Crypto-Price-Tracking-App-",
      liveUrl: "https://findmycrypto.netlify.app/",
      stars: 3,
      image: "/p4.png"
    },
    {
      title: "College Quiz Website",
      description: "BVCOEL QUIZ CHAMPIONSHIP Website",
      technologies: ["Typescript", "Tailwind", "React"],
      githubUrl: "https://github.com/omn7",
      liveUrl: "https://quizzers-bvcoel.vercel.app/",
      stars: 2,
      image: "/p3.png"
    }
  ];

  return (
    <section className="py-8" style={{ backgroundColor: '#222831' }}>
      <div className="container mx-auto px-2">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Featured Projects
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 z-20 pointer-events-none rounded-xl">
                <div className="w-full h-full rounded-xl animate-thunder-border border-2 border-transparent" style={{ boxShadow: '0 0 24px 6px #ff1744, 0 0 32px 4px #ff1744 inset' }} />
              </div>
              <Card key={index} className="bg-card border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg group relative overflow-hidden rounded-xl p-2">
                <div className="aspect-[4/2] bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2 pt-3 px-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span className="text-xs text-muted-foreground">{project.stars} stars</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="h-7 w-7" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" className="h-7 w-7" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 px-2 pb-2">
                  <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-[10px] border-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="sm" className="px-4 py-1 text-xs" asChild>
            <a href="https://github.com/omn7/" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;