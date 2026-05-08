"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "ar" | "fr" | "es" | "pt" | "ja";

export const languages: { code: Language; name: string; localName: string }[] = [
  { code: "en", name: "English", localName: "English" },
  { code: "ar", name: "Arabic", localName: "العربية" },
  { code: "fr", name: "French", localName: "Français" },
  { code: "es", name: "Spanish", localName: "Español" },
  { code: "pt", name: "Portuguese", localName: "Português" },
  { code: "ja", name: "Japanese", localName: "日本語" },
];

interface Translations {
  nav: {
    features: string;
    blogs: string;
    download: string;
    login: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    serverList: string;
    protection: string;
    status: string;
    encrypted: string;
    killSwitch: string;
    dnsLeak: string;
    connected: string;
    sessionDuration: string;
    ipAddress: string;
  };
  features: {
    mainTitle: string;
    mainSubtitle: string;
    encryption: { eyebrow: string; title: string; desc: string };
    global: { eyebrow: string; title: string; desc: string };
    privacy: { eyebrow: string; title: string; desc: string };
    performance: { eyebrow: string; title: string; desc: string };
    compatibility: { eyebrow: string; title: string; desc: string };
    killswitch: { eyebrow: string; title: string; desc: string };
  };
  blog: {
    badge: string;
    title: string;
    subtitle: string;
    readArticle: string;
    backToBlogs: string;
    shareArticle: string;
    postNotFound: string;
    featuredImage: string;
  };
  footer: {
    product: string;
    useCases: string;
    legal: string;
    features: string;
    downloadiOS: string;
    streaming: string;
    gaming: string;
    travel: string;
    remoteWork: string;
    privacy: string;
    terms: string;
    blogs: string;
    cookies: string;
    copyright: string;
    tagline: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: { features: "Features", blogs: "Blogs", download: "Download Now", login: "Login" },
    hero: {
      badge: "Introducing",
      title: "Fast Vpn Turbo Ip Changer",
      subtitle: "Stay private online, secure every connection, and unlock the world.",
      serverList: "Server List",
      protection: "Protection",
      status: "Status",
      encrypted: "AES-256 Encrypted",
      killSwitch: "Kill Switch",
      dnsLeak: "DNS Leak Protection",
      connected: "Connected",
      sessionDuration: "Session Duration",
      ipAddress: "IP ADDRESS"
    },
    features: {
      mainTitle: "A smart way to browse, stream, and feel secure.",
      mainSubtitle: "Experience the harmony of speed and security through an ecosystem that adapts, protects, and empowers your digital life.",
      encryption: { eyebrow: "Encryption", title: "Military-grade protection.", desc: "AES-256 encryption ensures your data remains readable only to you, keeping hackers and trackers at bay." },
      global: { eyebrow: "Global Network", title: "Access content anywhere.", desc: "Connect to thousands of servers worldwide to bypass geo-restrictions and enjoy true internet freedom." },
      privacy: { eyebrow: "Privacy First", title: "Strict no-logs policy.", desc: "We never track, store, or sell your personal data. Your browsing history is your business, not ours." },
      performance: { eyebrow: "Performance", title: "Blazing fast speeds.", desc: "Optimized server network designed for high-speed streaming, gaming, and downloading without buffering." },
      compatibility: { eyebrow: "Compatibility", title: "Protect every device.", desc: "One subscription secures your phone, laptop, tablet, and smart TV with easy-to-use apps for all platforms." },
      killswitch: { eyebrow: "Safety Net", title: "Automatic Kill Switch.", desc: "If your VPN connection drops, our kill switch instantly blocks internet access to prevent data leaks." }
    },
    blog: {
      badge: "Stay Updated & Secured",
      title: "Fast Vpn Turbo Ip Changer Blogs",
      subtitle: "Insights, security tips, and updates from the world of digital privacy.",
      readArticle: "Read Article",
      backToBlogs: "Back to Blogs",
      shareArticle: "Share this article",
      postNotFound: "Post Not Found",
      featuredImage: "FEATURED IMAGE"
    },
    footer: {
      product: "Product", useCases: "Use Cases", legal: "Legal", features: "Features",
      downloadiOS: "Download iOS", streaming: "Streaming VPN", gaming: "Gaming VPN", travel: "Travel VPN",
      remoteWork: "Remote Work VPN", privacy: "Privacy Policy", terms: "Terms of Service", blogs: "Blogs",
      cookies: "Cookies", copyright: "All rights reserved.", tagline: "Protect your privacy with secure, encrypted connections and access to the global internet with Fast Vpn Turbo Ip Changer."
    }
  },
  ar: {
    nav: { features: "الميزات", blogs: "المدونة", download: "حمل الآن", login: "تسجيل الدخول" },
    hero: {
      badge: "نقدم لكم",
      title: "Fast Vpn Turbo Ip Changer",
      subtitle: "ابق آمناً عبر الإنترنت، وقم بتأمين كل اتصال، وافتح العالم.",
      serverList: "قائمة الخوادم",
      protection: "الحماية",
      status: "الحالة",
      encrypted: "تشفير AES-256",
      killSwitch: "مفتاح الإيقاف",
      dnsLeak: "حماية تسرب DNS",
      connected: "متصل",
      sessionDuration: "مدة الجلسة",
      ipAddress: "عنوان IP"
    },
    features: {
      mainTitle: "طريقة ذكية للتصفح والبث والشعور بالأمان.",
      mainSubtitle: "جرب انسجام السرعة والأمان من خلال نظام بيئي يتكيف ويحمي ويمكن حياتك الرقمية.",
      encryption: { eyebrow: "التشفير", title: "حماية عسكرية.", desc: "يضمن تشفير AES-256 أن تظل بياناتك قابلة للقراءة لك فقط، مما يبقي المتسللين والمتتبعين بعيداً." },
      global: { eyebrow: "شبكة عالمية", title: "الوصول إلى المحتوى في أي مكان.", desc: "اتصل بآلاف الخوادم حول العالم لتجاوز القيود الجغرافية والتمتع بحرية الإنترنت الحقيقية." },
      privacy: { eyebrow: "الخصوصية أولاً", title: "سياسة صارمة لعدم الاحتفاظ بالسجلات.", desc: "نحن لا نتتبع أو نخزن أو نبيع بياناتك الشخصية أبداً. سجل تصفحك هو عملك الخاص، وليس عملنا." },
      performance: { eyebrow: "الأداء", title: "سرعات فائقة.", desc: "شبكة خوادم محسنة مصممة للبث عالي السرعة والألعاب والتنزيل دون تخزين مؤقت." },
      compatibility: { eyebrow: "التوافق", title: "حماية كل جهاز.", desc: "اشتراك واحد يؤمن هاتفك وجهاز الكمبيوتر المحمول والجهاز اللوحي والتلفزيون الذكي مع تطبيقات سهلة الاستخدام لجميع المنصات." },
      killswitch: { eyebrow: "شبكة الأمان", title: "مفتاح الإيقاف التلقائي.", desc: "إذا انقطع اتصال VPN الخاص بك، يقوم مفتاح الإيقاف الخاص بنا بحظر الوصول إلى الإنترنت فوراً لمنع تسرب البيانات." }
    },
    blog: {
      badge: "ابق على اطلاع وآمن",
      title: "مدونات Fast Vpn Turbo Ip Changer",
      subtitle: "رؤى ونصائح أمنية وتحديثات من عالم الخصوصية الرقمية.",
      readArticle: "اقرأ المقال",
      backToBlogs: "العودة إلى المدونات",
      shareArticle: "شارك هذا المقال",
      postNotFound: "المقال غير موجود",
      featuredImage: "صورة مميزة"
    },
    footer: {
      product: "المنتج", useCases: "حالات الاستخدام", legal: "قانوني", features: "الميزات",
      downloadiOS: "تحميل iOS", streaming: "VPN للبث", gaming: "VPN للألعاب", travel: "VPN للسفر",
      remoteWork: "VPN للعمل عن بعد", privacy: "سياسة الخصوصية", terms: "شروط الخدمة", blogs: "المدونة",
      cookies: "ملفات تعريف الارتباط", copyright: "جميع الحقوق محفوظة.", tagline: "احمِ خصوصيتك باتصالات مشفرة وآمنة وتمتع بالوصول إلى الإنترنت العالمي مع Fast Vpn Turbo Ip Changer."
    }
  },
  fr: {
    nav: { features: "Fonctionnalités", blogs: "Blogs", download: "Télécharger", login: "Connexion" },
    hero: {
      badge: "Présentation",
      title: "Fast Vpn Turbo Ip Changer",
      subtitle: "Restez privé en ligne, sécurisez chaque connexion et débloquez le monde.",
      serverList: "Liste des serveurs",
      protection: "Protection",
      status: "Statut",
      encrypted: "Crypté AES-256",
      killSwitch: "Kill Switch",
      dnsLeak: "Protection fuite DNS",
      connected: "Connecté",
      sessionDuration: "Durée de session",
      ipAddress: "ADRESSE IP"
    },
    features: {
      mainTitle: "Une façon intelligente de naviguer, streamer et se sentir en sécurité.",
      mainSubtitle: "Découvrez l'harmonie de la vitesse et de la sécurité grâce à un écosystème qui s'adapte, protège et renforce votre vie numérique.",
      encryption: { eyebrow: "Chiffrement", title: "Protection de grade militaire.", desc: "Le chiffrement AES-256 garantit que vos données ne sont lisibles que par vous, gardant les pirates et les traceurs à distance." },
      global: { eyebrow: "Réseau Mondial", title: "Accédez au contenu partout.", desc: "Connectez-vous à des milliers de serveurs dans le monde entier pour contourner les restrictions géographiques et profiter d'une véritable liberté sur Internet." },
      privacy: { eyebrow: "Confidentialité d'abord", title: "Politique stricte de non-journalisation.", desc: "Nous ne suivons, ne stockons ni ne vendons jamais vos données personnelles. Votre historique de navigation est votre affaire, pas la nôtre." },
      performance: { eyebrow: "Performance", title: "Vitesses fulgurantes.", desc: "Réseau de serveurs optimisé conçu pour le streaming haute vitesse, les jeux et le téléchargement sans mise en mémoire tampon." },
      compatibility: { eyebrow: "Compatibilité", title: "Protégez chaque appareil.", desc: "Un abonnement sécurise votre téléphone, ordinateur portable, tablette et Smart TV avec des applications faciles à utiliser pour toutes les plateformes." },
      killswitch: { eyebrow: "Filet de sécurité", title: "Kill Switch automatique.", desc: "Si votre connexion VPN est interrompue, notre Kill Switch bloque instantanément l'accès à Internet pour empêcher les fuites de données." }
    },
    blog: {
      badge: "Restez informé & sécurisé",
      title: "Blogs Fast Vpn Turbo Ip Changer",
      subtitle: "Idées, conseils de sécurité et mises à jour du monde de la confidentialité numérique.",
      readArticle: "Lire l'article",
      backToBlogs: "Retour aux blogs",
      shareArticle: "Partager cet article",
      postNotFound: "Article non trouvé",
      featuredImage: "IMAGE EN VEDETTE"
    },
    footer: {
      product: "Produit", useCases: "Cas d'utilisation", legal: "Légal", features: "Fonctionnalités",
      downloadiOS: "Télécharger iOS", streaming: "VPN Streaming", gaming: "VPN Gaming", travel: "VPN Voyage",
      remoteWork: "VPN Télétravail", privacy: "Politique de confidentialité", terms: "Conditions d'utilisation", blogs: "Blogs",
      cookies: "Cookies", copyright: "Tous droits réservés.", tagline: "Protégez votre vie privée avec des connexions sécurisées et cryptées et accédez à l'internet mondial avec Fast Vpn Turbo Ip Changer."
    }
  },
  es: {
    nav: { features: "Características", blogs: "Blogs", download: "Descargar", login: "Acceso" },
    hero: {
      badge: "Presentando",
      title: "Fast Vpn Turbo Ip Changer",
      subtitle: "Manténgase privado en línea, asegure cada conexión y desbloquee el mundo.",
      serverList: "Lista de servidores",
      protection: "Protección",
      status: "Estado",
      encrypted: "Cifrado AES-256",
      killSwitch: "Interruptor de corte",
      dnsLeak: "Protección fuga DNS",
      connected: "Conectado",
      sessionDuration: "Duración de sesión",
      ipAddress: "DIRECCIÓN IP"
    },
    features: {
      mainTitle: "Una forma inteligente de navegar, transmitir y sentirse seguro.",
      mainSubtitle: "Experimente la armonía de la velocidad y la seguridad a través de un ecosistema que se adapta, protege y potencia su vida digital.",
      encryption: { eyebrow: "Cifrado", title: "Protección de grado militar.", desc: "El cifrado AES-256 garantiza que sus datos solo sean legibles para usted, manteniendo alejados a los piratas informáticos y rastreadores." },
      global: { eyebrow: "Red Global", title: "Acceda al contenido en cualquier lugar.", desc: "Conéctese a miles de servidores en todo el mundo para evitar las restricciones geográficas y disfrutar de una verdadera libertad en Internet." },
      privacy: { eyebrow: "Privacidad Primero", title: "Política estricta de no registros.", desc: "Nunca rastreamos, almacenamos ni vendemos sus datos personales. Su historial de navegación es asunto suyo, no nuestro." },
      performance: { eyebrow: "Rendimiento", title: "Velocidades ultrarrápidas.", desc: "Red de servidores optimizada diseñada para transmisión de alta velocidad, juegos y descargas sin almacenamiento en búfer." },
      compatibility: { eyebrow: "Compatibilidad", title: "Proteja cada dispositivo.", desc: "Una suscripción asegura su teléfono, computadora portátil, tableta y Smart TV con aplicaciones fáciles de usar para todas las plataformas." },
      killswitch: { eyebrow: "Red de seguridad", title: "Interruptor de corte automático.", desc: "Si su conexión VPN se cae, nuestro interruptor de corte bloquea instantáneamente el acceso a Internet para evitar fugas de datos." }
    },
    blog: {
      badge: "Manténgase actualizado y seguro",
      title: "Blogs de Fast Vpn Turbo Ip Changer",
      subtitle: "Información, consejos de seguridad y actualizaciones del mundo de la privacidad digital.",
      readArticle: "Leer artículo",
      backToBlogs: "Volver a los blogs",
      shareArticle: "Compartir este artículo",
      postNotFound: "Artículo no encontrado",
      featuredImage: "IMAGEN DESTACADA"
    },
    footer: {
      product: "Producto", useCases: "Casos de uso", legal: "Legal", features: "Características",
      downloadiOS: "Descargar iOS", streaming: "VPN Streaming", gaming: "VPN Juegos", travel: "VPN Viajes",
      remoteWork: "VPN Trabajo Remoto", privacy: "Política de privacidad", terms: "Términos de servicio", blogs: "Blogs",
      cookies: "Cookies", copyright: "Todos los derechos reservados.", tagline: "Proteja su privacidad con conexiones seguras y cifradas y acceda a internet global con Fast Vpn Turbo Ip Changer."
    }
  },
  pt: {
    nav: { features: "Recursos", blogs: "Blogs", download: "Baixar", login: "Entrar" },
    hero: {
      badge: "Apresentando",
      title: "Fast Vpn Turbo Ip Changer",
      subtitle: "Fique privado online, proteja cada conexão e desbloqueie o mundo.",
      serverList: "Lista de Servidores",
      protection: "Proteção",
      status: "Status",
      encrypted: "Criptografia AES-256",
      killSwitch: "Kill Switch",
      dnsLeak: "Proteção vazamento DNS",
      connected: "Conectado",
      sessionDuration: "Duração da Sessão",
      ipAddress: "ENDEREÇO IP"
    },
    features: {
      mainTitle: "Uma maneira inteligente de navegar, transmitir e se sentir seguro.",
      mainSubtitle: "Experimente a harmonia de velocidade e segurança através de um ecossistema que se adapta, protege e capacita sua vida digital.",
      encryption: { eyebrow: "Criptografia", title: "Proteção de nível militar.", desc: "A criptografia AES-256 garante que seus dados permaneçam legíveis apenas para você, mantendo hackers e rastreadores afastados." },
      global: { eyebrow: "Rede Global", title: "Acesse conteúdo em qualquer lugar.", desc: "Conecte-se a milhares de servidores em todo o mundo para contornar restrições geográficas e desfrutar da verdadeira liberdade na internet." },
      privacy: { eyebrow: "Privacidade Primeiro", title: "Política estrita de não registros.", desc: "Nunca rastreamos, armazenamos ou vendemos seus dados pessoais. Seu histórico de navegação é da sua conta, não da nossa." },
      performance: { eyebrow: "Desempenho", title: "Velocidades ultrarrápidas.", desc: "Rede de servidores otimizada projetada para streaming de alta velocidade, jogos e downloads sem buffer." },
      compatibility: { eyebrow: "Compatibilidade", title: "Proteja cada dispositivo.", desc: "Uma assinatura protege seu telefone, laptop, tablet e Smart TV com aplicativos fáceis de usar para todas as plataformas." },
      killswitch: { eyebrow: "Rede de Segurança", title: "Kill Switch Automático.", desc: "Se sua conexão VPN cair, nosso kill switch bloqueia instantaneamente o acesso à internet para evitar vazamentos de dados." }
    },
    blog: {
      badge: "Mantenha-se atualizado e seguro",
      title: "Blogs Fast Vpn Turbo Ip Changer",
      subtitle: "Insights, dicas de segurança e atualizações do mundo da privacidade digital.",
      readArticle: "Ler Artigo",
      backToBlogs: "Voltar para Blogs",
      shareArticle: "Compartilhar este artigo",
      postNotFound: "Artigo não encontrado",
      featuredImage: "IMAGEM EM DESTAQUE"
    },
    footer: {
      product: "Produto", useCases: "Casos de uso", legal: "Legal", features: "Recursos",
      downloadiOS: "Baixar iOS", streaming: "VPN Streaming", gaming: "VPN Jogos", travel: "VPN Viagem",
      remoteWork: "VPN Trabalho Remoto", privacy: "Política de Privacidade", terms: "Termos de Serviço", blogs: "Blogs",
      cookies: "Cookies", copyright: "Todos os direitos reservados.", tagline: "Proteja sua privacidade com conexões seguras e criptografadas e acesse a internet global com Fast Vpn Turbo Ip Changer."
    }
  },
  ja: {
    nav: { features: "機能", blogs: "ブログ", download: "ダウンロード", login: "ログイン" },
    hero: {
      badge: "ご紹介",
      title: "Fast Vpn Turbo Ip Changer",
      subtitle: "オンラインでプライバシーを守り、すべての接続を保護し、世界を解放します。",
      serverList: "サーバーリスト",
      protection: "保護",
      status: "ステータス",
      encrypted: "AES-256暗号化",
      killSwitch: "キルスイッチ",
      dnsLeak: "DNS漏洩防止",
      connected: "接続済み",
      sessionDuration: "セッション時間",
      ipAddress: "IPアドレス"
    },
    features: {
      mainTitle: "閲覧、ストリーミング、そして安心のためのスマートな方法。",
      mainSubtitle: "デジタルライフを適応させ、保護し、力を与えるエコシステムを通じて、スピードとセキュリティの調和を体験してください。",
      encryption: { eyebrow: "暗号化", title: "軍事レベルの保護。", desc: "AES-256暗号化により、データはあなただけが読み取れるようになり、ハッカーや追跡者を寄せ付けません。" },
      global: { eyebrow: "グローバルネットワーク", title: "どこでもコンテンツにアクセス。", desc: "世界中の何千ものサーバーに接続して、地理的制限を回避し、真のインターネットの自由を楽しんでください。" },
      privacy: { eyebrow: "プライバシー第一", title: "厳格なノーログポリシー。", desc: "私たちはあなたの個人データを追跡、保存、または販売することは決してありません。あなたの閲覧履歴はあなたのビジネスであり、私たちのものではありません。" },
      performance: { eyebrow: "パフォーマンス", title: "驚異的なスピード。", desc: "バッファリングなしで高速ストリーミング、ゲーム、ダウンロード用に設計された最適化されたサーバーネットワーク。" },
      compatibility: { eyebrow: "互換性", title: "すべてのデバイスを保護。", desc: "1つのサブスクリプションで、電話、ラップトップ、タブレット、スマートTVを保護し、すべてのプラットフォーム向けの使いやすいアプリを提供します。" },
      killswitch: { eyebrow: "セーフティネット", title: "自動キルスイッチ。", desc: "VPN接続が切断された場合、キルスイッチが即座にインターネットアクセスをブロックし、データ漏洩を防ぎます。" }
    },
    blog: {
      badge: "最新情報を入手して安全に",
      title: "Fast Vpn Turbo Ip Changer ブログ",
      subtitle: "デジタルプライバシーの世界からの洞察、セキュリティのヒント、および更新情報。",
      readArticle: "記事を読む",
      backToBlogs: "ブログに戻る",
      shareArticle: "この記事を共有する",
      postNotFound: "記事が見つかりません",
      featuredImage: "注目の画像"
    },
    footer: {
      product: "製品", useCases: "使用例", legal: "法的情報", features: "機能",
      downloadiOS: "iOS版をダウンロード", streaming: "ストリーミング用VPN", gaming: "ゲーム用VPN", travel: "旅行用VPN",
      remoteWork: "リモートワーク用VPN", privacy: "プライバシーポリシー", terms: "利用規約", blogs: "ブログ",
      cookies: "クッキー", copyright: "全著作権所有。", tagline: "Fast Vpn Turbo Ip Changerで安全な暗号化接続によりプライバシーを保護し、グローバルインターネットにアクセスしましょう。"
    }
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const dir = language === "ar" ? "rtl" : "ltr";

  // Effect to update document direction
  React.useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return default fallback for isolated renders (e.g. previews)
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: translations["en"],
      dir: "ltr" as "ltr" | "rtl"
    };
  }
  return context;
}
