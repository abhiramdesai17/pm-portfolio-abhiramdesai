"use client";

import { Progress } from "@/components/ui/progress";
import { Brain, Target, BarChart3, Users, Zap, MessageSquare } from "lucide-react";

const skills = [
  { name: "Stakeholder Alignment", level: 95, icon: Target },
  { name: "High-Alignment Communication", level: 90, icon: MessageSquare },
  { name: "Rapid AI Prototyping & Discovery", level: 95, icon: Zap },
  { name: "Product Strategy & Roadmap", level: 90, icon: Brain },
  { name: "Data-Driven Decision Making", level: 85, icon: BarChart3 },
  { name: "Agile & Scrum Leadership", level: 95, icon: Users },
];

export function SkillMatrix() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-24">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-8 group">
          <div className="flex items-center gap-8">
            <div className="p-4 bg-white/5 rounded-2xl text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-lg border border-white/10">
              <skill.icon size={28} strokeWidth={1.5} />
            </div>
            <h4 className="font-headline font-bold text-xl tracking-tight text-balance leading-tight">{skill.name}</h4>
          </div>
          <div className="space-y-4">
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
               <div 
                className="h-full bg-foreground transition-all duration-1000 ease-out" 
                style={{ width: `${skill.level}%` }}
               />
            </div>
            <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/80">
              <span>Expertise Level</span>
              <span className="text-foreground">{skill.level}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
