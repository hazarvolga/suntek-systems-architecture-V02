import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { RefreshCw, CheckCircle } from "lucide-react";

export default function DisasterRecoveryPage() {
    return (
        <div className="pt-12 pb-24">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

                <div className="border-b border-grid-line relative z-10 bg-matte-slate/50 backdrop-blur-sm mb-12 pb-8">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Services', href: '/services' },
                        { label: 'Disaster Recovery' }
                    ]} />

                    <div className="flex items-start justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">SRV_04</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-off-white mb-6 tracking-tight">
                                Disaster Recovery & Backup
                            </h1>
                            <p className="text-silver text-lg font-light max-w-2xl leading-relaxed">
                                Ensuring business continuity through immutable backup strategies, geographically redundant failover, and rapid RTO/RPO execution.
                            </p>
                        </div>
                        <RefreshCw className="hidden lg:block size-24 text-primary/20 stroke-1" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h3 className="text-off-white text-xl font-bold mb-6 font-mono">Core Capabilities</h3>
                            <ul className="grid gap-4">
                                {[
                                    "Immutable Backup Solutions (Ransomware Proof)",
                                    "Site-to-Site Replication",
                                    "Automated Failover Orchestration",
                                    "Business Continuity Planning (BCP)",
                                    "Cloud Archiving & Cold Storage"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 p-4 border border-grid-line rounded-lg bg-white/[0.02]">
                                        <CheckCircle className="size-5 text-primary" />
                                        <span className="text-silver text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-8 border border-primary/30 bg-primary/5 rounded-xl">
                            <h4 className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Resilience</h4>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-3xl font-bold text-off-white font-mono">15m</p>
                                    <p className="text-xs text-silver/60">Target RTO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
