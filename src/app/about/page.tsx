import Link from "next/link";

export const metadata = {
    title: "Suntek | About Us",
    description: "20 Years of Corporate Memory and Industrial Stability.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Page-Specific Grid Overlay (Optional overlay on top of global grid) */}
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

            {/* Hero Section */}
            <section className="max-w-5xl mx-auto px-6 mb-32 relative z-10">
                <div className="flex flex-col items-start gap-8">
                    <div className="flex items-center gap-4">
                        <span className="w-12 h-px bg-primary"></span>
                        <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
                            Archive Records: 2004 - 2024
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-off-white">
                        Technical Precision and <br />
                        <span className="text-silver/60">Industrial Stability.</span>
                    </h1>
                    <p className="text-lg text-silver/80 max-w-2xl leading-relaxed font-light">
                        The Suntek corporate archive is a digital inventory of over two decades of technological excellence. Each milestone represents an infrastructure standard built with engineering discipline.
                    </p>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="max-w-5xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 border border-grid-line divide-y md:divide-y-0 md:divide-x divide-grid-line bg-black/20 backdrop-blur-sm">
                    <div className="p-10 flex flex-col gap-3 group hover:bg-white/5 transition-colors">
                        <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                            Continuity
                        </span>
                        <span className="text-4xl font-bold tracking-tighter text-off-white">
                            20<span className="text-primary">+</span> Years
                        </span>
                        <p className="text-xs text-silver/50 uppercase font-mono">Corporate History</p>
                    </div>
                    <div className="p-10 flex flex-col gap-3 group hover:bg-white/5 transition-colors">
                        <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                            Integration
                        </span>
                        <span className="text-4xl font-bold tracking-tighter text-off-white">
                            500<span className="text-primary">+</span> Units
                        </span>
                        <p className="text-xs text-silver/50 uppercase font-mono">Industrial Projects</p>
                    </div>
                    <div className="p-10 flex flex-col gap-3 group hover:bg-white/5 transition-colors">
                        <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                            Capacity
                        </span>
                        <span className="text-4xl font-bold tracking-tighter text-off-white">
                            150<span className="text-primary">+</span> Resources
                        </span>
                        <p className="text-xs text-silver/50 uppercase font-mono">Certified Engineers</p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="max-w-5xl mx-auto px-6 pb-64 relative z-10">
                {/* Central Axis Line */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-grid-line to-transparent">
                    <div className="sticky top-1/2 w-0.5 h-32 bg-primary shadow-[0_0_15px_rgba(59,130,246,0.6)] -ml-[0.5px]"></div>
                </div>

                <div className="relative space-y-32 md:space-y-64">
                    {/* Milestone 01 - 2004 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between group">
                        <div className="w-full md:w-[42%] text-left md:text-right relative pl-12 md:pl-0">
                            <div
                                className="absolute -top-16 left-12 md:left-auto md:right-0 text-8xl md:text-9xl font-bold leading-none select-none opacity-20 md:opacity-40 transition-opacity group-hover:opacity-60"
                                style={{
                                    WebkitTextStroke: "1px rgba(160, 160, 160, 0.3)",
                                    color: "transparent",
                                }}
                            >
                                2004
                            </div>
                            <h3 className="text-2xl font-bold text-off-white mb-4 tracking-tight relative z-10">
                                Infrastructure Expertise & Foundation
                            </h3>
                            <p className="text-silver font-light leading-relaxed mb-6">
                                Suntek commenced operations with a focus on critical data center infrastructures and network engineering. Established standards with the first large-scale public infrastructure project in the sector.
                            </p>
                            <div className="flex flex-col gap-2 items-start md:items-end">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                                        Parameter:
                                    </span>
                                    <span className="text-[10px] text-silver/60 uppercase font-bold tracking-widest">
                                        Network Architecture
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                                        Result:
                                    </span>
                                    <span className="text-[10px] text-silver/60 uppercase font-bold tracking-widest">
                                        Regional Leadership
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Node */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 w-3 h-3 bg-off-white rounded-full ring-4 ring-black shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>

                        {/* Number */}
                        <div className="w-full md:w-[42%] hidden md:block pl-12">
                            <span className="text-grid-line font-bold text-6xl tracking-tighter opacity-50 group-hover:text-primary/20 transition-colors">
                                01
                            </span>
                        </div>
                    </div>

                    {/* Milestone 02 - 2012 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between group">
                        <div className="w-full md:w-[42%] hidden md:block text-right pr-12">
                            <span className="text-grid-line font-bold text-6xl tracking-tighter opacity-50 group-hover:text-primary/20 transition-colors">
                                02
                            </span>
                        </div>

                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 w-3 h-3 bg-off-white rounded-full ring-4 ring-black shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>

                        <div className="w-full md:w-[42%] relative pl-12">
                            <div
                                className="absolute -top-16 left-12 text-8xl md:text-9xl font-bold leading-none select-none opacity-20 md:opacity-40 transition-opacity group-hover:opacity-60"
                                style={{
                                    WebkitTextStroke: "1px rgba(160, 160, 160, 0.3)",
                                    color: "transparent",
                                }}
                            >
                                2012
                            </div>
                            <h3 className="text-2xl font-bold text-off-white mb-4 tracking-tight relative z-10">
                                Managed Security Era
                            </h3>
                            <p className="text-silver font-light leading-relaxed mb-6">
                                With the evolution of cyber threats, Suntek established a 24/7 Security Operations Center (SOC), making a vertical transition into managed security services.
                            </p>
                            <div className="flex flex-col gap-2 items-start">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                                        Focus:
                                    </span>
                                    <span className="text-[10px] text-silver/60 uppercase font-bold tracking-widest">
                                        SOC Operations
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                                        Impact:
                                    </span>
                                    <span className="text-[10px] text-silver/60 uppercase font-bold tracking-widest">
                                        100+ Enterprise Clients
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Milestone 03 - 2018 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between group">
                        <div className="w-full md:w-[42%] text-left md:text-right relative pl-12 md:pl-0">
                            <div
                                className="absolute -top-16 left-12 md:left-auto md:right-0 text-8xl md:text-9xl font-bold leading-none select-none opacity-20 md:opacity-40 transition-opacity group-hover:opacity-60"
                                style={{
                                    WebkitTextStroke: "1px rgba(160, 160, 160, 0.3)",
                                    color: "transparent",
                                }}
                            >
                                2018
                            </div>
                            <h3 className="text-2xl font-bold text-off-white mb-4 tracking-tight relative z-10">
                                Industry 4.0 Integration
                            </h3>
                            <p className="text-silver font-light leading-relaxed mb-6">
                                We implemented the first large-scale Industry 4.0 project merging manufacturing technologies with the IT world. Operational efficiency was maximized through IoT data analytics.
                            </p>
                            <div className="flex flex-col gap-2 items-start md:items-end">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                                        Field:
                                    </span>
                                    <span className="text-[10px] text-silver/60 uppercase font-bold tracking-widest">
                                        IoT & Data Analytics
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                                        Gain:
                                    </span>
                                    <span className="text-[10px] text-silver/60 uppercase font-bold tracking-widest">
                                        +40% Efficiency
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 w-3 h-3 bg-off-white rounded-full ring-4 ring-black shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                        <div className="w-full md:w-[42%] hidden md:block pl-12">
                            <span className="text-grid-line font-bold text-6xl tracking-tighter opacity-50 group-hover:text-primary/20 transition-colors">
                                03
                            </span>
                        </div>
                    </div>

                    {/* Milestone 04 - 2024 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between group">
                        <div className="w-full md:w-[42%] hidden md:block text-right pr-12">
                            <span className="text-grid-line font-bold text-6xl tracking-tighter opacity-50 group-hover:text-primary/20 transition-colors">
                                04
                            </span>
                        </div>
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 w-3 h-3 bg-off-white rounded-full ring-4 ring-black shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                        <div className="w-full md:w-[42%] relative pl-12">
                            <div
                                className="absolute -top-16 left-12 text-8xl md:text-9xl font-bold leading-none select-none opacity-20 md:opacity-40 transition-opacity group-hover:opacity-60"
                                style={{
                                    WebkitTextStroke: "1px rgba(160, 160, 160, 0.3)",
                                    color: "transparent",
                                }}
                            >
                                2024
                            </div>
                            <h3 className="text-2xl font-bold text-off-white mb-4 tracking-tight relative z-10">
                                AI & Global Compliance
                            </h3>
                            <p className="text-silver font-light leading-relaxed mb-6">
                                Global certification processes in cloud security and AI-powered defense systems were completed. Entered a new era focused on technology export.
                            </p>
                            <div className="flex flex-col gap-2 items-start">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                                        Modernize:
                                    </span>
                                    <span className="text-[10px] text-silver/60 uppercase font-bold tracking-widest">
                                        AI Defenses
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                                        Standard:
                                    </span>
                                    <span className="text-[10px] text-silver/60 uppercase font-bold tracking-widest">
                                        Global Compliance
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-5xl mx-auto px-6 pb-20 relative z-10">
                <div className="bg-gradient-to-br from-white/5 to-transparent border border-grid-line p-12 md:p-20 text-center relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-6">
                        The Future is Worth Archiving.
                    </h2>
                    <p className="text-silver max-w-xl mx-auto mb-10 font-light text-sm md:text-base">
                        We leverage two decades of experience to overcome tomorrow's technical challenges. Securely migrate your systems to the archive of the future.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <Link
                            href="/services"
                            className="bg-off-white text-black text-[11px] font-bold uppercase tracking-[0.2em] px-10 py-4 hover:bg-primary hover:text-white transition-all"
                        >
                            Technical Solutions
                        </Link>
                        <Link
                            href="/projects"
                            className="border border-white/20 text-off-white text-[11px] font-bold uppercase tracking-[0.2em] px-10 py-4 hover:bg-white/10 transition-all hover:border-white/40"
                        >
                            Archive Details
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
