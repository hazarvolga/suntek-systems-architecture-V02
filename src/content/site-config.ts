import { SiteConfig } from "./schema";

export const siteConfig: SiteConfig = {
    name: "Suntek",
    description: "Advanced Engineering & Technology Solutions",
    url: "https://suntek.example.com",
    ogImage: "https://suntek.example.com/og.jpg",
    logo: {
        url: "/logo.svg", // Assuming user will upload here, or we can use a data URI for the existing SVG to make it "editable" by replacing the string.
        alt: "Suntek Logo",
        href: "/"
    },
    socials: {
        twitter: "https://twitter.com/suntek",
        linkedin: "https://linkedin.com/company/suntek",
        github: "https://github.com/suntek"
    }
};
