"use client";

import { useContent } from "@/content/provider";

export default function SectorList() {
    const { sectors } = useContent();
    const { items } = sectors;

    return (
        <div className="flex flex-col gap-24">
            {items.map((sector, index) => (
                <section key={sector.id} id={sector.id} className="scroll-mt-32 border-t border-grid-line pt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                        {/* Header & Description */}
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">
                                    SEC_0{index + 1}
                                </span>
                                <h3 className="text-2xl font-bold text-off-white tracking-tight">{sector.title}</h3>
                            </div>
                            <p className="text-silver text-lg font-light leading-relaxed mb-8">
                                {sector.description}
                            </p>

                            {sector.stats && (
                                <div className="grid grid-cols-2 gap-4 border-t border-grid-line pt-6">
                                    {sector.stats.map((stat, i) => (
                                        <div key={i}>
                                            <span className="block text-2xl font-bold text-off-white mb-1">{stat.value}</span>
                                            <span className="text-[10px] uppercase tracking-widest text-silver/60">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Features List */}
                        <div className="lg:col-span-7">
                            <div className="bg-white/[0.02] border border-grid-line rounded-xl p-8 relative overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
                                    {sector.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="size-2 bg-primary/50 rounded-full"></div>
                                            <span className="text-sm font-medium text-off-white">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            ))}
        </div>
    );
}
