"use client";

import { motion } from "framer-motion";
import { useContent } from "@/content/provider";
import PageHero from "@/components/layout/PageHero";
import { MapPin, Calendar, ArrowUpRight, BookOpen, Users, Briefcase } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
    const { careers } = useContent();

    if (!careers) return null;

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'BookOpen': return <BookOpen className="size-6 text-primary" />;
            case 'Users': return <Users className="size-6 text-primary" />;
            default: return <Briefcase className="size-6 text-primary" />;
        }
    };

    return (
        <main className="min-h-screen bg-matte-slate">
            <PageHero content={careers.hero} />

            <div className="max-w-7xl mx-auto px-6 relative z-10 pb-32">
                {/* Intro Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <h2 className="text-4xl font-bold text-off-white mb-8 tracking-tight uppercase">
                            {careers.intro.title}
                        </h2>
                        <p className="text-xl text-silver font-light leading-relaxed mb-12">
                            {careers.intro.content}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {careers.policies.map((policy, idx) => (
                                <div key={idx} className="group border border-grid-line p-8 hover:border-primary/50 transition-all bg-matte-black/30 backdrop-blur-sm">
                                    <div className="size-12 border border-grid-line flex items-center justify-center bg-matte-black mb-6 group-hover:border-primary transition-colors">
                                        {getIcon(policy.icon || '')}
                                    </div>
                                    <h3 className="text-lg font-bold text-off-white mb-3 uppercase tracking-tight">{policy.title}</h3>
                                    <p className="text-silver/60 text-sm font-light leading-relaxed">{policy.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="aspect-square border border-grid-line p-4 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                            <img
                                src={careers.images.career}
                                alt="Suntek Office Life"
                                className="w-full h-full object-cover architectural-filter group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Open Positions */}
                <div className="border-t border-grid-line pt-24">
                    <div className="flex items-center gap-4 mb-16">
                        <span className="text-primary font-mono text-[10px] border border-primary/30 px-3 py-1 bg-primary/5 uppercase tracking-widest leading-none block">
                            SYS_POS_INDEX
                        </span>
                        <div className="h-px w-8 bg-grid-line" />
                        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-silver/60">
                            {careers.openPositions.title}
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {careers.openPositions.items.map((job, idx) => (
                            <Link
                                key={idx}
                                href={job.link}
                                className="group block border border-grid-line bg-matte-black/50 hover:border-primary transition-all p-8 md:p-10 relative overflow-hidden"
                            >
                                {/* Staggered line effect */}
                                <div className="absolute top-0 left-0 h-full w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-off-white uppercase mb-4 group-hover:text-primary transition-colors tracking-tight">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-6 items-center">
                                            <div className="flex items-center gap-2 text-[10px] font-mono text-silver/40 uppercase tracking-widest">
                                                <MapPin className="size-3 text-primary" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center gap-2 text-[10px] font-mono text-silver/40 uppercase tracking-widest">
                                                <Calendar className="size-3 text-primary" />
                                                {job.date}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-[10px] font-bold text-off-white uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                                        Detaylar_Bash_Script.sh
                                        <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 flex justify-center">
                        <p className="text-silver/30 text-[10px] font-mono uppercase tracking-[0.4em]">
                            &gt; E2E Entegrasyon Tamamlandı // Aday Verisi Bekleniyor...
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
