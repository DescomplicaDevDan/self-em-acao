import { BrandMark } from "@/src/components/ui/BrandMark";
import { SymbolIcon } from "@/src/components/ui/SymbolIcon";
import { highlights, services, values } from "@/src/content/home-content";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { HeroSection } from "@/src/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="site-shell">
      <Header />

      <HeroSection />

      <div className="mission-strip">
        <SymbolIcon type="leaf" />
        <span>
          Desenvolvendo pessoas. Transformando contextos. Potencializando
          resultados.
        </span>
      </div>

      <section className="audience-grid" id="servicos" aria-label="Serviços">
        {services.map((service) => (
          <article
            className="audience-card"
            id={service.title === "Para Pessoas" ? "pessoas" : "empresas"}
            key={service.title}
          >
            <SymbolIcon type={service.icon} />
            <div>
              <h2>{service.title}</h2>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="highlight-grid" aria-label="Áreas de atuação">
        {highlights.map((highlight) => (
          <article
            className="highlight-card"
            id={
              highlight.title === "Colaborações" ? "colaboracoes" : undefined
            }
            key={highlight.title}
          >
            <SymbolIcon type={highlight.icon} />
            <h3>{highlight.title}</h3>
            <p>{highlight.text}</p>
          </article>
        ))}
      </section>

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
