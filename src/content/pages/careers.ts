import { CareersPageContent } from "../schema";

export const careersContent: CareersPageContent = {
    hero: {
        sysCode: "CORP_HR",
        badge: "İnsan Kaynakları",
        title: "Suntek Sizinle <span class='text-primary'>Güçlü</span>",
        description: "Vizyoner, işine hakim ve mutlu bir takım olarak geleceği birlikte şekillendiriyoruz.",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLtYyL9S3vXQzR4G7XhK9J2M_n5B8V1C6D4F3H0ZqW2YlI8J9K7X6G5V4C3B2N1M8L0K9J7H6G5F4D3S2A1Q0W9E8R7TY6U5I4O3P2"
    },
    intro: {
        title: "SUNTEK Olarak Biz Bir Aileyiz",
        content: "İş ortaklarımıza verdiğimiz kaliteli hizmeti eksiksiz ve kesintisiz yerine getirebilmenin bir ön koşulu en yeni teknolojilerden yararlanmaksa, diğeri; vizyoner, işine hakim, farklı uzmanlıklara sahip, mutlu bir takım olmaktır."
    },
    policies: [
        {
            title: "Performans Yönetimi",
            description: "Yönetici ve çalışan arasındaki güçlü iletişim, adil ücretlendirme ve hedeflere dayalı yetkinlik ölçümü.",
            icon: "TrendingUp"
        },
        {
            title: "Eğitim ve Gelişim",
            description: "Kişisel ve mesleki gelişimi destekleyen şirket içi ve özel eğitim programları.",
            icon: "BookOpen"
        },
        {
            title: "Kariyer Yönetimi",
            description: "Güçlü ve gelişime açık yönleri belirleyen birebir görüşmeler ve anketlerle motivasyon yönetimi.",
            icon: "Compass"
        },
        {
            title: "Ücret Yönetimi",
            description: "Başarı göstergeleri, yetenek ve deneyime uygun, adil ve rekabetçi ücret politikası.",
            icon: "Wallet"
        }
    ],
    openPositions: {
        title: "Açık Pozisyonlar",
        items: [
            {
                title: "Satış Uzmanı",
                location: "İstanbul",
                date: "07.11.2022",
                link: "https://suntek.com.tr/is-ilani-basvuru-form-sayfasi/"
            },
            {
                title: "Satış Destek Uzmanı",
                location: "İstanbul",
                date: "07.11.2022",
                link: "https://suntek.com.tr/is-ilani-basvuru-form-sayfasi/"
            },
            {
                title: "HelpDesk Uzmanı",
                location: "İstanbul",
                date: "07.11.2022",
                link: "https://suntek.com.tr/is-ilani-basvuru-form-sayfasi/"
            }
        ]
    },
    images: {
        performance: "/images/insankaynaklari/performans-yonetimi.webp",
        education: "/images/insankaynaklari/egitim-ve-gelisim.webp",
        career: "/images/insankaynaklari/kariyer-yonetimi.webp",
        salary: "/images/insankaynaklari/maas-yonetimi.webp"
    }
};
