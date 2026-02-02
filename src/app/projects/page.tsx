"use client";

import ProjectList from "@/sections/projects/ProjectList";
import { useContent } from "@/content/provider";

export default function ProjectsPage() {
    const { projects } = useContent();
    const { hero } = projects;

    return (
        <main className="min-h-screen pt-32 pb-24 bg-matte-slate">
            <div className="max-w-7xl mx-auto px-6">

                {/* Page Heading */}
                <section className="mb-12 border-l-4 border-primary pl-6">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">{hero.sysCode}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-off-white mb-4">
                        {hero.title}
                    </h1>
                    <p className="text-lg text-silver max-w-3xl leading-relaxed font-light">
                        {hero.description}
                    </p>
                </section>

                {/* Interactive Project List (Client Component) */}
                <ProjectList />

            </div>
        </main>
    );
}
