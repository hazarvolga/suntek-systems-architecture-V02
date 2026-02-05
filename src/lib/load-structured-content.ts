import { readFileSync } from 'fs';
import { join } from 'path';
import { StructuredPageContent } from '@/types/page-content';

/**
 * Load structured page content from JSON file
 * 
 * CRITICAL RULES:
 * - Loads JSON verbatim
 * - Sorts sections by order field (only allowed transformation)
 * - NO content modification
 * - NO data extraction or restructuring
 * 
 * @param jsonPath - Relative path from data directory (e.g., "egitim/egitim.json")
 * @returns Structured page content with sorted sections
 */
export function loadStructuredContent(jsonPath: string): StructuredPageContent {
    const fullPath = join(process.cwd(), '../suntek-icerik/data', jsonPath);

    try {
        const raw = readFileSync(fullPath, 'utf-8');
        const parsed = JSON.parse(raw) as StructuredPageContent;

        // ONLY allowed transformation: sort sections by order
        if (parsed.sections && Array.isArray(parsed.sections)) {
            parsed.sections.sort((a, b) => a.order - b.order);
        }

        return parsed;
    } catch (error) {
        console.error(`Failed to load content from ${jsonPath}:`, error);
        throw error;
    }
}
