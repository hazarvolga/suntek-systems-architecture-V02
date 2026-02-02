"use client";

import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useContent } from '@/content/provider';
import Link from 'next/link';

export default function Sectors() {
    const { home } = useContent();
    const { sectors } = home;
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 450; // Match approximate card width
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id={sectors.id}>
            <div className="flex items-center justify-between mb-12 border-b border-grid-line pb-6">
                <div className="flex items-center gap-4">
                    <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">{sectors.sysCode}</span>
                    <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-silver/60">{sectors.heading}</h2>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="size-12 border border-grid-line flex items-center justify-center hover:border-primary hover:text-primary transition-all group"
                    >
                        <ArrowLeft className="text-silver group-hover:text-primary transition-colors" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="size-12 border border-grid-line flex items-center justify-center hover:border-primary hover:text-primary transition-all group"
                    >
                        <ArrowRight className="text-silver group-hover:text-primary transition-colors" />
                    </button>
                </div>
            </div>
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-8 pb-10 hide-scrollbar snap-x"
            >
                {sectors.items.map((item, index) => {
                    const CardContent = (
                        <>
                            <div className="relative aspect-[3/4] overflow-hidden mb-8 border border-grid-line">
                                <div className="absolute inset-0 bg-matte-slate/40 group-hover:bg-transparent transition-all z-10"></div>
                                {item.image && (
                                    <div
                                        className="w-full h-full bg-cover bg-center architectural-filter group-hover:scale-105 transition-all duration-1000"
                                        style={{ backgroundImage: `url("${item.image}")` }}
                                    />
                                )}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-matte-slate to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 z-20">
                                    {item.sysCode && (
                                        <span className="text-[10px] font-mono text-primary mb-2 block tracking-widest">{item.sysCode}</span>
                                    )}
                                    <h3 className="text-3xl font-bold tracking-tighter text-off-white">{item.title}</h3>
                                </div>
                            </div>
                            <p className="text-silver text-sm leading-relaxed font-light max-w-sm">
                                {item.description}
                            </p>
                        </>
                    );

                    return item.href ? (
                        <Link
                            key={index}
                            href={item.href}
                            className="min-w-[350px] md:min-w-[450px] group snap-start block"
                        >
                            {CardContent}
                        </Link>
                    ) : (
                        <div key={index} className="min-w-[350px] md:min-w-[450px] group snap-start">
                            {CardContent}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
