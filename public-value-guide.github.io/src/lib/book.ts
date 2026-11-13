// Shared book types and the part manifest.
//
// This module holds no topic prose — only the small metadata that both the
// server load functions and the Svelte components need, so it is safe to import
// from either side. The prose lives in `#lib/server/book.ts`, which is
// server-only and therefore never reaches a client bundle.

/** One entry in the table of contents. */
export type TopicRef = {
  /** URL slug, e.g. `1-1-introduction-to-public-value` or `preface`. */
  slug: string;
  /** Topic number as printed, e.g. `1.1`. Empty for front matter. */
  number: string;
  /** Topic title without the `Topic N.N — ` prefix. */
  title: string;
  /** Part number this topic belongs to; 0 for front matter. */
  part: number;
};

/** One of the book's five parts. */
export type Part = {
  number: number;
  title: string;
  /** The one-line framing shown under the part title. */
  tagline: string;
};

/** One locale the book is written in, per `locales/<slug>/topics/` upstream. */
export type Locale = {
  /** URL slug and directory name, e.g. `en-gb`. Matches the source repo's `locales/<slug>/`. */
  slug: string;
  /** Reader-facing label for the locale picker. */
  label: string;
};

/**
 * The book's locales. Kept in sync by hand with the source repo's `locales/`
 * directory (see spec/index.md §4a upstream). Add a locale here, and to
 * `#lib/i18n`'s `STRINGS`, only once `scripts/sync-content.sh` reports every
 * topic synced for it — an incomplete locale would otherwise offer a
 * picker option that 404s on whichever topic has no translation yet.
 *
 * Labels follow the book's own endonym-first convention: the language name
 * in its own language (its endonym), then a hyphen-separated region and, if
 * applicable, script/spelling variant, each also given in that language
 * (mirroring the English rows' "Great Britain", "Oxford", and so on). The
 * bare endonym with no suffix marks the CLDR "World" (`-001`) variant of a
 * language, matching the existing `en-001` row.
 */
export const LOCALES: Locale[] = [
  { slug: 'en-gb-oxendict', label: 'English - Great Britain - Oxford' },
  { slug: 'en-gb', label: 'English - Great Britain' },
  { slug: 'en-us', label: 'English - United States' },
  { slug: 'en-001', label: 'English' },
  { slug: 'cy-gb', label: 'Cymraeg - Prydain Fawr' },
  { slug: 'cy-001', label: 'Cymraeg' },
  { slug: 'es-001', label: 'Español' },
  { slug: 'fr-001', label: 'Français' },
  { slug: 'de-de', label: 'Deutsch - Deutschland' },
  { slug: 'zh-cn', label: '中文 - 中国大陆 - 简体' },
  { slug: 'ar-001', label: 'العربية' },
  { slug: 'hi-in', label: 'हिन्दी - भारत' },
  { slug: 'ja-jp', label: '日本語 - 日本' },
  { slug: 'ru-ru', label: 'Русский - Россия' },
  { slug: 'ko-kr', label: '한국어 - 대한민국' },
  { slug: 'sv-se', label: 'Svenska - Sverige' },
  { slug: 'nl-nl', label: 'Nederlands - Nederland' },
  { slug: 'is-is', label: 'Íslenska - Ísland' },
  { slug: 'sw-tz', label: 'Kiswahili - Tanzania' },
  { slug: 'zh-001', label: '中文 - 简体' },
  { slug: 'hi-001', label: 'हिन्दी' },
  { slug: 'ja-001', label: '日本語' },
  { slug: 'ko-001', label: '한국어' },
  { slug: 'sv-001', label: 'Svenska' },
  { slug: 'nl-001', label: 'Nederlands' },
  { slug: 'is-001', label: 'Íslenska' },
  { slug: 'ru-001', label: 'Русский' },
  { slug: 'sw-001', label: 'Kiswahili' },
  { slug: 'id-001', label: 'Bahasa Indonesia' },
  { slug: 'bn-001', label: 'বাংলা' },
  { slug: 'de-001', label: 'Deutsch' },
  { slug: 'id-id', label: 'Bahasa Indonesia - Indonesia' },
  { slug: 'zh-tw', label: '中文 - 台灣 - 繁體' },
  { slug: 'pt-001', label: 'Português' },
  { slug: 'ur-001', label: 'اردو' },
  { slug: 'da-001', label: 'Dansk' },
  { slug: 'et-ee', label: 'Eesti' },
  { slug: 'et-001', label: 'Eesti' },
  { slug: 'fi-fi', label: 'Suomi' },
  { slug: 'fi-001', label: 'Suomi' },
  { slug: 'it-it', label: 'Italiano' },
  { slug: 'it-001', label: 'Italiano' },
  { slug: 'th-th', label: 'ไทย' },
  { slug: 'th-001', label: 'ไทย' },
  { slug: 'tr-tr', label: 'Türkçe' },
  { slug: 'tr-001', label: 'Türkçe' },
  { slug: 'vi-vn', label: 'Tiếng Việt' },
  { slug: 'vi-001', label: 'Tiếng Việt' }
];

