import { Navbar } from "@/components/Navbar";
import { WorkCard } from "@/components/WorkCard";
import { SkillMatrix } from "@/components/SkillMatrix";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const experiences = [
  { name: "Amazon", id: "logo-amazon" },
  { name: "Philips", id: "logo-philips" },
  { name: "Northeastern", id: "logo-northeastern" },
  { name: "Accenture", id: "logo-accenture" }
];

const projects = [
  {
    title: "Mental Health GenAI Chatbot",
    description: "Owned product roadmap from ideation to execution for a B2C GenAI-powered mental health chatbot. Partnered with clinical experts to translate requirements into measurable goals.",
    tags: ["Product Strategy", "GenAI", "Healthcare"],
    imageUrl: "https://picsum.photos/seed/mentalhealth/800/600",
    slug: "mental-health-chatbot",
    metrics: "15% Engagement Increase"
  },
  {
    title: "Amazon Fresh B2B AI Workforce Platform",
    description: "Defined end-to-end MVP roadmap for a $40M AI-enabled workforce planning platform across 43 fulfillment centers in North America.",
    tags: ["AI/ML", "Operations", "B2B"],
    imageUrl: "https://picsum.photos/seed/amazonwork/800/600",
    slug: "amazon-workforce",
    metrics: "~75% Reduced Decision Cycles"
  },
  {
    title: "Picture to Text OCR Project",
    description: "A high-precision OCR tool designed to extract structured data from complex documents using deep learning models.",
    tags: ["Computer Vision", "Python", "Deep Learning"],
    imageUrl: "https://picsum.photos/seed/pictext/800/600",
    slug: "pic-to-text",
    metrics: "98% Accuracy"
  },
  {
    title: "Credit Card Default Prediction",
    description: "Developed predictive models to identify potential credit card defaults, improving risk assessment accuracy for financial institutions.",
    tags: ["Data Science", "Finance", "Predictive Modeling"],
    imageUrl: "https://picsum.photos/seed/credit/800/600",
    slug: "credit-default",
    metrics: "10% Risk Reduction"
  }
];

export default function Home() {
  const spaceNeedle = PlaceHolderImages.find(img => img.id === "space-needle");
  const ghibliPortrait = PlaceHolderImages.find(img => img.id === "ghibli-portrait");

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-20">
          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight text-foreground leading-[1.05]">
                Bridging AI Potential and User Impact.
              </h1>
              <p className="text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                Hi, I'm Abhiram Desai. An AI Product Manager specialized in identifying high-leverage opportunities and rapidly prototyping end-to-end solutions.
              </p>
            </div>
            
            <div className="space-y-10">
              <div className="flex flex-wrap gap-8 items-center">
                <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold transition-all bg-foreground text-background hover:bg-foreground/90">
                  <Link href="#work">View Case Studies <ArrowRight className="ml-2" size={20} /></Link>
                </Button>
                <div className="flex items-center gap-6">
                  <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-all">
                    <Linkedin size={24} />
                  </Link>
                  <Link href="mailto:abhiramdesai.99@gmail.com" className="text-muted-foreground hover:text-foreground transition-all">
                    <Mail size={24} />
                  </Link>
                </div>
              </div>

              {/* Location Info - Moved below CTA */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
                  {spaceNeedle?.imageUrl && (
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border bg-background shadow-sm">
                      <Image 
                        src={spaceNeedle.imageUrl} 
                        alt="Seattle" 
                        fill 
                        className="object-cover"
                        data-ai-hint="space needle"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <MapPin size={10} className="text-foreground" />
                      <span>Based in Seattle</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="text-foreground">Open to relocation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block flex-1 w-full max-w-lg">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-border/50 group">
              {ghibliPortrait?.imageUrl && (
                <Image
                  src={ghibliPortrait.imageUrl}
                  alt="Abhiram Desai"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                  data-ai-hint="ghibli illustration"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Logos */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-y border-border/40 bg-muted/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground mb-16">Previously leading products at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {experiences.map((exp) => {
              const logo = PlaceHolderImages.find(img => img.id === exp.id);
              return (
                <div key={exp.name} className="group flex flex-col items-center gap-4">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-border bg-background p-6 shadow-sm transition-all overflow-hidden flex items-center justify-center hover:border-foreground/20">
                    {logo?.imageUrl && (
                      <Image 
                        src={logo.imageUrl} 
                        alt={exp.name} 
                        fill 
                        className="object-contain p-4 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        data-ai-hint={`${exp.name} logo`}
                      />
                    )}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-muted-foreground">{exp.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-4 sm:px-6 lg:px-8 py-32 max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">Case Studies</span>
          <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter mt-4">Selected Work</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <WorkCard key={project.slug} {...project} />
          ))}
        </div>
      </section>

      {/* Skills Section - Moved to bottom */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-muted/10 border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">Capabilities</span>
            <h2 className="text-5xl font-headline font-bold tracking-tighter mt-4">Core Expertise</h2>
          </div>
          <SkillMatrix />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tight max-w-xl leading-none">Let's build the future together.</h2>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all px-12 h-16 text-lg font-bold">
              <a href="mailto:abhiramdesai.99@gmail.com">Get in Touch</a>
            </Button>
          </div>
          <div className="pt-16 flex flex-col md:flex-row justify-between gap-12 text-sm text-muted-foreground border-t border-border/20">
            <p className="font-light tracking-wide">© {new Date().getFullYear()} Abhiram Desai. Based in Seattle, WA.</p>
            <div className="flex gap-12 font-bold uppercase tracking-[0.2em] text-[10px]">
              <Link href="/" className="hover:text-foreground transition-colors">Work</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/play" className="hover:text-foreground transition-colors">Play</Link>
              <Link href="/resume" className="hover:text-foreground transition-colors">Resume</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
