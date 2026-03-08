'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Music, Cloud, Code, Database, Zap, Activity, Filter } from "lucide-react";
import Link from "next/link";

export default function SpotifyETLCaseStudy() {
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
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">AWS</Badge>
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Data Engineering</Badge>
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Python</Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight leading-[0.9] text-balance">
            Spotify ETL Data Pipeline
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-foreground/10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Goal</p>
              <p className="font-medium">Data Insight</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Throughput</p>
              <p className="font-medium text-emerald-500">100k+ Daily</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Stack</p>
              <p className="font-medium">AWS / S3 / Lambda</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Latency</p>
              <p className="font-medium">Real-time Batch</p>
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
              <h3 className="text-xl font-bold tracking-tight">The Data Challenge</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Extracting high-volume streaming data from the Spotify API and transforming it for analytical workloads requires a highly resilient, serverless architecture that can scale with user activity.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <Cloud className="text-blue-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Serverless extraction via AWS Lambda.</p>
                </div>
                <div className="flex gap-4">
                  <Filter className="text-emerald-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Automated transformation & schema management.</p>
                </div>
                <div className="flex gap-4">
                  <Database className="text-amber-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Querying via Amazon Athena for deep insights.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Engineering Flow */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">Pipeline Architecture</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 transition-all rounded-[2rem]">
                  <CardHeader>
                    <Zap className="text-amber-500 mb-2" size={32} />
                    <CardTitle className="text-lg">Event-Driven Extract</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground font-light leading-relaxed">
                    Triggered Lambda functions pull user listening history and track metadata from Spotify's Web API at scheduled intervals.
                  </CardContent>
                </Card>
                <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 transition-all rounded-[2rem]">
                  <CardHeader>
                    <Code className="text-blue-500 mb-2" size={32} />
                    <CardTitle className="text-lg">S3 Data Lake</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground font-light leading-relaxed">
                    Raw data is staged in S3, then transformed via AWS Glue and partitioned for optimal query performance.
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Pipeline Performance */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">Technical Matrix</h2>
              <div className="rounded-3xl border border-foreground/10 overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow className="border-foreground/10">
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Stage</TableHead>
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Service</TableHead>
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Key Feature</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Extraction</TableCell>
                      <TableCell>AWS Lambda</TableCell>
                      <TableCell>Serverless, auto-scaling</TableCell>
                    </TableRow>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Storage</TableCell>
                      <TableCell>Amazon S3</TableCell>
                      <TableCell className="text-emerald-500">Tiered, durable staging</TableCell>
                    </TableRow>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Analytics</TableCell>
                      <TableCell>Amazon Athena</TableCell>
                      <TableCell>SQL-based discovery</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Reflection */}
            <div className="pt-20 border-t border-foreground/10">
              <div className="max-w-2xl space-y-6">
                <h2 className="text-3xl font-headline font-bold">Project Outcome</h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  The pipeline successfully processed over 100k records daily during peak usage, providing a low-cost, scalable foundation for building recommendation engines and user behavior dashboards.
                </p>
                <div className="flex items-center gap-4 text-emerald-500 font-bold tracking-widest text-xs uppercase">
                  <Activity size={18} />
                  High Reliability Cloud Infrastructure
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-32 border-t border-foreground/10 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">Data engineering at scale?</h2>
          <div className="flex justify-center gap-6">
            <Link href="/" className="px-12 py-5 bg-foreground text-background rounded-full font-bold transition-all hover:scale-105">Home</Link>
            <Link href="/resume" className="px-12 py-5 border-2 border-foreground rounded-full font-bold transition-all hover:bg-foreground hover:text-background">Resume</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
