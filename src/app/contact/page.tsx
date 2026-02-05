"use client";

import { useContent } from "@/content/provider";
import PageHero from "@/components/layout/PageHero";
import PageContainer from "@/components/layout/PageContainer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, ExternalLink } from "lucide-react";

export default function ContactPage() {
    const { contact } = useContent();

    if (!contact) return null;

    return (
        <main className="min-h-screen bg-matte-slate">
            <PageHero content={contact.hero} />

            <PageContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
                    {/* Address Module */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group border border-grid-line p-10 bg-matte-black/40 backdrop-blur-sm hover:border-primary/50 transition-all relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl rounded-full" />
                        <MapPin className="size-8 text-primary mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-silver/40 mb-4 font-mono">Location_Registry</h3>
                        <p className="text-off-white text-lg font-light leading-relaxed">
                            {contact.info.address}
                        </p>
                    </motion.div>

                    {/* Contact Module */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group border border-grid-line p-10 bg-matte-black/40 backdrop-blur-sm hover:border-primary/50 transition-all relative overflow-hidden"
                    >
                        <Phone className="size-8 text-primary mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-silver/40 mb-4 font-mono">Voice_Link</h3>
                        <div className="space-y-4">
                            <a href={`tel:${contact.info.phone}`} className="text-off-white text-2xl font-bold tracking-tight block hover:text-primary transition-colors">
                                {contact.info.phone}
                            </a>
                            <a href={`mailto:${contact.info.email}`} className="text-silver/60 text-lg font-light block hover:text-primary transition-colors">
                                {contact.info.email}
                            </a>
                        </div>
                    </motion.div>

                    {/* Social Module */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group border border-grid-line p-10 bg-matte-black/40 backdrop-blur-sm hover:border-primary/50 transition-all relative overflow-hidden"
                    >
                        <Linkedin className="size-8 text-primary mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-silver/40 mb-4 font-mono">Quantum_Presence</h3>
                        <div className="flex flex-col gap-6">
                            <a href={contact.social.linkedin} target="_blank" className="flex items-center gap-3 text-off-white hover:text-primary transition-colors group/link">
                                <span className="text-lg font-bold uppercase">LinkedIn</span>
                                <ExternalLink className="size-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                            <a href={contact.social.twitter} target="_blank" className="flex items-center gap-3 text-off-white hover:text-primary transition-colors group/link">
                                <span className="text-lg font-bold uppercase">Twitter</span>
                                <ExternalLink className="size-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Map Section */}
                <div className="border border-grid-line bg-matte-black/50 p-4 aspect-[21/9] relative overflow-hidden grayscale group hover:grayscale-0 transition-all duration-1000">
                    <div className="absolute inset-0 pointer-events-none border-[12px] border-matte-black z-10" />
                    <div className="absolute top-8 left-8 z-20 flex flex-col gap-2">
                        <span className="text-primary font-mono text-[9px] border border-primary/30 px-3 py-1 bg-matte-black/80 uppercase tracking-widest leading-none">
                            Satellite_Uplink_Active
                        </span>
                        <span className="text-silver/40 font-mono text-[9px] border border-white/10 px-3 py-1 bg-matte-black/80 uppercase tracking-widest leading-none">
                            Coords: 41.1127° N, 29.0227° E
                        </span>
                    </div>
                    {/* Placeholder for map */}
                    <div className="w-full h-full bg-[#111] grid place-items-center opacity-40">
                        <div className="text-[10px] font-mono text-silver/20 uppercase animate-pulse">Initializing Visualization Layer...</div>
                    </div>
                </div>
            </PageContainer>
        </main>
    );
}
