"use client";

import { useContent } from "@/content/provider";
import ReactMarkdown from "react-markdown";

export default function PrivacyPage() {
    const { legal } = useContent();
    const { privacy } = legal;

    return (
        <main className="min-h-screen pt-32 pb-24 bg-matte-black">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-off-white mb-12 border-b border-grid-line pb-8">
                    {privacy.title}
                </h1>
                <article className="prose prose-invert prose-lg prose-headings:text-off-white prose-p:text-silver max-w-none">
                    <ReactMarkdown>{privacy.content}</ReactMarkdown>
                </article>
            </div>
        </main>
    );
}
