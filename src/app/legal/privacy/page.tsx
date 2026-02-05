import { loadStructuredContent } from '@/lib/load-structured-content';
import { SectionRenderer } from '@/components/SectionRenderer';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const content = loadStructuredContent('yasal/gizlilik-politikasi.json');

    return {
        title: content.metadata.title,
        description: content.metadata.description || undefined,
    };
}

export default function PrivacyPage() {
    const content = loadStructuredContent('yasal/gizlilik-politikasi.json');

    return (
        <main className="min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="space-y-0">
                    {content.sections.map((section) => (
                        <SectionRenderer key={section.id} section={section} />
                    ))}
                </div>
            </div>
        </main>
    );
}
