"use client";

import { useContent } from "@/content/provider";
import Breadcrumb from "@/components/ui/Breadcrumbs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CampaignsPage() {
    const { campaigns } = useContent();
    const { hero, items } = campaigns;

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
                        <Breadcrumb items={[{ label: "Kurumsal", href: "#" }, { label: "Kampanyalar", href: "/campaigns" }]} />
                        <div className="space-y-4">
                            <span className="text-primary text-sm font-mono tracking-widest uppercase">{hero.badge}</span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-off-white"
                                dangerouslySetInnerHTML={{ __html: hero.title }} />
                            <p className="text-xl text-silver max-w-2xl leading-relaxed">{hero.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campaigns Grid */}
            <section className="py-24 bg-matte-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item, idx) => (
                            <Link key={idx} href={item.link} className="group bg-zinc-900/30 border border-grid-line overflow-hidden hover:border-primary/50 transition-all">
                                <div className="aspect-video relative overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-off-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-silver/60 mb-6 line-clamp-3">
                                        {item.content}
                                    </p>
                                    <span className="flex items-center gap-2 text-primary font-medium text-sm">
                                        Detaylı Bilgi <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
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
