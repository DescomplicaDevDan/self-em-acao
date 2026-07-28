import { BrandMark } from "@/src/components/ui/BrandMark";

export function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="footer-brand">
        <BrandMark />
        <span>Self em Ação</span>
      </div>
      <p>2026 Gabriel Batista Neuropsicologia | São Paulo, SP</p>
      <a href="mailto:contato@selfemacao.com.br">
        contato@selfemacao.com.br
      </a>
    </footer>
  );
}