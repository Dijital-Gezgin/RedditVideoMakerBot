export const siteConfig = {
  name: "Grafika",
  legalName: "Grafika Tanıtım Hizmetleri San. ve Tic. Ltd. Şti.",
  url: "https://www.grafika.com.tr",
  tagline: "Grafika, tasarımı mekâna dönüştürür.",
  description:
    "1996'dan bu yana fuar standı tasarımı, iç mekân dekorasyonu, tabela ve kurumsal kimlik alanlarında anahtar teslim çözümler.",
  foundingYear: 1996,
  founder: "Filiz Avcı Belet",
  phone: "+90 232 463 02 23",
  phoneHref: "tel:+902324630223",
  email: "grafika@grafika.com.tr",
  logo: "https://www.grafika.com.tr/wp-content/uploads/2025/12/logo.png",
  favicon:
    "https://www.grafika.com.tr/wp-content/uploads/2025/12/grafika_favikon-1.jpg",
  addresses: [
    {
      label: "Merkez Ofis — İzmir",
      lines: ["Talatpaşa Bulvarı No:34 K.1/1 Alsancak", "İzmir, Türkiye"],
    },
    {
      label: "İstanbul Lojistik ve Depo",
      lines: ["Mimsan Sanayi Sitesi 1730. Sokak No:32 Esenyurt", "İstanbul, Türkiye"],
    },
  ],
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  highlights: string[];
  gallery: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
};

export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
};

export const heroSlides = [
  {
    image: "https://www.grafika.com.tr/wp-content/uploads/2026/01/elsitel01.jpg",
    title: "Fuar standlarında marka deneyimi",
    subtitle: "Tasarım, üretim ve uygulamayı tek çatı altında yönetiyoruz.",
  },
  {
    image: "https://www.grafika.com.tr/wp-content/uploads/2026/01/savronik01.jpg",
    title: "Uluslararası fuarlarda güvenilir çözüm ortağı",
    subtitle: "Berlin, Hannover, Frankfurt ve daha fazlasında anahtar teslim projeler.",
  },
  {
    image: "https://www.grafika.com.tr/wp-content/uploads/2025/12/07.jpg",
    title: "İç mekânları markanızın imzasına dönüştürüyoruz",
    subtitle: "Showroom, mağaza ve ticari alanlarda estetik ve işlevsellik bir arada.",
  },
  {
    image: "https://www.grafika.com.tr/wp-content/uploads/2025/12/08.jpg",
    title: "1996'dan bugüne yaratıcı mekânlar",
    subtitle: "Ziyaretçilerin aklında kalan, hissedilen ve hatırlanan tasarımlar.",
  },
];

