"use client";

import { MapPin, Phone } from "lucide-react";
import { useContent } from "@/content/provider";

export default function ContactInfo() {
    const { contact } = useContent();
    const { contactInfo } = contact;

    return (
        <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-2">
                <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">SYS_LOC</span>
                <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-silver/60">Contact Info</h2>
            </div>

            {/* Address Box */}
            <div className="group border border-grid-line hover:border-primary/50 transition-colors p-8 bg-white/[0.01]">
                <div className="flex items-start gap-6">
                    <MapPin className="text-primary size-6 shrink-0 mt-1" />
                    <div className="space-y-2">
                        <h4 className="text-off-white font-bold text-sm tracking-widest uppercase">Headquarters</h4>
                        <p
                            className="text-silver font-light text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: contactInfo.address }}
                        />
                    </div>
                </div>
            </div>

            {/* Contact Box */}
            <div className="group border border-grid-line hover:border-primary/50 transition-colors p-8 bg-white/[0.01]">
                <div className="flex items-start gap-6">
                    <Phone className="text-primary size-6 shrink-0 mt-1" />
                    <div className="space-y-4 w-full">
                        <h4 className="text-off-white font-bold text-sm tracking-widest uppercase">Contact Channels</h4>
                        <div className="flex justify-between items-center border-b border-grid-line pb-2">
                            <span className="text-silver/60 text-xs font-mono">TEL</span>
                            <span className="text-off-white text-sm font-mono">{contactInfo.phone}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-grid-line pb-2">
                            <span className="text-silver/60 text-xs font-mono">E-MAIL</span>
                            <span className="text-off-white text-sm font-mono">{contactInfo.email}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Visualization */}
            <div className="relative aspect-square w-full border border-grid-line overflow-hidden group">
                <div
                    className="absolute inset-0 bg-cover bg-center architectural-filter opacity-50 group-hover:opacity-70 transition-opacity duration-700"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNtdsGrTEPXQ7P_ccbxCY75FUGz9Rp4O65zB9O5zxCtDhi-GeGy4MyeS68pqiRSpZr-snqP-N6xCIiZJ6StOFNZ42BRwIYZsa5alpBlgnm5yNFwfU24dUgrPtMj7GbvSZXgidD03e0mfevja_YH2slU_tzMweqQGWsjKeS34Jn-VoIxfaeTZWofNo4lW28pgOd9uEEpFFmu8sQ511rqQSNEHLwYSaRA-Zmtl_AtNskRjlXVTJCRAyadNzE9U_CuTzhUdhYrgFbzdRt")' }}
                />
                <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-overlay"></div>

                {/* Map Center Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                        <div className="size-3 bg-primary rounded-full relative z-10 shadow-[0_0_20px_#3b82f6]"></div>
                    </div>
                    <div className="mt-4 px-3 py-1 bg-black/80 backdrop-blur border border-grid-line">
                        <span className="text-[9px] font-mono text-primary tracking-widest">SUNTEK HQ</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
