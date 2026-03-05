import { Navbar } from "@/components/Navbar";
import { AIPortraitTool } from "@/components/AIPortraitTool";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    title: "Document Photography",
    description: "Exploring urban landscapes and capturing the intersection of technology and humanity through my lens.",
    image: "https://picsum.photos/seed/photography/600/800",
    tag: "Creative"
  },
  {
    title: "Reading Tech Ethos",
    description: "Currently diving deep into the ethics of AI and how we can build more equitable future systems.",
    image: "https://picsum.photos/seed/reading/600/400",
    tag: "Learning"
  },
  {
    title: "Side Quests in Python",
    description: "Building small automation scripts and exploring new ML libraries on the weekend.",
    image: "https://picsum.photos/seed/gadgets/600/400",
    tag: "Hacking"
  },
  {
    title: "Coffee & Architecture",
    description: "A student of modern architectural design and a lover of a perfectly pulled espresso.",
    image: "https://picsum.photos/seed/coffee/600/400",
    tag: "Lifestyle"
  }
];

export default function PlayPage() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent">Play</Badge>
          <h1 className="text-5xl font-headline font-bold text-primary mb-6">Outside the Roadmap</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            When I'm not defining KPIs or refining backlogs, you can find me exploring the world through a lens, reading about the future, or experimenting with new tech.
          </p>
        </div>

        {/* New AI Tool Integration */}
        <div className="mb-24">
          <AIPortraitTool />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {activities.map((activity, i) => (
            <Card key={i} className="break-inside-avoid border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="lifestyle photo"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-background/90 text-primary backdrop-blur-sm border-none font-bold uppercase tracking-widest text-[10px]">
                    {activity.tag}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-headline font-bold mb-3">{activity.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
