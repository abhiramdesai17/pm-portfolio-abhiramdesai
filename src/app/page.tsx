import { Navbar } from "@/components/Navbar";
import { WorkCard } from "@/components/WorkCard";
import { SkillMatrix } from "@/components/SkillMatrix";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Footer } from "@/components/Footer";

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
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-24 max-w-full mx-auto text-center flex flex-col items-center">
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
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60">Experience</span>
              
              <div className="flex items-center justify-center gap-[2px]">
                {experiences.map((exp) => {
                  const logo = PlaceHolderImages.find(img => img.id === exp.id);
                  return (
                    <a 
                      key={exp.name} 
                      href={exp.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative h-16 w-24 transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
                    >
                      {logo?.imageUrl && (
                        <Image 
                          src={logo.imageUrl} 
                          alt={exp.name} 
                          fill
                          className="object-contain transition-all duration-500 opacity-100 p-1"
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
          <h2 className="text-5xl md:text-[7rem] font-headline font-normal tracking-tighter leading-none text-balance text-center">
            Bridging AI Potential <br />
            <span className="text-muted-foreground/40">and User Impact.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-12 max-w-7xl mx-auto">
          {projects.map((project) => {
            const imageUrl = PlaceHolderImages.find(img => img.id === project.imageId)?.imageUrl;
            return (
              <WorkCard 
                key={project.slug} 
                {...project} 
                imageUrl={imageUrl || null} 
              />
            );
          })}
        </div>
      </section>

      {/* 3. Core Expertise Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 border-t border-border/5">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <div className="mb-20 space-y-4 text-center">
             <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-muted-foreground">Capabilities</span>
            <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter text-center">Core Expertise</h2>
          </div>
          <SkillMatrix />
        </div>
      </section>

      <Footer showContact={true} />
    </div>
  );
}
