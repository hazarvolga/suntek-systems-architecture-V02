"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/content/schema";

interface PageHeroProps {
    content: HeroSection;
}

export default function PageHero({ content }: PageHeroProps) {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden">
            {/* Background Grid Patterns */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem'
                }}
            />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        {content.sysCode && (
                            <span className="text-primary font-mono text-[10px] border border-primary/30 px-3 py-1 bg-primary/5 uppercase tracking-widest leading-none">
                                {content.sysCode}
                            </span>
                        )}
                        <div className="h-px w-8 bg-grid-line" />
                        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-silver/60">
                            {content.badge}
                        </h2>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-off-white mb-8 tracking-tighter uppercase max-w-5xl leading-[0.95]"
                        dangerouslySetInnerHTML={{ __html: content.title }}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-silver/80 max-w-2xl font-light leading-relaxed"
                    >
                        {content.description}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
