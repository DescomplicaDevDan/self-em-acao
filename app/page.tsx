import { BrandMark } from "@/src/components/ui/BrandMark";
import { SymbolIcon } from "@/src/components/ui/SymbolIcon";
import { values } from "@/src/content/home-content";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { HeroSection } from "@/src/components/sections/HeroSection";
import { MissionStrip } from "@/src/components/sections/MissionStrip";
import { ServicesSection } from "@/src/components/sections/ServicesSection";
import { HighlightsSection } from "@/src/components/sections/HighlightsSection";

export default function Home() {
  return (
    <main className="site-shell">
      <Header />

      <HeroSection />

      <MissionStrip />

      <ServicesSection />

      <HighlightsSection />

      <section className="about-section" id="sobre">
        <div className="about-visual">
          <div className="office-frame">
            <BrandMark />
            <span>Imagem institucional</span>
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">Sobre mim</p>
          <h2>
            Atuação clínica e organizacional com escuta, método e clareza.
          </h2>
          <p>
            Gabriel Batista une neuropsicologia, análise do comportamento e
            experiência em contextos humanos complexos para apoiar pessoas,
            empresas e colaborações estratégicas.
          </p>
          <p>
            A proposta da Self em Ação é traduzir conhecimento científico em
            caminhos práticos, acolhedores e mensuráveis para cada realidade.
          </p>
        </div>
      </section>

      <section className="values-section" aria-label="Valores">
        <div>
          <p className="eyebrow">Valores</p>
          <h2>Princípios que orientam cada encontro.</h2>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <article className="value-card" key={value}>
              <SymbolIcon type={index % 2 === 0 ? "target" : "leaf"} />
              <h3>{value}</h3>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
