"use client";

import { 
  Target, 
  Zap, 
  MessageSquare, 
  Code, 
  BarChart3, 
  Brain, 
  Users, 
  Cloud, 
  TrendingUp 
} from "lucide-react";

const skills = [
  { name: "Product Strategy & Roadmap", level: 95, icon: Brain },
  { name: "Rapid AI Prototyping & Discovery", level: 98, icon: Zap },
  { name: "Python, LLM & AI/ML Integration", level: 90, icon: Code },
  { name: "Agile & Scrum Leadership", level: 95, icon: Users },
  { name: "Cross-functional Stakeholder Alignment", level: 95, icon: Target },
  { name: "High-alignment Communication", level: 90, icon: MessageSquare },
  { name: "Data Analytics & SQL", level: 85, icon: BarChart3 },
  { name: "Cloud Infrastructure (AWS/Azure)", level: 80, icon: Cloud },
  { name: "B2C/B2B Growth Strategy", level: 85, icon: TrendingUp },
];

export function SkillMatrix() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-6 group">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/5 rounded-2xl text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-lg border border-white/10 shrink-0">
              <skill.icon size={24} strokeWidth={1.5} />
            </div>
            <h4 className="font-headline font-bold text-lg tracking-tight text-balance leading-tight">{skill.name}</h4>
          </div>
          <div className="space-y-3">
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
               <div 
                className="h-full bg-foreground transition-all duration-1000 ease-out" 
                style={{ width: `${skill.level}%` }}
               />
            </div>
            <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.3em] font-bold text-muted-foreground/60">
              <span>Proficiency</span>
              <span className="text-foreground">{skill.level}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
