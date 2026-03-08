'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, CheckCircle2, AlertTriangle, TrendingUp, Users, Target, Rocket, ShieldAlert } from "lucide-react";
import Link from "next/link";

const swotData = {
  strengths: ["Established Brand Identity", "Existing Diverse User Base", "Operational Logistics Expertise", "Robust Tech Infrastructure"],
  weaknesses: ["Limited Service Scope (Initial)", "Courier Learning Curve", "Operational Complexity", "Internal Resource Strain"],
  opportunities: ["Market Reach Expansion", "New Revenue Streams", "Strategic Local Partnerships", "Future Work Trend Adaptation"],
  threats: ["Regulatory Compliance Hurdles", "Increased Market Competition", "Cybersecurity/Tech Risks", "Economic Sensitivity"]
};

const timelineData = [
  { step: "Market Research", period: "Weeks 1-3", focus: "Demand analysis & competitor mapping" },
  { step: "Tech Integration", period: "Weeks 4-8", focus: "Infrastructure assessment & tracking systems" },
  { step: "Regulatory Compliance", period: "Weeks 9-10", focus: "Safety protocols & legal framework" },
  { step: "Operational Workflow", period: "Weeks 11-14", focus: "Courier training & support design" },
  { step: "Launch & QA", period: "Weeks 15-22", focus: "Beta testing & official rollout" }
];

export default function PostmatesCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-12 group">
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={16} /> Back to Work
        </Link>
        
        <div className="space-y-8 max-w-4xl">
          <div className="flex flex-wrap gap-4">
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Product Strategy</Badge>
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Expansion Initiative</Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight leading-[0.9] text-balance">
            Postmates Plus: Strategic Parcel Expansion
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-foreground/10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Role</p>
              <p className="font-medium">Lead Strategist / PM</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Timeline</p>
              <p className="font-medium">Dec 2023</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Outcome</p>
              <p className="font-medium text-emerald-500">Revenue Diversification</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Focus</p>
              <p className="font-medium">Market Disruption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="px-4 sm:px-6 lg:px-8 pb-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* Left Sidebar - Summary */}
          <div className="lg:col-span-4 space-y-12">
            <div className="p-8 bg-muted/30 rounded-[2rem] border border-foreground/5 space-y-6">
              <h3 className="text-xl font-bold tracking-tight">The Challenge</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Postmates faced a bottleneck by focusing exclusively on food and retail. To lead the industry, we needed to transform the platform into a comprehensive, on-demand parcel delivery ecosystem.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                  <p className="text-sm font-medium">Diversify revenue streams beyond cyclical food demand.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                  <p className="text-sm font-medium">Maximize courier utilization throughout the day.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                  <p className="text-sm font-medium">Create a "one-stop" logistics solution for urban users.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* 1. Solution Proposal */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">The Solution Architecture</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 transition-all rounded-[2rem]">
                  <CardHeader>
                    <TrendingUp className="text-emerald-500 mb-2" size={32} />
                    <CardTitle className="text-lg">Revenue Diversification</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground font-light leading-relaxed">
                    Opening the platform to B2B and C2C parcel logistics, creating sustainable growth and reducing market dependency.
                  </CardContent>
                </Card>
                <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 transition-all rounded-[2rem]">
                  <CardHeader>
                    <Users className="text-blue-500 mb-2" size={32} />
                    <CardTitle className="text-lg">Enhanced User UX</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground font-light leading-relaxed">
                    A seamless transition from ordering meals to sending documents, all within a single, high-trust application.
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 2. ADKAR Change Management */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-headline font-bold tracking-tight">The Change Model (ADKAR)</h2>
                <p className="text-muted-foreground font-light max-w-2xl">Successful expansion isn't just about code; it's about the people moving the goods.</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {['Awareness', 'Desire', 'Knowledge', 'Ability', 'Reinforcement'].map((item, i) => (
                  <div key={item} className="flex items-center gap-6 p-6 bg-muted/20 rounded-2xl border border-foreground/5 group hover:bg-foreground/5 transition-all">
                    <span className="text-4xl font-bold opacity-10 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-xs text-foreground mb-1">{item}</h4>
                      <p className="text-sm text-muted-foreground font-light">Ensuring stakeholders understand, want, and are empowered by the new parcel delivery feature.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Strategy Roadmap */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">Strategy Roadmap</h2>
              <div className="relative border-l-2 border-foreground/10 pl-8 space-y-12">
                {timelineData.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-foreground border-4 border-background" />
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">{item.period}</span>
                      <h4 className="text-xl font-bold">{item.step}</h4>
                      <p className="text-muted-foreground font-light">{item.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. SWOT Matrix */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">SWOT Analysis</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-emerald-500">
                    <CheckCircle2 size={16} /> Strengths
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground font-light">
                    {swotData.strengths.map(s => <li key={s}>• {s}</li>)}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-orange-500">
                    <AlertTriangle size={16} /> Weaknesses
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground font-light">
                    {swotData.weaknesses.map(s => <li key={s}>• {s}</li>)}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-blue-500">
                    <Target size={16} /> Opportunities
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground font-light">
                    {swotData.opportunities.map(s => <li key={s}>• {s}</li>)}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-red-500">
                    <ShieldAlert size={16} /> Threats
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground font-light">
                    {swotData.threats.map(s => <li key={s}>• {s}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Risk Matrix */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">Risk Mitigation Matrix</h2>
              <div className="rounded-3xl border border-foreground/10 overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow className="border-foreground/10">
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Risk Area</TableHead>
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Impact</TableHead>
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Mitigation Strategy</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Employee Resistance</TableCell>
                      <TableCell><Badge variant="outline">Moderate</Badge></TableCell>
                      <TableCell className="text-sm text-muted-foreground font-light">Robust ADKAR change management and training programs.</TableCell>
                    </TableRow>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Logistical Complexity</TableCell>
                      <TableCell><Badge variant="destructive">High</Badge></TableCell>
                      <TableCell className="text-sm text-muted-foreground font-light">Implementation of advanced route planning algorithms.</TableCell>
                    </TableRow>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Tech Failure</TableCell>
                      <TableCell><Badge variant="destructive">High</Badge></TableCell>
                      <TableCell className="text-sm text-muted-foreground font-light">Invest in cybersecurity audits and fail-safe backup strategies.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* 6. Conclusion */}
            <div className="pt-20 border-t border-foreground/10">
              <div className="max-w-2xl space-y-6">
                <h2 className="text-3xl font-headline font-bold">The Strategic Outcome</h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  By addressing stakeholder needs, selecting the right integration tools, and applying a reflective business case, Postmates Plus successfully positioned itself as an all-encompassing urban logistics leader.
                </p>
                <div className="flex items-center gap-4 text-emerald-500 font-bold tracking-widest text-xs uppercase">
                  <Rocket size={18} />
                  Project Executed Successfully
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-32 border-t border-foreground/10 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">Ready for the next challenge?</h2>
          <div className="flex justify-center gap-6">
            <Link href="/" className="px-12 py-5 bg-foreground text-background rounded-full font-bold transition-all hover:scale-105">View More Work</Link>
            <Link href="mailto:abhiramdesai.99@gmail.com" className="px-12 py-5 border-2 border-foreground rounded-full font-bold transition-all hover:bg-foreground hover:text-background">Get in Touch</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
