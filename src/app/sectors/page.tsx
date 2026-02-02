"use client";

import { useContent } from "@/content/provider";
import SectorList from "@/sections/sectors/SectorList";
import { ShieldCheck, Award } from "lucide-react";

export default function SectorsPage() {
    const { sectors } = useContent();
    const { hero } = sectors;

    return (
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-32">

            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-6 mb-12 py-12 lg:py-20 border-b border-grid-line relative z-10">
                <div className="flex flex-col gap-4 max-w-2xl">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">{hero.sysCode}</span>
                        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-silver/60">{hero.badge}</h2>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-off-white">
                        {hero.title}
                    </h1>
                    <p className="text-silver text-lg font-light leading-relaxed">
                        {hero.description}
                    </p>
                </div>
            </div>

            {/* Dynamic Content Sections */}
            <SectorList />

            {/* Compliance Footer */}
            <div className="mt-32 border-t border-grid-line pt-12">
                <p className="text-silver/40 text-[10px] font-bold uppercase tracking-[0.2em] text-center mb-12">
                    Technical Compliance & Regulatory Alignment
                </p>
                <div className="flex flex-wrap justify-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-4">
                        <ShieldCheck className="size-10 text-off-white" />
                        <div>
                            <p className="text-off-white font-bold text-sm">HIPAA</p>
                            <p className="text-[10px] text-silver/60 uppercase tracking-wider">Compliant Infra</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Award className="size-10 text-off-white" />
                        <div>
                            <p className="text-off-white font-bold text-sm">ISO 27001</p>
                            <p className="text-[10px] text-silver/60 uppercase tracking-wider">Certified Ops</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
