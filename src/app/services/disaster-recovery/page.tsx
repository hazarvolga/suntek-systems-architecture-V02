import { loadStructuredContent } from '@/lib/load-structured-content';
import { Metadata } from 'next';
import ServiceDetailLayout from '@/components/layout/ServiceDetailLayout';

export async function generateMetadata(): Promise<Metadata> {
    const content = loadStructuredContent('backup-disaster-recovery/backup-disaster-recovery.json');

    return {
        title: content.metadata.title,
        description: content.metadata.description || undefined,
    };
}

export default function DisasterRecoveryPage() {
    const content = loadStructuredContent('backup-disaster-recovery/backup-disaster-recovery.json');

    return (
        <ServiceDetailLayout
            serviceId="backup-recovery"
            sections={content.sections}
            fallbackMetadata={{
                title: content.metadata.title,
                description: content.metadata.description || ""
            }}
        />
    );
}
