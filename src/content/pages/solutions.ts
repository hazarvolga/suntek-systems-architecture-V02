import { SolutionsPageContent } from "../schema";

export const solutionsContent: SolutionsPageContent = {
    hero: {
        sysCode: "SOL_01",
        title: "Yenilikçi <span class='text-primary'>Çözümler</span>",
        description: "İş süreçlerinizi dijital çağa taşıyan, verimliliği artıran ve güvenliği sağlayan entegre teknoloji paketleri.",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9yQ5zX8W2F4G3H1J7K6L0M9N5B4V8C3X2Z1"
    },
    items: [
        {
            id: "dijital-donusum",
            title: "Dijital Dönüşüm ve Akıllı Sistemler",
            description: "Demand Solutions DSX ile tedarik zinciri ve üretim optimizasyonu sağlıyor, SAP S/4HANA dönüşüm projeleriyle ERP sistemlerinizi geleceğe taşıyoruz.",
            features: [
                "DSX Üretim Optimizasyonu",
                "Talep ve Tedarik Planlama",
                "SAP S/4HANA Akıllı Dönüşüm Fabrikası",
                "Veri Görselleştirme",
                "IBP/S&OP Stratejik Planlama"
            ],
            capabilities: [
                { label: "Proje Süresi", value: "16-24 Hafta" },
                { label: "Azalma", value: "Stok Maliyeti" }
            ]
        },
        {
            id: "entegre-guvenlik",
            title: "Entegre Güvenlik Sistemleri",
            description: "Kamera, geçiş kontrol, yangın ve alarm sistemlerini tek bir çatı altında topluyoruz. Axis ve çözüm ortaklarımızla akıllı gözetim ve güvenlik sağlıyoruz.",
            features: [
                "Konuşlandırılabilir Gözetim",
                "Video Analiz ve İnsan Sayma",
                "Plaka Tanıma Sistemleri (LPR)",
                "Çevre ve Alan Güvenliği",
                "Genel Seslendirme ve Acil Anons"
            ],
            capabilities: [
                { label: "Marka", value: "Axis, Milestone" },
                { label: "Yönetim", value: "Merkezi" }
            ]
        }
    ]
};