/**
 * Locale slugs, sorted by code, for validating a route param against the
 * known set and for the header picker's ordering. Sorting by code (rather
 * than keeping `LOCALES`' declared order) means a `-001` "world" variant
 * always sorts immediately before its regional siblings, since `-001` sorts
 * before any letter-starting suffix — e.g. `en-001` before `en-gb`.
 */
export const LOCALE_SLUGS: string[] = LOCALES.map((locale) => locale.slug).sort();

/**
 * The locale served at unprefixed reference pages (glossary, index) and used
 * for "browse the topics" links from locale-neutral pages. Oxford spelling
 * is the book's own house style (`spec/oxford-spelling.md` upstream) and its
 * canonical/source-of-truth locale (`spec/index.md` §4a), so it is the
 * natural default.
 */
export const DEFAULT_LOCALE = 'en-gb-oxendict';

/** Is `value` one of the book's known locale slugs? */
export function isLocale(value: string): boolean {
  return LOCALE_SLUGS.includes(value);
}

/**
 * The locale route that best matches a browser language tag, or `undefined`
 * when the book has nothing for that language.
 *
 * Tags are BCP 47 as browsers report them (`cy-GB`, `zh-Hans-CN`, `en_AU`):
 * case and `_` are normalized and a script subtag is dropped. An exact slug
 * wins (`cy-GB` -> `cy-gb`, `en-GB` -> `en-gb`). Otherwise the language's
 * international World locale is used (`en-AU` -> `en-001`, `fr-CA` ->
 * `fr-001`). With no World locale, the first locale in that language stands
 * in (`de-AT` -> `de-de`).
 */
export function localeForLanguageTag(tag: string): string | undefined {
  const parts = tag
    .trim()
    .toLowerCase()
    .replace(/_/g, '-')
    .split('-')
    .filter((part, index) => !(index > 0 && /^[a-z]{4}$/.test(part)));
  const [language, region] = parts;
  if (!language) return undefined;
  if (region && isLocale(`${language}-${region}`)) return `${language}-${region}`;
  if (isLocale(`${language}-001`)) return `${language}-001`;
  return LOCALE_SLUGS.find((slug) => slug.startsWith(`${language}-`));
}

/**
 * `LOCALES`, ordered for display: the default locale first, then grouped by
 * language (the locale slug's primary subtag, e.g. `en` in `en-gb-oxendict`),
 * with a `-001` "world" variant sorted before its regional siblings within
 * each group, then alphabetically by label. Grouping by slug rather than by
 * parsing the label text keeps this correct regardless of how a label is
 * worded. This does not fall out of a plain alphabetical sort on its own —
 * "English" (en-001) would sort before "English - Great Britain" (en-gb)
 * alphabetically, which is the wrong order for a "world" variant among its
 * regional siblings in the other direction — so the `-001` check is explicit.
 */
export function sortedLocales(locales: Locale[] = LOCALES): Locale[] {
  const languageOf = (locale: Locale) => locale.slug.split('-')[0];
  const [defaults, rest] = [
    locales.filter((locale) => locale.slug === DEFAULT_LOCALE),
    locales.filter((locale) => locale.slug !== DEFAULT_LOCALE)
  ];
  rest.sort((a, b) => {
    const language = languageOf(a).localeCompare(languageOf(b));
    if (language !== 0) return language;
    const aIsWorld = a.slug.endsWith('-001');
    const bIsWorld = b.slug.endsWith('-001');
    if (aIsWorld !== bIsWorld) return aIsWorld ? -1 : 1;
    return a.label.localeCompare(b.label);
  });
  return [...defaults, ...rest];
}

/**
 * The five parts, in reading order. Kept in sync by hand with the source repo's
 * README — the topic files themselves record only their own number, not the
 * part groupings or taglines.
 */
export const PARTS: Part[] = [
  {
    number: 1,
    title: 'Foundations',
    tagline:
      'why public value is different from market value or democratic mandate alone, and the models that explain it'
  },
  {
    number: 2,
    title: 'Evaluation and Evidence',
    tagline: "the analyst's toolkit: valuing outcomes, building the case, testing claims"
  },
  {
    number: 3,
    title: 'Systems, Governance and Priorities',
    tagline: 'how public and social-sector organizations are structured, funded, and held accountable'
  },
  {
    number: 4,
    title: 'Global and Societal Issues',
    tagline:
      'public value beyond one institution: behaviour, trust, the planet, and the public conversation'
  },
  {
    number: 5,
    title: 'Digital, Software, and Technology',
    tagline:
      'the public value of technology: digital government, artificial intelligence, software, data, and cybersecurity'
  }
];

/**
 * `PARTS`' title and tagline, translated per locale. Keyed by part number.
 * English variants share the canonical English wording (`PARTS` itself);
 * only locales whose topic prose is actually translated get an entry here.
 * `cy-001` reuses `cy-gb`'s wording, matching the book repo's own decision to
 * reuse `cy-gb` prose for `cy-001` (see spec/index.md upstream).
 */
