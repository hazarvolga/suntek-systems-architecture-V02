import { ProjectsPageContent } from "../schema";

export const projectsContent: ProjectsPageContent = {
    hero: {
        sysCode: "PRJ_01",
        badge: "Başarı Hikayeleri",
        title: "Gerçekleştirdiğimiz <span class='text-primary'>Referans Projeler</span>",
        description: "Farklı sektörlerdeki müşterilerimiz için hayata geçirdiğimiz dijital dönüşüm, altyapı ve güvenlik projelerinden seçkiler.",
        backgroundImage: "/images/hero/projects-hero.webp"
    },
    items: [
        {
            id: "prj-wifi",
            slug: "acik-alan-wifi-calismasi",
            title: "Açık Alan WiFi Çalışması",
            description: "Geniş ölçekli açık alanlar için yüksek yoğunluklu kablosuz ağ altyapısının planlanması ve kurulumu.",
            client: "Kamu Kurumu",
            location: "İstanbul",
            year: "2023",
            category: "Altyapı",
            tags: ["Network", "WiFi", "Dış Ortam"],
            image: "/images/projects/wifi-project.webp"
        },
        {
            id: "prj-data-center",
            slug: "veri-merkezi-cozumleri",
            title: "Veri Merkezi Modernizasyonu",
            description: "Mevcut veri merkezinin ISO 27001 standartlarına uygun olarak yenilenmesi, iklimlendirme ve enerji altyapısının güçlendirilmesi.",
            client: "Finans Sektörü",
            location: "Ankara",
            year: "2022",
            category: "Veri Merkezi",
            tags: ["Data Center", "Enerji", "Soğutma"],
            image: "/images/projects/datacenter.webp"
        },
        {
            id: "prj-fiber",
            slug: "fiber-optik-kablolama",
            title: "Kampüs Fiber Optik Altyapısı",
            description: "Üniversite kampüsü genelinde binalar arası yüksek hızlı fiber optik omurga kurulumu ve sonlandırma işlemleri.",
            client: "Üniversite",
            location: "İzmir",
            year: "2023",
            category: "Altyapı",
            tags: ["Fiber Optik", "Yapısal Kablolama"],
            image: "/images/projects/fiber.webp"
        },
        {
            id: "prj-hotel",
            slug: "the-museum-hotel",
            title: "The Museum Hotel Teknoloji Entegrasyonu",
            description: "Lüks otel projesi için IPTV, oda otomasyonu, GPON altyapısı ve tüm zayıf akım sistemlerinin entegre edilmesi.",
            client: "The Museum Hotel",
            location: "Antakya",
            year: "2021",
            category: "Otelcilik",
            tags: ["Otel Otomasyonu", "IPTV", "GPON"],
            image: "/images/projects/museum-hotel.webp"
        },
        {
            id: "prj-sumitomo",
            slug: "sumitomo-chemical-eu",
            title: "Sumitomo Chemical BT Altyapısı",
            description: "Sumitomo Chemical Avrupa ofisleri için standartlara uygun BT altyapı kurulumu ve sistem odası tasarımı.",
            client: "Sumitomo Chemical",
            location: "Avrupa",
            year: "2022",
            category: "Endüstri",
            tags: ["IT Altyapı", "Sistem Odası"],
            image: "/images/projects/sumitomo.webp"
        },
        {
            id: "prj-3d-office",
            slug: "yazilim3d-ofis",
            title: "Yazılım3D Ofis Teknoloji Projesi",
            description: "Yazılım ve tasarım ofisi için yüksek performanslı ağ altyapısı ve workstation sistemlerinin kurulumu.",
            client: "Yazılım3D",
            location: "İstanbul",
            year: "2023",
            category: "Ofis",
            tags: ["Ofis Teknolojileri", "Workstation"],
            image: "/images/projects/3d-office.webp"
        },
        // Source: suntek-icerik/data/portfolio/yazilim3d-ofis.json
        {
            id: "prj-yazilim3d",
            slug: "yazilim3d-ofis",
            title: "Yazılım3D Ofis",
            description: "Suntek olarak Yazılım3D ofisinin fiber ve kablolama altyapısını güçlendirmek için en iyi çözümleri sunduk. Güvenilir teknoloji hizmetlerimizle, ofisinizin internet hızını artırarak daha verimli çalışmanıza yardımcı oluyoruz.",
            client: "Yazılım3D",
            location: "İstanbul",
            year: "2023",
            category: "Ofis",
            tags: ["Fiber Optik", "Kablolama", "Ofis Altyapısı"],
            image: "/images/yazilim3d-ofis/yazilim3d-ofis_6542.webp"
        },
        // Source: suntek-icerik/data/portfolio/istanbul-cup-tenis-turnuvasi.json
        {
            id: "prj-istanbul-cup",
            slug: "istanbul-cup-tenis-turnuvasi",
            title: "İstanbul Cup Tenis Turnuvası",
            description: "Suntek olarak İstanbul Cup Tenis Turnuvasının kablolama altyapısını güçlendirmek için en iyi çözümleri sunduk. Profesyonel ekibimizle gerçekleştirdiğimiz çalışmalarla, güvenli ve hızlı bir ağ altyapısı oluşturarak işinizin kesintisiz devam etmesini sağlıyoruz.",
            client: "İstanbul Cup",
            location: "İstanbul",
            year: "2023",
            category: "Etkinlik",
            tags: ["Açık Alan WiFi", "Etkinlik Altyapısı", "Network"],
            image: "/images/istanbul-cup-tenis-turnuvasi/istanbul_cup_heyecani_basliyor_h45170_1230.jpg"
        },
        // Source: suntek-icerik/data/project-type/acik-alan-wifi-calismasi.json
        {
            id: "prj-acik-alan-wifi",
            slug: "acik-alan-wifi-calismasi",
            title: "Açık Alan Wifi Çalışması",
            description: "Geniş ölçekli açık alanlar için yüksek yoğunluklu kablosuz ağ altyapısının planlanması ve kurulumu. İstanbul Cup Tenis Turnuvası ve benzeri etkinlikler için özel çözümler.",
            client: "Kamu - Özel Sektör",
            location: "İstanbul",
            year: "2023",
            category: "Altyapı",
            tags: ["WiFi", "Açık Alan", "Kablosuz Ağ"],
            image: "/images/acik-alan-wifi-calismasi/istanbul_cup_heyecani_basliyor_h45170_3168.jpg"
        }
    ]
};
