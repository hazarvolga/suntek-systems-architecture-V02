"use client";

import { useState, useMemo } from "react";
import {
    ArrowRight,
    Search,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { useContent } from "@/content/provider";

export default function ProjectsList() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("ALL");
    const { projects } = useContent(); // Consume content here

    // Safety check just in case context isn't fully loaded yet or structure mismatch
    const projectList = projects?.items || [];

    const filteredProjects = useMemo(() => {
        const query = searchQuery.toLowerCase();

        return projectList.filter((project) => {
            // 1. Filter Check
            if (activeCategory !== "ALL" && project.category !== activeCategory) {
                return false;
            }

            // 2. Search Check
            const matchesSearch =
                project.title.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.stack.toLowerCase().includes(query) ||
                project.outcome.toLowerCase().includes(query) ||
                project.sector.toLowerCase().includes(query) ||
                project.year.toLowerCase().includes(query) ||
                project.id.toLowerCase().includes(query);

            return matchesSearch;
        });
    }, [searchQuery, activeCategory, projectList]);

    return (
        <div className="flex flex-col gap-10">
            {/* Filters Sticky Bar */}
            <div className="sticky top-24 z-30 py-4 bg-matte-slate/95 backdrop-blur border-y border-grid-line">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-2 md:pb-0">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-silver/60 shrink-0">
                                Filter
                            </span>

                            <button
                                onClick={() => setActiveCategory("ALL")}
                                className={`px-4 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shrink-0 ${activeCategory === "ALL"
                                    ? "bg-primary text-white hover:bg-primary/90"
                                    : "bg-white/[0.05] text-silver hover:bg-primary/20 hover:text-primary"
                                    }`}
                            >
                                All
                            </button>

                            {[
                                { label: "Cloud Infrastructure", value: "CLOUD_INFRA" },
                                { label: "Embedded Systems", value: "EMBEDDED" },
                                { label: "Cyber Security", value: "CYBER_SEC" }
                            ].map((cat) => (
                                <button
                                    key={cat.value}
                                    onClick={() => setActiveCategory(cat.value)}
                                    className={`px-4 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all shrink-0 ${activeCategory === cat.value
                                        ? "bg-primary text-white hover:bg-primary/90"
                                        : "bg-white/[0.05] text-silver hover:bg-primary/20 hover:text-primary"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4 bg-white/[0.02] border border-grid-line rounded px-3 py-1.5 w-64 focus-within:border-primary/50 transition-colors">
                        <Search className="size-4 text-silver/40" />
                        <input
                            type="text"
                            placeholder="Search archive..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent border-none text-xs text-off-white placeholder:text-silver/40 focus:ring-0 w-full outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Stats */}
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-2 flex items-center gap-2">
                <span className="w-8 h-px bg-primary/70"></span>
                System Records: {filteredProjects.length} Entries Displayed
            </h2>

            {/* Project List */}
            <section className="space-y-6">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <article
                            key={project.id}
                            className="group relative grid grid-cols-12 gap-8 py-8 border-b border-grid-line hover:bg-white/[0.02] transition-colors px-6 -mx-6 rounded-xl animate-in fade-in slide-in-from-bottom-4"
                        >
                            <div className="col-span-12 lg:col-span-9">
                                <header className="mb-6">
                                    <span className="text-primary font-mono text-xs font-bold mb-2 block tracking-widest opacity-80">
                                        ENTRY ID: {project.id}
                                    </span>
                                    <h3 className="text-2xl font-bold text-off-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                </header>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase text-silver/50 tracking-widest mb-2">Scope of Work</h4>
                                        <p className="text-silver leading-relaxed text-sm font-light">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase text-silver/50 tracking-widest mb-2">Technical Outcome</h4>
                                        <p className="text-silver leading-relaxed text-sm font-light">
                                            {project.outcome}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <aside className="col-span-12 lg:col-span-3 lg:border-l border-grid-line lg:pl-8 space-y-6">
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-silver/40 mb-1">Year</span>
                                    <span className="text-sm font-bold text-off-white">{project.year}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-silver/40 mb-1">Tech Stack</span>
                                    <span className="text-sm font-medium text-off-white leading-tight font-mono text-xs text-primary/80">
                                        {project.stack}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-silver/40 mb-1">Industrial Sector</span>
                                    <span className="text-sm font-bold text-off-white">
                                        {project.sector}
                                    </span>
                                </div>
                                <button className="mt-4 text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                    View Technical Spec <ArrowRight className="size-3" />
                                </button>
                            </aside>
                        </article>
                    ))
                ) : (
                    <div className="py-20 text-center border-y border-dashed border-grid-line">
                        <p className="text-silver/50 font-mono text-sm">NO_MATCHING_RECORDS_FOUND</p>
                    </div>
                )}
            </section>

            {/* Pagination Placeholder */}
            <div className="mt-16 pt-8 border-t border-grid-line flex items-center justify-between opacity-50 pointer-events-none">
                <span className="text-[10px] font-bold text-silver/40 tracking-widest">PAGE 1 / 1</span>
                <div className="flex gap-2">
                    <button className="size-8 rounded border border-grid-line flex items-center justify-center text-silver/40">
                        <ChevronLeft className="size-4" />
                    </button>
                    <button className="px-3 h-8 rounded bg-primary text-white text-xs font-bold">1</button>
                    <button className="size-8 rounded border border-grid-line flex items-center justify-center text-silver/40">
                        <ChevronRight className="size-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
