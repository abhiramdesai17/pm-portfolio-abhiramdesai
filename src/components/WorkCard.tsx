"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
    <Link 
      href={`/work/${slug}`} 
      className="group relative block w-full aspect-[21/9] md:aspect-[25/9] overflow-hidden rounded-[2.5rem] bg-zinc-900 transition-all duration-700 hover:shadow-[0_0_80px_rgba(0,0,0,0.4)]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-60 group-hover:opacity-70"
            data-ai-hint="project background"
          />
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

      {/* Content Overlay */}
      <div className="relative z-20 h-full w-full flex flex-col justify-center px-12 md:px-24">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-4">
            <h3 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-none text-white">
              {title}
            </h3>
            <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {tags.map((tag, index) => (
              <span key={tag} className="flex items-center gap-4">
                <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-zinc-400 whitespace-nowrap">
                  {tag}
                </span>
                {index < tags.length - 1 && (
                  <span className="text-zinc-600 font-bold">•</span>
                )}
              </span>
            ))}
            {metrics && (
              <>
                <span className="text-zinc-600 font-bold">•</span>
                <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-white whitespace-nowrap">
                  {metrics}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Floating Arrow Icon (matches reference) */}
        <div className="absolute right-12 md:right-24 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
          <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:border-white/60 transition-colors">
            <ArrowRight size={32} className="text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
}
