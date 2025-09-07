import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CatCuriosities = () => {
  const facts = [
    {
      title: "The Great Sleep",
      emoji: "😴",
      fact: "Cats sleep 12–16 hours a day",
      explanation: "This behavior comes from their predator ancestors who needed to conserve energy for hunting.",
      color: "from-blue-100/50 to-blue-200/50 dark:from-blue-900/30 dark:to-blue-800/30"
    },
    {
      title: "Magical Purrs",
      emoji: "🎵",
      fact: "Purring can calm them and... us",
      explanation: "Purr vibrations (20-50 Hz) have therapeutic effects, reducing stress and blood pressure even in humans.",
      color: "from-green-100/50 to-green-200/50 dark:from-green-900/30 dark:to-green-800/30"
    },
    {
      title: "The Art of Kneading",
      emoji: "🥐",
      fact: "Kneading is a comfort behavior",
      explanation: "It recalls the movement they made as kittens to stimulate maternal milk. It's a sign of happiness and security.",
      color: "from-orange-100/50 to-orange-200/50 dark:from-orange-900/30 dark:to-orange-800/30"
    },
    {
      title: "Expert Communicators",
      emoji: "🗣️",
      fact: "They've developed over 16 vocalizations",
      explanation: "Meows are mainly for communicating with humans. Among cats they use pheromones, body language and purrs.",
      color: "from-purple-100/50 to-purple-200/50 dark:from-purple-900/30 dark:to-purple-800/30"
    },
    {
      title: "Born Acrobats",
      emoji: "🤸",
      fact: "Their sense of balance is extraordinary",
      explanation: "The vestibular organ in the inner ear and tail act as natural stabilizers for perfect landings.",
      color: "from-pink-100/50 to-pink-200/50 dark:from-pink-900/30 dark:to-pink-800/30"
    },
    {
      title: "Night Guardians",
      emoji: "🌙",
      fact: "They see 6 times better in the dark than humans",
      explanation: "The tapetum lucidum reflects light through the retina, amplifying night vision for crepuscular hunting.",
      color: "from-indigo-100/50 to-indigo-200/50 dark:from-indigo-900/30 dark:to-indigo-800/30"
    },
    {
      title: "Unique Noses",
      emoji: "👃",
      fact: "Nose prints are unique like fingerprints",
      explanation: "Each cat has a distinctive nasal pattern that could theoretically be used for identification.",
      color: "from-yellow-100/50 to-yellow-200/50 dark:from-yellow-900/30 dark:to-yellow-800/30"
    },
    {
      title: "Feline Sprinters",
      emoji: "⚡",
      fact: "They can run up to 48 km/h",
      explanation: "In short bursts they can reach surprising speeds, thanks to the muscular structure of their hind legs.",
      color: "from-red-100/50 to-red-200/50 dark:from-red-900/30 dark:to-red-800/30"
    }
  ];

  return (
    <section id="curiosita" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cat-text-gradient">
            Curiosities & Behaviors 💡
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the secrets that make cats such fascinating creatures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <Card 
              key={index} 
              className={`cat-card bg-gradient-to-br ${fact.color} cat-hover-scale h-full transition-all duration-300 hover:shadow-xl group cursor-pointer`}
            >
              <CardHeader className="text-center pb-3">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {fact.emoji}
                </div>
                <CardTitle className="text-lg">{fact.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <CardDescription className="font-semibold text-sm leading-tight">
                  "{fact.fact}"
                </CardDescription>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {fact.explanation}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sezione extra con statistiche */}
        <div className="mt-20">
          <Card className="cat-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-3">
                <span>📊</span>
                Feline Numbers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">230°</div>
                  <p className="text-sm text-muted-foreground">Ear rotation</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">18</div>
                  <p className="text-sm text-muted-foreground">Paw digits</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">32</div>
                  <p className="text-sm text-muted-foreground">Muscles per ear</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">9</div>
                  <p className="text-sm text-muted-foreground">Legendary lives</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CatCuriosities;