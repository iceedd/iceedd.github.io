# Microsoft 365 Engineer Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS, specifically designed to showcase Microsoft 365 engineering expertise and professional achievements.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, Vite, and modern JavaScript features
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Dark/Light Mode**: Automatic theme switching with user preference persistence
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Professional Content**: Comprehensive M365 engineer content and project showcases
- **SEO Optimized**: Complete meta tags, structured data, and performance optimizations
- **GitHub Pages Ready**: Pre-configured for easy deployment to GitHub Pages

## 🛠 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM (Hash Router for GitHub Pages)
- **Build Tool**: Vite with optimized build configuration
- **Deployment**: GitHub Pages with automated deployment

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn
- Git

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🚀 Deployment to GitHub Pages

### Option 1: Automatic Deployment

1. **Update configuration**:
   - Edit `vite.config.js` and update the `base` path to match your repository name
   - Update `package.json` homepage field

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Option 2: GitHub Actions (Recommended)

1. **Create GitHub Actions workflow** (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v3

       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'npm'

       - name: Install dependencies
         run: npm ci

       - name: Build
         run: npm run build

       - name: Deploy
         uses: peaceiris/actions-gh-pages@v3
         if: github.ref == 'refs/heads/main'
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch

## 🎨 Customization Guide

### 1. Personal Information
Edit `src/content.js` to update:
- Personal details (name, contact, location)
- Professional summary and bio
- Skills and certifications
- Project portfolio
- Social media links

### 2. Styling & Branding
- **Colors**: Update the color palette in `tailwind.config.js`
- **Fonts**: Modify font imports in `src/App.css`
- **Logo**: Replace the logo generation logic in `Header.jsx`
- **Favicon**: Replace files in the `/public` directory

### 3. Content Sections
Each major section has its own component:
- **Hero**: `src/components/Hero.jsx`
- **About**: `src/components/About.jsx`  
- **Skills**: `src/components/Skills.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Contact**: `src/components/Contact.jsx`

### 4. SEO & Meta Data
Update the following files:
- `index.html` - Meta tags and structured data
- `public/site.webmanifest` - Web app manifest
- Add your own `og-image.jpg` for social sharing

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Fluid typography and spacing
- Responsive grid layouts
- Touch-friendly navigation
- Optimized images and assets
- Progressive enhancement

## 🎯 Performance Optimizations

- **Bundle Splitting**: Automatic code splitting via Vite
- **Image Optimization**: Lazy loading and responsive images
- **Font Loading**: Optimized web font loading strategy
- **CSS Optimization**: PurgeCSS integration via TailwindCSS
- **Minification**: Automatic minification in production builds

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📄 Project Structure

```
portfolio-site/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   ├── contexts/          # React contexts (theme)
│   ├── content.js         # Site content configuration
│   ├── App.jsx            # Main app component
│   ├── App.css            # Global styles
│   └── main.jsx           # App entry point
├── index.html             # HTML template
├── tailwind.config.js     # TailwindCSS configuration
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

The portfolio uses a carefully crafted design system:

- **Typography**: Inter font family with responsive sizing
- **Colors**: Custom primary/secondary color palette with dark mode variants
- **Spacing**: Consistent spacing scale based on Tailwind defaults
- **Components**: Reusable UI components with consistent styling
- **Animations**: Subtle micro-interactions using Framer Motion

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all dependencies are installed and Node.js version is 16+
2. **Routing Issues**: Using HashRouter for GitHub Pages compatibility
3. **Image Loading**: Place images in `/public` directory for proper loading
4. **Theme Persistence**: Local storage is used to remember theme preference

### Environment Setup

If you encounter any issues:
1. Delete `node_modules` and run `npm install` again
2. Clear browser cache and local storage
3. Ensure you're using the correct Node.js version
4. Check that all required environment variables are set

## 📞 Support

For questions about customization or deployment:
- Create an issue in the repository
- Check the documentation
- Review the code comments for implementation details

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for Microsoft 365 professionals**