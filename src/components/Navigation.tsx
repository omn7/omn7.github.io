import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'skills', label: 'Skills' },
    { id: 'resume', label: 'Resume' }
  ];

  return (
    <nav className="bg-section-bg border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-primary">
            Portfolio
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-muted rounded-lg p-1">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => onTabChange(tab.id)}
                className={`
                  px-6 py-2 rounded-md font-medium transition-all duration-300
                  ${activeTab === tab.id 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-nav-hover'
                  }
                `}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;