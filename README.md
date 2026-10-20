# NovelAquatech Website

A modern, responsive website for NovelAquatech's IoT solutions built with Next.js and managed through PagesCMS for easy content updates.

## Portal demo compatibility

`src/pages/api/verify-otp.tsx` keeps the existing OTP-to-company-login handoff. Configure server-only `DEMO_FARMING_PASSWORD`, `DEMO_ENGINEERING_PASSWORD`, and `DEMO_MONITOR_PASSWORD` variables in Vercel. Do not use `NEXT_PUBLIC_*` names or commit credential values. Missing demo configuration returns 503 without consuming the OTP. Run `npm test` for the handoff tests.

The existing `?p=` handoff contains a Base64 password-equivalent. Base64 is not encryption, and moving credentials out of source does not remove their exposure in URLs or Git history. This release preserves demo compatibility; replacing that protocol and rotating the demo credentials remain separate security work.

## 🚀 Live Deployments

- **Production**: [noveaq-website.vercel.app](https://noveaq-website.vercel.app)
- **Development**: [noveaq-website-git-dev-deeplydiligents-projects.vercel.app](https://noveaq-website-git-dev-deeplydiligents-projects.vercel.app/)

## 🛠️ Technology Stack

- **[Next.js 14.1.0](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PagesCMS](https://pagescms.org/)** - Git-based content management system
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## 📁 Project Structure

```
noveaq-website/
├── .pages.yml              # PagesCMS configuration
├── content/                # Content managed by PagesCMS
│   ├── home-page.json     # Home page content
│   └── components.json    # Reusable components data
├── public/                 # Static assets
│   └── assets/            # Images and media files
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── interfaces/        # TypeScript interfaces
│   ├── lib/              # Utility functions
│   └── public/           # Static assets
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## 🚀 Getting Started Locally

### Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NovelAquatech/noveaq-website.git
   cd noveaq-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build production version
- `pnpm start` - Start production server

## 📝 Content Management with PagesCMS

This website uses PagesCMS for content management, which allows non-technical users to edit content through a web interface while keeping everything in Git.

### How PagesCMS Works

1. **Configuration**: The `.pages.yml` file defines the content structure and editing interface
2. **Content Storage**: All content is stored in JSON files in the `content/` directory
3. **Git-Based**: Changes are committed directly to the repository
4. **Live Updates**: Changes automatically trigger new deployments

### Content Structure

The website content is organized as follows:

- **Home Page** (`content/home-page.json`):
  - Hero section with title, subtitle, description, and call-to-action
  - Platform functions section with features and demo information
  - Use case descriptions

- **Components** (`content/components.json`):
  - Reusable assets like logos and profile images

### Making Content Changes

1. Navigate to the PagesCMS admin interface (URL provided by your deployment)
2. Edit content through the user-friendly interface
3. Save changes - they'll be automatically committed to Git
4. New deployment will be triggered automatically

## 🌐 Deployment

This project is configured for automatic deployment on Vercel.

### Automatic Deployment

- **Production Branch**: `main` → [noveaq-website.vercel.app](https://noveaq-website.vercel.app)
- **Development Branch**: `dev` → [noveaq-website-git-dev-deeplydiligents-projects.vercel.app](https://noveaq-website-git-dev-deeplydiligents-projects.vercel.app/)

### How It Works

1. Push changes to `main` branch for production deployment
2. Push changes to `dev` branch for development/staging deployment
3. Vercel automatically builds and deploys the changes
4. No manual intervention required

### Manual Deployment

If you need to deploy manually:

1. Build the project:
   ```bash
   pnpm build
   ```

2. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

## 🎨 Styling

The website uses Tailwind CSS for styling with a custom configuration:

- **Custom Colors**: Defined in `tailwind.config.ts`
- **Custom Spacing**: Extended spacing utilities
- **Custom Typography**: Additional font sizes and letter spacing
- **Custom Shadows**: Custom box-shadow utilities

## 🔧 Development Notes

- The project uses Next.js App Router (not Pages Router)
- All components are built with TypeScript for type safety
- Tailwind CSS classes are used throughout for consistent styling
- Images are optimized using Next.js Image component
- SEO metadata is configured in layout files

## 🤝 Contributing

1. Create a feature branch from `dev`
2. Make your changes
3. Test locally with `pnpm dev`
4. Push to your branch
5. Create a pull request to `dev` branch

## 📞 Support

For technical support or questions about the website, please contact the development team.

---

Built with ❤️ by the NovelAquatech team.
