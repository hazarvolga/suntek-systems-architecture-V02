"use client";

import { motion } from "framer-motion";

interface PageContainerProps {
    children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
    return (
        <div className="relative overflow-hidden">
            {/* Background Grid Pattern - subtle */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
            />

            <div className="max-w-4xl mx-auto px-6 relative z-10 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {children}
                </motion.div>
            </div>

            {/* Global system status indicator - subtle bottom-right */}
            <div className="fixed bottom-10 right-10 z-50 pointer-events-none hidden lg:block">
                <div className="flex items-center gap-3 bg-matte-black/80 backdrop-blur-md border border-grid-line px-4 py-2">
                    <span className="size-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(13,89,242,0.5)]"></span>
                    <span className="text-[9px] font-mono text-silver/40 uppercase tracking-widest leading-none">System_Link_Stable</span>
                </div>
            </div>
        </div>
    );
}
