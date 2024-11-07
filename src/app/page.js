import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 items-center justify-center w-screen  gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="container flex-1  ">
        <Header />
        <Hero />
      </div>
      <footer className="container row-start-3 flex gap-6 flex-wrap items-center justify-center">
        ss
      </footer>
    </div>
  );
}
