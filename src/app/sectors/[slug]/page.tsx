import { loadStructuredContent } from '@/lib/load-structured-content';
import SectorDetailLayout from '@/components/layout/SectorDetailLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = params.slug;
    try {
        const content = loadStructuredContent(`${slug}/${slug}.json`);
        return {
            title: content.metadata.title,
            description: content.metadata.description || undefined,
        };
    } catch (e) {
        return { title: 'Sektör Detayı' };
    }
}

export default function SectorDetailPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const jsonPath = `${slug}/${slug}.json`;

    try {
        const content = loadStructuredContent(jsonPath);

        return (
            <SectorDetailLayout
                sectorId={slug}
                sections={content.sections}
                fallbackMetadata={{
                    title: content.metadata.title,
                    description: content.metadata.description || ""
                }}
            />
        );
    } catch (error) {
        return (
            <main className="min-h-screen pt-32 pb-24 bg-matte-slate">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-bold text-off-white">Sektör bulunamadı</h1>
                    <p className="text-silver mt-4">Katalogda bu sektöre ait detaylı veri henüz yapılandırılmamış olabilir.</p>
                    <p className="text-silver/20 text-xs mt-8 font-mono">DEBUG_LOG: {jsonPath}</p>
                </div>
            </main>
        );
    }
}
