import { PartnersPageContent } from "../schema";

export const partnersContent: PartnersPageContent = {
    hero: {
        sysCode: "PRT_01",
        badge: "Ekosistemimiz",
        title: "Güçlü <span class='text-primary'>İş Ortaklıkları</span>",
        description: "Dünyanın önde gelen teknoloji üreticileriyle stratejik ortaklıklar kurarak, müşterilerimize en güvenilir ve yenilikçi çözümleri sunuyoruz.",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_E52qAgQvVbgDqEq7YXZJpXN7Sg0bDbCx9_Q0ZtY-t3QsgcO_XlcgXwdGzhX9OOFYyX0PDe9L9Z8RjVBWfy2lcqM9Nlo6ysP7037E9T2lXtb3MypX3Y1Y62Gvkyk0E0amF45Q220XnKCCJ7NnRo49X-EueGZqK6YmnReu2M9wXy4E0qQ4Z9dD2fe2gLzJweFc7GZ9FkXnZGEKtyW7uP9KkyQ30L7__06t9X7R3q1F5G8Xy7A4Bw2C9k5E2L0J1Z4X8Q"
    },
    items: [
        {
            id: "01",
            name: "HEWLETT PACKARD",
            tier: "PLATINUM_DIRECT",
            level: "TIER_1",
            core: "HYBRID_INFRA",
            category: "INFRASTRUCTURE",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqY5djykPAAXyVKoIdizWJm3PEiEiiTkYIfk7tmrLwZFgXK6jttNgRZZE31nei3ZGAge2-6V1SNP3dhFm033ukJbXzmzPDSRJRtErKXxGcvjtG9nG0PrVyRWoFtwuFp1pSwVh77Mc0-RBnAjcluuHcI9he0beqPd8Bse1Nrbr7D_0m18wx5OCqLSf_Ejr8RqE_lqQAeVdYrL_K1SYjhrBupLPOsCnhp3067PrcDNUmdoIzuTlKUCz5ab_JicF32Rx45RIwWio1EMsM",
            specs: [
                { icon: "Activity", label: "Server Infrastructure" },
                { icon: "Cpu", label: "HPC Clusters" },
                { icon: "Database", label: "Storage Solutions" }
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
                { icon: "Server", label: "Enterprise Switching" },
                { icon: "Shield", label: "Network Security" },
                { icon: "Cloud", label: "SDN Controllers" }
            ],
            modId: "CS_SPEC_412"
        },
        {
            id: "03",
            name: "FORTINET",
            tier: "EXPERT_PARTNER",
            level: "",
            core: "SEC_OVERLAY",
            category: "SECURITY_LAYER",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbfrlXURn-hiS3ENRortVls2xbFD_Rg3f5XCtTHAkKVPM3gFRqzKRGGGO0KZ5GBF4fowtniaxLolc7oKXg1R3WxJp-d49MG_r06jlsyIWhzNK1e7x0DI-FlvX58vIPRNQ4GiIlvFUHruc7s4VVEQ2ts-YPiErpbFPneA5UEydEM4rSgSCcxmgCP22Scj7aHE4v1joJFvZKQwbWLWEUU_1_BnU9mehnMNz54bOFGljBsKTm6tDZnueEmyn-ndOQJa0aT25FZ5fCRyzA",
            specs: [
                { icon: "Shield", label: "Network Security" },
                { icon: "Cloud", label: "Cloud Firewall" },
                { icon: "Shield", label: "Zero Trust Access" }
            ],
            modId: "FT_SPEC_001"
        }
    ]
};
