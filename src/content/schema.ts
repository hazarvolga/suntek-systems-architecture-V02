import { LucideIcon } from "lucide-react";

// --- Primitives ---

export interface Link {
    label: string;
    href: string;
    isExternal?: boolean;
}

export interface Image {
    src: string;
    alt: string;
}

export interface Button extends Link {
    variant?: "primary" | "secondary" | "outline" | "ghost";
}

// --- Component Schemas ---

export interface HeroSection {
    sysCode?: string; // e.g. SYS_01
    badge?: string;
    title: string;
    description: string;
    primaryCta?: Button;
    secondaryCta?: Button;
    backgroundImage?: string;
}

export interface FeatureItem {
    icon?: string; // Lucide icon name
    title: string;
    description: string;
    sysCode?: string; // e.g. SCTR_ED-01
    image?: string; // For sector cards
}

export interface FeaturesSection {
    id: string; // For scroll spy
    sysCode?: string; // e.g. SYS_02
    heading: string;
    subheading?: string;
    items: FeatureItem[];
}

export interface PresenceSection {
    sysCode?: string;
    badge?: string;
    title: string;
    description: string;
    cta?: Button;
    image?: string;
    stats?: StatItem[];
}

// --- Page Schemas ---

export interface HomePageContent {
    hero: HeroSection;
    sectors: FeaturesSection;
    presence: PresenceSection;
}

export interface AboutPageContent {
    hero: HeroSection;
    mission: FeaturesSection;
    values: FeaturesSection;
}

export interface ServiceItem {
    id: string; // url hash
    title: string;
    description: string;
    icon?: string;
    features: string[];
    capabilities?: {
        label: string;
        value: string;
    }[];
}

export interface ServicesPageContent {
    hero: HeroSection;
    items: ServiceItem[];
}

export interface ProjectItem {
    id: string; // e.g. "SUN-2023-AF"
    title: string;
    description: string;
    outcome: string;
    year: string;
    stack: string;
    sector: string;
    category: "CLOUD_INFRA" | "EMBEDDED" | "CYBER_SEC"; // Literal types matching filter logic
}

export interface ProjectsPageContent {
    hero: HeroSection;
    items: ProjectItem[];
}

export interface SectorItem {
    id: string;
    title: string;
    description: string;
    icon?: string;
    features: string[];
    stats: {
        label: string;
        value: string;
    }[];
}

export interface SectorsPageContent {
    hero: HeroSection;
    items: SectorItem[];
}

export interface ContactPageContent {
    hero: HeroSection;
    contactInfo: {
        address: string;
        phone: string;
        email: string;
    };
}

export interface SolutionItem {
    id: string;
    title: string;
    description: string;
    features: string[];
    capabilities: {
        label: string;
        value: string;
    }[];
}

export interface SolutionsPageContent {
    hero: HeroSection;
    items: SolutionItem[];
}

// --- Global Config ---

export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    socials: {
        twitter?: string;
        github?: string;
        linkedin?: string;
    };
}

export interface NavigationItem {
    label: string;
    href: string;
    children?: NavigationItem[];
}

export interface NavigationConfig {
    header: NavigationItem[];
    footer: {
        columns: {
            title: string;
            links: Link[];
        }[];
        bottomLinks: Link[];
    };
}
