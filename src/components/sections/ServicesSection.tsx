import { SymbolIcon } from "@/src/components/ui/SymbolIcon";
import { services } from "@/src/content/home-content";

export function ServicesSection() {
  return (
    <section className="audience-grid" id="servicos" aria-label="Serviços">
      {services.map((service) => (
        <article
          className="audience-card"
          id={service.title === "Para Pessoas" ? "pessoas" : "empresas"}
          key={service.title}
        >
          <div className="audience-card-head">
            <span className="audience-index">
              {service.title === "Para Pessoas" ? "01" : "02"}
            </span>
            <SymbolIcon type={service.icon} />
          </div>
          <div className="audience-card-copy">
            <p>{service.title === "Para Pessoas" ? "Clínico" : "Organizacional"}</p>
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
  );
}
