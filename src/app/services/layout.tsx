import Sidebar from "@/sections/services/Sidebar";

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen pt-20 flex bg-matte-slate">
            <Sidebar />
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}
