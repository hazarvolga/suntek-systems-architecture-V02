"use client";

import { useContent } from "@/content/provider";
import Breadcrumb from "@/components/ui/Breadcrumbs";
import { ArrowRight, MapPin, Calendar, Clock, BookOpen, TrendingUp, Compass, Wallet } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
    const { careers } = useContent();
    const { hero, intro, policies, openPositions, images } = careers;

    const icons = {
        "TrendingUp": TrendingUp,
        "BookOpen": BookOpen,
        "Compass": Compass,
        "Wallet": Wallet
    };

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center border-b border-grid-line overflow-hidden">
                <div className="absolute inset-0 bg-matte-black/80 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale opacity-40 scale-105"
                    style={{ backgroundImage: `url(${hero.backgroundImage})` }}
                />
                <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
                    <div className="flex flex-col gap-6 max-w-3xl">
                        <Breadcrumb items={[{ label: "Kurumsal", href: "#" }, { label: "Kariyer", href: "/careers" }]} />
                        <div className="space-y-4">
                            <span className="text-primary text-sm font-mono tracking-widest uppercase">{hero.badge}</span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-off-white"
                                dangerouslySetInnerHTML={{ __html: hero.title }} />
                            <p className="text-xl text-silver max-w-2xl leading-relaxed">{hero.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 border-b border-grid-line bg-matte-black">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-off-white">{intro.title}</h2>
                        <div className="prose prose-invert prose-lg text-silver/80">
                            {intro.content}
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-none border border-grid-line overflow-hidden">
                        <img src={images.career} alt="Suntek Kariyer" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                </div>
            </section>

            {/* Policies Grid */}
            <section className="py-24 border-b border-grid-line bg-zinc-900/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-px bg-grid-line border border-grid-line">
                        {policies.map((policy, idx) => {
                            const Icon = icons[policy.icon as keyof typeof icons] || BookOpen;
                            return (
                                <div key={idx} className="bg-matte-black p-12 group hover:bg-zinc-900 transition-colors">
                                    <Icon className="size-10 text-primary mb-6 stroke-1" />
                                    <h3 className="text-xl font-bold text-off-white mb-4">{policy.title}</h3>
                                    <p className="text-silver/70 leading-relaxed">{policy.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 bg-matte-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12 flex items-end justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-off-white mb-4">{openPositions.title}</h2>
                            <p className="text-silver">Ekibimize katılmak için açık pozisyonları inceleyin.</p>
                        </div>
                        <Link href="/contact" className="text-primary hover:text-primary/80 flex items-center gap-2 group">
                            Genel Başvuru <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid gap-4">
                        {openPositions.items.map((job, idx) => (
                            <Link key={idx} href={job.link} target="_blank" className="group block bg-zinc-900/50 border border-grid-line p-8 hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-off-white group-hover:text-primary transition-colors mb-2">{job.title}</h3>
                                        <div className="flex items-center gap-6 text-sm text-silver/60">
                                            <span className="flex items-center gap-2"><MapPin className="size-4" /> {job.location}</span>
                                            <span className="flex items-center gap-2"><Calendar className="size-4" /> {job.date}</span>
                                            <span className="flex items-center gap-2"><Clock className="size-4" /> Tam Zamanlı</span>
                                        </div>
                                    </div>
                                    <span className="px-6 py-3 border border-grid-line text-off-white text-sm font-medium hover:bg-primary hover:border-primary hover:text-matte-black transition-all">
                                        Başvur
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
