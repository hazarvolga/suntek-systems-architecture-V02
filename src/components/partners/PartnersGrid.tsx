"use client";

import { useState } from "react";
import {
    Activity,
    Server,
    Shield,
    Cloud,
    Cpu,
    Database,
    ExternalLink
} from "lucide-react";

const partners = [
    {
        id: "01",
        name: "HEWLETT PACKARD",
        tier: "PLATINUM_DIRECT",
        level: "TIER_1",
        core: "HYBRID_INFRA",
        category: "INFRASTRUCTURE",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqY5djykPAAXyVKoIdizWJm3PEiEiiTkYIfk7tmrLwZFgXK6jttNgRZZE31nei3ZGAge2-6V1SNP3dhFm033ukJbXzmzPDSRJRtErKXxGcvjtG9nG0PrVyRWoFtwuFp1pSwVh77Mc0-RBnAjcluuHcI9he0beqPd8Bse1Nrbr7D_0m18wx5OCqLSf_Ejr8RqE_lqQAeVdYrL_K1SYjhrBupLPOsCnhp3067PrcDNUmdoIzuTlKUCz5ab_JicF32Rx45RIwWio1EMsM",
        specs: [
            { icon: Activity, label: "Server Infrastructure" },
            { icon: Cpu, label: "HPC Clusters" },
            { icon: Database, label: "Storage Solutions" }
        ],
        modId: "HP_SPEC_880"
    },
    {
        id: "02",
        name: "CISCO SYSTEMS",
        tier: "GOLD_INTEGRATOR",
        level: "",
        core: "NET_FABRIC",
        category: "INFRASTRUCTURE",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqKGsS4Tz98q3AdPecjLj8ER-11WN3r8Ofq25h4_rWSlZKjzZW21g27E-bgxtKbDvgmQhDB11skbVPgMoRESaswSjKGj21IOgGM4DnZhCZPgmOr35aGuayvI52-XLWg1m9Bov4tTqVCZLrX0OECAVhcLq8MNxV2Z7VCqlwqtpQgR5x1E7nZMMi1JaxyxXklRtOQM96WC5vCZtJ1zBw70yDX-cUy2qLohpPffiV__PP-1f5Ru9GX92LXqCzu07gv2PEnEuxB96cpbCc",
        specs: [
            { icon: Server, label: "Enterprise Switching" },
            { icon: Shield, label: "Network Security" },
            { icon: Cloud, label: "SDN Controllers" }
        ],
        modId: "CS_SPEC_412"
    },
    {
        id: "03",
        name: "DELL TECHNOLOGIES",
        tier: "PLATINUM_DIRECT",
        level: "TIER_1",
        core: "COMPUTE_SCALE",
        category: "INFRASTRUCTURE",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBt2iIJTurXPDtHLGAIDY-72AJWIi43TVthYLfa6E89y4LGTBZ3RJRJvd4Ciib1_tRFiNXmoWwyso9N44Ut2D4_QKWCLnIPdkiuEcRa81wJIOvyhfHB6duWO_Rh-Lwo7J7zWM_ZmFDPURrn03pV29qtj9cLQyZ2tnBgIdEZoXAQrw0MRvx9-ePfcKO_Quksami3tOFzsb73oaZ7uk6bnSulF8tsCx0JNg9Fx-zQ9F6OBbR9p9GZzRuTmSGRNA1cHaaoXYGFztSGbUN9",
        specs: [
            { icon: Cpu, label: "Enterprise Computing" },
            { icon: Database, label: "Data Center Storage" },
            { icon: Server, label: "Virtualization" }
        ],
        modId: "DL_SPEC_909"
    },
    {
        id: "04",
        name: "FORTINET",
        tier: "EXPERT_PARTNER",
        level: "",
        core: "SEC_OVERLAY",
        category: "SECURITY_LAYER",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbfrlXURn-hiS3ENRortVls2xbFD_Rg3f5XCtTHAkKVPM3gFRqzKRGGGO0KZ5GBF4fowtniaxLolc7oKXg1R3WxJp-d49MG_r06jlsyIWhzNK1e7x0DI-FlvX58vIPRNQ4GiIlvFUHruc7s4VVEQ2ts-YPiErpbFPneA5UEydEM4rSgSCcxmgCP22Scj7aHE4v1joJFvZKQwbWLWEUU_1_BnU9mehnMNz54bOFGljBsKTm6tDZnueEmyn-ndOQJa0aT25FZ5fCRyzA",
        specs: [
            { icon: Shield, label: "Network Security" },
            { icon: Cloud, label: "Cloud Firewall" },
            { icon: Shield, label: "Zero Trust Access" }
        ],
        modId: "FT_SPEC_001"
    },
    {
        id: "05",
        name: "MICROSOFT AZURE",
        tier: "CLOUD_SOLUTIONS",
        level: "",
        core: "AZ_HYBRID",
        category: "INFRASTRUCTURE",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiqBVjD1-zjLFSTSNI8NxO2OvDuVnNJI3J3gvc7K61i2zWIDmYonvDks5LbULZCWewSK9vwC-bWjt6EeXv0EMWz0Vm5wbU3RQHNVmsENkyO6q4Cje8XWmwqVaQ6G8S5DUCosL86akXwstw_6mN375ufN_4X2yBvqTXOg6EzntEJLIuaBxcn6RwfnV0SViVVl_DYiUjL2-ZzCGtKMowFRhPitPXH51jDa4WELt6NTJJ12hutPKXnCUlv8V0BCf6Y5vv3B1jB_dfhhRR",
        specs: [
            { icon: Cloud, label: "Hybrid Cloud Infra" },
            { icon: Server, label: "Managed Services" },
            { icon: Cpu, label: "Data & AI" }
        ],
        modId: "MS_SPEC_771"
    },
    {
        id: "06",
        name: "VMWARE",
        tier: "PRINCIPAL_PARTNER",
        level: "",
        core: "VIRT_FABRIC",
        category: "INFRASTRUCTURE",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqLiApxdRXTSsgzjgEEWoLJIamvI4yla9qPiZtBV12wNLlTr96igYXtU47qbGuRWR7pECF4qZC3pikegqrR9sjPfGgnx-WNoLKEtUEjfV4sqFowmDa6tKrRROKfyyYrvRLUGBwTXa0ddSmg9JHLkg065_G4LkdO2IXWQ1scbdl0h3n4TgSxYWd7SbsK706kA0BcLT3tWStrgKWyUvwgZa3ICKuf-gUouFt8MI-DAJR5p6-ZZ8QFzJXzJI_33kXATTXlyiTLluKYl1c",
        specs: [
            { icon: Server, label: "vSphere Management" },
            { icon: Cloud, label: "NSX Virtualization" },
            { icon: Database, label: "Cloud Foundation" }
        ],
        modId: "VM_SPEC_102"
    }
];

