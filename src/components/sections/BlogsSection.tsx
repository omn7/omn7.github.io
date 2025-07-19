// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Calendar, Clock, ArrowRight, Heart, MessageCircle } from "lucide-react";
// import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BlogsSection = () => {
  return (
    <section className="py-20 bg-background flex flex-col items-center justify-center min-h-[40vh]">
      <h2 className="text-4xl font-bold text-foreground mb-4">Blog Coming Soon</h2>
      <p className="text-lg text-muted-foreground mb-6">Stay tuned! Exciting blog posts will be published here soon.</p>
      <Button asChild className="px-6 py-2 rounded-full text-base font-medium">
        <Link to="/">Go to Home Page</Link>
      </Button>
    </section>
  );
};

export default BlogsSection;