"use client";

import { useContent } from "@/content/provider";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function SolutionList() {
    const { solutions } = useContent();
    const { items } = solutions;

    return (
        <div className="flex flex-col gap-24">
            {items.map((solution, index) => (
                <section key={solution.id} id={solution.id} className="scroll-mt-32 border-t border-grid-line pt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                        {/* Header & Description */}
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">
                                    SOL_0{index + 1}
                                </span>
                                <h3 className="text-2xl font-bold text-off-white tracking-tight">{solution.title}</h3>
                            </div>
                            <p className="text-silver text-lg font-light leading-relaxed mb-8">
                                {solution.description}
                            </p>

                            {solution.capabilities && (
                                <div className="grid grid-cols-2 gap-4 border-t border-grid-line pt-6">
                                    {solution.capabilities.map((cap, i) => (
                                        <div key={i}>
                                            <span className="block text-xl font-bold text-off-white mb-1">{cap.value}</span>
                                            <span className="text-[10px] uppercase tracking-widest text-silver/60">{cap.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Features List */}
                        <div className="lg:col-span-7">
                            <div className="bg-white/[0.02] border border-grid-line p-8 relative group hover:border-primary/30 transition-colors">
                                <h4 className="text-sm font-bold text-off-white uppercase tracking-widest mb-6 border-b border-grid-line pb-4 inline-block">Technical Specifications</h4>
                                <div className="grid grid-cols-1 gap-4">
                                    {solution.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <CheckCircle className="size-4 text-primary mt-1 shrink-0" />
                                            <span className="text-sm font-light text-silver">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-4 border-t border-grid-line flex justify-end">
                                    <ArrowRight className="text-silver/30 group-hover:text-primary transition-colors" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            ))}
        </div>
    );
}
