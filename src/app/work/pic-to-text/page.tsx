'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, ScanText, FileText, Database, Layers, CheckCircle, Search } from "lucide-react";
import Link from "next/link";

export default function OCRCaseStudy() {
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
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Computer Vision</Badge>
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Deep Learning</Badge>
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Python</Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight leading-[0.9] text-balance">
            Picture to Text OCR Tool
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-foreground/10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Role</p>
              <p className="font-medium">Lead Developer / PM</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Accuracy</p>
              <p className="font-medium text-emerald-500">98% Precision</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Focus</p>
              <p className="font-medium">Automation</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Platform</p>
              <p className="font-medium">Python / Tesseract</p>
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
              <h3 className="text-xl font-bold tracking-tight">The Technical Challenge</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Manually extracting data from low-resolution document images was causing significant operational overhead. This tool was built to automate structured data extraction with human-level accuracy.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <ScanText className="text-blue-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Multi-stage image pre-processing.</p>
                </div>
                <div className="flex gap-4">
                  <Layers className="text-emerald-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Noise reduction and skew correction.</p>
                </div>
                <div className="flex gap-4">
                  <Database className="text-amber-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">JSON output for automated ETL pipelines.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Architecture Section */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">System Architecture</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 transition-all rounded-[2rem]">
                  <CardHeader>
                    <Search className="text-blue-500 mb-2" size={32} />
                    <CardTitle className="text-lg">Intelligent Segmentation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground font-light leading-relaxed">
                    Dividing complex layouts into logical regions to ensure context-aware text recognition.
                  </CardContent>
                </Card>
                <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 transition-all rounded-[2rem]">
                  <CardHeader>
                    <FileText className="text-emerald-500 mb-2" size={32} />
                    <CardTitle className="text-lg">Structured Export</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground font-light leading-relaxed">
                    Transforming raw strings into structured JSON objects ready for database ingestion.
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Performance Matrix */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">Precision Benchmarks</h2>
              <div className="rounded-3xl border border-foreground/10 overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow className="border-foreground/10">
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Document Type</TableHead>
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Character Accuracy</TableHead>
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Processing Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Standard PDF</TableCell>
                      <TableCell>99.8%</TableCell>
                      <TableCell>0.4s / pg</TableCell>
                    </TableRow>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Handwritten Notes</TableCell>
                      <TableCell>91.5%</TableCell>
                      <TableCell>1.2s / pg</TableCell>
                    </TableRow>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Low-Res Scans</TableCell>
                      <TableCell className="text-emerald-500">97.2%</TableCell>
                      <TableCell>0.8s / pg</TableCell>
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
                  The tool successfully automated over 80% of document processing workflows for the pilot team, reducing manual entry errors to near-zero and significantly increasing throughput.
                </p>
                <div className="flex items-center gap-4 text-emerald-500 font-bold tracking-widest text-xs uppercase">
                  <CheckCircle size={18} />
                  Operationalized in Production
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-32 border-t border-foreground/10 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">Ready to see more?</h2>
          <div className="flex justify-center gap-6">
            <Link href="/" className="px-12 py-5 bg-foreground text-background rounded-full font-bold transition-all hover:scale-105">Home</Link>
            <Link href="/about" className="px-12 py-5 border-2 border-foreground rounded-full font-bold transition-all hover:bg-foreground hover:text-background">About Me</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
