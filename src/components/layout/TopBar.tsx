"use client";

import { useContent } from "@/content/provider";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import { SearchDialog } from "@/components/search/SearchDialog";

export default function TopBar() {
    const { site } = useContent();

    return (
        <div className="hidden md:block w-full bg-black border-b border-grid-line z-[60] relative">
            <div className="max-w-7xl mx-auto h-10 px-6 flex items-center justify-between text-xs font-mono tracking-wide text-silver/60">
                {/* Left: Contact Info */}
                <div className="flex items-center gap-6">
                    <a href="mailto:contact@suntek.com.tr" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Mail className="size-3" />
                        <span>CONTACT@{site.name.toUpperCase()}.COM.TR</span>
                    </a>
                    <span className="w-px h-3 bg-grid-line"></span>
                    <a href="tel:+902125550000" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Phone className="size-3" />
                        <span>+90 212 555 00 00</span>
                    </a>
                </div>

                {/* Right: Search & Socials */}
                <div className="flex items-center gap-6">
                    {/* Search */}
                    <div className="w-64">
                        <SearchDialog />
                    </div>

                    <span className="w-px h-3 bg-grid-line"></span>

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        {site.socials.linkedin && (
                            <Link href={site.socials.linkedin || "#"} target="_blank" className="hover:text-primary transition-colors">
                                <Linkedin className="size-3.5" />
                            </Link>
                        )}
                        {site.socials.twitter && (
                            <Link href={site.socials.twitter || "#"} target="_blank" className="hover:text-primary transition-colors">
                                <Twitter className="size-3.5" />
                            </Link>
                        )}
                        {site.socials.github && (
                            <Link href={site.socials.github || "#"} target="_blank" className="hover:text-primary transition-colors">
                                <Github className="size-3.5" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
