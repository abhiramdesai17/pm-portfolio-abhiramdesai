import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Heart, Trophy, Palmtree } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      {/* 1. Hero Intro */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary/20 text-[10px] uppercase tracking-[0.4em] px-4 py-1">The Journey</Badge>
              <h1 className="text-6xl md:text-8xl font-headline font-normal tracking-tight leading-none">
                Hello, <br />
                <span className="text-muted-foreground/40">I&apos;m Abhiram.</span>
              </h1>
            </div>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-muted-foreground">
              I am an adrenaline junkie, a creator, and an athlete. My path to AI Product Management wasn&apos;t linear—it was a series of creative pivots and passionate pursuits.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden order-1 lg:order-2 shadow-2xl">
             {getImg("about-headshot")?.imageUrl && (
               <Image
                  src={getImg("about-headshot")!.imageUrl}
                  alt="Abhiram Desai"
                  fill
                  className="object-cover"
                  priority
                />
             )}
          </div>
        </div>
      </section>

      {/* 2. Roots: Bangalore & Cricket */}
      <section className="py-32 border-t border-border/10">
        <div className="max-w-7xl auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
            {getImg("about-bangalore")?.imageUrl && (
              <Image
                src={getImg("about-bangalore")!.imageUrl}
                alt="Bangalore Influence"
                fill
                className="object-cover"
                data-ai-hint="city life bangalore"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Roots</p>
              <h3 className="text-3xl font-bold">Bangalore: The Silicon Valley of India</h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                I grew up in Bangalore, known as the &quot;Silicon Valley&quot; of India. With a family background in engineering, it was almost an inevitable &quot;fall back&quot; option. I studied electrical engineering and stepped into the world of development and analysis right after graduation.
              </p>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                But my heart belonged to a different field since the age of 4. Cricket wasn&apos;t just a game; it was my life. I represented my school, university, and played various levels of age-group cricket in Karnataka, my home state, before deciding to channel that competitive energy into my academics.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="p-12 bg-muted/30 rounded-[3rem] border border-border/50 h-full flex flex-col justify-center">
                <Trophy className="text-primary mb-6" size={40} strokeWidth={1} />
                <h3 className="text-xl font-bold mb-4 italic">Athletic Discipline</h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  The grit required to open an innings at 6 AM in the cold Bangalore mornings translates directly to how I handle high-stakes product roadmaps today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The COVID Pivot: Creative Awakening */}
      <section className="py-32 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-xl">
               {getImg("about-creative-covid")?.imageUrl && (
                 <Image
                    src={getImg("about-creative-covid")!.imageUrl}
                    alt="Creative at 4am"
                    fill
                    className="object-cover"
                    data-ai-hint="creative workspace midnight"
                  />
               )}
            </div>
            <div className="space-y-8">
              <Badge className="bg-primary text-primary-foreground">The Turning Point</Badge>
              <h2 className="text-4xl md:text-5xl font-headline font-bold">A Side I Never Knew Existed</h2>
              <div className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
                <p>
                  COVID changed everything. Stuck at home, I discovered a creative side that had been dormant. I started painting and drawing for fun—sketching portraits of legends like Ronaldo, Kobe, and Jordan.
                </p>
                <p>
                  I even started a YouTube channel out of pure boredom, only to realize I loved the rhythm of filming and the precision of editing. I realized I wasn&apos;t just a &quot;numbers person&quot;; I was a storyteller who used data as my medium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Boston & The PM Discovery */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-headline font-bold">The Intersection</h2>
            <p className="text-xl font-light text-muted-foreground italic">
              &quot;Boston became the place where my creative brain and analytical background finally shook hands.&quot;
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                I moved to Boston to attend grad school at Northeastern University, majoring in Data Science and Analytics. While I loved the math, I felt a pull toward something more holistic. 
              </p>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                I spent sleepless nights brainstorming creative ideas, realizing I wanted a career that combined who I am as a person (a creative) with what I am good at (computers and math). That dangerous combination led me straight to Product Management.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
               {getImg("about-boston")?.imageUrl && (
                 <Image
                    src={getImg("about-boston")!.imageUrl}
                    alt="Boston Northeastern"
                    fill
                    className="object-cover"
                    data-ai-hint="boston skyline"
                  />
               )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Amazon & Team Outings */}
      <section className="py-32 border-t border-border/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden mb-12 shadow-2xl">
            {getImg("about-nyc-team")?.imageUrl && (
              <Image
                src={getImg("about-nyc-team")!.imageUrl}
                alt="Amazon Team Outing NYC"
                fill
                className="object-cover"
                data-ai-hint="times square rainy"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
               <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Team Outing</p>
               <h3 className="text-3xl font-bold">New York City, September 2025</h3>
               <p className="text-sm font-light opacity-80">A rainy day in Times Square with the Amazon Fresh team.</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg font-light text-muted-foreground">
              Now at Amazon, I prototype AI solutions to solve complex business problems for Amazon Fresh operations, bringing that same creative spark to every sprint and strategy session.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Sports in the US: MLC & Legends */}
      <section className="py-32 border-t border-border/10 bg-background/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4">
                <Trophy size={48} strokeWidth={1} className="text-primary" />
                <h2 className="text-4xl md:text-5xl font-headline font-bold">Continuing the Passion</h2>
              </div>
              <p className="text-xl font-light text-muted-foreground leading-relaxed">
                In the US, I didn&apos;t leave cricket behind. I captained Northeastern&apos;s cricket team and had the surreal opportunity to be part of the Major League Cricket training camp with the Seattle Orcas in July 2024.
              </p>
              <div className="flex flex-col gap-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Training with Legends:</p>
                <div className="flex gap-6">
                  <a href="https://en.wikipedia.org/wiki/Shane_Bond" target="_blank" className="group flex items-center gap-2 text-sm font-bold text-foreground hover:underline decoration-primary underline-offset-4">
                    Shane Bond <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://en.wikipedia.org/wiki/Ross_Taylor" target="_blank" className="group flex items-center gap-2 text-sm font-bold text-foreground hover:underline decoration-primary underline-offset-4">
                    Ross Taylor <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl translate-y-8">
                {getImg("about-neu-cricket")?.imageUrl && (
                  <Image src={getImg("about-neu-cricket")!.imageUrl} alt="NEU Cricket" fill className="object-cover" />
                )}
              </div>
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  {getImg("about-shane-bond")?.imageUrl && (
                    <Image src={getImg("about-shane-bond")!.imageUrl} alt="With Shane Bond" fill className="object-cover" />
                  )}
                </div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  {getImg("about-ross-taylor")?.imageUrl && (
                    <Image src={getImg("about-ross-taylor")!.imageUrl} alt="With Ross Taylor" fill className="object-cover" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Adrenaline & Travel */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-muted/20 rounded-[2rem] border border-border/10">
              <Palmtree className="text-primary mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4 tracking-tight">The Nomad Heart</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                I have a dream of visiting every National Park and every state in the US. From the New England coast to the Utah deserts, travel is where I recharge my creative batteries.
              </p>
            </div>
            <div className="p-8 bg-muted/20 rounded-[2rem] border border-border/10">
              <Heart className="text-red-500 mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Fitness Freak</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Hiking, swimming, or a coastal run—I am at my best when moving. My ultimate dream? Living next to a beach where I can run by the coast every single day.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group">
                {getImg("about-travel-1")?.imageUrl && (
                  <Image src={getImg("about-travel-1")!.imageUrl} alt="Travel 1" fill className="object-cover transition-transform group-hover:scale-110 duration-700" />
                )}
              </div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group translate-y-8">
                {getImg("about-travel-2")?.imageUrl && (
                  <Image src={getImg("about-travel-2")!.imageUrl} alt="Travel 2" fill className="object-cover transition-transform group-hover:scale-110 duration-700" />
                )}
              </div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group hidden md:block">
                {getImg("about-travel-3")?.imageUrl && (
                  <Image src={getImg("about-travel-3")!.imageUrl} alt="Travel 3" fill className="object-cover transition-transform group-hover:scale-110 duration-700" />
                )}
              </div>
            </div>
            <div className="mt-20 flex flex-wrap gap-3 justify-center">
              {["New England", "Chicago", "Miami", "Texas", "Seattle", "Arizona", "Utah", "San Francisco", "San Diego"].map(city => (
                <span key={city} className="px-6 py-2 rounded-full border border-border/50 text-[10px] uppercase font-bold tracking-widest bg-muted/10">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-32 border-t border-border/10 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">Let&apos;s start a story together.</h2>
            <p className="text-xl text-muted-foreground font-light">Always open to creative brainstorming or a game of cricket.</p>
          </div>
          <div className="flex justify-center gap-6">
            <Link href="/" className="px-12 py-5 bg-foreground text-background rounded-full font-bold transition-all hover:scale-105">View Work</Link>
            <Link href="mailto:abhiramdesai.99@gmail.com" className="px-12 py-5 border-2 border-foreground rounded-full font-bold transition-all hover:bg-foreground hover:text-background">Email Me</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
