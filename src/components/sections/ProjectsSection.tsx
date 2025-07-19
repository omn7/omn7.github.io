import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com/johndoe/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
      stars: 124,
      image: "/placeholder.svg"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["TypeScript", "React", "Socket.io", "MongoDB", "Express"],
      githubUrl: "https://github.com/johndoe/taskmanager",
      liveUrl: "https://taskmanager-demo.com",
      stars: 89,
      image: "/placeholder.svg"
    },
    {
      title: "Weather Dashboard",
      description: "Modern weather dashboard with interactive maps, 7-day forecasts, and location-based weather alerts using multiple weather APIs.",
      technologies: ["Vue.js", "Python", "FastAPI", "Redis", "Chart.js"],
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.com",
      stars: 67,
      image: "/placeholder.svg"
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chat assistant powered by machine learning with natural language processing and context-aware responses.",
      technologies: ["Python", "TensorFlow", "React", "WebSocket", "Docker"],
      githubUrl: "https://github.com/johndoe/ai-chat",
      liveUrl: "https://ai-chat-demo.com",
      stars: 203,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#222831' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 z-20 pointer-events-none rounded-xl">
                <div className="w-full h-full rounded-xl animate-thunder-border border-2 border-transparent" style={{ boxShadow: '0 0 24px 6px #ff1744, 0 0 32px 4px #ff1744 inset' }} />
              </div>
              <Card key={index} className="bg-card border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg group relative overflow-hidden rounded-xl">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-muted-foreground">{project.stars} stars</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs border-border"
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

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8" asChild>
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;