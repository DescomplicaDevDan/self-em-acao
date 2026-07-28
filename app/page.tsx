import { BrandMark } from "@/src/components/ui/BrandMark";
import { SymbolIcon } from "@/src/components/ui/SymbolIcon";
import { highlights, services, values } from "@/src/content/home-content";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";

export default function Home() {
  return (
    <main className="site-shell">
      <Header />

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Gabriel Batista Neuropsicologia</p>
          <h1>Uma abordagem clara e empatica para o bem-estar mental.</h1>
          <p className="hero-subtitle">
            Atendimento clinico e consultoria organizacional com ciencia,
            humanizacao e resultados aplicados a diferentes contextos.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contato">
              Agendar consulta
            </a>
            <a className="secondary-button" href="#servicos">
              Ver servicos
            </a>
          </div>
        </div>

        <div className="portrait-card" aria-label="Area da foto profissional">
          <div className="portrait-glow" />
          <div className="portrait-person">
            <span className="coat" />
            <span className="head" />
          </div>
          <p>Foto profissional</p>
        </div>
      </section>

      <div className="mission-strip">
        <SymbolIcon type="leaf" />
        <span>
          Desenvolvendo pessoas, Transformando contextos e Potencializando
          resultados.
        </span>
      </div>

      <section className="audience-grid" id="servicos" aria-label="Servicos">
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

      <section className="highlight-grid" aria-label="Areas de atuacao">
        {highlights.map((highlight) => (
          <article
            className="highlight-card"
            id={
              highlight.title === "Colaboracoes" ? "colaboracoes" : undefined
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
            Atuacao clinica e organizacional com escuta, metodo e clareza.
          </h2>
          <p>
            Gabriel Batista une neuropsicologia, analise do comportamento e
            experiencia em contextos humanos complexos para apoiar pessoas,
            empresas e colaboracoes estrategicas.
          </p>
          <p>
            A proposta da Self em Acao e traduzir conhecimento cientifico em
            caminhos praticos, acolhedores e mensuraveis para cada realidade.
          </p>
        </div>
      </section>

      <section className="values-section" aria-label="Valores">
        <div>
          <p className="eyebrow">Valores</p>
          <h2>Principios que orientam cada encontro.</h2>
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
