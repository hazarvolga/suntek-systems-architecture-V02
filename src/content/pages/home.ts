import { HomePageContent } from "../schema";

export const homeContent: HomePageContent = {
    hero: {
        sysCode: "SYS_01",
        badge: "Teknoloji Çözüm Ortağınız",
        title: "Geleceği <span class='text-primary'>Suntek</span> ile Şekillendirin",
        description: "Bilişim ve otomasyon alanında 30 yıllık tecrübemizle, uçtan uca dijital dönüşüm, güvenlik ve altyapı çözümleri sunuyoruz.",
        primaryCta: {
            label: "Çözümlerimiz",
            href: "/solutions",
            variant: "primary"
        },
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX0Jw6F5ZJo4uhXC1RJFdTDXu4DzjzRKC9O1e2ThY6LqhkNxYfngxqfOjgJbc7AkwolgvMPO_Zm5Oaa50J2nWjZOwTCInv8KV3KN0VmfI3rIUyvnrT5cHHwB_jpX6cBDcb97mYAprAnN0lOJz_ws1FGu3CWg7oOqAiSZcxhbNVw3xtDlwhm5CWT5800R-4SbkCCJcdmxCEybSiUnvHZb2JRzyeEooizJ7J6eerMxOPTAkcrhcz8em0l4DJ2WmuwCNY3yRAUEG8y-j2"
    },
    sectors: {
        id: "sectors",
        sysCode: "SYS_02",
        heading: "Hizmetlerimiz",
        items: [
            {
                sysCode: "SRV_SEC",
                title: "AĞ GÜVENLİĞİ",
                description: "Yeni nesil güvenlik duvarları ve siber tehdit koruması ile işletmenizi güvende tutun.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgsLXXW1NIFB3WL5-eINt7wn9GBokI-iAvPe_XhrEhMSFRZ2tCTjfsu6grUIs5crwNltPGIH0wLrgNvMxRFA3Eol8sBd9alDCrzw-gi8q_9T-6RK8qsMfL7Anyq3tQ3xEIvFpqDFUZiSTEwndr9G_eMIDqiTrwJltVEaXnpKuvBvlzwsDMqdCnlBmm7IJyd1XsSofa6zEJunZ68OXXWS-UsWMTJ4gY6x3L2ue65NGg6O0EwQhMftLnCAJ6Utfrk9n7c0gYAd2APqUr",
                href: "/services#ag-guvenligi"
            },
            {
                sysCode: "SRV_INFRA",
                title: "ENERJİ & ALTYAPI",
                description: "Yapısal kablolama, fiber optik ve veri merkezi kurulumlarıyla kesintisiz iletişim.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXkLnGCy_6Uo9gUglFliXTxWoZyfi63kH4EdBn0KEfKTIsx88yyUv_WP6t4VncSf7NOJR-ZgmQtKpRJBQIBQ4fW7ACyiKm4hutMayswD-HB5IBAo_0E6Vr3N10WntNpXlyZ7WZ7XcqdnrqEsblQpM_vE3h1Z4D2aZ-Fk00TdIUmhovEG49YWl4unmPFYzdBXrPZsFAOY-OMvKi_k8WDgQPzpWZhs-n2swBfMJoWJj_ZsvX-etILDnz1tnvxKGvGnsm36z5T61Zcv3F",
                href: "/services#enerji-altyapi"
            },
            {
                sysCode: "SRV_EDU",
                title: "EĞİTİM TEKNOLOJİLERİ",
                description: "Microsoft Eğitim çözümleri ve hibrit sınıf kurulumlarıyla öğrenimin geleceğini tasarlıyoruz.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkUR3TVcdxA41R2XDwH9VlKwEyLtj4LZLPl9_lJSyfrvWPK0_vvere1__dwX72tFpej7-h2JMGomgkGHxsPInPq6oJFCBzEQO78jlz_4SJvbYtPud0xnPE5C79bhzG7RrJZqnsi6ZCCt_33IMCmZi8PajXLFm-2-yDzi6-_Vu6jDBOvdIMLSECHUAYDzcBfxe3JK0Pv__Z17ywcRdVAOyLz_B_qqwDKpq_E6bEuTLXKxrTvgh38x1eRITAEkVLR7LGuo2KrOW17QGh",
                href: "/services#egitim-hizmetleri"
            }
        ]
    },
    presence: {
        sysCode: "SYS_03",
        badge: "Referanslar",
        title: "Güçlü İş Ortaklıkları",
        description: "Fortinet, Microsoft, Veeam, Axis gibi dünya devleriyle çalışıyor, yüzlerce kurumsal müşteriye hizmet veriyoruz.",
        cta: {
            label: "BİZE ULAŞIN",
            href: "/contact",
            isExternal: false
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRkUYrFFGehbAlTHTbd4AZ3RQrPayvFzktpx5Ie0EoazsrGAny7rMpDHb-uChrNoDyvvGIKNd00JMxx9BhsiNhMsyiuSL5m1AW71-wV42CREO_zJvlrtQUcss_MtlW-UDa4eTTWerwyuOdAe4EWh3KRE5BH3Upx7JoZoQjyoFaabf3pn3CQ83xWyzq4mFEEHWRirwAg2O76vTLtQhiwT1Yg1P7SM8kya9YuVFOmjTswNWmlQOZqkhta8hDsdSYRvJ7iebKrxltBck5"
    }
};
