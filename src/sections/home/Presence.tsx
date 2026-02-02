"use client";

import { MoveRight } from 'lucide-react';
import { useContent } from '@/content/provider';
import Link from 'next/link';

export default function Presence() {
    const { home } = useContent();
    const { presence } = home;

    return (
        <section className="border-t border-grid-line pt-20" id="presence">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">{presence.sysCode}</span>
                        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-silver/60">{presence.badge}</h2>
                    </div>
                    <h3 className="text-4xl font-bold mb-8 tracking-tighter text-off-white">{presence.title}</h3>
                    <p className="text-silver font-light leading-relaxed mb-10 text-lg">
                        {presence.description}
                    </p>
                    {presence.cta && (
                        <Link
                            href={presence.cta.href}
                            className="inline-flex items-center gap-4 text-primary font-bold tracking-[0.2em] text-[10px] hover:gap-6 transition-all group"
                        >
                            {presence.cta.label} <MoveRight className="text-sm" />
                        </Link>
                    )}
                </div>
                <div className="md:col-start-7 md:col-span-6">
                    <div className="border border-grid-line p-1">
                        <div className="bg-black/40 aspect-video flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:15px_15px]"></div>
                            {presence.image && (
                                <div
                                    className="w-full h-full architectural-filter opacity-40 mix-blend-screen bg-center bg-no-repeat bg-cover"
                                    style={{ backgroundImage: `url("${presence.image}")` }}
                                />
                            )}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <div className="size-3 bg-primary rounded-full shadow-[0_0_20px_#3b82f6]"></div>
                                <div className="mt-4 px-3 py-1 bg-matte-slate border border-grid-line">
                                    <span className="text-[9px] font-mono text-silver tracking-widest">CENTER: 41.0082° N</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
