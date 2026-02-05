import { ServicesPageContent } from "../schema";

export const servicesContent: ServicesPageContent = {
    hero: {
        sysCode: "SRV_01",
        badge: "Kurumsal Hizmetler",
        title: "Uçtan Uca <span class='text-primary'>Bilişim Çözümleri</span>",
        description: "Ağ güvenliğinden bulut yedeğine, felaket kurtarmadan endüstriyel altyapı kurulumuna kadar işletmenizin tüm teknolojik ihtiyaçlarını karşılıyoruz.",
        primaryCta: {
            label: "Hizmetlerimiz",
            href: "#services-list",
            variant: "primary"
        },
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_E52qAgQvVbgDqEq7YXZJpXN7Sg0bDbCx9_Q0ZtY-t3QsgcO_XlcgXwdGzhX9OOFYyX0PDe9L9Z8RjVBWfy2lcqM9Nlo6ysP7037E9T2lXtb3MypX3Y1Y62Gvkyk0E0amF45Q220XnKCCJ7NnRo49X-EueGZqK6YmnReu2M9wXy4E0qQ4Z9dD2fe2gLzJweFc7GZ9FkXnZGEKtyW7uP9KkyQ30L7__06t9X7R3q1F5G8Xy7A4Bw2C9k5E2L0J1Z4X8Q"
    },
    items: [
        {
            id: "dijital-donusum",
            title: "Dijital Dönüşüm ve Akıllı Sistemler",
            description: "Demand Solutions DSX ile tedarik zinciri ve üretim optimizasyonu sağlıyor, SAP S/4HANA dönüşüm projeleriyle ERP sistemlerinizi geleceğe taşıyoruz.",
            features: [
                "DSX Üretim Optimizasyonu",
                "Talep ve Tedarik Planlama",
                "SAP S/4HANA Akıllı Dönüşüm",
                "IBP/S&OP Stratejik Planlama"
            ],
            capabilities: [
                { label: "Proje Süresi", value: "16-24 Hafta" },
                { label: "Azalma", value: "Stok Maliyeti" }
            ],
            subFeatures: [
                {
                    title: "DSX Üretim Optimizasyonu",
                    description: "Demand Solutions DSX tedarik zinciri planınız ile üretiminiz arasındaki bağı kurar. Stokları azaltın, üretim kapasitenizi arttırın, planlamaya harcadığınız zamanı azaltın.",
                    features: [
                        "Talep Optimizasyonu: Müşteri seviyesinde planlama",
                        "Tedarik Optimizasyonu: Dinamik stok dengeleme",
                        "Üretim Optimizasyonu: Maliyet odaklı çizelgeleme",
                        "İşbirliği: Gerçek zamanlı paydaş verisi",
                        "Veri Görselleştirme: Canlı raporlar",
                        "IBP/S&OP: 10 yıllık vizyon ve senaryo planlama"
                    ],
                    image: "/images/services/digital-transformation/dx-1.jpg"
                },
                {
                    title: "Başarı Hikayesi: Thibiant International",
                    description: "\"Demand Solutions Üretim Optimizasyonu ile üç veya beş kişilik bir planlama ekibi yerine sadece bir kişi üretim çizelgelememizi yapabiliyor.\" - Sergey Gulak, IT Direktörü",
                    features: [
                        "Optimizasyon: İhtiyaca göre anlık çizelgeleme",
                        "Dengeleme: Talep vs Kapasite",
                        "Senaryo Analizi: Maliyet ve süre karşılaştırma",
                        "Müşteri Memnuniyeti: Esnek teslimat tarihleri"
                    ],
                    image: "/images/services/digital-transformation/dx-2.jpg"
                },
                {
                    title: "Demand Management Bulut Çözümleri",
                    description: "Küresel çözümler sunan Demand Management, müşterilerinin tedarik zincirlerini uçtan uca optimize etmeleri için bulut çözümleri sağlar.",
                    features: [
                        "Talep & Tedarik Optimizasyonu",
                        "Üretim Optimizasyonu",
                        "Satış Operasyon Planlama (Entegre İş Planlaması)"
                    ],
                    image: "/images/services/digital-transformation/dx-3.jpg"
                },
                {
                    title: "SAP S/4HANA Akıllı Dönüşüm Fabrikası",
                    description: "Suntek Dönüşüm Fabrikası, SAP S/4HANA dönüşüm projelerini 16-24 hafta gibi kısa bir sürede hayata geçiriyor. Mevcut ERP sisteminizi dijital ortama hızla taşıyın.",
                    features: [
                        "Hız: 16-24 haftada canlı geçiş",
                        "Deneyim: 20+ Başarılı Dönüşüm, 25 Endüstri, 46 Yıl",
                        "Kapsam: 193 Ülke, 390,000 Müşteri"
                    ],
                    image: "/images/services/digital-transformation/sap-landing.jpg"
                },
                {
                    title: "Neden Bizi Tercih Etmelisiniz?",
                    description: "Geleceğe hazır, yönetilebilir ve profesyonel dönüşüm süreci.",
                    features: [
                        "Deneyimli: 200+ uzman kadro",
                        "Uygun Fiyatlı: Paket yaklaşımı",
                        "Hızlı: Kısa sürede devreye alma",
                        "Öngörülebilir: SAP Readiness Check ile risk yönetimi",
                        "Profesyonel: RACI matrisi ve şablon setleri"
                    ],
                    image: "/images/services/digital-transformation/why-us.png"
                },
                {
                    title: "Dönüşüm Paketi ve Avantajlar",
                    description: "Tek paket seçeneği ile Full Sistem Dönüşümü. Dönüşüm öncesi ve sonrası ihtiyaç duyulan tüm hizmetler dahil.",
                    features: [
                        "SAP Readiness Check Kontrolü",
                        "OSS Notes Yüklenmesi",
                        "CVI (Müşteri Tedarikçi Entegrasyonu)",
                        "Yeni GL Taşıması",
                        "En fazla 5 Şirket Kodu & 10 Yıllık Finansal Belge",
                        "FIORI Uygulamaları (Max 20)",
                        "Haftalık Güncelleme Toplantıları"
                    ],
                    image: "/images/services/digital-transformation/sap-process.jpg"
                }
            ]
        },
        {
            id: "teknoloji-danismanligi",
            title: "Teknoloji Danışmanlığı Hizmetleri",
            description: "Kurumsal BT envanterinizin yönetimi, bulut geçişleri ve dijital dönüşüm süreçlerinizde uçtan uca danışmanlık veriyoruz.",
            features: [
                "Gelişmiş BT Destek Hizmetleri",
                "Çoklu Bulut Yönetimi",
                "Sistem Entegrasyonu",
                "Maliyet Optimizasyonu"
            ],
            capabilities: [
                { label: "Model", value: "Hibrit / On-Prem" },
                { label: "Odak", value: "Verimlilik" }
            ],
            subFeatures: [
                {
                    title: "BT Envanter Yönetimi",
                    description: "Kurumunuzun donanım ve yazılım varlıklarının yaşam döngüsü yönetimi, lisans takibi ve maliyet optimizasyonu.",
                    features: ["Varlık Takibi", "Lisans Uyumluluğu", "Maliyet Analizi"]
                },
                {
                    title: "Bulut Geçiş Danışmanlığı",
                    description: "Azure, AWS veya Google Cloud platformlarına güvenli ve kesintisiz geçiş stratejilerinin belirlenmesi.",
                    features: ["Migrasyon Planı", "Hibrit Bulut Mimarisi", "Güvenlik Denetimi"]
                }
            ]
        },
        {
            id: "ag-guvenligi",
            title: "Ağ Güvenliği Çözümleri",
            description: "Yeni nesil güvenlik duvarı (NGFW), DDoS koruması, SD-WAN ve NAC çözümleriyle işletmenizi siber tehditlere karşı maksimum seviyede koruyoruz.",
            features: [
                "Yeni Nesil Güvenlik Duvarı (NGFW)",
                "DDoS Saldırı Koruma",
                "SD-WAN Yönetimi",
                "Ağ Erişim Kontrolü (NAC)"
            ],
            capabilities: [
                { label: "Partnerler", value: "Fortinet, Sophos" },
                { label: "Kapsam", value: "L3-L7 Koruma" }
            ],
            subFeatures: [
                {
                    title: "Yeni Nesil Güvenlik Duvarı (NGFW)",
                    description: "Uygulama kontrolü, IPS, antivirüs ve web filtreleme özelliklerini tek cihazda sunan bütünleşik güvenlik.",
                    features: ["Derin Paket Analizi", "Tehdit İstihbaratı", "SSL Denetimi"],
                    image: "/images/services/network-security/fortinet-firewall.jpg"
                },
                {
                    title: "Ağ Erişim Kontrolü (NAC)",
                    description: "Ağa bağlanan tüm cihazların kimlik doğrulamasını ve güvenlik politikalarına uyumluluğunu denetleyen sistemler.",
                    features: ["Cihaz Görünürlüğü", "Otomatik Karantina", "Misafir Yönetimi"],
                    image: "/images/services/network-security/nac-solution.jpg"
                }
            ]
        },
        {
            id: "backup-recovery",
            title: "Olağanüstü Durum ve Yedekleme Çözümleri",
            description: "Kritik BT sistemleriniz için bulut yedekleme ve felaket kurtarma planları sunarak iş sürekliliğinizi garanti altına alıyoruz.",
            features: [
                "Acronis Siber Koruma",
                "Veeam Backup & Replication",
                "Fidye Yazılımı Koruması",
                "İş Sürekliliği Planlaması"
            ],
            capabilities: [
                { label: "Partnerler", value: "Veeam, Acronis" },
                { label: "SLA", value: "99.9% Uptime" }
            ],
            subFeatures: [
                {
                    title: "İş Sürekliliği ve Erişilebilirlik",
                    description: "Felaket anında kritik sistemlerin saniyeler içinde yedek lokasyondan çalışmaya başlamasını sağlayan çözüm.",
                    features: ["Anlık Replikasyon", "Otomatik Failover", "RPO/RTO Hedefleri"],
                    image: "/images/services/disaster-recovery/business-continuity.jpg"
                },
                {
                    title: "Veeam Backup & Replication",
                    description: "Sanal, fiziksel ve bulut iş yükleri için tek platformda lider veri koruma çözümü.",
                    features: ["Sanal Makine Yedekleme", "Fidye Yazılımı Koruması", "Hızlı Kurtarma"],
                    image: "/images/services/disaster-recovery/veeam-backup.jpg"
                }
            ]
        },
        {
            id: "entegre-guvenlik",
            title: "Entegre Güvenlik Sistemleri",
            description: "Kamera, geçiş kontrol, yangın ve alarm sistemlerini tek bir çatı altında toplayarak akıllı gözetim ve güvenlik sağlıyoruz.",
            features: [
                "Konuşlandırılabilir Gözetim",
                "Video Analiz ve İnsan Sayma",
                "Plaka Tanıma (LPR)",
                "Çevre Güvenliği"
            ],
            capabilities: [
                { label: "Marka", value: "Axis, Milestone" },
                { label: "Yönetim", value: "Merkezi" }
            ],
            subFeatures: [
                {
                    title: "Plaka Tanıma Sistemleri (LPR)",
                    description: "Yüksek doğruluk oranlı araç tanıma, otopark yönetimi, kampüs güvenliği ve şehir izleme entegrasyonu.",
                    features: ["Gece/Gündüz Tanıma", "Kara Liste Alarmı", "Hız İhlal Tespiti"],
                    image: "/images/services/integrated-security/lpr-system.jpg"
                },
                {
                    title: "Çevre Güvenlik Sistemleri",
                    description: "Tesis sınırlarını koruyan mikrodalga bariyerler, fiber optik algılama ve akıllı video analiz çözümleri.",
                    features: ["Sanal Çit", "İhlal Tespiti", "Radar Entegrasyonu"],
                    image: "/images/services/integrated-security/perimeter-security.jpg"
                },
                {
                    title: "Geçiş Kontrol ve Biyometri",
                    description: "Parmak izi, yüz tanıma ve kartlı geçiş sistemleri ile personel ve ziyaretçi trafiğinin güvenli yönetimi.",
                    features: ["Biyometrik Doğrulama", "Turnike Entegrasyonu", "Ziyaretçi Takibi"],
                    image: "/images/services/integrated-security/access-control.jpg"
                }
            ]
        },
        {
            id: "altyapi-hizmetleri",
            title: "Altyapı Hizmetleri",
            description: "Yapısal kablolama, fiber optik çözümler ve veri merkezi altyapı kurulumları ile kesintisiz iletişim altyapısı kuruyoruz.",
            features: [
                "Yapısal Kablolama",
                "Fiber Optik Sonlandırma",
                "Veri Merkezi Kurulumu",
                "UPS ve Enerji Altyapısı"
            ],
            capabilities: [
                { label: "Referans", value: "Vodafone Arena" },
                { label: "Standart", value: "ISO 27001" }
            ],
            subFeatures: [
                {
                    title: "Yapısal Kablolama Çözümleri",
                    description: "Cat6/6A/7 bakır kablolama, patch panel düzenlemesi ve sertifikasyon hizmetleri ile hatasız ağ altyapısı.",
                    features: ["ANSI/TIA/EIA Standartları", "Kablo Düzenleme", "Test ve Etiketleme"],
                    image: "/images/services/infrastructure/cabling.jpg"
                },
                {
                    title: "Fiber Optik Altyapı",
                    description: "Uzun mesafeli veri iletimi için fiber optik kablolama, füzyon sonlandırma (ek) ve OTDR test hizmetleri.",
                    features: ["Single/Multi Mode Fiber", "Core Hizalama", "Kayıp Analizi"],
                    image: "/images/services/infrastructure/fiber-optic.jpg"
                },
                {
                    title: "Veri Merkezi Kurulumu",
                    description: "Yükseltilmiş döşeme, hassas iklimlendirme, FM200 söndürme ve izleme sistemleri ile anahtar teslim veri merkezi.",
                    features: ["İklimlendirme", "Güç Yedekliliği (UPS/Jeneratör)", "Ortam İzleme"],
                    image: "/images/services/infrastructure/datacenter.jpg"
                }
            ]
        }
    ]
};
