import { SymbolIcon } from "@/src/components/ui/SymbolIcon";
import { highlights } from "@/src/content/home-content";

export function HighlightsSection() {
  return (
    <section className="highlight-section" aria-label="Áreas de atuação">
      <div className="highlight-intro">
        <p className="eyebrow">Atuação integrada</p>
        <h2>Cuidado humano com estrutura para diferentes contextos</h2>
      </div>

      <div className="highlight-list">
        {highlights.map((highlight, index) => (
          <article
            className="highlight-card"
            id={highlight.title === "Colaborações" ? "colaboracoes" : undefined}
            key={highlight.title}
          >
            <span className="highlight-number">0{index + 1}</span>
            <SymbolIcon type={highlight.icon} />
            <div>
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
