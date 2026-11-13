// Per-locale UI chrome strings — everything on the page that is not the
// book's own prose: nav labels, breadcrumbs, picker labels, pagination,
// footer text.
//
// This exists because a reader who switches the language picker to, say,
// Welsh should not land on a topic written in Welsh surrounded by English
// navigation. Topic prose comes from the book's markdown (`#lib/server/book.js`);
// everything else comes from here, keyed by the same locale slugs as `LOCALES`
// in `#lib/book.js`.
//
// English variants (`en-gb`, `en-gb-oxendict`, `en-us`, `en-001`) differ only
// in spelling convention, matching the house style each variant uses for its
// topic prose (see `spec/index.md` §4 upstream). `cy-001` reuses `cy-gb`'s
// strings verbatim — the same decision the book repo made for topic prose,
// since the register difference between Welsh (Wales) and World Welsh is
// negligible for this formal content. `es-001` (World/neutral Spanish),
// `fr-001` (World/neutral French), `de-de` (German, Germany), `zh-cn`
// (Mainland China, Simplified script), `ar-001` (World/neutral Arabic),
// `hi-in` (Hindi, India), `ja-jp` (Japanese, Japan), `ru-ru` (Russian, Russia), and `ko-kr` (Korean, South Korea) each get their own
// strings, in the same neutral register their topic prose uses. `ar-001`
// needs no separate `dir`
// handling here — the Lily locale picker sets `dir="rtl"` on the document
// itself for any locale whose base language subtag is in its own RTL list,
// which already includes `ar` (see `isRtlLocale` in
// `@lilydesignsystem/svelte-locale-picker`).

export type UiStrings = {
  /** The site's own name, as shown in the header brand and used in page titles. */
  siteTitle: string;
  skipToContent: string;
  nav: { contents: string; glossary: string; index: string; source: string };
  breadcrumb: { home: string; contents: string };
  picker: {
    theme: string;
    locale: string;
    textSize: string;
    share: string;
    /** Accessible names for the header search: button, text field, ⏎ submit. */
    search: string;
    searchInput: string;
    searchSubmit: string;
  };
  share: {
    emailLink: string;
    shareOnLinkedIn: string;
    shareOnReddit: string;
    shareOnBluesky: string;
    shareOnMastodon: string;
    copyLink: string;
    copied: string;
    copyFailed: string;
  };
  contents: {
    pageTitle: string;
    lead: string;
    readingIn: (label: string) => string;
    frontMatter: string;
    part: (n: number) => string;
    reference: string;
  };
  topic: {
    topicEyebrow: (n: string) => string;
    paginationLabel: string;
    onThisPage: string;
    previous: string;
    next: string;
  };
  /** The header's link picker (home icon): its accessible name and the project links it lists. */
  links: { label: string; skills: string; llms: string; issues: string };
  /** The site search: its form on `/`, and the results page at `/?<query>`. */
  results: {
    label: string;
    heading: (query: string) => string;
    searching: string;
    none: (query: string) => string;
    browse: string;
    failed: string;
    count: (n: number, more: boolean) => string;
    button: string;
  };
  footer: {
    tagline: string;
    sourceAndContributions: string;
    builtWith: string;
    ledBy: string;
  };
};

const en: UiStrings = {
  siteTitle: 'Public Value Guide',
  skipToContent: 'Skip to main content',
  nav: { contents: 'Contents', glossary: 'Glossary', index: 'Index', source: 'Source' },
  breadcrumb: { home: 'Home', contents: 'Contents' },
  picker: { theme: 'Theme', locale: 'Language', textSize: 'Text size', share: 'Share',
    search: 'Search',
    searchInput: 'Search the guide',
    searchSubmit: 'Submit search'
  },
  share: {
    emailLink: 'Email Link',
    shareOnLinkedIn: 'Share on LinkedIn',
    shareOnReddit: 'Share on Reddit',
    shareOnBluesky: 'Share on Bluesky',
    shareOnMastodon: 'Share on Mastodon',
    copyLink: 'Copy Link',
    copied: 'Copied!',
    copyFailed: 'Copy failed — copy the address bar instead'
  },
  contents: {
    pageTitle: 'Contents',
    lead: 'Every topic is self-contained. Read straight through for a course in public value, or go directly to the topic that matches the decision in front of you.',
    readingIn: (label) => `Reading in ${label}. Switch language from the header picker.`,
    frontMatter: 'Front matter',
    part: (n) => `Part ${n}`,
    reference: 'Reference'
  },
  topic: {
    topicEyebrow: (n) => `Topic ${n}`,
    paginationLabel: 'Topic',
    onThisPage: 'On this page',
    previous: 'Previous',
    next: 'Next'
  },
  links: { label: 'Links', skills: 'AI skills', llms: 'For AI agents (llms.txt)', issues: 'Report an issue' },
  results: {
    label: 'Search results',
    heading: (q) => `Search: ${q}`,
    searching: 'Searching…',
    none: (q) => `No results for “${q}”.`,
    browse: 'Browse the contents',
    failed: 'The search index could not be loaded.',
    count: (n, more) => `${n}${more ? '+' : ''} result${n === 1 ? '' : 's'}`,
    button: 'Search'
  },
  footer: {
    tagline:
      'a practical handbook of best practices for creating public value in government and the social sector, worldwide in scope.',
    sourceAndContributions: 'Source and contributions:',
    builtWith: 'Built with the',
    ledBy: 'Led by'
  }
};

// en-us differs from en-gb only in spelling; none of this chrome text
// contains a British/American spelling divergence, so it is identical to
// `en`. Kept as its own entry, rather than aliased, so a future chrome string
// that does diverge (e.g. "-ize"/"-ise") has an obvious place to change.
const enUs: UiStrings = en;

const enGb: UiStrings = en;

const enGbOxendict: UiStrings = en;

const en001: UiStrings = en;

const cyGb: UiStrings = {
  siteTitle: 'Canllaw Gwerth Cyhoeddus',
  skipToContent: 'Neidio i’r prif gynnwys',
  nav: { contents: 'Cynnwys', glossary: 'Geirfa', index: 'Mynegai', source: 'Ffynhonnell' },
  breadcrumb: { home: 'Hafan', contents: 'Cynnwys' },
  picker: { theme: 'Thema', locale: 'Iaith', textSize: 'Maint testun', share: 'Rhannu',
    search: 'Chwilio',
    searchInput: 'Chwilio’r canllaw',
    searchSubmit: 'Cyflwyno’r chwiliad'
  },
  share: {
    emailLink: 'E-bostio’r Ddolen',
    shareOnLinkedIn: 'Rhannu ar LinkedIn',
    shareOnReddit: 'Rhannu ar Reddit',
    shareOnBluesky: 'Rhannu ar Bluesky',
    shareOnMastodon: 'Rhannu ar Mastodon',
    copyLink: 'Copïo’r Ddolen',
    copied: 'Wedi copïo!',
    copyFailed: 'Methodd y copïo — copïwch far y cyfeiriad yn lle hynny'
  },
  contents: {
    pageTitle: 'Cynnwys',
    lead: 'Mae pob pwnc yn hunangynhwysol. Darllenwch drwyddo am gwrs mewn gwerth cyhoeddus, neu ewch yn syth i’r pwnc sy’n cyfateb â’r penderfyniad o’ch blaen.',
    readingIn: (label) => `Yn darllen yn ${label}. Newidiwch iaith o’r dewisydd yn y pennawd.`,
    frontMatter: 'Deunydd blaen',
    part: (n) => `Rhan ${n}`,
    reference: 'Cyfeirnod'
  },
  topic: {
    topicEyebrow: (n) => `Pwnc ${n}`,
    paginationLabel: 'Pwnc',
    onThisPage: 'Ar y dudalen hon',
    previous: 'Blaenorol',
    next: 'Nesaf'
  },
  links: { label: 'Dolenni', skills: 'Sgiliau AI', llms: 'I asiantau AI (llms.txt)', issues: 'Adrodd ar broblem' },
  results: {
    label: 'Canlyniadau chwilio',
    heading: (q) => `Chwilio: ${q}`,
    searching: 'Yn chwilio…',
    none: (q) => `Dim canlyniadau ar gyfer “${q}”.`,
    browse: 'Pori’r cynnwys',
    failed: 'Nid oedd modd llwytho’r mynegai chwilio.',
    count: (n, more) => `${n}${more ? '+' : ''} canlyniad`,
    button: 'Chwilio'
  },
  footer: {
    tagline:
      'llawlyfr ymarferol o arferion gorau ar gyfer creu gwerth cyhoeddus mewn llywodraeth a’r sector cymdeithasol, byd-eang ei gwmpas.',
    sourceAndContributions: 'Ffynhonnell a chyfraniadau:',
    builtWith: 'Wedi’i adeiladu â’r',
    ledBy: 'Dan arweiniad'
  }
};

// cy-001 reuses cy-gb's chrome strings verbatim, matching the book repo's own
// decision to reuse cy-gb prose for cy-001 (see spec/index.md upstream).
const cy001: UiStrings = cyGb;

