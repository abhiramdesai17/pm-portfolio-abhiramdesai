"use client";

import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border/5 bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-7xl font-headline font-bold tracking-tight max-w-2xl leading-[0.9] text-balance text-left">
              Let&apos;s build the future together.
            </h2>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
              <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all px-10 h-16 text-lg font-bold w-full md:w-auto">
                <a href="mailto:abhiramdesai.99@gmail.com">Get in Touch</a>
              </Button>
              <div className="flex items-center gap-6 justify-center md:justify-end">
                <Link 
                  href="https://linkedin.com/in/abhiramdesai" 
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                >
                  <Linkedin size={20} />
                </Link>
                <Link 
                  href="https://github.com/abhiramdesai17" 
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                >
                  <Github size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-border/10">
          <p className="text-sm text-muted-foreground font-light italic">
            Made with AI, fruit salad & over multiple boarding passes :)
          </p>
          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.3em]">
            © 2026 Abhiram Desai
          </p>
        </div>
      </div>
    </footer>
  );
}
