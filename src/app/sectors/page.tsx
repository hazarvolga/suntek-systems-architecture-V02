"use client";

import { useContent } from "@/content/provider";
import PageHero from "@/components/layout/PageHero";
import PageContainer from "@/components/layout/PageContainer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowUpRight, GraduationCap, HeartPulse, Building2, Factory, LineChart } from "lucide-react";

export default function SectorsPage() {
    const { sectors } = useContent();

    if (!sectors) return null;

    // Mapping icons for sectors
    const getSectorIcon = (slug: string) => {
        switch (slug) {
            case 'egitim': return GraduationCap;
            case 'saglik': return HeartPulse;
            case 'finans': return LineChart;
            case 'enerji': return ZapIcon; // Need to handle or just use Building2
            case 'uretim': return Factory;
            default: return Building2;
        }
    };

    // Simple placeholder for Zap
    const ZapIcon = Building2;

    return (
        <main className="min-h-screen bg-matte-slate">
            <PageHero content={sectors.hero} />

            <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sectors.items.map((sector, idx) => {
                        const Icon = getSectorIcon(sector.id);
                        return (
                            <motion.div
                                key={sector.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Link
                                    href={`/sectors/${sector.id}`}
                                    className="group block h-full bg-matte-black/50 border border-grid-line p-10 hover:border-primary/50 transition-all relative overflow-hidden"
                                >
                                    {/* Architectural Background Accent */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/10 transition-colors" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-center justify-between mb-10">
                                            <div className="size-12 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-matte-black transition-all duration-500">
                                                <Icon className="size-6" />
                                            </div>
                                            <ArrowUpRight className="size-5 text-silver/20 group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>

                                        <h2 className="text-2xl font-bold text-off-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors leading-[1.1]">
                                            {sector.title}
                                        </h2>

                                        <p className="text-silver/60 text-sm font-light leading-relaxed mb-8 flex-grow">
                                            {sector.description}
                                        </p>

                                        {/* Sector Metrics (Subtle) */}
                                        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5 mt-auto">
                                            {sector.stats?.slice(0, 2).map((stat, sIdx) => (
                                                <div key={sIdx}>
                                                    <div className="text-[9px] text-silver/30 uppercase font-mono mb-1">{stat.label}</div>
                                                    <div className="text-sm font-bold text-silver/70 tabular-nums">{stat.value}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 text-[11px] font-bold text-primary uppercase tracking-widest mt-8">
                                            Uygulama Alanları
                                            <ChevronRight className="size-3 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
