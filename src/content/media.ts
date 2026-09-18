/**
 * Screenshot inventory shared by both languages. Only paths and pixel sizes live here;
 * alt text is translated in en.ts / pt.ts.
 */
type Shot = { src: string; width: number; height: number };
type Clip = Shot & { poster: string };

const shot = (src: string, width = 1440, height = 900): Shot => ({ src: `/projects/${src}`, width, height });
const clip = (src: string, width: number, height: number): Clip => ({
  src: `/projects/${src}.mp4`,
  poster: `/projects/${src}-poster.png`,
  width,
  height,
});

export const shots = {
  popmarq: {
    offerDetail: shot("popmarq/offer-detail.png"),
    catalog: shot("popmarq/catalog.png"),
    modelDetail: shot("popmarq/model-detail.png"),
    offers: shot("popmarq/offers.png"),
    chatClip: clip("popmarq/chat", 1280, 800),
    financingClip: clip("popmarq/financing", 1280, 800),
    chatAnswer: shot("popmarq/chat-answer.png"),
    conversations: shot("popmarq/conversations.png"),
    livesPage: shot("popmarq/lives-page.png"),
    liveReplay: shot("popmarq/live-replay.png"),
    livesClip: clip("popmarq/lives", 1280, 800),
    marketplaceClip: clip("popmarq/marketplace", 1280, 800),
    feedClip: clip("popmarq/feed", 1280, 800),
    discoverClip: clip("popmarq/discover", 1280, 800),
    profileClip: clip("popmarq/profile", 1280, 800),
  },
  santanderStore: {
    dadosPessoais: shot("santander-store/dados-pessoais.png", 1280, 800),
    notificacoes: shot("santander-store/notificacoes.png", 1280, 800),
    browseClip: clip("santander-store/browse", 1280, 800),
    productClip: clip("santander-store/product", 1280, 800),
    checkoutClip: clip("santander-store/checkout", 1280, 800),
    trackClip: clip("santander-store/track", 1280, 800),
    cancelClip: clip("santander-store/cancel", 1280, 800),
  },
  webmotorsCatalog: {
    home: shot("webmotors-catalog/home.png"),
    brands: shot("webmotors-catalog/brands.png"),
    model: shot("webmotors-catalog/model.png"),
    versions: shot("webmotors-catalog/versions.png"),
    previewClip: clip("webmotors-catalog/preview", 1280, 800),
  },
  webmotorsFipe: {
    search: shot("webmotors-fipe/search.png"),
    result: shot("webmotors-fipe/result.png"),
    history: shot("webmotors-fipe/history.png"),
    table: shot("webmotors-fipe/table.png"),
    brands: shot("webmotors-fipe/brands.png"),
    previewClip: clip("webmotors-fipe/preview", 1280, 800),
  },
  wm1: {
    featured: shot("wm1/featured.png", 1425, 720),
    latest: shot("wm1/latest.png", 1425, 680),
    videos: shot("wm1/videos.png", 1425, 560),
  },
  laboritSite: {
    home: shot("laborit-site/home.png"),
    services: shot("laborit-site/services.png"),
    products: shot("laborit-site/products.png"),
    browseClip: clip("laborit-site/browse", 1280, 800),
  },
  entrelinhas: {
    home: shot("entrelinhas/home.png", 1280, 800),
    post: shot("entrelinhas/post-detail.png", 1280, 800),
    editor: shot("entrelinhas/admin-editor.png", 1280, 800),
    sessions: shot("entrelinhas/perfil-seguranca.png", 1280, 800),
    roles: shot("entrelinhas/admin-usuarios.png", 1280, 800),
    commentClip: clip("entrelinhas/comment-reaction", 760, 486),
    themeClip: clip("entrelinhas/theme-toggle", 760, 484),
  },
  viraCancao: {
    landing: shot("vira-cancao/landing-hero.png", 1280, 800),
    wizard: shot("vira-cancao/wizard-occasion.png", 1280, 800),
    lyrics: shot("vira-cancao/letra-editing.png", 1280, 1126),
    checkout: shot("vira-cancao/checkout-plans.png", 1280, 1403),
    delivered: shot("vira-cancao/order-delivered.png", 1280, 1624),
    audioClip: clip("vira-cancao/audio-seek", 700, 326),
    languageClip: clip("vira-cancao/language-switch", 700, 318),
  },
  studyTracker: {
    dashboard: shot("study-tracker/dashboard.png", 1424, 735),
    courses: shot("study-tracker/courses.png", 1424, 935),
    notebook: shot("study-tracker/course-notebook.png", 1424, 935),
    statistics: shot("study-tracker/statistics.png", 1424, 875),
    backup: shot("study-tracker/settings-backup.png", 1424, 815),
    timerClip: clip("study-tracker/timer-compact", 720, 500),
  },
  lotteryAnalyzer: {
    analysis: shot("lottery-analyzer/analise.png", 3200, 1750),
    rankings: shot("lottery-analyzer/analise-rankings.png", 3200, 1750),
    generator: shot("lottery-analyzer/gerador.png", 3200, 1750),
    checker: shot("lottery-analyzer/conferidor.png", 3200, 1750),
    switchClip: clip("lottery-analyzer/troca-modalidade", 2400, 1070),
    historyClip: clip("lottery-analyzer/conferir-historico", 2400, 1250),
  },
  storageWaiter: {
    mainViewEn: shot("storage-waiter/main-view-en.png", 1180, 760),
    mainViewPt: shot("storage-waiter/main-view-pt.png", 1180, 760),
    fileSelectedEn: shot("storage-waiter/file-selected-en.png", 1180, 760),
    fileSelectedPt: shot("storage-waiter/file-selected-pt.png", 1180, 760),
    addMegaEn: shot("storage-waiter/add-mega-modal-en.png", 1180, 760),
    addMegaPt: shot("storage-waiter/add-mega-modal-pt.png", 1180, 760),
    addDriveEn: shot("storage-waiter/add-gdrive-modal-en.png", 1180, 760),
    addDrivePt: shot("storage-waiter/add-gdrive-modal-pt.png", 1180, 760),
    dragDropEn: shot("storage-waiter/drag-drop-overlay-en.png", 1180, 760),
    dragDropPt: shot("storage-waiter/drag-drop-overlay-pt.png", 1180, 760),
    uploadClipEn: clip("storage-waiter/upload-flow-en", 960, 618),
    uploadClipPt: clip("storage-waiter/upload-flow-pt", 960, 618),
    reconcileClipEn: clip("storage-waiter/reconcile-flow-en", 960, 618),
    reconcileClipPt: clip("storage-waiter/reconcile-flow-pt", 960, 618),
  },
  markdownPreview: {
    mermaid: shot("markdown-preview/mermaid-and-code.png", 1280, 800),
    document: shot("markdown-preview/exemplo-md.png", 1280, 800),
    pdf: shot("markdown-preview/export-pdf-page.png", 900, 1165),
    typingClip: clip("markdown-preview/live-typing", 760, 470),
  },
} as const;

export const image = (s: Shot, alt: string) => ({ kind: "image" as const, ...s, alt });
export const video = (c: Clip, alt: string) => ({ kind: "video" as const, ...c, alt });
