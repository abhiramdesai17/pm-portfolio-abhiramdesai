"use client";

import Image from "next/image";
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
    <div className="group space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <Link href={`/work/${slug}`} className="block overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] transition-all duration-700 hover:border-white/20 hover:shadow-2xl">
        <div className="relative h-[500px] overflow-hidden">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              data-ai-hint="project visual"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-[2px]">
            <div className="p-8 rounded-full bg-white text-black transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700 shadow-2xl">
              <ArrowUpRight size={40} />
            </div>
          </div>
        </div>
      </Link>
      <div className="space-y-8 px-2">
        <div className="flex flex-wrap gap-6">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-start gap-8">
            <h3 className="text-4xl font-headline font-bold tracking-tighter leading-none text-balance">
              {title}
            </h3>
            {metrics && (
              <span className="text-[10px] font-bold py-2 px-5 bg-white text-black rounded-full whitespace-nowrap tracking-wider shadow-xl">
                {metrics}
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-xl font-light leading-relaxed line-clamp-2 max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}