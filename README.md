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

O projeto ja possui uma primeira versao da landing page, baseada nas referencias
visuais enviadas pelo cliente.

Foram implementados:

- estrutura inicial da homepage em `app/page.tsx`;
- conteúdo principal centralizado em `src/content/home-content.ts`;
- identidade visual em `app/globals.css`;
- metadados e idioma em `app/layout.tsx`;
- layout responsivo para desktop e mobile;
- seções de hero, serviços, sobre, valores e rodapé;
- componentes visuais temporários para marca, ícones e área da foto.

## Decisoes de desenvolvimento

### 1. Não usar prints como assets finais

As imagens enviadas pelo cliente foram usadas como referencia visual, mas nao
foram recortadas para virar logo ou foto final.

Motivo: prints de WhatsApp perdem qualidade e poderiam deixar o site com aspecto
amador. A decisao foi criar placeholders profissionais e preparar a interface
para receber arquivos reais depois.

### 2. Criar uma base visual antes das funcionalidades

A primeira etapa focou em tirar o projeto do template padrao do Next.js e criar
uma experiencia visual alinhada a marca.

Ainda nao foram implementados:

- formulario funcional;
- integracao com WhatsApp;
- envio de email;
- CMS ou painel administrativo;
- analytics;
- deploy.

### 3. Organizar conteudo em listas reutilizaveis

Os conteúdos de serviços, destaques e valores foram movidos para
`src/content/home-content.ts`. Isso facilita ajustes futuros sem mexer em toda a
estrutura do JSX.

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

## Validacao

Antes de considerar uma etapa pronta, rode:

```powershell
npm run lint
npm run build
```

Observação: este projeto deve ser executado pelo ambiente Windows/PowerShell.
Rodar pelo WSL pode causar erro se o terminal Linux tentar usar o Node/NPM do
Windows.

## Proximas etapas

- Substituir placeholders pela logo real.
- Adicionar foto profissional real.
- Revisar textos com o cliente.
- Definir contato oficial, WhatsApp e redes sociais.
- Melhorar CTA de agendamento.
- Criar secao de depoimentos ou autoridade profissional, se fizer sentido.
- Implementar formulario ou link direto de contato.
- Validar responsividade em diferentes tamanhos de tela.
- Preparar deploy.

## Historico de etapas

### Etapa 1 - Base visual da landing page

Foi criada a primeira versao da pagina inicial, substituindo o template padrao
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

Mensagem de commit sugerida:

```text
refactor(home): centraliza conteúdo da página inicial
```
