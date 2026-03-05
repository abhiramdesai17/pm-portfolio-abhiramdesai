import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const ghibliPortrait = PlaceHolderImages.find(img => img.id === "ghibli-portrait");

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            {ghibliPortrait?.imageUrl && (
              <Image
                src={ghibliPortrait.imageUrl}
                alt="Abhiram Desai"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                data-ai-hint="ghibli san francisco"
              />
            )}
          </div>

          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-foreground/5 text-foreground border-border/50 font-bold tracking-[0.2em] uppercase text-[10px] px-4 py-1">About Me</Badge>
              <h1 className="text-5xl md:text-6xl font-headline font-bold text-foreground mb-6 tracking-tight leading-none">Abhiram Desai</h1>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  I am an AI Product Manager based in the United States, passionate about transforming complex technologies into simple, impactful user experiences. With a background in Data Analytics Engineering and a track record at Amazon and Philips, I specialize in bridging the gap between technical feasibility and business value.
                </p>
                <p>
                  My approach is rooted in rapid prototyping, data-driven decision-making, and high-alignment leadership. I thrive in environments where AI can unlock significant productivity gains and solve real-world problems.
                </p>
                <p>
                  I'm particularly interested in GenAI applications in healthcare and operational automation, where human-in-the-loop systems can create unprecedented value.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/20">
              <div className="space-y-4">
                <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Education</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <p className="font-bold text-foreground">MS Data Analytics</p>
                    <p className="text-muted-foreground font-light">Northeastern University</p>
                  </li>
                  <li>
                    <p className="font-bold text-foreground pt-1">B.Tech Electrical</p>
                    <p className="text-muted-foreground font-light">PES University</p>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Certifications</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <p className="font-bold text-foreground">Certified ScrumMaster</p>
                    <p className="text-muted-foreground font-light">CSM</p>
                  </li>
                  <li>
                    <p className="font-bold text-foreground pt-1">CAPM</p>
                    <p className="text-muted-foreground font-light">PMI</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="rounded-full px-10 font-bold bg-foreground text-background hover:bg-foreground/90 transition-all">
                <Link href="/resume">View Full Resume <ExternalLink className="ml-2" size={16} /></Link>
              </Button>
              <Button variant="outline" className="rounded-full border-foreground border-2 px-10 font-bold hover:bg-foreground hover:text-background transition-colors">
                Download CV <Download className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-muted/5 border-t border-border/20">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Core Values</span>
            <h2 className="text-4xl font-headline font-bold tracking-tight">My Philosophy</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4 group">
              <div className="h-px w-12 bg-foreground/20 group-hover:w-20 transition-all duration-500" />
              <h3 className="text-xl font-bold tracking-tight">User-Centric AI</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                AI shouldn't just be powerful; it should be intuitive. I focus on building tools that users actively rely on for real-world decision-making.
              </p>
            </div>
            <div className="space-y-4 group">
              <div className="h-px w-12 bg-foreground/20 group-hover:w-20 transition-all duration-500" />
              <h3 className="text-xl font-bold tracking-tight">Velocity & Validation</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                I believe in shipping fast to learn fast. Rapid prototyping and measurable success metrics are at the core of my PM process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}