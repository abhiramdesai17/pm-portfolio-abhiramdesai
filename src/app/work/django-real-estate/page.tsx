'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Home, UserCheck, Search, Database, Globe, Layers } from "lucide-react";
import Link from "next/link";

export default function RealEstateCaseStudy() {
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
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Web Development</Badge>
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Python/Django</Badge>
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Full Stack</Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight leading-[0.9] text-balance">
            Django Real Estate Platform
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-foreground/10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Role</p>
              <p className="font-medium">Lead Developer</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Performance</p>
              <p className="font-medium text-emerald-500">25% Faster Search</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Stack</p>
              <p className="font-medium">Django / Postgres</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Impact</p>
              <p className="font-medium">High Scale Ready</p>
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
              <h3 className="text-xl font-bold tracking-tight">The Mission</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Traditional real estate platforms often suffer from slow search experiences and clunky management tools. This project aimed to build a modern, high-performance portal for property seekers and agents.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <UserCheck className="text-blue-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Multi-tenant agent management system.</p>
                </div>
                <div className="flex gap-4">
                  <Search className="text-emerald-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Complex relational query optimization.</p>
                </div>
                <div className="flex gap-4">
                  <Globe className="text-amber-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Scalable AWS/PostgreSQL architecture.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Features */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">Core Functionalities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 transition-all rounded-[2rem]">
                  <CardHeader>
                    <Home className="text-blue-500 mb-2" size={32} />
                    <CardTitle className="text-lg">Property Management</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground font-light leading-relaxed">
                    Dynamic listing creation with image uploads, status tracking, and automated agent attribution.
                  </CardContent>
                </Card>
                <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 transition-all rounded-[2rem]">
                  <CardHeader>
                    <Layers className="text-purple-500 mb-2" size={32} />
                    <CardTitle className="text-lg">Advanced Search</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground font-light leading-relaxed">
                    Filtering across price range, location, bedrooms, and square footage using optimized database indices.
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Architecture Matrix */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">Technical Benchmarks</h2>
              <div className="rounded-3xl border border-foreground/10 overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow className="border-foreground/10">
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Module</TableHead>
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Technology</TableHead>
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Result</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Backend</TableCell>
                      <TableCell>Python / Django</TableCell>
                      <TableCell>Secure, maintainable API</TableCell>
                    </TableRow>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Database</TableCell>
                      <TableCell>PostgreSQL</TableCell>
                      <TableCell className="text-emerald-500">Indexed for fast lookup</TableCell>
                    </TableRow>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Front-end</TableCell>
                      <TableCell>HTML5 / Bootstrap</TableCell>
                      <TableCell>Fully responsive UI</TableCell>
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
                  By leveraging Django's robust ORM and security features, I built a platform that handles high-concurrency search requests without degrading user experience. The 25% query speed improvement was achieved through strategic database normalization.
                </p>
                <div className="flex items-center gap-4 text-emerald-500 font-bold tracking-widest text-xs uppercase">
                  <Database size={18} />
                  Operationalized on AWS
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-32 border-t border-foreground/10 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">Need a scalable platform?</h2>
          <div className="flex justify-center gap-6">
            <Link href="/" className="px-12 py-5 bg-foreground text-background rounded-full font-bold transition-all hover:scale-105">Home</Link>
            <Link href="mailto:abhiramdesai.99@gmail.com" className="px-12 py-5 border-2 border-foreground rounded-full font-bold transition-all hover:bg-foreground hover:text-background">Contact Me</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
