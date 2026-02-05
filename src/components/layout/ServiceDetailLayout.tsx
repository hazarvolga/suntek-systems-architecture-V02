"use client";

import { useContent } from "@/content/provider";
import PageHero from "./PageHero";
import PageContainer from "./PageContainer";
import { SectionRenderer } from "@/components/SectionRenderer";
import { Section } from "@/types/page-content";

interface ServiceDetailLayoutProps {
    serviceId: string;
    sections: Section[];
    fallbackMetadata: {
        title: string;
        description: string;
    };
}

export default function ServiceDetailLayout({ serviceId, sections, fallbackMetadata }: ServiceDetailLayoutProps) {
    const { services } = useContent();

    // Find service data from our premium content provider
    const serviceData = services?.items.find(s => s.id === serviceId);

    const heroContent = {
        sysCode: `SRV_${serviceId.toUpperCase().slice(0, 3)}`,
        badge: "Hizmet Detayı",
        title: serviceData?.title || fallbackMetadata.title,
        description: serviceData?.description || fallbackMetadata.description,
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
