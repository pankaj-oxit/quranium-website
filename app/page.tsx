import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Slider from "@/components/slider";
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Tokenomics />

      <Slider />
      {/* <Roadmap /> */}
      {/* <Team /> */}
      <FAQ />
      <Footer />
    </main>
  );
}
