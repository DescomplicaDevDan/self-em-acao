import { BrandMark } from "@/src/components/ui/BrandMark";

export function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="footer-cta">
        <div>
          <p className="eyebrow">Contato</p>
          <h2>Vamos construir o próximo passo com clareza</h2>
        </div>
        <a className="footer-action" href="mailto:contato@selfemacao.com.br">
          contato@selfemacao.com.br
        </a>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <BrandMark />
          <span className="brand-name">
            <strong>Self</strong>
            <small>
              <span>em</span> Ação
            </small>
          </span>
        </div>
        <p>2026 Gabriel Batista Neuropsicólo | São Paulo, SP</p>
      </div>
    </footer>
  );
}