const es001: UiStrings = {
  siteTitle: 'Guía de Valor Público',
  skipToContent: 'Saltar al contenido principal',
  nav: { contents: 'Contenido', glossary: 'Glosario', index: 'Índice', source: 'Fuente' },
  breadcrumb: { home: 'Inicio', contents: 'Contenido' },
  picker: { theme: 'Tema', locale: 'Idioma', textSize: 'Tamaño del texto', share: 'Compartir',
    search: 'Buscar',
    searchInput: 'Buscar en la guía',
    searchSubmit: 'Enviar búsqueda'
  },
  share: {
    emailLink: 'Enviar enlace por correo',
    shareOnLinkedIn: 'Compartir en LinkedIn',
    shareOnReddit: 'Compartir en Reddit',
    shareOnBluesky: 'Compartir en Bluesky',
    shareOnMastodon: 'Compartir en Mastodon',
    copyLink: 'Copiar enlace',
    copied: '¡Copiado!',
    copyFailed: 'Error al copiar — copie la barra de direcciones en su lugar'
  },
  contents: {
    pageTitle: 'Contenido',
    lead: 'Cada tema es autónomo. Léalo de principio a fin como un curso sobre valor público, o vaya directamente al tema que corresponda a la decisión que tiene ante usted.',
    readingIn: (label) => `Leyendo en ${label}. Cambie de idioma desde el selector del encabezado.`,
    frontMatter: 'Preliminares',
    part: (n) => `Parte ${n}`,
    reference: 'Referencia'
  },
  topic: {
    topicEyebrow: (n) => `Tema ${n}`,
    paginationLabel: 'Tema',
    onThisPage: 'En esta página',
    previous: 'Anterior',
    next: 'Siguiente'
  },
  links: { label: 'Enlaces', skills: 'Habilidades de IA', llms: 'Para agentes de IA (llms.txt)', issues: 'Informar de un problema' },
  results: {
    label: 'Resultados de búsqueda',
    heading: (q) => `Búsqueda: ${q}`,
    searching: 'Buscando…',
    none: (q) => `Sin resultados para “${q}”.`,
    browse: 'Explorar el contenido',
    failed: 'No se pudo cargar el índice de búsqueda.',
    count: (n, more) => `${n}${more ? '+' : ''} resultado${n === 1 ? '' : 's'}`,
    button: 'Buscar'
  },
  footer: {
    tagline:
      'un manual práctico de buenas prácticas para crear valor público en el gobierno y el sector social, de alcance mundial.',
    sourceAndContributions: 'Fuente y contribuciones:',
    builtWith: 'Creado con el',
    ledBy: 'Dirigido por'
  }
};

const fr001: UiStrings = {
  siteTitle: 'Guide de la Valeur Publique',
  skipToContent: 'Passer au contenu principal',
  nav: { contents: 'Contenu', glossary: 'Glossaire', index: 'Index', source: 'Source' },
  breadcrumb: { home: 'Accueil', contents: 'Contenu' },
  picker: { theme: 'Thème', locale: 'Langue', textSize: 'Taille du texte', share: 'Partager',
    search: 'Rechercher',
    searchInput: 'Rechercher dans le guide',
    searchSubmit: 'Lancer la recherche'
  },
  share: {
    emailLink: 'Envoyer le lien par courriel',
    shareOnLinkedIn: 'Partager sur LinkedIn',
    shareOnReddit: 'Partager sur Reddit',
    shareOnBluesky: 'Partager sur Bluesky',
    shareOnMastodon: 'Partager sur Mastodon',
    copyLink: 'Copier le lien',
    copied: 'Copié !',
    copyFailed: 'Échec de la copie — copiez plutôt la barre d’adresse'
  },
  contents: {
    pageTitle: 'Contenu',
    lead: 'Chaque thème est autonome. Lisez-le d’un bout à l’autre comme un cours sur la valeur publique, ou allez directement au thème qui correspond à la décision qui vous occupe.',
    readingIn: (label) => `Lecture en ${label}. Changez de langue depuis le sélecteur d’en-tête.`,
    frontMatter: 'Matière liminaire',
    part: (n) => `Partie ${n}`,
    reference: 'Référence'
  },
  topic: {
    topicEyebrow: (n) => `Thème ${n}`,
    paginationLabel: 'Thème',
    onThisPage: 'Sur cette page',
    previous: 'Précédent',
    next: 'Suivant'
  },
  links: { label: 'Liens', skills: 'Compétences IA', llms: 'Pour les agents IA (llms.txt)', issues: 'Signaler un problème' },
  results: {
    label: 'Résultats de recherche',
    heading: (q) => `Recherche : ${q}`,
    searching: 'Recherche en cours…',
    none: (q) => `Aucun résultat pour « ${q} ».`,
    browse: 'Parcourir le contenu',
    failed: 'Impossible de charger l’index de recherche.',
    count: (n, more) => `${n}${more ? '+' : ''} résultat${n === 1 ? '' : 's'}`,
    button: 'Rechercher'
  },
  footer: {
    tagline:
      'un guide pratique des meilleures pratiques pour créer de la valeur publique dans le gouvernement et le secteur social, de portée mondiale.',
    sourceAndContributions: 'Source et contributions :',
    builtWith: 'Construit avec le',
    ledBy: 'Dirigé par'
  }
};

const deDe: UiStrings = {
  siteTitle: 'Leitfaden für öffentlichen Wert',
  skipToContent: 'Zum Hauptinhalt springen',
  nav: { contents: 'Inhalt', glossary: 'Glossar', index: 'Index', source: 'Quelle' },
  breadcrumb: { home: 'Start', contents: 'Inhalt' },
  picker: { theme: 'Thema', locale: 'Sprache', textSize: 'Textgröße', share: 'Teilen',
    search: 'Suche',
    searchInput: 'Im Leitfaden suchen',
    searchSubmit: 'Suche absenden'
  },
  share: {
    emailLink: 'Link per E-Mail senden',
    shareOnLinkedIn: 'Auf LinkedIn teilen',
    shareOnReddit: 'Auf Reddit teilen',
    shareOnBluesky: 'Auf Bluesky teilen',
    shareOnMastodon: 'Auf Mastodon teilen',
    copyLink: 'Link kopieren',
    copied: 'Kopiert!',
    copyFailed: 'Kopieren fehlgeschlagen — kopieren Sie stattdessen die Adressleiste'
  },
  contents: {
    pageTitle: 'Inhalt',
    lead: 'Jedes Thema ist eigenständig. Lesen Sie durchgehend für einen Kurs zu öffentlichem Wert, oder gehen Sie direkt zum Thema, das zur vor Ihnen liegenden Entscheidung passt.',
    readingIn: (label) => `Sie lesen auf ${label}. Sprache über die Kopfzeilenauswahl wechseln.`,
    frontMatter: 'Einleitende Seiten',
    part: (n) => `Teil ${n}`,
    reference: 'Referenz'
  },
  topic: {
    topicEyebrow: (n) => `Thema ${n}`,
    paginationLabel: 'Thema',
    onThisPage: 'Auf dieser Seite',
    previous: 'Zurück',
    next: 'Weiter'
  },
  links: { label: 'Links', skills: 'KI-Skills', llms: 'Für KI-Agenten (llms.txt)', issues: 'Problem melden' },
  results: {
    label: 'Suchergebnisse',
    heading: (q) => `Suche: ${q}`,
    searching: 'Suche läuft…',
    none: (q) => `Keine Ergebnisse für „${q}“.`,
    browse: 'Zum Inhaltsverzeichnis',
    failed: 'Der Suchindex konnte nicht geladen werden.',
    count: (n, more) => `${n}${more ? '+' : ''} Ergebnis${n === 1 ? '' : 'se'}`,
    button: 'Suchen'
  },
  footer: {
    tagline:
      'ein praktischer Leitfaden bewährter Praktiken zur Schaffung öffentlichen Wertes in Regierung und sozialem Sektor, weltweit angelegt.',
    sourceAndContributions: 'Quelle und Beiträge:',
    builtWith: 'Erstellt mit dem',
    ledBy: 'Geleitet von'
  }
};

const zhCn: UiStrings = {
  siteTitle: '公共价值指南',
  skipToContent: '跳转到主要内容',
  nav: { contents: '目录', glossary: '术语表', index: '索引', source: '源代码' },
  breadcrumb: { home: '首页', contents: '目录' },
  picker: { theme: '主题', locale: '语言', textSize: '字体大小', share: '分享',
    search: '搜索',
    searchInput: '在指南中搜索',
    searchSubmit: '提交搜索'
  },
  share: {
    emailLink: '通过电子邮件发送链接',
    shareOnLinkedIn: '分享到 LinkedIn',
    shareOnReddit: '分享到 Reddit',
    shareOnBluesky: '分享到 Bluesky',
    shareOnMastodon: '分享到 Mastodon',
    copyLink: '复制链接',
    copied: '已复制!',
    copyFailed: '复制失败——请改为复制地址栏内容'
  },
  contents: {
    pageTitle: '目录',
    lead: '每个主题都是独立完整的。可以从头到尾通读,作为一门关于公共价值的课程,也可以直接跳转到与你眼下的决策相匹配的那个主题。',
    readingIn: (label) => `正在以${label}阅读。可从页眉的选择器切换语言。`,
    frontMatter: '前言部分',
    part: (n) => `第 ${n} 部分`,
    reference: '参考资料'
  },
  topic: {
    topicEyebrow: (n) => `主题${n}`,
    paginationLabel: '主题',
    onThisPage: '本页内容',
    previous: '上一章',
    next: '下一章'
  },
  links: { label: '链接', skills: 'AI 技能', llms: '面向 AI 代理(llms.txt)', issues: '报告问题' },
  results: {
    label: '搜索结果',
    heading: (q) => `搜索:${q}`,
    searching: '正在搜索…',
    none: (q) => `没有找到“${q}”的结果。`,
    browse: '浏览目录',
    failed: '无法加载搜索索引。',
    count: (n, more) => `${n}${more ? '+' : ''} 条结果`,
    button: '搜索'
  },
  footer: {
    tagline: '一部面向全球的、关于在政府与社会部门中创造公共价值的最佳实践实用手册。',
    sourceAndContributions: '源代码与贡献:',
    builtWith: '构建工具:',
    ledBy: '负责人:'
  }
};

