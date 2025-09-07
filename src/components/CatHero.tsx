import { Button } from "@/components/ui/button";
import heroCatImage from "@/assets/hero-cat.jpg";

interface CatHeroProps {
  onNavigate: (section: string) => void;
}

const CatHero = ({ onNavigate }: CatHeroProps) => {
  return (
    <section className="cat-hero-bg min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <img 
            src={heroCatImage} 
            alt="Cute cartoon cat welcoming you"
            className="w-40 h-40 object-contain cat-bounce"
            loading="eager"
          />
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 cat-text-gradient text-shadow">
          Cat World
        </h1>
        
        <p className="text-xl md:text-2xl text-navy dark:text-cream mb-8 max-w-2xl mx-auto leading-relaxed">
          From ancient myths to curious whiskers: discover everything about cats in a simple and fun way 😺
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => onNavigate('origini')}
            className="cat-button-primary text-lg px-8 py-4"
          >
            🏺 Discover Origins
          </Button>
          
          <Button 
            onClick={() => onNavigate('anatomia')}
            className="cat-button-secondary text-lg px-8 py-4"
          >
            🔍 Anatomy
          </Button>
          
          <Button 
            onClick={() => onNavigate('quiz')}
            className="cat-button-accent text-lg px-8 py-4"
          >
            🧠 Take the Quiz
          </Button>
        </div>
        
        <div className="mt-12 animate-bounce">
          <p className="text-sm text-muted-foreground">
            Scroll to start the journey ⬇️
          </p>
        </div>
      </div>
    </section>
  );
};

export default CatHero;