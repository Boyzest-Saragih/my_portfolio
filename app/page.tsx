import HeroSection from "@/components/sections/HeroSection";
import { ImageSection } from "@/components/sections/ImageSection";

export default function Home() {
  return (
    <div className="w-full">
      <main className=" min-h-screen flex items-center justify-center">
        <HeroSection />
      </main>
      <section className="min-h-screen">
        <ImageSection/>
      </section>
    </div>
  );
}
