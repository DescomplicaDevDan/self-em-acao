# Self em Ação

Landing page institucional para a marca **Self em Ação**, projeto ligado a
atendimento clínico, neuropsicologia e consultoria organizacional.

Este projeto também funciona como registro de desenvolvimento para portfólio,
recrutamento e seleção. A ideia é documentar não apenas o resultado final, mas
também as decisões tomadas durante a construção.

## Objetivo

Criar uma página inicial responsiva, clara e profissional para apresentar:

- a identidade da Self em Ação;
- a atuação de Gabriel Batista em neuropsicologia;
- os serviços para pessoas e empresas;
- valores da marca;
- caminhos de contato e agendamento.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- CSS global customizado

## Estado atual

O projeto já possui uma primeira versão da landing page, baseada nas referências
visuais enviadas pelo cliente.

Foram implementados:

- estrutura inicial da homepage em `app/page.tsx`;
- componentes de layout em `src/components/layout`;
- componentes reutilizáveis de interface em `src/components/ui`;
- conteúdo principal centralizado em `src/content/home-content.ts`;
- identidade visual em `app/globals.css`;
- metadados e idioma em `app/layout.tsx`;
- layout responsivo para desktop e mobile;
- seções de hero, serviços, sobre, valores e rodapé;
- componentes visuais temporários para marca, ícones e área da foto.

## Decisões de desenvolvimento

### 1. Não usar prints como assets finais

As imagens enviadas pelo cliente foram usadas como referência visual, mas não
foram recortadas para virar logo ou foto final.

Motivo: prints de WhatsApp perdem qualidade e poderiam deixar o site com aspecto
amador. A decisão foi criar placeholders profissionais e preparar a interface
para receber arquivos reais depois.

### 2. Criar uma base visual antes das funcionalidades

A primeira etapa focou em tirar o projeto do template padrão do Next.js e criar
uma experiência visual alinhada à marca.

Ainda não foram implementados:

- formulário funcional;
- integração com WhatsApp;
- envio de email;
- CMS ou painel administrativo;
- analytics;
- deploy.

### 3. Organizar conteúdo em listas reutilizáveis

Os conteúdos de serviços, destaques e valores foram movidos para
`src/content/home-content.ts`. Isso facilita ajustes futuros sem mexer em toda a
estrutura do JSX.

### 4. Separar componentes antes de crescer a página

A homepage começou dentro de `app/page.tsx`, o que é aceitável no início, mas
fica difícil de manter conforme a tela cresce.

A decisão foi separar primeiro componentes pequenos e claros, sem criar uma
arquitetura exagerada:

- `Header` e `Footer` em `src/components/layout`;
- `BrandMark` e `SymbolIcon` em `src/components/ui`;
- conteúdo da página em `src/content/home-content.ts`.

Motivo: deixar `app/page.tsx` responsável por montar a página, enquanto os
detalhes visuais e textos ficam em arquivos próprios.

## Como rodar o projeto

No PowerShell do Windows, entre na pasta correta:

```powershell
cd "C:\Users\Dev\OneDrive\Desktop\Projeto\Self em Ação-Psi\self-em-acao"
```

Instale as dependências, se necessário:

```powershell
npm install
```

Rode o servidor de desenvolvimento:

```powershell
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

## Validação

Antes de considerar uma etapa pronta, rode:

```powershell
npm run lint
npm run build
```

Observação: este projeto deve ser executado pelo ambiente Windows/PowerShell.
Rodar pelo WSL pode causar erro se o terminal Linux tentar usar o Node/NPM do
Windows.

## Próximas etapas

- Substituir placeholders pela logo real.
- Adicionar foto profissional real.
- Revisar textos com o cliente.
- Definir contato oficial, WhatsApp e redes sociais.
- Melhorar CTA de agendamento.
- Criar seção de depoimentos ou autoridade profissional, se fizer sentido.
- Implementar formulario ou link direto de contato.
- Validar responsividade em diferentes tamanhos de tela.
- Preparar deploy.

## Histórico de etapas

### Etapa 1 - Base visual da landing page

Foi criada a primeira versão da pagina inicial, substituindo o template padrão
do Next.js por uma landing page institucional inspirada na proposta visual do
cliente.

Arquivos alterados:

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `src/content/home-content.ts`

Principais entregas:

- estrutura da homepage;
- paleta visual baseada na marca;
- layout responsivo;
- seções principais;
- placeholders para assets finais;
- metadados iniciais do site.

### Etapa 2 - Organização inicial de conteúdo

Foi iniciado o processo de organização de diretórios para separar conteúdo,
componentes e responsabilidades da página.

Principais entregas:

- criação de `src/content/home-content.ts`;
- centralização dos serviços, destaques e valores da home;
- atualização dos textos de serviços para refletir melhor a proposta atual:
  psicoterapia clínica, reabilitação cognitiva, avaliação neuropsicológica,
  treinamento e desenvolvimento de pessoas, recrutamento e seleção, e NR1.

### Etapa 3 - Separação de componentes de layout e UI

Foi feita uma refatoração inicial para reduzir responsabilidades dentro de
`app/page.tsx` e melhorar a organização do projeto.

Arquivos envolvidos:

- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/ui/BrandMark.tsx`
- `src/components/ui/SymbolIcon.tsx`
- `app/page.tsx`

Principais entregas:

- extração do cabeçalho para `Header`;
- extração do rodapé para `Footer`;
- isolamento da marca visual provisória em `BrandMark`;
- isolamento dos ícones CSS em `SymbolIcon`;
- correção de duplicidade de `services`, `highlights` e `values` em
  `app/page.tsx`;
- troca de `<header />` vazio por `<Header />`;
- troca de rodapé vazio por `<Footer />`.

Justificativa para commit:

Esta etapa deve ser commitada como refatoração porque melhora a estrutura interna
do código sem mudar a proposta funcional principal da página.

Mensagem de commit sugerida:

```text
refactor(home): organiza componentes e conteúdo da página inicial
```

### Etapa 4 - Extração da seção hero

Foi iniciada a separação das grandes seções da homepage. A primeira seção movida
foi o hero, por ser o bloco principal da página e concentrar título, subtítulo,
chamadas para ação e área visual da foto profissional.

Arquivos envolvidos:

- `src/components/sections/HeroSection.tsx`
- `app/page.tsx`

Principais entregas:

- criação do componente `HeroSection`;
- remoção do bloco hero diretamente de `app/page.tsx`;
- uso de `<HeroSection />` na montagem da página;
- correção de textos antigos sem acentuação em seções que ainda permanecem em
  `app/page.tsx`.

Justificativa para commit:

Esta etapa deve ser commitada como refatoração porque melhora a separação de
responsabilidades e deixa `app/page.tsx` mais próximo de um arquivo de montagem
da página.

Mensagem de commit sugerida:

```text
refactor(home): extrai seção hero da página inicial
```
