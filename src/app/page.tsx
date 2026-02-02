import Sidebar from "@/sections/home/Sidebar";
import Hero from "@/sections/home/Hero";
import Sectors from "@/sections/home/Sectors";
import Presence from "@/sections/home/Presence";

export default function Home() {
  return (
    <main className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-12 gap-8">
        <Sidebar />
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-32">
          <Hero />
          <Sectors />
          <Presence />
        </div>
      </div>
    </main>
  );
}
