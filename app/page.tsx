const services = [
  {
    title: "Para Pessoas",
    items: [
      "Psicoterapia clinica",
      "Modificacao de comportamento",
      "Design de vida",
    ],
    icon: "mind",
  },
  {
    title: "Para Empresas",
    items: [
      "Consultoria organizacional",
      "Gestao por contingencias",
      "Engenharia de performance",
    ],
    icon: "building",
  },
];

const highlights = [
  {
    title: "Para Pessoas",
    text: "Psicoterapia clinica e modificacao comportamental.",
    icon: "leaf",
  },
  {
    title: "Para Empresas",
    text: "Estrategias aplicadas para contextos organizacionais.",
    icon: "branch",
  },
  {
    title: "Colaboracoes",
    text: "Projetos integrados para equipes, liderancas e parceiros.",
    icon: "network",
  },
];

const values = [
  "Ciencia e empatia",
  "Evolucao constante",
  "Resultados aplicados",
  "Parcerias",
];

function BrandMark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function SymbolIcon({ type }: { type: string }) {
  return (
    <span className={`symbol symbol-${type}`} aria-hidden="true">
      <span />
    </span>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Self em Acao - Inicio">
          <BrandMark />
          <span>
            <strong>Self</strong>
            <small>em Acao</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegacao principal">
          <a href="#sobre">Sobre</a>
          <a href="#pessoas">Para Voce</a>
          <a href="#empresas">Para Empresas</a>
          <a href="#colaboracoes">Colaboracoes</a>
        </nav>

        <a className="header-action" href="#contato">
          Agendar consulta
        </a>
      </header>

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
          Desenvolvendo pessoas. Transformando contextos. Potencializando
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

      <footer className="site-footer" id="contato">
        <div className="footer-brand">
          <BrandMark />
          <span>Self em Acao</span>
        </div>
        <p>
          2026 Gabriel Batista Neuropsicologia | Sao Paulo, SP
        </p>
        <a href="mailto:contato@selfemacao.com.br">
          contato@selfemacao.com.br
        </a>
      </footer>
    </main>
  );
}
