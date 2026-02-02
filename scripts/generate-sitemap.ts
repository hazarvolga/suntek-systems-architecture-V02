import fs from 'fs';
import path from 'path';

const DESIGN_DIR = path.resolve(__dirname, '../../Design');
const OUTPUT_FILE = path.resolve(__dirname, '../data/sitemap.json');

// Ensure data dir exists
if (!fs.existsSync(path.dirname(OUTPUT_FILE))) {
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
}

interface Section {
    id: string;
    folderName: string;
    segment: string; // e.g., 'anasayfa', 'kurumsal'
    type: string;    // e.g., 'structural_summary'
    variant: string; // e.g., '1'
    htmlPath: string;
    imagePath: string;
}

const sections: Section[] = [];

try {
    const items = fs.readdirSync(DESIGN_DIR);

    items.forEach(item => {
        const fullPath = path.join(DESIGN_DIR, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory() && !item.startsWith('.')) {
            // Parse folder name: segment:type_variant_id
            // Note: Folder names vary, doing best-effort parsing
            const parts = item.split(':_');
            const segment = parts[0] || 'unknown';
            const rest = parts[1] || '';

            // Further parsing logic can be refined
            const type = rest.split('_').slice(0, -1).join('_') || rest;
            const variant = rest.split('_').pop() || '1';

            sections.push({
                id: item,
                folderName: item,
                segment,
                type,
                variant,
                htmlPath: path.join(fullPath, 'code.html'),
                imagePath: path.join(fullPath, 'screen.png')
            });
        }
    });

    // Sort by segment to group them
    sections.sort((a, b) => a.segment.localeCompare(b.segment));

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(sections, null, 2));
    console.log(`Generated sitemap with ${sections.length} sections at ${OUTPUT_FILE}`);

} catch (e) {
    console.error("Error reading design directory:", e);
}