const zhTw: UiStrings = {
  siteTitle: '公共價值指南',
  skipToContent: '跳轉到主要內容',
  nav: { contents: '目錄', glossary: '術語表', index: '索引', source: '原始碼' },
  breadcrumb: { home: '首頁', contents: '目錄' },
  picker: { theme: '主題', locale: '語言', textSize: '字型大小', share: '分享',
    search: '搜尋',
    searchInput: '在指南中搜尋',
    searchSubmit: '提交搜尋'
  },
  share: {
    emailLink: '透過電子郵件傳送連結',
    shareOnLinkedIn: '分享到 LinkedIn',
    shareOnReddit: '分享到 Reddit',
    shareOnBluesky: '分享到 Bluesky',
    shareOnMastodon: '分享到 Mastodon',
    copyLink: '複製連結',
    copied: '已複製!',
    copyFailed: '複製失敗——請改為複製位址列內容'
  },
  contents: {
    pageTitle: '目錄',
    lead: '每個主題都是獨立完整的。可以從頭到尾通讀,作為一門關於公共價值的課程,也可以直接跳轉到與你眼下的決策相匹配的那個主題。',
    readingIn: (label) => `正在以${label}閱讀。可從頁首的選擇器切換語言。`,
    frontMatter: '前言部分',
    part: (n) => `第 ${n} 部分`,
    reference: '參考資料'
  },
  topic: {
    topicEyebrow: (n) => `主題${n}`,
    paginationLabel: '主題',
    onThisPage: '本頁內容',
    previous: '上一章',
    next: '下一章'
  },
  links: { label: '連結', skills: 'AI 技能', llms: '面向 AI 代理(llms.txt)', issues: '報告問題' },
  results: {
    label: '搜尋結果',
    heading: (q) => `搜尋:${q}`,
    searching: '正在搜尋…',
    none: (q) => `沒有找到“${q}”的結果。`,
    browse: '瀏覽目錄',
    failed: '無法載入搜尋索引。',
    count: (n, more) => `${n}${more ? '+' : ''} 條結果`,
    button: '搜尋'
  },
  footer: {
    tagline: '一部面向全球的、關於在政府與社會部門中創造公共價值的最佳實踐實用手冊。',
    sourceAndContributions: '原始碼與貢獻:',
    builtWith: '構建工具:',
    ledBy: '負責人:'
  }
};

const ar001: UiStrings = {
  siteTitle: 'دليل القيمة العامة',
  skipToContent: 'الانتقال إلى المحتوى الرئيسي',
  nav: { contents: 'المحتويات', glossary: 'المسرد', index: 'الفهرس', source: 'المصدر' },
  breadcrumb: { home: 'الرئيسية', contents: 'المحتويات' },
  picker: { theme: 'السمة', locale: 'اللغة', textSize: 'حجم النص', share: 'مشاركة',
    search: 'بحث',
    searchInput: 'ابحث في الدليل',
    searchSubmit: 'إرسال البحث'
  },
  share: {
    emailLink: 'إرسال الرابط بالبريد الإلكتروني',
    shareOnLinkedIn: 'مشاركة على LinkedIn',
    shareOnReddit: 'مشاركة على Reddit',
    shareOnBluesky: 'مشاركة على Bluesky',
    shareOnMastodon: 'مشاركة على Mastodon',
    copyLink: 'نسخ الرابط',
    copied: 'تم النسخ!',
    copyFailed: 'فشل النسخ — يُرجى نسخ شريط العنوان بدلًا من ذلك'
  },
  contents: {
    pageTitle: 'المحتويات',
    lead: 'كل موضوع قائم بذاته. اقرأ الكتاب من البداية إلى النهاية كدورة في القيمة العامة، أو انتقل مباشرة إلى الموضوع الذي يناسب القرار الذي أمامك.',
    readingIn: (label) => `تقرأ الآن بـ${label}. غيّر اللغة من منتقي الترويسة.`,
    frontMatter: 'المادة الاستهلالية',
    part: (n) => `الجزء ${n}`,
    reference: 'مرجع'
  },
  topic: {
    topicEyebrow: (n) => `الموضوع ${n}`,
    paginationLabel: 'الموضوع',
    onThisPage: 'في هذه الصفحة',
    previous: 'السابق',
    next: 'التالي'
  },
  links: { label: 'روابط', skills: 'مهارات الذكاء الاصطناعي', llms: 'لوكلاء الذكاء الاصطناعي (llms.txt)', issues: 'الإبلاغ عن مشكلة' },
  results: {
    label: 'نتائج البحث',
    heading: (q) => `بحث: ${q}`,
    searching: 'جارٍ البحث…',
    none: (q) => `لا توجد نتائج لـ «${q}».`,
    browse: 'تصفّح المحتويات',
    failed: 'تعذّر تحميل فهرس البحث.',
    count: (n, more) => `${n}${more ? '+' : ''} نتيجة`,
    button: 'بحث'
  },
  footer: {
    tagline:
      'دليل عملي لأفضل الممارسات في خلق القيمة العامة داخل الحكومة والقطاع الاجتماعي، بنطاق عالمي.',
    sourceAndContributions: 'المصدر والمساهمات:',
    builtWith: 'بُني باستخدام',
    ledBy: 'بقيادة'
  }
};

const hiIn: UiStrings = {
  siteTitle: 'लोक मूल्य मार्गदर्शिका',
  skipToContent: 'मुख्य सामग्री पर जाएँ',
  nav: { contents: 'विषय-सूची', glossary: 'शब्दावली', index: 'अनुक्रमणिका', source: 'स्रोत' },
  breadcrumb: { home: 'मुखपृष्ठ', contents: 'विषय-सूची' },
  picker: { theme: 'थीम', locale: 'भाषा', textSize: 'पाठ का आकार', share: 'साझा करें',
    search: 'खोजें',
    searchInput: 'मार्गदर्शिका में खोजें',
    searchSubmit: 'खोज सबमिट करें'
  },
  share: {
    emailLink: 'ईमेल लिंक',
    shareOnLinkedIn: 'LinkedIn पर साझा करें',
    shareOnReddit: 'Reddit पर साझा करें',
    shareOnBluesky: 'Bluesky पर साझा करें',
    shareOnMastodon: 'Mastodon पर साझा करें',
    copyLink: 'लिंक कॉपी करें',
    copied: 'कॉपी हो गया!',
    copyFailed: 'कॉपी विफल — इसके बजाय पता बार से कॉपी करें'
  },
  contents: {
    pageTitle: 'विषय-सूची',
    lead: 'हर विषय स्वयं में पूर्ण है। लोक मूल्य पर एक पाठ्यक्रम के रूप में शुरू से अंत तक पढ़ें, या सीधे उस विषय पर जाएँ जो आपके सामने के निर्णय से मेल खाता है।',
    readingIn: (label) => `${label} में पढ़ रहे हैं। शीर्षलेख के चयनकर्ता से भाषा बदलें।`,
    frontMatter: 'प्रारंभिक सामग्री',
    part: (n) => `भाग ${n}`,
    reference: 'संदर्भ'
  },
  topic: {
    topicEyebrow: (n) => `विषय ${n}`,
    paginationLabel: 'विषय',
    onThisPage: 'इस पृष्ठ पर',
    previous: 'पिछला',
    next: 'अगला'
  },
  links: { label: 'लिंक', skills: 'एआई कौशल', llms: 'एआई एजेंटों के लिए (llms.txt)', issues: 'समस्या की रिपोर्ट करें' },
  results: {
    label: 'खोज परिणाम',
    heading: (q) => `खोज: ${q}`,
    searching: 'खोज रहे हैं…',
    none: (q) => `“${q}” के लिए कोई परिणाम नहीं मिला।`,
    browse: 'विषय-सूची देखें',
    failed: 'खोज सूचकांक लोड नहीं हो सका।',
    count: (n, more) => `${n}${more ? '+' : ''} परिणाम`,
    button: 'खोजें'
  },
  footer: {
    tagline:
      'सरकार और सामाजिक क्षेत्र में लोक मूल्य बनाने के लिए श्रेष्ठ व्यवहारों की एक व्यावहारिक पुस्तिका, विश्वव्यापी दायरे में।',
    sourceAndContributions: 'स्रोत और योगदान:',
    builtWith: 'इसके साथ बनाया गया',
    ledBy: 'नेतृत्व:'
  }
};

const jaJp: UiStrings = {
  siteTitle: '公共価値ガイド',
  skipToContent: 'メインコンテンツへスキップ',
  nav: { contents: '目次', glossary: '用語集', index: '索引', source: 'ソース' },
  breadcrumb: { home: 'ホーム', contents: '目次' },
  picker: { theme: 'テーマ', locale: '言語', textSize: '文字サイズ', share: '共有',
    search: '検索',
    searchInput: 'ガイド内を検索',
    searchSubmit: '検索を実行'
  },
  share: {
    emailLink: 'リンクをメールで送る',
    shareOnLinkedIn: 'LinkedInで共有',
    shareOnReddit: 'Redditで共有',
    shareOnBluesky: 'Blueskyで共有',
    shareOnMastodon: 'Mastodonで共有',
    copyLink: 'リンクをコピー',
    copied: 'コピーしました!',
    copyFailed: 'コピーに失敗しました — 代わりにアドレスバーからコピーしてください'
  },
  contents: {
    pageTitle: '目次',
    lead: '各トピックは独立して読めます。公共価値についての講座として最初から通読するか、目の前の決定に対応するトピックに直接進んでください。',
    readingIn: (label) => `${label}で読んでいます。ヘッダーの選択メニューから言語を切り替えられます。`,
    frontMatter: '前付け',
    part: (n) => `第${n}部`,
    reference: '参考資料'
  },
  topic: {
    topicEyebrow: (n) => `トピック${n}`,
    paginationLabel: 'トピック',
    onThisPage: 'このページの内容',
    previous: '前へ',
    next: '次へ'
  },
  links: { label: 'リンク', skills: 'AIスキル', llms: 'AIエージェント向け(llms.txt)', issues: '問題を報告' },
  results: {
    label: '検索結果',
    heading: (q) => `検索: ${q}`,
    searching: '検索中…',
    none: (q) => `「${q}」の結果はありません。`,
    browse: '目次を見る',
    failed: '検索インデックスを読み込めませんでした。',
    count: (n, more) => `${n}${more ? '+' : ''}件の結果`,
    button: '検索'
  },
  footer: {
    tagline:
      '政府と社会セクターにおける公共価値の創出のための実践的なベストプラクティスの手引き。世界規模を範囲とする。',
    sourceAndContributions: 'ソースと貢献:',
    builtWith: '構築に使用:',
    ledBy: '主導:'
  }
};

