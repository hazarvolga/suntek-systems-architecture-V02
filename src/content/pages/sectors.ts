import { SectorsPageContent } from "../schema";

export const sectorsContent: SectorsPageContent = {
    hero: {
        sysCode: "SCT_01",
        badge: "Sektörel Çözümler",
        title: "Sektöre Özel <span class='text-primary'>Teknoloji Yaklaşımı</span>",
        description: "Eğitimden sağlığa, her sektörün kendine özgü ihtiyaçlarını anlıyor ve en uygun teknolojik çözümleri sunuyoruz. Mühendislik prensiplerimizle her sektöre matematiksel kesinlik getiriyoruz.",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_E52qAgQvVbgDqEq7YXZJpXN7Sg0bDbCx9_Q0ZtY-t3QsgcO_XlcgXwdGzhX9OOFYyX0PDe9L9Z8RjVBWfy2lcqM9Nlo6ysP7037E9T2lXtb3MypX3Y1Y62Gvkyk0E0amF45Q220XnKCCJ7NnRo49X-EueGZqK6YmnReu2M9wXy4E0qQ4Z9dD2fe2gLzJweFc7GZ9FkXnZGEKtyW7uP9KkyQ30L7__06t9X7R3q1F5G8Xy7A4Bw2C9k5E2L0J1Z4X8Q"
    },
    items: [
        {
            id: "egitim",
            title: "Eğitim",
            description: "Hibrit öğrenme sistemleri, kampüs ağ güvenliği ve uzaktan eğitim altyapıları ile eğitimde dijitalleşmeyi hızlandırıyoruz. Geleceğin kampüslerini bugünden inşa ediyoruz.",
            features: [
                "Hibrit Sınıf Entegrasyonu",
                "Kampüs Ağ Güvenliği",
                "Microsoft Eğitim Çözümleri",
                "Yük Dengeleme ve Kesintisiz Erişim"
            ],
            stats: [
                { label: "Okul Sayısı", value: "120+" },
                { label: "Kullanıcı", value: "100K+" }
            ]
        },
        {
            id: "saglik",
            title: "Sağlık",
            description: "Veri gizliliği, yüksek erişilebilirlik ve kesintisiz ağ çözümleri ile sağlık kuruluşlarının dijital altyapısını güçlendiriyoruz. Hayat kurtaran teknolojiler için %100 uptime hedefliyoruz.",
            features: [
                "KVKK ve Veri Gizliliği",
                "7/24 Kesintisiz Ağ Erişimi",
                "Tıbbi Görüntü Arşivleme Sistemleri",
                "Teletıp Altyapı Desteği"
            ],
            stats: [
                { label: "Hastane Sayısı", value: "45+" },
                { label: "Veri Güvenliği", value: "100%" }
            ]
        },
        {
            id: "ucretli-perakende",
            title: "Perakende",
            description: "Akıllı mağaza çözümleri, stok optimizasyonu ve güvenli ödeme sistemleri ile perakende sektöründe verimliliği artırıyoruz. Müşteri deneyimini veriyle optimize ediyoruz.",
            features: [
                "Akıllı Envanter Yönetimi",
                "Güvenli Ödeme Altyapıları",
                "Müşteri Analitiği",
                "Mağaza İçi Ağ Çözümleri"
            ],
            stats: [
                { label: "Mağaza Lokasyonu", value: "500+" },
                { label: "İşlem Hızı", value: "2x" }
            ]
        }
    ]
};
