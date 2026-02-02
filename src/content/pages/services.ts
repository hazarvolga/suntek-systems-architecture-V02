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
            ]
        }
    ]
};
