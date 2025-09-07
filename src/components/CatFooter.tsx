import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun, Heart } from "lucide-react";
import { useState, useEffect } from "react";

interface CatFooterProps {
  onNavigate: (section: string) => void;
}

const CatFooter = ({ onNavigate }: CatFooterProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('catSiteTheme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
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

  const sections = [
    { id: 'hero', label: 'Home', emoji: '🏠' },
    { id: 'origini', label: 'Origins', emoji: '🏺' },
    { id: 'anatomia', label: 'Anatomy', emoji: '🔍' },
    { id: 'curiosita', label: 'Curiosities', emoji: '💡' },
    { id: 'quiz', label: 'Quiz', emoji: '🧠' },
    { id: 'galleria', label: 'Gallery', emoji: '📸' },
  ];

  return (
    <footer className="py-20 px-4 bg-background border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <Card className="cat-card bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🐾</div>
              <h3 className="text-3xl font-bold mb-4">Did you enjoy this journey?</h3>
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Share the love for cats and always remember: "Adopt, don't shop" ❤️
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Cat World: Origins, Anatomy and Quiz!',
                        text: 'Discover everything about cats in a fun and educational way!',
                        url: window.location.href
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="cat-button-primary"
                >
                  📱 Share
                </Button>
                <Button 
                  onClick={() => onNavigate('quiz')}
                  className="cat-button-accent"
                >
                  🔄 Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Links Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span>🗺️</span> Navigate Site
            </h4>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onNavigate(section.id)}
                  className="block text-left text-muted-foreground hover:text-foreground transition-colors w-full p-2 rounded hover:bg-muted"
                >
                  <span className="mr-2">{section.emoji}</span>
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span>📚</span> Useful Resources
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <a href="#" className="block hover:text-foreground transition-colors p-2 rounded hover:bg-muted">
                🏥 Vets in your area
              </a>
              <a href="#" className="block hover:text-foreground transition-colors p-2 rounded hover:bg-muted">
                🏠 Responsible adoptions
              </a>
              <a href="#" className="block hover:text-foreground transition-colors p-2 rounded hover:bg-muted">
                📖 Owner guides
              </a>
              <a href="#" className="block hover:text-foreground transition-colors p-2 rounded hover:bg-muted">
                🎓 Feline education courses
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span>⚙️</span> Settings
            </h4>
            <div className="space-y-4">
              <Button
                onClick={toggleDarkMode}
                variant="outline"
                className="w-full justify-start"
              >
                {isDark ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </Button>
              <div className="text-sm text-muted-foreground">
                <p>🍪 This site uses only essential cookies</p>
                <p>🔒 Privacy respected</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">🐱</span>
              <span className="font-bold">Cat World</span>
              <span>•</span>
              <span>2024</span>
            </div>
            
            <div className="text-center text-muted-foreground">
              <p className="flex items-center gap-1 text-sm">
                Made with <Heart className="w-4 h-4 text-red-500" /> for all cat lovers
              </p>
            </div>

            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>📸 Images: Educational placeholders</p>
              <p>🎨 Design: Open source system</p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-8 p-4 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground italic">
            "A cat brings love, joy and a little mystery to every home it touches" 🐾
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CatFooter;