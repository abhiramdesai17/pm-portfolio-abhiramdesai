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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-6 group">
          <div className="flex items-center gap-6">
            <div className="p-3 bg-muted rounded-2xl text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500">
              <skill.icon size={24} strokeWidth={1.5} />
            </div>
            <h4 className="font-headline font-bold text-lg tracking-tight">{skill.name}</h4>
          </div>
          <div className="space-y-3">
            <Progress value={skill.level} className="h-1 bg-muted" />
            <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.3em] font-bold text-muted-foreground/60">
              <span>Proficiency</span>
              <span>{skill.level}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}