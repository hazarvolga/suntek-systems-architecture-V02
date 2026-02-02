"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Network,
    FileText,
    Workflow,
    ShieldCheck,
    Server,
    Cloud,
    Cpu
} from "lucide-react";

export default function SolutionsSidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <aside className="w-full lg:w-72 border-r border-grid-line p-6 flex flex-col gap-10 mt-12 bg-matte-slate z-20 h-[calc(100vh-80px)] sticky top-[80px]">
            {/* Navigation Index */}
            <div className="flex flex-col">
                <h3 className="text-silver/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Navigation Index</h3>
                <div className="flex flex-col gap-2">
                    <Link href="/solutions/domain-map" className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${isActive('/solutions/domain-map') || pathname === '/solutions'
                            ? 'bg-primary/10 text-primary border-primary/20'
                            : 'text-silver/60 border-transparent hover:bg-white/5'
                        }`}>
                        <Network className="size-5" />
                        <p className="text-sm font-bold">Domain Map</p>
                    </Link>
                    <Link href="/solutions/technical-specs" className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${isActive('/solutions/technical-specs')
                            ? 'bg-primary/10 text-primary border-primary/20'
                            : 'text-silver/60 border-transparent hover:bg-white/5'
                        }`}>
                        <FileText className="size-5" />
                        <p className="text-sm font-medium">Technical Specs</p>
                    </Link>
                    <Link href="/solutions/dependencies" className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${isActive('/solutions/dependencies')
                            ? 'bg-primary/10 text-primary border-primary/20'
                            : 'text-silver/60 border-transparent hover:bg-white/5'
                        }`}>
                        <Workflow className="size-5" />
                        <p className="text-sm font-medium">Dependencies</p>
                    </Link>
                </div>
            </div>

            {/* Core Ecosystem */}
            <div className="flex flex-col">
                <h3 className="text-silver/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Core Ecosystem</h3>
                <div className="flex flex-col gap-2">
                    <Link href="/solutions/security-iam" className={`flex items-center gap-3 px-4 py-2 border border-transparent rounded-lg transition-colors group ${isActive('/solutions/security-iam') ? 'text-primary bg-primary/5 border-primary/10' : 'text-silver/60 hover:text-primary'
                        }`}>
                        <ShieldCheck className="size-5 group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-medium">Security & IAM</p>
                    </Link>
                    <Link href="/solutions/infrastructure" className={`flex items-center gap-3 px-4 py-2 border border-transparent rounded-lg transition-colors group ${isActive('/solutions/infrastructure') ? 'text-primary bg-primary/5 border-primary/10' : 'text-silver/60 hover:text-primary'
                        }`}>
                        <Server className="size-5 group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-medium">Infrastructure</p>
                    </Link>
                    <Link href="/solutions/continuity" className={`flex items-center gap-3 px-4 py-2 border border-transparent rounded-lg transition-colors group ${isActive('/solutions/continuity') ? 'text-primary bg-primary/5 border-primary/10' : 'text-silver/60 hover:text-primary'
                        }`}>
                        <Cloud className="size-5 group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-medium">Continuity</p>
                    </Link>
                    <Link href="/solutions/managed-ops" className={`flex items-center gap-3 px-4 py-2 border border-transparent rounded-lg transition-colors group ${isActive('/solutions/managed-ops') ? 'text-primary bg-primary/5 border-primary/10' : 'text-silver/60 hover:text-primary'
                        }`}>
                        <Cpu className="size-5 group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-medium">Managed Ops</p>
                    </Link>
                </div>
            </div>

            {/* System Status */}
            <div className="mt-auto p-5 bg-white/[0.02] rounded-xl border border-grid-line">
                <div className="flex items-center gap-2 mb-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">System Status</span>
                </div>
                <p className="text-xs text-silver/50 leading-relaxed font-mono">
                    Network Core: Optimized<br />
                    SLA Uptime: 99.99%<br />
                    Last Sync: 2m ago
                </p>
            </div>
        </aside>
    );
}