const ruRu: UiStrings = {
  siteTitle: 'Руководство по общественной ценности',
  skipToContent: 'Перейти к основному содержимому',
  nav: { contents: 'Содержание', glossary: 'Глоссарий', index: 'Указатель', source: 'Исходный код' },
  breadcrumb: { home: 'Главная', contents: 'Содержание' },
  picker: { theme: 'Тема', locale: 'Язык', textSize: 'Размер текста', share: 'Поделиться',
    search: 'Поиск',
    searchInput: 'Поиск по руководству',
    searchSubmit: 'Выполнить поиск'
  },
  share: {
    emailLink: 'Отправить ссылку по почте',
    shareOnLinkedIn: 'Поделиться в LinkedIn',
    shareOnReddit: 'Поделиться в Reddit',
    shareOnBluesky: 'Поделиться в Bluesky',
    shareOnMastodon: 'Поделиться в Mastodon',
    copyLink: 'Скопировать ссылку',
    copied: 'Скопировано!',
    copyFailed: 'Не удалось скопировать — скопируйте адрес из адресной строки'
  },
  contents: {
    pageTitle: 'Содержание',
    lead: 'Каждая тема самостоятельна. Читайте подряд, как курс по общественной ценности, или переходите сразу к теме, соответствующей решению, которое стоит перед вами.',
    readingIn: (label) => `Вы читаете на языке: ${label}. Язык можно сменить в переключателе в шапке сайта.`,
    frontMatter: 'Вступительные материалы',
    part: (n) => `Часть ${n}`,
    reference: 'Справочные материалы'
  },
  topic: {
    topicEyebrow: (n) => `Тема ${n}`,
    paginationLabel: 'Тема',
    onThisPage: 'На этой странице',
    previous: 'Назад',
    next: 'Далее'
  },
  links: { label: 'Ссылки', skills: 'Навыки ИИ', llms: 'Для ИИ-агентов (llms.txt)', issues: 'Сообщить о проблеме' },
  results: {
    label: 'Результаты поиска',
    heading: (q) => `Поиск: ${q}`,
    searching: 'Идёт поиск…',
    none: (q) => `По запросу «${q}» ничего не найдено.`,
    browse: 'Открыть содержание',
    failed: 'Не удалось загрузить поисковый индекс.',
    count: (n, more) => `${n}${more ? '+' : ''} ${n % 10 === 1 && n % 100 !== 11 ? 'результат' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'результата' : 'результатов'}`,
    button: 'Найти'
  },
  footer: {
    tagline:
      'практическое руководство по лучшим практикам создания общественной ценности в государственном и социальном секторах, мировое по охвату.',
    sourceAndContributions: 'Исходный код и участие:',
    builtWith: 'Создано с помощью',
    ledBy: 'Руководитель проекта:'
  }
};

const swTz: UiStrings = {
  siteTitle: 'Mwongozo wa Thamani ya Umma',
  skipToContent: 'Ruka hadi maudhui makuu',
  nav: { contents: 'Yaliyomo', glossary: 'Kamusi ya istilahi', index: 'Faharasa', source: 'Chanzo' },
  breadcrumb: { home: 'Mwanzo', contents: 'Yaliyomo' },
  picker: { theme: 'Mandhari', locale: 'Lugha', textSize: 'Ukubwa wa maandishi', share: 'Shiriki',
    search: 'Tafuta',
    searchInput: 'Tafuta katika mwongozo',
    searchSubmit: 'Wasilisha utafutaji'
  },
  share: {
    emailLink: 'Tuma kiungo kwa barua pepe',
    shareOnLinkedIn: 'Shiriki kwenye LinkedIn',
    shareOnReddit: 'Shiriki kwenye Reddit',
    shareOnBluesky: 'Shiriki kwenye Bluesky',
    shareOnMastodon: 'Shiriki kwenye Mastodon',
    copyLink: 'Nakili kiungo',
    copied: 'Imenakiliwa!',
    copyFailed: 'Kunakili kumeshindwa — nakili anwani kutoka upau wa anwani'
  },
  contents: {
    pageTitle: 'Yaliyomo',
    lead: 'Kila mada inajitosheleza. Soma moja kwa moja kama kozi ya thamani ya umma, au nenda moja kwa moja kwenye mada inayolingana na uamuzi ulio mbele yako.',
    readingIn: (label) => `Unasoma kwa ${label}. Badilisha lugha kupitia kichagua lugha kilicho juu ya ukurasa.`,
    frontMatter: 'Sehemu ya utangulizi',
    part: (n) => `Sehemu ya ${n}`,
    reference: 'Marejeleo'
  },
  topic: {
    topicEyebrow: (n) => `Mada ${n}`,
    paginationLabel: 'Mada',
    onThisPage: 'Katika ukurasa huu',
    previous: 'Iliyotangulia',
    next: 'Inayofuata'
  },
  links: { label: 'Viungo', skills: 'Ujuzi wa AI', llms: 'Kwa mawakala wa AI (llms.txt)', issues: 'Ripoti tatizo' },
  results: {
    label: 'Matokeo ya utafutaji',
    heading: (q) => `Utafutaji: ${q}`,
    searching: 'Inatafuta…',
    none: (q) => `Hakuna matokeo ya “${q}”.`,
    browse: 'Vinjari yaliyomo',
    failed: 'Faharasa ya utafutaji haikuweza kupakiwa.',
    count: (n, more) => `Matokeo ${n}${more ? '+' : ''}`,
    button: 'Tafuta'
  },
  footer: {
    tagline:
      'mwongozo wa vitendo wa mazoea bora ya kuunda thamani ya umma serikalini na katika sekta ya kijamii, wenye wigo wa ulimwengu mzima.',
    sourceAndContributions: 'Chanzo na michango:',
    builtWith: 'Imejengwa kwa kutumia',
    ledBy: 'Inaongozwa na'
  }
};

const koKr: UiStrings = {
  siteTitle: '공공가치 가이드',
  skipToContent: '본문으로 건너뛰기',
  nav: { contents: '목차', glossary: '용어집', index: '색인', source: '소스' },
  breadcrumb: { home: '홈', contents: '목차' },
  picker: { theme: '테마', locale: '언어', textSize: '글자 크기', share: '공유',
    search: '검색',
    searchInput: '가이드 검색',
    searchSubmit: '검색 실행'
  },
  share: {
    emailLink: '링크를 이메일로 보내기',
    shareOnLinkedIn: 'LinkedIn에 공유',
    shareOnReddit: 'Reddit에 공유',
    shareOnBluesky: 'Bluesky에 공유',
    shareOnMastodon: 'Mastodon에 공유',
    copyLink: '링크 복사',
    copied: '복사했다!',
    copyFailed: '복사하지 못했다 — 주소 표시줄에서 주소를 복사하라'
  },
  contents: {
    pageTitle: '목차',
    lead: '각 주제는 독립적으로 완결된다. 공공가치 강좌처럼 처음부터 끝까지 읽어도 되고, 지금 마주한 결정에 맞는 주제로 곧바로 가도 된다.',
    readingIn: (label) => `읽는 언어: ${label}. 사이트 머리글의 언어 선택기에서 바꿀 수 있다.`,
    frontMatter: '앞부분',
    part: (n) => `제${n}부`,
    reference: '참고 자료'
  },
  topic: {
    topicEyebrow: (n) => `주제 ${n}`,
    paginationLabel: '주제',
    onThisPage: '이 페이지의 내용',
    previous: '이전',
    next: '다음'
  },
  links: { label: '링크', skills: 'AI 스킬', llms: 'AI 에이전트용(llms.txt)', issues: '문제 신고' },
  results: {
    label: '검색 결과',
    heading: (q) => `검색: ${q}`,
    searching: '검색 중…',
    none: (q) => `“${q}”에 대한 결과가 없다.`,
    browse: '목차 보기',
    failed: '검색 색인을 불러오지 못했다.',
    count: (n, more) => `결과 ${n}${more ? '+' : ''}건`,
    button: '검색'
  },
  footer: {
    tagline: '정부와 사회 부문에서 공공가치를 창출하기 위한 모범 사례를 담은 실용 안내서이며, 범위는 전 세계이다.',
    sourceAndContributions: '소스와 기여:',
    builtWith: '제작 도구:',
    ledBy: '프로젝트 책임자:'
  }
};

const svSe: UiStrings = {
  siteTitle: 'Handledning i offentligt värde',
  skipToContent: 'Hoppa till huvudinnehållet',
  nav: { contents: 'Innehåll', glossary: 'Ordlista', index: 'Register', source: 'Källa' },
  breadcrumb: { home: 'Hem', contents: 'Innehåll' },
  picker: { theme: 'Tema', locale: 'Språk', textSize: 'Textstorlek', share: 'Dela',
    search: 'Sök',
    searchInput: 'Sök i handledningen',
    searchSubmit: 'Skicka sökning'
  },
  share: {
    emailLink: 'Skicka länken med e-post',
    shareOnLinkedIn: 'Dela på LinkedIn',
    shareOnReddit: 'Dela på Reddit',
    shareOnBluesky: 'Dela på Bluesky',
    shareOnMastodon: 'Dela på Mastodon',
    copyLink: 'Kopiera länk',
    copied: 'Kopierat!',
    copyFailed: 'Det gick inte att kopiera – kopiera adressen från adressfältet i stället'
  },
  contents: {
    pageTitle: 'Innehåll',
    lead: 'Varje ämne är fristående. Läs rakt igenom för en kurs i offentligt värde, eller gå direkt till det ämne som motsvarar beslutet du står inför.',
    readingIn: (label) => `Du läser på ${label}. Byt språk med språkväljaren i sidhuvudet.`,
    frontMatter: 'Inledning',
    part: (n) => `Del ${n}`,
    reference: 'Referens'
  },
  topic: {
    topicEyebrow: (n) => `Ämne ${n}`,
    paginationLabel: 'Ämne',
    onThisPage: 'På den här sidan',
    previous: 'Föregående',
    next: 'Nästa'
  },
  links: { label: 'Länkar', skills: 'AI-färdigheter', llms: 'För AI-agenter (llms.txt)', issues: 'Rapportera ett problem' },
  results: {
    label: 'Sökresultat',
    heading: (q) => `Sökning: ${q}`,
    searching: 'Söker…',
    none: (q) => `Inga resultat för ”${q}”.`,
    browse: 'Bläddra i innehållet',
    failed: 'Sökindexet kunde inte läsas in.',
    count: (n, more) => `${n}${more ? '+' : ''} ${n === 1 ? 'resultat' : 'resultat'}`,
    button: 'Sök'
  },
  footer: {
    tagline:
      'en praktisk handbok med bästa praxis för att skapa offentligt värde inom staten och den sociala sektorn, med global räckvidd.',
    sourceAndContributions: 'Källa och bidrag:',
    builtWith: 'Byggd med',
    ledBy: 'Ledd av'
  }
};

