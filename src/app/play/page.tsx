import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const activities = [
  {
    title: "Document Photography",
    description: "Exploring urban landscapes and capturing the intersection of technology and humanity through my lens.",
    imageId: "play-photography",
    tag: "Creative"
  },
  {
    title: "Reading Tech Ethos",
    description: "Currently diving deep into the ethics of AI and how we can build more equitable future systems.",
    imageId: "play-reading",
    tag: "Learning"
  },
  {
    title: "Side Quests in Python",
    description: "Building small automation scripts and exploring new ML libraries on the weekend.",
    imageId: "play-coding",
    tag: "Hacking"
  },
  {
    title: "Coffee & Architecture",
    description: "A student of modern architectural design and a lover of a perfectly pulled espresso.",
    imageId: "play-lifestyle",
    tag: "Lifestyle"
  }
];

export default function PlayPage() {
  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent">Play</Badge>
          <h1 className="text-5xl font-headline font-bold text-primary mb-6">Outside the Roadmap</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            When I&apos;m not defining KPIs or refining backlogs, you can find me exploring the world through a lens, reading about the future, or experimenting with new tech.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {activities.map((activity, i) => {
            const img = getImg(activity.imageId);
            return (
              <Card key={i} className="break-inside-avoid border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-card">
                <div className="relative aspect-[4/5]">
                  {img?.imageUrl && (
                    <Image
                      src={img.imageUrl}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={img.imageHint}
                    />
                  )}
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
            );
          })}
        </div>
      </section>
    </div>
  );
}
