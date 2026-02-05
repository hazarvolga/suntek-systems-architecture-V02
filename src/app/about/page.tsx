"use client";

import { useContent } from "@/content/provider";
import PageHero from "@/components/layout/PageHero";
import PageContainer from "@/components/layout/PageContainer";
import { motion } from "framer-motion";
import { AboutContent } from "@/content/pages/about";

export default function AboutPage() {
    const { aboutContent } = useContent() as any as { aboutContent: AboutContent | undefined };

    if (!aboutContent) return null;

    return (
        <main className="min-h-screen bg-matte-slate">
            <PageHero content={aboutContent.hero} />

            <PageContainer>
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
                    {aboutContent.stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-matte-black/40 border border-grid-line p-8 text-center backdrop-blur-sm group hover:border-primary/40 transition-all"
                        >
                            <div className="text-4xl font-bold text-primary mb-2 tracking-tighter group-hover:scale-110 transition-transform">
                                {stat.value}
                            </div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-silver/40 font-mono">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline Section */}
                <div className="relative mb-32">
                    <div className="flex items-center gap-4 mb-20">
                        <span className="text-primary font-mono text-[10px] border border-primary/30 px-3 py-1 bg-primary/5 uppercase tracking-widest leading-none block">
                            SYS_CHRONO_LOG
                        </span>
                        <div className="h-px w-8 bg-grid-line" />
                        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-silver/60">
                            Yolculuğumuz
                        </h2>
                    </div>

                    <div className="space-y-4 relative">
                        {/* Vertical line connector */}
                        <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-grid-line -translate-x-1/2 opacity-20 hidden lg:block" />

                        {aboutContent.timeline.map((event, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-center relative ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="lg:w-1/2 px-0 lg:px-12">
                                    <div className="bg-matte-black/50 border border-grid-line p-8 hover:border-primary/30 transition-all relative overflow-hidden group">
                                        {/* Year overlay */}
                                        <div className="absolute -top-4 -right-4 text-6xl font-bold text-white/[0.03] pointer-events-none group-hover:text-primary/[0.05] transition-colors uppercase">
                                            {event.year}
                                        </div>

                                        <span className="text-primary font-mono text-xs mb-4 block">[{event.year}]</span>
                                        <h3 className="text-xl font-bold text-off-white mb-4 uppercase tracking-tight">{event.title}</h3>
                                        <p className="text-silver/60 text-sm font-light leading-relaxed mb-6">
                                            {event.description}
                                        </p>

                                        <div className="flex gap-4 border-t border-white/5 pt-4">
                                            <div className="flex-1">
                                                <div className="text-[9px] text-silver/30 uppercase font-mono mb-1">{event.focusLabel}</div>
                                                <div className="text-[11px] text-silver/70 font-bold uppercase">{event.focusValue}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-[9px] text-silver/30 uppercase font-mono mb-1">{event.impactLabel}</div>
                                                <div className="text-[11px] text-silver/70 font-bold uppercase">{event.impactValue}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-0 lg:left-1/2 size-4 bg-primary border-4 border-matte-slate rounded-full -translate-x-1/2 z-10 hidden lg:block" />
                                <div className="lg:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Partners Grid Section in About */}
                <div className="border-t border-grid-line pt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-off-white uppercase tracking-tight mb-4">{aboutContent.partners.title}</h2>
                        <p className="text-silver/40 text-[10px] font-mono uppercase tracking-[0.3em]">Module_Ecosystem_Sync.exe</p>
                    </div>

                    <div className="space-y-16">
                        {aboutContent.partners.categories.map((cat, idx) => (
                            <div key={idx}>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-px flex-grow bg-grid-line opacity-20" />
                                    <span className="text-[10px] font-bold text-silver/30 uppercase tracking-[0.2em]">{cat.name}</span>
                                    <div className="h-px flex-grow bg-grid-line opacity-20" />
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                    {cat.logos.map((logo, lIdx) => (
                                        <div key={lIdx} className="aspect-video bg-matte-black/30 border border-grid-line p-6 flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white/[0.02] transition-all group">
                                            <img src={logo} alt="Partner Logo" className="max-w-full max-h-full object-contain opacity-40 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PageContainer>
        </main>
    );
}
