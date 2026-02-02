import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Lightbulb, CheckCircle } from "lucide-react";

export default function TechnologyConsultingPage() {
    return (
        <div className="pt-12 pb-24">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

                <div className="border-b border-grid-line relative z-10 bg-matte-slate/50 backdrop-blur-sm mb-12 pb-8">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Services', href: '/services' },
                        { label: 'Technology Consulting' }
                    ]} />

                    <div className="flex items-start justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">SRV_02</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-off-white mb-6 tracking-tight">
                                Technology Consulting Services
                            </h1>
                            <p className="text-silver text-lg font-light max-w-2xl leading-relaxed">
                                Strategic IT roadmap development, compliance alignment, and architectural validation for enterprise-grade scalability.
                            </p>
                        </div>
                        <Lightbulb className="hidden lg:block size-24 text-primary/20 stroke-1" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h3 className="text-off-white text-xl font-bold mb-6 font-mono">Core Capabilities</h3>
                            <ul className="grid gap-4">
                                {[
                                    "IT Strategy & Roadmap Design",
                                    "ISO 27001 / GDPR Compliance Audits",
                                    "Legacy System Modernization Plans",
                                    "Vendor Selection & Management",
                                    "Cloud Migration Strategy"
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
                            <h4 className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Impact</h4>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-3xl font-bold text-off-white font-mono">100%</p>
                                    <p className="text-xs text-silver/60">Compliance Success Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
