import { SymbolIcon } from "@/src/components/ui/SymbolIcon";
import { values } from "@/src/content/home-content";

export function ValuesSection() {
  return (
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
  );
}
