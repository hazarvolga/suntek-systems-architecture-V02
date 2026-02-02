```typescript
import { ServicesPageContent } from "../schema";

export const servicesContent: ServicesPageContent = {
    hero: {
        sysCode: "SRV_01",
        badge: "Kurumsal Hizmetler",
        title: "Uçtan Uca <span class='text-primary'>Bilişim Çözümleri</span>",
        description: "Ağ güvenliğinden bulut yedeğine, felaket kurtarmadan endüstriyel altyapı kurulumuna kadar işletmenizin tüm teknolojik ihtiyaçlarını karşılıyoruz.",
        primaryCta: {
            label: "Hizmetlerimiz",
            href: "#services-list",
            variant: "primary"
        },
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_E52qAgQvVbgDqEq7YXZJpXN7Sg0bDbCx9_Q0ZtY-t3QsgcO_XlcgXwdGzhX9OOFYyX0PDe9L9Z8RjVBWfy2lcqM9Nlo6ysP7037E9T2lXtb3MypX3Y1Y62Gvkyk0E0amF45Q220XnKCCJ7NnRo49X-EueGZqK6YmnReu2M9wXy4E0qQ4Z9dD2fe2gLzJweFc7GZ9FkXnZGEKtyW7uP9KkyQ30L7__06t9X7R3q1F5G8Xy7A4Bw2C9k5E2L0J1Z4X8Q"
    },
    items: [
        {
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
