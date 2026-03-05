"use client";

import { Progress } from "@/components/ui/progress";
import { Brain, Code, Target, BarChart3, Users, Cloud } from "lucide-react";

const skills = [
  { name: "Product Strategy & Roadmap", level: 95, icon: Target },
  { name: "GenAI & LLM Integration", level: 90, icon: Brain },
  { name: "Data Analysis (SQL, PowerBI)", level: 85, icon: BarChart3 },
  { name: "Cloud Infrastructure (AWS/Azure)", level: 80, icon: Cloud },
  { name: "Scrum & Agile Methodology", level: 95, icon: Users },
  { name: "Python & Prototyping", level: 75, icon: Code },
];

export function SkillMatrix() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-24">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-8 group">
          <div className="flex items-center gap-8">
            <div className="p-4 bg-muted rounded-2xl text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-lg">
              <skill.icon size={28} strokeWidth={1.5} />
            </div>
            <h4 className="font-headline font-bold text-xl tracking-tight text-balance leading-tight">{skill.name}</h4>
          </div>
          <div className="space-y-4">
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
               <div 
                className="h-full bg-foreground transition-all duration-1000 ease-out" 
                style={{ width: `${skill.level}%` }}
               />
            </div>
            <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/80">
              <span>Proficiency</span>
              <span className="text-foreground">{skill.level}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}