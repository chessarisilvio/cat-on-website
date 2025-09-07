import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CatOrigins = () => {
  const mythologies = [
    {
      culture: "Ancient Egypt",
      title: "Goddess Bastet",
      description: "Revered as home protectors, linked to goddess Bastet.",
      details: "In ancient Egypt, cats were considered sacred and associated with goddess Bastet, symbol of domestic protection, fertility and motherhood.",
      icon: "🏺",
      color: "from-yellow/20 to-peach/20"
    },
    {
      culture: "Japan",
      title: "Maneki-neko",
      description: "The Maneki-neko brings luck: paw up and good fortune!",
      details: "The famous waving cat statue is a symbol of fortune and prosperity, with origins dating back to the Edo period.",
      icon: "🐾",
      color: "from-pink/20 to-peach/20"
    },
    {
      culture: "Northern Europe",
      title: "Goddess Freya",
      description: "Goddess Freya traveled on a chariot pulled by cats.",
      details: "In Norse mythology, Freya, goddess of love and fertility, had a chariot pulled by two giant cats called Bygul and Trjegul.",
      icon: "⚡",
      color: "from-teal/20 to-blue-200/20"
    }
  ];

  const evolution = {
    title: "Evolution and Domestication",
    description: "From the wild species Felis silvestris lybica to domestic companions, thanks to coexistence with humans in early agricultural communities.",
    timeline: [
      { period: "9,000 years ago", event: "First traces of coexistence with humans in the Middle East" },
      { period: "7,000 years ago", event: "Spread to ancient Egypt" },
      { period: "2,000 years ago", event: "Expansion to Europe with the Romans" },
      { period: "Today", event: "Over 600 million domestic cats worldwide" }
    ]
  };

  return (
    <section id="origini" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cat-text-gradient">
            Cat Origins 🌟
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From ancient deities to modern beds: a journey through feline history
          </p>
        </div>

        {/* Mitologie */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Myths and Cultures</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {mythologies.map((myth, index) => (
              <Card key={index} className={`cat-card bg-gradient-to-br ${myth.color} cat-hover-scale transition-all duration-300`}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{myth.icon}</div>
                  <CardTitle className="text-xl">{myth.culture}</CardTitle>
                  <CardDescription className="text-lg font-semibold">{myth.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic mb-3">"{myth.description}"</p>
                  <p className="text-sm">{myth.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Evoluzione */}
        <div className="mb-12">
          <Card className="cat-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">🧬 {evolution.title}</CardTitle>
              <CardDescription className="text-lg">{evolution.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {evolution.timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.period}</h4>
                      <p className="text-muted-foreground">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CatOrigins;