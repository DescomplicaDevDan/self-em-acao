import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { HeroSection } from "@/src/components/sections/HeroSection";
import { MissionStrip } from "@/src/components/sections/MissionStrip";
import { ServicesSection } from "@/src/components/sections/ServicesSection";
import { HighlightsSection } from "@/src/components/sections/HighlightsSection";
import { AboutSection } from "@/src/components/sections/AboutSection";
import { ValuesSection } from "@/src/components/sections/ValuesSection";

export default function Home() {
  return (
    <main className="site-shell">
      <Header />

      <HeroSection />

      <MissionStrip />

      <ServicesSection />

      <HighlightsSection />

      <AboutSection />

      <ValuesSection />

      <Footer />
    </main>
  );
}
