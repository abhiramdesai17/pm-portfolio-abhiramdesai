
"use client";

import { Badge } from "@/components/ui/badge";
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <div key={skill.name} className="p-6 bg-card rounded-2xl shadow-sm border hover:border-accent transition-colors group">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/5 rounded-xl group-hover:bg-accent/10 transition-colors">
              <skill.icon className="text-primary group-hover:text-accent" size={24} />
            </div>
            <h4 className="font-headline font-bold text-sm">{skill.name}</h4>
          </div>
          <Progress value={skill.level} className="h-1.5 mb-2" />
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Expertise Level</span>
            <span className="text-xs font-bold text-accent">{skill.level}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
