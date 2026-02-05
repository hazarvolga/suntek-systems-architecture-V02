import { loadStructuredContent } from '@/lib/load-structured-content';
import { Metadata } from 'next';
import ServiceDetailLayout from '@/components/layout/ServiceDetailLayout';

export async function generateMetadata(): Promise<Metadata> {
    const content = loadStructuredContent('teknoloji-danismanligi-hizmetleri/teknoloji-danismanligi-hizmetleri.json');

    return {
        title: content.metadata.title,
        description: content.metadata.description || undefined,
    };
}

export default function TechnologyConsultingPage() {
    const content = loadStructuredContent('teknoloji-danismanligi-hizmetleri/teknoloji-danismanligi-hizmetleri.json');

    return (
        <ServiceDetailLayout
            serviceId="teknoloji-danismanligi"
            sections={content.sections}
            fallbackMetadata={{
                title: content.metadata.title,
                description: content.metadata.description || ""
            }}
        />
    );
}
