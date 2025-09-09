import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import RainBackground from "@/components/RainBackground";

export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <RainBackground />

      <Header />

      <div className="flex-1">
        <Hero />
        <Features />
      </div>

      <Footer />
    </main>
  );
}
