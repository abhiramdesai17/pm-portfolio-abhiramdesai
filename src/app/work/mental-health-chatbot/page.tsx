'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Brain, Shield, Heart, Activity, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function MentalHealthCaseStudy() {
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
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">GenAI</Badge>
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Product Strategy</Badge>
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Healthcare</Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight leading-[0.9] text-balance">
            Mental Health GenAI Chatbot
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-foreground/10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Role</p>
              <p className="font-medium">Product Manager</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Period</p>
              <p className="font-medium">Sept 2024 - Present</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Impact</p>
              <p className="font-medium text-emerald-500">15% Engagement Boost</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Tech</p>
              <p className="font-medium">LLMs, RAG, Python</p>
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
              <h3 className="text-xl font-bold tracking-tight">Executive Summary</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Spearheaded the development of a B2C conversational AI platform designed to provide accessible mental health support. The project bridged clinical psychology with cutting-edge LLM technology.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <Heart className="text-red-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Empathetic AI responding to user emotional cues.</p>
                </div>
                <div className="flex gap-4">
                  <Shield className="text-blue-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Strict clinical alignment and safety safeguards.</p>
                </div>
                <div className="flex gap-4">
                  <Activity className="text-emerald-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Real-time user engagement tracking and analysis.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Project Goals */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">Product Vision</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 transition-all rounded-[2rem]">
                  <CardHeader>
                    <Target className="text-emerald-500 mb-2" size={32} />
                    <CardTitle className="text-lg">Engagement Scaling</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground font-light leading-relaxed">
                    Increasing user retention by creating a tool that feels personalized and responsive to immediate psychological needs.
                  </CardContent>
                </Card>
                <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 transition-all rounded-[2rem]">
                  <CardHeader>
                    <Brain className="text-purple-500 mb-2" size={32} />
                    <CardTitle className="text-lg">Clinical Guardrails</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground font-light leading-relaxed">
                    Ensuring AI outputs align with professional therapeutic standards using RAG and safety-tuned prompts.
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Strategic Roadmap */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">Development Roadmap</h2>
              <div className="relative border-l-2 border-foreground/10 pl-8 space-y-12">
                {[
                  { step: "Ideation & Research", period: "Months 1-2", focus: "Clinical expert interviews & market gap analysis." },
                  { step: "Architecture Design", period: "Months 3-4", focus: "Setting up RAG pipelines and selecting foundation models." },
                  { step: "Workflow Optimization", period: "Months 5-6", focus: "Designing 3+ AI-driven user paths for specific mental health scenarios." },
                  { step: "Beta Launch & Iteration", period: "Month 7", focus: "A/B testing user prompts and response accuracy." }
                ].map((item, i) => (
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

            {/* Outcomes Table */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">Impact Matrix</h2>
              <div className="rounded-3xl border border-foreground/10 overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow className="border-foreground/10">
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Metric</TableHead>
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Baseline</TableHead>
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Post-Launch</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">User Engagement</TableCell>
                      <TableCell>Low Retention</TableCell>
                      <TableCell className="text-emerald-500">+15% Active Users</TableCell>
                    </TableRow>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Clinical Safety Score</TableCell>
                      <TableCell>Manual Review</TableCell>
                      <TableCell>99.2% Safeguard Hits</TableCell>
                    </TableRow>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Response Latency</TableCell>
                      <TableCell>~4.5s</TableCell>
                      <TableCell className="text-blue-500">~1.2s (Streaming)</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Reflection */}
            <div className="pt-20 border-t border-foreground/10">
              <div className="max-w-2xl space-y-6">
                <h2 className="text-3xl font-headline font-bold">Conclusion</h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  By centering human clinical expertise in the AI development loop, we created a platform that doesn't just process text, but supports people. This project demonstrated the power of RAG in high-stakes B2C environments.
                </p>
                <div className="flex items-center gap-4 text-emerald-500 font-bold tracking-widest text-xs uppercase">
                  <Zap size={18} />
                  Scaled to 5,000+ Beta Users
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-32 border-t border-foreground/10 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">See what's next.</h2>
          <div className="flex justify-center gap-6">
            <Link href="/" className="px-12 py-5 bg-foreground text-background rounded-full font-bold transition-all hover:scale-105">Back to Work</Link>
            <Link href="mailto:abhiramdesai.99@gmail.com" className="px-12 py-5 border-2 border-foreground rounded-full font-bold transition-all hover:bg-foreground hover:text-background">Contact Me</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
