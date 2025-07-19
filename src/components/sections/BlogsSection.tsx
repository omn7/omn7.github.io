import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Heart, MessageCircle } from "lucide-react";

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "A comprehensive guide on structuring large React applications using TypeScript, covering best practices, patterns, and performance optimization techniques.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Frontend",
      likes: 124,
      comments: 18,
      featured: true,
      link: "https://example.com/blog/react-typescript"
    },
    {
      id: 2,
      title: "The Future of Web Development: AI-Powered Coding",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we write code, from intelligent autocompletion to automated testing and deployment.",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "AI/ML",
      likes: 89,
      comments: 12,
      featured: false,
      link: "https://example.com/blog/ai-coding"
    },
    {
      id: 3,
      title: "Mastering CSS Grid: From Basics to Advanced Layouts",
      excerpt: "A deep dive into CSS Grid layout system, covering everything from fundamental concepts to complex responsive designs with practical examples.",
      date: "February 10, 2024",
      readTime: "10 min read",
      category: "CSS",
      likes: 156,
      comments: 24,
      featured: true,
      link: "https://example.com/blog/css-grid"
    },
    {
      id: 4,
      title: "API Design Best Practices for Modern Web Apps",
      excerpt: "Essential guidelines for designing RESTful APIs that are scalable, maintainable, and developer-friendly, with real-world examples.",
      date: "January 22, 2024",
      readTime: "15 min read",
      category: "Backend",
      likes: 78,
      comments: 9,
      featured: false,
      link: "https://example.com/blog/api-design"
    },
    {
      id: 5,
      title: "Optimizing Web Performance: A Developer's Guide",
      excerpt: "Practical strategies for improving website speed and performance, including code splitting, lazy loading, and optimization techniques.",
      date: "January 8, 2024",
      readTime: "11 min read",
      category: "Performance",
      likes: 203,
      comments: 31,
      featured: false,
      link: "https://example.com/blog/web-performance"
    },
    {
      id: 6,
      title: "Getting Started with Docker for Web Developers",
      excerpt: "A beginner-friendly introduction to containerization with Docker, covering setup, best practices, and deployment strategies.",
      date: "December 18, 2023",
      readTime: "9 min read",
      category: "DevOps",
      likes: 67,
      comments: 14,
      featured: false,
      link: "https://example.com/blog/docker-guide"
    }
  ];

  const categories = ["All", "Frontend", "Backend", "AI/ML", "CSS", "Performance", "DevOps"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Blog Posts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and experiences from my development journey. 
            Helping fellow developers learn and grow through practical content.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="rounded-full border-border hover:bg-nav-hover hover:border-primary transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Featured Posts</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.filter(blog => blog.featured).map((blog) => (
              <Card key={blog.id} className="bg-card border-border hover:shadow-card-custom transition-all duration-300 group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {blog.category}
                    </Badge>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                      Featured
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors leading-tight">
                    {blog.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blog.readTime}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-card-foreground/80 leading-relaxed">
                    {blog.excerpt}
                  </CardDescription>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {blog.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {blog.comments}
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-medium group/btn">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8">All Posts</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.filter(blog => !blog.featured).map((blog) => (
              <Card key={blog.id} className="bg-card border-border hover:shadow-card-custom transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="bg-secondary/50 w-fit mb-2">
                    {blog.category}
                  </Badge>
                  
                  <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors leading-tight">
                    {blog.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {blog.readTime}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-card-foreground/80 text-sm leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </CardDescription>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {blog.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {blog.comments}
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto text-sm font-medium group/btn">
                      Read
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;