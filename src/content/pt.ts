import { image, shots, video } from "./media";
import type { Content } from "./types";

const github = (repo: string) => ({ kind: "github" as const, href: `https://github.com/merino626/${repo}` });
const download = (repo: string) => ({
  kind: "download" as const,
  href: `https://github.com/merino626/${repo}/releases/latest`,
});
const live = (href: string) => ({ kind: "live" as const, href });

const webmotorsStack = ["Node.js", ".NET", "AWS", "Docker", "Datadog", "REST APIs"];

export const pt = {
  meta: {
    title: "Luis Eduardo — Engenheiro Backend (NestJS, TypeScript, Python)",
    description:
      "Engenheiro backend que constrói APIs, integrações e serviços com NestJS, TypeScript, Python, .NET e AWS — para Santander, Webmotors e marketplaces com IA.",
  },

  nav: {
    skip: "Pular para o conteúdo",
    items: [
      { label: "Sobre", href: "#about" },
      { label: "Experiência", href: "#experience" },
      { label: "Trabalhos", href: "#work" },
      { label: "Projetos", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contato", href: "#contact" },
    ],
    resume: "Currículo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
  },

  hero: {
    badge: "Aberto a vagas remotas internacionais",
    title: "Engenheiro Backend",
    stackLine: "NestJS • TypeScript • Python • .NET • AWS",
    summary:
      "Construo APIs, integrações e serviços backend para produtos de alto tráfego e plataformas críticas de negócio — dos portais automotivos da Webmotors a sistemas do Santander e marketplaces com IA.",
    primaryCta: "Ver trabalhos",
    secondaryCta: "Fale comigo",
    imageAlt: "Diagrama em linhas de um backend distribuído: clientes, API gateway, serviços, fila e bancos de dados",
  },

  stats: {
    label: "Números principais",
    items: [
      { value: 5, suffix: "+", label: "Anos desenvolvendo software", caption: "Python, Node.js e .NET desde 2021" },
      { value: 1.8, decimals: 1, suffix: " mi", label: "Recorde de visitas", caption: "Portal WM1 · Webmotors" },
      { value: 115.6, decimals: 1, prefix: "+", suffix: "%", label: "Geração de leads", caption: "Tabela FIPE · Webmotors" },
      { value: 499, suffix: " mil", label: "Visitas", caption: "Catálogo 0 KM · Webmotors" },
      { value: 51.7, decimals: 1, suffix: "%", label: "Conversão em teste A/B", caption: "Simulação de financiamento · Catálogo 0 KM" },
    ],
    note: "Os números da Webmotors são resultados de produto reportados para os times em que trabalhei.",
  },

  about: {
    eyebrow: "Sobre",
    title: "Backend que se sustenta em produção",
    paragraphs: [
      "Sou engenheiro backend de São Paulo. Desde 2021 construo APIs e serviços para sistemas que pessoas usam todos os dias — uma plataforma de financiamento usada por milhares de consultores do Santander, um marketplace interno para colaboradores do Santander e portais automotivos de alto tráfego na Webmotors.",
      "Na Laborit trabalho hoje principalmente com NestJS e TypeScript: APIs modulares e multi-tenant sobre PostgreSQL e Prisma, autenticação JWT/OAuth/MFA, cache com Redis e funcionalidades de IA como chat conversacional com streaming via SSE, agentes de IA e integração com WhatsApp pela Meta para busca de veículos, simulações de financiamento e propostas.",
      "As partes que mais me importam são as que ninguém nota até quebrarem: modelagem de dados, integrações com terceiros, cache, pipelines de deploy e observabilidade. Entrego com Docker e GitLab CI/CD na AWS e uso o Datadog para entender o que a produção está realmente fazendo.",
      "Comecei em Python — APIs com Flask, automação, OCR e processamento de dados — e ainda uso junto com Node.js e .NET. Fora do trabalho construo produtos completos de ponta a ponta, de fluxos de pagamento com Stripe a apps desktop, para que cada decisão de arquitetura seja uma com a qual eu mesmo tive que conviver.",
    ],
    facts: [
      { label: "Foco", value: "APIs, integrações, sistemas distribuídos" },
      { label: "Stack principal", value: "NestJS · TypeScript · Python · .NET" },
      { label: "Infraestrutura", value: "AWS · Docker · GitLab CI/CD · Datadog" },
      { label: "Localização", value: "Barueri, São Paulo, Brasil (UTC−3)" },
      { label: "Idiomas", value: "Português (nativo) · Inglês (C1, EF SET)" },
    ],
    photoAlt: "Foto de Luis Eduardo",
  },

  experience: {
    eyebrow: "Experiência",
    title: "Onde venho entregando",
    jobs: [
      {
        company: "Laborit",
        role: "Engenheiro de Software Backend",
        period: "fev 2022 — atual",
        summary:
          "Desenvolvimento backend de produtos internos e plataformas para grandes clientes, com ênfase em APIs escaláveis, arquitetura, integrações, qualidade de software e confiabilidade.",
        achievements: [
          "Popmarq (Haigen Concierge Marketplace API): construí serviços backend com NestJS, TypeScript, Prisma e PostgreSQL — arquitetura modular, vários domínios de negócio e suporte multi-tenant — e o módulo de live commerce, com transmissões, reprises e chat ao vivo.",
          "Implementei funcionalidades de IA: chat conversacional com streaming via SSE, integração com agentes de IA e integração com WhatsApp pela Meta para busca de veículos, simulações de financiamento e fluxos de proposta.",
          "Entreguei autenticação JWT/OAuth/MFA, cache com Redis, integrações com serviços externos, infraestrutura AWS, pipelines de CI/CD e observabilidade com Datadog.",
          "Santander Store e Santander Turbo Portals: backend de um marketplace interno usado por milhares de colaboradores do Santander, além de funcionalidades, correções, melhorias de performance e indicadores de BI para um sistema de gestão de financiamentos usado por milhares de consultores.",
          "Contribuí com o Cockpit, plataforma com LLMs para análise automatizada de KPIs, e construí o backend em Django do site institucional da Laborit.",
        ],
        tech: ["NestJS", "TypeScript", "Node.js", "Python", "Django", "PostgreSQL", "Prisma", "Redis", "AWS", "Docker", "GitLab CI/CD", "Datadog"],
      },
      {
        company: "Webmotors",
        role: "Engenheiro de Software Backend",
        period: "jul 2022 — out 2024",
        summary:
          "Atuei em um time alocado na Webmotors, desenvolvendo e mantendo APIs e aplicações para produtos digitais de alto tráfego, com CI/CD, infraestrutura em nuvem e observabilidade com Datadog.",
        achievements: [
          "Catálogo 0 KM: evoluções em fichas técnicas, comparativos e avaliações — 499 mil visitas, crescimento de 15,4% semana a semana no tráfego orgânico e 51,7% de conversão em um teste A/B de simulação de financiamento.",
          "Tabela FIPE: melhorias na consulta de preços de veículos — 1,5 milhão de visitas, aumento de 115,6% na geração de leads e redução de 5,8% na taxa de rejeição.",
          "WM1: melhorias no portal de conteúdo automotivo, que atingiu o recorde de 1,8 milhão de visitas.",
          "Descubra 0 KM: evoluções na plataforma que ajudaram a atingir 102,8% da meta semestral de crescimento de audiência orgânica em maio de 2024.",
        ],
        tech: ["Node.js", ".NET", "C#", "AWS", "Docker", "Datadog", "CI/CD", "REST APIs"],
      },
      {
        company: "IT Green Tecnologia",
        role: "Desenvolvedor Python",
        period: "jul 2021 — jan 2022",
        summary: "Soluções backend, automação de processos, integrações de sistemas e processamento de dados para clientes.",
        achievements: [
          "Construí APIs REST com Flask, jobs agendados e fluxos de automação para processos administrativos e operacionais.",
          "Processei arquivos PDF e Excel, manipulei dados com Pandas e integrei bancos MySQL e MariaDB.",
          "Entreguei soluções de web scraping e visão computacional/OCR com OpenCV, Tesseract, PyAutoGUI e Pillow, e construí PoCs para apresentações a clientes.",
        ],
        tech: ["Python", "Flask", "Pandas", "MySQL", "MariaDB", "OpenCV", "Tesseract OCR", "RPA"],
      },
      {
        company: "GEMPI",
        role: "DBA Oracle / SQL Server",
        period: "jun 2021 — jul 2021",
        summary: "Suporte e administração de bancos de dados Oracle.",
        achievements: [
          "Manutenção, segurança e disponibilidade de bancos Oracle; rotinas SQL e PL/SQL; gestão de usuários, perfis e permissões.",
          "Monitoramento de backup e recuperação, verificação de integridade e análise de tabelas, índices e objetos do banco.",
        ],
        tech: ["Oracle", "PL/SQL", "SQL Server"],
      },
    ],
    earlierTitle: "Experiências anteriores",
    earlier: [
      { company: "CSU BR", role: "Back Office", period: "set 2020 — mar 2021" },
      { company: "Exército Brasileiro", role: "Soldado de Suporte de TI", period: "mar 2019 — mar 2020" },
    ],
    educationTitle: "Formação",
    education: {
      school: "Impacta Tecnologia",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      period: "2020 — 2021",
    },
    certificationsTitle: "Certificações",
    certifications: [
      { name: "EF SET English Certificate (C1 Advanced)", href: "https://cert.efset.org/en/a5pKEz" },
      { name: "Scrum Foundation Professional Certificate (SFPC)" },
      { name: "DevOps Essentials Professional Certificate (DEPC)" },
    ],
  },

  work: {
    eyebrow: "Trabalhos selecionados",
    title: "Plataformas que ajudei a construir para clientes",
    description:
      "Produtos públicos e sistemas internos do meu trabalho na Laborit e na Webmotors. As capturas de tela e os vídeos são das aplicações reais.",
    featured: {
      slug: "popmarq",
      name: "Popmarq",
      context: "Laborit · Haigen Concierge Marketplace API",
      description:
        "Marketplace de veículos com IA no centro: um feed infinito mistura ofertas, lives, posts e coleções; um assistente concierge refiltra o marketplace enquanto responde e consegue levar um pedido de financiamento real até a aprovação; vendedores fazem lives; e um configurador estreita um modelo até um ano/versão específico com preço atualizado na hora.",
      features: [
        {
          title: "Chat concierge com IA",
          description:
            "Agentes de IA identificam a intenção do comprador, fazem uma etapa de verificação e buscam veículos enquanto o marketplace se refiltra ao lado da conversa — com streaming via SSE na web e fluxos de busca, simulação de financiamento e proposta no WhatsApp pela Meta.",
        },
        {
          title: "Live commerce",
          description:
            "Vendedores fazem lives e publicam reprises com chat ao vivo e os veículos apresentados na transmissão, com vídeo entregue pela Mux.",
        },
        {
          title: "Núcleo do marketplace",
          description:
            "Um configurador estreita um modelo até um ano e versão específicos, atualizando preço e ficha técnica na hora, e leva direto para os anúncios reais dessa versão — sobre um backend NestJS e Prisma modular e multi-tenant, com JWT/OAuth/MFA, cache com Redis e Datadog na AWS.",
        },
        {
          title: "Descoberta: feed, coleções e posts",
          description:
            "Um feed infinito e personalizado mistura ofertas, reprises de lives, posts e reviews; coleções de marca com curadoria e posts longos com comentários e reações completam o lado social do marketplace.",
        },
        {
          title: "Notificações que agrupam em vez de inundar",
          description:
            "Construí o motor de notificações sobre uma janela de debounce com Redis: uma rajada de ações no mesmo conteúdo vira uma mensagem só, então trinta curtidas em meio minuto chegam como uma notificação, não como trinta.",
        },
      ],
      highlights: [],
      stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Redis", "SSE", "Agentes de IA", "WhatsApp (Meta)", "Mux", "AWS", "Datadog"],
      links: [],
      clips: [
        { label: "Chat com IA", ...shots.popmarq.chatClip, alt: "Pedindo ao concierge de IA um SUV familiar até R$ 150 mil: o agente identifica a intenção e busca enquanto o marketplace se refiltra, depois responde com opções (vídeo editado para encurtar a espera)" },
        { label: "Financiamento", ...shots.popmarq.financingClip, alt: "Uma conversa de financiamento completa com o concierge de IA, dos dados do comprador até uma proposta aprovada para um Hyundai HB20" },
        { label: "Feed", ...shots.popmarq.feedClip, alt: "Feed inicial infinito misturando ofertas, reprises de lives, reviews e posts, recomendados conforme a rolagem" },
        { label: "Live commerce", ...shots.popmarq.livesClip, alt: "Reprises de lives com chat e os veículos apresentados na transmissão (nomes do público desfocados)" },
        { label: "Marketplace", ...shots.popmarq.marketplaceClip, alt: "Ofertas e catálogo estreitados até um ano e versão do HB20S, com o preço atualizando na hora antes de abrir os anúncios" },
        { label: "Descobrir", ...shots.popmarq.discoverClip, alt: "Hashtags em alta, uma coleção com curadoria da Ferrari e a leitura completa de um post com comentários (nomes dos autores desfocados)" },
        { label: "Perfil", ...shots.popmarq.profileClip, alt: "Abas de perfil para veículo, serviços e avaliações, o menu de criação e notificações agrupadas pelo motor de debounce (avatares desfocados)" },
      ],
      cover: image(shots.popmarq.offerDetail, "Página de oferta do Popmarq para um Audi A3 com preço, parcelas e botão de simular financiamento"),
      gallery: [
        image(shots.popmarq.chatAnswer, "Resposta do concierge no painel lateral enquanto o marketplace mostra os SUVs compatíveis"),
        image(shots.popmarq.conversations, "Histórico de conversas com títulos gerados pela IA, separado entre conversas com IA e com lojas"),
        image(shots.popmarq.livesPage, "Página de lives com reprises e próximas transmissões (rosto de um apresentador desfocado)"),
        image(shots.popmarq.liveReplay, "Reprise de live com chat e o veículo apresentado na transmissão (nomes do público desfocados)"),
        image(shots.popmarq.offerDetail, "Página de oferta com preço, parcelas e ações “Estou interessado” e “Simular financiamento”"),
        image(shots.popmarq.catalog, "Catálogo de 0 km com carrossel de destaques e tendências por carroceria"),
        image(shots.popmarq.modelDetail, "Página do Audi Q5 2026 com fotos, seletores de ano e versão e preço inicial"),
        image(shots.popmarq.offers, "Página de ofertas com os serviços do Popmarq: assinatura, financiamento e venda do seu carro"),
      ],
    },
    items: [
      {
        slug: "santander-store",
        name: "Santander Store",
        context: "Laborit · Marketplace interno",
        description:
          "A “Lojinha Financeira”: loja interna em que colaboradores da Santander Financeira trocam saldo em pontos por peças de uniforme — ciclo completo do pedido, da navegação até um pedido feito, rastreado e cancelável.",
        highlights: [
          "Desenvolvi funcionalidades backend de um marketplace usado por milhares de colaboradores do Santander, incluindo a máquina de estados do pedido (em processamento → em análise → a caminho → entregue) e o fluxo de cancelamento.",
          "Checkout baseado em pontos: saldo, custo de cada item e endereço são validados no servidor antes de confirmar o pedido, com previsão de entrega rastreada pela JADLOG em cada pedido.",
          "Atuei em escalabilidade, integrações e confiabilidade da plataforma.",
        ],
        stack: ["Python", "Django", "Django REST Framework"],
        links: [],
        note: "Plataforma interna — sem acesso público",
        preview: video(shots.santanderStore.checkoutClip, "Adicionando uma camisa jeans ao carrinho e fazendo um pedido de verdade — terminando na tela de confirmação com o código do pedido"),
        cover: image(shots.santanderStore.dadosPessoais, "Página de perfil do colaborador com saldo de pontos e data de expiração"),
        gallery: [
          video(shots.santanderStore.browseClip, "Navegando pelo feed inicial e pela lista completa de produtos"),
          video(shots.santanderStore.productClip, "Página de produto: escolhendo a cor e depois o tamanho, com preço e botão “Adicionar” atualizando na hora"),
          video(shots.santanderStore.trackClip, "Página de acompanhamento do pedido: uma linha do tempo com quatro etapas, de processamento até entregue"),
          video(shots.santanderStore.cancelClip, "Cancelando o pedido em “Meus pedidos”, com um diálogo de confirmação antes de mover para o histórico"),
          image(shots.santanderStore.dadosPessoais, "Perfil do colaborador: nome, saldo de pontos e data de expiração, com abas para pedidos, endereços e favoritos"),
          image(shots.santanderStore.notificacoes, "Histórico de notificações: recargas de pontos e atualizações de pedido"),
        ],
      },
      {
        slug: "webmotors-catalog",
        name: "Catálogo 0 KM",
        context: "Webmotors · 2022 — 2024",
        description:
          "Catálogo de carros novos com preços, fotos, fichas técnicas, comparativo de versões e opiniões de donos para o mercado brasileiro.",
        metrics: [
          { value: "499 mil", label: "visitas" },
          { value: "+15,4%", label: "tráfego orgânico semanal" },
          { value: "51,7%", label: "conversão em teste A/B" },
        ],
        highlights: [
          "Contribuí com evoluções em fichas técnicas, comparativos e avaliações em um catálogo de alto tráfego.",
          "Um teste A/B de simulação de financiamento atingiu 51,7% de conversão.",
        ],
        stack: webmotorsStack,
        links: [live("https://www.webmotors.com.br/catalogo")],
        preview: video(shots.webmotorsCatalog.previewClip, "Navegando pelo Catálogo 0 KM por marca, depois a página do Fiat Mobi 2027 com preços e versões"),
        cover: image(shots.webmotorsCatalog.home, "Home do Catálogo 0 KM da Webmotors com busca por marca, modelo ou versão"),
        gallery: [
          image(shots.webmotorsCatalog.home, "Home do catálogo: busca por marca, modelo ou versão"),
          image(shots.webmotorsCatalog.brands, "Navegação por marca, com o comparador de carros logo abaixo"),
          image(shots.webmotorsCatalog.model, "Página do Fiat Mobi 2027 com galeria de fotos e faixa de preço sugerido"),
          image(shots.webmotorsCatalog.versions, "Comparativo de versões com ficha técnica, preços e formulário de interesse"),
        ],
      },
      {
        slug: "webmotors-fipe",
        name: "Tabela FIPE",
        context: "Webmotors · 2022 — 2024",
        description:
          "Consulta de preços de veículos que compara a referência oficial FIPE com a média de mercado da Webmotors, por estado, com histórico de preços de cada versão.",
        metrics: [
          { value: "1,5 mi", label: "visitas" },
          { value: "+115,6%", label: "geração de leads" },
          { value: "−5,8%", label: "taxa de rejeição" },
        ],
        highlights: [
          "Contribuí com melhorias que mais que dobraram a geração de leads e reduziram a taxa de rejeição.",
          "As páginas de preço combinam dados FIPE, médias Webmotors por estado, histórico de seis e doze meses e caminhos para ofertas.",
        ],
        stack: webmotorsStack,
        links: [live("https://www.webmotors.com.br/tabela-fipe")],
        preview: video(shots.webmotorsFipe.previewClip, "Resultado da Tabela FIPE para um Chevrolet Onix 2025, ofertas disponíveis e o gráfico do histórico de preços"),
        cover: image(shots.webmotorsFipe.result, "Resultado da Tabela FIPE para um Chevrolet Onix 2025 com o preço médio Webmotors"),
        gallery: [
          image(shots.webmotorsFipe.search, "Formulário de consulta: tipo de veículo, marca, modelo, ano, versão e estado"),
          image(shots.webmotorsFipe.result, "Resultado para um Chevrolet Onix 2025 comparando preços FIPE e Webmotors"),
          image(shots.webmotorsFipe.history, "Gráfico do histórico de preços dos últimos seis meses"),
          image(shots.webmotorsFipe.table, "Preços mensais FIPE e Webmotors com variação em relação ao mês anterior"),
          image(shots.webmotorsFipe.brands, "Modelos mais buscados e consulta por marca"),
        ],
      },
      {
        slug: "wm1",
        name: "WM1",
        context: "Webmotors · 2022 — 2024",
        description:
          "Portal de notícias automotivas da Webmotors: testes, comparativos, mobilidade, motos e webstories, conectado às ofertas do marketplace.",
        metrics: [{ value: "1,8 mi", label: "recorde de visitas" }],
        highlights: [
          "Contribuí com melhorias no portal, que atingiu o recorde de 1,8 milhão de visitas.",
          "As páginas de conteúdo levam o leitor às ofertas da Webmotors por uma busca de veículos integrada.",
        ],
        stack: webmotorsStack,
        links: [live("https://www.webmotors.com.br/wm1")],
        cover: image(shots.wm1.featured, "Home do WM1 com notícias automotivas em destaque"),
        gallery: [
          image(shots.wm1.featured, "Matérias em destaque na home do WM1"),
          image(shots.wm1.latest, "Últimas notícias com a lista das mais lidas"),
          image(shots.wm1.videos, "Seção de vídeos e testes"),
        ],
      },
      {
        slug: "laborit-site",
        name: "Site da Laborit",
        context: "Laborit · Django",
        description:
          "Site institucional da Laborit: a história da empresa, as seis linhas de serviço, os produtos que a equipe constrói (incluindo o Popmarq) e um formulário de contato para captação de leads, com conteúdo gerenciado por um CMS.",
        highlights: [
          "Construí o backend completo em Django, incluindo as APIs e integrações por trás do portal.",
          "O CMS controla cada seção mostrada aqui — serviços, cards de produto e o feed do blog — sem precisar de um novo deploy.",
        ],
        stack: ["Python", "Django", "REST APIs"],
        links: [live("https://laborit.com.br")],
        preview: video(shots.laboritSite.browseClip, "Uma passagem completa pelo site: hero, serviços, os produtos que a equipe constrói (o Popmarq entre eles) e o formulário de contato"),
        cover: image(shots.laboritSite.home, "Home da Laborit: “Construímos produtos e tecnologias que reinventam o mundo”"),
        gallery: [
          image(shots.laboritSite.home, "Hero da página inicial"),
          image(shots.laboritSite.services, "Serviços: IA, futuro e inovação, ciência de dados, integração e API, marketplace"),
          image(shots.laboritSite.products, "Produtos da Laborit e formulário de contato"),
        ],
      },
    ],
  },

  projects: {
    eyebrow: "Projetos pessoais",
    title: "Produtos que construí de ponta a ponta",
    description:
      "Projetos solo — pensados, construídos e publicados do banco de dados ao deploy. Todos têm repositório público com README detalhado.",
    items: [
      {
        slug: "storage-waiter",
        name: "StorageWaiter",
        context: "App desktop · Electron + node:sqlite",
        description:
          "Junta as contas grátis de nuvem que você já tem — Mega e Google Drive — em um único drive virtual: você solta o arquivo e ele vai para onde há mais espaço livre, voltando idêntico byte a byte.",
        highlights: [
          "A escolha da conta é livre de corrida sem tabela de lock: o espaço livre desconta a reserva de todo job em andamento, e essa reserva é gravada na mesma transação da decisão.",
          "A recuperação de queda é provada por um teste que mata o serviço no meio do upload e reconstrói tudo sobre o mesmo arquivo SQLite, diretório de staging e nuvem falsa.",
          "Dois provedores bem diferentes atrás de uma interface só — sessão por senha na Mega e OAuth com PKCE e rotação de refresh no Google — com credenciais cifradas pelo safeStorage do Electron (DPAPI).",
        ],
        stack: ["Electron", "React", "TypeScript", "node:sqlite", "Zustand", "Vitest"],
        links: [download("storage-waiter"), github("storage-waiter")],
        preview: video(shots.storageWaiter.uploadClipPt, "Três arquivos soltos de uma vez: cada um é colocado em uma conta e os medidores de espaço livre sobem ao vivo"),
        cover: image(shots.storageWaiter.mainViewPt, "Tela principal do StorageWaiter com três contas conectadas e seus medidores de espaço livre"),
        gallery: [
          image(shots.storageWaiter.mainViewPt, "Tela principal: três contas reais (duas Mega, uma Drive), cada uma com medidor de espaço livre ao vivo"),
          video(shots.storageWaiter.reconcileClipPt, "Reconciliar uma conta relê a cota real e a pasta na nuvem, como um job na mesma fila de transferências"),
          image(shots.storageWaiter.fileSelectedPt, "Barra de ações contextual — o download só aparece para arquivo pronto"),
          image(shots.storageWaiter.addMegaPt, "Adicionando uma conta Mega: apelido, e-mail e senha"),
          image(shots.storageWaiter.addDrivePt, "Adicionando uma conta Google Drive por OAuth de desktop"),
          image(shots.storageWaiter.dragDropPt, "Arraste e solte em qualquer ponto da janela; vai para a pasta que estiver aberta"),
        ],
      },
      {
        slug: "entrelinhas",
        name: "Entrelinhas",
        context: "Plataforma de blog · NestJS + Next.js",
        description:
          "Plataforma de blog com CMS de texto rico, recursos de comunidade e RBAC, publicada como três serviços na Vercel, Render e Supabase.",
        highlights: [
          "API NestJS versionada com RolesGuard para três papéis e duas regras independentes contra auto-bloqueio de admins.",
          "O token de recuperação de senha trafega no corpo da requisição, nunca como Bearer, então um link vazado não autentica em outros endpoints.",
          "Todo upload é decodificado e re-codificado em WebP com sharp; a busca full-text roda em tsvector do Postgres.",
        ],
        stack: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "Jest"],
        links: [live("https://blog.merinodev.tech"), github("entrelinhas-blog")],
        cover: image(shots.entrelinhas.home, "Feed inicial do Entrelinhas com últimas publicações e filtros por categoria"),
        gallery: [
          image(shots.entrelinhas.home, "Feed com últimas publicações, em alta e filtros por categoria"),
          image(shots.entrelinhas.post, "Página do post com sumário gerado automaticamente e reações"),
          video(shots.entrelinhas.commentClip, "Comentando e reagindo com UI otimista no app publicado"),
          image(shots.entrelinhas.editor, "Editor de posts baseado em Tiptap no CMS /admin"),
          image(shots.entrelinhas.sessions, "Sessões ativas com revogação por dispositivo"),
          image(shots.entrelinhas.roles, "Gestão de papéis para leitores, redatores e admins"),
          video(shots.entrelinhas.themeClip, "Modo escuro aplicado antes da hidratação, sem piscar o tema errado"),
        ],
      },
      {
        slug: "vira-cancao",
        name: "Vira Canção",
        context: "Gerador de músicas com IA · Next.js + Stripe",
        description:
          "Transforma uma história pessoal em uma música original e cantada: letras escritas por IA que o cliente edita antes de pagar, pagamentos reais com cartão e um pipeline de produção híbrido.",
        highlights: [
          "O valor cobrado é calculado no servidor; o pagamento é confirmado de forma independente por webhook ou relendo o PaymentIntent na Stripe.",
          "Uma condição de corrida na finalização de jobs resolvida com um UPDATE condicional em vez de mutex.",
          "Duas versões da letra em streaming paralelo como NDJSON, protegidas por Turnstile e cinco camadas de rate limit.",
        ],
        stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Cloudflare R2", "APIs de LLM"],
        links: [live("https://music.merinodev.tech"), github("song-generator")],
        cover: image(shots.viraCancao.landing, "Landing page do Vira Canção com a chamada principal e fotos das ocasiões"),
        gallery: [
          image(shots.viraCancao.landing, "Landing page"),
          image(shots.viraCancao.wizard, "Passo 1 do assistente: escolha da ocasião"),
          image(shots.viraCancao.lyrics, "Duas versões de letra escritas por IA, editáveis antes de qualquer pagamento"),
          video(shots.viraCancao.audioClip, "Player de áudio próprio com barra de progresso utilizável"),
          image(shots.viraCancao.checkout, "Checkout com preços calculados no servidor"),
          image(shots.viraCancao.delivered, "Pedido entregue com as duas versões e a capa"),
          video(shots.viraCancao.languageClip, "Troca entre inglês e português sem recarregar a página"),
        ],
      },
      {
        slug: "study-tracker",
        name: "Study Tracker",
        context: "App desktop · Electron + Prisma",
        description:
          "App desktop focado em privacidade para acompanhar horas de estudo e cursos online — sem conta, sem nuvem, todos os registros em um arquivo SQLite local.",
        highlights: [
          "Contrato IPC totalmente tipado entre renderer e processo principal, com os mesmos schemas Zod validando dos dois lados.",
          "Executor de migrações idempotente feito à mão, que faz backup antes de alterar o schema.",
          "Backups ZIP com checksum (manifesto SHA-256) e restauração guiada módulo a módulo.",
        ],
        stack: ["Electron", "React", "TypeScript", "Prisma", "SQLite", "Zod"],
        links: [download("study-tracker"), github("study-tracker")],
        cover: image(shots.studyTracker.dashboard, "Dashboard do Study Tracker com cronômetro e totais por período"),
        gallery: [
          image(shots.studyTracker.dashboard, "Dashboard com cronômetro, totais por período e meta semanal"),
          video(shots.studyTracker.timerClip, "Modo compacto do cronômetro fixado no canto da tela"),
          image(shots.studyTracker.courses, "Cursos com status, prioridade e progresso"),
          image(shots.studyTracker.notebook, "Caderno do curso com notas em Markdown e anexos"),
          image(shots.studyTracker.statistics, "Estatísticas por período com cards de insights"),
          image(shots.studyTracker.backup, "Pasta de backup, backups automáticos e lista de versões"),
        ],
      },
      {
        slug: "lottery-analyzer",
        name: "Lottery Analyzer",
        context: "App de dados · Python + Streamlit",
        description:
          "Análises, gerador e conferidor local-first para as oito loterias da Caixa, alimentado por uma sincronização paralela e resiliente com a API pública de resultados.",
        highlights: [
          "Sincronização que calcula concursos faltantes como diferença de conjuntos, corrigindo buracos deixados por uma API com rate limit.",
          "Downloads paralelos com backoff exponencial e jitter, que param de propósito após respostas 429/403 repetidas.",
          "Distribuído como app Windows: janela pywebview e servidor Streamlit em processos separados, amarrados por um Job Object do Windows.",
        ],
        stack: ["Python", "Streamlit", "Pandas", "SQLite", "PyInstaller"],
        links: [download("lottery-analyzer"), github("lottery-analyzer")],
        cover: image(shots.lotteryAnalyzer.analysis, "Visão geral do Lottery Analyzer com número de concursos, último prêmio e faixas de premiação"),
        gallery: [
          image(shots.lotteryAnalyzer.analysis, "Visão geral: número de concursos, último prêmio e faixas de premiação"),
          video(shots.lotteryAnalyzer.switchClip, "Trocar de loteria recalcula todos os gráficos com o histórico daquele jogo"),
          image(shots.lotteryAnalyzer.rankings, "Frequência, atraso e rankings de números quentes e frios"),
          video(shots.lotteryAnalyzer.historyClip, "Conferindo um bilhete contra mais de 3.000 sorteios em cerca de um segundo"),
          image(shots.lotteryAnalyzer.generator, "Gerador de bilhetes conferido contra o histórico na hora"),
          image(shots.lotteryAnalyzer.checker, "Conferidor para um concurso ou para todo o histórico"),
        ],
      },
      {
        slug: "markdown-preview",
        name: "markdownvizualizer",
        context: "Ferramenta dev · React + Playwright",
        description:
          "Editor local de Markdown com preview ao vivo em que “Exportar PDF” e “Imprimir” geram o mesmo resultado — útil para virar documentação em PDF a partir dos .md que as IAs geram, sem colar documentos internos em um conversor online de origem desconhecida.",
        highlights: [
          "O Exportar PDF usa um Chromium headless de verdade por um pequeno plugin do Vite, então o arquivo sai com texto vetorial em vez de captura rasterizada.",
          "Impressão e PDF importam exatamente os mesmos dois arquivos de estilo, então os dois caminhos não têm como divergir.",
          "Renderiza GFM, Mermaid, KaTeX, HTML puro e código com um destacador de passe único; nada sai da sua máquina.",
        ],
        stack: ["React", "TypeScript", "Vite", "CodeMirror 6", "Mermaid", "KaTeX", "Playwright"],
        links: [live("https://livepreview.merinodev.tech"), github("live-preview")],
        preview: video(shots.markdownPreview.typingClip, "Digitando Markdown à esquerda enquanto o preview se redesenha a cada tecla"),
        cover: image(shots.markdownPreview.mermaid, "Diagrama Mermaid e código destacado renderizados ao lado do Markdown de origem"),
        gallery: [
          image(shots.markdownPreview.mermaid, "Fluxograma Mermaid e bloco TypeScript destacado, lado a lado com o código-fonte"),
          image(shots.markdownPreview.document, "Um documento mais denso: HTML puro, Mermaid aninhado, fórmulas e tabelas GFM"),
          image(shots.markdownPreview.pdf, "O PDF exportado no visualizador do Chrome: texto vetorial selecionável em todas as páginas"),
        ],
      },
    ],
  },

  projectUi: {
    highlights: "Destaques",
    demos: "Demonstrações do produto",
    links: { github: "Código", live: "Ver site", download: "Download" },
    openGallery: "Galeria",
    media: { imageTag: "Imagem", videoTag: "Vídeo", image: "imagem", images: "imagens", video: "vídeo", videos: "vídeos" },
    galleryTitle: "{name} — galeria",
    close: "Fechar",
    previous: "Anterior",
    next: "Próxima",
    counter: "{current} / {total}",
  },

  principles: {
    eyebrow: "Princípios de engenharia",
    title: "O que exijo de todo serviço",
    items: [
      { title: "Clean Architecture", description: "Regras de negócio separadas de frameworks, transporte e armazenamento." },
      { title: "SOLID e DDD", description: "Unidades pequenas e substituíveis em módulos que seguem o domínio do negócio." },
      { title: "Segurança", description: "Menor privilégio, entrada validada e decisões de confiança tomadas no servidor." },
      { title: "Testes", description: "Testes automatizados nos caminhos que mais importam: autenticação, pagamentos, permissões." },
      { title: "Observabilidade", description: "Logs, métricas e traces para que as perguntas sobre produção tenham resposta." },
      { title: "Performance", description: "Medir primeiro: queries e índices antes do cache, cache antes de hardware." },
      { title: "Resiliência", description: "Retentativas com backoff, operações idempotentes e degradação controlada." },
      { title: "Integrações", description: "APIs de terceiros encapsuladas com timeouts, retentativas e políticas de erro explícitas." },
      { title: "CI/CD", description: "Pipelines reproduzíveis com verificações automáticas, migrações e rollback seguro." },
      { title: "Containers", description: "Imagens Docker com paridade entre local, homologação e produção." },
    ],
  },

  skills: {
    eyebrow: "Skills",
    title: "Ferramentas, agrupadas pelo problema que resolvem",
    description: "Os itens em destaque são minha stack principal hoje; os demais já usei em produção ou em projetos publicados.",
    coreLabel: "Stack principal",
    groups: [
      {
        category: "Backend",
        core: ["NestJS", "TypeScript", "Node.js", "Python"],
        items: ["Django", "Django REST Framework", "FastAPI", "Flask", ".NET / C#", "REST APIs", "SSE"],
      },
      {
        category: "Dados",
        core: ["PostgreSQL", "Prisma", "Redis"],
        items: ["MySQL / MariaDB", "Oracle / PL/SQL", "SQL Server", "SQLite", "Supabase"],
      },
      {
        category: "Cloud e DevOps",
        core: ["AWS", "Docker", "GitLab CI/CD"],
        items: ["Lambda", "ECS", "S3", "RDS", "EventBridge", "CloudFront", "GitHub Actions", "Linux"],
      },
      {
        category: "Qualidade e observabilidade",
        core: ["Datadog", "Testes automatizados"],
        items: ["Jest", "Zod", "class-validator", "Análise de performance"],
      },
      {
        category: "Segurança",
        core: ["JWT / OAuth / MFA"],
        items: ["RBAC", "Rate limiting", "Revogação de sessões", "Webhooks Stripe"],
      },
      {
        category: "IA e automação",
        core: ["Integrações com LLMs", "Agentes de IA"],
        items: ["WhatsApp (Meta)", "RPA", "OCR (OpenCV, Tesseract)", "Pandas", "Web scraping"],
      },
      {
        category: "Arquitetura",
        core: ["Arquitetura modular", "Multi-tenancy"],
        items: ["Clean Architecture", "SOLID", "DDD", "Arquitetura orientada a eventos", "RabbitMQ"],
      },
      {
        category: "Frontend e desktop",
        core: [],
        items: ["Next.js", "React", "Tailwind CSS", "Electron", "Streamlit"],
      },
    ],
  },

  github: {
    eyebrow: "GitHub",
    title: "Trabalho público",
    description: "Dados ao vivo da API do GitHub, atualizados a cada poucas horas.",
    languages: "Linguagens",
    featured: "Repositórios em destaque",
    updated: "Atualizado em {date}",
    repos: "Repos",
    followers: "Seguidores",
    since: "Desde",
    unavailable: "Os dados do GitHub estão indisponíveis no momento.",
    openProfile: "Abrir o perfil",
  },

  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar sobre o seu backend",
    description: "Aberto a vagas remotas de backend. Mande uma mensagem e eu retorno.",
    name: "Nome",
    namePlaceholder: "Seu nome",
    email: "E-mail",
    emailPlaceholder: "voce@empresa.com",
    message: "Mensagem",
    messagePlaceholder: "Vaga, time, stack e o que vocês estão construindo.",
    send: "Enviar",
    missing: "Preencha todos os campos.",
    opening: "Abrindo seu app de e-mail…",
    locationLabel: "Localização",
    locationValue: "Barueri, São Paulo, Brasil · Remoto",
  },

  footer: { builtWith: "Feito com Next.js, Tailwind CSS e Motion." },
} satisfies Content;
