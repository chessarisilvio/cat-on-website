import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const CatAnatomy = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const anatomyParts = [
    {
      id: "ears",
      name: "Ears",
      position: { top: "15%", left: "45%" },
      description: "Rotate up to ~180°, extremely fine hearing.",
      details: "Cats can move their ears independently and perceive frequencies up to 64,000 Hz, much higher than humans.",
      emoji: "👂"
    },
    {
      id: "eyes",
      name: "Eyes",
      position: { top: "25%", left: "40%" },
      description: "Excellent twilight vision, very reactive pupils.",
      details: "The tapetum lucidum reflects light improving night vision. Pupils can dilate completely to capture more light.",
      emoji: "👁️"
    },
    {
      id: "whiskers",
      name: "Whiskers",
      position: { top: "35%", left: "30%" },
      description: "Detect air vibrations and tight spaces.",
      details: "Whiskers are connected to sensitive nerve endings and help navigate in the dark and measure openings.",
      emoji: "〰️"
    },
    {
      id: "paws",
      name: "Paws",
      position: { top: "70%", left: "40%" },
      description: "Silent pads, retractable claws.",
      details: "Pads absorb noise while walking. Retractable claws stay sharp for climbing and defense.",
      emoji: "🐾"
    },
    {
      id: "tail",
      name: "Tail",
      position: { top: "45%", left: "75%" },
      description: "Balance and communication.",
      details: "Works as a rudder for balance and as body language to express emotions and intentions.",
      emoji: "〰️"
    },
    {
      id: "fur",
      name: "Fur",
      position: { top: "50%", left: "50%" },
      description: "Thermal insulation, social signals.",
      details: "The coat regulates body temperature and communicates emotional states through fur erection.",
      emoji: "🧶"
    }
  ];

  return (
    <section id="anatomia" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cat-text-gradient">
            Feline Anatomy 🔍
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Click on cat parts to discover their secrets
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Diagramma Interattivo */}
          <div className="relative">
            <Card className="cat-card p-8">
              <div className="relative mx-auto" style={{ width: "300px", height: "400px" }}>
                {/* Silhouette del gatto (SVG semplificato) */}
                <svg
                  viewBox="0 0 300 400"
                  className="w-full h-full"
                  style={{ filter: selectedPart ? 'brightness(0.7)' : 'brightness(1)' }}
                >
                  {/* Corpo del gatto */}
                  <ellipse cx="150" cy="200" rx="80" ry="120" fill="hsl(var(--teal))" opacity="0.3" />
                  {/* Testa */}
                  <circle cx="150" cy="100" r="60" fill="hsl(var(--teal))" opacity="0.3" />
                  {/* Orecchie */}
                  <polygon points="120,70 140,40 160,70" fill="hsl(var(--teal))" opacity="0.3" />
                  <polygon points="140,70 160,40 180,70" fill="hsl(var(--teal))" opacity="0.3" />
                  {/* Coda */}
                  <path d="M 220 180 Q 280 150 290 100" stroke="hsl(var(--teal))" strokeWidth="20" fill="none" opacity="0.3" />
                  {/* Zampe */}
                  <rect x="120" y="280" width="20" height="60" fill="hsl(var(--teal))" opacity="0.3" />
                  <rect x="160" y="280" width="20" height="60" fill="hsl(var(--teal))" opacity="0.3" />
                  <rect x="100" y="260" width="20" height="80" fill="hsl(var(--teal))" opacity="0.3" />
                  <rect x="180" y="260" width="20" height="80" fill="hsl(var(--teal))" opacity="0.3" />
                </svg>

                {/* Hotspots interattivi */}
                {anatomyParts.map((part) => (
                  <button
                    key={part.id}
                    className={`absolute w-8 h-8 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      selectedPart === part.id
                        ? 'bg-accent animate-pulse shadow-lg'
                        : 'bg-primary hover:bg-primary/80'
                    }`}
                    style={{
                      top: part.position.top,
                      left: part.position.left,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setSelectedPart(selectedPart === part.id ? null : part.id)}
                    aria-label={`Learn more about: ${part.name}`}
                  >
                    <span className="text-xs">{part.emoji}</span>
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Informazioni */}
          <div className="space-y-6">
            {selectedPart ? (
              <Card className="cat-card cat-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">
                      {anatomyParts.find(p => p.id === selectedPart)?.emoji}
                    </span>
                    {anatomyParts.find(p => p.id === selectedPart)?.name}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {anatomyParts.find(p => p.id === selectedPart)?.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {anatomyParts.find(p => p.id === selectedPart)?.details}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="cat-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">🐱</span>
                    Explore Anatomy
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Select a cat part to discover how it works!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every part of the feline body is perfectly adapted for survival: 
                    from night hunting to balance, every detail has a precise purpose.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Lista parti rapida */}
            <div className="grid grid-cols-2 gap-3">
              {anatomyParts.map((part) => (
                <button
                  key={part.id}
                  onClick={() => setSelectedPart(part.id)}
                  className={`p-3 rounded-lg text-left transition-all duration-300 border ${
                    selectedPart === part.id
                      ? 'bg-accent text-accent-foreground border-accent'
                      : 'bg-background border-border hover:bg-muted'
                  }`}
                >
                  <span className="mr-2">{part.emoji}</span>
                  <span className="font-medium">{part.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatAnatomy;