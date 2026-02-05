"use client";

import { useContent } from "@/content/provider";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Zap, BarChart3, Globe } from "lucide-react";

export default function SolutionsPage() {
    const { solutions } = useContent();

    if (!solutions) return null;

    const getIcon = (id: string) => {
        switch (id) {
            case 'bulut-donusumu': return <Globe className="size-6 text-primary" />;
            case 'siber-guvenlik-operasyonlari': return <Shield className="size-6 text-primary" />;
            case 'veri-analitigi-ai': return <BarChart3 className="size-6 text-primary" />;
            default: return <Zap className="size-6 text-primary" />;
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-primary font-mono text-[10px] border border-primary/30 px-3 py-1 bg-primary/5 uppercase tracking-widest">{solutions.hero.sysCode}</span>
                        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-silver/60">{solutions.hero.badge}</h2>
                    </div>
                    <h1
                        className="text-5xl md:text-7xl font-bold text-off-white mb-8 tracking-tighter uppercase max-w-4xl"
                        dangerouslySetInnerHTML={{ __html: solutions.hero.title }}
                    />
                    <p className="text-xl text-silver max-w-2xl font-light leading-relaxed">
                        {solutions.hero.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12">
                    {solutions.items.map((solution, idx) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group relative border border-grid-line bg-matte-black/50 backdrop-blur-sm p-8 md:p-12 hover:border-primary/50 transition-all overflow-hidden"
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 size-24 bg-linear-to-bl from-primary/10 to-transparent pointer-events-none" />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                                <div className="lg:col-span-1">
                                    <div className="size-16 border border-grid-line flex items-center justify-center bg-matte-black group-hover:border-primary transition-colors">
                                        {getIcon(solution.id)}
                                    </div>
                                </div>
                                <div className="lg:col-span-6">
                                    <span className="text-[10px] font-mono text-primary mb-2 block tracking-widest uppercase">SOL_TYPE_{idx + 1}</span>
                                    <h2 className="text-3xl font-bold text-off-white mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">
                                        {solution.title}
                                    </h2>
                                    <p className="text-silver font-light leading-relaxed mb-8">
                                        {solution.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {solution.features.map(feat => (
                                            <span key={feat} className="text-[10px] border border-grid-line px-3 py-1 text-silver/60 uppercase tracking-widest">
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:col-span-5">
                                    <div className="grid grid-cols-2 gap-6 border-l border-grid-line pl-12">
                                        {solution.capabilities.map(cap => (
                                            <div key={cap.label}>
                                                <span className="text-[10px] text-silver/40 uppercase tracking-[0.2em] block mb-2">{cap.label}</span>
                                                <span className="text-4xl font-bold text-primary tabular-nums tracking-tighter">{cap.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-10 flex justify-end">
                                        <button className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-off-white hover:text-primary transition-colors uppercase group/btn">
                                            Detaylı İncele
                                            <ChevronRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
