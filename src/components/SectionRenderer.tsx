"use client";

import React from 'react';
import { Section } from '@/types/page-content';

/**
 * Deterministic Section Renderer
 * 
 * ABSOLUTE RULES:
 * - Renders sections based ONLY on type field
 * - Uses content verbatim (character-for-character)
 * - NO content modification
 * - NO creative decisions
 * - NO layout logic based on content
 * 
 * Type Mapping:
 * - heading → <h{level}>
 * - paragraph → <p>
 * - list → <ul> or <ol>
 * - image → <img>
 */
export function SectionRenderer({ section }: { section: Section }) {
    switch (section.type) {
        case "heading": {
            // Use React.createElement to avoid JSX namespace issues with dynamic tags
            return React.createElement(
                `h${section.level}`,
                {
                    'data-section-id': section.id,
                    'data-section-order': section.order,
                    className: "text-off-white font-bold mb-4"
                },
                section.content
            );
        }

        case "paragraph": {
            return (
                <p
                    data-section-id={section.id}
                    data-section-order={section.order}
                    className="text-silver mb-6 leading-relaxed"
                >
                    {section.content}
                </p>
            );
        }

        case "list": {
            const ListTag = section.attributes?.type === "ordered" ? "ol" : "ul";
            return React.createElement(
                ListTag,
                {
                    'data-section-id': section.id,
                    'data-section-order': section.order,
                    className: "text-silver mb-6 ml-6 space-y-2"
                },
                section.content.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                        {item}
                    </li>
                ))
            );
        }

        case "image": {
            return (
                <img
                    data-section-id={section.id}
                    data-section-order={section.order}
                    src={section.content}
                    alt={section.attributes?.alt || ""}
                    className="mb-6 max-w-full h-auto"
                />
            );
        }

        default: {
            // Unknown section type - render nothing silently
            // console.warn removed - TypeScript exhaustiveness check
            return null;
        }
    }
}
