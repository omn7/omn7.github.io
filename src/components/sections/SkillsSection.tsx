import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
      ]
    },
    {
      title: "Mobile & Cross-Platform",
      skills: [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Ionic", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
        { name: "Electron", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to create amazing digital experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-card border-border shadow-card-custom">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-skill-card hover:bg-nav-hover transition-all duration-300 group cursor-pointer"
                    >
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        {/* Fallback icon */}
                        <div className="hidden w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold text-sm">
                          {skill.name.slice(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-card-foreground text-center group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Full-Stack Development",
              "UI/UX Design",
              "API Development",
              "Database Design",
              "DevOps & Deployment",
              "Mobile Development",
              "Performance Optimization",
              "Team Leadership"
            ].map((competency, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:shadow-card-custom transition-all duration-300 group"
              >
                <h4 className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                  {competency}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;