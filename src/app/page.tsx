import { Navbar } from "@/components/Navbar";
import { WorkCard } from "@/components/WorkCard";
import { SkillMatrix } from "@/components/SkillMatrix";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail, MapPin, Github, ExternalLink } from "lucide-react";
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
  const spaceNeedle = PlaceHolderImages.find(img => img.id === "space-needle");
  const ghibliPortrait = PlaceHolderImages.find(img => img.id === "ghibli-portrait");

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      {/* 1. Intro Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-20">
          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight text-foreground leading-[1.05] text-balance">
                Bridging AI Potential and User Impact.
              </h1>
              <p className="text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                Hi, I'm Abhiram Desai. An AI Product Manager specialized in identifying high-leverage opportunities and rapidly prototyping end-to-end solutions.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap gap-8 items-center">
                  <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold transition-all bg-foreground text-background hover:bg-foreground/90 shadow-2xl shadow-foreground/20">
                    <Link href="#work">View Case Studies <ArrowRight className="ml-2" size={20} /></Link>
                  </Button>
                  <div className="flex items-center gap-6">
                    <Link href="https://linkedin.com/in/abhiramdesai" target="_blank" className="text-muted-foreground hover:text-foreground transition-all">
                      <Linkedin size={24} />
                    </Link>
                    <Link href="https://github.com/abhiramdesai17" target="_blank" className="text-muted-foreground hover:text-foreground transition-all">
                      <Github size={24} />
                    </Link>
                    <Link href="mailto:abhiramdesai.99@gmail.com" className="text-muted-foreground hover:text-foreground transition-all">
                      <Mail size={24} />
                    </Link>
                  </div>
                </div>

                {/* Location Info & Relocation */}
                <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm">
                    {spaceNeedle?.imageUrl && (
                      <div className="relative w-5 h-5 rounded-full overflow-hidden border border-white/20">
                        <Image 
                          src={spaceNeedle.imageUrl} 
                          alt="Seattle" 
                          fill 
                          className="object-cover"
                          data-ai-hint="space needle"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <MapPin size={10} className="text-foreground" />
                      <span>Based in Seattle</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open to relocation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block flex-1 w-full max-w-lg">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden transition-all duration-1000 shadow-2xl border border-white/10 group">
              {ghibliPortrait?.imageUrl && (
                <Image
                  src={ghibliPortrait.imageUrl}
                  alt="Abhiram Desai"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                  priority
                  data-ai-hint="ghibli illustration"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Experience Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] font-bold text-muted-foreground mb-16">Previously leading products at</p>
          <div className="flex flex-nowrap justify-center items-center gap-12 md:gap-24 overflow-x-auto no-scrollbar pb-8 md:pb-0 px-4">
            {experiences.map((exp) => {
              const logo = PlaceHolderImages.find(img => img.id === exp.id);
              return (
                <div key={exp.name} className="group flex-shrink-0 flex flex-col items-center gap-6">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 bg-black p-6 shadow-2xl transition-all duration-500 overflow-hidden flex items-center justify-center hover:border-white/40 hover:scale-110">
                    {logo?.imageUrl && (
                      <Image 
                        src={logo.imageUrl} 
                        alt={exp.name} 
                        fill 
                        className="object-contain p-6 filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                        data-ai-hint={`${exp.name} logo`}
                      />
                    )}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-muted-foreground group-hover:text-white transition-colors duration-300">{exp.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Work Section */}
      <section id="work" className="px-4 sm:px-6 lg:px-8 py-32 max-w-7xl mx-auto">
        <div className="mb-24 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-muted-foreground">Case Studies</span>
          <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter">Selected Work</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-32">
          {projects.map((project) => (
            <WorkCard key={project.slug} {...project} />
          ))}
        </div>
      </section>

      {/* 4. Core Expertise Section */}
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
              <h2 className="text-5xl md:text-8xl font-headline font-bold tracking-tight max-w-2xl leading-[0.9] text-balance">Let's build the future together.</h2>
              
              {/* LinkedIn Widget Link */}
              <Link 
                href="https://linkedin.com/in/abhiramdesai" 
                target="_blank"
                className="inline-flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group shadow-2xl"
              >
                <div className="bg-[#0077B5] p-4 rounded-2xl">
                  <Linkedin size={32} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Connect on LinkedIn</p>
                  <p className="text-xl font-headline font-bold flex items-center gap-2">
                    Abhiram Desai <ExternalLink size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </p>
                </div>
              </Link>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-white hover:bg-white hover:text-black transition-all px-12 h-20 text-xl font-bold">
              <a href="mailto:abhiramdesai.99@gmail.com">Get in Touch</a>
            </Button>
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
