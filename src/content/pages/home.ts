import { HomePageContent } from "../schema";

export const homeContent: HomePageContent = {
    hero: {
        sysCode: "SYS_01",
        badge: "Technical Statement",
        title: "Forging <span class='text-primary'>advanced structures</span> with mathematical precision and engineering integrity.",
        description: "We deploy a rigorous methodology that merges architectural intent with computational structural design, ensuring performance benchmarks are met in the most challenging environments.",
        primaryCta: {
            label: "Explore Solutions",
            href: "/solutions",
            variant: "primary"
        },
        // Using existing image from HomeHero
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX0Jw6F5ZJo4uhXC1RJFdTDXu4DzjzRKC9O1e2ThY6LqhkNxYfngxqfOjgJbc7AkwolgvMPO_Zm5Oaa50J2nWjZOwTCInv8KV3KN0VmfI3rIUyvnrT5cHHwB_jpX6cBDcb97mYAprAnN0lOJz_ws1FGu3CWg7oOqAiSZcxhbNVw3xtDlwhm5CWT5800R-4SbkCCJcdmxCEybSiUnvHZb2JRzyeEooizJ7J6eerMxOPTAkcrhcz8em0l4DJ2WmuwCNY3yRAUEG8y-j2"
    },
    sectors: {
        id: "sectors",
        sysCode: "SYS_02",
        heading: "Active Sectors",
        items: [
            {
                sysCode: "SCTR_ED-01",
                title: "EDUCATION",
                description: "Complex academic environments requiring high-span structural stability and acoustic isolation frameworks.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkUR3TVcdxA41R2XDwH9VlKwEyLtj4LZLPl9_lJSyfrvWPK0_vvere1__dwX72tFpej7-h2JMGomgkGHxsPInPq6oJFCBzEQO78jlz_4SJvbYtPud0xnPE5C79bhzG7RrJZqnsi6ZCCt_33IMCmZi8PajXLFm-2-yDzi6-_Vu6jDBOvdIMLSECHUAYDzcBfxe3JK0Pv__Z17ywcRdVAOyLz_B_qqwDKpq_E6bEuTLXKxrTvgh38x1eRITAEkVLR7LGuo2KrOW17QGh"
            },
            {
                sysCode: "SCTR_HC-02",
                title: "HEALTHCARE",
                description: "Clean-room compliant frameworks with integrated vibration control for high-precision surgical suites.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgsLXXW1NIFB3WL5-eINt7wn9GBokI-iAvPe_XhrEhMSFRZ2tCTjfsu6grUIs5crwNltPGIH0wLrgNvMxRFA3Eol8sBd9alDCrzw-gi8q_9T-6RK8qsMfL7Anyq3tQ3xEIvFpqDFUZiSTEwndr9G_eMIDqiTrwJltVEaXnpKuvBvlzwsDMqdCnlBmm7IJyd1XsSofa6zEJunZ68OXXWS-UsWMTJ4gY6x3L2ue65NGg6O0EwQhMftLnCAJ6Utfrk9n7c0gYAd2APqUr"
            },
            {
                sysCode: "SCTR_IN-03",
                title: "INDUSTRY",
                description: "Heavy industrial skeletons engineered for dynamic loads and extreme material durability in corrosive settings.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXkLnGCy_6Uo9gUglFliXTxWoZyfi63kH4EdBn0KEfKTIsx88yyUv_WP6t4VncSf7NOJR-ZgmQtKpRJBQIBQ4fW7ACyiKm4hutMayswD-HB5IBAo_0E6Vr3N10WntNpXlyZ7WZ7XcqdnrqEsblQpM_vE3h1Z4D2aZ-Fk00TdIUmhovEG49YWl4unmPFYzdBXrPZsFAOY-OMvKi_k8WDgQPzpWZhs-n2swBfMJoWJj_ZsvX-etILDnz1tnvxKGvGnsm36z5T61Zcv3F"
            }
        ]
    },
    presence: {
        sysCode: "SYS_03",
        badge: "Network Presence",
        title: "Global Standards, Local Execution.",
        description: "Operating across international borders requires a unified technical language. We provide standardized engineering output that complies with local building codes worldwide.",
        cta: {
            label: "EXPLORE OPERATIONS",
            href: "/operations",
            isExternal: false
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRkUYrFFGehbAlTHTbd4AZ3RQrPayvFzktpx5Ie0EoazsrGAny7rMpDHb-uChrNoDyvvGIKNd00JMxx9BhsiNhMsyiuSL5m1AW71-wV42CREO_zJvlrtQUcss_MtlW-UDa4eTTWerwyuOdAe4EWh3KRE5BH3Upx7JoZoQjyoFaabf3pn3CQ83xWyzq4mFEEHWRirwAg2O76vTLtQhiwT1Yg1P7SM8kya9YuVFOmjTswNWmlQOZqkhta8hDsdSYRvJ7iebKrxltBck5"
    }
};
