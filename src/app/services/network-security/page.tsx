import { loadStructuredContent } from '@/lib/load-structured-content';
import { Metadata } from 'next';
import ServiceDetailLayout from '@/components/layout/ServiceDetailLayout';

export async function generateMetadata(): Promise<Metadata> {
    const content = loadStructuredContent('ag-guvenligi/ag-guvenligi.json');

    return {
        title: content.metadata.title,
        description: content.metadata.description || undefined,
    };
}

export default function NetworkSecurityPage() {
    const content = loadStructuredContent('ag-guvenligi/ag-guvenligi.json');

    return (
        <ServiceDetailLayout
            serviceId="ag-guvenligi"
            sections={content.sections}
            fallbackMetadata={{
                title: content.metadata.title,
                description: content.metadata.description || ""
            }}
        />
    );
}