const nlNl: UiStrings = {
  siteTitle: 'Gids publieke waarde',
  skipToContent: 'Ga naar de hoofdinhoud',
  nav: { contents: 'Inhoud', glossary: 'Woordenlijst', index: 'Register', source: 'Bron' },
  breadcrumb: { home: 'Home', contents: 'Inhoud' },
  picker: { theme: 'Thema', locale: 'Taal', textSize: 'Tekstgrootte', share: 'Delen',
    search: 'Zoeken',
    searchInput: 'Zoek in de gids',
    searchSubmit: 'Zoekopdracht verzenden'
  },
  share: {
    emailLink: 'Link per e-mail versturen',
    shareOnLinkedIn: 'Delen op LinkedIn',
    shareOnReddit: 'Delen op Reddit',
    shareOnBluesky: 'Delen op Bluesky',
    shareOnMastodon: 'Delen op Mastodon',
    copyLink: 'Link kopiëren',
    copied: 'Gekopieerd!',
    copyFailed: 'Kopiëren is niet gelukt – kopieer het adres in plaats daarvan uit de adresbalk'
  },
  contents: {
    pageTitle: 'Inhoud',
    lead: 'Elk onderwerp is zelfstandig. Lees het geheel van voor naar achter voor een cursus publieke waarde, of ga rechtstreeks naar het onderwerp dat past bij de beslissing waar u voor staat.',
    readingIn: (label) => `U leest in ${label}. Wissel van taal met de taalkeuze in de paginakop.`,
    frontMatter: 'Voorwerk',
    part: (n) => `Deel ${n}`,
    reference: 'Naslag'
  },
  topic: {
    topicEyebrow: (n) => `Onderwerp ${n}`,
    paginationLabel: 'Onderwerp',
    onThisPage: 'Op deze pagina',
    previous: 'Vorige',
    next: 'Volgende'
  },
  links: { label: 'Links', skills: 'AI-vaardigheden', llms: 'Voor AI-agenten (llms.txt)', issues: 'Een probleem melden' },
  results: {
    label: 'Zoekresultaten',
    heading: (q) => `Zoeken: ${q}`,
    searching: 'Bezig met zoeken…',
    none: (q) => `Geen resultaten voor „${q}”.`,
    browse: 'Door de inhoud bladeren',
    failed: 'De zoekindex kon niet worden geladen.',
    count: (n, more) => `${n}${more ? '+' : ''} ${n === 1 ? 'resultaat' : 'resultaten'}`,
    button: 'Zoeken'
  },
  footer: {
    tagline:
      'een praktisch handboek met beste praktijken voor het creëren van publieke waarde bij de overheid en in de sociale sector, met wereldwijd bereik.',
    sourceAndContributions: 'Bron en bijdragen:',
    builtWith: 'Gebouwd met',
    ledBy: 'Geleid door'
  }
};

const isIs: UiStrings = {
  siteTitle: 'Handbók um almannavirði',
  skipToContent: 'Fara beint í aðalefni',
  nav: { contents: 'Efnisyfirlit', glossary: 'Orðalisti', index: 'Atriðisorðaskrá', source: 'Heimild' },
  breadcrumb: { home: 'Heim', contents: 'Efnisyfirlit' },
  picker: { theme: 'Þema', locale: 'Tungumál', textSize: 'Textastærð', share: 'Deila',
    search: 'Leita',
    searchInput: 'Leita í handbókinni',
    searchSubmit: 'Senda leit'
  },
  share: {
    emailLink: 'Senda tengil í tölvupósti',
    shareOnLinkedIn: 'Deila á LinkedIn',
    shareOnReddit: 'Deila á Reddit',
    shareOnBluesky: 'Deila á Bluesky',
    shareOnMastodon: 'Deila á Mastodon',
    copyLink: 'Afrita tengil',
    copied: 'Afritað!',
    copyFailed: 'Afritun mistókst – afritaðu vistfangið úr veffangastikunni í staðinn'
  },
  contents: {
    pageTitle: 'Efnisyfirlit',
    lead: 'Hvert viðfangsefni stendur sjálfstætt. Lestu allt frá upphafi til enda sem námskeið í almannavirði, eða farðu beint í viðfangsefnið sem á við ákvörðunina sem þú stendur frammi fyrir.',
    readingIn: (label) => `Þú ert að lesa á ${label}. Skiptu um tungumál með tungumálavalinu í haus síðunnar.`,
    frontMatter: 'Inngangur',
    part: (n) => `${n}. hluti`,
    reference: 'Uppflettiefni'
  },
  topic: {
    topicEyebrow: (n) => `Viðfangsefni ${n}`,
    paginationLabel: 'Viðfangsefni',
    onThisPage: 'Á þessari síðu',
    previous: 'Fyrra',
    next: 'Næsta'
  },
  links: { label: 'Tenglar', skills: 'Gervigreindarfærni', llms: 'Fyrir gervigreindarmiðla (llms.txt)', issues: 'Tilkynna vandamál' },
  results: {
    label: 'Leitarniðurstöður',
    heading: (q) => `Leit: ${q}`,
    searching: 'Leita…',
    none: (q) => `Engar niðurstöður fyrir „${q}“.`,
    browse: 'Skoða efnisyfirlitið',
    failed: 'Ekki tókst að hlaða leitarskránni.',
    count: (n, more) => `${n}${more ? '+' : ''} ${n % 10 === 1 && n % 100 !== 11 ? 'niðurstaða' : 'niðurstöður'}`,
    button: 'Leita'
  },
  footer: {
    tagline:
      'hagnýt handbók um bestu starfsvenjur við að skapa almannavirði hjá hinu opinbera og í félagageiranum, með hnattrænt gildissvið.',
    sourceAndContributions: 'Heimild og framlög:',
    builtWith: 'Smíðað með',
    ledBy: 'Undir forystu'
  }
};

const id001: UiStrings = {
  siteTitle: 'Panduan Nilai Publik',
  skipToContent: 'Lompat ke konten utama',
  nav: { contents: 'Daftar Isi', glossary: 'Glosarium', index: 'Indeks', source: 'Sumber' },
  breadcrumb: { home: 'Beranda', contents: 'Daftar Isi' },
  picker: { theme: 'Tema', locale: 'Bahasa', textSize: 'Ukuran teks', share: 'Bagikan',
    search: 'Cari',
    searchInput: 'Cari di panduan',
    searchSubmit: 'Kirim pencarian'
  },
  share: {
    emailLink: 'Kirim Tautan lewat Surel',
    shareOnLinkedIn: 'Bagikan di LinkedIn',
    shareOnReddit: 'Bagikan di Reddit',
    shareOnBluesky: 'Bagikan di Bluesky',
    shareOnMastodon: 'Bagikan di Mastodon',
    copyLink: 'Salin Tautan',
    copied: 'Tersalin!',
    copyFailed: 'Gagal menyalin — salin dari bilah alamat'
  },
  contents: {
    pageTitle: 'Daftar Isi',
    lead: 'Setiap topik berdiri sendiri. Bacalah dari awal hingga akhir sebagai kursus nilai publik, atau langsung ke topik yang sesuai dengan keputusan yang Anda hadapi.',
    readingIn: (label) => `Dibaca dalam ${label}. Ganti bahasa lewat pemilih di header.`,
    frontMatter: 'Bagian awal',
    part: (n) => `Bagian ${n}`,
    reference: 'Rujukan'
  },
  topic: {
    topicEyebrow: (n) => `Topik ${n}`,
    paginationLabel: 'Topik',
    onThisPage: 'Di halaman ini',
    previous: 'Sebelumnya',
    next: 'Berikutnya'
  },
  links: { label: 'Tautan', skills: 'Keterampilan AI', llms: 'Untuk agen AI (llms.txt)', issues: 'Laporkan masalah' },
  results: {
    label: 'Hasil pencarian',
    heading: (q) => `Pencarian: ${q}`,
    searching: 'Mencari…',
    none: (q) => `Tidak ada hasil untuk “${q}”.`,
    browse: 'Telusuri daftar isi',
    failed: 'Indeks pencarian tidak dapat dimuat.',
    count: (n, more) => `${n}${more ? '+' : ''} hasil`,
    button: 'Cari'
  },
  footer: {
    tagline:
      'buku panduan praktis tentang praktik terbaik untuk menciptakan nilai publik di pemerintahan dan sektor sosial, dengan cakupan di seluruh dunia.',
    sourceAndContributions: 'Sumber dan kontribusi:',
    builtWith: 'Dibangun dengan',
    ledBy: 'Dipimpin oleh'
  }
};

