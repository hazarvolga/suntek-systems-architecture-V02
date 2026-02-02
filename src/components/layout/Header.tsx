"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useContent } from '@/content/provider';

export default function Header() {
    const { nav, site } = useContent();

    return (
        <header className="fixed top-0 w-full z-50 bg-matte-slate/90 backdrop-blur-xl border-b border-grid-line">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="size-8 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8092 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold tracking-tighter text-off-white uppercase">{site.name}</h2>
                </div>
                <nav className="hidden md:flex items-center gap-10">
                    {nav.header.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[10px] font-bold tracking-[0.2em] text-silver hover:text-primary transition-colors uppercase"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <button className="border border-primary text-primary px-8 py-2 text-[10px] font-bold tracking-[0.2em] hover:bg-primary hover:text-black transition-all">
                    GET QUOTE
                </button>
                {/* Mobile Menu Trigger */}
                <button className="md:hidden text-primary">
                    <Menu />
                </button>
            </div>
        </header>
    );
}
