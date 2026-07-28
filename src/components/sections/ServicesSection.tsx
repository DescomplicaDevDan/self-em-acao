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
  );
}