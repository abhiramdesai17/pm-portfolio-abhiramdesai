import { Navbar } from "@/components/Navbar";
import { WorkCard } from "@/components/WorkCard";
import { SkillMatrix } from "@/components/SkillMatrix";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail, Github } from "lucide-react";
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
    title: "Postmates Plus",
    description: "Strategic expansion into parcel logistics. Spearheaded the optimization of the premium subscription tier through A/B testing and iterative feature rollouts.",
    tags: ["Product Growth", "B2C Strategy"],
    imageUrl: "https://picsum.photos/seed/postmates/800/600",
    slug: "postmates-plus",
    metrics: "22% Conversion Uplift"
  },
  {
    title: "Mental Health GenAI Chatbot",
    description: "Owned product roadmap for a B2C GenAI platform. Partnered with clinical experts to translate complex requirements into measurable user engagement goals.",
    tags: ["Product Strategy", "GenAI"],
    imageUrl: "https://picsum.photos/seed/mentalhealth/800/600",
    slug: "mental-health-chatbot",
    metrics: "15% Engagement Increase"
  },
  {
    title: "Django Real Estate Platform",
    description: "A robust, high-performance property listing platform featuring agent-client management, advanced filtering, and secure user authentication.",
    tags: ["Python", "Django", "PostgreSQL"],
    imageUrl: "https://picsum.photos/seed/django-re/800/600",
    slug: "django-real-estate",
    metrics: "25% Query Speedup"
  },
  {
    title: "Spotify ETL Data Pipeline",
    description: "End-to-end serverless data pipeline on AWS. Automating data extraction, transformation, and loading for listening habit analytics.",
    tags: ["AWS", "Data Engineering", "Python"],
    imageUrl: "https://picsum.photos/seed/spotify-etl/800/600",
    slug: "spotify-etl",
    metrics: "100k+ Records Daily"
  },
  {
    title: "Picture to Text OCR Project",
    description: "A high-precision OCR tool designed to extract structured data from complex documents using deep learning models.",
    tags: ["Computer Vision", "Deep Learning"],
    imageUrl: "https://picsum.photos/seed/pictext/800/600",
    slug: "pic-to-text",
    metrics: "98% Accuracy"
  },
  {
    title: "Credit Card Default Prediction",
    description: "Developed predictive models to identify potential credit card defaults, improving risk assessment accuracy for financial institutions.",
    tags: ["Data Science", "Finance"],
    imageUrl: "https://picsum.photos/seed/credit/800/600",
    slug: "credit-default",
    metrics: "10% Risk Reduction"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      {/* 1. Intro Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-32 pb-32 max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center gap-20">
          {/* Headline */}
          <h1 className="text-7xl md:text-9xl font-headline font-normal tracking-tight text-foreground">
            Hi, I&apos;m Abhiram!
          </h1>

          {/* Narrative */}
          <div className="space-y-16 flex flex-col items-center w-full">
            <p className="text-2xl md:text-3xl text-muted-foreground leading-[1.6] font-light w-full">
              An <span className="text-foreground font-medium">AI Product Manager</span> specialized in identifying high-leverage opportunities and rapidly prototyping end-to-end solutions.
            </p>

            {/* Experience Group */}
            <div className="space-y-8">
              <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground/80">Experience</span>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 grayscale opacity-40">
                {experiences.map((exp) => {
                  const logo = PlaceHolderImages.find(img => img.id === exp.id);
                  return (
                    <div key={exp.name} className="relative h-8 w-28">
                      {logo?.imageUrl && (
                        <Image 
                          src={logo.imageUrl} 
                          alt={exp.name} 
                          fill 
                          className="object-contain"
                          data-ai-hint={`${exp.name} logo`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-8">
              <Button asChild size="lg" className="rounded-full h-16 px-12 text-xl font-bold transition-all bg-foreground text-background hover:bg-foreground/90 shadow-2xl shadow-foreground/20">
                <Link href="#work">View Case Studies <ArrowRight className="ml-3" size={24} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Work Section */}
      <section id="work" className="px-4 sm:px-6 lg:px-8 py-32 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-24 space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-muted-foreground">Case Studies</span>
          <h2 className="text-5xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9]">
            Bridging AI Potential <br />
            <span className="text-muted-foreground/40">and User Impact.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-32">
          {projects.map((project) => (
            <WorkCard key={project.slug} {...project} />
          ))}
        </div>
      </section>

      {/* 3. Core Expertise Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 space-y-4">
             <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-muted-foreground">Capabilities</span>
            <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter">Core Expertise</h2>
          </div>
          <SkillMatrix />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-8xl font-headline font-bold tracking-tight max-w-2xl leading-[0.9] text-balance">Let&apos;s build the future together.</h2>
            </div>
            <div className="flex flex-col items-center md:items-end gap-8">
              <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
                <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-white hover:bg-white hover:text-black transition-all px-12 h-20 text-xl font-bold w-full md:w-auto">
                  <a href="mailto:abhiramdesai.99@gmail.com">Get in Touch</a>
                </Button>
                {/* Social Links under Get in Touch */}
                <div className="flex items-center gap-8 justify-center md:justify-end">
                  <Link 
                    href="https://linkedin.com/in/abhiramdesai" 
                    target="_blank"
                    className="text-muted-foreground hover:text-white transition-all hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </Link>
                  <Link 
                    href="https://github.com/abhiramdesai17" 
                    target="_blank"
                    className="text-muted-foreground hover:text-white transition-all hover:scale-110"
                  >
                    <Github size={24} />
                  </Link>
                  <Link 
                    href="mailto:abhiramdesai.99@gmail.com"
                    className="text-muted-foreground hover:text-white transition-all hover:scale-110"
                  >
                    <Mail size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-20 flex flex-col md:flex-row justify-between gap-12 text-[11px] text-muted-foreground border-t border-white/10 uppercase font-bold tracking-[0.3em]">
            <p className="font-light">© 2026 Abhiram Desai.</p>
            <div className="flex flex-wrap gap-12">
              <Link href="/" className="hover:text-white transition-colors">Work</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/play" className="hover:text-white transition-colors">Play</Link>
              <Link href="/resume" className="hover:text-white transition-colors">Resume</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
