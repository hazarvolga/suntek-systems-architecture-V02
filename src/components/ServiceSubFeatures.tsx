"use client";

import { ServiceItem } from "@/content/schema";

export function ServiceSubFeatures({ service }: { service: ServiceItem }) {
    if (!service.subFeatures || service.subFeatures.length === 0) return null;

    return (
        <div className="mb-24">
            <h2 className="text-2xl font-bold text-off-white mb-8 tracking-tight border-l-4 border-primary pl-4">Hizmet Detayları</h2>
            <div className="grid grid-cols-1 gap-12">
                {service.subFeatures.map((sub, idx) => (
                    <div key={idx} className="bg-matte-black border border-grid-line overflow-hidden group hover:border-primary/30 transition-all">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Image Section */}
                            {sub.image && (
                                <div className="relative h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={sub.image}
                                        alt={sub.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                                </div>
                            )}

                            {/* Content Section */}
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{sub.title}</h3>
                                <p className="text-silver/70 mb-8 leading-relaxed">{sub.description}</p>
                                <ul className="grid grid-cols-1 gap-3">
                                    {sub.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-silver/80">
                                            <span className="size-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
