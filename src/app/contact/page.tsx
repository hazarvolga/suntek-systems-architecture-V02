import Link from "next/link";
import ContactForm from "@/sections/contact/ContactForm";
import ContactInfo from "@/sections/contact/ContactInfo";

export const metadata = {
    title: "Suntek | Contact",
    description: "Contact us for global engineering solutions.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 relative">
            {/* Page Content */}
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Campaign / Banner Section (Kept static as it's a specific marketing component, but could be refactored later if needed) */}
                <section className="mb-20">
                    <div className="relative overflow-hidden border border-grid-line group">
                        {/* Background Image with Filter */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 architectural-filter opacity-50"
                            style={{ backgroundImage: 'linear-gradient(90deg, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.6) 50%, rgba(10, 10, 10, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAX0Jw6F5ZJo4uhXC1RJFdTDXu4DzjzRKC9O1e2ThY6LqhkNxYfngxqfOjgJbc7AkwolgvMPO_Zm5Oaa50J2nWjZOwTCInv8KV3KN0VmfI3rIUyvnrT5cHHwB_jpX6cBDcb97mYAprAnN0lOJz_ws1FGu3CWg7oOqAiSZcxhbNVw3xtDlwhm5CWT5800R-4SbkCCJcdmxCEybSiUnvHZb2JRzyeEooizJ7J6eerMxOPTAkcrhcz8em0l4DJ2WmuwCNY3yRAUEG8y-j2")' }}
                        />

                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 p-12">
                            <div className="max-w-2xl space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="px-2 py-1 bg-primary/20 border border-primary/50 text-[10px] font-bold text-primary rounded-none uppercase tracking-wider">
                                        Current Offer
                                    </span>
                                    <p className="text-silver text-[10px] font-mono tracking-widest uppercase">
                                        ENERGY TRANSITION
                                    </p>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-off-white leading-tight">
                                    <span className="text-primary">20% DISCOUNT</span> ON NEXT-GEN SYSTEMS
                                </h3>
                                <p className="text-silver font-light leading-relaxed max-w-xl">
                                    Take advantage of limited-time offers for next-generation energy solutions that increase efficiency in your corporate projects.
                                </p>
                            </div>
                            <Link href="/campaigns/energy-transition">
                                <button className="bg-primary hover:bg-primary/90 text-white text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-4 transition-all">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </main>
    );
}
