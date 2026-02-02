"use client";

import { useContent } from "@/content/provider";
import Link from "next/link";

export default function ServicesSidebar() {
    const { services } = useContent();
    const { items, hero } = services;

    return (
        <aside className="hidden lg:block w-80 shrink-0 border-r border-grid-line h-[calc(100vh-80px)] sticky top-20 overflow-y-auto no-scrollbar">
            <div className="p-8 flex flex-col gap-8">
                <div className="flex items-center gap-3 pb-6 border-b border-grid-line">
                    <div className="size-2 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                    <div>
                        <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-silver">Index</h3>
                        <p className="text-[10px] text-silver/50 font-mono">{hero.sysCode}</p>
                    </div>
                </div>
                <nav className="flex flex-col gap-1">
                    {items.map((item, index) => (
                        <Link
                            key={item.id}
                            href={`#${item.id}`}
                            className="group flex items-center justify-between p-3 border-l-2 border-transparent hover:border-silver/30 hover:bg-white/5 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-mono opacity-30 group-hover:opacity-60">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-xs font-medium tracking-widest uppercase text-silver group-hover:text-off-white">
                                    {item.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
