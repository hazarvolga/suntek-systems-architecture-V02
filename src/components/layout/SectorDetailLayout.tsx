"use client";

import { useContent } from "@/content/provider";
import PageHero from "./PageHero";
import PageContainer from "./PageContainer";
import { SectionRenderer } from "@/components/SectionRenderer";
import { Section } from "@/types/page-content";

interface SectorDetailLayoutProps {
    sectorId: string;
    sections: Section[];
    fallbackMetadata: {
        title: string;
        description: string;
    };
}

export default function SectorDetailLayout({ sectorId, sections, fallbackMetadata }: SectorDetailLayoutProps) {
    const { sectors } = useContent();

    // Find sector data from our premium content provider
    const sectorData = sectors?.items.find(s => s.id === sectorId);

    const heroContent = {
        sysCode: `SCT_${sectorId.toUpperCase().slice(0, 3)}`,
        badge: "Sektörel Çözüm",
        title: sectorData?.title || fallbackMetadata.title,
        description: sectorData?.description || fallbackMetadata.description,
        backgroundImage: "/images/bg-blueprint.jpg" // Default architectural background
    };

    return (
        <main className="min-h-screen bg-matte-slate">
            <PageHero content={heroContent} />

            <PageContainer>
                <div className="space-y-12">
                    {sections.map((section) => (
                        <div key={section.id} className="relative group">
                            {/* Decorative architectural markers for each section */}
                            <div className="absolute -left-8 top-2 w-1 h-8 bg-primary/20 group-hover:bg-primary transition-colors hidden md:block" />
                            <SectionRenderer section={section} />
                        </div>
                    ))}
                </div>
            </PageContainer>
        </main>
    );
}
