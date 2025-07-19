import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, ExternalLink } from "lucide-react";

const HackathonsSection = () => {
  const hackathons = [
    {
      id: 1,
      name: "TechCrunch Disrupt 2024",
      date: "March 2024",
      position: "Winner - Best AI Application",
      description: "Built an AI-powered code review assistant that helps developers identify bugs and optimization opportunities in real-time.",
      technologies: ["React", "Python", "OpenAI API", "Flask"],
      teamSize: 4,
      link: "https://example.com"
    },
    {
      id: 2,
      name: "NASA Space Apps Challenge",
      date: "October 2023",
      position: "2nd Place - Global Category",
      description: "Developed a web application for visualizing satellite data to help farmers optimize crop management and predict weather patterns.",
      technologies: ["Vue.js", "D3.js", "NASA APIs", "Node.js"],
      teamSize: 3,
      link: "https://example.com"
    },
    {
      id: 3,
      name: "DevPost Climate Hackathon",
      date: "June 2023",
      position: "Top 10 Finalist",
      description: "Created a mobile app that gamifies sustainable living by tracking carbon footprint and suggesting eco-friendly alternatives.",
      technologies: ["React Native", "Firebase", "GraphQL", "TypeScript"],
      teamSize: 2,
      link: "https://example.com"
    },
    {
      id: 4,
      name: "MLH Local Hack Day",
      date: "December 2022",
      position: "Best Beginner Hack",
      description: "Built my first full-stack web application - a study buddy matching platform for university students.",
      technologies: ["HTML/CSS", "JavaScript", "MongoDB", "Express.js"],
      teamSize: 1,
      link: "https://example.com"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Hackathons</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Competitive programming events where I've collaborated with teams to build innovative solutions under tight deadlines.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {hackathons.map((hackathon) => (
            <Card key={hackathon.id} className="bg-card border-border hover:shadow-card-custom transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                      {hackathon.name}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {hackathon.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        Team of {hackathon.teamSize}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                </div>
                
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {hackathon.position}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-card-foreground/80 leading-relaxed">
                  {hackathon.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-border">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;