const bn001: UiStrings = {
  siteTitle: 'জনমূল্য নির্দেশিকা',
  skipToContent: 'মূল বিষয়বস্তুতে যান',
  nav: { contents: 'সূচিপত্র', glossary: 'শব্দকোষ', index: 'নির্ঘণ্ট', source: 'উৎস' },
  breadcrumb: { home: 'হোম', contents: 'সূচিপত্র' },
  picker: { theme: 'থিম', locale: 'ভাষা', textSize: 'লেখার আকার', share: 'শেয়ার',
    search: 'অনুসন্ধান',
    searchInput: 'নির্দেশিকায় অনুসন্ধান করুন',
    searchSubmit: 'অনুসন্ধান জমা দিন'
  },
  share: {
    emailLink: 'ইমেইলে লিংক পাঠান',
    shareOnLinkedIn: 'LinkedIn-এ শেয়ার করুন',
    shareOnReddit: 'Reddit-এ শেয়ার করুন',
    shareOnBluesky: 'Bluesky-তে শেয়ার করুন',
    shareOnMastodon: 'Mastodon-এ শেয়ার করুন',
    copyLink: 'লিংক কপি করুন',
    copied: 'কপি হয়েছে!',
    copyFailed: 'কপি করা যায়নি — ঠিকানা বার থেকে কপি করুন'
  },
  contents: {
    pageTitle: 'সূচিপত্র',
    lead: 'প্রতিটি বিষয় স্বয়ংসম্পূর্ণ। জনমূল্যের একটি কোর্স হিসেবে শুরু থেকে শেষ পর্যন্ত পড়ুন, অথবা আপনার সামনের সিদ্ধান্তের সঙ্গে মেলে এমন বিষয়ে সরাসরি যান।',
    readingIn: (label) => `${label} ভাষায় পড়ছেন। শিরোনামের ভাষা বাছাইকারী থেকে ভাষা বদলান।`,
    frontMatter: 'প্রারম্ভিক অংশ',
    part: (n) => `খণ্ড ${n}`,
    reference: 'তথ্যসূত্র'
  },
  topic: {
    topicEyebrow: (n) => `বিষয় ${n}`,
    paginationLabel: 'বিষয়',
    onThisPage: 'এই পাতায়',
    previous: 'আগের',
    next: 'পরের'
  },
  links: { label: 'লিংক', skills: 'এআই স্কিল', llms: 'এআই এজেন্টদের জন্য (llms.txt)', issues: 'সমস্যা জানান' },
  results: {
    label: 'অনুসন্ধানের ফলাফল',
    heading: (q) => `অনুসন্ধান: ${q}`,
    searching: 'অনুসন্ধান চলছে…',
    none: (q) => `“${q}”-এর জন্য কোনো ফলাফল নেই।`,
    browse: 'সূচিপত্র ঘুরে দেখুন',
    failed: 'অনুসন্ধান সূচি লোড করা যায়নি।',
    count: (n, more) => `${n}${more ? '+' : ''}টি ফলাফল`,
    button: 'অনুসন্ধান'
  },
  footer: {
    tagline:
      'সরকার ও সামাজিক খাতে জনমূল্য সৃষ্টির সর্বোত্তম চর্চার একটি ব্যবহারিক নির্দেশিকা, যার পরিসর বিশ্বজুড়ে।',
    sourceAndContributions: 'উৎস ও অবদান:',
    builtWith: 'নির্মাণে ব্যবহৃত:',
    ledBy: 'প্রকল্প প্রধান:'
  }
};

// World variants of languages that also have a regional locale reuse the regional strings,
// as `cy-001` reuses `cy-gb`: the register difference is negligible for this formal content.
const zh001: UiStrings = zhCn;
const hi001: UiStrings = hiIn;
const ja001: UiStrings = jaJp;
const ko001: UiStrings = koKr;
const sv001: UiStrings = svSe;
const nl001: UiStrings = nlNl;
const is001: UiStrings = isIs;

const pt001: UiStrings = {
  siteTitle: 'Guia do Valor Público',
  skipToContent: 'Saltar para o conteúdo principal',
  nav: { contents: 'Conteúdo', glossary: 'Glossário', index: 'Índice remissivo', source: 'Fonte' },
  breadcrumb: { home: 'Início', contents: 'Conteúdo' },
  picker: { theme: 'Tema', locale: 'Idioma', textSize: 'Tamanho do texto', share: 'Partilhar',
    search: 'Pesquisar',
    searchInput: 'Pesquisar no guia',
    searchSubmit: 'Submeter pesquisa'
  },
  share: {
    emailLink: 'Enviar ligação por correio eletrónico',
    shareOnLinkedIn: 'Partilhar no LinkedIn',
    shareOnReddit: 'Partilhar no Reddit',
    shareOnBluesky: 'Partilhar no Bluesky',
    shareOnMastodon: 'Partilhar no Mastodon',
    copyLink: 'Copiar ligação',
    copied: 'Copiado!',
    copyFailed: 'Falha ao copiar — copie o endereço da barra de endereços'
  },
  contents: {
    pageTitle: 'Conteúdo',
    lead: 'Cada tópico é autónomo. Leia do princípio ao fim como um curso de valor público, ou vá diretamente ao tópico que corresponde à decisão que tem à sua frente.',
    readingIn: (label) => `A ler em ${label}. Mude de idioma no seletor do cabeçalho.`,
    frontMatter: 'Parte introdutória',
    part: (n) => `Parte ${n}`,
    reference: 'Referência'
  },
  topic: {
    topicEyebrow: (n) => `Tópico ${n}`,
    paginationLabel: 'Tópico',
    onThisPage: 'Nesta página',
    previous: 'Anterior',
    next: 'Seguinte'
  },
  links: { label: 'Ligações', skills: 'Competências de IA', llms: 'Para agentes de IA (llms.txt)', issues: 'Comunicar um problema' },
  results: {
    label: 'Resultados da pesquisa',
    heading: (q) => `Pesquisa: ${q}`,
    searching: 'A pesquisar…',
    none: (q) => `Sem resultados para “${q}”.`,
    browse: 'Percorrer o conteúdo',
    failed: 'Não foi possível carregar o índice de pesquisa.',
    count: (n, more) => `${n}${more ? '+' : ''} ${n === 1 ? 'resultado' : 'resultados'}`,
    button: 'Pesquisar'
  },
  footer: {
    tagline:
      'um manual prático de boas práticas para criar valor público no governo e no setor social, com âmbito mundial.',
    sourceAndContributions: 'Fonte e contribuições:',
    builtWith: 'Construído com o',
    ledBy: 'Dirigido por'
  }
};

const ur001: UiStrings = {
  siteTitle: 'عوامی قدر کی رہنمائی',
  skipToContent: 'مرکزی مواد پر جائیں',
  nav: { contents: 'فہرستِ مضامین', glossary: 'فرہنگ', index: 'اشاریہ', source: 'ماخذ' },
  breadcrumb: { home: 'ابتدا', contents: 'فہرستِ مضامین' },
  picker: { theme: 'تھیم', locale: 'زبان', textSize: 'متن کا سائز', share: 'شیئر',
    search: 'تلاش',
    searchInput: 'رہنمائی میں تلاش کریں',
    searchSubmit: 'تلاش جمع کریں'
  },
  share: {
    emailLink: 'لنک ای میل کریں',
    shareOnLinkedIn: 'لنکڈ اِن پر شیئر کریں',
    shareOnReddit: 'ریڈٹ پر شیئر کریں',
    shareOnBluesky: 'بلو اسکائی پر شیئر کریں',
    shareOnMastodon: 'ماسٹوڈون پر شیئر کریں',
    copyLink: 'لنک کاپی کریں',
    copied: 'کاپی ہو گیا!',
    copyFailed: 'کاپی ناکام — ایڈریس بار سے ایڈریس کاپی کریں'
  },
  contents: {
    pageTitle: 'فہرستِ مضامین',
    lead: 'ہر موضوع اپنی جگہ مکمل ہے۔ اسے عوامی قدر کے کورس کی طرح شروع سے آخر تک پڑھیں، یا سیدھا اس موضوع پر جائیں جو آپ کے سامنے موجود فیصلے سے میل کھاتا ہو۔',
    readingIn: (label) => `${label} میں پڑھ رہے ہیں۔ ہیڈر میں زبان کے انتخاب سے زبان بدلیں۔`,
    frontMatter: 'تمہیدی حصہ',
    part: (n) => `حصہ ${n}`,
    reference: 'حوالہ'
  },
  topic: {
    topicEyebrow: (n) => `موضوع ${n}`,
    paginationLabel: 'موضوع',
    onThisPage: 'اس صفحے پر',
    previous: 'پچھلا',
    next: 'اگلا'
  },
  links: { label: 'روابط', skills: 'AI مہارتیں', llms: 'AI ایجنٹس کے لیے (llms.txt)', issues: 'مسئلے کی اطلاع دیں' },
  results: {
    label: 'تلاش کے نتائج',
    heading: (q) => `تلاش: ${q}`,
    searching: 'تلاش کی جا رہی ہے…',
    none: (q) => `“${q}” کے لیے کوئی نتیجہ نہیں ملا۔`,
    browse: 'فہرستِ مضامین دیکھیں',
    failed: 'تلاش کا اشاریہ لوڈ نہیں ہو سکا۔',
    count: (n, more) => `${n}${more ? '+' : ''} ${n === 1 ? 'نتیجہ' : 'نتائج'}`,
    button: 'تلاش'
  },
  footer: {
    tagline:
      'حکومت اور سماجی شعبے میں عوامی قدر پیدا کرنے کی بہترین مشقوں کی عملی رہنمائی، جو عالمی دائرے کی ہے۔',
    sourceAndContributions: 'ماخذ اور شراکتیں:',
    builtWith: 'بنایا گیا',
    ledBy: 'قیادت'
  }
};

const da001: UiStrings = {
  siteTitle: 'Guide til offentlig værdi',
  skipToContent: 'Gå til hovedindholdet',
  nav: { contents: 'Indhold', glossary: 'Ordliste', index: 'Indeks', source: 'Kilde' },
  breadcrumb: { home: 'Forside', contents: 'Indhold' },
  picker: { theme: 'Tema', locale: 'Sprog', textSize: 'Tekststørrelse', share: 'Del',
    search: 'Søg',
    searchInput: 'Søg i guiden',
    searchSubmit: 'Send søgning'
  },
  share: {
    emailLink: 'Send link på e-mail',
    shareOnLinkedIn: 'Del på LinkedIn',
    shareOnReddit: 'Del på Reddit',
    shareOnBluesky: 'Del på Bluesky',
    shareOnMastodon: 'Del på Mastodon',
    copyLink: 'Kopiér link',
    copied: 'Kopieret!',
    copyFailed: 'Kopiering mislykkedes – kopiér adressen fra adresselinjen'
  },
  contents: {
    pageTitle: 'Indhold',
    lead: 'Hvert emne står for sig selv. Læs dem fra start til slut som et kursus i offentlig værdi, eller gå direkte til det emne, der svarer til den beslutning, du står med.',
    readingIn: (label) => `Du læser på ${label}. Skift sprog med sprogvælgeren i sidehovedet.`,
    frontMatter: 'Indledning',
    part: (n) => `Del ${n}`,
    reference: 'Reference'
  },
  topic: {
    topicEyebrow: (n) => `Emne ${n}`,
    paginationLabel: 'Emne',
    onThisPage: 'På denne side',
    previous: 'Forrige',
    next: 'Næste'
  },
  links: { label: 'Links', skills: 'AI-færdigheder', llms: 'Til AI-agenter (llms.txt)', issues: 'Meld en fejl' },
  results: {
    label: 'Søgeresultater',
    heading: (q) => `Søgning: ${q}`,
    searching: 'Søger…',
    none: (q) => `Ingen resultater for “${q}”.`,
    browse: 'Se indholdsfortegnelsen',
    failed: 'Søgeindekset kunne ikke indlæses.',
    count: (n, more) => `${n}${more ? '+' : ''} ${n === 1 ? 'resultat' : 'resultater'}`,
    button: 'Søg'
  },
  footer: {
    tagline:
      'En praktisk guide til bedste praksis for at skabe offentlig værdi i det offentlige og i den sociale sektor, skrevet til et globalt publikum.',
    sourceAndContributions: 'Kilde og bidrag:',
    builtWith: 'Bygget med',
    ledBy: 'Ledet af'
  }
};

