import { HeroSection } from "../schema";

export interface ContactPageContent {
    hero: HeroSection;
    info: {
        address: string;
        phone: string;
        email: string;
        mapUrl: string;
    };
    social: {
        linkedin: string;
        twitter: string;
    };
}

export const contactContent: ContactPageContent = {
    hero: {
        sysCode: "CON_01",
        badge: "İletişim",
        title: "Link <span class='text-primary'>Established</span>",
        description: "Teknik ekiplerimizle iletişime geçin. Projeleriniz için uzman görüşü ve altyapı desteği sağlayalım.",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_E52qAgQvVbgDqEq7YXZJpXN7Sg0bDbCx9_Q0ZtY-t3QsgcO_XlcgXwdGzhX9OOFYyX0PDe9L9Z8RjVBWfy2lcqM9Nlo6ysP7037E9T2lXtb3MypX3Y1Y62Gvkyk0E0amF45Q220XnKCCJ7NnRo49X-EueGZqK6YmnReu2M9wXy4E0qQ4Z9dD2fe2gLzJweFc7GZ9FkXnZGEKtyW7uP9KkyQ30L7__06t9X7R3q1F5G8Xy7A4Bw2C9k5E2L0J1Z4X8Q"
    },
    info: {
        address: "Maslak Mah. Dereboyu Cad. No: 12 Kat: 4, Sarıyer, İstanbul",
        phone: "+90 (212) 345 67 89",
        email: "info@suntek.com.tr",
        mapUrl: "https://www.google.com/maps/embed?..."
    },
    social: {
        linkedin: "https://linkedin.com/company/suntek",
        twitter: "https://twitter.com/suntek"
    }
};
