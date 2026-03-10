import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Hammer, Sparkles } from "lucide-react";

export default function PlayPage() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <Navbar />
      
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto min-h-[70vh]">
        <div className="max-w-4xl mb-24 text-center md:text-left">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent uppercase tracking-widest text-[10px] px-4 py-1 font-bold">Play</Badge>
          <h1 className="text-6xl md:text-9xl font-headline font-normal text-primary mb-8 tracking-tighter leading-none">
            Outside the <br />
            <span className="text-muted-foreground/20">Roadmap.</span>
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto md:mx-0">
            When I&apos;m not defining KPIs or refining backlogs, you can find me exploring the world through a lens, reading about the future, or experimenting with new tech.
          </p>
        </div>

        <div className="relative py-32 border border-border/10 overflow-hidden rounded-[4rem] bg-muted/5 flex flex-col items-center justify-center text-center group shadow-inner">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          <div className="relative z-10 space-y-10 px-6">
            <div className="flex justify-center">
               <div className="relative p-10 bg-background rounded-full shadow-2xl border border-border/50 group-hover:scale-110 transition-transform duration-500">
                 <Hammer size={64} strokeWidth={0.5} className="text-primary/60" />
                 <Sparkles size={32} className="absolute -top-2 -right-2 text-accent animate-pulse" />
               </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Curating the Artifacts</h2>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                  I am currently sorting through my photography archives and personal &quot;side quests&quot; to bring you a curated look at what keeps me inspired. Check back soon!
                </p>
                <div className="flex items-center justify-center gap-4 pt-4">
                  <span className="h-px w-12 bg-border" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">In Progress</span>
                  <span className="h-px w-12 bg-border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
