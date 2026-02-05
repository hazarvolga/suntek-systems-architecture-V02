import { SolutionsPageContent } from "../schema";

export const solutionsContent: SolutionsPageContent = {
    hero: {
        sysCode: "SOL_01",
        badge: "Teknoloji Çözümlerimiz",
        title: "İşletmenizi <span class='text-primary'>Geleceğe Taşıyın</span>",
        description: "En karmaşık teknolojik zorlukları, yenilikçi ve sürdürülebilir çözümlerle basitleştiriyoruz. Veri odaklı stratejilerimizle dijital dönüşümün her aşamasında yanınızdayız.",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_E52qAgQvVbgDqEq7YXZJpXN7Sg0bDbCx9_Q0ZtY-t3QsgcO_XlcgXwdGzhX9OOFYyX0PDe9L9Z8RjVBWfy2lcqM9Nlo6ysP7037E9T2lXtb3MypX3Y1Y62Gvkyk0E0amF45Q220XnKCCJ7NnRo49X-EueGZqK6YmnReu2M9wXy4E0qQ4Z9dD2fe2gLzJweFc7GZ9FkXnZGEKtyW7uP9KkyQ30L7__06t9X7R3q1F5G8Xy7A4Bw2C9k5E2L0J1Z4X8Q"
    },
    items: [
        {
            id: "bulut-donusumu",
            title: "Bulut Dönüşümü",
            description: "Maliyetlerinizi optimize eden, esnek ve güvenli bulut geçiş stratejileri. Hibrit ve çoklu bulut mimarileri ile ölçeklenebilirliği garanti altına alıyoruz.",
            features: [
                "Re-platforming ve Modernizasyon",
                "Serverless Architecture Geçişi",
                "Veri Merkezi Bulut Migrasyonu",
                "Bulut Maliyet Optimizasyonu (FinOps)"
            ],
            capabilities: [
                { label: "Maliyet Tasarrufu", value: "30%" },
                { label: "Hız Artışı", value: "2x" }
            ]
        },
        {
            id: "siber-guvenlik-operasyonlari",
            title: "Siber Güvenlik Operasyonları (SOC)",
            description: "7/24 izleme ve anlık müdahale ile dijital varlıklarınız her an güvende. Proaktif tehdit avcılığı ve zafiyet yönetimi ile riskleri önceden belirliyoruz.",
            features: [
                "7/24 Tehdit İzleme ve Yanıt",
                "Endpoint Detection & Response (EDR)",
                "Zafiyet Tarama ve Yönetimi",
                "Olay Müdahale ve Adli Analiz"
            ],
            capabilities: [
                { label: "Yanıt Süresi", value: "< 15dk" },
                { label: "İzleme Gücü", value: "7/24" }
            ]
        },
        {
            id: "veri-analitigi-ai",
            title: "Veri Analitiği ve Yapay Zeka",
            description: "Büyük verinizden anlamlı içgörüler çıkararak karar verme süreçlerinizi güçlendiriyoruz. Makine öğrenmesi ve AI modelleri ile operasyonel verimliliği maksimize edin.",
            features: [
                "Tahminleyici Analitik",
                "Görüntü İşleme ve Analiz",
                "Büyük Veri Mimarisi Kurulumu",
                "Özel AI Model Geliştirme"
            ],
            capabilities: [
                { label: "Veri İşleme", value: "Petabyte+" },
                { label: "Doğruluk Payı", value: "98%+" }
            ]
        }
    ]
};
