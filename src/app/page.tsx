
import { Navbar } from "@/components/Navbar";
import { WorkCard } from "@/components/WorkCard";
import { AIStoryteller } from "@/components/AIStoryteller";
import { SkillMatrix } from "@/components/SkillMatrix";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
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
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-tight">
              Bridging the gap between <span className="text-accent">AI Potential</span> and <span className="underline decoration-accent underline-offset-8">User Impact.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Hi, I'm Abhiram Desai. An AI Product Manager experienced in identifying high-leverage opportunities, rapidly prototyping solutions, and owning end-to-end product delivery.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
                <Link href="#work">View My Work <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <div className="flex items-center gap-4">
                <Link href="https://github.com/abhiramdesai17" target="_blank" className="p-3 bg-muted hover:bg-accent hover:text-accent-foreground transition-all rounded-full">
                  <Github size={20} />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="p-3 bg-muted hover:bg-accent hover:text-accent-foreground transition-all rounded-full">
                  <Linkedin size={20} />
                </Link>
                <Link href="mailto:abhiramdesai.99@gmail.com" className="p-3 bg-muted hover:bg-accent hover:text-accent-foreground transition-all rounded-full">
                  <Mail size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-headline font-bold mb-4">Core Expertise</h2>
            <p className="text-muted-foreground">My technical toolkit and strategic approach to product management.</p>
          </div>
          <SkillMatrix />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Selected Work</h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <WorkCard key={project.slug} {...project} />
          ))}
        </div>
      </section>

      {/* AI Storyteller Tool Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto">
        <AIStoryteller />
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl font-headline font-bold">Let's build the future together.</h2>
          <Button asChild variant="outline" size="lg" className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <a href="mailto:abhiramdesai.99@gmail.com">Get in Touch</a>
          </Button>
          <div className="pt-12 flex justify-center gap-8 text-sm text-muted-foreground border-t">
            <p>© {new Date().getFullYear()} Abhiram Desai. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-accent">Work</Link>
              <Link href="/about" className="hover:text-accent">About</Link>
              <Link href="/play" className="hover:text-accent">Play</Link>
              <Link href="/resume" className="hover:text-accent">Resume</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
