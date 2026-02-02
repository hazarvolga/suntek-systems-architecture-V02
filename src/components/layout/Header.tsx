"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useContent } from '@/content/provider';
import { SearchDialog } from '@/components/search/SearchDialog';

export default function Header() {
    const { nav, site } = useContent();

    return (
        <header className="fixed top-0 w-full z-50 bg-matte-slate/90 backdrop-blur-xl border-b border-grid-line">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href={site.logo.href} className="flex items-center gap-3 group">
                    <div className="size-8 text-primary relative">
                        {/* Using standard img tag for SVG support without complex Next.js Image config for now, or could use Next Image if configured */}
                        <img src={site.logo.url} alt={site.logo.alt} className="w-full h-full object-contain" />
                    </div>
                    <h2 className="text-xl font-bold tracking-tighter text-off-white uppercase group-hover:text-primary transition-colors">{site.name}</h2>
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    {nav.header.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[10px] font-bold tracking-[0.2em] text-silver hover:text-primary transition-colors uppercase whitespace-nowrap"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="hidden md:flex items-center gap-4">
                    <SearchDialog />
                    <button className="hidden xl:block border border-primary text-primary px-6 py-2 text-[10px] font-bold tracking-[0.2em] hover:bg-primary hover:text-black transition-all whitespace-nowrap">
                        TEKLİF AL
                    </button>
                </div>
                {/* Mobile Menu Trigger */}
                <button className="lg:hidden text-primary">
                    <Menu />
                </button>
            </div>
        </header>
    );
}
