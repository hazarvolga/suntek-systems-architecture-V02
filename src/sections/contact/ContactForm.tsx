"use client";

import { Send } from "lucide-react";
import { useContent } from "@/content/provider";

export default function ContactForm() {
    const { contact } = useContent();
    const { hero } = contact;

    return (
        <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-4 mb-10">
                <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-1">{hero.sysCode}</span>
                <h1 className="text-[10px] font-bold tracking-[0.4em] uppercase text-silver/60">{hero.badge}</h1>
            </div>

            <div className="bg-white/[0.02] border border-grid-line p-8 md:p-12">
                <form className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <label className="flex flex-col gap-3">
                            <span className="text-silver text-[10px] font-bold uppercase tracking-widest">Full Name</span>
                            <input
                                type="text"
                                placeholder="Ex: John Doe"
                                className="bg-black/20 border border-grid-line text-off-white text-sm p-4 focus:border-primary focus:ring-0 placeholder:text-silver/30 transition-colors"
                            />
                        </label>
                        <label className="flex flex-col gap-3">
                            <span className="text-silver text-[10px] font-bold uppercase tracking-widest">Company Name</span>
                            <input
                                type="text"
                                placeholder="Ex: Suntek Energy Inc."
                                className="bg-black/20 border border-grid-line text-off-white text-sm p-4 focus:border-primary focus:ring-0 placeholder:text-silver/30 transition-colors"
                            />
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <label className="flex flex-col gap-3">
                            <span className="text-silver text-[10px] font-bold uppercase tracking-widest">Email</span>
                            <input
                                type="email"
                                placeholder="email@company.com"
                                className="bg-black/20 border border-grid-line text-off-white text-sm p-4 focus:border-primary focus:ring-0 placeholder:text-silver/30 transition-colors"
                            />
                        </label>
                        <label className="flex flex-col gap-3">
                            <span className="text-silver text-[10px] font-bold uppercase tracking-widest">Phone</span>
                            <input
                                type="tel"
                                placeholder="+90 (___) ___ __ __"
                                className="bg-black/20 border border-grid-line text-off-white text-sm p-4 focus:border-primary focus:ring-0 placeholder:text-silver/30 transition-colors"
                            />
                        </label>
                    </div>

                    <label className="flex flex-col gap-3">
                        <span className="text-silver text-[10px] font-bold uppercase tracking-widest">Subject</span>
                        <select
                            className="bg-black/20 border border-grid-line text-off-white text-sm p-4 focus:border-primary focus:ring-0 transition-colors appearance-none"
                        >
                            <option>General Info Request</option>
                            <option>Project Proposal</option>
                            <option>Technical Support</option>
                            <option>Sales & Partnership</option>
                        </select>
                    </label>

                    <label className="flex flex-col gap-3">
                        <span className="text-silver text-[10px] font-bold uppercase tracking-widest">Message</span>
                        <textarea
                            rows={5}
                            placeholder="How can we assist you?"
                            className="bg-black/20 border border-grid-line text-off-white text-sm p-4 focus:border-primary focus:ring-0 placeholder:text-silver/30 transition-colors resize-none"
                        ></textarea>
                    </label>

                    <div className="flex items-center gap-3 border-t border-grid-line pt-6">
                        <input
                            id="kvkk"
                            type="checkbox"
                            className="bg-transparent border-grid-line text-primary focus:ring-0 rounded-none w-4 h-4"
                        />
                        <label htmlFor="kvkk" className="text-xs text-silver/60">
                            I have read and accept the Privacy Policy.
                        </label>
                    </div>

                    <button
                        type="button"
                        className="bg-off-white hover:bg-primary text-black hover:text-white font-bold py-4 px-8 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs mt-4 group"
                    >
                        <span>SEND</span>
                        <Send className="size-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
    );
}
