import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import RainBackground from "@/components/RainBackground";

export default function Home() {
  return (
    <>
      <RainBackground />
      <Header />
      <main className="flex-1 relative z-10 flex flex-col items-center px-5 py-12 lg:px-20 lg:py-20">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
