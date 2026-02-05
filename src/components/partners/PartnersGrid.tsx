"use client";

import { useState } from "react";
import {
    Activity,
    Server,
    Shield,
    Cloud,
    Cpu,
    Database,
    ExternalLink
} from "lucide-react";

import { useContent } from "@/content/provider";
import * as LucideIcons from "lucide-react";

export default function PartnersGrid() {
    const { partners: partnersData } = useContent();
    const [activeFilter, setActiveFilter] = useState("ALL_MODULES");

    if (!partnersData) return null;

    const partners = partnersData.items;

    const filteredPartners = activeFilter === "ALL_MODULES"
        ? partners
        : partners.filter(p => p.category === activeFilter);

    return (
        <div className="flex flex-col gap-16">
            {/* Control Bar */}
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-xl p-6 flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap gap-4">
                    {["ALL_MODULES", "INFRASTRUCTURE", "SECURITY_LAYER"].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded transition-all ${activeFilter === filter
                                ? "bg-primary text-white shadow-[0_0_15px_rgba(13,89,242,0.3)]"
                                : "bg-white/5 border border-white/10 text-silver/50 hover:text-white hover:border-primary/50"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-8">
                    <div className="text-right">
                        <div className="text-silver/40 text-[9px] font-mono uppercase tracking-widest mb-1">Global Status</div>
                        <div className="text-emerald-500 text-[11px] font-bold font-mono tracking-widest flex items-center justify-end gap-2">
                            <span className="size-1.5 bg-emerald-500 rounded-full animate-ping"></span> OPTIMAL
                        </div>
                    </div>
                </div>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPartners.map((partner) => (
                    <div key={partner.id} className="group relative border border-grid-line bg-[#0a0e14] p-10 flex flex-col gap-8 hover:border-primary/50 hover:shadow-[inset_0_0_30px_rgba(13,89,242,0.05)] transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">

                        {/* Header */}
                        <div className="flex justify-between items-start">
                            <div className="h-10 flex items-center relative">
                                {/* Logo */}
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
                                />
                            </div>
                            <span className="text-white/10 font-mono text-3xl font-bold">{partner.id}</span>
                        </div>

                        {/* Content */}
                        <div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="bg-primary/10 border border-primary/40 text-blue-400 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest">
                                    {partner.tier}
                                </span>
                                {partner.level && (
                                    <span className="bg-white/5 border border-white/20 text-silver px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest">
                                        {partner.level}
                                    </span>
                                )}
                            </div>

                            <h3 className="text-off-white text-xl font-bold mb-6 tracking-tight group-hover:text-primary transition-colors">
                                {partner.name}
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-[10px] font-mono text-silver/40 border-b border-white/5 pb-2">
                                    <span>CORE_CAPABILITY</span>
                                    <span className="text-silver/60">{partner.core}</span>
                                </div>
                                <ul className="text-silver/50 text-[11px] font-mono space-y-3 uppercase">
                                    {partner.specs.map((spec, i) => {
                                        const Icon = (LucideIcons as any)[spec.icon] || LucideIcons.Activity;
                                        return (
                                            <li key={i} className="flex items-center gap-3">
                                                <Icon className="size-3.5 text-primary" />
                                                {spec.label}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        {/* Footer / ID */}
                        <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[9px] font-mono text-silver/30">MODULE_ID: {partner.modId}</span>
                            <ExternalLink className="text-silver/50 size-4 hover:text-off-white cursor-pointer transition-colors" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
