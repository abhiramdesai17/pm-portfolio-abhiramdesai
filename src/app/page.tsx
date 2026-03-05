import { Navbar } from "@/components/Navbar";
import { WorkCard } from "@/components/WorkCard";
import { AIStoryteller } from "@/components/AIStoryteller";
import { SkillMatrix } from "@/components/SkillMatrix";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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
  const ghibliPortrait = PlaceHolderImages.find(img => img.id === "ghibli-portrait");

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-left space-y-8">
            <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-foreground leading-[1.1]">
              Bridging the gap between <span className="text-muted-foreground">AI Potential</span> and <span className="underline decoration-muted-foreground underline-offset-8">User Impact.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              Hi, I'm Abhiram Desai. An AI Product Manager experienced in identifying high-leverage opportunities, rapidly prototyping solutions, and owning end-to-end product delivery.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <Button asChild size="lg" className="rounded-full px-10 font-medium">
                <Link href="#work">View Work <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <div className="flex items-center gap-6">
                <Link href="https://github.com/abhiramdesai17" target="_blank" className="text-muted-foreground hover:text-foreground transition-all">
                  <Github size={24} />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-all">
                  <Linkedin size={24} />
                </Link>
                <Link href="mailto:abhiramdesai.99@gmail.com" className="text-muted-foreground hover:text-foreground transition-all">
                  <Mail size={24} />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md">
            <div className="relative aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-sm border border-border group">
              <Image
                src={ghibliPortrait?.imageUrl || "https://picsum.photos/seed/ghibli-me/800/800"}
                alt="Abhiram Desai Ghibli Style"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
                data-ai-hint="ghibli anime illustration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-muted/20 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-headline font-bold tracking-tight mb-4">Core Expertise</h2>
            <p className="text-muted-foreground font-light max-w-xl">A specialized technical toolkit focused on the intersection of product strategy and machine learning.</p>
          </div>
          <SkillMatrix />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-muted-foreground font-medium uppercase tracking-[0.2em] text-xs mb-4 block">Selected Projects</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Case Studies</h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <WorkCard key={project.slug} {...project} />
          ))}
        </div>
      </section>

      {/* AI Storyteller Tool Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 border-t border-border/50">
        <AIStoryteller />
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <h2 className="text-4xl font-headline font-bold tracking-tight">Let's build together.</h2>
            <Button asChild variant="outline" size="lg" className="rounded-full border-border hover:bg-foreground hover:text-background transition-colors px-10">
              <a href="mailto:abhiramdesai.99@gmail.com">Get in Touch</a>
            </Button>
          </div>
          <div className="pt-12 flex flex-col md:flex-row justify-between gap-8 text-sm text-muted-foreground border-t border-border/50">
            <p className="font-light">© {new Date().getFullYear()} Abhiram Desai. Portfolio v2.0</p>
            <div className="flex gap-8 font-medium">
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
