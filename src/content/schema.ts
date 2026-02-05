

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

export interface StatItem {
    label: string;
    value: string;
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
    href?: string; // For navigation
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
    subFeatures?: {
        title: string;
        description: string;
        features: string[];
        image?: string;
    }[];
}

export interface ServicesPageContent {
    hero: HeroSection;
    items: ServiceItem[];
}

export interface ProjectItem {
    id: string;
    slug: string; // For routing /projects/[slug]
    title: string;
    description: string;
    content?: string; // Markdown body
    client?: string;
    location?: string;
    year?: string;
    category?: string;
    tags?: string[];
    image?: string;
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
    stats: StatItem[];
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

export interface JobItem {
    title: string;
    location: string;
    date: string;
    link: string;
}

export interface CareersPageContent {
    hero: HeroSection;
    intro: {
        title: string;
        content: string; // Markdown
    };
    policies: FeatureItem[]; // For Performance, Education, etc.
    openPositions: {
        title: string; // "Açık Pozisyonlar"
        items: JobItem[];
    };
    images: {
        performance: string;
        education: string;
        career: string;
        salary: string;
    };
}

export interface LegalPageContent {
    privacy: {
        title: string;
        slug: string;
        content: string; // Markdown
    };
    cookies: {
        title: string;
        slug: string;
        content: string; // Markdown
    };
}

export interface CampaignItem {
    slug: string;
    title: string;
    image: string;
    content: string; // Markdown link or summary
    link: string;
}

export interface CampaignsPageContent {
    hero: HeroSection;
    items: CampaignItem[];
}

export interface PartnerItem {
    id: string;
    name: string;
    tier: string;
    level?: string;
    core: string;
    category: string;
    logo: string;
    specs: {
        icon: string; // Lucide icon name
        label: string;
    }[];
    modId: string;
}

export interface PartnersPageContent {
    hero: HeroSection;
    items: PartnerItem[];
}

// --- Global Config ---

export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    logo: {
        url: string;
        alt: string;
        href: string;
    };
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
