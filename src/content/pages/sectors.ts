import { SectorsPageContent } from "../schema";

export const sectorsContent: SectorsPageContent = {
    hero: {
        sysCode: "SEC_01",
        title: "Sektörel <span class='text-primary'>Uzmanlık</span>",
        description: "Farklı endüstrilerin kendine özgü zorluklarını biliyor, sektöre özel terzi işi çözümler üretiyoruz.",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLtYyL9S3vXQzR4G7XhK9J2M_n5B8V1C6D4F3H0ZqW2YlI8J9K7X6G5V4C3B2N1M8L0K9J7H6G5F4D3S2A1Q0W9E8R7TY6U5I4O3P2"
    },
    items: [
        {
            id: "saglik-ve-yasam",
            title: "Sağlık Hizmetleri ve Yaşam Birimleri",
            description: "Modern sağlık sistemi için dijital dönüşümü hızlandırıyor, hasta verilerini ve hastane süreçlerini yapay zeka ile optimize ediyoruz.",
            features: [
                "Big Data Akıllı Veri Depolama (Röntgen/MR)",
                "Tekno SOS - Acil Yaşlı Bakım Çağrı Sistemi",
                "Laboratuvar Isı Takip ve Soğuk Zincir",
                "Tekno Room Mate (Hasta Bilgilendirme)",
                "Azot Tankı ve Genetik Materyal Takibi"
            ],
            stats: [
                { label: "Veri Güvenliği", value: "KVKK/HIPAA" },
                { label: "İzlenebilirlik", value: "100%" }
            ]
        },
        {
            id: "endustri-4-0",
            title: "Endüstri 4.0 ve İmalat",
            description: "Geleceğin fabrikalarını kuruyoruz. Üretim süreçlerini otonom hale getiriyor, robotik ve yapay zeka ile verimliliği artırıyoruz.",
            features: [
                "Akıllı Fabrika Dönüşümü",
                "IIoT (Endüstriyel Nesnelerin İnterneti)",
                "M2M (Makineden Makineye İletişim)",
                "Siber-Fiziksel Sistemler",
                "Kestirimci Bakım Algoritmaları"
            ],
            stats: [
                { label: "Verim Artışı", value: "%30+" },
                { label: "Hata Payı", value: "Min" }
            ]
        },
        {
            id: "egitim-sektoru",
            title: "Eğitim Kurumları",
            description: "Okul ve üniversiteler için uzaktan eğitim, hibrit sınıf ve kampüs güvenlik teknolojileri sağlıyoruz.",
            features: [
                "Hibrit Öğrenme Modelleri",
                "Kampüs Kart ve Geçiş Sistemleri",
                "Akıllı Tahta ve Sınıf Teknolojileri",
                "Öğrenci Bilgi Sistemleri Entegrasyonu"
            ],
            stats: [
                { label: "Erişilebilirlik", value: "7/24" },
                { label: "Entegrasyon", value: "Tam" }
            ]
        }
    ]
};
