"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="group space-y-6">
      <Link href={`/work/${slug}`} className="block overflow-hidden rounded-2xl border border-border/50 bg-muted/10 transition-all hover:border-border duration-500">
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            data-ai-hint="project visual"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="p-4 rounded-full bg-white text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <ArrowUpRight size={28} />
            </div>
          </div>
        </div>
      </Link>
      <div className="space-y-4 px-2">
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-[0.15em] font-semibold text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-2xl font-headline font-bold tracking-tight">
            {title}
          </h3>
          {metrics && (
            <span className="text-xs font-bold py-1 px-3 bg-foreground/5 rounded-full border border-border/50">
              {metrics}
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-base font-light leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