export default function PartnersGrid() {
    const [activeFilter, setActiveFilter] = useState("ALL_MODULES");

    const filteredPartners = activeFilter === "ALL_MODULES"
        ? partners
        : partners.filter(p => p.category === activeFilter);

    return (
        <div className="flex flex-col gap-16">
            {/* Control Bar */}
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-xl p-6 flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap gap-4">
                    {["ALL_MODULES", "INFRASTRUCTURE", "SECURITY_LAYER"].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded transition-all ${activeFilter === filter
                                    ? "bg-primary text-white shadow-[0_0_15px_rgba(13,89,242,0.3)]"
                                    : "bg-white/5 border border-white/10 text-silver/50 hover:text-white hover:border-primary/50"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-8">
                    <div className="text-right">
                        <div className="text-silver/40 text-[9px] font-mono uppercase tracking-widest mb-1">Global Status</div>
                        <div className="text-emerald-500 text-[11px] font-bold font-mono tracking-widest flex items-center justify-end gap-2">
                            <span className="size-1.5 bg-emerald-500 rounded-full animate-ping"></span> OPTIMAL
                        </div>
                    </div>
                </div>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPartners.map((partner) => (
                    <div key={partner.id} className="group relative border border-grid-line bg-[#0a0e14] p-10 flex flex-col gap-8 hover:border-primary/50 hover:shadow-[inset_0_0_30px_rgba(13,89,242,0.05)] transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">

                        {/* Header */}
                        <div className="flex justify-between items-start">
                            <div className="h-10 flex items-center relative">
                                {/* Logo */}
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
                                />
                            </div>
                            <span className="text-white/10 font-mono text-3xl font-bold">{partner.id}</span>
                        </div>

                        {/* Content */}
                        <div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="bg-primary/10 border border-primary/40 text-blue-400 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest">
                                    {partner.tier}
                                </span>
                                {partner.level && (
                                    <span className="bg-white/5 border border-white/20 text-silver px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest">
                                        {partner.level}
                                    </span>
                                )}
                            </div>

                            <h3 className="text-off-white text-xl font-bold mb-6 tracking-tight group-hover:text-primary transition-colors">
                                {partner.name}
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-[10px] font-mono text-silver/40 border-b border-white/5 pb-2">
                                    <span>CORE_CAPABILITY</span>
                                    <span className="text-silver/60">{partner.core}</span>
                                </div>
                                <ul className="text-silver/50 text-[11px] font-mono space-y-3 uppercase">
                                    {partner.specs.map((spec, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <spec.icon className="size-3.5 text-primary" />
                                            {spec.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Footer / ID */}
                        <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[9px] font-mono text-silver/30">MODULE_ID: {partner.modId}</span>
                            <ExternalLink className="text-silver/50 size-4 hover:text-off-white cursor-pointer transition-colors" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
