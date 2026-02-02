import { Download } from "lucide-react";
import PartnersGrid from "@/components/partners/PartnersGrid";

export const metadata = {
    title: "Suntek | Partners",
    description: "Strategic partnerships with global technology giants and technical ecosystem.",
};

export default function PartnersPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-matte-slate">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

                {/* Header Section */}
                <div className="flex flex-col gap-6 mb-20 relative">
                    {/* Decorative Pulse Line */}
                    <div className="absolute -left-10 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 hidden xl:block"></div>

                    <div className="flex items-center gap-4">
                        <div className="h-px w-12 bg-primary"></div>
                        <span className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.4em]">Node Registry // v4.0.0-DL</span>
                    </div>

                    <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-off-white uppercase">
                        Partner<br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Ecosystem</span>
                    </h1>

                    <div className="mt-8 max-w-2xl flex gap-6 items-start">
                        <div className="w-1 h-24 bg-gradient-to-b from-primary to-transparent opacity-50"></div>
                        <p className="text-silver/60 text-lg font-mono font-light leading-relaxed">
                            &gt; Initializing modular interface...<br />
                            &gt; Loading partner telemetry...<br />
                            &gt; System ready for hardware specification browsing.
                        </p>
                    </div>
                </div>

                {/* Client-Side Filtering Grid */}
                <PartnersGrid />

                {/* Registry Table Section */}
                <div className="mt-32 pb-12 border border-grid-line bg-[#0a0e14]">
                    <div className="bg-white/[0.03] px-8 py-5 flex items-center justify-between border-b border-grid-line">
                        <div className="flex items-center gap-3">
                            <span className="size-2 bg-primary rounded-full"></span>
                            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-off-white">Full Registry Index</h2>
                        </div>
                        <button className="text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 group hover:text-white transition-colors">
                            <span className="group-hover:translate-x-1 transition-transform">Download System Spec</span>
                            <Download className="size-4" />
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left font-mono">
                            <thead className="bg-white/[0.01] border-b border-grid-line">
                                <tr>
                                    <th className="px-8 py-4 text-[9px] font-bold uppercase text-silver/30 tracking-widest">Node ID</th>
                                    <th className="px-8 py-4 text-[9px] font-bold uppercase text-silver/30 tracking-widest">Provider</th>
                                    <th className="px-8 py-4 text-[9px] font-bold uppercase text-silver/30 tracking-widest">Security Clearance</th>
                                    <th className="px-8 py-4 text-[9px] font-bold uppercase text-silver/30 tracking-widest">Uptime Sync</th>
                                    <th className="px-8 py-4 text-[9px] font-bold uppercase text-silver/30 tracking-widest">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-grid-line">
                                {[1, 2, 3].map((_, i) => (
                                    <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-8 py-5 text-[11px] text-primary">S-REG-00{i + 1}</td>
                                        <td className="px-8 py-5 text-[11px] text-off-white">PROVIDER_SYSTEM_{i + 1}_ENT.</td>
                                        <td className="px-8 py-5 text-[10px] text-silver/40 font-bold">L3_DIRECT_ACCESS</td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-bold">
                                                <span className="size-1.5 bg-emerald-500 rounded-full"></span> 100%_STABLE
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-[10px] font-bold text-primary cursor-pointer uppercase opacity-0 group-hover:opacity-100 transition-opacity">Fetch_Metadata</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </main>
    );
}
