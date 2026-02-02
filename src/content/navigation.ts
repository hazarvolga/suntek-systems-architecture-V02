import { NavigationConfig } from "./schema";

export const navigation: NavigationConfig = {
    header: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "Sectors", href: "/sectors" },
        { label: "Partners", href: "/partners" },
        { label: "Contact", href: "/contact" }
    ],
    footer: {
        columns: [
            {
                title: "Company",
                links: [
                    { label: "About Us", href: "/about" },
                    { label: "Careers", href: "/careers" },
                    { label: "News", href: "/news" }
                ]
            },
            {
                title: "Services",
                links: [
                    { label: "Digital Transformation", href: "/services#digital-transformation" },
                    { label: "Infrastructure", href: "/services#infrastructure" },
                    { label: "Cyber Security", href: "/services#integrated-security" }
                ]
            },
            {
                title: "Legal",
                links: [
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "Terms of Service", href: "/terms" }
                ]
            }
        ],
        bottomLinks: [
            { label: "Sitemap", href: "/sitemap" }
        ]
    }
};
