import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Suntek | Advanced Structures",
  description: "Forging advanced structures with mathematical precision and integrity. Engineering next-generation data center ecosystems.",
};

import { ContentProvider } from "@/content/provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans bg-matte-slate text-off-white antialiased selection:bg-primary selection:text-black`}>
        {/* Abstract Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
          <div className="max-w-7xl mx-auto h-full px-6 grid grid-cols-12 gap-8">
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={i} className={`border-l border-grid-line h-full ${i === 12 ? 'border-r' : ''}`} />
            ))}
          </div>
        </div>

        <ContentProvider>
          <div className="relative z-10">
            <Header />
            {children}
            <Footer />
          </div>
        </ContentProvider>
      </body>
    </html>
  );
}
