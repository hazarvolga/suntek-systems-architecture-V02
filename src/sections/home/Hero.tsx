"use client";

import { Activity, Layers } from 'lucide-react';
import { useContent } from '@/content/provider';

export default function Hero() {
    const { home } = useContent();
    const { hero } = home;

    return (
        <section className="pt-4" id="purpose">
            <div className="flex items-center gap-4 mb-10">
                <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">{hero.sysCode}</span>
                <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-silver/60">{hero.badge}</h2>
            </div>

            {/* 
              Using dangerouslySetInnerHTML for title to allow coloring specific words.
              In a real app, you might want a simpler "highlightedWord" prop, 
              but this supports the HTML snippet in our JSON.
            */}
            <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-off-white max-w-4xl"
                dangerouslySetInnerHTML={{ __html: hero.title }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
                <p className="text-xl leading-relaxed text-silver font-light">
                    {hero.description}
                </p>
                <div className="flex flex-col gap-6 border-l border-grid-line pl-10">
                    {/* Fixed features for now, could be dynamic in schema too */}
                    <div className="flex items-center gap-4 group">
                        <Activity className="size-6 text-primary group-hover:scale-110 transition-transform" />
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest block text-off-white">Structural Optimization</span>
                            <span className="text-[10px] font-mono text-silver/50">Load-path efficiency models</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <Layers className="size-6 text-primary group-hover:scale-110 transition-transform" />
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest block text-off-white">BIM Integrated</span>
                            <span className="text-[10px] font-mono text-silver/50">Level 400 Detail Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
