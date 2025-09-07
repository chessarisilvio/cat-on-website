import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface CatNavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const CatNavigation = ({ activeSection, onNavigate }: CatNavigationProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('catSiteTheme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('catSiteTheme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('catSiteTheme', 'light');
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', emoji: '🏠' },
    { id: 'origini', label: 'Origins', emoji: '🏺' },
    { id: 'anatomia', label: 'Anatomy', emoji: '🔍' },
    { id: 'curiosita', label: 'Curiosities', emoji: '💡' },
    { id: 'quiz', label: 'Quiz', emoji: '🧠' },
    { id: 'galleria', label: 'Gallery', emoji: '📸' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/20">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="text-2xl">🐱</span>
            <span className="font-bold text-lg hidden sm:inline">Cat World</span>
          </div>
          
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate(item.id)}
                className={`transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-muted'
                }`}
              >
                <span className="mr-1">{item.emoji}</span>
                <span className="hidden md:inline">{item.label}</span>
              </Button>
            ))}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="ml-2"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CatNavigation;