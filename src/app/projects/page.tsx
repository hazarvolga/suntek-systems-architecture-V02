"use client";

import { useContent } from "@/content/provider";
import PageHero from "@/components/layout/PageHero";
import PageContainer from "@/components/layout/PageContainer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MapPin, Calendar, Tag } from "lucide-react";

export default function ProjectsPage() {
    const { projects } = useContent();

    if (!projects) return null;

    return (
        <main className="min-h-screen bg-matte-slate">
            <PageHero content={projects.hero} />

            <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.items.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Link
                                href={`/projects/${project.slug}`}
                                className="group block bg-matte-black/50 border border-grid-line hover:border-primary/50 transition-all overflow-hidden relative"
                            >
                                {/* Project Image with architectural overlay */}
                                <div className="aspect-[16/10] relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-60" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-primary/90 text-matte-black text-[9px] font-bold px-3 py-1 uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 relative">
                                    {/* System Code & Arrow */}
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-primary font-mono text-[10px] tracking-[0.2em] uppercase">
                                            PRJ_LOG_{project.year}
                                        </span>
                                        <ArrowUpRight className="size-5 text-silver/20 group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>

                                    <h2 className="text-xl font-bold text-off-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors leading-[1.1]">
                                        {project.title}
                                    </h2>

                                    <p className="text-silver/60 text-sm font-light leading-relaxed mb-8 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Project Specs */}
                                    <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                                        <div className="flex items-center gap-3">
                                            <MapPin className="size-3.5 text-primary/60" />
                                            <span className="text-[10px] text-silver/40 uppercase font-mono">{project.location}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Tag className="size-3.5 text-primary/60" />
                                            <span className="text-[10px] text-silver/40 uppercase font-mono">{project.client}</span>
                                        </div>
                                    </div>

                                    {/* Hover Staggered Line */}
                                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
