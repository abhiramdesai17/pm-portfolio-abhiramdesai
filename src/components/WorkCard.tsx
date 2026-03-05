"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface WorkCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  slug: string;
  metrics?: string;
}

export function WorkCard({ title, description, tags, imageUrl, slug, metrics }: WorkCardProps) {
  return (
    <div className="group space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <Link href={`/work/${slug}`} className="block overflow-hidden rounded-[2rem] border border-border/30 bg-muted/10 transition-all hover:border-foreground/20 duration-700">
        <div className="relative h-[450px] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 filter saturate-[0.8]"
            data-ai-hint="project visual"
          />
          <div className="absolute inset-0 bg-background/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-[2px]">
            <div className="p-6 rounded-full bg-foreground text-background transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 shadow-2xl">
              <ArrowUpRight size={32} />
            </div>
          </div>
        </div>
      </Link>
      <div className="space-y-6 px-4">
        <div className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <span key={tag} className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted-foreground/80">
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-3xl font-headline font-bold tracking-tighter leading-none">
              {title}
            </h3>
            {metrics && (
              <span className="text-[10px] font-bold py-1.5 px-4 bg-muted border border-border rounded-full whitespace-nowrap tracking-wider">
                {metrics}
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-lg font-light leading-relaxed line-clamp-2 max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}