const PART_TRANSLATIONS: Record<string, Record<number, { title: string; tagline: string }>> = {
  'cy-gb': {
    1: {
      title: 'Sylfeini',
      tagline:
        "pam mae gwerth cyhoeddus yn wahanol i werth marchnad neu fandad democrataidd yn unig, a'r modelau sy'n ei egluro"
    },
    2: {
      title: 'Gwerthuso a Thystiolaeth',
      tagline: "pecyn offer y dadansoddwr: prisio canlyniadau, adeiladu'r achos, profi honiadau"
    },
    3: {
      title: 'Systemau, Llywodraethiant a Blaenoriaethau',
      tagline:
        "sut mae sefydliadau cyhoeddus a sector-cymdeithasol wedi'u strwythuro, eu hariannu, a'u dal yn atebol"
    },
    4: {
      title: 'Materion Byd-eang a Chymdeithasol',
      tagline:
        "gwerth cyhoeddus y tu hwnt i un sefydliad: ymddygiad, ymddiriedaeth, y blaned, a'r sgwrs gyhoeddus"
    },
    5: {
      title: 'Digidol, Meddalwedd, a Thechnoleg',
      tagline:
        "gwerth cyhoeddus technoleg: llywodraeth ddigidol, deallusrwydd artiffisial, meddalwedd, data, a seiberddiogelwch"
    }
  },
  'es-001': {
    1: {
      title: 'Fundamentos',
      tagline:
        'por qué el valor público difiere del valor de mercado o de un mandato democrático por sí solos, y los modelos que lo explican'
    },
    2: {
      title: 'Evaluación y Evidencia',
      tagline:
        'el conjunto de herramientas del analista: valorar los resultados, construir el caso, poner a prueba las afirmaciones'
    },
    3: {
      title: 'Sistemas, Gobernanza y Prioridades',
      tagline:
        'cómo se estructuran, financian y responsabilizan las organizaciones públicas y del sector social'
    },
    4: {
      title: 'Cuestiones Globales y Sociales',
      tagline:
        'el valor público más allá de una sola institución: el comportamiento, la confianza, el planeta y la conversación pública'
    },
    5: {
      title: 'Digital, Software y Tecnología',
      tagline:
        'el valor público de la tecnología: gobierno digital, inteligencia artificial, software, datos y ciberseguridad'
    }
  },
  'fr-001': {
    1: {
      title: 'Fondements',
      tagline:
        'pourquoi la valeur publique diffère de la seule valeur marchande ou du seul mandat démocratique, et les modèles qui l\'expliquent'
    },
    2: {
      title: 'Évaluation et données probantes',
      tagline:
        "la boîte à outils de l'analyste : valoriser les résultats, construire l'argumentaire, mettre les affirmations à l'épreuve"
    },
    3: {
      title: 'Systèmes, gouvernance et priorités',
      tagline:
        'comment les organisations publiques et du secteur social sont structurées, financées, et tenues responsables'
    },
    4: {
      title: 'Enjeux mondiaux et sociétaux',
      tagline:
        "la valeur publique au-delà d'une seule institution : comportement, confiance, la planète, et le débat public"
    },
    5: {
      title: 'Numérique, logiciels et technologie',
      tagline:
        "la valeur publique de la technologie : gouvernement numérique, intelligence artificielle, logiciels, données, et cybersécurité"
    }
  },
  'de-de': {
    1: {
      title: 'Grundlagen',
      tagline:
        'warum sich öffentlicher Wert von reinem Marktwert oder demokratischem Mandat unterscheidet, und die Modelle, die das erklären'
    },
    2: {
      title: 'Evaluation und Evidenz',
      tagline:
        'der Werkzeugkasten der Analystin: Ergebnisse bewerten, den Fall aufbauen, Behauptungen prüfen'
    },
    3: {
      title: 'Systeme, Governance, und Prioritäten',
      tagline:
        'wie öffentliche und Sozialsektor-Organisationen strukturiert, finanziert, und zur Rechenschaft gezogen werden'
    },
    4: {
      title: 'Globale und gesellschaftliche Fragen',
      tagline:
        'öffentlicher Wert jenseits einer Institution: Verhalten, Vertrauen, der Planet, und das öffentliche Gespräch'
    },
    5: {
      title: 'Digitales, Software, und Technologie',
      tagline:
        'der öffentliche Wert von Technologie: digitale Verwaltung, künstliche Intelligenz, Software, Daten, und Cybersicherheit'
    }
  },
  'zh-tw': {
    1: {
      title: '基礎',
      tagline: '為什麼公共價值不同於單純的市場價值或民主授權,以及解釋這一點的各種模型'
    },
    2: {
      title: '評估與證據',
      tagline: '分析者的工具箱:為成果估值、構建論證、檢驗主張'
    },
    3: {
      title: '體系、治理與優先事項',
      tagline: '公共與社會部門組織是如何被構建、被資助,並被追究責任的'
    },
    4: {
      title: '全球與社會議題',
      tagline: '超越單一機構的公共價值:行為、信任、地球,以及公共對話'
    },
    5: {
      title: '數位、軟體與技術',
      tagline: '技術的公共價值:數位政府、人工智慧、軟體、資料與網路安全'
    }
  },
  'zh-cn': {
    1: {
      title: '基础',
      tagline: '为什么公共价值不同于单纯的市场价值或民主授权,以及解释这一点的各种模型'
    },
    2: {
      title: '评估与证据',
      tagline: '分析者的工具箱:为成果估值、构建论证、检验主张'
    },
    3: {
      title: '体系、治理与优先事项',
      tagline: '公共与社会部门组织是如何被构建、被资助,并被追究责任的'
    },
    4: {
      title: '全球与社会议题',
      tagline: '超越单一机构的公共价值:行为、信任、地球,以及公共对话'
    },
    5: {
      title: '数字、软件与技术',
      tagline: '技术的公共价值:数字政府、人工智能、软件、数据与网络安全'
    }
  },
  'ar-001': {
    1: {
      title: 'الأسس',
      tagline: 'لماذا تختلف القيمة العامة عن قيمة السوق أو التفويض الديمقراطي وحدهما، والنماذج التي تفسر ذلك'
    },
    2: {
      title: 'التقييم والأدلة',
      tagline: 'مجموعة أدوات المحلل: تقدير قيمة النتائج، وبناء الحجة، واختبار الادعاءات'
    },
    3: {
      title: 'الأنظمة والحوكمة والأولويات',
      tagline: 'كيف تُبنى منظمات القطاعين العام والاجتماعي فعليًا، وكيف تُموَّل، وكيف تُساءَل'
    },
    4: {
      title: 'القضايا العالمية والمجتمعية',
      tagline: 'القيمة العامة بما يتجاوز مؤسسة واحدة: السلوك، والثقة، والكوكب، والحوار العام'
    },
    5: {
      title: 'الرقمنة والبرمجيات والتكنولوجيا',
      tagline:
        'القيمة العامة للتكنولوجيا: الحكومة الرقمية، والذكاء الاصطناعي، والبرمجيات، والبيانات، والأمن السيبراني'
    }
  },
  'hi-in': {
    1: {
      title: 'आधार',
      tagline: 'लोक मूल्य बाज़ार मूल्य या केवल लोकतांत्रिक जनादेश से अलग क्यों है, और वे मॉडल जो इसे स्पष्ट करते हैं'
    },
    2: {
      title: 'मूल्यांकन और साक्ष्य',
      tagline: 'विश्लेषक की उपकरण-पेटी: परिणामों का मूल्यांकन, मामले का निर्माण, दावों की परीक्षा'
    },
    3: {
      title: 'प्रणालियाँ, शासन और प्राथमिकताएँ',
      tagline: 'लोक और सामाजिक-क्षेत्र संस्थाएँ कैसे संरचित, वित्तपोषित, और जवाबदेह बनाई जाती हैं'
    },
    4: {
      title: 'वैश्विक और सामाजिक मुद्दे',
      tagline: 'एक संस्था से परे लोक मूल्य: व्यवहार, विश्वास, ग्रह, और लोक संवाद'
    },
    5: {
      title: 'डिजिटल, सॉफ़्टवेयर, और प्रौद्योगिकी',
      tagline: 'प्रौद्योगिकी का लोक मूल्य: डिजिटल सरकार, कृत्रिम बुद्धिमत्ता, सॉफ़्टवेयर, डेटा, और साइबर सुरक्षा'
    }
  },
  'ja-jp': {
    1: {
      title: '基礎',
      tagline: 'なぜ公共価値は市場価値や民主的負託だけとは異なるのか、そしてそれを説明するモデル'
    },
    2: {
      title: '評価とエビデンス',
      tagline: '成果を評価し、論拠を組み立て、主張を検証するための分析者の道具箱'
    },
    3: {
      title: 'システム、ガバナンス、優先順位',
      tagline: '公共・社会セクターの組織がどう構造化され、資金供給され、説明責任を果たしているか'
    },
    4: {
      title: 'グローバルかつ社会的な課題',
      tagline: '単一の組織を超えた公共価値:行動、信頼、地球、そして公共的言説'
    },
    5: {
      title: 'デジタル、ソフトウェア、テクノロジー',
      tagline: '技術の公共価値:デジタル政府、人工知能、ソフトウェア、データ、サイバーセキュリティ'
    }
  },
  'ru-ru': {
    1: {
      title: 'Основы',
      tagline:
        'чем общественная ценность отличается от рыночной стоимости или одного лишь демократического мандата и какие модели это объясняют'
    },
    2: {
      title: 'Оценка и доказательства',
      tagline:
        'инструментарий аналитика: оценка результатов, построение обоснования, проверка утверждений'
    },
    3: {
      title: 'Системы, управление и приоритеты',
      tagline:
        'как устроены, финансируются и подотчётны организации государственного и социального секторов'
    },
    4: {
      title: 'Глобальные и общественные вопросы',
      tagline:
        'общественная ценность за пределами одной организации: поведение, доверие, планета и публичный диалог'
    },
    5: {
      title: 'Цифровые технологии, программное обеспечение и технологии',
      tagline:
        'общественная ценность технологий: цифровое государство, искусственный интеллект, программное обеспечение, данные и кибербезопасность'
    }
  },
  'ko-kr': {
    1: {
      title: '기초',
      tagline: '공공가치가 시장 가치나 민주적 위임만으로와 어떻게 다른지, 그리고 이를 설명하는 모형'
    },
    2: {
      title: '평가와 증거',
      tagline: '분석가의 도구 상자: 성과의 가치 평가, 논거 구축, 주장 검증'
    },
    3: {
      title: '체제, 거버넌스, 우선순위',
      tagline: '공공 및 사회 부문 조직이 어떻게 구조화되고, 재원을 받고, 책임을 지는가'
    },
    4: {
      title: '글로벌 및 사회적 쟁점',
      tagline: '한 기관을 넘어선 공공가치: 행동, 신뢰, 지구, 공적 대화'
    },
    5: {
      title: '디지털, 소프트웨어, 기술',
      tagline: '기술의 공공가치: 디지털 정부, 인공지능, 소프트웨어, 데이터, 사이버 보안'
    }
  },
  'sv-se': {
    1: {
      title: 'Grunder',
      tagline: 'varför offentligt värde skiljer sig från marknadsvärde eller demokratiskt mandat ensamt, och modellerna som förklarar det'
    },
    2: {
      title: 'Utvärdering och evidens',
      tagline: 'analytikerns verktygslåda: att värdera utfall, bygga argumentet och pröva påståenden'
    },
    3: {
      title: 'System, styrning och prioriteringar',
      tagline: 'hur organisationer i offentlig sektor och social sektor är strukturerade, finansierade och ansvarsskyldiga'
    },
    4: {
      title: 'Globala och samhälleliga frågor',
      tagline: 'offentligt värde bortom en enskild institution: beteende, förtroende, planeten och det offentliga samtalet'
    },
    5: {
      title: 'Digitalt, mjukvara och teknik',
      tagline: 'teknikens offentliga värde: digital förvaltning, artificiell intelligens, mjukvara, data och cybersäkerhet'
    }
  },
  'nl-nl': {
    1: {
      title: 'Grondslagen',
      tagline: 'waarom publieke waarde verschilt van marktwaarde of democratisch mandaat alleen, en de modellen die dat verklaren'
    },
    2: {
      title: 'Evaluatie en bewijs',
      tagline: 'de gereedschapskist van de analist: uitkomsten waarderen, de businesscase opbouwen en beweringen toetsen'
    },
    3: {
      title: 'Systemen, bestuur en prioriteiten',
      tagline: 'hoe organisaties in de publieke en sociale sector zijn ingericht, gefinancierd en aanspreekbaar'
    },
    4: {
      title: 'Mondiale en maatschappelijke vraagstukken',
      tagline: 'publieke waarde voorbij één instelling: gedrag, vertrouwen, de planeet en het publieke gesprek'
    },
    5: {
      title: 'Digitaal, software en technologie',
      tagline: 'de publieke waarde van technologie: digitale overheid, kunstmatige intelligentie, software, data en cybersecurity'
    }
  },
  'is-is': {
    1: {
      title: 'Grunnur',
      tagline: 'hvers vegna almannavirði er annað en markaðsvirði eða lýðræðislegt umboð eitt og sér, og líkönin sem útskýra það'
    },
    2: {
      title: 'Mat og sönnunargögn',
      tagline: 'verkfærakista greinandans: að verðmeta árangur, byggja viðskiptarökin og prófa fullyrðingar'
    },
    3: {
      title: 'Kerfi, stjórnarhættir og forgangsröðun',
      tagline: 'hvernig skipulagsheildir í opinbera geiranum og félagageiranum eru byggðar upp, fjármagnaðar og gerðar ábyrgar'
    },
    4: {
      title: 'Hnattræn og samfélagsleg málefni',
      tagline: 'almannavirði handan einnar stofnunar: hegðun, traust, jörðin og opinber umræða'
    },
    5: {
      title: 'Stafrænt, hugbúnaður og tækni',
      tagline: 'almannavirði tækninnar: stafræn stjórnsýsla, gervigreind, hugbúnaður, gögn og netöryggi'
    }
  },
  'id-001': {
    1: {
      title: 'Fondasi',
      tagline:
        'mengapa nilai publik berbeda dari nilai pasar atau mandat demokratis semata, dan model-model yang menjelaskannya'
    },
    2: {
      title: 'Evaluasi dan Bukti',
      tagline: 'perangkat analis: menilai hasil, membangun argumen, menguji klaim'
    },
    3: {
      title: 'Sistem, Tata Kelola, dan Prioritas',
      tagline:
        'bagaimana organisasi sektor publik dan sektor sosial distrukturkan, didanai, dan dimintai pertanggungjawaban'
    },
    4: {
      title: 'Isu Global dan Kemasyarakatan',
      tagline: 'nilai publik di luar satu lembaga: perilaku, kepercayaan, planet, dan percakapan publik'
    },
    5: {
      title: 'Digital, Perangkat Lunak, dan Teknologi',
      tagline:
        'nilai publik teknologi: pemerintahan digital, kecerdasan buatan, perangkat lunak, data, dan keamanan siber'
    }
  },
  'bn-001': {
    1: {
      title: 'ভিত্তি',
      tagline:
        'জনমূল্য কেন কেবল বাজারমূল্য বা গণতান্ত্রিক ম্যান্ডেট থেকে আলাদা, এবং যে মডেলগুলো তা ব্যাখ্যা করে'
    },
    2: {
      title: 'মূল্যায়ন ও প্রমাণ',
      tagline: 'বিশ্লেষকের সরঞ্জাম: ফলাফলের মূল্য নির্ধারণ, যুক্তি গঠন, দাবি যাচাই'
    },
    3: {
      title: 'ব্যবস্থা, শাসন ও অগ্রাধিকার',
      tagline:
        'সরকারি ও সামাজিক খাতের প্রতিষ্ঠান কীভাবে কাঠামোবদ্ধ, অর্থায়িত এবং জবাবদিহির আওতাভুক্ত'
    },
    4: {
      title: 'বৈশ্বিক ও সামাজিক বিষয়',
      tagline: 'একটি প্রতিষ্ঠানের বাইরে জনমূল্য: আচরণ, আস্থা, পৃথিবী ও জনসংলাপ'
    },
    5: {
      title: 'ডিজিটাল, সফটওয়্যার ও প্রযুক্তি',
      tagline:
        'প্রযুক্তির জনমূল্য: ডিজিটাল সরকার, কৃত্রিম বুদ্ধিমত্তা, সফটওয়্যার, উপাত্ত ও সাইবার নিরাপত্তা'
    }
  },
  'sw-tz': {
    1: {
      title: 'Misingi',
      tagline:
        'kwa nini thamani ya umma ni tofauti na thamani ya soko au mamlaka ya kidemokrasia, na mifano inayoieleza'
    },
    2: {
      title: 'Tathmini na Ushahidi',
      tagline: 'zana za mchambuzi: kupima thamani ya matokeo, kujenga hoja, na kujaribu madai'
    },
    3: {
      title: 'Mifumo, Utawala na Vipaumbele',
      tagline:
        'jinsi mashirika ya sekta ya umma na ya kijamii yanavyopangwa, kufadhiliwa, na kuwajibishwa'
    },
    4: {
      title: 'Masuala ya Kimataifa na ya Kijamii',
      tagline: 'thamani ya umma zaidi ya shirika moja: tabia, imani, sayari, na mazungumzo ya umma'
    },
    5: {
      title: 'Kidijitali, Programu na Teknolojia',
      tagline:
        'thamani ya umma ya teknolojia: serikali mtandao, akili bandia, programu, data, na usalama wa mtandao'
    }
  }
};
PART_TRANSLATIONS['cy-001'] = PART_TRANSLATIONS['cy-gb'];
PART_TRANSLATIONS['zh-001'] = PART_TRANSLATIONS['zh-cn'];
PART_TRANSLATIONS['hi-001'] = PART_TRANSLATIONS['hi-in'];
PART_TRANSLATIONS['ja-001'] = PART_TRANSLATIONS['ja-jp'];
PART_TRANSLATIONS['ko-001'] = PART_TRANSLATIONS['ko-kr'];
PART_TRANSLATIONS['sv-001'] = PART_TRANSLATIONS['sv-se'];
PART_TRANSLATIONS['nl-001'] = PART_TRANSLATIONS['nl-nl'];
PART_TRANSLATIONS['is-001'] = PART_TRANSLATIONS['is-is'];
PART_TRANSLATIONS['ru-001'] = PART_TRANSLATIONS['ru-ru'];
PART_TRANSLATIONS['sw-001'] = PART_TRANSLATIONS['sw-tz'];
PART_TRANSLATIONS['de-001'] = PART_TRANSLATIONS['de-de'];
PART_TRANSLATIONS['id-id'] = PART_TRANSLATIONS['id-001'];
PART_TRANSLATIONS['et-ee'] = {
  1: { title: 'Alused', tagline: 'Miks avalik väärtus erineb turuväärtusest ja demokraatlikust mandaadist ning mudelid, mis seda selgitavad' },
  2: { title: 'Hindamine ja tõendid', tagline: 'Analüütiku tööriistakast: tulemuste väärtustamine, juhtumi ülesehitamine ja väidete proovilepanek' },
  3: { title: 'Süsteemid, juhtimine ja prioriteedid', tagline: 'Kuidas avalikke ja sotsiaalseid organisatsioone struktureeritakse, rahastatakse ja vastutusele võetakse' },
  4: { title: 'Ühiskondlikud ja globaalsed küsimused', tagline: 'Avalik väärtus ühe organisatsiooni piiridest kaugemal: käitumine, usaldus, planeet ja avalik vestlus' },
  5: { title: 'Digitaalne, tarkvara ja tehnoloogia', tagline: 'Tehnoloogia avalik väärtus: digitaalne valitsemine, tehisintellekt, tarkvara, andmed ja küberturvalisus' }
};
PART_TRANSLATIONS['et-001'] = PART_TRANSLATIONS['et-ee'];
PART_TRANSLATIONS['fi-fi'] = {
  1: { title: 'Perusteet', tagline: 'Miksi julkinen arvo eroaa markkina-arvosta ja demokraattisesta mandaatista, ja mallit, jotka sen selittävät' },
  2: { title: 'Arviointi ja näyttö', tagline: 'Analyytikon työkalupakki: lopputulosten arvottaminen, perustelun rakentaminen ja väitteiden koetteleminen' },
  3: { title: 'Järjestelmät, hallinto ja prioriteetit', tagline: 'Miten julkiset ja kolmannen sektorin organisaatiot jäsennetään, rahoitetaan ja pidetään vastuullisina' },
  4: { title: 'Yhteiskunnalliset ja globaalit kysymykset', tagline: 'Julkinen arvo yksittäisen organisaation rajojen ulkopuolella: käyttäytyminen, luottamus, planeetta ja julkinen keskustelu' },
  5: { title: 'Digitaalisuus, ohjelmistot ja teknologia', tagline: 'Teknologian julkinen arvo: digitaalinen hallinto, tekoäly, ohjelmistot, data ja kyberturvallisuus' }
};
PART_TRANSLATIONS['fi-001'] = PART_TRANSLATIONS['fi-fi'];
PART_TRANSLATIONS['it-it'] = {
  1: { title: 'Fondamenti', tagline: 'Perché il valore pubblico differisce dal valore di mercato e dal mandato democratico, e i modelli che lo spiegano' },
  2: { title: 'Valutazione ed evidenze', tagline: 'La cassetta degli attrezzi dell\'analista: valutare i risultati, costruire il caso e mettere alla prova le affermazioni' },
  3: { title: 'Sistemi, governance e priorità', tagline: 'Come le organizzazioni pubbliche e del terzo settore sono strutturate, finanziate e chiamate a rispondere' },
  4: { title: 'Questioni sociali e globali', tagline: 'Il valore pubblico oltre i confini di una singola organizzazione: comportamento, fiducia, pianeta e discorso pubblico' },
  5: { title: 'Digitale, software e tecnologia', tagline: 'Il valore pubblico della tecnologia: governo digitale, intelligenza artificiale, software, dati e cybersicurezza' }
};
PART_TRANSLATIONS['it-001'] = PART_TRANSLATIONS['it-it'];
PART_TRANSLATIONS['th-th'] = {
  1: { title: 'รากฐาน', tagline: 'ทำไมคุณค่าสาธารณะจึงต่างจากคุณค่าตลาดและอาณัติประชาธิปไตย และแบบจำลองที่อธิบายมัน' },
  2: { title: 'การประเมินและหลักฐาน', tagline: 'กล่องเครื่องมือของนักวิเคราะห์ ประเมินผลลัพธ์ สร้างกรณี และทดสอบข้ออ้าง' },
  3: { title: 'ระบบ ธรรมาภิบาล และลำดับความสำคัญ', tagline: 'องค์กรภาครัฐและภาคสังคมถูกจัดโครงสร้าง ให้ทุน และทำให้รับผิดชอบอย่างไร' },
  4: { title: 'ประเด็นทางสังคมและระดับโลก', tagline: 'คุณค่าสาธารณะเกินกว่าขอบเขตขององค์กรเดียว พฤติกรรม ความไว้วางใจ ดาวเคราะห์ และวาทกรรมสาธารณะ' },
  5: { title: 'ดิจิทัล ซอฟต์แวร์ และเทคโนโลยี', tagline: 'คุณค่าสาธารณะของเทคโนโลยี รัฐบาลดิจิทัล ปัญญาประดิษฐ์ ซอฟต์แวร์ ข้อมูล และความมั่นคงปลอดภัยไซเบอร์' }
};
PART_TRANSLATIONS['th-001'] = PART_TRANSLATIONS['th-th'];
PART_TRANSLATIONS['tr-tr'] = {
  1: { title: 'Temeller', tagline: 'Kamu değerinin piyasa değerinden ve demokratik yetkiden neden farklı olduğu ve onu açıklayan modeller' },
  2: { title: 'Değerlendirme ve kanıt', tagline: 'Analistin araç kutusu: sonuçları ölçmek, gerekçeleri kurmak ve iddiaları sınamak' },
  3: { title: 'Sistemler, yönetişim ve öncelikler', tagline: 'Kamu ve sosyal sektör kuruluşları nasıl yapılandırılır, fonlanır ve hesap verebilir kılınır' },
  4: { title: 'Toplumsal ve küresel konular', tagline: 'Tek bir kuruluşun ötesinde kamu değeri: davranış, güven, gezegen ve kamusal söylem' },
  5: { title: 'Dijital, yazılım ve teknoloji', tagline: 'Teknolojinin kamu değeri: dijital devlet, yapay zekâ, yazılım, veri ve siber güvenlik' }
};
PART_TRANSLATIONS['tr-001'] = PART_TRANSLATIONS['tr-tr'];
PART_TRANSLATIONS['vi-vn'] = {
  1: { title: 'Nền tảng', tagline: 'Vì sao giá trị công khác với giá trị thị trường và ủy quyền dân chủ, và các mô hình giải thích điều đó' },
  2: { title: 'Đánh giá và bằng chứng', tagline: 'Bộ công cụ của nhà phân tích: định giá kết quả, xây dựng luận cứ và kiểm nghiệm các tuyên bố' },
  3: { title: 'Hệ thống, quản trị và ưu tiên', tagline: 'Cách các tổ chức công và khu vực xã hội được cấu trúc, tài trợ và buộc phải giải trình' },
  4: { title: 'Các vấn đề xã hội và toàn cầu', tagline: 'Giá trị công vượt ra ngoài một tổ chức đơn lẻ: hành vi, niềm tin, hành tinh và diễn ngôn công' },
  5: { title: 'Số, phần mềm và công nghệ', tagline: 'Giá trị công của công nghệ: chính phủ số, trí tuệ nhân tạo, phần mềm, dữ liệu và an ninh mạng' }
};
PART_TRANSLATIONS['vi-001'] = PART_TRANSLATIONS['vi-vn'];
PART_TRANSLATIONS['da-001'] = {
  1: { title: 'Grundlag', tagline: 'Hvorfor offentlig værdi adskiller sig fra markedsværdi og demokratisk mandat, og de modeller der forklarer det' },
  2: { title: 'Vurdering og dokumentation', tagline: 'Analytikerens værktøjskasse: værdisætning af resultater, opbygning af sagen og afprøvning af påstande' },
  3: { title: 'Systemer, styring og prioriteter', tagline: 'Hvordan offentlige og sociale organisationer struktureres, finansieres og holdes ansvarlige' },
  4: { title: 'Samfundsmæssige og globale spørgsmål', tagline: 'Offentlig værdi ud over den enkelte organisation: adfærd, tillid, planeten og den offentlige samtale' },
  5: { title: 'Digital, software og teknologi', tagline: 'Teknologiens offentlige værdi: digital forvaltning, AI, software, data og cybersikkerhed' }
};
PART_TRANSLATIONS['ur-001'] = {
  1: { title: 'بنیادیں', tagline: 'عوامی قدر تنہا منڈی کی قدر یا جمہوری مینڈیٹ سے مختلف کیوں ہے، اور اسے سمجھانے والے نمونے' },
  2: { title: 'جائزہ اور شواہد', tagline: 'تجزیہ کار کا آلاتی خانہ: نتائج کی قدر کاری، مقدمہ بنانا، دعووں کی جانچ' },
  3: { title: 'نظام، حکمرانی اور ترجیحات', tagline: 'عوامی اور سماجی شعبے کے ادارے کیسے ترتیب دیے، فنڈ کیے، اور جوابدہ ٹھہرائے جاتے ہیں' },
  4: { title: 'عالمی اور سماجی مسائل', tagline: 'کسی ایک ادارے سے آگے عوامی قدر: رویہ، اعتماد، کرۂ ارض، اور عوامی گفتگو' },
  5: { title: 'ڈیجیٹل، سافٹ ویئر اور ٹیکنالوجی', tagline: 'ٹیکنالوجی کی عوامی قدر: ڈیجیٹل حکومت، مصنوعی ذہانت، سافٹ ویئر، ڈیٹا، اور سائبر سکیورٹی' }
};
PART_TRANSLATIONS['pt-001'] = {
  1: { title: 'Fundamentos', tagline: 'por que razão o valor público é diferente do valor de mercado ou do mandato democrático por si sós, e os modelos que o explicam' },
  2: { title: 'Avaliação e evidência', tagline: 'a caixa de ferramentas do analista: valorizar resultados, construir o caso, testar afirmações' },
  3: { title: 'Sistemas, governação e prioridades', tagline: 'como as organizações do setor público e do setor social são estruturadas, financiadas e responsabilizadas' },
  4: { title: 'Questões globais e societais', tagline: 'o valor público para além de uma instituição: comportamento, confiança, o planeta e a conversa pública' },
  5: { title: 'Digital, software e tecnologia', tagline: 'o valor público da tecnologia: governo digital, inteligência artificial, software, dados e cibersegurança' }
};

/** `PARTS`, translated for `locale` where a translation exists, English otherwise. */
export function partsFor(locale: string): Part[] {
  const translation = PART_TRANSLATIONS[locale];
  if (!translation) return PARTS;
  return PARTS.map((part) => ({ ...part, ...(translation[part.number] ?? {}) }));
}

/** The site's public origin, for canonical URLs and the sitemap. */
export const SITE_URL = 'https://public-value-guide.github.io';

/** Where the book's source lives, for "edit this page" and provenance links. */
export const SOURCE_REPO = 'https://github.com/public-value-guide/public-value-guide';

/** Where the Claude Code skills for this guide live, in the source repo. */
export const SKILLS_REPO = `${SOURCE_REPO}/tree/main/skills`;
