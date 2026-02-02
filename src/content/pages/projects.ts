import { ProjectsPageContent } from "../schema";

export const projectsContent: ProjectsPageContent = {
    hero: {
        sysCode: "SYS_ARCHIVE",
        badge: "System Archive",
        title: "References: System Archive",
        description: "High-density technical repository documenting engineering achievements, architectural implementations, and industrial records. Sorted by system precision."
    },
    items: [
        {
            id: "SUN-2023-AF",
            title: "Financial Core Migration: Legacy Modernization",
            description: "Full-scale migration of a Tier-1 banking provider's monolithic architecture to a cloud-native microservices environment. The project required continuous real-time transaction systems within a 48-hour transition window.",
            outcome: "Achieved 40% increase in transaction volume and 120ms reduction in API latency. System availability increased to 99.999% with circuit breakers and automated failover.",
            year: "2023",
            stack: "Kubernetes, Java, Spring Boot, Kafka, PostgreSQL",
            sector: "Finance / FinTech",
            category: "CLOUD_INFRA"
        },
        {
            id: "SUN-2022-EM",
            title: "IoT Edge Mesh Implementation",
            description: "Robust edge mesh setup for real-time sensor data in a multi-facility manufacturing environment. Overcame data synchronization challenges over low-bandwidth satellite links and signal interference in high electromagnetic interference (EMI) zones.",
            outcome: "Successful hardware-level encryption and sub-10ms local processing integration. Developed a custom data prioritization protocol reducing bandwidth consumption by 65% while ensuring critical alarm delivery.",
            year: "2022",
            stack: "C++, MQTT, ARM Architecture, Rust, LoRaWAN",
            sector: "Manufacturing / Industry 4.0",
            category: "EMBEDDED"
        },
        {
            id: "SUN-2022-SA",
            title: "Infrastructure Security Hardening",
            description: "Comprehensive audit and Zero-Trust architecture revision for a national logistics provider. Scope included securing 14 geographically distributed data centers and strengthening edge-to-cloud communication against complex threats.",
            outcome: "Implemented NIST-compliant IAM protocols and automated vulnerability scanning. Patched 200+ high-severity vulnerabilities and established a real-time SOC dashboard with AI-backed anomaly detection.",
            year: "2022",
            stack: "Terraform, Vault, SentinelOne, Cisco Secure, AWS",
            sector: "Logistics / Infrastructure",
            category: "CYBER_SEC"
        },
        {
            id: "SUN-2021-TC",
            title: "High-Availability Telecom Core",
            description: "5G-ready core network architecture and deployment for a regional telecom operator. Requirements included supporting millions of concurrent sessions and low jitter for VoIP/real-time gaming traffic.",
            outcome: "Delivered a containerized core using SR-IOV for high-performance networking. Performance verified with zero packet loss at 300% peak load simulation. Automated elastic scaling based on regional traffic demand.",
            year: "2021",
            stack: "OpenStack, Docker, Go, Redis, Prometheus",
            sector: "Telecommunications",
            category: "CLOUD_INFRA"
        }
    ]
};
