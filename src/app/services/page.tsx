"use client";

import { useContent } from "@/content/provider";
import PageHero from "@/components/layout/PageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
    const { services } = useContent();

    if (!services) return null;

    return (
        <main className="min-h-screen bg-matte-slate">
            <PageHero content={services.hero} />

            <div id="services-list" className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.items.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Link
                                href={`/services/${service.id}`}
                                className="group block h-full border border-grid-line bg-matte-black/40 backdrop-blur-md p-8 hover:border-primary/50 transition-all relative overflow-hidden"
                            >
                                {/* Background Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/10 transition-colors" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-primary font-mono text-[10px] tracking-[0.2em]">
                                            SRV_0{idx + 1}
                                        </span>
                                        <ArrowUpRight className="size-5 text-silver/20 group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>

                                    <h2 className="text-2xl font-bold text-off-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors leading-[1.1]">
                                        {service.title}
                                    </h2>

                                    <p className="text-silver/60 text-sm font-light leading-relaxed mb-8 flex-grow">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {service.features.slice(0, 3).map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center gap-2 text-[10px] font-mono text-silver/40 uppercase tracking-widest">
                                                <div className="size-1 bg-primary/40 rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center gap-2 text-[11px] font-bold text-primary uppercase tracking-widest mt-auto">
                                        Proje Detayları
                                        <ChevronRight className="size-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
