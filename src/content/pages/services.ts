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
            id: "ag-guvenligi",
            title: "Ağ Güvenliği Çözümleri",
            description: "Suntek olarak, ağ güvenliği konusunda bütüncül bir yaklaşım benimsiyoruz. Güvenlik Duvarı (NGFW), DDoS koruması, SD-WAN ve NAC çözümleriyle işletmenizi siber tehditlere karşı maksimum seviyede koruyoruz.",
            features: [
                "Yeni Nesil Güvenlik Duvarı (NGFW)",
                "DDoS Saldırı Koruma ve Önleme",
                "SD-WAN ile Güvenli Ağ Yönetimi",
                "Ağ Erişim Kontrolü (NAC)",
                "SIEM (Olay Yönetimi ve Loglama)",
                "PAM (Yetkili Hesap Yönetimi)"
            ],
            capabilities: [
                { label: "Partnerler", value: "Fortinet, Sophos" },
                { label: "Kapsam", value: "L3-L7 Koruma" }
            ]
        },
        {
            id: "backup-recovery",
            title: "Olağanüstü Durum ve Yedekleme",
            description: "Küçük bir kesinti bile sizi rekabette dezavantajlı duruma sokabilir. İkincil altyapı masrafı olmadan kritik BT sistemleriniz için bulut yedekleme ve felaket kurtarma planları sunuyoruz.",
            features: [
                "Acronis Siber Koruma ve Yedekleme",
                "Veeam Backup & Replication",
                "Sanal ve Fiziksel Sunucu Yedekleme",
                "Fidye Yazılımı Koruması",
                "İş Sürekliliği Planlaması"
            ],
            capabilities: [
                { label: "Partnerler", value: "Veeam, Acronis" },
                { label: "SLA", value: "99.9% Uptime" }
            ]
        },
        {
            id: "enerji-altyapi",
            title: "Enerji ve Altyapı Hizmetleri",
            description: "İşletmeniz büyüdükçe kablo ve enerji altyapınızın da ölçeklenmesi gerekir. Yapısal kablolama, fiber optik çözümler ve veri merkezi altyapı kurulumları ile kesintisiz iletişim sağlıyoruz.",
            features: [
                "Yapısal Kablolama Çözümleri",
                "Fiber Optik Sonlandırma",
                "Veri Merkezi Kurulumu",
                "UPS ve Enerji Altyapısı",
                "Açık Alan Wi-Fi Projeleri",
                "CCTV ve Fiziksel Güvenlik Altyapısı"
            ],
            capabilities: [
                { label: "Referans", value: "Vodafone Arena" },
                { label: "Standart", value: "ISO 27001" }
            ]
        },
        {
            id: "teknoloji-danismanligi",
            title: "Teknoloji Danışmanlığı",
            description: "Kurumsal BT envanterinizin yönetimi, bulut geçişleri ve dijital dönüşüm süreçlerinizde uçtan uca danışmanlık veriyoruz. Sorunlar arızaya dönüşmeden proaktif destek sağlıyoruz.",
            features: [
                "Gelişmiş BT Destek Hizmetleri",
                "Çoklu Bulut Yönetimi",
                "Sistem Entegrasyonu",
                "Maliyet Optimizasyonu",
                "7/24 İzleme ve Destek",
                "Dış Kaynak (Outsourcing) Kullanımı"
            ],
            capabilities: [
                { label: "Model", value: "Hibrit / On-Prem" },
                { label: "Odak", value: "Verimlilik" }
            ]
        },
        {
            id: "egitim-hizmetleri",
            title: "Eğitim Teknolojileri",
            description: "Microsoft Eğitim çözümleri ile hibrit öğrenme sınıfları kuruyor, öğretmen ve öğrencilerin dijital yetkinliklerini artırıyoruz. K-12 ve yükseköğretim için modern eğitim araçları sunuyoruz.",
            features: [
                "Microsoft Teams Eğitim Entegrasyonu",
                "Hibrit Sınıf Kurulumu",
                "Office 365 Eğitimleri",
                "Uzaktan Eğitim Altyapısı",
                "LMS Entegrasyonları"
            ],
            capabilities: [
                { label: "Partner", value: "Microsoft Edu" },
                { label: "Kitle", value: "K-12, Üniversite" }
            ]
        }
    ]
};
