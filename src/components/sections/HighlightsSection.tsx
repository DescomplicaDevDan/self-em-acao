import { SymbolIcon } from "@/src/components/ui/SymbolIcon";
import { highlights } from "@/src/content/home-content";

export function HighlightsSection() {
  return (
    <section className="highlight-grid" aria-label="Áreas de atuação">
      {highlights.map((highlight) => (
        <article
          className="highlight-card"
          id={highlight.title === "Colaborações" ? "colaboracoes" : undefined}
          key={highlight.title}
        >
          <SymbolIcon type={highlight.icon} />
          <h3>{highlight.title}</h3>
          <p>{highlight.text}</p>
        </article>
      ))}
    </section>
  );
}