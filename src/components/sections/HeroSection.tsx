export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Gabriel Batista Neuropsicologia</p>
        <h1>Uma abordagem clara e empática para o bem-estar mental.</h1>
        <p className="hero-subtitle">
          Atendimento clínico e consultoria organizacional com ciência,
          humanização e resultados aplicados a diferentes contextos.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#contato">
            Agendar consulta
          </a>
          <a className="secondary-button" href="#servicos">
            Ver serviços
          </a>
        </div>
      </div>

      <div className="portrait-card" aria-label="Área da foto profissional">
        <div className="portrait-glow" />
        <div className="portrait-person">
          <span className="coat" />
          <span className="head" />
        </div>
        <p>Foto profissional</p>
      </div>
    </section>
  );
}
