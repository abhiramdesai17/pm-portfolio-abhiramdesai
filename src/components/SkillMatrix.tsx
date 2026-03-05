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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-4 group">
          <div className="flex items-center gap-4">
            <div className="p-2 text-foreground group-hover:translate-x-1 transition-transform">
              <skill.icon size={20} strokeWidth={1.5} />
            </div>
            <h4 className="font-headline font-semibold text-base tracking-tight">{skill.name}</h4>
          </div>
          <div className="space-y-2">
            <Progress value={skill.level} className="h-[2px] bg-muted" />
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
              <span>Expertise</span>
              <span>{skill.level}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
