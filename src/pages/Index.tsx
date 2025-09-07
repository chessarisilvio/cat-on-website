import { useState, useEffect } from "react";
import CatNavigation from "@/components/CatNavigation";
import CatHero from "@/components/CatHero";
import CatOrigins from "@/components/CatOrigins";
import CatAnatomy from "@/components/CatAnatomy";
import CatCuriosities from "@/components/CatCuriosities";
import CatQuiz from "@/components/CatQuiz";
import CatGallery from "@/components/CatGallery";
import CatFooter from "@/components/CatFooter";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <CatNavigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <section id="hero">
          <CatHero onNavigate={handleNavigate} />
        </section>
        
        <CatOrigins />
        <CatAnatomy />
        <CatCuriosities />
        <CatQuiz />
        <CatGallery />
      </main>
      
      <CatFooter onNavigate={handleNavigate} />
    </div>
  );
};

export default Index;
