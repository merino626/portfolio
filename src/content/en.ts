import { image, shots, video } from "./media";
import type { Content } from "./types";

const github = (repo: string) => ({ kind: "github" as const, href: `https://github.com/merino626/${repo}` });
const download = (repo: string) => ({
  kind: "download" as const,
  href: `https://github.com/merino626/${repo}/releases/latest`,
});
const live = (href: string) => ({ kind: "live" as const, href });

const webmotorsStack = ["Node.js", ".NET", "AWS", "Docker", "Datadog", "REST APIs"];

export const en = {
  meta: {
    title: "Luis Eduardo — Backend Engineer (NestJS, TypeScript, Python)",
    description:
      "Backend engineer building APIs, integrations and backend services with NestJS, TypeScript, Python, .NET and AWS — for Santander, Webmotors and AI-powered marketplaces.",
  },

  nav: {
    skip: "Skip to content",
    items: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Work", href: "#work" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    resume: "Resume",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },

  hero: {
    badge: "Open to international remote roles",
    title: "Backend Engineer",
    stackLine: "NestJS • TypeScript • Python • .NET • AWS",
    summary:
      "I build APIs, integrations and backend services for high-traffic products and business-critical platforms — from Webmotors' automotive portals to Santander systems and AI-powered marketplaces.",
    primaryCta: "View work",
    secondaryCta: "Contact me",
    imageAlt: "Line diagram of a distributed backend: clients, an API gateway, services, a queue and databases",
  },

  stats: {
    label: "Key numbers",
    items: [
      { value: 5, suffix: "+", label: "Years building software", caption: "Python, Node.js and .NET since 2021" },
      { value: 1.8, decimals: 1, suffix: "M", label: "Record visits", caption: "WM1 portal · Webmotors" },
      { value: 115.6, decimals: 1, prefix: "+", suffix: "%", label: "Lead generation", caption: "FIPE Table · Webmotors" },
      { value: 499, suffix: "K", label: "Visits", caption: "0 KM Catalog · Webmotors" },
      { value: 51.7, decimals: 1, suffix: "%", label: "A/B test conversion", caption: "Financing simulation · 0 KM Catalog" },
    ],
    note: "Webmotors figures are product results reported for the teams I worked on.",
  },

  about: {
    eyebrow: "About",
    title: "Backend work that holds up in production",
    paragraphs: [
      "I'm a backend engineer from São Paulo, Brazil. Since 2021 I've built APIs and backend services for software people rely on every day — a financing platform used by thousands of Santander consultants, an internal marketplace for Santander employees, and high-traffic automotive portals at Webmotors.",
      "At Laborit I currently work mostly with NestJS and TypeScript: modular, multi-tenant APIs on PostgreSQL and Prisma, JWT/OAuth/MFA authentication, Redis caching, and AI features such as conversational chat streamed over SSE, AI agents and a WhatsApp integration through Meta for vehicle search, financing simulations and proposals.",
      "The parts I care about most are the ones nobody notices until they break: data models, third-party integrations, caching, deploy pipelines and observability. I ship with Docker and GitLab CI/CD on AWS, and use Datadog to understand what production is really doing.",
      "Python is where I started — Flask APIs, automation, OCR and data processing — and I still use it alongside Node.js and .NET. Outside work I build complete products end to end, from Stripe payment flows to desktop apps, so every architectural decision is one I've had to live with.",
    ],
    facts: [
      { label: "Focus", value: "APIs, integrations, distributed systems" },
      { label: "Primary stack", value: "NestJS · TypeScript · Python · .NET" },
      { label: "Infrastructure", value: "AWS · Docker · GitLab CI/CD · Datadog" },
      { label: "Based in", value: "Barueri, São Paulo, Brazil (UTC−3)" },
      { label: "Languages", value: "Portuguese (native) · English (C1, EF SET)" },
    ],
    photoAlt: "Portrait of Luis Eduardo",
  },

  experience: {
    eyebrow: "Experience",
    title: "Where I've been shipping",
    jobs: [
      {
        company: "Laborit",
        role: "Backend Software Engineer",
        period: "Feb 2022 — Present",
        summary:
          "Backend development for internal products and platforms for large clients, with emphasis on scalable APIs, architecture, integrations, software quality and reliability.",
        achievements: [
          "Popmarq (Haigen Concierge Marketplace API): built backend services with NestJS, TypeScript, Prisma and PostgreSQL — modular architecture, several business domains and multi-tenant support — plus the live commerce module with streams, replays and live chat.",
          "Implemented AI features: conversational chat with SSE streaming, AI agent integration and WhatsApp integration through Meta for vehicle search, financing simulations and proposal workflows.",
          "Delivered JWT/OAuth/MFA authentication, Redis caching, external service integrations, AWS infrastructure, CI/CD pipelines and Datadog observability.",
          "Santander Store and Santander Turbo Portals: backend for an internal marketplace used by thousands of Santander employees, plus features, bug fixes, performance work and BI indicators for a financing management system used by thousands of consultants.",
          "Contributed to Cockpit, an LLM-powered platform for automated KPI analysis, and built the Django backend of the Laborit corporate website.",
        ],
        tech: ["NestJS", "TypeScript", "Node.js", "Python", "Django", "PostgreSQL", "Prisma", "Redis", "AWS", "Docker", "GitLab CI/CD", "Datadog"],
      },
      {
        company: "Webmotors",
        role: "Backend Software Engineer",
        period: "Jul 2022 — Oct 2024",
        summary:
          "Worked on a team embedded at Webmotors, developing and maintaining APIs and applications for high-traffic digital products, with CI/CD, cloud infrastructure and Datadog observability.",
        achievements: [
          "0 KM Vehicle Catalog: evolutions to specifications, comparisons and reviews — 499K visits, 15.4% week-over-week organic traffic growth and a 51.7% conversion rate in an A/B test for financing simulations.",
          "FIPE Table: improvements to the vehicle price lookup — 1.5M visits, a 115.6% increase in lead generation and a 5.8% lower bounce rate.",
          "WM1: improvements to the automotive content portal, which reached a record 1.8M visits.",
          "Discover 0 KM Vehicles: platform evolutions that helped reach 102.8% of the semiannual organic audience growth target in May 2024.",
        ],
        tech: ["Node.js", ".NET", "C#", "AWS", "Docker", "Datadog", "CI/CD", "REST APIs"],
      },
      {
        company: "IT Green Tecnologia",
        role: "Python Developer",
        period: "Jul 2021 — Jan 2022",
        summary: "Backend solutions, process automation, system integrations and data processing for clients.",
        achievements: [
          "Built REST APIs with Flask, scheduled jobs and automation workflows for administrative and operational processes.",
          "Processed PDF and Excel files, manipulated data with Pandas and integrated MySQL and MariaDB databases.",
          "Delivered web scraping and computer-vision/OCR solutions with OpenCV, Tesseract, PyAutoGUI and Pillow, and built PoCs for client presentations.",
        ],
        tech: ["Python", "Flask", "Pandas", "MySQL", "MariaDB", "OpenCV", "Tesseract OCR", "RPA"],
      },
      {
        company: "GEMPI",
        role: "Oracle / SQL Server Database Administrator",
        period: "Jun 2021 — Jul 2021",
        summary: "Support and administration for Oracle databases.",
        achievements: [
          "Maintenance, security and availability of Oracle databases; SQL and PL/SQL routines; user, profile and permission management.",
          "Backup and recovery monitoring, integrity checks and analysis of tables, indexes and database objects.",
        ],
        tech: ["Oracle", "PL/SQL", "SQL Server"],
      },
    ],
    earlierTitle: "Earlier roles",
    earlier: [
      { company: "CSU BR", role: "Back Office", period: "Sep 2020 — Mar 2021" },
      { company: "Brazilian Army", role: "IT Support Soldier", period: "Mar 2019 — Mar 2020" },
    ],
    educationTitle: "Education",
    education: {
      school: "Impacta Tecnologia",
      degree: "Technologist, Systems Analysis and Development",
      period: "2020 — 2021",
    },
    certificationsTitle: "Certifications",
    certifications: [
      { name: "EF SET English Certificate (C1 Advanced)", href: "https://cert.efset.org/en/a5pKEz" },
      { name: "Scrum Foundation Professional Certificate (SFPC)" },
      { name: "DevOps Essentials Professional Certificate (DEPC)" },
    ],
  },

  work: {
    eyebrow: "Selected work",
    title: "Platforms I helped build for clients",
    description:
      "Public products and internal systems from my work at Laborit and Webmotors. Screenshots and videos are from the real applications.",
    featured: {
      slug: "popmarq",
      name: "Popmarq",
      context: "Laborit · Haigen Concierge Marketplace API",
      description:
        "An AI-first vehicle marketplace: an infinite feed mixes offers, live streams, posts and collections; a concierge assistant re-filters the marketplace as it answers and can walk a real financing application through to approval; sellers go live; and a configurator narrows a model down to one year/version with a live price update.",
      features: [
        {
          title: "AI concierge chat",
          description:
            "AI agents identify the buyer's intent, run a verification step and search vehicles while the marketplace re-filters beside the conversation — streamed over SSE on the web, with vehicle search, financing simulation and proposal flows on WhatsApp through Meta.",
        },
        {
          title: "Live commerce",
          description:
            "Sellers go live and publish replays with a live chat and the vehicles featured in the stream, with video delivered through Mux.",
        },
        {
          title: "Marketplace core",
          description:
            "A configurator narrows a model down to one year and version, updating price and specs live, then hands off to that trim's actual listings — on a modular, multi-tenant NestJS and Prisma backend with JWT/OAuth/MFA, Redis caching and Datadog on AWS.",
        },
        {
          title: "Discovery: feed, collections and posts",
          description:
            "An infinite personalized feed blends offers, live replays, posts and reviews; curated brand collections and long-form posts with comments and reactions round out the social side of the marketplace.",
        },
        {
          title: "Notifications that batch instead of flooding",
          description:
            "I built the notification engine around a Redis-backed debounce window: a burst of actions on the same content is grouped into one message, so thirty likes in half a minute reach the user as a single notification instead of thirty.",
        },
      ],
      highlights: [],
      stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Redis", "SSE", "AI agents", "WhatsApp (Meta)", "Mux", "AWS", "Datadog"],
      links: [],
      clips: [
        { label: "AI Chat", ...shots.popmarq.chatClip, alt: "Asking the AI concierge for a family SUV under R$ 150k: the agent identifies the intent and searches while the marketplace re-filters, then answers with options (edited to shorten the wait)" },
        { label: "Financing", ...shots.popmarq.financingClip, alt: "A full financing conversation with the AI concierge, from the buyer's details through to an approved proposal for a Hyundai HB20" },
        { label: "Feed", ...shots.popmarq.feedClip, alt: "The infinite home feed mixing offers, live replays, reviews and posts, recommended as you scroll" },
        { label: "Live commerce", ...shots.popmarq.livesClip, alt: "Live replays with chat and the vehicles featured in the stream (viewer names blurred)" },
        { label: "Marketplace", ...shots.popmarq.marketplaceClip, alt: "Offers and catalog browsing narrowed down to one HB20S year and version, with the price updating live before opening its listings" },
        { label: "Discover", ...shots.popmarq.discoverClip, alt: "Trending hashtags, a curated Ferrari collection and a full post read with comments (commenter names blurred)" },
        { label: "Profile", ...shots.popmarq.profileClip, alt: "Profile tabs for vehicle, services and reviews, the create menu, and grouped notifications from the debounce engine (avatars blurred)" },
      ],
      cover: image(shots.popmarq.offerDetail, "Popmarq offer page for an Audi A3 with price, installments and a financing simulation button"),
      gallery: [
        image(shots.popmarq.chatAnswer, "The concierge's answer in the side panel while the marketplace shows matching SUVs"),
        image(shots.popmarq.conversations, "Conversation history with AI-generated titles, split between AI and store chats"),
        image(shots.popmarq.livesPage, "Lives page with replays and upcoming streams (a presenter's face blurred)"),
        image(shots.popmarq.liveReplay, "Live replay with chat and the vehicle featured in the stream (viewer names blurred)"),
        image(shots.popmarq.offerDetail, "Offer page with price, installments, “I'm interested” and “Simulate financing” actions"),
        image(shots.popmarq.catalog, "New-car catalog with a featured model carousel and trends by body type"),
        image(shots.popmarq.modelDetail, "Model page for the Audi Q5 2026 with photos, year and version selectors and starting price"),
        image(shots.popmarq.offers, "Offers page with Popmarq services: car subscription, financing and selling your car"),
      ],
    },
    items: [
      {
        slug: "santander-store",
        name: "Santander Store",
        context: "Laborit · Internal marketplace",
        description:
          "“Lojinha Financeira”: the internal store where Santander Financeira employees redeem a points balance for uniform pieces — full order lifecycle, from browsing to a placed, tracked and cancellable order.",
        highlights: [
          "Developed backend functionality for a marketplace used by thousands of Santander employees, including the order state machine (processing → under review → shipped → delivered) and cancellation flow.",
          "Points-based checkout: balance, per-item cost and address are validated server-side before an order is confirmed, with a JADLOG-tracked shipping estimate attached to every order.",
          "Worked on the platform's scalability, integrations and reliability.",
        ],
        stack: ["Python", "Django", "Django REST Framework"],
        links: [],
        note: "Internal platform — no public access",
        preview: video(shots.santanderStore.checkoutClip, "Adding a denim shirt to the cart and placing a real order — ending on the order-confirmation screen with its code"),
        cover: image(shots.santanderStore.dadosPessoais, "Employee profile page with points balance and expiry date"),
        gallery: [
          video(shots.santanderStore.browseClip, "Browsing the home feed and the full product list"),
          video(shots.santanderStore.productClip, "Product page: choosing the color, then a size, with the price and “Adicionar” button updating live"),
          video(shots.santanderStore.trackClip, "Order tracking page: a four-stage timeline from processing to delivered"),
          video(shots.santanderStore.cancelClip, "Cancelling the order from “Meus pedidos”, with a confirmation dialog before it moves to order history"),
          image(shots.santanderStore.dadosPessoais, "Employee profile: name, points balance and expiry date, with tabs for orders, addresses and favorites"),
          image(shots.santanderStore.notificacoes, "Notification history: point recharges and order updates"),
        ],
      },
      {
        slug: "webmotors-catalog",
        name: "0 KM Vehicle Catalog",
        context: "Webmotors · 2022 — 2024",
        description:
          "New-car catalog with prices, photos, technical specifications, version comparisons and owner reviews for the Brazilian market.",
        metrics: [
          { value: "499K", label: "visits" },
          { value: "+15.4%", label: "WoW organic traffic" },
          { value: "51.7%", label: "A/B test conversion" },
        ],
        highlights: [
          "Contributed to evolutions of specifications, comparisons and reviews on a high-traffic catalog.",
          "An A/B test for financing simulations reached a 51.7% conversion rate.",
        ],
        stack: webmotorsStack,
        links: [live("https://www.webmotors.com.br/catalogo")],
        preview: video(shots.webmotorsCatalog.previewClip, "Browsing the 0 KM catalog by brand, then the Fiat Mobi 2027 page with prices and versions"),
        cover: image(shots.webmotorsCatalog.home, "Webmotors 0 KM catalog home with a search bar for brand, model or version"),
        gallery: [
          image(shots.webmotorsCatalog.home, "Catalog home: search by brand, model or version"),
          image(shots.webmotorsCatalog.brands, "Browsing by brand, with the car comparison tool below"),
          image(shots.webmotorsCatalog.model, "Model page for the Fiat Mobi 2027 with photo gallery and suggested price range"),
          image(shots.webmotorsCatalog.versions, "Version comparison with specifications, prices and lead form"),
        ],
      },
      {
        slug: "webmotors-fipe",
        name: "FIPE Table",
        context: "Webmotors · 2022 — 2024",
        description:
          "Vehicle price lookup comparing the official FIPE reference with Webmotors' own market average, by state, with price history for every version.",
        metrics: [
          { value: "1.5M", label: "visits" },
          { value: "+115.6%", label: "lead generation" },
          { value: "−5.8%", label: "bounce rate" },
        ],
        highlights: [
          "Contributed to improvements that more than doubled lead generation and lowered the bounce rate.",
          "Price pages combine FIPE data, Webmotors averages per state, six- and twelve-month history and paths into live offers.",
        ],
        stack: webmotorsStack,
        links: [live("https://www.webmotors.com.br/tabela-fipe")],
        preview: video(shots.webmotorsFipe.previewClip, "FIPE Table result for a Chevrolet Onix 2025, available offers and the price history chart"),
        cover: image(shots.webmotorsFipe.result, "FIPE Table result for a Chevrolet Onix 2025 with the Webmotors average price"),
        gallery: [
          image(shots.webmotorsFipe.search, "Lookup form: vehicle type, brand, model, year, version and state"),
          image(shots.webmotorsFipe.result, "Result page for a Chevrolet Onix 2025 comparing FIPE and Webmotors prices"),
          image(shots.webmotorsFipe.history, "Six-month price history chart for the selected version"),
          image(shots.webmotorsFipe.table, "Monthly FIPE and Webmotors prices with month-over-month variation"),
          image(shots.webmotorsFipe.brands, "Most searched models and lookup by brand"),
        ],
      },
      {
        slug: "wm1",
        name: "WM1",
        context: "Webmotors · 2022 — 2024",
        description:
          "Webmotors' automotive news portal: reviews, comparisons, mobility, motorcycles and web stories, connected to the marketplace's offers.",
        metrics: [{ value: "1.8M", label: "record visits" }],
        highlights: [
          "Contributed to portal improvements that reached a record 1.8 million visits.",
          "Content pages lead readers into Webmotors offers through an integrated vehicle search.",
        ],
        stack: webmotorsStack,
        links: [live("https://www.webmotors.com.br/wm1")],
        cover: image(shots.wm1.featured, "WM1 home with featured automotive news"),
        gallery: [
          image(shots.wm1.featured, "Featured stories on the WM1 home page"),
          image(shots.wm1.latest, "Latest news with the most-read sidebar"),
          image(shots.wm1.videos, "Video reviews section"),
        ],
      },
      {
        slug: "laborit-site",
        name: "Laborit website",
        context: "Laborit · Django",
        description:
          "Laborit's institutional website: company story, the six service lines, in-house products (including Popmarq) and a lead-capture contact form, with content managed through a CMS.",
        highlights: [
          "Built the complete backend in Django, including the APIs and integrations behind the portal.",
          "The CMS drives every section shown here — services, product cards and the blog feed — without a redeploy.",
        ],
        stack: ["Python", "Django", "REST APIs"],
        links: [live("https://laborit.com.br")],
        preview: video(shots.laboritSite.browseClip, "A full pass through the site: hero, services, the products the team ships (Popmarq among them), and the contact form"),
        cover: image(shots.laboritSite.home, "Laborit home page: “Construímos produtos e tecnologias que reinventam o mundo”"),
        gallery: [
          image(shots.laboritSite.home, "Home page hero"),
          image(shots.laboritSite.services, "Services: AI, future and innovation, data science, integration and API, marketplace"),
          image(shots.laboritSite.products, "Laborit products and the contact form"),
        ],
      },
    ],
  },

  projects: {
    eyebrow: "Side projects",
    title: "Products I built end to end",
    description:
      "Solo projects — designed, built and shipped from database to deploy. Each one has a public repository with a detailed README.",
    items: [
      {
        slug: "storage-waiter",
        name: "StorageWaiter",
        context: "Desktop app · Electron + node:sqlite",
        description:
          "Pools the free cloud accounts you already have — Mega and Google Drive — into one virtual drive: drop a file in and it lands wherever has the most free space, then comes back byte-identical.",
        highlights: [
          "Placement is race-free without a lock table: free space subtracts every in-flight job's reservation, and that reservation is written in the same transaction as the decision.",
          "Crash recovery is proven by a test that kills the service mid-upload and rebuilds it over the same SQLite file, staging directory and fake cloud.",
          "Two very different providers behind one interface — Mega password sessions and Google OAuth with PKCE and refresh rotation — with credentials encrypted through Electron safeStorage (DPAPI).",
        ],
        stack: ["Electron", "React", "TypeScript", "node:sqlite", "Zustand", "Vitest"],
        links: [download("storage-waiter"), github("storage-waiter")],
        preview: video(shots.storageWaiter.uploadClipEn, "Three files dropped at once: each one is placed on an account and every free-space meter grows live"),
        cover: image(shots.storageWaiter.mainViewEn, "StorageWaiter main view with three connected accounts and their free-space meters"),
        gallery: [
          image(shots.storageWaiter.mainViewEn, "Main view: three real accounts (two Mega, one Drive), each with a live free-space meter"),
          video(shots.storageWaiter.reconcileClipEn, "Reconciling an account re-reads its real quota and cloud folder, as a job in the same transfer queue"),
          image(shots.storageWaiter.fileSelectedEn, "Contextual toolbar — download only appears for a file that is ready"),
          image(shots.storageWaiter.addMegaEn, "Adding a Mega account: nickname, e-mail and password"),
          image(shots.storageWaiter.addDriveEn, "Adding a Google Drive account through desktop OAuth"),
          image(shots.storageWaiter.dragDropEn, "Drag and drop anywhere in the window; it targets whichever folder is open"),
        ],
      },
      {
        slug: "entrelinhas",
        name: "Entrelinhas",
        context: "Blog platform · NestJS + Next.js",
        description:
          "A blog platform with a rich-text CMS, community features and RBAC, deployed as three services on Vercel, Render and Supabase.",
        highlights: [
          "Versioned NestJS API with a RolesGuard for three roles and two independent anti-lockout rules.",
          "Password-recovery tokens travel in the request body, never as a Bearer header, so a leaked link can't authenticate anywhere else.",
          "Every upload is decoded and re-encoded to WebP with sharp; full-text search runs on Postgres tsvector.",
        ],
        stack: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "Jest"],
        links: [live("https://blog.merinodev.tech"), github("entrelinhas-blog")],
        cover: image(shots.entrelinhas.home, "Entrelinhas home feed with latest posts and category filters"),
        gallery: [
          image(shots.entrelinhas.home, "Home feed with latest posts, trending and category filters"),
          image(shots.entrelinhas.post, "Post page with an auto-generated table of contents and reactions"),
          video(shots.entrelinhas.commentClip, "Commenting and reacting with optimistic UI on the live app"),
          image(shots.entrelinhas.editor, "Tiptap-based post editor in the /admin CMS"),
          image(shots.entrelinhas.sessions, "Active sessions with per-device revocation"),
          image(shots.entrelinhas.roles, "Role management for readers, writers and admins"),
          video(shots.entrelinhas.themeClip, "Dark mode applied before hydration, with no flash of the wrong theme"),
        ],
      },
      {
        slug: "vira-cancao",
        name: "Vira Canção",
        context: "AI song generator · Next.js + Stripe",
        description:
          "Turns a personal story into an original, sung song: AI-written lyrics the customer edits before paying, real card payments and a hybrid production pipeline.",
        highlights: [
          "The charged amount is computed server-side; payment is confirmed independently by webhook or by re-reading the PaymentIntent from Stripe.",
          "A duplicate-finalize race condition closed with a conditional UPDATE instead of a mutex.",
          "Two lyric versions streamed in parallel as NDJSON, behind Turnstile and five stacked rate-limit layers.",
        ],
        stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Cloudflare R2", "LLM APIs"],
        links: [live("https://music.merinodev.tech"), github("song-generator")],
        cover: image(shots.viraCancao.landing, "Vira Canção landing page: “Your story becomes a song”"),
        gallery: [
          image(shots.viraCancao.landing, "Landing page"),
          image(shots.viraCancao.wizard, "Wizard step 1: choosing the occasion"),
          image(shots.viraCancao.lyrics, "Two AI-written lyric versions, editable before any payment"),
          video(shots.viraCancao.audioClip, "Custom audio player with a usable seek bar"),
          image(shots.viraCancao.checkout, "Checkout with server-computed prices"),
          image(shots.viraCancao.delivered, "Delivered order with both takes and cover art"),
          video(shots.viraCancao.languageClip, "Switching between English and Portuguese without a reload"),
        ],
      },
      {
        slug: "study-tracker",
        name: "Study Tracker",
        context: "Desktop app · Electron + Prisma",
        description:
          "Privacy-first desktop app to track study hours and online courses — no account, no cloud, every record in a local SQLite file.",
        highlights: [
          "Fully typed IPC contract between renderer and main process, with the same Zod schemas validating on both sides.",
          "Hand-rolled idempotent migration runner that takes a backup before touching the schema.",
          "Checksummed ZIP backups (SHA-256 manifest) with a guided, module-by-module restore.",
        ],
        stack: ["Electron", "React", "TypeScript", "Prisma", "SQLite", "Zod"],
        links: [download("study-tracker"), github("study-tracker")],
        cover: image(shots.studyTracker.dashboard, "Study Tracker dashboard with timer and period totals"),
        gallery: [
          image(shots.studyTracker.dashboard, "Dashboard with timer, period totals and weekly goal"),
          video(shots.studyTracker.timerClip, "Compact timer mode docked to the corner of the screen"),
          image(shots.studyTracker.courses, "Courses with status, priority and progress"),
          image(shots.studyTracker.notebook, "Course notebook with Markdown notes and attachments"),
          image(shots.studyTracker.statistics, "Statistics per period with insight cards"),
          image(shots.studyTracker.backup, "Backup folder, automatic backups and version list"),
        ],
      },
      {
        slug: "lottery-analyzer",
        name: "Lottery Analyzer",
        context: "Data app · Python + Streamlit",
        description:
          "Local-first analytics, ticket generator and checker for Brazil's eight national lottery games, fed by a resilient parallel sync of Caixa's public results API.",
        highlights: [
          "Gap-aware sync computes missing contests as a set difference, so holes left by a rate-limited API are repaired on the next run.",
          "Parallel downloads with exponential backoff and jitter that stop on purpose after repeated 429/403 responses.",
          "Ships as a Windows app: pywebview window and Streamlit server in separate processes, tied together by a Windows Job Object.",
        ],
        stack: ["Python", "Streamlit", "Pandas", "SQLite", "PyInstaller"],
        links: [download("lottery-analyzer"), github("lottery-analyzer")],
        cover: image(shots.lotteryAnalyzer.analysis, "Lottery Analyzer overview with contest count, last jackpot and prize tiers"),
        gallery: [
          image(shots.lotteryAnalyzer.analysis, "Analysis overview: contest count, last jackpot and prize breakdown"),
          video(shots.lotteryAnalyzer.switchClip, "Switching games recomputes every chart against that game's history"),
          image(shots.lotteryAnalyzer.rankings, "Number frequency, delay and hot/cold rankings"),
          video(shots.lotteryAnalyzer.historyClip, "Checking one ticket against 3,000+ past draws in about a second"),
          image(shots.lotteryAnalyzer.generator, "Ticket generator, checked against history on the spot"),
          image(shots.lotteryAnalyzer.checker, "Checker for a single contest or the full history"),
        ],
      },
      {
        slug: "markdown-preview",
        name: "markdownvizualizer",
        context: "Dev tool · React + Playwright",
        description:
          "Local Markdown editor with live preview where “Export PDF” and “Print” produce identical output — useful for turning the .md files AI tools generate into documentation PDFs, without pasting internal documents into an unknown online converter.",
        highlights: [
          "Export PDF drives a real headless Chromium through a small Vite plugin, so the file is vector text instead of a rasterized screenshot.",
          "Print and PDF import the very same two stylesheets, so the two paths cannot drift apart.",
          "Renders GFM, Mermaid, KaTeX, raw HTML and code through a single-pass highlighter; nothing ever leaves the machine.",
        ],
        stack: ["React", "TypeScript", "Vite", "CodeMirror 6", "Mermaid", "KaTeX", "Playwright"],
        links: [live("https://livepreview.merinodev.tech"), github("live-preview")],
        preview: video(shots.markdownPreview.typingClip, "Typing Markdown on the left while the preview re-renders on every keystroke"),
        cover: image(shots.markdownPreview.mermaid, "Mermaid diagram and highlighted code rendered next to their Markdown source"),
        gallery: [
          image(shots.markdownPreview.mermaid, "Mermaid flowchart and a syntax-highlighted TypeScript block, side by side with the source"),
          image(shots.markdownPreview.document, "A denser document: raw HTML, nested Mermaid, math and GFM tables"),
          image(shots.markdownPreview.pdf, "The exported PDF in Chrome's viewer: selectable vector text across every page"),
        ],
      },
    ],
  },

  projectUi: {
    highlights: "Highlights",
    demos: "Product demos",
    links: { github: "Code", live: "Live site", download: "Download" },
    openGallery: "Gallery",
    media: { imageTag: "Image", videoTag: "Video", image: "image", images: "images", video: "video", videos: "videos" },
    galleryTitle: "{name} — gallery",
    close: "Close",
    previous: "Previous",
    next: "Next",
    counter: "{current} / {total}",
  },

  principles: {
    eyebrow: "Engineering principles",
    title: "What I hold every service to",
    items: [
      { title: "Clean Architecture", description: "Business rules kept apart from frameworks, transport and storage." },
      { title: "SOLID & DDD", description: "Small, replaceable units inside modules that follow the business domain." },
      { title: "Security", description: "Least privilege, validated input and trust decisions made on the server." },
      { title: "Testing", description: "Automated tests on the paths that matter most: auth, payments, permissions." },
      { title: "Observability", description: "Logs, metrics and traces so production questions have answers." },
      { title: "Performance", description: "Measure first: queries and indexes before caching, caching before hardware." },
      { title: "Resilience", description: "Retries with backoff, idempotent operations and graceful degradation." },
      { title: "Integrations", description: "Third-party APIs wrapped with explicit timeouts, retries and error policies." },
      { title: "CI/CD", description: "Reproducible pipelines with automated checks, migrations and safe rollbacks." },
      { title: "Containers", description: "Docker images with parity between local, staging and production." },
    ],
  },

  skills: {
    eyebrow: "Skills",
    title: "Tooling, grouped by the problem it solves",
    description: "Highlighted items are my core stack today; the rest I've used in production or in shipped projects.",
    coreLabel: "Core stack",
    groups: [
      {
        category: "Backend",
        core: ["NestJS", "TypeScript", "Node.js", "Python"],
        items: ["Django", "Django REST Framework", "FastAPI", "Flask", ".NET / C#", "REST APIs", "SSE"],
      },
      {
        category: "Data",
        core: ["PostgreSQL", "Prisma", "Redis"],
        items: ["MySQL / MariaDB", "Oracle / PL/SQL", "SQL Server", "SQLite", "Supabase"],
      },
      {
        category: "Cloud & DevOps",
        core: ["AWS", "Docker", "GitLab CI/CD"],
        items: ["Lambda", "ECS", "S3", "RDS", "EventBridge", "CloudFront", "GitHub Actions", "Linux"],
      },
      {
        category: "Quality & observability",
        core: ["Datadog", "Automated testing"],
        items: ["Jest", "Zod", "class-validator", "Performance troubleshooting"],
      },
      {
        category: "Security",
        core: ["JWT / OAuth / MFA"],
        items: ["RBAC", "Rate limiting", "Session revocation", "Stripe webhooks"],
      },
      {
        category: "AI & automation",
        core: ["LLM integrations", "AI agents"],
        items: ["WhatsApp (Meta)", "RPA", "OCR (OpenCV, Tesseract)", "Pandas", "Web scraping"],
      },
      {
        category: "Architecture",
        core: ["Modular architecture", "Multi-tenancy"],
        items: ["Clean Architecture", "SOLID", "DDD", "Event-driven design", "RabbitMQ"],
      },
      {
        category: "Frontend & desktop",
        core: [],
        items: ["Next.js", "React", "Tailwind CSS", "Electron", "Streamlit"],
      },
    ],
  },

  github: {
    eyebrow: "GitHub",
    title: "Public work",
    description: "Live data from the GitHub API, refreshed every few hours.",
    languages: "Languages",
    featured: "Featured repositories",
    updated: "Updated {date}",
    repos: "Repos",
    followers: "Followers",
    since: "Since",
    unavailable: "GitHub data is temporarily unavailable.",
    openProfile: "Open the profile",
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your backend",
    description: "Open to remote backend roles. Send a message and I'll get back to you.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    message: "Message",
    messagePlaceholder: "Role, team, stack and what you're building.",
    send: "Send",
    missing: "Please fill in every field.",
    opening: "Opening your email app…",
    locationLabel: "Location",
    locationValue: "Barueri, São Paulo, Brazil · Remote",
  },

  footer: { builtWith: "Built with Next.js, Tailwind CSS and Motion." },
} satisfies Content;
