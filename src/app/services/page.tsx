"use client";

import { Download } from "lucide-react";
import ServiceList from "@/sections/services/ServiceList";
import { useContent } from "@/content/provider";

export default function ServicesPage() {
    const { services } = useContent();
    const { hero } = services;

    return (
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-32 pt-32">
            {/* Page Heading */}
            <section className="py-12 lg:py-20 border-b border-grid-line flex flex-wrap items-end justify-between gap-10 bg-matte-slate relative z-10 mb-12">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">{hero.sysCode}</span>
                        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-silver/60">{hero.badge}</h2>
                    </div>
                    <h1 className="text-off-white text-6xl lg:text-8xl font-bold leading-tight tracking-tighter mb-6">
                        {hero.title}
                    </h1>
                    <p className="text-silver text-xl font-light leading-relaxed max-w-lg">
                        {hero.description}
                    </p>
                </div>
                <button className="flex items-center gap-3 bg-white/[0.02] hover:bg-white/[0.05] border border-grid-line px-8 py-4 rounded-xl text-sm font-bold tracking-widest uppercase text-off-white transition-all">
                    <span>{hero.primaryCta?.label || "Download Spec"}</span>
                    <Download className="text-primary size-4" />
                </button>
            </section>

            {/* Service List */}
            <ServiceList />
        </div>
    );
}
