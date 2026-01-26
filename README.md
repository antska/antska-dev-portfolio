# Antska Dev Portfolio

A modern, fast, and brutalist-styled developer portfolio built with **Astro**, **React**, **TypeScript**, and **Sanity CMS**.

## 🚀 Features

- **⚡ Lightning Fast** - Built with Astro for optimal performance and minimal JavaScript
- **🎨 Brutalist Design** - Bold, raw, and unapologetic aesthetic
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **🔍 SEO Optimized** - Meta tags, structured data, and sitemap generation
- **♿ Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation
- **📝 CMS Integration** - Content managed through Sanity Studio
- **🎭 Smooth Transitions** - Astro View Transitions for seamless navigation
- **🌙 Dark Theme** - Modern dark color scheme with high contrast

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[React](https://react.dev/)** - UI components
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Sanity CMS](https://www.sanity.io/)** - Headless content management
- **[Vite](https://vitejs.dev/)** - Build tool

## 📦 Project Structure

```
antska-dev-portfolio/
├── public/              # Static assets
├── sanity/              # Sanity CMS configuration
│   ├── schemas/        # Content schemas
│   └── scripts/        # Import/utility scripts
├── src/
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Page layouts
│   ├── lib/            # Utilities and constants
│   ├── pages/          # Route pages
│   └── styles/         # Global styles
└── package.json
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Sanity account (optional, for CMS features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/antska-dev-portfolio.git
   cd antska-dev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Sanity project ID:
   ```env
   PUBLIC_SANITY_PROJECT_ID=your_project_id
   PUBLIC_SANITY_DATASET=production
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321)

### Sanity Studio Setup

1. **Install Sanity dependencies**
   ```bash
   cd sanity
   npm install
   ```

2. **Start Sanity Studio**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3333](http://localhost:3333)

3. **Import default data** (optional)
   ```bash
   npm run import
   ```

## 📜 Available Scripts

### Root Directory
- `npm run dev` - Start Astro dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run sanity` - Start Sanity Studio

### Sanity Directory
- `npm run dev` - Start Sanity Studio
- `npm run build` - Build Sanity Studio
- `npm run deploy` - Deploy Sanity Studio
- `npm run import` - Import default data

## 🎨 Customization

### Update Personal Information

- **Hero Section**: Edit `src/lib/constants.ts` → `HERO_DESCRIPTION`, `HERO_TITLE`
- **About Page**: Manage through Sanity Studio or edit `src/lib/constants.ts` → `DEFAULT_ABOUT`
- **Projects**: Add/edit in Sanity Studio or `src/lib/constants.ts` → `DEFAULT_PROJECTS`
- **Skills**: Manage in Sanity Studio or `src/lib/constants.ts` → `DEFAULT_SKILLS`

### Styling

The project uses Tailwind CSS with a custom brutalist theme. Main styles are defined in:
- `tailwind.config.mjs` - Tailwind configuration
- `src/styles/` - Global CSS files

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Connect repository in [Netlify](https://netlify.com)
3. Add environment variables
4. Deploy!

### Manual Build

```bash
npm run build
```
The `dist/` folder contains your static site ready to deploy.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Antonis Skandalis**

- Portfolio: [Your Website](https://yourwebsite.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Astro](https://astro.build/) for the amazing framework
- [Sanity](https://www.sanity.io/) for the headless CMS
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

Built with ❤️ using Astro
