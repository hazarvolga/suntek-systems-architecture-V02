// TypeScript interfaces for structured page content
// Source: suntek-icerik/data/**/*.json

export interface PageMetadata {
    title: string;
    url: string;
    category: string;
    slug: string;
    description: string;
    author: string | null;
    publishDate: string | null;
    lastModified: string;
    scrapedAt: string;
}

export interface BaseSection {
    id: string;
    type: string;
    order: number;
    level: number | null;
    attributes: Record<string, unknown> | null;
    children: unknown | null;
}

export interface HeadingSection extends BaseSection {
    type: "heading";
    level: 1 | 2 | 3 | 4 | 5 | 6;
    content: string;
}

export interface ParagraphSection extends BaseSection {
    type: "paragraph";
    content: string;
}

export interface ListSection extends BaseSection {
    type: "list";
    content: string[]; // Array of list items
    attributes: {
        type: "ordered" | "unordered";
        itemCount: number;
    };
}

export interface ImageSection extends BaseSection {
    type: "image";
    content: string; // Image URL
    attributes: {
        alt?: string;
        caption?: string;
    } | null;
}

export type Section =
    | HeadingSection
    | ParagraphSection
    | ListSection
    | ImageSection;

export interface StructuredPageContent {
    metadata: PageMetadata;
    sections: Section[];
}
