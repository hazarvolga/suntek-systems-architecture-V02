"use client";

import { Activity, Layers, ChevronRight } from 'lucide-react';
import { useContent } from '@/content/provider';
import { motion } from 'framer-motion';

export default function Hero() {
    const { home } = useContent();

    if (!home?.hero) {
        return null;
    }

    const { hero } = home;

    return (
        <section className="relative pt-20 pb-32 overflow-hidden" id="purpose">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center gap-4 mb-10"
                >
                    <span className="text-primary font-mono text-[10px] border border-primary/30 px-3 py-1 tracking-widest uppercase bg-primary/5 backdrop-blur-sm">
                        {hero.sysCode}
                    </span>
                    <div className="h-px w-8 bg-grid-line" />
                    <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-silver/60">
                        {hero.badge}
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-off-white max-w-5xl uppercase"
                    dangerouslySetInnerHTML={{ __html: hero.title }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-7"
                    >
                        <p className="text-xl md:text-2xl leading-relaxed text-silver/80 font-light max-w-2xl">
                            {hero.description}
                        </p>

                        <div className="mt-12 flex flex-wrap gap-6">
                            <button className="bg-primary text-black px-8 py-4 text-[10px] font-bold tracking-[0.2em] hover:bg-white transition-all uppercase flex items-center gap-2 group">
                                Keşfedin
                                <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="border border-grid-line text-off-white px-8 py-4 text-[10px] font-bold tracking-[0.2em] hover:border-primary transition-all uppercase">
                                Katalog
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="lg:col-span-5 flex flex-col gap-8 border-l border-grid-line pl-10"
                    >
                        <div className="flex items-center gap-5 group py-2">
                            <div className="size-12 border border-grid-line flex items-center justify-center bg-matte-black group-hover:border-primary transition-colors">
                                <Activity className="size-5 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] block text-off-white mb-1">Structural Optimization</span>
                                <span className="text-[10px] font-mono text-silver/40 uppercase tracking-widest leading-none">Load-path efficiency models</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group py-2">
                            <div className="size-12 border border-grid-line flex items-center justify-center bg-matte-black group-hover:border-primary transition-colors">
                                <Layers className="size-5 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] block text-off-white mb-1">BIM Integrated</span>
                                <span className="text-[10px] font-mono text-silver/40 uppercase tracking-widest leading-none">Level 400 Detail Delivery</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
