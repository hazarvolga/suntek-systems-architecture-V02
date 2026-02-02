import Link from "next/link";

export default function HomeSidebar() {
    return (
        <aside className="col-span-12 lg:col-span-3">
            <div className="sticky top-32 flex flex-col gap-8">
                <div className="flex items-center gap-3 pb-6 border-b border-grid-line">
                    <div className="size-2 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                    <div>
                        <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-silver">Index</h3>
                        <p className="text-[10px] text-silver/50 font-mono">ST-NAV_01</p>
                    </div>
                </div>
                <ul className="flex flex-col gap-1">
                    <li>
                        <Link className="group flex items-center justify-between p-3 border-l-2 border-primary bg-primary/5 text-primary" href="/">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-mono opacity-50">01</span>
                                <span className="text-xs font-bold tracking-widest uppercase">Home</span>
                            </div>
                            <div className="size-2 rounded-full bg-primary/80"></div>
                        </Link>
                    </li>
                    {[
                        { id: '02', label: 'About Us', href: '/about' },
                        { id: '03', label: 'Services', href: '/services' },
                        { id: '04', label: 'Projects', href: '/projects' },
                        { id: '05', label: 'Contact', href: '/contact' }
                    ].map((item) => (
                        <li key={item.id}>
                            <Link className="group flex items-center justify-between p-3 border-l-2 border-transparent hover:border-silver/30 hover:bg-white/5 transition-all" href={item.href}>
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-mono opacity-30 group-hover:opacity-60">{item.id}</span>
                                    <span className="text-xs font-medium tracking-widest uppercase text-silver group-hover:text-off-white">{item.label}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="mt-12 p-6 border border-grid-line bg-white/2 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                        {/* Icon placeholder */}
                    </div>
                    <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-3 block">Structural Logic</span>
                    <p className="text-[11px] leading-relaxed text-silver font-light">
                        Engineering parameters defined by atmospheric load, seismic activity benchmarks, and material fatigue analysis.
                    </p>
                </div>
            </div>
        </aside>
    );
}
