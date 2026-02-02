"use client";

import { useContent } from "@/content/provider";
import Link from "next/link";

export default function Footer() {
    const { nav, site } = useContent();

    return (
        <footer className="relative z-10 bg-black/40 border-t border-grid-line py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="md:col-span-4 flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <div className="size-6 text-primary">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8092 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg font-bold tracking-tighter text-off-white uppercase">{site.name}</h2>
                        </div>
                        <div className="font-mono text-[10px] text-silver/40 space-y-2 uppercase tracking-widest">
                            <p>Terminal: 0x992-BIM-24</p>
                            <p>Status: Operational // 24.7</p>
                            <p>© {new Date().getFullYear()} {site.name} Global Systems</p>
                        </div>
                    </div>

                    {nav.footer.columns.map((column, idx) => (
                        <div key={idx} className="md:col-span-2">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-off-white">{column.title}</h4>
                            <ul className="flex flex-col gap-4 text-[11px] font-medium tracking-widest text-silver">
                                {column.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="hover:text-primary transition-colors uppercase"
                                            target={link.isExternal ? "_blank" : undefined}
                                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="md:col-span-4 flex flex-col items-end gap-10">
                        <div className="text-right space-y-2">
                            <p className="text-xs font-bold tracking-[0.2em] text-off-white">CONTACT@{site.name.toUpperCase()}.COM.TR</p>
                            <p className="text-xs font-mono text-silver">+90 212 555 00 00</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="size-12 border border-grid-line flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:border-primary transition-all group cursor-pointer">
                                <span className="text-[9px] font-mono group-hover:text-primary">ISO</span>
                            </div>
                            <div className="size-12 border border-grid-line flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:border-primary transition-all group cursor-pointer">
                                <span className="text-[9px] font-mono group-hover:text-primary">BIM</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-24 pt-8 border-t border-grid-line flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[9px] font-mono text-silver/30 uppercase tracking-[0.3em]">{site.description}</p>
                    <div className="flex items-center gap-3">
                        <span className="size-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                        <span className="text-[9px] font-mono text-silver/50 tracking-widest uppercase">System Online</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
