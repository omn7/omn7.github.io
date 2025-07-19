import { Star, Download } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/sample-resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
  };

  const portfolioData = {
    heading: "John Doe - Full Stack Developer",
    description: "Passionate developer with 5+ years of experience building scalable web applications and beautiful user interfaces. I love turning complex problems into simple, elegant solutions.",
    reviews: {
      count: 150,
      avatars: [
        {
          src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
          alt: "Client 1",
        },
        {
          src: "https://www.shadcnblocks.com/images/block/avatar-2.webp", 
          alt: "Client 2",
        },
        {
          src: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
          alt: "Client 3",
        },
        {
          src: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
          alt: "Client 4",
        },
        {
          src: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
          alt: "Client 5",
        },
      ],
    },
  };

  return (
    <section className="py-32 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"></div>
      
      <div className="container text-center relative z-10">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl text-foreground">
            {portfolioData.heading}
          </h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            {portfolioData.description}
          </p>
        </div>
        
        <Button 
          onClick={handleResumeDownload}
          size="lg" 
          className="mt-10 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Resume
        </Button>
        
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span className="mx-4 inline-flex items-center -space-x-4">
            {portfolioData.reviews.avatars.map((avatar, index) => (
              <Avatar key={index} className="size-14 border">
                <AvatarImage src={avatar.src} alt={avatar.alt} />
              </Avatar>
            ))}
          </span>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="size-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-left font-medium text-muted-foreground">
              from {portfolioData.reviews.count}+ satisfied clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;