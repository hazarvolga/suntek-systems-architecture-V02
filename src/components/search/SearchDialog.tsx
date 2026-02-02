"use client";

import { useEffect, useState, useMemo } from "react";
import { useContent } from "@/content/provider";
import { buildSearchIndex, SearchDocument } from "@/lib/search";
import Fuse from "fuse.js";
import { useRouter } from "next/navigation";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command";
import { Search } from "lucide-react";

export function SearchDialog() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const { services, sectors, solutions, site } = useContent();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    // Build Index
    const searchIndex = useMemo(() => {
        return buildSearchIndex(services, sectors, solutions, site);
    }, [services, sectors, solutions, site]);

    // Fuse Instance
    const fuse = useMemo(() => {
        return new Fuse(searchIndex, {
            keys: [
                { name: "title", weight: 0.7 },
                { name: "keywords", weight: 0.2 },
                { name: "description", weight: 0.1 }
            ],
            threshold: 0.3, // Fuzzy match threshold
            includeMatches: true
        });
    }, [searchIndex]);

    const [query, setQuery] = useState("");

    const results = useMemo(() => {
        if (!query) return searchIndex.slice(0, 5); // Show top 5 suggestions if empty
        return fuse.search(query).map(result => result.item);
    }, [query, fuse, searchIndex]);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-between w-full h-8 rounded-none border border-grid-line/50 bg-matte-black/50 px-3 text-[10px] text-silver font-mono hover:border-primary/50 transition-colors"
            >
                <span className="opacity-50">Ara...</span>
                <div className="flex items-center gap-1 opacity-30">
                    <span className="text-xs">⌘</span>K
                </div>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Ne aramak istiyorsunuz? (Örn: Firewall, Kariyer...)" value={query} onValueChange={setQuery} />
                <CommandList>
                    <CommandEmpty>Sonuç bulunamadı.</CommandEmpty>
                    <CommandGroup heading="Sonuçlar">
                        {results.map((item) => (
                            <CommandItem
                                key={item.id}
                                value={item.title}
                                onSelect={() => {
                                    runCommand(() => router.push(item.url));
                                }}
                            >
                                <div className="flex flex-col">
                                    <span className="font-medium text-off-white">{item.title}</span>
                                    <span className="text-xs text-silver/50">{item.category}</span>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
