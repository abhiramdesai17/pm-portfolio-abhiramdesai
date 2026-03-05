"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { generateProjectDescription, type GenerateProjectDescriptionOutput } from "@/ai/flows/generate-project-description";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";

export function AIStoryteller() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateProjectDescriptionOutput | null>(null);
  const [copied, setCopied] = useState(false);

  const [form, setForm] = useState({
    projectName: "",
    problem: "",
    solution: "",
    role: "Product Manager",
    metrics: "",
    outcomes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await generateProjectDescription(form);
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    const text = `${result.summary}\n\nKey Achievements:\n${result.bulletPoints.map(p => `• ${p}`).join("\n")}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-primary/5 rounded-3xl p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground">AI Powered Tool</Badge>
          <h2 className="text-4xl font-headline font-bold mb-4">Project Storyteller</h2>
          <p className="text-muted-foreground text-lg">
            Turn your raw project notes into compelling PM narratives for your portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle>Raw Input</CardTitle>
              <CardDescription>Fill in the details about your project.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label>Project Name</Label>
                  <Input 
                    value={form.projectName} 
                    onChange={(e) => setForm({ ...form, projectName: e.target.value })} 
                    placeholder="e.g. Mental Health AI Chatbot"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>The Problem</Label>
                  <Textarea 
                    value={form.problem} 
                    onChange={(e) => setForm({ ...form, problem: e.target.value })} 
                    placeholder="What issue were you trying to solve?"
                    className="min-h-[80px]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Key Metrics</Label>
                  <Input 
                    value={form.metrics} 
                    onChange={(e) => setForm({ ...form, metrics: e.target.value })} 
                    placeholder="e.g. 15% increase in engagement"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/80 text-accent-foreground" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin" /> : <Sparkles className="mr-2" />}
                  Generate Narrative
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {result ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Card className="border-none shadow-xl bg-background">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-accent">Generated Narrative</CardTitle>
                    <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                      {copied ? <Check className="text-green-500" /> : <Copy size={18} />}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-2">Summary</h4>
                      <p className="text-foreground leading-relaxed italic">"{result.summary}"</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-2">Key Achievements</h4>
                      <ul className="space-y-3">
                        {result.bulletPoints.map((point, i) => (
                          <li key={i} className="flex gap-2 text-sm leading-relaxed">
                            <span className="text-accent font-bold">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-muted/20 rounded-2xl border-2 border-dashed border-muted">
                <div className="bg-background p-4 rounded-full shadow-lg mb-4 text-muted-foreground">
                  <Sparkles size={32} />
                </div>
                <h3 className="font-headline font-bold text-lg mb-2 text-muted-foreground">Ready to tell your story</h3>
                <p className="text-sm text-muted-foreground/60 max-w-xs">
                  Fill in the project details on the left and our AI will help you craft the perfect description.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
