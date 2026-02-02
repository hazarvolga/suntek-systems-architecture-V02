import {
    Factory,
    TrendingUp,
    Award,
    Radio,
    Cpu,
    Zap,
    Download
} from "lucide-react";

export default function IndustrySection({ id }: { id: string }) {
    const stats = {
        metric: "< 1ms",
        metricLabel: "M2M Latency",
        metricSub: "Real-time Control",
        standard: "IEC 62443",
        standardLabel: "Industrial Security",
        standardSub: "SCADA Protection",
        redundancy: "Ring/Mesh",
        redundancyLabel: "Failover Topology"
    };

    const schematic = {
        label: "Production Line: Robotic Cell 7",
        title: "Architectural Focus: Deterministic Ethernet",
        description: "TSN (Time Sensitive Networking) implementation ensures guaranteed packet delivery for robotic synchronization, eliminating jitter that could cause production defects.",
        hotspot: "Industrial Edge Switch",
        hotspotDetail: "Ruggedized IP67 | TSN Enabled | -40°C to 75°C Ops"
    };

    const inventory = [
        {
            title: "Ruggedized IoT Gateway",
            code: "ST-IND-GW",
            icon: Radio,
            specs: [
                "Multi-protocol (Modbus/Profinet/OPC UA)",
                "Edge analytics for predictive maintenance",
                "Cellular 5G Backhaul failover"
            ]
        },
        {
            title: "Digital Twin Server",
            code: "ST-DT-SIM",
            icon: Cpu,
            specs: [
                "Massive parallel processing for simulation",
                "Real-time sensor data ingestion",
                "Predictive anomaly detection models"
            ]
        },
        {
            title: "Safety PLC Interface",
            code: "ST-SAFE-IO",
            icon: Zap,
            specs: [
                "SIL 3 certified inputs/outputs",
                "Hw-based emergency stop logic",
                "Isolated control power supply"
            ]
        }
    ];

    return (
        <section id={id} className="scroll-mt-24 py-16 border-b border-grid-line/50">
            <div className="flex items-center gap-4 mb-8">
                <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">SEC_03</span>
                <div className="flex items-center gap-2">
                    <Factory className="size-5 text-primary" />
                    <h2 className="text-3xl lg:text-4xl font-bold text-off-white tracking-tight">Industry 4.0</h2>
                </div>
            </div>

            {/* Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="flex flex-col gap-2 rounded-xl p-8 border border-grid-line bg-white/[0.02]">
                    <p className="text-silver/40 text-xs font-bold uppercase tracking-widest">{stats.metricLabel}</p>
                    <p className="text-off-white text-4xl font-bold leading-tight font-mono">{stats.metric}</p>
                    <p className="text-emerald-500 text-xs font-bold flex items-center gap-1 mt-2">
                        <TrendingUp className="size-3" /> {stats.metricSub}
                    </p>
                </div>
                <div className="flex flex-col gap-2 rounded-xl p-8 border border-grid-line bg-white/[0.02]">
                    <p className="text-silver/40 text-xs font-bold uppercase tracking-widest">{stats.standardLabel}</p>
                    <p className="text-off-white text-4xl font-bold leading-tight font-mono">{stats.standard}</p>
                    <p className="text-silver/60 text-xs font-bold mt-2">{stats.standardSub}</p>
                </div>
                <div className="flex flex-col gap-2 rounded-xl p-8 border border-grid-line bg-white/[0.02]">
                    <p className="text-silver/40 text-xs font-bold uppercase tracking-widest">{stats.redundancyLabel}</p>
                    <p className="text-off-white text-4xl font-bold leading-tight font-mono">{stats.redundancy}</p>
                    <p className="text-primary text-xs font-bold flex items-center gap-1 mt-2">
                        <Award className="size-3" /> Certified Infrastructure
                    </p>
                </div>
            </div>

            {/* Technical Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left: Schematic */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="relative bg-black border border-grid-line rounded-xl overflow-hidden min-h-[500px] flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                        <div className="absolute top-6 left-6 z-10">
                            <span className="bg-primary/20 text-primary border border-primary/30 text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider backdrop-blur-md">
                                {schematic.label}
                            </span>
                        </div>
                        <div className="w-full h-full p-12 flex items-center justify-center relative">
                            <img
                                alt="Technical blueprint"
                                className="w-full h-auto opacity-70 mix-blend-screen grayscale contrast-125 invert"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk1rq8uc8byGpGMW9D2djje1_xHxv2PJqhqN9EbE21uB4OyZLA60agquc_UzBcfNyhKBOOki_leIUAjY9bYaenL4NTDIEpsbXMRCUKK0fUFa3DlsFXZHVUe3wmlxrpD1Hsxb5ZBa436zyQEQ1EU0Wczhd1yNEUE9UrhPZqTqrtFfqgsDwTkCMCR_ACsa-SWNn5cbFlXLKbcWDw6IkOmMD5pcYKKwyHvY6k7SaFp_qvxGhfHREiAd9TOp942mX7_qh6yRL_KLcW2McG"
                            />
                            <div className="absolute top-1/3 left-1/3 group cursor-pointer">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                                    <div className="size-3 bg-primary rounded-full relative z-10 box-shadow-[0_0_10px_#3b82f6]"></div>
                                </div>
                                <div className="hidden group-hover:block absolute top-6 left-0 bg-black/90 border border-grid-line p-4 rounded w-56 z-20 backdrop-blur-xl">
                                    <p className="text-xs font-bold text-off-white mb-1">{schematic.hotspot}</p>
                                    <p className="text-[10px] text-silver/60 font-mono">{schematic.hotspotDetail}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border-l-4 border-primary bg-primary/5 rounded-r-xl">
                        <h3 className="text-off-white font-bold mb-2 text-sm tracking-wide">{schematic.title}</h3>
                        <p className="text-xs text-silver/70 leading-relaxed">
                            {schematic.description}
                        </p>
                    </div>
                </div>

                {/* Right: Inventory */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <h2 className="text-off-white text-2xl font-bold leading-tight font-mono tracking-tight border-b border-grid-line pb-4">
                        Industrial System Inventory
                    </h2>
                    <div className="flex flex-col gap-4">
                        {inventory.map((item, index) => (
                            <div key={index} className="border border-grid-line bg-white/[0.02] rounded-xl p-6 hover:border-primary/50 transition-colors group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/5 rounded-lg text-primary">
                                            <item.icon className="size-5" />
                                        </div>
                                        <h4 className="text-off-white font-bold text-sm">{item.title}</h4>
                                    </div>
                                    <span className="text-[9px] bg-white/5 px-2 py-1 rounded text-silver/40 font-mono border border-white/5">{item.code}</span>
                                </div>
                                <ul className="text-xs text-silver/60 space-y-2 font-mono">
                                    {item.specs.map((spec, i) => (
                                        <li key={i} className="flex items-center gap-2"><span className="size-1.5 bg-primary rounded-full"></span> {spec}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 border border-grid-line text-silver hover:text-off-white hover:bg-white/5 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-widest">
                        <Download className="size-4" />
                        Download Architecture PDF
                    </button>
                </div>
            </div>
        </section>
    );
}
