# Suntek - Premium Industrial Next.js Template

![Suntek Cover](public/og.jpg)

Suntek is a high-performance, industrial-grade Next.js template designed for engineering firms, tech consultancies, and cyber security agencies. It features a unique "Content Control Layer" allowing you to manage all site content via typed JSON files without touching the code.

## 🚀 Features

- **Next.js 16 (App Router)**: Built on the latest React framework.
- **Content Control Layer**: Manage text, links, and settings in `src/content/`.
- **TypeScript**: Fully typed for reliability and better DX.
- **Tailwind CSS**: Utility-first styling with a custom industrial design system.
- **SEO Optimized**: Built-in metadata management and semantic HTML.
- **Performance**: High Lighthouse scores, optimized images and fonts.

## 📦 Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/suntek.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    pnpm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

## 📝 Content Management

This template uses a **Content Control Layer** to separate content from logic. You can edit the website content by modifying the files in `src/content/`.

### 1. Global Settings
Edit `src/content/site-config.ts` to change the site name, description, and social links.

### 2. Navigation
Edit `src/content/navigation.ts` to update the Header and Footer links.

### 3. Pages
Each page has a corresponding file in `src/content/pages/`:
- **Home**: `src/content/pages/home.ts`
- **Services**: `src/content/pages/services.ts`
- **Projects**: `src/content/pages/projects.ts`
- **Contact**: `src/content/pages/contact.ts`

**Example: Changing the Hero Title**
Open `src/content/pages/home.ts` and update the `hero.title` field. The changes will reflect instantly.

## 🛠 customization

### Colors & Fonts
The design system is defined in `tailwind.config.ts`.
- **Colors**: Edit the `colors` object (primary, matte-slate, etc.).
- **Fonts**: The project uses `Space Grotesk`. You can change this in `src/app/layout.tsx`.

### Adding New Sections
1.  Define the content interface in `src/content/schema.ts`.
2.  Add the data to `src/content/pages/your-page.ts`.
3.  Create a component in `src/sections/your-page/` that consumes `useContent()`.

## 🚢 Deployment

This template is optimized for **Vercel** but can be deployed anywhere Next.js is hosted.

```bash
npm run build
npm start
```

## 📄 License

[MIT License](LICENSE)
