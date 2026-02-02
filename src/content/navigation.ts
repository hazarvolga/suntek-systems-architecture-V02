import { NavigationConfig } from "./schema";

export const navigation: NavigationConfig = {
    header: [
        { label: "Anasayfa", href: "/" },
        { label: "Hakkımızda", href: "/about" },
        { label: "Hizmetler", href: "/services" },
        { label: "Çözümler", href: "/solutions" },
        { label: "Sektörler", href: "/sectors" },
        { label: "Kariyer", href: "/careers" },
        { label: "İletişim", href: "/contact" }
    ],
    footer: {
        columns: [
            {
                title: "Kurumsal",
                links: [
                    { label: "Hakkımızda", href: "/about" },
                    { label: "Kariyer", href: "/careers" },
                    { label: "Kampanyalar", href: "/campaigns" },
                    { label: "Partnerler", href: "/partners" }
                ]
            },
            {
                title: "Hizmetler",
                links: [
                    { label: "Dijital Dönüşüm", href: "/services#dijital-donusum" },
                    { label: "Ağ Güvenliği", href: "/services#ag-guvenligi" },
                    { label: "Enerji ve Altyapı", href: "/services#enerji-altyapi" },
                    { label: "Danışmanlık", href: "/services#teknoloji-danismanligi" }
                ]
            },
            {
                title: "Yasal",
                links: [
                    { label: "Gizlilik Politikası", href: "/legal/privacy" },
                    { label: "Çerez Politikası", href: "/legal/cookies" }
                ]
            }
        ],
        bottomLinks: [
            { label: "Sitemap", href: "/sitemap.xml" }
        ]
    }
};