const etEe: UiStrings = {
  siteTitle: 'Avaliku väärtuse juhend',
  skipToContent: 'Liigu põhisisu juurde',
  nav: { contents: 'Sisukord', glossary: 'Sõnastik', index: 'Register', source: 'Lähtekood' },
  breadcrumb: { home: 'Avaleht', contents: 'Sisukord' },
  picker: { theme: 'Kujundus', locale: 'Keel', textSize: 'Tekstisuurus', share: 'Jaga',
    search: 'Otsi',
    searchInput: 'Otsi juhendist',
    searchSubmit: 'Saada otsing'
  },
  share: {
    emailLink: 'Saada link e-postiga',
    shareOnLinkedIn: 'Jaga LinkedInis',
    shareOnReddit: 'Jaga Redditis',
    shareOnBluesky: 'Jaga Blueskys',
    shareOnMastodon: 'Jaga Mastodonis',
    copyLink: 'Kopeeri link',
    copied: 'Kopeeritud!',
    copyFailed: 'Kopeerimine ebaõnnestus – kopeeri aadress aadressiribalt'
  },
  contents: {
    pageTitle: 'Sisukord',
    lead: 'Iga teema seisab iseseisvalt. Loe neid algusest lõpuni kui avaliku väärtuse kursust või liigu otse teema juurde, mis vastab otsusele, mille ees sa seisad.',
    readingIn: (label) => `Loed keeles ${label}. Keele vahetamiseks kasuta päises olevat keelevalijat.`,
    frontMatter: 'Sissejuhatus',
    part: (n) => `${n}. osa`,
    reference: 'Viide'
  },
  topic: {
    topicEyebrow: (n) => `Teema ${n}`,
    paginationLabel: 'Teema',
    onThisPage: 'Sellel lehel',
    previous: 'Eelmine',
    next: 'Järgmine'
  },
  links: { label: 'Lingid', skills: 'TI-oskused', llms: 'Tehisintellekti agentidele (llms.txt)', issues: 'Teata veast' },
  results: {
    label: 'Otsingutulemused',
    heading: (q) => `Otsing: ${q}`,
    searching: 'Otsin…',
    none: (q) => `Päringule „${q}” tulemusi ei leitud.`,
    browse: 'Vaata sisukorda',
    failed: 'Otsinguindeksi laadimine ebaõnnestus.',
    count: (n, more) => `${n}${more ? '+' : ''} ${n === 1 ? 'tulemus' : 'tulemust'}`,
    button: 'Otsi'
  },
  footer: {
    tagline:
      'Praktiline juhend parimate tavade kohta avaliku väärtuse loomisel avalikus ja sotsiaalsektoris, kirjutatud ülemaailmsele auditooriumile.',
    sourceAndContributions: 'Lähtekood ja panused:',
    builtWith: 'Ehitatud tööriistadega',
    ledBy: 'Juhtinud'
  }
};

const fiFi: UiStrings = {
  siteTitle: 'Julkisen arvon opas',
  skipToContent: 'Siirry pääsisältöön',
  nav: { contents: 'Sisällysluettelo', glossary: 'Sanasto', index: 'Hakemisto', source: 'Lähdekoodi' },
  breadcrumb: { home: 'Etusivu', contents: 'Sisällysluettelo' },
  picker: { theme: 'Teema', locale: 'Kieli', textSize: 'Tekstin koko', share: 'Jaa',
    search: 'Haku',
    searchInput: 'Hae oppaasta',
    searchSubmit: 'Lähetä haku'
  },
  share: {
    emailLink: 'Lähetä linkki sähköpostilla',
    shareOnLinkedIn: 'Jaa LinkedInissä',
    shareOnReddit: 'Jaa Redditissä',
    shareOnBluesky: 'Jaa Blueskyssa',
    shareOnMastodon: 'Jaa Mastodonissa',
    copyLink: 'Kopioi linkki',
    copied: 'Kopioitu!',
    copyFailed: 'Kopiointi epäonnistui – kopioi osoite osoiteriviltä'
  },
  contents: {
    pageTitle: 'Sisällysluettelo',
    lead: 'Jokainen aihe on itsenäinen. Lue ne alusta loppuun julkisen arvon kurssina tai siirry suoraan aiheeseen, joka vastaa edessäsi olevaa päätöstä.',
    readingIn: (label) => `Luet kielellä ${label}. Vaihda kieltä otsakkeen kielivalitsimella.`,
    frontMatter: 'Johdanto',
    part: (n) => `Osa ${n}`,
    reference: 'Viite'
  },
  topic: {
    topicEyebrow: (n) => `Aihe ${n}`,
    paginationLabel: 'Aihe',
    onThisPage: 'Tällä sivulla',
    previous: 'Edellinen',
    next: 'Seuraava'
  },
  links: { label: 'Linkit', skills: 'Tekoälytaidot', llms: 'Tekoälyagenteille (llms.txt)', issues: 'Ilmoita virheestä' },
  results: {
    label: 'Hakutulokset',
    heading: (q) => `Haku: ${q}`,
    searching: 'Haetaan…',
    none: (q) => `Haulle ”${q}” ei löytynyt tuloksia.`,
    browse: 'Selaa sisällysluetteloa',
    failed: 'Hakuindeksin lataaminen epäonnistui.',
    count: (n, more) => `${n}${more ? '+' : ''} ${n === 1 ? 'tulos' : 'tulosta'}`,
    button: 'Hae'
  },
  footer: {
    tagline:
      'Käytännönläheinen opas julkisen arvon luomisen parhaisiin käytäntöihin julkisella ja kolmannella sektorilla, kirjoitettu maailmanlaajuiselle yleisölle.',
    sourceAndContributions: 'Lähdekoodi ja kontribuutiot:',
    builtWith: 'Rakennettu työkaluilla',
    ledBy: 'Johtaja'
  }
};

const itIt: UiStrings = {
  siteTitle: 'Guida al valore pubblico',
  skipToContent: 'Vai al contenuto principale',
  nav: { contents: 'Indice', glossary: 'Glossario', index: 'Indice analitico', source: 'Codice sorgente' },
  breadcrumb: { home: 'Home', contents: 'Indice' },
  picker: { theme: 'Tema', locale: 'Lingua', textSize: 'Dimensione del testo', share: 'Condividi',
    search: 'Cerca',
    searchInput: 'Cerca nella guida',
    searchSubmit: 'Invia la ricerca'
  },
  share: {
    emailLink: 'Invia il link per email',
    shareOnLinkedIn: 'Condividi su LinkedIn',
    shareOnReddit: 'Condividi su Reddit',
    shareOnBluesky: 'Condividi su Bluesky',
    shareOnMastodon: 'Condividi su Mastodon',
    copyLink: 'Copia il link',
    copied: 'Copiato!',
    copyFailed: 'Copia non riuscita – copia l\'indirizzo dalla barra degli indirizzi'
  },
  contents: {
    pageTitle: 'Indice',
    lead: 'Ogni argomento è autonomo. Leggeteli dall\'inizio alla fine come un corso sul valore pubblico oppure passate direttamente all\'argomento che corrisponde alla decisione che avete davanti.',
    readingIn: (label) => `State leggendo in ${label}. Cambiate lingua con il selettore della lingua nell'intestazione.`,
    frontMatter: 'Introduzione',
    part: (n) => `Parte ${n}`,
    reference: 'Riferimento'
  },
  topic: {
    topicEyebrow: (n) => `Argomento ${n}`,
    paginationLabel: 'Argomento',
    onThisPage: 'In questa pagina',
    previous: 'Precedente',
    next: 'Successivo'
  },
  links: { label: 'Link', skills: 'Competenze per l\'IA', llms: 'Per gli agenti di IA (llms.txt)', issues: 'Segnala un errore' },
  results: {
    label: 'Risultati della ricerca',
    heading: (q) => `Ricerca: ${q}`,
    searching: 'Ricerca in corso…',
    none: (q) => `Nessun risultato per «${q}».`,
    browse: 'Sfoglia l\'indice',
    failed: 'Impossibile caricare l\'indice di ricerca.',
    count: (n, more) => `${n}${more ? '+' : ''} ${n === 1 ? 'risultato' : 'risultati'}`,
    button: 'Cerca'
  },
  footer: {
    tagline:
      'Una guida pratica alle migliori pratiche per creare valore pubblico nel settore pubblico e nel terzo settore, scritta per un pubblico globale.',
    sourceAndContributions: 'Codice sorgente e contributi:',
    builtWith: 'Realizzato con',
    ledBy: 'Guidato da'
  }
};

