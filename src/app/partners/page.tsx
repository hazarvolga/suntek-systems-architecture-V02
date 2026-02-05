"use client";

import { Download } from "lucide-react";
import PartnersGrid from "@/components/partners/PartnersGrid";
import PageHero from "@/components/layout/PageHero";
import { useContent } from "@/content/provider";

export default function PartnersPage() {
    const { partners } = useContent();

    if (!partners) return null;

    return (
        <main className="min-h-screen bg-matte-slate">
            <PageHero content={partners.hero} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Client-Side Filtering Grid */}
                <PartnersGrid />

                {/* Registry Table Section */}
                <div className="mt-32 pb-12 border border-grid-line bg-[#0a0e14] overflow-hidden relative">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                    <div className="bg-white/[0.03] px-8 py-5 flex flex-col md:flex-row md:items-center justify-between border-b border-grid-line gap-4">
                        <div className="flex items-center gap-3">
                            <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-off-white">Full Registry Index</h2>
                        </div>
                        <button className="text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 group hover:text-white transition-colors">
                            <span className="group-hover:translate-x-1 transition-transform">Download System Spec</span>
                            <Download className="size-4" />
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left font-mono">
                            <thead className="bg-white/[0.01] border-b border-grid-line">
                                <tr>
                                    <th className="px-8 py-4 text-[9px] font-bold uppercase text-silver/30 tracking-widest min-w-[150px]">Node ID</th>
                                    <th className="px-8 py-4 text-[9px] font-bold uppercase text-silver/30 tracking-widest min-w-[250px]">Provider</th>
                                    <th className="px-8 py-4 text-[9px] font-bold uppercase text-silver/30 tracking-widest min-w-[200px]">Security Clearance</th>
                                    <th className="px-8 py-4 text-[9px] font-bold uppercase text-silver/30 tracking-widest min-w-[150px]">Uptime Sync</th>
                                    <th className="px-8 py-4 text-[9px] font-bold uppercase text-silver/30 tracking-widest text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-grid-line">
                                {partners.items.map((partner, i) => (
                                    <tr key={partner.id} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-8 py-5 text-[11px] text-primary font-bold">S-REG-00{i + 1}</td>
                                        <td className="px-8 py-5 text-[11px] text-off-white uppercase tracking-tight">{partner.name}</td>
                                        <td className="px-8 py-5 text-[9px] text-silver/40 font-bold tracking-widest">{partner.tier}</td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-2 text-emerald-500 text-[9px] font-bold">
                                                <span className="size-1.5 bg-emerald-500 rounded-full"></span> 100%_STABLE
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-[10px] font-bold text-primary cursor-pointer uppercase text-right">
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">Fetch_Metadata</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
