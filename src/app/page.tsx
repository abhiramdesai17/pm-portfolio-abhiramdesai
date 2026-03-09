
import { Navbar } from "@/components/Navbar";
import { WorkCard } from "@/components/WorkCard";
import { SkillMatrix } from "@/components/SkillMatrix";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const experiences = [
  { name: "Amazon", id: "logo-amazon", url: "https://www.amazon.com" },
  { name: "Philips", id: "logo-philips", url: "https://www.philips.com" },
  { name: "Northeastern", id: "logo-northeastern", url: "https://www.northeastern.edu" },
  { name: "Accenture", id: "logo-accenture", url: "https://www.accenture.com" }
];

const projects = [
  {
    title: "Postmates Plus",
    description: "Strategic expansion into parcel logistics. Spearheaded the optimization of the premium subscription tier through A/B testing and iterative feature rollouts.",
    tags: ["Product Growth", "B2C Strategy"],
    imageId: "project-postmates",
    slug: "postmates-plus",
    metrics: "22% Conversion Uplift"
  },
  {
    title: "Mental Health GenAI Chatbot",
    description: "Owned product roadmap for a B2C GenAI platform. Partnered with clinical experts to translate complex requirements into measurable user engagement goals.",
    tags: ["Product Strategy", "GenAI"],
    imageId: "project-mental-health",
    slug: "mental-health-chatbot",
    metrics: "15% Engagement Increase"
  },
  {
    title: "Django Real Estate Platform",
    description: "A robust, high-performance property listing platform featuring agent-client management, advanced filtering, and secure user authentication.",
    tags: ["Python", "Django", "PostgreSQL"],
    imageId: "project-django",
    slug: "django-real-estate",
    metrics: "25% Query Speedup"
  },
  {
    title: "Spotify ETL Data Pipeline",
    description: "End-to-end serverless data pipeline on AWS. Automating data extraction, transformation, and loading for listening habit analytics.",
    tags: ["AWS", "Data Engineering", "Python"],
    imageId: "project-spotify",
    slug: "spotify-etl",
    metrics: "100k+ Records Daily"
  },
  {
    title: "Picture to Text OCR Project",
    description: "A high-precision OCR tool designed to extract structured data from complex documents using deep learning models.",
    tags: ["Computer Vision", "Deep Learning"],
    imageId: "project-ocr",
    slug: "pic-to-text",
    metrics: "98% Accuracy"
  },
  {
    title: "Credit Card Default Prediction",
    description: "Developed predictive models to identify potential credit card defaults, improving risk assessment accuracy for financial institutions.",
    tags: ["Data Science", "Finance"],
    imageId: "project-credit",
    slug: "credit-default",
    metrics: "10% Risk Reduction"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      {/* 1. Intro Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-24 max-w-full mx-auto text-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-5xl md:text-[7rem] font-headline font-normal tracking-tight text-foreground leading-none">
            Hi, I&apos;m Abhiram!
          </h1>

          <div className="space-y-12 flex flex-col items-center w-full">
            <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed font-light w-full">
              An <span className="text-foreground font-medium">AI Product Manager</span> specialized in identifying high-leverage <br />
              opportunities and rapidly prototyping end-to-end solutions.
            </p>

            <div className="space-y-6 pt-4 flex flex-col items-center">
              <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground/60">Experience</span>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {experiences.map((exp) => {
                  const logo = PlaceHolderImages.find(img => img.id === exp.id);
                  return (
                    <a 
                      key={exp.name} 
                      href={exp.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative flex h-16 w-16 items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 border border-border/40 hover:border-border overflow-hidden bg-background"
                    >
                      {logo?.imageUrl && (
                        <Image 
                          src={logo.imageUrl} 
                          alt={exp.name} 
                          width={40} 
                          height={40} 
                          className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-8">
              <Button asChild className="rounded-full h-12 px-8 text-sm font-bold transition-all bg-foreground text-background hover:bg-foreground/90 shadow-xl shadow-foreground/5">
                <Link href="#work">View Case Studies <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Work Section */}
      <section id="work" className="px-4 sm:px-6 lg:px-8 py-24 max-w-full mx-auto border-t border-border/5">
        <div className="mb-20 space-y-6 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-muted-foreground">Case Studies</span>
          <h2 className="text-5xl md:text-[7rem] font-headline font-normal tracking-tighter leading-none text-balance">
            Bridging AI Potential <br />
            <span className="text-muted-foreground/40">and User Impact.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-12 max-w-7xl mx-auto">
          {projects.map((project) => (
            <WorkCard key={project.slug} {...project} imageUrl={PlaceHolderImages.find(img => img.id === project.imageId)?.imageUrl || ""} />
          ))}
        </div>
      </section>

      {/* 3. Core Expertise Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 border-t border-border/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 space-y-4">
             <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-muted-foreground">Capabilities</span>
            <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter">Core Expertise</h2>
          </div>
          <SkillMatrix />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/5 bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-7xl font-headline font-bold tracking-tight max-w-2xl leading-[0.9] text-balance">Let&apos;s build the future together.</h2>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
                <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all px-10 h-16 text-lg font-bold w-full md:w-auto">
                  <a href="mailto:abhiramdesai.99@gmail.com">Get in Touch</a>
                </Button>
                <div className="flex items-center gap-6 justify-center md:justify-end">
                  <Link 
                    href="https://linkedin.com/in/abhiramdesai" 
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </Link>
                  <Link 
                    href="https://github.com/abhiramdesai17" 
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                  >
                    <Github size={20} />
                  </Link>
                  <Link 
                    href="mailto:abhiramdesai.99@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                  >
                    <Mail size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-16 flex flex-col md:flex-row justify-between gap-10 text-[10px] text-muted-foreground border-t border-border/10 uppercase font-bold tracking-[0.3em]">
            <p className="font-light">© 2026 Abhiram Desai.</p>
            <div className="flex flex-wrap gap-10">
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
