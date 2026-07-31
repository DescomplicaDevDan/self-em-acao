export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <img
        className="hero-watermark"
        src="/brand/logo-simbolo.svg"
        alt=""
        aria-hidden="true"
      />
      <div className="hero-copy">
        <p className="eyebrow">Gabriel Batista Neuropsicólogo</p>
        <h1>Uma abordagem clara e empática para o seu bem-estar</h1>
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
        <div className="portrait-badge">
          <strong>Self</strong>
          <small>
            <span>em</span> Ação
          </small>
        </div>
        <div className="portrait-person">
          <span className="coat" />
          <span className="head" />
        </div>
        <p>Foto profissional em breve</p>
      </div>
    </section>
  );
}
