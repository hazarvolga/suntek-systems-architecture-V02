// Corporate content from suntek-icerik/data/kurumsal/*.json
// CRITICAL: All content is verbatim from source - zero creative interpretation

export interface CorporateContent {
    contact: ContactInfo;
    company: CompanyDetails;
    careers: CareersInfo;
}

export interface ContactInfo {
    title: string;
    description: string;
    headquarters: {
        name: string;
        address: string;
        phone: string;
        fax: string;
        email: string;
    };
    financeOffice: {
        address: string;
        phone: string;
    };
    customerServiceLine: string;
    taxInfo: {
        taxOffice: string;
        taxNumber: string;
    };
    tradeRegistry: string;
    mapLink: string;
}

export interface CompanyDetails {
    companyType: string;
    mersis: string;
    tradeRegistryOffice: string;
    tradeRegistryNumber: string;
    tradeName: string;
    address: string;
    capitalPledged: string;
    capitalPaid: string;
    registrationDate: string;
    taxOffice: string;
    taxNumber: string;
    phone: string;
    fax: string;
    website: string;
    boardChairman: {
        name: string;
        cv: string;
    };
}

export interface CareersInfo {
    title: string;
    openPositions: {
        title: string;
        location: string;
        postedDate: string;
        applyLink: string;
    }[];
    internships: {
        summer: {
            title: string;
            description: string;
        };
        winter: {
            title: string;
            description: string;
        };
        applicationFormLink: string;
    };
}

// Source: suntek-icerik/data/kurumsal/contact.json
export const contactContent: ContactInfo = {
    title: "İletişim",
    description: "Suntek İleri Teknoloji Şirketi daha dijital bir geleceğe güçlü ve hızlı bir şekilde hazırlanmak için bizimle iletişime geçiniz",
    headquarters: {
        name: "Suntek İleri Teknolojiler A.Ş. - Genel Merkez",
        address: "Küçükbakkalköy Mah. Kocasinan Cad. Selvili Sok, Canan Business Center No:4 K:10 D:68 34755 Ataşehir / İstanbul / Türkiye",
        phone: "+90(216)2322230",
        fax: "02162322230",
        email: "info@suntek.com.tr"
    },
    financeOffice: {
        address: "Küçükbakkalköy Mah. Kayışdağı Cad Serdar Sok No:2/8 34755 Ataşehir / İstanbul / Türkiye",
        phone: "+90(216)2322230"
    },
    customerServiceLine: "0216 232 22 30",
    taxInfo: {
        taxOffice: "İstanbul – Kozyatağı Vergi Dairesi",
        taxNumber: "7840624083"
    },
    tradeRegistry: "258257-5",
    mapLink: "https://goo.gl/maps/bV3ipTkURC8STjiZ6"
};

// Source: suntek-icerik/data/kurumsal/sirketbilgileri.json
export const companyDetails: CompanyDetails = {
    companyType: "A.Ş.",
    mersis: "0784062408300001",
    tradeRegistryOffice: "İSTANBUL",
    tradeRegistryNumber: "258257-5",
    tradeName: "SUNTEK İLERİ TEKNOLOJİLER A.Ş.",
    address: "Küçükbakkalköy Mah. KocaSinan Cad Selvili Sok No:2/68 ATAŞEHİR/ İSTANBUL",
    capitalPledged: "100.000",
    capitalPaid: "100.000",
    registrationDate: "10.08.2020",
    taxOffice: "İSTANBUL – KOZYATAĞI Vergi Dairesi",
    taxNumber: "7840624083",
    phone: "02162322230",
    fax: "02162322230",
    website: "www.suntek.com.tr",
    boardChairman: {
        name: "Ali Afşin Surlu",
        cv: "" // Empty in source
    }
};

// Source: suntek-icerik/data/kurumsal/insankaynaklari-kariyer.json
export const careersContent: CareersInfo = {
    title: "Açık Pozisyonlar",
    openPositions: [
        {
            title: "Satış Uzmanı",
            location: "İstanbul",
            postedDate: "07.11.2022",
            applyLink: "/careers/apply"
        },
        {
            title: "Satış Destek Uzmanı",
            location: "İstanbul",
            postedDate: "07.11.2022",
            applyLink: "/careers/apply"
        },
        {
            title: "HelpDesk Uzmanı",
            location: "İstanbul",
            postedDate: "07.11.2022",
            applyLink: "/careers/apply"
        }
    ],
    internships: {
        summer: {
            title: "YAZ DÖNEMİ",
            description: "Üniversitelerin 3. ve 4. sınıflarında öğrenim gören ve staj yapmak isteyen öğrenciler için yaz dönemlerinde staj imkanımız bulunuyor."
        },
        winter: {
            title: "KIŞ DÖNEMİ",
            description: "Kış dönemi için lise öğrencileri değerlendiriliyor. Meslek ve ticaret lisesi öğrencileri için okul döneminde staj imkanımız bulunuyor."
        },
        applicationFormLink: "/wp-content/uploads/2020/09/SUNTEK-STAJ-BASVURU-FORMU.docx"
    }
};

export const corporateContent: CorporateContent = {
    contact: contactContent,
    company: companyDetails,
    careers: careersContent
};
