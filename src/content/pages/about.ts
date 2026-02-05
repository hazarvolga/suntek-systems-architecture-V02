// About page content from suntek-icerik/data/kurumsal/hakkimizda.json
// CRITICAL: All content is verbatim from source - zero creative interpretation

export interface AboutContent {
    hero: {
        badge: string;
        title: string;
        description: string;
    };
    timeline: TimelineEvent[];
    stats: StatItem[];
    partners: {
        title: string;
        categories: PartnerCategory[];
    };
}

export interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    focusLabel: string;
    focusValue: string;
    impactLabel: string;
    impactValue: string;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface PartnerCategory {
    name: string;
    logos: string[];
}

// Source: suntek-icerik/data/kurumsal/hakkimizda.json
export const aboutContent: AboutContent = {
    hero: {
        badge: "Kurumsal",
        title: "Hakkımızda",
        description: "Suntek İleri Teknolojiler A.Ş. 2004 yılında kurulmuş, Türkiye'nin önde gelen bilişim altyapı ve güvenlik çözümleri şirketlerinden biridir."
    },
    timeline: [
        {
            year: "2004",
            title: "Kuruluş ve İlk Adımlar",
            description: "Suntek İleri Teknolojiler A.Ş., kurumsal BT altyapı ve güvenlik çözümleri sunmak üzere İstanbul'da kuruldu.",
            focusLabel: "Odak",
            focusValue: "BT Altyapı Çözümleri",
            impactLabel: "Etki",
            impactValue: "Kurumsal Müşteriler"
        },
        {
            year: "2014",
            title: "Siber Güvenlik Uzmanlaşması",
            description: "Artan siber tehdit ortamında, güvenlik operasyon merkezi (SOC) hizmetleri ve gelişmiş tehdit koruması sunmaya başladık.",
            focusLabel: "Odak",
            focusValue: "SOC Operasyonları",
            impactLabel: "Etki",
            impactValue: "100+ Kurumsal Müşteri"
        },
        {
            year: "2018",
            title: "Endüstri 4.0 Entegrasyonu",
            description: "Üretim teknolojilerini BT dünyası ile birleştiren ilk büyük ölçekli Endüstri 4.0 projesini hayata geçirdik. IoT veri analitiği ile operasyonel verimlilik maksimize edildi.",
            focusLabel: "Alan",
            focusValue: "IoT ve Veri Analitiği",
            impactLabel: "Kazanım",
            impactValue: "Operasyonel Verimlilik"
        },
        {
            year: "2021",
            title: "Bulut ve Hibrit Altyapı",
            description: "Bulut dönüşüm süreçlerinde Azure, AWS hybrid altyapılar tasarlayarak kurumsal müşterilere esnek ve ölçeklenebilir çözümler sunduk.",
            focusLabel: "Platform",
            focusValue: "Azure, AWS",
            impactLabel: "Sonuç",
            impactValue: "Hibrit Bulut Dönüşümleri"
        },
        {
            year: "2025",
            title: "AI ve Zero Trust Dönemi",
            description: "Yapay zeka destekli güvenlik sistemleri ve Zero Trust mimarisiyle modern tehdit ortamına karşı yeni nesil savunma mekanizmaları geliştirdik.",
            focusLabel: "Modernize",
            focusValue: "AI Savunma",
            impactLabel: "Standart",
            impactValue: "Küresel Uyumluluk"
        }
    ],
    stats: [
        { value: "20+", label: "Yıllık Deneyim" },
        { value: "500+", label: "Tamamlanan Proje" },
        { value: "100+", label: "Kurumsal Müşteri" },
        { value: "50+", label: "Uzman Kadro" }
    ],
    partners: {
        title: "İş ve Çözüm Ortaklarımız",
        categories: [
            {
                name: "Teknoloji Üreticileri",
                logos: [
                    "/images/hakkimizda/Hewlett_Packard_Enterprise_logo.svg_11zon_5359.jpg",
                    "/images/hakkimizda/Dell_EMC-Logo.wine_-scaled_6467.webp",
                    "/images/hakkimizda/IBM_logo-scaled_1698.webp",
                    "/images/hakkimizda/Lenovo_logo_2015.svg_11zon_1788.jpg",
                    "/images/hakkimizda/1280px-Cisco_logo_blue_2016.svg__2115.webp"
                ]
            },
            {
                name: "Güvenlik Çözümleri",
                logos: [
                    "/images/hakkimizda/fortinet-logo_3063.jpg",
                    "/images/hakkimizda/Kaspersky_Lab_logo.svg__2813.webp",
                    "/images/hakkimizda/Sophos-Logo.wine_-scaled_3138.webp",
                    "/images/hakkimizda/paloalto-logo_3231.jpg"
                ]
            },
            {
                name: "Yedekleme ve Depolama",
                logos: [
                    "/images/hakkimizda/Veeam_logo_2017_green-500_2671.png",
                    "/images/hakkimizda/kisspng-acronis-true-image-logo-acronis-backup-rec_2712.png",
                    "/images/hakkimizda/vembu-logo_2762.webp"
                ]
            }
        ]
    }
};
