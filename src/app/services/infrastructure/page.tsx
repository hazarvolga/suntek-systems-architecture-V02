import { loadStructuredContent } from '@/lib/load-structured-content';
import { Metadata } from 'next';
import ServiceDetailLayout from '@/components/layout/ServiceDetailLayout';

export async function generateMetadata(): Promise<Metadata> {
    const content = loadStructuredContent('enerji-ve-altyapi-hizmetleri/enerji-ve-altyapi-hizmetleri.json');

    return {
        title: content.metadata.title,
        description: content.metadata.description || undefined,
    };
}

export default function InfrastructurePage() {
    const content = loadStructuredContent('enerji-ve-altyapi-hizmetleri/enerji-ve-altyapi-hizmetleri.json');

    return (
        <ServiceDetailLayout
            serviceId="altyapi-hizmetleri"
            sections={content.sections}
            fallbackMetadata={{
                title: content.metadata.title,
                description: content.metadata.description || ""
            }}
        />
    );
}
