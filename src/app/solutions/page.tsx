"use client";

import { useContent } from "@/content/provider";
import SolutionList from "@/sections/solutions/SolutionList";

export default function SolutionsPage() {
    const { solutions } = useContent();
    const { hero } = solutions;

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
            <SolutionList />
        </div>
    );
}
