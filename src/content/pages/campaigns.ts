import { CampaignsPageContent } from "../schema";

export const campaignsContent: CampaignsPageContent = {
    hero: {
        sysCode: "CMP_01",
        badge: "Fırsatlar",
        title: "Suntek <span class='text-primary'>Kampanyalar</span>",
        description: "En yeni teknoloji fırsatlarını ve dönemsel kampanyalarımızı takip edin.",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9yQ5zX8W2F4G3H1J7K6L0M9N5B4V8C3X2Z1"
    },
    items: [
        {
            slug: "fortinet-kampanya",
            title: "Fortinet Ürünlerinde 28 Şubat 2026 Tarihine Kadar Fırsat",
            image: "/images/kampanyalar/fortikampanya.jpeg",
            content: "Fortinet güvenlik duvarı ve ağ ürünlerinde özel indirimler.",
            link: "https://suntek.com.tr/ag-guvenligi/fortinet-firewall-kampanya-sayfasi/"
        }
    ]
};
