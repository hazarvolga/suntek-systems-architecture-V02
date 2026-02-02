"use client";

import { useEffect, useState } from "react";
import { Activity, GraduationCap, Factory } from "lucide-react";

const sectors = [
    {
        id: "01",
        slug: "healthcare",
        title: "Healthcare",
        subtitle: "Security & Continuity",
        icon: Activity
    },
    {
        id: "02",
        slug: "education",
        title: "Education",
        subtitle: "Scale & Connectivity",
        icon: GraduationCap
    },
    {
        id: "03",
        slug: "industry",
        title: "Industry 4.0",
        subtitle: "Automation",
        icon: Factory
    }
];

export default function SectorsSidebar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -50% 0px"
            }
        );

        sectors.forEach((sector) => {
            const element = document.getElementById(sector.slug);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, slug: string) => {
        e.preventDefault();
        const element = document.getElementById(slug);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", `#${slug}`);
        }
    };

    return (
        <aside className="w-80 hidden xl:block sticky top-20 h-[calc(100vh-80px)] border-r border-grid-line p-10 overflow-y-auto hide-scrollbar z-20 bg-matte-slate/95 backdrop-blur self-start">
            <div className="flex flex-col gap-12">
                <div>
                    <h3 className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                        Sector Expertise
                    </h3>
                    <p className="text-silver/60 text-sm leading-relaxed">
                        Specialized infrastructure prescriptions for mission-critical verticals.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    {sectors.map((sector) => (
                        <div key={sector.id}>
                            <a
                                href={`#${sector.slug}`}
                                onClick={(e) => handleScroll(e, sector.slug)}
                                className={`group flex items-center gap-4 py-4 border-b transition-all duration-300
                                ${activeSection === sector.slug
                                        ? "border-primary text-off-white bg-primary/5 px-2 -mx-2 rounded-lg"
                                        : "border-grid-line text-silver hover:text-off-white hover:border-primary/50"}`}
                            >
                                <div className={`p-2 rounded-lg transition-colors ${activeSection === sector.slug ? "bg-primary text-black" : "bg-white/5 text-silver group-hover:text-primary"}`}>
                                    <sector.icon className="size-4" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold tracking-wide">
                                        {sector.title}
                                    </span>
                                    <span className="text-[10px] text-silver/50 uppercase tracking-widest group-hover:text-primary/70 transition-colors">
                                        {sector.subtitle}
                                    </span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="mt-auto pt-10">
                    <div className="bg-white/[0.02] p-6 rounded-xl border border-grid-line">
                        <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2">
                            Case Studies
                        </p>
                        <p className="text-xs text-silver/60 mb-4">
                            Review our detailed implementation reports.
                        </p>
                        <button className="w-full bg-grid-line hover:bg-white/10 text-off-white py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-colors">
                            DOWNLOAD REFERENCES
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
