import { loadStructuredContent } from '@/lib/load-structured-content';
import { Metadata } from 'next';
import ServiceDetailLayout from '@/components/layout/ServiceDetailLayout';

export async function generateMetadata(): Promise<Metadata> {
    const content = loadStructuredContent('entegre-guvenlik-sistemleri/entegre-guvenlik-sistemleri.json');

    return {
        title: content.metadata.title,
        description: content.metadata.description || undefined,
    };
}

export default function IntegratedSecurityPage() {
    const content = loadStructuredContent('entegre-guvenlik-sistemleri/entegre-guvenlik-sistemleri.json');

    return (
        <ServiceDetailLayout
            serviceId="entegre-guvenlik"
            sections={content.sections}
            fallbackMetadata={{
                title: content.metadata.title,
                description: content.metadata.description || ""
            }}
        />
    );
}
