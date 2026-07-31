import { BrandMark } from "@/src/components/ui/BrandMark";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Self em Ação - Início">
        <BrandMark />
        <span className="brand-name">
          <strong>Self</strong>
          <small>
            <span>em</span> Ação
          </small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#pessoas">Para Você</a>
        <a href="#empresas">Para Empresas</a>
        <a href="#colaboracoes">Colaborações</a>
      </nav>

      <a className="header-action" href="#contato">
        Agendar consulta
      </a>
    </header>
  );
}
