import { BrandMark } from "@/src/components/ui/BrandMark";

export function AboutSection() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-visual">
        <div className="office-frame">
          <BrandMark />
          <span>Imagem institucional</span>
        </div>
      </div>

      <div className="about-copy">
        <p className="eyebrow">Sobre mim</p>
        <h2>Atuação clínica e organizacional com escuta, método e clareza.</h2>
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
  );
}
