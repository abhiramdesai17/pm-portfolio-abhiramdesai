
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/abhiram/800/800"
              alt="Abhiram Desai"
              fill
              className="object-cover"
              data-ai-hint="professional portrait"
            />
          </div>

          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent border-accent">About Me</Badge>
              <h1 className="text-5xl font-headline font-bold text-primary mb-6">Abhiram Desai</h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
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

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-2">Education</h4>
                <ul className="space-y-1 text-sm">
                  <li className="font-bold text-primary">MS Data Analytics</li>
                  <li className="text-muted-foreground">Northeastern University</li>
                  <li className="font-bold text-primary pt-2">B.Tech Electrical</li>
                  <li className="text-muted-foreground">PES University</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-2">Certifications</h4>
                <ul className="space-y-1 text-sm">
                  <li className="font-bold text-primary">Certified ScrumMaster</li>
                  <li className="text-muted-foreground">CSM</li>
                  <li className="font-bold text-primary pt-2">CAPM</li>
                  <li className="text-muted-foreground">PMI</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
                <Link href="/resume">View Full Resume <ExternalLink className="ml-2" size={16} /></Link>
              </Button>
              <Button variant="outline" className="rounded-full border-accent text-accent">
                Download CV <Download className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-headline font-bold text-center">My Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-card rounded-2xl shadow-sm border border-transparent hover:border-accent transition-all">
              <h3 className="text-xl font-bold mb-3">User-Centric AI</h3>
              <p className="text-muted-foreground">AI shouldn't just be powerful; it should be intuitive. I focus on building tools that users actively rely on for real-world decision-making.</p>
            </div>
            <div className="p-8 bg-card rounded-2xl shadow-sm border border-transparent hover:border-accent transition-all">
              <h3 className="text-xl font-bold mb-3">Velocity & Validation</h3>
              <p className="text-muted-foreground">I believe in shipping fast to learn fast. Rapid prototyping and measurable success metrics are at the core of my PM process.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
