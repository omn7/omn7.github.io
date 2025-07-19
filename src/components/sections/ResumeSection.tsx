import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Eye, FileText, Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

const ResumeSection = () => {
  const handleDownload = () => {
    // Create a sample resume download
    const link = document.createElement('a');
    link.href = '/sample-resume.pdf';
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

  const handlePreview = () => {
    // Open resume in new tab for preview
    window.open('/sample-resume.pdf', '_blank');
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "john.doe@email.com", link: "mailto:john.doe@email.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA", link: "" },
    { icon: Globe, label: "Website", value: "johndoe.dev", link: "https://johndoe.dev" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/johndoe", link: "https://linkedin.com/in/johndoe" },
    { icon: Github, label: "GitHub", value: "github.com/johndoe", link: "https://github.com/johndoe" }
  ];

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and improved team productivity by 40%."
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built responsive web applications with React and TypeScript. Collaborated with designers to implement pixel-perfect UI components."
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description: "Developed custom WordPress themes and plugins. Worked on client projects ranging from small business websites to e-commerce platforms."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      gpa: "3.8/4.0"
    },
    {
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      period: "2023",
      gpa: ""
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Download my complete resume or preview it online. Get in touch if you'd like to discuss opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </Button>
            <Button 
              onClick={handlePreview}
              variant="outline"
              className="border-border hover:bg-nav-hover px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              <Eye className="mr-2 h-5 w-5" />
              Preview Online
            </Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border shadow-card-custom">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <FileText className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <contact.icon className="h-4 w-4 text-primary flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.link ? (
                        <a 
                          href={contact.link} 
                          className="text-sm text-card-foreground hover:text-primary transition-colors break-all"
                          target={contact.link.startsWith('http') ? '_blank' : '_self'}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-sm text-card-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <Card className="bg-card border-border shadow-card-custom">
              <CardHeader>
                <CardTitle className="text-card-foreground">Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-card-foreground">{exp.title}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                      <p className="text-card-foreground/80 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-card border-border shadow-card-custom">
              <CardHeader>
                <CardTitle className="text-card-foreground">Education & Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-card-foreground">{edu.degree}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                      {edu.gpa && (
                        <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;