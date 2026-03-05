
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
    <Card className="group overflow-hidden border-none bg-card hover:shadow-2xl transition-all duration-500 rounded-2xl">
      <Link href={`/work/${slug}`} className="block">
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            data-ai-hint="project visual"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="bg-background/90 p-4 rounded-full text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <ArrowUpRight size={32} />
            </div>
          </div>
        </div>
        <CardContent className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-secondary/50 text-[10px] uppercase tracking-wider font-bold">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-2xl font-headline font-bold mb-3 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {description}
          </p>
          {metrics && (
            <div className="pt-4 border-t border-muted/20">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{metrics}</span>
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  );
}
