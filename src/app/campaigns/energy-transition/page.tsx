import Link from "next/link";
import { ArrowLeft, Zap, CheckCircle2, Timer } from "lucide-react";

export const metadata = {
    title: "Suntek | Energy Transition Campaign",
    description: "Limited time offer: 20% discount on next-generation energy systems.",
};

export default function EnergyTransitionCampaign() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-matte-slate">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">

                {/* Back Link */}
                <Link href="/contact" className="inline-flex items-center gap-2 text-silver/60 hover:text-primary mb-12 transition-colors text-sm font-mono uppercase tracking-widest">
                    <ArrowLeft className="size-4" />
                    Back to Contact
                </Link>

                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-primary/20 text-primary border border-primary/50 text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest">
                            Limited Time Offer
                        </span>
                        <span className="text-silver/40 text-[10px] font-mono tracking-widest uppercase">
                            Valid until Dec 31, 2026
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold text-off-white mb-6 leading-tight">
                        Accelerate Your <span className="text-primary">Energy Transition</span>
                    </h1>
                    <p className="text-xl text-silver font-light leading-relaxed">
                        Upgrade your corporate infrastructure with our next-generation energy efficiency systems and receive an exclusive <span className="text-white font-bold">20% discount</span> on implementation costs.
                    </p>
                </div>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-white/[0.02] border border-grid-line p-8 rounded-xl">
                        <Zap className="text-primary size-8 mb-4" />
                        <h3 className="text-off-white font-bold text-lg mb-2">Power Efficiency</h3>
                        <p className="text-silver/60 text-sm leading-relaxed">Reduce operational energy consumption by up to 40% with AI-driven load balancing.</p>
                    </div>
                    <div className="bg-white/[0.02] border border-grid-line p-8 rounded-xl">
                        <Timer className="text-primary size-8 mb-4" />
                        <h3 className="text-off-white font-bold text-lg mb-2">Rapid ROI</h3>
                        <p className="text-silver/60 text-sm leading-relaxed">Achieve return on investment in under 18 months with our optimized deployment strategy.</p>
                    </div>
                </div>

                {/* Eligibility & Form */}
                <div className="bg-[#0a0e14] border border-primary/30 p-8 lg:p-12 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>

                    <h2 className="text-2xl font-bold text-off-white mb-8 relative z-10">Claim Your Discount</h2>
                    <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 size-5 shrink-0 mt-0.5" />
                            <p className="text-silver/80 text-sm">Valid for new corporate infrastructure projects over $50k.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 size-5 shrink-0 mt-0.5" />
                            <p className="text-silver/80 text-sm">Includes free initial site audit and technical assessment.</p>
                        </div>
                    </div>

                    <form className="flex flex-col gap-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Company Name" className="bg-white/5 border border-white/10 p-4 text-off-white text-sm rounded focus:border-primary focus:outline-none transition-colors" />
                            <input type="email" placeholder="Work Email" className="bg-white/5 border border-white/10 p-4 text-off-white text-sm rounded focus:border-primary focus:outline-none transition-colors" />
                        </div>
                        <button type="button" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded text-sm uppercase tracking-widest transition-all">
                            Request Consultation
                        </button>
                        <p className="text-xs text-silver/40 text-center">
                            By submitting this form, you agree to our Terms of Service.
                        </p>
                    </form>
                </div>

            </div>
        </main>
    );
}
