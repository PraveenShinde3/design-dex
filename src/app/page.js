import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResourcesSection from "@/components/ResourcesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 items-center justify-center max-w-screen  gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="container flex-1  ">
        <Header />
        <Hero />
        <ResourcesSection />
      </div>
      <footer className="container row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
