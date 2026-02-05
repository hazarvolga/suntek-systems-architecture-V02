import ProjectDetailLayout from '@/components/layout/ProjectDetailLayout';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const jsonPath = `${slug}/${slug}.json`;

    try {
        const content = loadStructuredContent(jsonPath);

        return (
            <ProjectDetailLayout
                projectSlug={slug}
                sections={content.sections}
                fallbackMetadata={{
                    title: content.metadata.title,
                    description: content.metadata.description || ""
                }}
            />
        );
    } catch (error) {
        return (
            <main className="min-h-screen pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-bold text-off-white">Proje bulunamadı</h1>
                    <p className="text-silver mt-4">JSON: {jsonPath}</p>
                </div>
            </main>
        );
    }
}