export const services: Service[] = [
  {
    slug: "fuar-standi",
    title: "Fuar Standı Tasarım ve Uygulama",
    shortTitle: "Fuar Standları",
    description:
      "Fuar standlarını yalnızca sergileme alanı değil, marka deneyimi olarak ele alıyoruz. Özgün tasarım dili, doğru malzeme seçimi ve anahtar teslim uygulama.",
    image: "https://www.grafika.com.tr/wp-content/uploads/2025/12/01.jpg",
    highlights: [
      "Özel tasarım ahşap standlar",
      "Maxima modüler stand sistemleri",
      "Uluslararası fuar projeleri",
      "Anahtar teslim tasarım ve kurulum",
    ],
    gallery: [
      "https://www.grafika.com.tr/wp-content/uploads/2026/01/elsitel01.jpg",
      "https://www.grafika.com.tr/wp-content/uploads/2026/01/savronik01.jpg",
      "https://www.grafika.com.tr/wp-content/uploads/2026/01/yapimerkezi011.jpg",
      "https://www.grafika.com.tr/wp-content/uploads/2026/01/imbat.jpg",
      "https://www.grafika.com.tr/wp-content/uploads/2026/01/2017-010.jpg",
      "https://www.grafika.com.tr/wp-content/uploads/2026/01/IMG_8850.jpg",
    ],
  },
  {
    slug: "ic-mekan-tasarimi-ve-uygulama",
    title: "İç Mekan Tasarımı ve Uygulama",
    shortTitle: "Mekan Tasarımları",
    description:
      "Ofisler, showroomlar, mağazalar ve ticari alanlarda estetik ile kullanım konforunu bir araya getiriyoruz.",
    image: "https://www.grafika.com.tr/wp-content/uploads/2025/12/1453osmanli4.jpg",
    highlights: [
      "Showroom ve mağaza dekorasyonu",
      "Kurumsal ofis uygulamaları",
      "Marka kimliğine uygun mekân tasarımı",
      "Uygulama ve montaj hizmeti",
    ],
    gallery: [
      "https://www.grafika.com.tr/wp-content/uploads/2025/12/1453osmanli4.jpg",
      "https://www.grafika.com.tr/wp-content/uploads/2025/12/Karsiyaka_1513-768x512-1.jpg",
      "https://www.grafika.com.tr/wp-content/uploads/2026/01/IMG_9365.jpg",
      "https://www.grafika.com.tr/wp-content/uploads/2026/01/IMG_9359.jpg",
    ],
  },
  {
    slug: "tabela",
    title: "Tabela Tasarım ve Uygulama",
    shortTitle: "Tabelalar",
    description:
      "Yönlendirme, cephe ve iç mekân tabela sistemlerinde tasarım, üretim ve montaj hizmeti sunuyoruz.",
    image: "https://www.grafika.com.tr/wp-content/uploads/2025/12/6.jpg",
    highlights: [
      "Kurumsal tabela sistemleri",
      "LED aydınlatmalı uygulamalar",
      "Yönlendirme ve bilgilendirme panoları",
      "Montaj ve bakım desteği",
    ],
    gallery: [
      "https://www.grafika.com.tr/wp-content/uploads/2025/12/6.jpg",
      "https://www.grafika.com.tr/wp-content/uploads/2025/12/ege.png",
    ],
  },
  {
    slug: "logo",
    title: "Logo Tasarımı",
    shortTitle: "Logo",
    description:
      "Markanızın ilk izlenimini güçlendiren, özgün ve uygulanabilir logo tasarımları geliştiriyoruz.",
    image: "https://www.grafika.com.tr/wp-content/uploads/2025/12/kurumsal_kimlik_03.jpg",
    highlights: [
      "Kurumsal logo tasarımı",
      "Revizyon ve modernizasyon",
      "Tüm mecralara uygun dosya teslimi",
      "Marka rehberi desteği",
    ],
    gallery: [
      "https://www.grafika.com.tr/wp-content/uploads/2025/12/kurumsal_kimlik_03.jpg",
    ],
  },
  {
    slug: "kurumsal-kimlik",
    title: "Kurumsal Kimlik",
    shortTitle: "Kurumsal Kimlik",
    description:
      "Logo, renk paleti, tipografi ve kurumsal materyallerle tutarlı bir marka dili oluşturuyoruz.",
    image: "https://www.grafika.com.tr/wp-content/uploads/2025/12/kurumsal_kimlik_03.jpg",
    highlights: [
      "Kurumsal kimlik kılavuzu",
      "Kartvizit ve antetli kağıt",
      "Dijital ve basılı materyaller",
      "Marka tutarlılığı danışmanlığı",
    ],
    gallery: [
      "https://www.grafika.com.tr/wp-content/uploads/2025/12/kurumsal_kimlik_03.jpg",
    ],
  },
  {
    slug: "afis-ve-poster",
    title: "Afiş ve Poster",
    shortTitle: "Afiş & Poster",
    description:
      "Etkinlik, kampanya ve tanıtım afişlerinde yaratıcı tasarım ve yüksek kaliteli baskı çözümleri.",
    image: "https://www.grafika.com.tr/wp-content/uploads/2025/12/kurumsal_kimlik_03.jpg",
    highlights: [
      "Etkinlik afişleri",
      "Dijital ve offset baskı",
      "Geniş format uygulamalar",
      "Hızlı üretim süreçleri",
    ],
    gallery: [],
  },
  {
    slug: "gazete-ilani",
    title: "Gazete İlanı",
    shortTitle: "Gazete İlanı",
    description:
      "Basın ilanlarında etkili görsel düzen, doğru format ve zamanında teslimat.",
    image: "https://www.grafika.com.tr/wp-content/uploads/2025/12/kurumsal_kimlik_03.jpg",
    highlights: [
      "Gazete ilan tasarımı",
      "Format ve teknik uyumluluk",
      "Acil ilan desteği",
      "Kurumsal iletişim materyalleri",
    ],
    gallery: [],
  },
  {
    slug: "pr-ve-organizasyon",
    title: "PR ve Organizasyon",
    shortTitle: "PR & Organizasyon",
    description:
      "Lansman, fuar ve kurumsal etkinliklerde tanıtım materyalleri ve organizasyon desteği.",
    image: "https://www.grafika.com.tr/wp-content/uploads/2025/12/2015-12-14_292255222.jpeg",
    highlights: [
      "Etkinlik tanıtım materyalleri",
      "Basın bülteni ve davetiye tasarımı",
      "Fuar organizasyon desteği",
      "Kurumsal iletişim danışmanlığı",
    ],
    gallery: [
      "https://www.grafika.com.tr/wp-content/uploads/2025/12/2015-12-14_292255222.jpeg",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mustafa Demirkan",
    role: "Faculty of Architecture & Engineering",
    company: "European University of Lefke",
    quote:
      "Prestijli bir firmayı ancak tasarım ve yapım düzeyi yüksek olan bir stant yansıtabilir. Grafika ekibi, stant tasarımı ve üretiminde amaçladığı yaratıcılığı çok nitelikli eserlerle sağlamıştır.",
    image:
      "https://www.grafika.com.tr/wp-content/uploads/2025/12/mustafa-demirkan-250x250-1.jpg",
  },
  {
    name: "Ayşe Füsun Tunç",
    role: "Tanıtım ve Halkla İlişkiler",
    company: "Savronik",
    quote:
      "Üç ayrı fuarda tarafınızdan imal edilen standlarımız, müşterilerimiz ve yönetim kurulumuz tarafından büyük beğeni kazandı. Özverili çalışmanız ve titizliğiniz için teşekkür ederiz.",
    image:
      "https://www.grafika.com.tr/wp-content/uploads/2025/12/ayse-fusun-tunc.jpg",
  },
  {
    name: "Suhandan Özay",
    role: "Sanatçı",
    company: "",
    quote:
      "Grafika Ekibi ile çalışmaktan son derece mutluyum. Sergi katalogları, kitapçıklar ve grafik düzenlemelerinde en önemli destekçimdir.",
    image:
      "https://www.grafika.com.tr/wp-content/uploads/2025/12/suhandan-ozay-250x250-1.jpg",
  },
  {
    name: "Onur Altınbaş",
    role: "Genel Müdür",
    company: "Verifone Türkiye",
    quote:
      "Standımız çok beğenildi; verilen alanda dizaynımız ile maksimum fayda sağlandı. Fuar kurulum şartlarına bire bir uyum gösterildi.",
    image:
      "https://www.grafika.com.tr/wp-content/uploads/2025/12/onur-altinbas-250x250-1.jpg",
  },
  {
    name: "İbrahim Saruhan",
    role: "Yönetici",
    company: "Panasonic Klima / Saruhan Ltd.",
    quote:
      "Panasonic Klima markasına yakışır şekilde 40 adet konsept mağaza oluşturduk. Kalitesi, hızlı çözüm üretmesi ve doğru yönlendirmeleriyle bize destek oldular.",
    image:
      "https://www.grafika.com.tr/wp-content/uploads/2025/12/ibrahim-saruhan.jpg",
  },
  {
    name: "Yıldız Yağcı",
    role: "President",
    company: "Anatolian Artisans",
    quote:
      "Tasarım Yarışması'ndaki grafik, baskı ve yayın konularındaki teknik katkılarınız yarışmanın başarıyla sonuçlanmasında ne denli önemli olduğunu biliyorum.",
    image:
      "https://www.grafika.com.tr/wp-content/uploads/2025/12/yildiz-yagci-250x250-1.jpg",
  },
];

export const newsPosts: NewsPost[] = [
  {
    slug: "reklam-tabelalarini-led-ile-isiklandirin",
    title:
      "Reklam Tabelalarını LED ile Işıklandırın: Hem Tasarruf Edin, Hem Çevreyi Koruyun",
    excerpt:
      "İzmir Ticaret Odası, florasan ve akkor lambalar yerine LED aydınlatmayı hedefleyen enerji tasarrufu kampanyasını başlattı.",
    date: "2025-12-16",
  },
  {
    slug: "izmir-ticaret-odasi-reklam-2016ya-hazir",
    title: "İzmir Ticaret Odası, Reklam 2016'ya Hazır",
    excerpt:
      "İZTO 52. Reklamcılık Grubu, FESPA Eurasia 2015 Fuarı'na günübirlik ziyaret düzenledi.",
    date: "2025-12-16",
  },
  {
    slug: "times-meydanimizi-yaratalim",
    title: "Times Meydanımızı Yaratalım",
    excerpt:
      "Dijital reklam sektöründe yapay zekâya dayalı kişiselleştirilmiş reklamların ağırlık kazanacağı öngörülüyor.",
    date: "2025-12-16",
  },
];

export const referenceBrands = [
  "Piton",
  "CAF",
  "Yapı Merkezi",
  "Elsitel",
  "Savronik",
  "Yapıray",
  "Alstom",
  "Verifone",
  "Endüstri Teknik",
  "Ege Fren",
  "İdis",
  "Huğlu",
  "Özçakım Mermer",
  "Safe Steps",
  "İmbat",
  "Panasonic",
  "LG",
  "Relaxia",
  "Burçin Optik",
  "1453 Ottoman",
];

export const aboutSections = [
  {
    title: "Hakkımızda",
    body: "Grafika Tanıtım ve Tasarım Hizmetleri, 1996 yılından bu yana sektörde faaliyet gösteren, fuar standları ve iç mekân dekorasyonları alanında tasarım, üretim ve uygulama süreçlerini tek çatı altında yöneten yaratıcı bir tasarım markasıdır. Kurulduğu günden itibaren estetik, işlevsellik ve marka odaklı çözümler üretmeyi temel prensip olarak benimsemiştir.",
  },
  {
    title: "Fuar Stand Tasarımı",
    body: "Fuar standlarını sadece sergileme alanı olarak değil, marka deneyimi olarak ele alırız. Özgün tasarım dili, doğru malzeme seçimi ve detaylara verilen önemle ziyaretçilerin dikkatini çeken standlar tasarlar ve uygularız.",
  },
  {
    title: "İç Mekân Dekorasyonu",
    body: "Ofisler, showroomlar, ticari alanlar ve özel mekânlarda estetik kadar kullanım konforunu da ön planda tutarız. Marka kimliğini mekâna taşıyan, işlevsel ve etkileyici çözümler üretiriz.",
  },
  {
    title: "Uluslararası Deneyim",
    body: "Türkiye'nin yanı sıra Avrupa, Orta Doğu ve Türki Cumhuriyetlerinde; InnoTrans Berlin, EuroTier Hannover, Automechanika ve TRAKO gibi uluslararası fuarlarda özel tasarım standlar gerçekleştiriyoruz.",
  },
];

export const navLinks = [
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/fuar-standi", label: "Fuar Standı" },
  { href: "/ic-mekan-tasarimi-ve-uygulama", label: "İç Mekan" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/iletisim", label: "İletişim" },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getNewsPost(slug: string): NewsPost | undefined {
  return newsPosts.find((post) => post.slug === slug);
}
