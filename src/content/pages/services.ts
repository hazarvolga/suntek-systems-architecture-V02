import { ServicesPageContent } from "../schema";

export const servicesContent: ServicesPageContent = {
    hero: {
        sysCode: "SYS_SRV",
        badge: "Service Catalog",
        title: "SERVICES",
        description: "We build the corporate infrastructure of the future today with Suntek Technical Service Archive and modern System Architecture solutions.",
        primaryCta: {
            label: "Request Technical Spec",
            href: "/contact",
            variant: "outline"
        }
    },
    items: [
        {
            id: "digital-transformation",
            title: "Digital Transformation",
            description: "Modernizing legacy systems with cloud-native architectures.",
            features: [
                "Cloud Migration Strategy",
                "Legacy System Modernization",
                "Process Automation",
                "Data Analytics Integration"
            ],
            capabilities: [
                { label: "Efficiency Increase", value: "40%" },
                { label: "Cost Reduction", value: "25%" }
            ]
        },
        {
            id: "technology-consulting",
            title: "Technology Consulting",
            description: "Strategic guidance for complex technical decision making.",
            features: [
                "Technical Roadmap Design",
                "Vendor Selection & Management",
                "Architecture Review",
                "IT Governance"
            ],
            capabilities: [
                { label: "Strategic Plans", value: "50+" },
                { label: "Clients Served", value: "200+" }
            ]
        },
        {
            id: "network-security",
            title: "Network Security",
            description: "Fortifying infrastructure against modern cyber threats.",
            features: [
                "Zero Trust Architecture",
                "Penetration Testing",
                "Incident Response Planning",
                "24/7 Security Monitoring"
            ],
            capabilities: [
                { label: "Threats Blocked", value: "99.9%" },
                { label: "Uptime Guaranteed", value: "99.99%" }
            ]
        },
        {
            id: "disaster-recovery",
            title: "Disaster Recovery",
            description: "Ensuring business continuity in the face of unforeseen events.",
            features: [
                "Backup Strategy Design",
                "Recovery Simulation",
                "Business Continuity Planning",
                "Data Replication"
            ],
            capabilities: [
                { label: "RTO", value: "< 15 min" },
                { label: "RPO", value: "< 5 min" }
            ]
        },
        {
            id: "integrated-security",
            title: "Integrated Security",
            description: "Converging physical and digital security systems.",
            features: [
                "Access Control Systems",
                "Video Surveillance Analytics",
                "Biometric Integration",
                "Unified Command Center"
            ],
            capabilities: [
                { label: "Systems Integrated", value: "100+" },
                { label: "Sites Secured", value: "50+" }
            ]
        },
        {
            id: "infrastructure",
            title: "Infrastructure Services",
            description: "Building the backbone of modern enterprise operations.",
            features: [
                "Data Center Design",
                "Structured Cabling",
                "Power Management",
                "Cooling Systems"
            ],
            capabilities: [
                { label: "Projects Delivered", value: "500+" },
                { label: "Total Capacity", value: "50MW+" }
            ]
        }
    ]
};
