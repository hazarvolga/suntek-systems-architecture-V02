import { SectorsPageContent } from "../schema";

export const sectorsContent: SectorsPageContent = {
    hero: {
        sysCode: "SYS_VERT",
        badge: "Vertical Expertise",
        title: "Sectoral Infrastructure",
        description: "Precision engineering solutions for critical mission environments. We define infrastructure not by marketing promises, but by accessibility, security, and scalability."
    },
    items: [
        {
            id: "healthcare",
            title: "Healthcare",
            description: "Mission-critical infrastructure for 24/7 patient care environments.",
            features: [
                "HIPAA Compliant Networks",
                "Operating Room Power Redundancy",
                "Telemedicine Latency Optimization",
                "Biomedical Device IoT Security"
            ],
            stats: [
                { label: "Uptime", value: "99.999%" },
                { label: "Hospitals", value: "40+" }
            ]
        },
        {
            id: "education",
            title: "Education",
            description: "Scalable campus networks empowering the next generation of learning.",
            features: [
                "Campus-Wide Wi-Fi 6E",
                "Digital Library Archives",
                "Smart Classroom AV",
                "Student Data Privacy (FERPA)"
            ],
            stats: [
                { label: "Students Connected", value: "500k+" },
                { label: "Campuses", value: "12" }
            ]
        },
        {
            id: "industry",
            title: "Industrial & Manufacturing",
            description: "Ruggedized connectivity for Industry 4.0 automation queues.",
            features: [
                "Low-Latency M2M Communication",
                "EMI Shielded Cabling",
                "SCADA Security",
                "Warehouse Robotics Mesh"
            ],
            stats: [
                { label: "Factories", value: "25" },
                { label: "Efficiency Gain", value: "35%" }
            ]
        }
    ]
};
