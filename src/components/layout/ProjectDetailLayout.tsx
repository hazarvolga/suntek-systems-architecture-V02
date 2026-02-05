"use client";

import { useContent } from "@/content/provider";
import PageHero from "./PageHero";
import PageContainer from "./PageContainer";
import { SectionRenderer } from "@/components/SectionRenderer";
import { Section } from "@/types/page-content";
import { MapPin, Calendar, Tag } from "lucide-react";

interface ProjectDetailLayoutProps {
    projectSlug: string;
    sections: Section[];
    fallbackMetadata: {
        title: string;
        description: string;
    };
}

export default function ProjectDetailLayout({ projectSlug, sections, fallbackMetadata }: ProjectDetailLayoutProps) {
    const { projects } = useContent();

    // Find project data from our premium content provider (to get extra metadata)
    const projectData = projects?.items.find(p => p.slug === projectSlug);

    const heroContent = {
        sysCode: `PRJ_${projectSlug.toUpperCase().slice(0, 3)}`,
        badge: projectData?.category || "Referans Proje",
        title: projectData?.title || fallbackMetadata.title,
        description: projectData?.description || fallbackMetadata.description,
        backgroundImage: projectData?.image || "/images/bg-blueprint.jpg"
    };

    return (
        <main className="min-h-screen bg-matte-slate">
            <PageHero content={heroContent} />

            <PageContainer>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Project Overview Sidebar */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="bg-matte-black/40 border border-grid-line p-8 backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2" />

                            <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-silver/40 mb-8 border-b border-white/5 pb-4">
                                Proje Detayları
                            </h3>

                            <div className="space-y-6">
                                {projectData?.client && (
                                    <div className="flex items-center gap-4">
                                        <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                                            <Tag className="size-4" />
                                        </div>
                                        <div>
                                            <div className="text-[9px] text-silver/30 uppercase font-mono mb-0.5">Müşteri</div>
                                            <div className="text-sm font-bold text-off-white">{projectData.client}</div>
                                        </div>
                                    </div>
                                )}
                                {projectData?.location && (
                                    <div className="flex items-center gap-4">
                                        <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                                            <MapPin className="size-4" />
                                        </div>
                                        <div>
                                            <div className="text-[9px] text-silver/30 uppercase font-mono mb-0.5">Lokasyon</div>
                                            <div className="text-sm font-bold text-off-white">{projectData.location}</div>
                                        </div>
                                    </div>
                                )}
                                {projectData?.year && (
                                    <div className="flex items-center gap-4">
                                        <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                                            <Calendar className="size-4" />
                                        </div>
                                        <div>
                                            <div className="text-[9px] text-silver/30 uppercase font-mono mb-0.5">Yıl</div>
                                            <div className="text-sm font-bold text-off-white">{projectData.year}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Project Tags */}
                        {projectData?.tags && (
                            <div className="flex flex-wrap gap-2">
                                {projectData.tags.map(tag => (
                                    <span key={tag} className="text-[9px] font-mono text-primary/60 border border-primary/20 px-3 py-1 bg-primary/5 uppercase tracking-widest">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">
                        {sections.map((section) => (
                            <div key={section.id} className="relative group">
                                <div className="absolute -left-8 top-2 w-1 h-8 bg-primary/20 group-hover:bg-primary transition-colors hidden lg:block" />
                                <SectionRenderer section={section} />
                            </div>
                        ))}
                    </div>
                </div>
            </PageContainer>
        </main>
    );
}
