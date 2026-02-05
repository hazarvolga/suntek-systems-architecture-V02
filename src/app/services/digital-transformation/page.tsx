import { loadStructuredContent } from '@/lib/load-structured-content';
import { Metadata } from 'next';
import ServiceDetailLayout from '@/components/layout/ServiceDetailLayout';

export async function generateMetadata(): Promise<Metadata> {
    const content = loadStructuredContent('dijital-donusum/dijital-donusum.json');

    return {
        title: content.metadata.title,
        description: content.metadata.description || undefined,
    };
}

export default function DigitalTransformationPage() {
    const content = loadStructuredContent('dijital-donusum/dijital-donusum.json');

    return (
        <ServiceDetailLayout
            serviceId="dijital-donusum"
            sections={content.sections}
            fallbackMetadata={{
                title: content.metadata.title,
                description: content.metadata.description || ""
            }}
        />
    );
}
