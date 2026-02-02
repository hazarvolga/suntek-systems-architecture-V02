import { SolutionsPageContent } from "../schema";

export const solutionsContent: SolutionsPageContent = {
    hero: {
        sysCode: "SYS_SOL",
        badge: "Technical Solutions",
        title: "Integrated Systems",
        description: "End-to-end technical architectures designed for resilience, scalability, and security."
    },
    items: [
        {
            id: "infrastructure",
            title: "Infrastructure & Connectivity",
            description: "The backbone of modern enterprise. We design and deploy high-availability network fabrics.",
            features: [
                "Fiber Optic Backbone Design",
                "Data Center Structured Cabling",
                "Wireless Mesh Networks (Wi-Fi 6/7)",
                "5G Private Networks"
            ],
            capabilities: [
                { label: "Throughput", value: "100 Gbps" },
                { label: "Latency", value: "< 1ms" }
            ]
        },
        {
            id: "security",
            title: "Cyber Security & IAM",
            description: "Zero-trust security frameworks integrated directly into the physical infrastructure layer.",
            features: [
                "Identity & Access Management (IAM)",
                "Biometric Access Control",
                "Perimeter Intrusion Detection",
                "Video Surveillance Analytics (AI)"
            ],
            capabilities: [
                { label: "Encryption", value: "AES-256" },
                { label: "Monitoring", value: "24/7 SOC" }
            ]
        },
        {
            id: "automation",
            title: "Building Automation (BMS)",
            description: "Smart building ecosystems that optimize energy efficiency and operational workflows.",
            features: [
                "HVAC Optimization Algorithms",
                "Lighting Control Systems (DALI)",
                "Energy Consumption Analytics",
                "Predictive Maintenance Sensors"
            ],
            capabilities: [
                { label: "Efficiency", value: "+30%" },
                { label: "ROI", value: "18 Months" }
            ]
        }
    ]
};
