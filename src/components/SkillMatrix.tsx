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
  { name: "Product Strategy & Roadmap", icon: Brain },
  { name: "Rapid AI Prototyping & Discovery", icon: Zap },
  { name: "Python, LLM & AI/ML Integration", icon: Code },
  { name: "Agile & Scrum Leadership", icon: Users },
  { name: "Cross-functional Stakeholder Alignment", icon: Target },
  { name: "High-alignment Communication", icon: MessageSquare },
  { name: "Data Analytics & SQL", icon: BarChart3 },
  { name: "Cloud Infrastructure (AWS/Azure)", icon: Cloud },
  { name: "B2C/B2B Growth Strategy", icon: TrendingUp },
];

export function SkillMatrix() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
      {skills.map((skill) => (
        <div key={skill.name} className="flex items-center gap-6 group">
          <div className="p-4 bg-white/5 rounded-2xl text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-lg border border-white/10 shrink-0">
            <skill.icon size={24} strokeWidth={1.5} />
          </div>
          <h4 className="font-headline font-bold text-lg tracking-tight text-balance leading-tight group-hover:translate-x-1 transition-transform duration-300">
            {skill.name}
          </h4>
        </div>
      ))}
    </div>
  );
}