const thTh: UiStrings = {
  siteTitle: 'คู่มือคุณค่าสาธารณะ',
  skipToContent: 'ข้ามไปยังเนื้อหาหลัก',
  nav: { contents: 'สารบัญ', glossary: 'อภิธานศัพท์', index: 'ดัชนี', source: 'ซอร์สโค้ด' },
  breadcrumb: { home: 'หน้าแรก', contents: 'สารบัญ' },
  picker: { theme: 'ธีม', locale: 'ภาษา', textSize: 'ขนาดตัวอักษร', share: 'แบ่งปัน',
    search: 'ค้นหา',
    searchInput: 'ค้นหาในคู่มือ',
    searchSubmit: 'ส่งคำค้นหา'
  },
  share: {
    emailLink: 'ส่งลิงก์ทางอีเมล',
    shareOnLinkedIn: 'แบ่งปันบน LinkedIn',
    shareOnReddit: 'แบ่งปันบน Reddit',
    shareOnBluesky: 'แบ่งปันบน Bluesky',
    shareOnMastodon: 'แบ่งปันบน Mastodon',
    copyLink: 'คัดลอกลิงก์',
    copied: 'คัดลอกแล้ว!',
    copyFailed: 'คัดลอกไม่สำเร็จ – โปรดคัดลอกที่อยู่จากแถบที่อยู่'
  },
  contents: {
    pageTitle: 'สารบัญ',
    lead: 'แต่ละหัวข้อเป็นเอกเทศในตัวเอง ท่านอ่านตั้งแต่ต้นจนจบเป็นหลักสูตรเรื่องคุณค่าสาธารณะ หรือข้ามไปยังหัวข้อที่ตรงกับการตัดสินใจที่อยู่ตรงหน้าท่านก็ได้',
    readingIn: (label) => `ท่านกำลังอ่านใน${label} เปลี่ยนภาษาได้จากตัวเลือกภาษาที่ส่วนหัว`,
    frontMatter: 'คำนำ',
    part: (n) => `ส่วนที่ ${n}`,
    reference: 'ข้อมูลอ้างอิง'
  },
  topic: {
    topicEyebrow: (n) => `หัวข้อ ${n}`,
    paginationLabel: 'หัวข้อ',
    onThisPage: 'ในหน้านี้',
    previous: 'ก่อนหน้า',
    next: 'ถัดไป'
  },
  links: { label: 'ลิงก์', skills: 'ทักษะสำหรับ AI', llms: 'สำหรับเอเจนต์ AI (llms.txt)', issues: 'แจ้งข้อผิดพลาด' },
  results: {
    label: 'ผลการค้นหา',
    heading: (q) => `ค้นหา: ${q}`,
    searching: 'กำลังค้นหา…',
    none: (q) => `ไม่พบผลลัพธ์สำหรับ “${q}”`,
    browse: 'เรียกดูสารบัญ',
    failed: 'โหลดดัชนีการค้นหาไม่สำเร็จ',
    count: (n, more) => `${n}${more ? '+' : ''} ${n === 1 ? 'ผลลัพธ์' : 'ผลลัพธ์'}`,
    button: 'ค้นหา'
  },
  footer: {
    tagline:
      'คู่มือปฏิบัติว่าด้วยแนวปฏิบัติที่ดีที่สุดในการสร้างคุณค่าสาธารณะในภาครัฐและภาคสังคม เขียนสำหรับผู้อ่านทั่วโลก',
    sourceAndContributions: 'ซอร์สโค้ดและการมีส่วนร่วม:',
    builtWith: 'สร้างด้วย',
    ledBy: 'นำโดย'
  }
};

const trTr: UiStrings = {
  siteTitle: 'Kamu Değeri Rehberi',
  skipToContent: 'Ana içeriğe geç',
  nav: { contents: 'İçindekiler', glossary: 'Sözlük', index: 'Dizin', source: 'Kaynak' },
  breadcrumb: { home: 'Ana sayfa', contents: 'İçindekiler' },
  picker: { theme: 'Tema', locale: 'Dil', textSize: 'Metin boyutu', share: 'Paylaş',
    search: 'Ara',
    searchInput: 'Rehberde ara',
    searchSubmit: 'Aramayı gönder'
  },
  share: {
    emailLink: 'Bağlantıyı e-postayla gönder',
    shareOnLinkedIn: 'LinkedIn\'de paylaş',
    shareOnReddit: 'Reddit\'te paylaş',
    shareOnBluesky: 'Bluesky\'de paylaş',
    shareOnMastodon: 'Mastodon\'da paylaş',
    copyLink: 'Bağlantıyı kopyala',
    copied: 'Kopyalandı!',
    copyFailed: 'Kopyalanamadı – lütfen adresi adres çubuğundan kopyalayın'
  },
  contents: {
    pageTitle: 'İçindekiler',
    lead: 'Her konu kendi başına yeterlidir. Rehberi kamu değeri üzerine bir kurs olarak baştan sona okuyabilir ya da önünüzdeki karara uyan konuya doğrudan geçebilirsiniz.',
    readingIn: (label) => `${label} dilinde okuyorsunuz. Dili üstbilgideki dil seçicisinden değiştirebilirsiniz.`,
    frontMatter: 'Önsöz',
    part: (n) => `Bölüm ${n}`,
    reference: 'Başvuru'
  },
  topic: {
    topicEyebrow: (n) => `Konu ${n}`,
    paginationLabel: 'Konu',
    onThisPage: 'Bu sayfada',
    previous: 'Önceki',
    next: 'Sonraki'
  },
  links: { label: 'Bağlantılar', skills: 'Yapay zekâ için beceriler', llms: 'Yapay zekâ ajanları için (llms.txt)', issues: 'Bir hata bildirin' },
  results: {
    label: 'Arama sonuçları',
    heading: (q) => `Ara: ${q}`,
    searching: 'Aranıyor…',
    none: (q) => `“${q}” için sonuç bulunamadı`,
    browse: 'İçindekileri gözden geçirin',
    failed: 'Arama dizini yüklenemedi',
    count: (n, more) => `${n}${more ? '+' : ''} ${n === 1 ? 'sonuç' : 'sonuç'}`,
    button: 'Ara'
  },
  footer: {
    tagline:
      'Kamu ve sosyal sektörde kamu değeri yaratmanın en iyi uygulamalarına dair pratik bir rehber, dünya çapındaki okurlar için yazılmıştır.',
    sourceAndContributions: 'Kaynak ve katkılar:',
    builtWith: 'Şununla geliştirildi:',
    ledBy: 'Yöneten:'
  }
};

const viVn: UiStrings = {
  siteTitle: 'Hướng dẫn Giá trị công',
  skipToContent: 'Chuyển đến nội dung chính',
  nav: { contents: 'Mục lục', glossary: 'Thuật ngữ', index: 'Chỉ mục', source: 'Nguồn' },
  breadcrumb: { home: 'Trang chủ', contents: 'Mục lục' },
  picker: { theme: 'Giao diện', locale: 'Ngôn ngữ', textSize: 'Cỡ chữ', share: 'Chia sẻ',
    search: 'Tìm kiếm',
    searchInput: 'Tìm trong hướng dẫn',
    searchSubmit: 'Gửi tìm kiếm'
  },
  share: {
    emailLink: 'Gửi liên kết qua email',
    shareOnLinkedIn: 'Chia sẻ trên LinkedIn',
    shareOnReddit: 'Chia sẻ trên Reddit',
    shareOnBluesky: 'Chia sẻ trên Bluesky',
    shareOnMastodon: 'Chia sẻ trên Mastodon',
    copyLink: 'Sao chép liên kết',
    copied: 'Đã sao chép!',
    copyFailed: 'Không sao chép được – vui lòng sao chép địa chỉ từ thanh địa chỉ'
  },
  contents: {
    pageTitle: 'Mục lục',
    lead: 'Mỗi chủ đề tự đứng được một mình. Bạn có thể đọc hướng dẫn từ đầu đến cuối như một khóa học về giá trị công, hoặc đi thẳng đến chủ đề phù hợp với quyết định trước mắt.',
    readingIn: (label) => `Bạn đang đọc bằng ${label}. Hãy đổi ngôn ngữ bằng bộ chọn ngôn ngữ ở đầu trang.`,
    frontMatter: 'Lời nói đầu',
    part: (n) => `Phần ${n}`,
    reference: 'Tham khảo'
  },
  topic: {
    topicEyebrow: (n) => `Chủ đề ${n}`,
    paginationLabel: 'Chủ đề',
    onThisPage: 'Trong trang này',
    previous: 'Trước',
    next: 'Tiếp'
  },
  links: { label: 'Liên kết', skills: 'Kỹ năng cho AI', llms: 'Dành cho tác tử AI (llms.txt)', issues: 'Báo lỗi' },
  results: {
    label: 'Kết quả tìm kiếm',
    heading: (q) => `Tìm: ${q}`,
    searching: 'Đang tìm…',
    none: (q) => `Không có kết quả cho “${q}”`,
    browse: 'Duyệt mục lục',
    failed: 'Không tải được chỉ mục tìm kiếm',
    count: (n, more) => `${n}${more ? '+' : ''} kết quả`,
    button: 'Tìm'
  },
  footer: {
    tagline:
      'Hướng dẫn thực hành về các thực hành tốt nhất để tạo giá trị công trong khu vực công và khu vực xã hội, viết cho độc giả trên toàn thế giới.',
    sourceAndContributions: 'Nguồn và đóng góp:',
    builtWith: 'Xây dựng bằng:',
    ledBy: 'Do dẫn dắt:'
  }
};

const STRINGS: Record<string, UiStrings> = {
  'en-gb-oxendict': enGbOxendict,
  'en-gb': enGb,
  'en-us': enUs,
  'en-001': en001,
  'cy-gb': cyGb,
  'cy-001': cy001,
  'es-001': es001,
  'fr-001': fr001,
  'de-de': deDe,
  'zh-cn': zhCn,
  'ar-001': ar001,
  'hi-in': hiIn,
  'ja-jp': jaJp,
  'ru-ru': ruRu,
  'ko-kr': koKr,
  'sv-se': svSe,
  'nl-nl': nlNl,
  'is-is': isIs,
  'zh-001': zh001,
  'hi-001': hi001,
  'ja-001': ja001,
  'ko-001': ko001,
  'sv-001': sv001,
  'nl-001': nl001,
  'is-001': is001,
  'ru-001': ruRu,
  'sw-tz': swTz,
  'sw-001': swTz,
  'id-001': id001,
  'bn-001': bn001,
  'de-001': deDe,
  'id-id': id001,
  'zh-tw': zhTw,
  'pt-001': pt001,
  'ur-001': ur001,
  'da-001': da001,
  'et-ee': etEe,
  'et-001': etEe,
  'fi-fi': fiFi,
  'fi-001': fiFi,
  'it-it': itIt,
  'it-001': itIt,
  'th-th': thTh,
  'th-001': thTh,
  'tr-tr': trTr,
  'tr-001': trTr,
  'vi-vn': viVn,
  'vi-001': viVn
};

/** UI chrome strings for `locale`, falling back to English if the locale is unknown. */
export function ui(locale: string | undefined): UiStrings {
  return (locale && STRINGS[locale]) || en;
}
