"use client";

import { useRef } from 'react';
import { ArrowLeft, ArrowRight, CornerDownRight } from 'lucide-react';
import { useContent } from '@/content/provider';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

export default function Sectors() {
    const { home } = useContent();
    const { sectors } = home;
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 450;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id={sectors.id} ref={containerRef} className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-grid-line pb-8 gap-8"
            >
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-primary font-mono text-[10px] border border-primary/30 px-2 py-1 bg-primary/5 uppercase tracking-widest leading-none block">
                            {sectors.sysCode}
                        </span>
                        <div className="h-px w-8 bg-grid-line" />
                        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-silver/60">
                            {sectors.heading}
                        </h2>
                    </div>
                    <h3 className="text-4xl font-bold tracking-tight text-off-white uppercase">Sektörel Uzmanlık</h3>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={() => scroll('left')}
                        className="size-14 border border-grid-line flex items-center justify-center hover:border-primary hover:text-primary transition-all bg-matte-black/50 backdrop-blur-sm group"
                    >
                        <ArrowLeft className="size-5 text-silver group-hover:text-primary transition-colors" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="size-14 border border-grid-line flex items-center justify-center hover:border-primary hover:text-primary transition-all bg-matte-black/50 backdrop-blur-sm group"
                    >
                        <ArrowRight className="size-5 text-silver group-hover:text-primary transition-colors" />
                    </button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-10 pb-12 hide-scrollbar snap-x snap-mandatory"
            >
                {sectors.items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href || '#'}
                        className="min-w-[320px] md:min-w-[480px] group snap-start block relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden border border-grid-line bg-matte-black">
                            {/* Architectural Grid Overlay */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '32px 32px' }}
                            />

                            {item.image && (
                                <div
                                    className="w-full h-full bg-cover bg-center architectural-filter group-hover:scale-105 transition-all duration-1000 group-hover:grayscale-0"
                                    style={{ backgroundImage: `url("${item.image}")` }}
                                />
                            )}

                            {/* Glassmorphism Content Box */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent transition-opacity group-hover:opacity-80" />

                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-[10px] font-mono text-primary mb-3 block tracking-[0.3em] uppercase opacity-70">
                                    {item.sysCode || 'SEC_MOD'}
                                </span>
                                <h3 className="text-3xl font-bold tracking-tighter text-off-white uppercase mb-4 flex items-center gap-3">
                                    {item.title}
                                    <CornerDownRight className="size-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                </h3>
                                <p className="text-silver/80 text-sm leading-relaxed font-light line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </motion.div>
        </section>
    );
}
