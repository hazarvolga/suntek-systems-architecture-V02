"use client";

import { useContent } from "@/content/provider";
import { Activity } from "lucide-react";

export default function ServiceList() {
    const { services } = useContent();
    const { items } = services;

    return (
        <div className="flex flex-col gap-24">
            {items.map((service, index) => (
                <section key={service.id} id={service.id} className="scroll-mt-32 border-t border-grid-line pt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                        {/* Header & Description */}
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">
                                    0{index + 1}
                                </span>
                                <h3 className="text-2xl font-bold text-off-white tracking-tight">{service.title}</h3>
                            </div>
                            <p className="text-silver text-lg font-light leading-relaxed mb-8">
                                {service.description}
                            </p>

                            {service.capabilities && (
                                <div className="grid grid-cols-2 gap-4 border-t border-grid-line pt-6">
                                    {service.capabilities.map((cap, i) => (
                                        <div key={i}>
                                            <span className="block text-2xl font-bold text-off-white mb-1">{cap.value}</span>
                                            <span className="text-[10px] uppercase tracking-widest text-silver/60">{cap.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Features List (Visual) */}
                        <div className="lg:col-span-7">
                            <div className="bg-white/[0.02] border border-grid-line rounded-xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
                                <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>

                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="size-8 rounded bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                                <Activity className="size-4" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-off-white mb-1">{feature}</h4>

                                            </div>
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
