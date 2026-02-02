import {
    SiteConfig,
    ServicesPageContent,
    SectorsPageContent,
    SolutionsPageContent
} from "@/content/schema";

export interface SearchDocument {
    id: string;
    title: string;
    description: string;
    url: string;
    category: "Service" | "Sector" | "Solution" | "Company" | "Project";
    keywords: string[];
}

export function buildSearchIndex(
    services: ServicesPageContent,
    sectors: SectorsPageContent,
    solutions: SolutionsPageContent,
    site: SiteConfig
): SearchDocument[] {
    const documents: SearchDocument[] = [];

    // --- Services ---
    services.items.forEach(service => {
        documents.push({
            id: `service-${service.id}`,
            title: service.title,
            description: service.description,
            url: `/services#${service.id}`,
            category: "Service",
            keywords: service.features || []
        });
    });

    // --- Sectors ---
    sectors.items.forEach(sector => {
        documents.push({
            id: `sector-${sector.id}`,
            title: sector.title,
            description: sector.description,
            url: `/sectors#${sector.id}`,
            category: "Sector",
            keywords: sector.features || []
        });
    });

    // --- Solutions ---
    solutions.items.forEach(solution => {
        documents.push({
            id: `solution-${solution.id}`,
            title: solution.title,
            description: solution.description,
            url: `/solutions#${solution.id}`,
            category: "Solution",
            keywords: solution.features || []
        });
    });

    // --- Static Pages ---
    documents.push({
        id: "page-about",
        title: "Hakkımızda",
        description: site.description,
        url: "/about",
        category: "Company",
        keywords: ["corporate", "history", "vision", "mission"]
    });

    documents.push({
        id: "page-careers",
        title: "Kariyer",
        description: "Suntek ailesine katılın. Açık pozisyonlar ve İK politikaları.",
        url: "/careers",
        category: "Company",
        keywords: ["jobs", "hr", "work", "hiring"]
    });

    documents.push({
        id: "page-contact",
        title: "İletişim",
        description: "Bize ulaşın. Adres, telefon ve iletişim formu.",
        url: "/contact",
        category: "Company",
        keywords: ["email", "phone", "address", "map"]
    });

    return documents;
}
