'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, TrendingDown, BarChart, ShieldCheck, PieChart, Info, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function CreditDefaultCaseStudy() {
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
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Data Science</Badge>
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Finance</Badge>
            <Badge variant="outline" className="border-foreground/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1">Machine Learning</Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight leading-[0.9] text-balance">
            Credit Card Default Prediction
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-foreground/10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Goal</p>
              <p className="font-medium">Risk Mitigation</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Reduction</p>
              <p className="font-medium text-emerald-500">10% Default Rate</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Dataset</p>
              <p className="font-medium">30k+ Financial Records</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Model</p>
              <p className="font-medium">XGBoost / Scikit-learn</p>
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
              <h3 className="text-xl font-bold tracking-tight">The Problem Context</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Financial institutions lose billions annually to credit card defaults. Predicting these events before they happen allows for proactive credit limit adjustments and risk management.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <TrendingDown className="text-red-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Identifying high-risk behavior patterns.</p>
                </div>
                <div className="flex gap-4">
                  <PieChart className="text-blue-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Feature engineering on payment history.</p>
                </div>
                <div className="flex gap-4">
                  <ShieldCheck className="text-emerald-500 shrink-0" size={18} />
                  <p className="text-sm font-medium">Reducing false negatives in default detection.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Methodology */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">ML Methodology</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 transition-all rounded-[2rem]">
                  <CardHeader>
                    <BarChart className="text-emerald-500 mb-2" size={32} />
                    <CardTitle className="text-lg">Predictive Modeling</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground font-light leading-relaxed">
                    Utilizing ensemble methods to handle class imbalance and non-linear relationships in financial data.
                  </CardContent>
                </Card>
                <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 transition-all rounded-[2rem]">
                  <CardHeader>
                    <Info className="text-blue-500 mb-2" size={32} />
                    <CardTitle className="text-lg">Feature Importance</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground font-light leading-relaxed">
                    Identifying that 'Last 3 Months Payment Ratio' was the strongest predictor of impending default.
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold tracking-tight">Model Performance</h2>
              <div className="rounded-3xl border border-foreground/10 overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow className="border-foreground/10">
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Metric</TableHead>
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Score</TableHead>
                      <TableHead className="text-xs uppercase font-bold tracking-widest text-foreground">Impact</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">AUC-ROC</TableCell>
                      <TableCell>0.82</TableCell>
                      <TableCell>Strong Classification</TableCell>
                    </TableRow>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Precision (Default Class)</TableCell>
                      <TableCell>0.74</TableCell>
                      <TableCell>Minimized Over-flagging</TableCell>
                    </TableRow>
                    <TableRow className="border-foreground/10">
                      <TableCell className="font-bold">Recall (Default Class)</TableCell>
                      <TableCell className="text-emerald-500">0.79</TableCell>
                      <TableCell>Caught ~80% of Defaults</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Reflection */}
            <div className="pt-20 border-t border-foreground/10">
              <div className="max-w-2xl space-y-6">
                <h2 className="text-3xl font-headline font-bold">Conclusion & Strategy</h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  The model proved that data-driven risk assessment could reduce default exposure by 10%. By integrating this into the credit approval flow, institutions can maintain profitability while offering fairer rates to low-risk users.
                </p>
                <div className="flex items-center gap-4 text-emerald-500 font-bold tracking-widest text-xs uppercase">
                  <AlertCircle size={18} />
                  10% Risk Exposure Reduction
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-32 border-t border-foreground/10 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">Interested in Data Science?</h2>
          <div className="flex justify-center gap-6">
            <Link href="/" className="px-12 py-5 bg-foreground text-background rounded-full font-bold transition-all hover:scale-105">Home</Link>
            <Link href="/resume" className="px-12 py-5 border-2 border-foreground rounded-full font-bold transition-all hover:bg-foreground hover:text-background">Resume</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
